const CardDetailsIcon = require('../../assets/card_details.svg').default;
const RecentTransactionsIcon = require('../../assets/recent_transactions.svg').default;
const DownArrowIcon = require('../../assets/down-arrow.svg').default;


interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
}

interface TransactionsProps {
  transactions: Transaction[];
  expanded: boolean;
  onToggle: () => void;
}

export const Transactions: React.FC<TransactionsProps> = ({ transactions, expanded , onToggle}) => (
  <div className="bg-[#F5F6FA] rounded-xl shadow p-6">
      <button className="w-full text-left font-semibold text-[#0C365A] flex items-center justify-between font-opensans" onClick={onToggle}>
      <span className="flex items-center gap-2"><img src={RecentTransactionsIcon} alt="Details" className="h-5" /> Recent transactions</span>
      <img src={DownArrowIcon} alt="Expand" className={`h-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
    </button>

    {expanded && <ul className="divide-y divide-gray-100 mt-7">
      {transactions.map((tx, idx) => (
        <li key={idx} className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            {/* <img src={tx.icon} alt="Merchant" className="h-8 w-8 rounded-full bg-gray-100" /> */}
            <span className="bg-gray rounded-full p-2 mb-1 mt-[-36px] shadow"> <img src={tx.icon} alt="Merchant" className="h-4 w-4 bg-gray-100" /></span>
            <div>
              <p className="font-semibold text-[#222] font-opensans">{tx.merchant}</p>
              <p className="text-xs text-gray-500 font-opensans">{tx.date}</p>
              <div className='flex items-center mt-3'>
                <img src={CardDetailsIcon} alt="Merchant" className="h-5 w-5 bg-gray-100" />
                <span className={`inline-block mt-1 px-2 rounded-full text-xs font-semibold text-[#325BAF]`}>{tx.type}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-semibold ${tx.amount > 0 ? 'text-[#01D167]' : 'text-[#222]'} font-opensans`}>{tx.amount > 0 ? '+S$' : '-S$'}{Math.abs(tx.amount)}</p>
          </div>
        </li>
      ))}
    </ul>}
  </div>
);
