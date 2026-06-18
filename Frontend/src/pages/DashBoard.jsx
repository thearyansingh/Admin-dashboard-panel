import React from 'react'

const DashBoard = () => {
  return (
    <main class="p-6">
        <h1 class="text-xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-semibold text-gray-800">Sales Overview</h2>
                    <select class="text-xs bg-white border border-gray-200 rounded px-2 py-1 text-gray-500 outline-none">
                        <option>Last 7 Days</option>
                    </select>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-gray-500 font-medium">Total No. of Invoice</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">234</p>
                        </div>
                        <div class="bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                        </div>
                    </div>

                    <div class="bg-green-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-gray-500 font-medium">Sales Amount</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">₹2,45,986</p>
                        </div>
                        <div class="bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-semibold text-gray-800">Purchase Overview</h2>
                    <select class="text-xs bg-white border border-gray-200 rounded px-2 py-1 text-gray-500 outline-none">
                        <option>Last 7 Days</option>
                    </select>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-red-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-gray-500 font-medium">Total No. of Invoice</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">234</p>
                        </div>
                        <div class="bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                             <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                        </div>
                    </div>

                    <div class="bg-orange-50 rounded-lg p-3 flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-gray-500 font-medium">Purchase Amount</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">₹1,00,000</p>
                        </div>
                        <div class="bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                            <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-semibold text-gray-800">User Details</h2>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-50 border border-gray-100 rounded-lg p-0 flex justify-between items-center overflow-hidden h-full">
                        <div class="p-3 z-10">
                            <p class="text-[10px] text-gray-500 font-medium">Total Customers</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">300</p>
                        </div>
                        <div class="relative h-full w-14 grid-pattern flex items-center justify-center border-l border-gray-100">
                             <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                        </div>
                    </div>

                    <div class="bg-gray-50 border border-gray-100 rounded-lg p-0 flex justify-between items-center overflow-hidden h-full">
                        <div class="p-3 z-10">
                            <p class="text-[10px] text-gray-500 font-medium">Total Vendors</p>
                            <p class="text-xl font-bold text-gray-900 mt-1">300</p>
                        </div>
                        <div class="relative h-full w-14 grid-pattern flex items-center justify-center border-l border-gray-100">
                             <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    

    </main>
  )
}

export default DashBoard
