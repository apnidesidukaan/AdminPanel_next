"use client"
//============================================================================
import { GrDashboard } from 'react-icons/gr';
import { HiChevronRight } from 'react-icons/hi';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import DashboardHero from '../components/ui/hero/dashboardHeroBanner';
import ThreeDCashModel from '../components/3d/shop';
import KiranaShop from '../components/anim/shop';
import Layout from '../layouts/Layout';
const Breadcrumbs = ({ items }) => (
  <nav aria-label="breadcrumb" className="mb-8">
    
    <ol className="flex items-center space-x-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {index > 0 && (
            <HiChevronRight className="text-[var(--color-neutral-500)] w-4 h-4" />
          )}

          {item.href ? (
            <a
              href={item.href}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:underline transition-colors duration-300"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--color-text-primary)] font-semibold">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
const Dashboard = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reports' }, // Current page (no href for the active page)
  ];
  //   const loader = new GLTFLoader();
  // loader.load('/models/shop', (gltf) => {
  //   scene.add(gltf.scene);
  // });

  return (
    <Layout>
    <main className="rounded-lg text-[var(--color-text-primary)] p-6 bg-background-section flex-1 overflow-y-auto flex justify-center items-start">
      <div className="w-full max-w-6xl space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <div className="w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
          <KiranaShop/>
          {/* <ThreeDCashModel /> */}

        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-medium">Total Users</h2>
            <p className="text-2xl font-bold">1,24ss5</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-medium">Revenue</h2>
            <p className="text-2xl font-bold">$45,120</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-medium">Orders</h2>
            <p className="text-2xl font-bold">320</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-medium">Pending Requests</h2>
            <p className="text-2xl font-bold">15</p>
          </div>
        </div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li>User <strong>John Doe</strong> added a new product.</li>
              <li>Order #1234 was completed.</li>
              <li>New vendor <strong>Tech Corp</strong> joined the platform.</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li><a href="#" className="text-[var(--color-primary)] hover:underline">View Reports</a></li>
              <li><a href="#" className="text-[var(--color-primary)] hover:underline">Manage Users</a></li>
              <li><a href="#" className="text-[var(--color-primary)] hover:underline">Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Full-Width Section */}
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <p>Placeholder for charts or detailed data tables.</p>
        </div>
      </div>
    </main>
    </Layout>
  );
};

export default Dashboard;