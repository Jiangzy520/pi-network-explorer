# Pi Network Explorer 🔍
A blockchain explorer for Pi Network inspired by [piscan.io](https://piscan.io/), built with modern web technologies.

## 🌟 Features

- **📊 Market Data Display**: Real-time market cap, price, and supply information
- **🔍 Search Functionality**: Search for addresses, transactions, and blocks
- **📈 Interactive Charts**: Price and volume visualization with Recharts
- **📋 Transaction Tables**: Latest transactions and operations display
- **🎨 Modern UI**: Beautiful purple gradient design with glassmorphism effects
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Fast Performance**: Built with Next.js and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm/yarn/pnpm/bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jiangzy520/pi-network-explorer.git
cd pi-network-explorer
```

2. Install dependencies:
```bash
# Using bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. Start the development server:
```bash
# Using bun
bun run dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build and Deploy

### Build for production:
```bash
bun run build
```

### Deploy to Netlify:
```bash
# The project is configured for static export
# Simply upload the `out` folder to Netlify
```

## 🎨 Design Features

- **Purple Gradient Background**: Beautiful gradient from purple-600 to purple-800
- **Glassmorphism Cards**: Semi-transparent white cards with backdrop blur
- **Interactive Elements**: Hover effects and smooth transitions
- **Modern Typography**: Clean and readable font hierarchy
- **Responsive Layout**: Grid-based layout that adapts to all screen sizes

## 📊 Data Structure

The current implementation uses mock data to demonstrate the interface. In a production environment, you would integrate with:

- Pi Network RPC API
- Stellar Network API (as Pi Network is based on Stellar)
- Custom blockchain indexing service

## 🔧 Customization

### Adding Real Data

1. Replace mock data in `src/app/page.tsx`
2. Integrate with Pi Network API endpoints
3. Add data fetching utilities in `src/lib/`
4. Implement real-time updates with WebSockets

### Styling Customization

- Colors: Edit `tailwind.config.ts`
- Components: Modify files in `src/components/ui/`
- Layouts: Update `src/app/layout.tsx`

## 📁 Project Structure

```
pi-network-explorer/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── PriceChart.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

## 🌐 Live Demo

- **Live Site**: [https://same-9bfdkj4nyx0-latest.netlify.app](https://same-9bfdkj4nyx0-latest.netlify.app)
- **Original Design**: [piscan.io](https://piscan.io/)

## 📸 Screenshots

The interface closely replicates the design of piscan.io with:
- Header navigation with dropdown menus
- Market statistics cards
- Interactive price chart
- Transaction and operations tables
- Professional footer

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 TODO

- [ ] Integrate real Pi Network API
- [ ] Add address detail pages
- [ ] Implement transaction detail views
- [ ] Add multi-language support
- [ ] Optimize mobile experience
- [ ] Add data caching layer
- [ ] Implement real-time updates
- [ ] Add wallet connection feature

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by [Jiangzy520](https://github.com/Jiangzy520)

---

**Note**: This is a UI replica for educational and development purposes. For production use, ensure you have proper API access and comply with relevant blockchain data usage policies.