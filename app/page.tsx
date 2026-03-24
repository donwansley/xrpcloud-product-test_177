'use client'

import { useState } from 'react'
import { PortfolioChart } from './components/PortfolioChart'
import { PriceTicker } from './components/PriceTicker'

export default function Dashboard() {
  const [portfolio] = useState([
    { name: 'Bitcoin', symbol: 'BTC', amount: 0.5, value: 25000 },
    { name: 'Ethereum', symbol: 'ETH', amount: 4.2, value: 12000 },
    { name: 'XRP', symbol: 'XRP', amount: 10000, value: 5500 },
  ])

  const totalValue = portfolio.reduce((sum, asset) => sum + asset.value, 0)

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Crypto Portfolio Dashboard</h1>
          <p className="text-gray-400">Built for @testuser_crypto</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Total Portfolio Value</p>
            <p className="text-3xl font-bold text-green-400">
              ${totalValue.toLocaleString()}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Assets</p>
            <p className="text-3xl font-bold">{portfolio.length}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm">24h Change</p>
            <p className="text-3xl font-bold text-green-400">+5.2%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Portfolio Distribution</h2>
            <PortfolioChart data={portfolio} />
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Live Prices</h2>
            <PriceTicker assets={portfolio} />
          </div>
        </div>

        <div className="mt-8 bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="pb-4">Asset</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Value</th>
                <th className="pb-4">% of Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((asset) => (
                <tr key={asset.symbol} className="border-t border-slate-700">
                  <td className="py-4">
                    <span className="font-semibold">{asset.name}</span>
                    <span className="text-gray-400 ml-2">{asset.symbol}</span>
                  </td>
                  <td className="py-4">{asset.amount}</td>
                  <td className="py-4">${asset.value.toLocaleString()}</td>
                  <td className="py-4">
                    {((asset.value / totalValue) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Built with ❤️ by XRPcloud agents</p>
        </footer>
      </div>
    </main>
  )
}
