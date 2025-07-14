import React, { useState, useRef } from 'react';

// Asset imports
const VisaLogo = require('../../assets/Visa Logo.svg').default;
const AspireLogo = require('../../assets/Logo-2.svg').default;
const EyeIcon = require('../../assets/remove_red_eye-24px.svg').default;
const FreezeIcon = require('../../assets/Freeze card.svg').default;
const SpendLimitIcon = require('../../assets/Set spend limit.svg').default;
const GPayIcon = require('../../assets/GPay.svg').default;
const ReplaceIcon = require('../../assets/Replace card.svg').default;
const DeactivateIcon = require('../../assets/Deactivate card.svg').default;
const CardDetailsIcon = require('../../assets/file-storage.svg').default;
const DownArrowIcon = require('../../assets/down-arrow.svg').default;
const RefundIcon = require('../../assets/business-and-finance.svg').default;
const FlightIcon = require('../../assets/flights.svg').default;
const ShoppingIcon = require('../../assets/box.svg').default;
const AddIcon = require('../../assets/add.svg').default;

// Types
interface CardProps {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
  onShowNumber: () => void;
  showNumber: boolean;
}

interface CardActionsProps {
  frozen: boolean;
  onFreeze: () => void;
  onSetLimit: () => void;
  onAddGPay: () => void;
  onReplace: () => void;
  onDeactivate: () => void;
}

interface CardDetailsProps {
  expanded: boolean;
  onToggle: () => void;
}

interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
}

interface TransactionsProps {
  transactions: Transaction[];
}

interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (card: CardType) => void;
}

interface CardType {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
}

function randomCardNumber() {
  const nums = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
  return `${nums.slice(0, 4).join('')} ${nums.slice(4, 8).join('')} ${nums.slice(8, 12).join('')} ${2020 + Math.floor(Math.random() * 10)}`;
}
function randomExpiry() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(24 + Math.floor(Math.random() * 6));
  return `${month}/${year}`;
}

