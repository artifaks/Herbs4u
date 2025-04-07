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
  overviewSection: React.ReactNode;
  preparationsSection: React.ReactNode;
  historySection: React.ReactNode;
  studiesSection: React.ReactNode;
  pairingsSection: React.ReactNode;
  visualizationsSection: React.ReactNode;
}

export default function HerbDetailTabs({
  overviewSection,
  preparationsSection,
  historySection,
  studiesSection,
  pairingsSection,
  visualizationsSection
}: HerbDetailTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

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

      {/* Tab Content */}
      <div className="p-6">
        <Tab activeTab={activeTab} tabName="overview">
          {overviewSection}
        </Tab>
        <Tab activeTab={activeTab} tabName="prep">
          {preparationsSection}
        </Tab>
        <Tab activeTab={activeTab} tabName="history">
          {historySection}
        </Tab>
        <Tab activeTab={activeTab} tabName="studies">
          {studiesSection}
        </Tab>
        <Tab activeTab={activeTab} tabName="pairings">
          {pairingsSection}
        </Tab>
        <Tab activeTab={activeTab} tabName="visualizations">
          {visualizationsSection}
        </Tab>
      </div>
    </div>
  );
}
