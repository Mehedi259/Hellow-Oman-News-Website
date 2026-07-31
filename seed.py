import urllib.request, json
from api.models import Post, Category
from django.contrib.auth import get_user_model
User = get_user_model()
from django.utils.text import slugify

# Get or create author (admin)
author = User.objects.filter(is_superuser=True).first()
if not author:
    author = User.objects.first()

url = "https://raw.githubusercontent.com/Mehedi259/Hellow-Oman-News-Website/main/src/data/backup/posts.json"
req = urllib.request.urlopen(url)
data = json.loads(req.read().decode())

def get_category_name(title, index):
    if any(k in title for k in ['ওমান', 'প্রবাস', 'মাস্কাট', 'সালালাহ', 'বারকা', 'সুইক']): return 'প্রবাস'
    if any(k in title for k in ['বাংলাদেশ', 'ঢাকা', 'সিলেট', 'চট্টগ্রাম', 'উত্তরা']): return 'বাংলাদেশ'
    if any(k in title for k in ['সৌদি', 'দুবাই', 'আমিরাত', 'কাতার', 'শারজাহ']): return 'মধ্যপ্রাচ্য'
    if any(k in title for k in ['ফুটবল', 'ক্রিকেট', 'বিশ্বকাপ']): return 'খেলাধুলা'
    cats = ["সর্বশেষ", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি"]
    return cats[index % len(cats)]

for idx, p in enumerate(data):
    title = p['title'].replace('&amp;lsquo;', "'").replace('&amp;rsquo;', "'").replace('&amp;#039;', "'").replace('&amp;ldquo;', '"').replace('&amp;rdquo;', '"').replace('&amp;quot;', '"')
    
    # Category
    cat_name = get_category_name(title, idx)
    category, _ = Category.objects.get_or_create(name=cat_name, defaults={'slug': slugify(cat_name) or 'cat-'+str(idx)})
    
    # Image fallback
    image = p.get('localImage') or p.get('originalImageUrl') or "/images/hero_news_oman_1783894879641.png"
    
    # Description
    desc = p.get('description', '') or p.get('content', '')
    desc = desc.replace('&#160;', ' ').replace('&amp;', '&').replace('&quot;', '"')
    
    import uuid
    if not Post.objects.filter(title=title).exists():
        Post.objects.create(
            title=title,
            slug=slugify(title, allow_unicode=True) or str(uuid.uuid4())[:8],
            content=desc,
            excerpt=desc[:200],
            category=category,
            author=author,
            image=image,
            status='published'
        )
        print(f"Created: {title}")
print("Done seeding posts.")
