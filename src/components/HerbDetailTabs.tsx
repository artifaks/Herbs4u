'use client';

import { useState } from 'react';
import { 
  FaLeaf, 
  FaHistory, 
  FaFlask, 
  FaChartBar, 
  FaBolt
} from 'react-icons/fa';

interface TabProps {
  children: React.ReactNode;
  activeTab: string;
  tabName: string;
}

const Tab: React.FC<TabProps> = ({ children, activeTab, tabName }) => {
  return (
    <div className={`${activeTab === tabName ? 'block' : 'hidden'} py-4`}>
      {children}
    </div>
  );
};

interface HerbDetailTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function HerbDetailTabs({
  activeTab,
  setActiveTab
}: HerbDetailTabsProps) {

  const tabs = [
    { name: 'overview', label: 'Overview', icon: <FaLeaf className="w-4 h-4" /> },
    { name: 'prep', label: 'Prep', icon: <FaFlask className="w-4 h-4" /> },
    { name: 'history', label: 'History', icon: <FaHistory className="w-4 h-4" /> },
    { name: 'studies', label: 'Scientific Studies', icon: <FaChartBar className="w-4 h-4" /> },
    { name: 'pairings', label: 'Pairings', icon: <FaBolt className="w-4 h-4" /> },
    { name: 'visualizations', label: 'Visualizations', icon: <FaChartBar className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-gray-50 dark:bg-slate-900 rounded-lg shadow-md overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 
              ${activeTab === tab.name 
                ? 'text-primary-700 dark:text-primary-300 border-b-2 border-primary-500' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content is rendered separately in the parent component */}
    </div>
  );
}
