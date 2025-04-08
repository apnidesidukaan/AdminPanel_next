"use client"
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePathname } from 'next/navigation';

import { MdInventory } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

import {
  HiOutlineLogout,
  HiOutlineHome, HiOutlineUser, HiOutlineUserGroup, HiOutlineIdentification, HiOutlineClipboardCheck, HiOutlineOfficeBuilding, HiOutlinePlusCircle, HiOutlineClipboardList, HiOutlineCog, HiOutlineViewGrid, HiOutlineShieldCheck, HiOutlineDocumentSearch, HiOutlineCurrencyDollar, HiOutlineCreditCard, HiOutlineReceiptTax, HiOutlineChartBar, HiOutlineServer, HiOutlineChartPie, HiOutlineBell, HiOutlineDatabase, HiChevronDown
} from 'react-icons/hi';
// import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

import Loader from './ui/status/Loader';
import ConfirmationDialogueBox from './ui/status/Confirmation';

const ErpSidebar = (props) => {
  // const location = useLocation();
  const location = usePathname();


  const [openMenus, setOpenMenus] = useState({});
  // const [logginOut, setLogginOut] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isActive = (path) => {

    return (
      location === path
    )
  };

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  const iconSize = 19
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <MdSpaceDashboard size={iconSize} /> },
    { name: 'Pos', path: '/pos', icon: <FaCashRegister size={iconSize} /> },

    {
      name: 'Inventory',
      icon: <MdInventory size={iconSize} />,
      submenu: [
        // { name: 'All Users', path: '/users', icon: <HiOutlineUser /> },
        { name: 'View', path: '/view-products', icon: <HiOutlineIdentification size={iconSize} /> },
        { name: 'Add', path: '/add-products', icon: <HiOutlineClipboardCheck size={iconSize} /> },
      ],
    },

    {
      name: 'Biz Management',
      icon: <HiOutlineOfficeBuilding size={iconSize} />,
      submenu: [
        { name: 'All Businesses', path: '/view-Businesses', icon: <HiOutlineIdentification size={iconSize} /> },
        { name: 'Create Business', path: '/businesses/create', icon: <HiOutlinePlusCircle size={iconSize} /> },
        { name: 'Business Types', path: '/businesses/types', icon: <HiOutlineClipboardList size={iconSize} /> },
        { name: 'Module Assignment', path: '/businesses/module-assignment', icon: <HiOutlinePlusCircle size={iconSize} /> },
      ],
    },

    {
      name: 'Platform Config',
      icon: <HiOutlineCog size={iconSize} />,
      submenu: [
        { name: 'Modules Management', path: '/platform/modules', icon: <HiOutlineViewGrid size={iconSize} /> },
        { name: 'Role & Permissions', path: '/platform/roles-permissions', icon: <HiOutlineShieldCheck size={iconSize} /> },
        { name: 'Audit Logs', path: '/platform/audit-logs', icon: <HiOutlineDocumentSearch size={iconSize} /> },
      ],
    },

    {
      name: 'Finance & Billing',
      icon: <HiOutlineCurrencyDollar size={iconSize} />,
      submenu: [
        { name: 'Subscription Plans', path: '/finance/subscriptions', icon: <HiOutlineCreditCard size={iconSize} /> },
        { name: 'Transaction History', path: '/finance/transactions', icon: <HiOutlineReceiptTax size={iconSize} /> },
        { name: 'Revenue Reports', path: '/finance/reports', icon: <HiOutlineChartBar size={iconSize} /> },
      ],
    },

    {
      name: 'System Admin',
      icon: <HiOutlineServer size={iconSize} />,
      submenu: [
        { name: 'System Status', path: '/system/status', icon: <HiOutlineChartPie size={iconSize} /> },
        { name: 'Notifications', path: '/system/notifications', icon: <HiOutlineBell size={iconSize} /> },
        { name: 'Backup & Restore', path: '/system/backup', icon: <HiOutlineDatabase size={iconSize} /> },
      ],
    },
  ];


  useEffect(() => {
    const activeMenus = {};
    menuItems.forEach((item) => {
      if (item.submenu) {
        const isSubmenuActive = item.submenu.some((subItem) => isActive(subItem.path));
        if (isSubmenuActive) activeMenus[item.name] = true;
      }
    });
    setOpenMenus(activeMenus);
  }, [location.pathname]);

  return (
    <div
      className={`text-[#ffff] w-64 sm:w-74 h-full bg-background p-4 flex flex-col justify-between transition-transform duration-300 transform ${props.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button
        className="p-2 rounded-full bg-accent text-primary-text-inverse hover:bg-accent/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 w-10 h-10 mb-4"
        onClick={() => {
          props.setIsSidebarOpen(!props.isSidebarOpen);
        }}
        aria-label="Toggle Sidebar"
      >
        {props.isSidebarOpen ? <TbLayoutSidebarRightExpand className="w-6 h-6" /> : null}
      </button>

      <div className="mb-8 p-4 rounded-xl bg-background-section shadow-md border border-border-color">
        {/* Logo and Name in One Row */}
        <div className="flex items-center gap-4 mb-2">
          <img
            src="/logo.png"
            alt="Badi Dukaan Logo"
            className="w-16 h-16 p-1 rounded-full border-4  border-accent shadow-md"
          />
          <p style={{
            fontSize: 'var(--text-2xl)', color: 'var(--color-primary-text)',
          }}
            className="font-bold text-primary-text ">
            Badi Eats
          </p>
        </div>

        {/* Description in Next Row */}
        <p style={{ fontSize: 'var(--text-sm)' }} className="text-center  text-secondary-text mt-4  ">
          From Local Hustle to Global Muscle
        </p>
      </div>


      {/* Menu Items */}
      <ul className="scrollbar flex-grow overflow-y-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="mt-2 text-sm ">
            {item.submenu ? (
              <button
                onClick={() => toggleMenu(item.name)}
                style={{ width: '95%' }}
                className="text-primary-text flex items-center  p-3  rounded-lg justify-between hover:bg-accent hover:text-primary-text-inverse transition"
              >
                <span className="flex items-center font-semibold ">
                  {item.icon} <span className="ml-3  ">{item.name}</span>
                </span>
                <HiChevronDown
                  className={`transition-transform duration-200 ${openMenus[item.name] ? 'rotate-180' : ''
                    }`}
                />
              </button>
            ) : (
              <a
                href={item.path}
                className={`mr-5 text-primary-text font-semibold flex items-center p-3 rounded-lg cursor-pointer transition ${isActive(item.path) ? 'bg-accent  text-primary-text-inverse font-semibold' : 'hover:bg-accent hover:text-primary-text-inverse'
                  }`}
              >
                {item.icon} <span className="ml-3">{item.name}</span>
              </a>
            )}

            {item.submenu && openMenus[item.name] && (
              <ul className=" shadow-md p-4 rounded-xl ml-6 mt-2 mr-5 space-y-1 border-l-2 border-accent pl-4">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.path}
                      className={`text-primary-text flex items-center gap-3 p-2 rounded-lg transition ${isActive(subItem.path) ? 'bg-accent text-primary-text-inverse font-semibold' : 'hover:bg-accent hover:text-primary-text-inverse'
                        }`}
                    >
                      {subItem.icon}
                      <span>{subItem.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* User Info Section */}

      <div className="p-4 mt-8 border-t border-border-color shadow-md rounded-lg bg-background-section">
        {/* User Info */}
        <div className="flex items-center mb-4">
          <img
            src="https://ui-avatars.com/api/?name=Nischal+Gupta"
            alt="User Avatar"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <p className="text-sm text-primary-text font-bold" style={{ fontSize: 'var(--text-md)' }}>Nischal Gupta</p>
            <p className="text-xs text-secondary-text font-semibold" style={{ fontSize: 'var(--text-xs)' }}>Super Admin</p>
          </div>
        </div>



        {/* <ConfirmationDialogueBox /> */}


        {/* Logout Button */}
        <button
          className="flex items-center justify-center gap-2 w-full p-2 rounded-lg bg-error text-primary-text-inverse text-center border border-transparent  transition cursor-pointer"
          onClick={() => {

            props?.setLogginOut(true)
            // localStorage.removeItem('token')

            // Redirect to login page
            // navigate('/')
            // props?.setLogginOut(false)
          }
          }
        >
          <HiOutlineLogout className="w-5 h-5" />
          {props?.logginOut ? <Loader /> : "Logout"}
        </button>
      </div>
    </div >
  );
};

export default ErpSidebar;