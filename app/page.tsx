'use client';

import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Link href="/editor">Go to Editor</Link>
    </div>
  );
};

export default Home;
