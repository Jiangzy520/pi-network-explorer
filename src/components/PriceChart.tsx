import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
// 模拟价格数据
const priceData = [
  { time: '5', price: 0.3450, volume: 5.21 },
  { time: '12:00', price: 0.3465, volume: 3.8 },
  { time: '6', price: 0.3480, volume: 4.2 },
  { time: '12:00', price: 0.3470, volume: 2.9 },
  { time: '7', price: 0.3485, volume: 6.1 },
  { time: '12:00', price: 0.3490, volume: 3.5 },
  { time: '8', price: 0.3495, volume: 5.8 },
];
const PriceChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={priceData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis
            yAxisId="price"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            domain={['dataMin - 0.001', 'dataMax + 0.001']}
          />
          <YAxis
            yAxisId="volume"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            hide
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '12px'
            }}
            formatter={(value: number, name: string) => [
              name === 'price' ? `$${value.toFixed(4)}` : `${value}M`,
              name === 'price' ? 'Price' : 'Volume'
            ]}
          />
          <Bar
            yAxisId="volume"
            dataKey="volume"
            fill="#c084fc"
            opacity={0.3}
            radius={[2, 2, 0, 0]}
          />
          <Line
            yAxisId="price"
            type="monotone"
            dataKey="price"
            stroke="#7c3aed"
            strokeWidth={2}
            dot={{ fill: '#7c3aed', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 4, stroke: '#7c3aed', strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      {/* Chart controls */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="flex space-x-2">
          <button className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
            1m
          </button>
          <button className="px-2 py-1 text-xs bg-purple-600 text-white rounded">
            30m
          </button>
          <button className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
            1h
          </button>
        </div>
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-600 rounded"></div>
            <span>Price</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-300 rounded"></div>
            <span>Volume</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceChart;