// pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-Cream">
      <div className="flex flex-col items-center">
        <img
          src="https://img.icons8.com/?size=200&id=O63wamyU8HXl&format=png&color=000000"
          alt="Lost Leaf"
          className="w-64 h-64 mb-6 animate-bounce"
        />
        <h1 className="text-4xl font-bold mb-4 text-Tertiary">Oops! Page Not Found</h1>
        <p className="text-lg mb-6 text-Tertiary">It looks like you’re lost in the digital forest.</p>
        <Link href="/">
          <button className="px-6 py-3 bg-Primary text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300">
            Take Me Home
          </button>
        </Link>
        <div className="mt-8 w-full max-w-md">
        </div>
      </div>
    </div>
  );
}
