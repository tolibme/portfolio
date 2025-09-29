# Docker Configuration for Portfolio

This project includes Docker configuration for both development and production environments.

## Files Created

- `Dockerfile` - Multi-stage production build
- `Dockerfile.dev` - Development build with hot reload
- `docker-compose.yml` - Development and production services
- `docker-compose.prod.yml` - Production-optimized configuration
- `.dockerignore` - Optimizes build context
- `nginx.conf` - Nginx reverse proxy configuration

## Usage

### Development

```bash
# Build and run development server with hot reload
docker-compose --profile dev up portfolio-dev

# Or build and run production build locally
docker-compose up portfolio
```

### Production

```bash
# Run production build
docker-compose -f docker-compose.prod.yml up -d portfolio-prod

# Run with Nginx reverse proxy (requires SSL setup)
docker-compose -f docker-compose.prod.yml --profile nginx up -d
```

### Individual Docker Commands

```bash
# Build production image
docker build -t portfolio .

# Run production container
docker run -p 3000:3000 portfolio

# Build development image
docker build -f Dockerfile.dev -t portfolio-dev .

# Run development container with volume mounting
docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules portfolio-dev
```

## Environment Variables

- `NODE_ENV` - Set to 'production' or 'development'
- `NEXT_TELEMETRY_DISABLED` - Disables Next.js telemetry
- `PORT` - Application port (default: 3000)

## Production Notes

1. The production Dockerfile uses multi-stage builds for optimization
2. Next.js standalone output is enabled in `next.config.ts`
3. The image runs as a non-root user for security
4. Nginx configuration includes SSL redirect and security headers
5. Health checks are configured for production deployment

## SSL Setup for Nginx

To use the Nginx reverse proxy with SSL:

1. Place your SSL certificate as `ssl/cert.pem`
2. Place your SSL key as `ssl/key.pem`
3. Uncomment the SSL lines in `nginx.conf`
4. Run with the nginx profile: `docker-compose -f docker-compose.prod.yml --profile nginx up -d`

## Resource Limits

Production configuration includes:
- Memory limit: 512MB
- Memory reservation: 256MB
- Health checks every 30 seconds