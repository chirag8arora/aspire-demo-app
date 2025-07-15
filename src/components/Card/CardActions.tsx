import React from 'react';

const DeactivateIcon = require('../../assets/Deactivate card.svg').default;
const ReplaceIcon = require('../../assets/Replace card.svg').default;
const GPayIcon = require('../../assets/GPay.svg').default;
const FreezeIcon = require('../../assets/Freeze card.svg').default;
const SpendLimitIcon = require('../../assets/Set spend limit.svg').default;

interface CardActionsProps {
  frozen: boolean;
  onFreeze: () => void;
  onSetLimit: () => void;
  onAddGPay: () => void;
  onReplace: () => void;
  onDeactivate: () => void;
}

export const CardActions: React.FC<CardActionsProps> = ({ frozen, onFreeze, onSetLimit, onAddGPay, onReplace, onDeactivate }) => (
  <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3 bg-[#EDF3FF] rounded-xl p-4 shadow-sm">
    <button className="flex flex-col items-center" onClick={onFreeze}>
      <span className=" rounded-full p-2 mb-1 shadow"><img src={FreezeIcon} alt="Freeze" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">{frozen ? 'Unfreeze card' : 'Freeze card'}</span>
    </button>
    <button className="flex flex-col items-center" onClick={onSetLimit}>
      <span className=" rounded-full p-2 mb-1 shadow"><img src={SpendLimitIcon} alt="Set limit" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Set spend limit</span>
    </button>
    <button className="flex flex-col items-center" onClick={onAddGPay}>
      <span className=" rounded-full p-2 mb-1 shadow"><img src={GPayIcon} alt="GPay" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Add to GPay</span>
    </button>
    <button className="flex flex-col items-center" onClick={onReplace}>
      <span className=" rounded-full p-2 mb-1 shadow"><img src={ReplaceIcon} alt="Replace" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Replace card</span>
    </button>
    <button className="flex flex-col items-center" onClick={onDeactivate}>
      <span className=" rounded-full p-2 mb-1 shadow"><img src={DeactivateIcon} alt="Cancel" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Cancel card</span>
    </button>
  </div>
);