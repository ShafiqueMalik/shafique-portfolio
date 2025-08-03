export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
        <p className="text-sm text-gray-500 dark:text-gray-300">Loading, please wait...</p>
      </div>
    </div>
  );
}
