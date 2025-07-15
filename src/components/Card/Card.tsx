import React from 'react';

const VisaLogo = require('../../assets/Visa Logo.svg').default;
const AspireLogo = require('../../assets/Logo-2.svg').default;


export interface CardProps {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
  onShowNumber: () => void;
  showNumber: boolean;
}


export const Card: React.FC<CardProps> = ({ name, number, expiry, cvv, frozen, onShowNumber, showNumber }) => (
  <div
    className={`bg-[#01D167] rounded-2xl shadow-lg text-white relative transition-opacity font-avenir ${frozen ? 'opacity-60' : ''} w-[380px] h-[220px] mx-auto flex flex-col justify-between p-7`}
    style={{ boxShadow: '0px 8px 24px rgba(1, 209, 103, 0.2)' }}
  >
    <div className="flex justify-end items-center">
      <img src={AspireLogo} alt="Aspire Logo" className="h-6" />
    </div>
    <p className="text-xl font-sans font-bold tracking-wide mt-1">{name}</p>
    <span className="tracking-[0.4em] text-l font-opensans font-bold mt-[-0.5rem]">{showNumber ? number : `•••• •••• •••• ${number.slice(-4)}`}</span>
    <div className="flex justify-between text-xs font-opensans font-bold">
      <span>Thru: {expiry}</span>
      <span>CVV: {showNumber ? cvv : '***'}</span>
      <img src={VisaLogo} alt="Visa Logo" className="h-6" />
    </div>
    {frozen && <div className="absolute inset-0 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center text-lg font-bold text-gray-700"></div>}
  </div>
); 