const Card: React.FC<CardProps> = ({ name, number, expiry, cvv, frozen, onShowNumber, showNumber }) => (
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

const CardActions: React.FC<CardActionsProps> = ({ frozen, onFreeze, onSetLimit, onAddGPay, onReplace, onDeactivate }) => (
  <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3 bg-[#F5F6FA] rounded-xl p-4 shadow-sm">
    <button className="flex flex-col items-center" onClick={onFreeze}>
      <span className="bg-white rounded-full p-2 mb-1 shadow"><img src={FreezeIcon} alt="Freeze" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">{frozen ? 'Unfreeze card' : 'Freeze card'}</span>
    </button>
    <button className="flex flex-col items-center" onClick={onSetLimit}>
      <span className="bg-white rounded-full p-2 mb-1 shadow"><img src={SpendLimitIcon} alt="Set limit" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Set spend limit</span>
    </button>
    <button className="flex flex-col items-center" onClick={onAddGPay}>
      <span className="bg-white rounded-full p-2 mb-1 shadow"><img src={GPayIcon} alt="GPay" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Add to GPay</span>
    </button>
    <button className="flex flex-col items-center" onClick={onReplace}>
      <span className="bg-white rounded-full p-2 mb-1 shadow"><img src={ReplaceIcon} alt="Replace" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Replace card</span>
    </button>
    <button className="flex flex-col items-center" onClick={onDeactivate}>
      <span className="bg-white rounded-full p-2 mb-1 shadow"><img src={DeactivateIcon} alt="Cancel" className="h-6" /></span>
      <span className="text-xs text-[#222] font-opensans font-semibold">Cancel card</span>
    </button>
  </div>
);

const CardDetails: React.FC<CardDetailsProps> = ({ expanded, onToggle }) => (
  <div className="mt-6 bg-[#F5F6FA] rounded-xl shadow p-4">
    <button className="w-full text-left font-semibold text-[#0C365A] flex items-center justify-between font-opensans" onClick={onToggle}>
      <span className="flex items-center gap-2"><img src={CardDetailsIcon} alt="Details" className="h-5" /> Card details</span>
      <img src={DownArrowIcon} alt="Expand" className={`h-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
    </button>
    {expanded && <div className="mt-2 text-sm text-gray-600 font-opensans">Card details content goes here...</div>}
  </div>
);

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => (
  <div className="bg-[#F5F6FA] rounded-xl shadow p-6">
    <h2 className="text-base font-semibold text-[#0C365A] mb-4 flex items-center gap-2 font-opensans">
      <img src={CardDetailsIcon} alt="Tx" className="h-5" /> Recent transactions
    </h2>
    <ul className="divide-y divide-gray-100">
      {transactions.map((tx, idx) => (
        <li key={idx} className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={tx.icon} alt="Merchant" className="h-8 w-8 rounded-full bg-gray-100" />
            <div>
              <p className="font-semibold text-[#222] font-opensans">{tx.merchant}</p>
              <p className="text-xs text-gray-500 font-opensans">{tx.date}</p>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${tx.amount > 0 ? 'bg-[#E5F9F6] text-[#01D167]' : 'bg-[#EDF3FD] text-[#0C365A]'}`}>{tx.type}</span>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-semibold ${tx.amount > 0 ? 'text-[#01D167]' : 'text-[#222]'} font-opensans`}>{tx.amount > 0 ? '+S$' : '-S$'}{Math.abs(tx.amount)}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const AddCardModal: React.FC<AddCardModalProps> = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm relative font-opensans">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-4">Add New Card</h2>
        <input
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 font-opensans"
          placeholder="Cardholder Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          className="w-full bg-[#325BAF] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-opensans"
          onClick={() => {
            if (name.trim()) {
              onAdd({
                name: name.trim(),
                number: randomCardNumber(),
                expiry: randomExpiry(),
                cvv: String(Math.floor(100 + Math.random() * 900)),
                frozen: false,
              });
              setName('');
            }
          }}
        >
          Add Card
        </button>
      </div>
    </div>
  ) : null;
};

// Add show/hide toggle above the card
const ShowHideToggle: React.FC<{ show: boolean; onToggle: () => void }> = ({ show, onToggle }) => (
  <button
    className="flex items-center gap-1 text-xs text-[#01D167] font-semibold mb-2 ml-auto pr-2 select-none focus:outline-none"
    onClick={onToggle}
    aria-label={show ? 'Hide card number' : 'Show card number'}
  >
    <img src={EyeIcon} alt="Show/Hide" className="h-4 w-4" style={{ filter: show ? 'none' : 'grayscale(1)' }} />
    {show ? 'Hide card number' : 'Show card number'}
  </button>
);

export const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([
    { name: 'Mark Henry', number: '1234 5678 9012 2020', expiry: '12/20', cvv: '123', frozen: false },
    { name: 'Jane Doe', number: '4321 8765 2109 2021', expiry: '11/25', cvv: '456', frozen: false },
  ]);
  const [current, setCurrent] = useState<number>(0);
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const transactions: Transaction[] = [
    { merchant: 'Hamleys', date: '20 May 2020', amount: 150, type: 'Refund on debit card', icon: RefundIcon },
    { merchant: 'Hamleys', date: '20 May 2020', amount: -150, type: 'Charged to debit card', icon: FlightIcon },
    { merchant: 'Hamleys', date: '20 May 2020', amount: -150, type: 'Charged to debit card', icon: ShoppingIcon },
  ];

  const goPrev = () => setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  const handleAddCard = (card: CardType) => {
    setCards([...cards, card]);
    setCurrent(cards.length);
    setModalOpen(false);
  };

  const handleFreeze = () => {
    setCards(cards.map((c, i) => i === current ? { ...c, frozen: !c.frozen } : c));
  };


  const slideStyle = {
    transform: `translateX(-${current * 100}%)`,
    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
    display: 'flex',
  } as React.CSSProperties;

  return (
    <div className="p-10 space-y-8 bg-[#F5F6FA] min-h-screen font-opensans">
      {/* Header: Available balance and New card button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm text-[#222] font-semibold mb-1">Available balance</p>
          <div className="flex items-center gap-2">
            <span className="bg-[#01D167] text-white text-xs font-bold px-2 py-1 rounded font-opensans">S$</span>
            <span className="text-3xl font-bold text-[#222] font-avenir">3,000</span>
          </div>
        </div>
        <button className="bg-[#325BAF] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors flex items-center gap-2 font-opensans" onClick={() => setModalOpen(true)}>
          <img src={AddIcon} alt="Add" className="h-5 w-5" /> New card
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 mb-2">
        <button className="pb-2 border-b-2 border-[#23CEFD] text-[#222] font-semibold font-opensans">My debit cards</button>
        <button className="pb-2 text-gray-400 hover:text-[#222] transition-colors font-opensans">All company cards</button>
      </div>

      {/* Card Carousel and Transactions */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Card section */}
        <div className="flex-1 flex flex-col items-center max-w-[900px]">
          {/* Show/Hide Toggle */}
          <ShowHideToggle show={showNumber} onToggle={() => setShowNumber((v) => !v)} />
          <div className="relative w-full flex items-center justify-center" style={{ minHeight: 260 }}>
            {/* Carousel arrows */}
            {cards.length > 1 && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
                onClick={() => {
                  setShowNumber(false);
                  setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
                }}
              >
                <img src={DownArrowIcon} alt="Prev" className="h-5 w-5 rotate-90" />
              </button>
            )}
            {/* Animated carousel */}
            <div
              ref={carouselRef}
              className="w-full overflow-hidden"
              style={{ position: 'relative', height: 260 }}
            >
              <div
                style={slideStyle}
                className="flex w-full h-full"
              >
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Card
                      {...card}
                      showNumber={showNumber}
                      onShowNumber={() => setShowNumber((v) => !v)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {cards.length > 1 && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
                onClick={() => {
                  setShowNumber(false);
                  setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
                }}
              >
                <img src={DownArrowIcon} alt="Next" className="h-5 w-5 -rotate-90" />
              </button>
            )}
          </div>
          {/* Carousel dots */}
          {cards.length > 1 && (
            <div className="flex gap-2 mt-2">
              {cards.map((_, idx) => (
                <span key={idx} className={`h-2 w-2 rounded-full ${idx === current ? 'bg-[#01D167]' : 'bg-gray-300'}`}></span>
              ))}
            </div>
          )}
          <CardActions
            frozen={cards[current].frozen}
            onFreeze={handleFreeze}
            onSetLimit={() => {}}
            onAddGPay={() => {}}
            onReplace={() => {}}
            onDeactivate={() => {}}
          />
          <CardDetails expanded={detailsOpen} onToggle={() => setDetailsOpen((v) => !v)} />
        </div>
        {/* Recent Transactions */}
        <div className="flex-1">
          <Transactions transactions={transactions} />
        </div>
      </div>
      {/* Add Card Modal */}
      <AddCardModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddCard} />
    </div>
  );
}; 