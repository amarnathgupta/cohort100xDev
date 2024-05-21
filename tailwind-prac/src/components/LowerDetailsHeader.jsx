import React from 'react'

export default function LowerDetailsHeader() {
    const orders = [
  {
    orderId: '281209',
    status: 'Successful',
    transactionId: 'TRX123456',
    date: 'Today, 8:45 PM',
    orderAmount: 1125.00,
  },
  {
    orderId: '281210',
    status: 'Processing',
    transactionId: 'TRX789012',
    date: 'Tomorrow, 10:00 AM',
    orderAmount: 950.50,
  },
  {
    orderId: '281211',
    status: 'Successful',
    transactionId: 'TRX345678',
    date: 'Yesterday, 3:30 PM',
    orderAmount: 750.00,
  },
  {
    orderId: '281212',
    status: 'Successful',
    transactionId: 'TRX901234',
    date: 'Today, 11:20 AM',
    orderAmount: 2000.00,
  },
  {
    orderId: '281213',
    status: 'Processing',
    transactionId: 'TRX567890',
    date: 'Tomorrow, 9:00 AM',
    orderAmount: 1800.00,
  },
  {
    orderId: '281214',
    status: 'Processing',
    transactionId: 'TRX098765',
    date: 'Yesterday, 2:00 PM',
    orderAmount: 500.00,
  },
  {
    orderId: '281215',
    status: 'Successful',
    transactionId: 'TRX456789',
    date: 'Today, 10:30 AM',
    orderAmount: 3000.00,
  },
  {
    orderId: '281216',
    status: 'Processing',
    transactionId: 'TRX987654',
    date: 'Tomorrow, 11:30 AM',
    orderAmount: 1200.00,
  },
  {
    orderId: '281217',
    status: 'Processing',
    transactionId: 'TRX654321',
    date: 'Yesterday, 4:00 PM',
    orderAmount: 900.00,
  },
  {
    orderId: '281218',
    status: 'Successful',
    transactionId: 'TRX234567',
    date: 'Today, 9:45 AM',
    orderAmount: 1500.00,
  },
];      
  return (
    <div >
        <div className='flex px-2.5 py-3 gap-2 rounded-s border border-[#D9D9D9] items-center shadow-sm w-1/3'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className='w-full'>
                    <input className='outline-none
                    text-lg w-full' type='text' placeholder='Order ID or transaction ID' />
                </div>
        </div>
        <div className='flex justify-between px-3.5 py-3 my-2 '>
            <div className='text-grey-primary font-semibold flex justify-start w-1/5'>
                Order ID
            </div>
            <div className='text-grey-primary font-semibold flex justify-start w-1/5'>
                Status
            </div>
            <div className='text-grey-primary font-semibold flex justify-start w-1/5'>
                Transactions
            </div>
            <div className='text-grey-primary font-semibold flex justify-start w-1/5'>
                Refund Date
            </div>
            <div className='text-grey-primary font-semibold flex justify-end w-1/5'>
                Order Amount
            </div>
        </div>
        {
            orders.map(({orderId, status, transactionId, date, orderAmount}) => (
                <List 
                    orderId={orderId}
                    status={status}
                    transactionId={transactionId}
                    date={date}
                    orderAmount={orderAmount} 
                />
            ))
        }
    </div>
  )
}



function List({orderId, status, transactionId, date, orderAmount}) {
    return (
        <div className='flex justify-between px-3.5 py-3 hover:shadow-xl cursor-pointer'>
            <div className='text-blue-light font-semibold flex justify-start w-1/5 hover:underline'>
                #{orderId}
            </div>
            <div className='text-grey-primary font-semibold flex justify-start w-1/5 items-center gap-2'>
                {status == "Successful" ? (
                    <div className='bg-green-400 rounded-full h-2 w-2'></div>
                ): (
                    <div className='bg-gray-400 rounded-full h-2 w-2'></div>
                )}{status}
            </div>
            <div className='text-grey-primary flex justify-start w-1/5'>
                {transactionId}
            </div>
            <div className='text-grey-primary flex justify-start w-1/5'>
                {date}
            </div>
            <div className='text-grey-primary font-semibold flex justify-end w-1/5'>
                ₹{orderAmount.toFixed(2)}
            </div>
        </div>
    );
}