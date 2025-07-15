import React from 'react';


const DownArrowIcon = require('../../assets/down-arrow.svg').default;
const CardDetailsIcon = require('../../assets/card_details.svg').default;

interface CardDetailsProps {
  expanded: boolean;
  onToggle: () => void;
}


export const CardDetails: React.FC<CardDetailsProps> = ({ expanded, onToggle }) => (
  <div className="bg-[#F5F6FA] rounded-xl shadow p-6">
    <button className="w-full text-left font-semibold text-[#0C365A] flex items-center justify-between font-opensans" onClick={onToggle}>
      <span className="flex items-center gap-2"><img src={CardDetailsIcon} alt="Details" className="h-5" /> Card details</span>
      <img src={DownArrowIcon} alt="Expand" className={`h-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
    </button>
    {expanded && <div className="mt-2 text-sm text-gray-600 font-opensans">Card details content goes here...</div>}
  </div>
);
