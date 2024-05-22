TypeScript
// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">My Website</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col md:flex-row mt-8">
        <section className="w-full md:w-2/3 px-4">
          <h2>Main Content</h2>
          <p>This is the main content area of your website. You can add any type of content here, such as text, images, videos, or forms.</p>
        </section>
        <aside className="w-full md:w-1/3 mt-4 md:mt-0 px-4">
          <h2>Sidebar</h2>
          <p>This is the sidebar area of your website. You can use it to display additional information, such as a menu, search bar, or social media links.</p>
        </aside>
      </main>
      <footer className="text-center py-4 mt-8">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
