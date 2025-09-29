# Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live Site**: [tolib.me](https://tolib.me)

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Modern UI** - Built with Radix UI components and Tailwind CSS
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Built with Next.js best practices

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Docker (Recommended)
```bash
# Development with hot reload
docker-compose --profile dev up portfolio-dev

# Production build
docker-compose up portfolio
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + GitHub Actions

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── components/      # React components
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/ui/       # Reusable UI components
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🐳 Docker Deployment

The project includes complete Docker configuration:

- **Multi-stage builds** for optimized production images
- **Development containers** with hot reload
- **Production deployment** with health checks
- **CI/CD pipeline** with GitHub Actions

See [`DOCKER.md`](DOCKER.md) for detailed Docker usage.

## 🚀 Deployment

Automatic deployment via GitHub Actions:
1. Push to `main` branch
2. Docker image builds and pushes to GHCR
3. Server pulls and deploys new version
4. Health checks ensure successful deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for setup instructions.

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio!
