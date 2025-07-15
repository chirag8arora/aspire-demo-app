import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarProps } from '../../types';


const CreditIcon = require('../../assets/Credit.svg').default;
const PaymentsIcon = require('../../assets/Payments.svg').default;
const CardIcon = require('../../assets/pay.svg').default;
const UserIcon = require('../../assets/user.svg').default;
const Logo = require('../../assets/Logo.svg').default;
const Logo2 = require('../../assets/Logo-1.svg').default;

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: Logo2,
    path: '/home',
  },
  {
    id: 'cards',
    label: 'Cards',
    icon: CardIcon,
    path: '/',
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: PaymentsIcon,
    path: '/payments',
  },
  {
    id: 'credit',
    label: 'Credit',
    icon: CreditIcon,
    path: '/credit',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: UserIcon,
    path: '/settings',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <aside className="h-screen bg-[#0C365A] flex flex-col justify-between w-88 min-w-[288px] py-8 px-6 relative shadow-lg">
      {/* Logo and tagline */}
      <div>
        <div className="flex items-center mb-8">
          <img src={Logo} alt="Aspire Logo" className="h-8 w-auto mr-3" />
          <span className="text-2xl font-avenir font-semibold text-aspire-green">aspire</span>
        </div>
        <p className="text-s text-white opacity-30 leading-5 mb-12 font-opensans">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
        {/* Navigation */}
        <nav>
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-colors font-opensans text-base font-semibold ${
                      isActive
                        ? 'text-aspire-green shadow-aspire'
                        : 'text-white hover:bg-[#1B4B6F] hover:text-aspire-green'
                    }`
                  }
                  end={item.path === '/'}
                >
                  <img src={item.icon} alt={item.label + ' icon'} className="h-6 w-6" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div />
    </aside>
  );
}; 