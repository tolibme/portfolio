# 🚀 GitHub Workflow Updated

## What Changed

### ✅ **Simplified Structure**
- **Single job** instead of separate build/deploy jobs
- **Cleaner steps** with less complexity
- **Direct Docker commands** instead of complex actions

### ✅ **Faster Build Process**
- **Simple docker build** and push
- **Removed multi-platform builds** (faster)
- **Removed complex metadata** extraction

### ✅ **Streamlined Deployment**
- **Combined SSH setup** with deployment
- **Better error handling** in health checks
- **Cleaner environment variable usage**

## How It Works Now

1. **Push to main** → Triggers workflow
2. **Build Docker image** → Push to GHCR
3. **SSH to server** → Pull and deploy
4. **Health check** → Verify deployment

## Usage

Just push to `main` branch and the workflow will:
- Build your Docker image
- Deploy to your server
- Check if everything is working

**Much simpler and faster than before!** 🎯