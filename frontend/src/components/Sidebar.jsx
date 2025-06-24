import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, RocketLaunchIcon, BuildingLibraryIcon, CalendarDaysIcon, ExclamationTriangleIcon, UsersIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion,AnimatePresence } from 'framer-motion';

const navItems = [
  {
    label: 'Home',
    icon: <HomeIcon className="w-6 h-6" />,
    to: '/',
  },
  {
    label: 'Start',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    to: '/start',
  },
  {
    label: 'Club',
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
    children: [
      { label: 'My Clubs', to: '/clubs' },
      { label: 'Join a Club', to: '/clubs/join' },
      { label: 'Club Events', to: '/clubs/events' },
    ],
  },
  {
    label: 'Event',
    icon: <CalendarDaysIcon className="w-6 h-6" />,
    children: [
      { label: 'Browse Events', to: '/events' },
      { label: 'My Registrations', to: '/events/registrations' },
    ],
  },
  {
    label: 'Ragging',
    icon: <ExclamationTriangleIcon className="w-6 h-6" />,
    children: [
      { label: 'Report Incident', to: '/ragging' },
      { label: 'Report History', to: '/ragging/history' },
    ],
  },
  {
    label: 'Study Partner',
    icon: <UsersIcon className="w-6 h-6" />,
    children: [
      { label: 'Find Partner', to: '/studypartner' },
      { label: 'My Study Groups', to: '/studypartner/groups' },
      { label: 'Join Group', to: '/studypartner/join' },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#0f0f0f] flex flex-col shadow-lg z-40">
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
        <span className="text-2xl font-bold text-white tracking-wide font-poppins">MyCollegeMate</span>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <div>
                <button
                  className={`flex items-center w-full px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-800 transition group ${openDropdown === item.label ? 'bg-gray-800' : ''}`}
                  onClick={() => handleDropdown(item.label)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  <motion.span
                    animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                    className="ml-2"
                  >
                    <ChevronDownIcon className="w-5 h-5 transition-transform" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-10 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block py-2 px-4 text-gray-300 rounded-lg transition font-normal hover:bg-gray-700 hover:text-white"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-800 transition font-medium ${
                    isActive || location.pathname === item.to
                      ? 'text-white bg-gray-800'
                      : ''
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar; 