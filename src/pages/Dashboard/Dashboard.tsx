import React, { useState, useRef } from 'react';
import { Card } from '../../components/Card/Card';
import { CardDetails } from '../../components/Card/CardDetails';
import { CardActions } from '../../components/Card/CardActions';
import { Transactions } from '../../components/Card/Transactions';
import { CardType, Transaction } from '@/types';
import { randomCardNumber, randomExpiry } from '../../utils/utils';

const EyeIcon = require('../../assets/remove_red_eye-24px.svg').default;
const DownArrowIcon = require('../../assets/down-arrow.svg').default;
const MegaPhoneIcon = require('../../assets/megaphone.svg').default;
const FileStorageIcon = require('../../assets/file-storage.svg').default;
const FlightIcon = require('../../assets/flights.svg').default;
const AddIcon = require('../../assets/add.svg').default;


interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (card: CardType) => void;
}


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
  const [transactionsOpen, setTransactionsOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const transactions: Transaction[] = [
    { merchant: 'Hamleys', date: '20 May 2020', amount: 150, type: 'Refund on debit card', icon: FileStorageIcon },
    { merchant: 'Hamleys', date: '20 May 2020', amount: -150, type: 'Charged to debit card', icon: FlightIcon },
    { merchant: 'Hamleys', date: '20 May 2020', amount: -150, type: 'Charged to debit card', icon: MegaPhoneIcon },
    { merchant: 'Hamleys', date: '20 May 2020', amount: -150, type: 'Charged to debit card', icon: FileStorageIcon },
  ];


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

      <div className="flex flex-col md:flex-row gap-8">

        <div className="flex-1 flex flex-col items-center max-w-[750px]">

          <ShowHideToggle show={showNumber} onToggle={() => setShowNumber((v) => !v)} />
          <div className="relative w-full flex items-center justify-center" style={{ minHeight: 260 }}>

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
        </div>
        
        <div className="flex-1 flex flex-col gap-10">
          <CardDetails expanded={detailsOpen} onToggle={() => setDetailsOpen((v) => !v)} />
          <Transactions transactions={transactions} expanded={transactionsOpen} onToggle={() => setTransactionsOpen((v) => !v)} />
        </div>
      </div>
      <AddCardModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddCard} />
    </div>
  );
}; 