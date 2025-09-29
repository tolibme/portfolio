# GitHub Actions Deployment Configuration

This document describes the updated GitHub Actions workflow for deploying the Dockerized portfolio application.

## Workflow Overview

The deployment workflow now uses Docker and GitHub Container Registry (GHCR) for building and deploying the application.

### Workflow Jobs

1. **Build Job**: Builds and pushes Docker image to GHCR
2. **Deploy Job**: Deploys the image to your server using docker-compose

## Required Secrets

Configure these secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

### Existing Secrets (keep these)
- `VM_KEY` - SSH private key for server access
- `VM_USER` - SSH username for server
- `VM_HOST` - Server hostname or IP address

### New/Updated Secrets
- `GITHUB_TOKEN` - Automatically provided by GitHub (no action needed)

## Server Setup Requirements

Your server needs the following installed:
- Docker
- Docker Compose
- Git

### Initial Server Setup

```bash
# Install Docker (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone repository (if not already done)
git clone https://github.com/tolibme/portfolio.git ~/portfolio
cd ~/portfolio
```

## Workflow Features

### Multi-Platform Builds
- Builds for both `linux/amd64` and `linux/arm64`
- Uses Docker Buildx for cross-platform support

### Caching
- Uses GitHub Actions cache for Docker layers
- Speeds up subsequent builds

### Security
- Uses GitHub Container Registry (GHCR)
- Automatic token authentication
- Multi-stage builds for minimal attack surface

### Health Checks
- Verifies container is running
- Tests HTTP endpoint availability
- Fails deployment if unhealthy

## Environment Variables

The workflow uses these environment variables:

- `REGISTRY`: Container registry URL (ghcr.io)
- `IMAGE_NAME`: Full image name with repository
- `PORTFOLIO_IMAGE`: Image URL for docker-compose

## Deployment Process

1. **On Push to Main**:
   - Code is checked out
   - Docker image is built with multiple tags
   - Image is pushed to GHCR
   - Server pulls new image
   - Containers are recreated with new image
   - Health check verifies deployment

2. **On Pull Requests**:
   - Only builds and pushes image (no deployment)
   - Useful for testing builds

## Troubleshooting

### Common Issues

1. **Permission Denied on Server**
   ```bash
   # Add user to docker group
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

2. **Image Pull Fails**
   ```bash
   # Login manually on server
   docker login ghcr.io -u USERNAME
   ```

3. **Port Already in Use**
   ```bash
   # Check what's using port 3000
   sudo netstat -tulpn | grep :3000
   # Stop conflicting services
   sudo systemctl stop service-name
   ```

### Manual Deployment

If the workflow fails, you can deploy manually:

```bash
# SSH to server
ssh user@your-server

# Navigate to project
cd ~/portfolio

# Pull latest changes
git pull origin main

# Set image variable
export PORTFOLIO_IMAGE=ghcr.io/tolibme/portfolio:latest

# Deploy
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d portfolio-prod
```

## Monitoring

### Check Deployment Status
```bash
# View running containers
docker ps

# View logs
docker-compose -f docker-compose.prod.yml logs portfolio-prod

# Follow logs
docker-compose -f docker-compose.prod.yml logs -f portfolio-prod
```

### Health Check
```bash
# Test application
curl http://localhost:3000

# Check container health
docker inspect portfolio-portfolio-prod-1 | grep Health -A 10
```