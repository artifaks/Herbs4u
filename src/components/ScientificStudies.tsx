'use client';

import { FaChartBar, FaExternalLinkAlt } from 'react-icons/fa';

interface Study {
  title: string;
  authors: string;
  journal: string;
  year: number;
  findings: string;
  link?: string;
}

interface ScientificStudiesProps {
  herbName: string;
  studies: Study[];
}

export default function ScientificStudies({ herbName, studies }: ScientificStudiesProps) {
  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <FaChartBar className="text-blue-500 w-5 h-5 mr-2" />
        <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-200">Scientific Studies</h2>
      </div>

      {studies.length > 0 ? (
        <div className="space-y-6">
          {studies.map((study, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-gray-100">{study.title}</h3>
              <div className="flex flex-wrap text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="mr-2">{study.authors}</span>
                <span className="mr-2">•</span>
                <span className="mr-2 italic">{study.journal}</span>
                <span className="mr-2">•</span>
                <span>{study.year}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{study.findings}</p>
              {study.link && (
                <a 
                  href={study.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View full study
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-gray-600 dark:text-gray-400">No scientific studies are currently available for {herbName}.</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">External Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="https://pubmed.ncbi.nlm.nih.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-medium">PubMed Research</span>
            <FaExternalLinkAlt className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          </a>
          
          <a 
            href="https://plants.usda.gov/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-medium">USDA Plant Database</span>
            <FaExternalLinkAlt className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          </a>
          
          <a 
            href="https://examine.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-medium">Examine.com</span>
            <FaExternalLinkAlt className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
        <p>Consult a healthcare professional before starting any herbal regimen.</p>
      </div>
    </div>
  );
}
