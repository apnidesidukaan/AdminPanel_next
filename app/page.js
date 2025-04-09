export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-primary-text mb-4">
        Welcome to BadiDukan Admin Panel
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Manage businesses, modules, users, and system-wide settings for the BadiDukan platform. Log in to access your dashboard and start managing the ecosystem.
      </p>
      <a
        href="/login"
        className="bg-accent text-white px-6 py-3 rounded-lg text-lg hover:bg-accent/40 transition"
      >
        Go to Login
      </a>
    </div>
  );
}
