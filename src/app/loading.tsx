export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-foreground">লোড হচ্ছে...</p>
      </div>
    </div>
  );
}
