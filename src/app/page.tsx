"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import PriceChart from "@/components/PriceChart";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  // 模拟实时更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // 模拟数据
  const marketData = {
    marketCap: "$2,719,472,747.391",
    price: "$0.349",
    change24h: "3.866%",
    piSupply: "11,977,681,725.611 π",
    circulating: "7,785,493,121.647 π",
    locked: "5,207,392,825.427 π",
    cexBalance: "402,325,216.019 π",
    networkStats: {
      tps: "1.346 TPS",
      blocks: "22,078,175",
    }
  };
  const latestTransactions = [
    {
      signature: "8655df...2a9b23",
      time: "6 seconds ago",
      block: "22,078,174",
      ops: "1"
    },
    {
      signature: "c67eb8...3832c6",
      time: "6 seconds ago",
      block: "22,078,174",
      ops: "1"
    },
    {
      signature: "3ec304...220303",
      time: "6 seconds ago",
      block: "22,078,174",
      ops: "1"
    },
    {
      signature: "3064cc...544bde",
      time: "6 seconds ago",
      block: "22,078,174",
      ops: "1"
    },
    {
      signature: "92fbd4...377b87",
      time: "6 seconds ago",
      block: "22,078,174",
      ops: "1"
    }
  ];
  const latestOperations = [
    {
      sourceAccount: "GDO4UM...SFITOL",
      operation: "Create Claimable Balance",
      amount: "0.4 π",
      usdAmount: "$0.14",
      tx: "8655df7f5cfc356a...",
      time: "6 seconds ago"
    },
    {
      sourceAccount: "GA6STO...YM4VFZ",
      operation: "Pay",
      amount: "256.92 π",
      usdAmount: "$89.74",
      tx: "c67eb8306c92c433...",
      time: "6 seconds ago"
    },
    {
      sourceAccount: "GBIES5...IAELIA",
      operation: "Create Claimable Balance",
      amount: "2 π",
      usdAmount: "$0.7",
      tx: "3ec3040910f38dbd...",
      time: "6 seconds ago"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      {/* Navigation Header */}
      <nav className="bg-purple-700/80 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-sm">π</span>
                </div>
                <span className="text-white font-bold text-xl">PiScan</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-purple-200 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors">CEXs & Core Team</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors">Operations</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors">Transactions</a>
                <a href="#" className="text-white hover:text-purple-200 transition-colors">Blocks</a>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors">
                    <span>Nodes</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Mainnet Nodes</DropdownMenuItem>
                    <DropdownMenuItem>Testnet Nodes</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors">
                    <span>Statistics</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Account Distribution</DropdownMenuItem>
                    <DropdownMenuItem>Pi Unlocks 30 Days</DropdownMenuItem>
                    <DropdownMenuItem>Domain Auction Stats</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors">
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Pi Network transactions, wallets, and statistics
          </h1>
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-full bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500"
            />
            <Button
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-purple-600 hover:bg-purple-700"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Market cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{marketData.marketCap}</div>
              <div className="mt-2 space-y-1">
                <div className="text-sm text-gray-600">Price</div>
                <div className="text-lg font-semibold text-purple-600">{marketData.price}</div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">24h%</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-sm font-medium">{marketData.change24h}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pi Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{marketData.piSupply}</div>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Circulating</span>
                  <span className="text-sm font-medium">{marketData.circulating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Locked</span>
                  <span className="text-sm font-medium">{marketData.locked}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">CEX Balance (total)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{marketData.cexBalance}</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-800 rounded"></div>
                    <span className="text-sm text-gray-600">OKX</span>
                  </div>
                  <span className="text-sm font-medium">26,885,154.697 π</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm text-gray-600">Bitget</span>
                  </div>
                  <span className="text-sm font-medium">136,986,254.969 π</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Network Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">{marketData.networkStats.tps}</div>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Blocks</span>
                  <span className="text-sm font-medium">{marketData.networkStats.blocks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">TPS</span>
                  <span className="text-sm font-medium">1.346</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Chart and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Price Chart */}
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <PriceChart />
            </CardContent>
          </Card>
          {/* Latest Transactions */}
          <Card className="bg-white/90 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Latest Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Signature</TableHead>
                    <TableHead className="text-xs">Time</TableHead>
                    <TableHead className="text-xs">Block</TableHead>
                    <TableHead className="text-xs">Ops</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {latestTransactions.map((tx, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm text-blue-600 cursor-pointer hover:underline">
                        {tx.signature}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{tx.time}</TableCell>
                      <TableCell className="text-sm text-blue-600 cursor-pointer hover:underline">
                        {tx.block}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">{tx.ops}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        {/* Latest Operations */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 mt-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Latest Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source account</TableHead>
                  <TableHead>Operation</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Tx</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latestOperations.map((op, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm text-blue-600 cursor-pointer hover:underline">
                      {op.sourceAccount}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{op.operation}</div>
                        <div className="text-xs text-gray-500">{op.usdAmount}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{op.amount}</TableCell>
                    <TableCell className="font-mono text-sm text-blue-600 cursor-pointer hover:underline">
                      {op.tx}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{op.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-purple-400/30">
          <div className="flex flex-col sm:flex-row justify-between items-center text-white/80">
            <div className="text-sm">© 2025 PiScan. All Rights Reserved.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="text-sm text-red-400 hover:text-red-300 transition-colors">Report Scam Wallet</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}