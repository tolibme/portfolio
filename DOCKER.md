# Docker Configuration for Portfolio

Simple Docker setup for the portfolio project.

## Files

- `Dockerfile` - Simple build configuration
- `docker-compose.yml` - Local development
- `docker-compose.prod.yml` - Production deployment
- `.dockerignore` - Build optimization

## Usage

### Local Development

```bash
# Build and run locally
docker-compose up

# Run in background
docker-compose up -d
```

### Production

```bash
# Deploy production version
docker-compose -f docker-compose.prod.yml up -d
```

### Individual Commands

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## Environment Variables

- `NODE_ENV` - Set to 'production' or 'development'
- `PORT` - Application port (default: 3000)

## CI/CD Integration

GitHub Actions automatically:
- Builds Docker images on push
- Deploys to production server
- Uses GitHub Container Registry (GHCR)

See `DEPLOYMENT.md` for setup details.