import React from 'react';

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-6">
      <h1 className="text-5xl font-bold mb-4 !text-white"> Coming Soon</h1>
      <p className="text-lg mb-8 !text-white">
       Stay tuned!
      </p>
      <div className="animate-bounce text-2xl !text-white">⏳</div>
    </div>
  );
}

export default Page;
