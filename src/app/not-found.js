export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">404</h1>
      <p className="text-gray-700 dark:text-gray-300">Page not found.</p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Go Home
      </a>
    </div>
  );
}
