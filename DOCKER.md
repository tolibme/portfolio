# 🐳 Simple Docker Setup

## Quick Start

**Build and run:**
```bash
npm run docker
```

**Or manually:**
```bash
docker-compose up --build
```

**For production:**
```bash
docker-compose -f docker-compose.prod.yml up
```

## That's it! 🚀

- App runs on **http://localhost:3001**
- Simple single-stage build
- Fast and minimal configuration

## Build only (without running):
```bash
docker build -t portfolio .
```