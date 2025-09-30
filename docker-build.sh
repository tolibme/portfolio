#!/bin/bash

# Portfolio Docker Build Scripts
# Usage: ./docker-build.sh [dev|prod|fast]

set -e

case "$1" in
  "dev")
    echo "🚀 Building development Docker image..."
    docker-compose -f docker-compose.yml up --build portfolio-dev
    ;;
  "prod")
    echo "🏗️ Building production Docker image..."
    docker-compose -f docker-compose.yml up --build portfolio-prod
    ;;
  "fast")
    echo "⚡ Fast development build (no cache)..."
    docker build -f Dockerfile.dev -t portfolio:dev --no-cache .
    docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules portfolio:dev
    ;;
  *)
    echo "Usage: $0 [dev|prod|fast]"
    echo "  dev  - Development build with hot reload"
    echo "  prod - Production build (optimized)"
    echo "  fast - Fast development build (no cache)"
    exit 1
    ;;
esac