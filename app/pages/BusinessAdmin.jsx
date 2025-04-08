import { GrDashboard } from 'react-icons/gr';
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";

import { HiChevronRight } from 'react-icons/hi';
import Table from '../components/ui/tables/Table';
import DetailedTable from '../components/ui/tables/DetailedTable';
import EditableTable from '../components/ui/tables/EditableTable';
import EnhancedEditableTable from '../components/ui/tables/EnhancedEditableTable';
import EditableTableWithModal from '../components/ui/tables/EditableTableWithModal';
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
const BusinessAdmins = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reports' }, // Current page (no href for the active page)
  ];
  const columns = [
    { key: 'name', label: 'Product Name' },
    { key: 'color', label: 'Color' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
  ];

  const data = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
  ];
  return (
    <main className="rounded-lg text-[var(--color-text-primary)] p-6 bg-[var(--color-neutral-100)] flex-1 overflow-y-auto flex justify-center items-start">
      <div className="w-full max-w-6xl space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Header Section */}
        <div className="flex justify-between items-center mt-14">
          <h1 className="text-xl font-semibold">Dashbodddard</h1>
          {/* <button className="px-4 py-2 bg-[var(--color-accent)] text-primary-text-inverse font-bold rounded-lg hover:bg-white hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]">
            + Add New
          </button> */}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Users", value: "1,245", icon: <FaUsers />, bg: "bg-blue-100" },
            { title: "Revenue", value: "$45,120", icon: <FaMoneyBillTrendUp />, bg: "bg-green-100" },
            { title: "Orders", value: "320", icon: <MdOutlineInventory />, bg: "bg-yellow-100" },
            { title: "Pending Requests", value: "15", icon: <MdOutlinePendingActions />, bg: "bg-red-100" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 ${stat.bg} shadow-md rounded-2xl transition-transform transform hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
                  {stat.title}
                </h2>
                <div className="text-[var(--color-accent)] text-2xl">{stat.icon}</div>
              </div>
              <p className="text-3xl font-extrabold text-[var(--color-text-primary)]">
                {stat.value}
              </p>
            </div>
          ))}
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

        {/* <Table columns={columns} data={data} /> */}
        {/* <DetailedTable columns={columns} data={data} /> */}
        {/* <EditableTable columns={columns} data={data} /> */}
        {/* <EnhancedEditableTable columns={columns} data={data} /> */}
        <div className="hidden md:block">
          <EditableTableWithModal columns={columns} data={data} />
        </div>
                {/* Full-Width Section */}
        <div className="block lg:hidden relative overflow-x-auto shadow-md sm:rounded-lg w-full sm:max-w-2xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <div className="p-0 sm:p-4 bg-background-section sm:bg-accent md:bg-blue-200 lg:bg-green-200 xl:bg-yellow-200 2xl:bg-red-200 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Data Overview</h2>
            {/* <p>Placeholder for charts or detailed data tables.</p> */}
            <EditableTableWithModal columns={columns} data={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessAdmins;