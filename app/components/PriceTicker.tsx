'use client'

interface PriceTickerProps {
  assets: Array<{
    name: string
    symbol: string
    value: number
  }>
}

export function PriceTicker({ assets }: PriceTickerProps) {
  // Simulated prices - in production would fetch from API
  const prices = {
    'BTC': 50000,
    'ETH': 2857,
    'XRP': 0.55
  }

  return (
    <div className="space-y-4">
      {assets.map((asset) => (
        <div key={asset.symbol} className="flex items-center justify-between p-3 bg-slate-700 rounded">
          <div>
            <span className="font-semibold">{asset.name}</span>
            <span className="text-gray-400 ml-2">{asset.symbol}</span>
          </div>
          <div className="text-right">
            <p className="font-mono">
              ${prices[asset.symbol as keyof typeof prices]?.toLocaleString()}
            </p>
            <p className="text-green-400 text-sm">+2.4%</p>
          </div>
        </div>
      ))}
    </div>
  )
}
