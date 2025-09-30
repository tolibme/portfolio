# Portfolio Docker Build Scripts for Windows
# Usage: .\docker-build.ps1 [dev|prod|fast]

param(
    [Parameter(Position=0)]
    [ValidateSet("dev", "prod", "fast")]
    [string]$Mode = "dev"
)

switch ($Mode) {
    "dev" {
        Write-Host "🚀 Building development Docker image..." -ForegroundColor Green
        docker-compose -f docker-compose.yml up --build portfolio-dev
    }
    "prod" {
        Write-Host "🏗️ Building production Docker image..." -ForegroundColor Blue
        docker-compose -f docker-compose.yml up --build portfolio-prod
    }
    "fast" {
        Write-Host "⚡ Fast development build (no cache)..." -ForegroundColor Yellow
        docker build -f Dockerfile.dev -t portfolio:dev --no-cache .
        docker run -p 3001:3001 -v ${PWD}:/app -v /app/node_modules portfolio:dev
    }
    default {
        Write-Host "Usage: .\docker-build.ps1 [dev|prod|fast]" -ForegroundColor Red
        Write-Host "  dev  - Development build with hot reload" -ForegroundColor White
        Write-Host "  prod - Production build (optimized)" -ForegroundColor White
        Write-Host "  fast - Fast development build (no cache)" -ForegroundColor White
    }
}