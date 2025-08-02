# 📊 InsightHub: Real-time Data Dashboard Builder

InsightHub is a powerful, drag-and-drop dashboard builder that allows users to connect live data from REST APIs or WebSocket feeds and visualize it using real-time charts. Built with React and TypeScript, InsightHub is perfect for developers, analysts, and teams who need quick, custom visualizations of live data sources.

## 🚀 Features

- 🧩 Drag-and-drop dashboard layout
- 🔌 Connect REST APIs or WebSocket data sources
- 📈 Real-time chart updates using Chart.js
- 💾 Save and load dashboards from localStorage
- 📤 Export and share dashboards easily

## 🛠️ Tech Stack

- TypeScript
- React + Vite
- TailwindCSS
- Chart.js
- WebSocket + REST API integration

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/insighthub-real-time-dashboard-builder-typescript.git
cd insighthub-real-time-dashboard-builder-typescript

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧠 How It Works

1. Add a chart widget by dragging from the toolbox.
2. Configure the data source (REST API or WebSocket URL).
3. The chart will update in real-time as new data arrives.
4. You can reposition and resize widgets freely.
5. Save your dashboard layout in localStorage.

## 📁 Project Structure

```
src/
│
├── components/          # UI components like ChartCard, Sidebar, etc.
├── hooks/               # Custom hooks for WebSocket and REST APIs
├── types/               # TypeScript interfaces
├── utils/               # Helper functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles (Tailwind)
```

## 📤 Exporting and Sharing

Click the "Export" button to download your dashboard configuration as JSON. You can later import it back or share it with teammates.

## 📜 License

MIT