const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 text-text-primary">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary mb-8 animate-bounce">404</h1>
        <h2 className="text-4xl text-text-secondary font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <a
          href="/"
          className="inline-block bg-secondary text-white px-8 py-4 rounded-lg shadow-lg transition-all hover:bg-accent hover:-translate-y-1"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
