# Vercel Deployment Guide for Payora

This guide will help you deploy your Payora application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Database**: Set up a PostgreSQL database (recommended: Neon, Supabase, or PlanetScale)

## Deployment Steps

### 1. Database Setup

First, set up your PostgreSQL database:

#### Option A: Using Neon (Recommended)
1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new project
3. Copy the connection string
4. Note both the pooled and direct connection URLs

#### Option B: Using Supabase
1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string

### 2. Deploy User App (Main App)

1. **Connect to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:
   - Framework Preset: `Other`
   - Root Directory: `./` (leave as default)
   - Build Command: `turbo build --filter=user-app`
   - Output Directory: `apps/user-app/.next`
   - Install Command: `npm install`

3. **Environment Variables**:
   Add these environment variables in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_connection_string
   DIRECT_URL=your_postgresql_direct_connection_string
   NEXTAUTH_SECRET=your-random-secret-key
   NEXTAUTH_URL=https://your-app-name.vercel.app
   ```

4. **Deploy**: Click "Deploy"

### 3. Deploy Merchant App (Optional)

To deploy the merchant app as a separate service:

1. Create another Vercel project
2. Use the same repository but with these settings:
   - Build Command: `turbo build --filter=merchant-app`
   - Output Directory: `apps/merchant-app/.next`
   - Same environment variables as above

### 4. Deploy Bank WebHook

For the webhook service:

1. Create a new Vercel project
2. Set Root Directory to: `apps/Bank-WebHook`
3. The vercel.json in the Bank-WebHook folder will handle the configuration
4. Add the same database environment variables

## Important Notes

### Database Migrations

After your first deployment, you'll need to run database migrations:

1. In your local terminal, with the production database URL:
   ```bash
   cd packages/db
   DATABASE_URL="your_production_database_url" npx prisma migrate deploy
   ```

2. Or use Vercel CLI:
   ```bash
   vercel env pull .env.local
   npm run db:migrate
   ```

### Environment Variables

Make sure to set these in Vercel dashboard for each app:

- `DATABASE_URL`: Your PostgreSQL connection string
- `DIRECT_URL`: Direct PostgreSQL connection (for migrations)
- `NEXTAUTH_SECRET`: Random secret for NextAuth.js
- `NEXTAUTH_URL`: Your app's URL (e.g., https://payora.vercel.app)

### Multiple Apps Strategy

You have three deployment options:

1. **Single Deployment**: Deploy only the user-app (recommended for MVP)
2. **Separate Apps**: Deploy user-app and merchant-app separately
3. **Monorepo**: Use Vercel's monorepo support with different projects

## Troubleshooting

### Build Errors

If you get build errors:

1. Check that all dependencies are in the root package.json
2. Verify turbo.json configuration
3. Make sure all environment variables are set

### Database Connection Issues

1. Verify your DATABASE_URL is correct
2. Check that your database allows connections from Vercel IPs
3. Ensure migrations have been run

### Monorepo Issues

If Vercel doesn't detect changes correctly:
1. Use the `ignoreCommand` in vercel.json
2. Consider deploying from different branches
3. Use Vercel CLI for more control

## Commands Reference

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from CLI
vercel

# Pull environment variables
vercel env pull

# Link project
vercel link
```

## Next Steps

After successful deployment:

1. Test all functionality
2. Set up custom domain (optional)
3. Configure monitoring and analytics
4. Set up CI/CD workflows
5. Configure database backups

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review build output for errors
3. Verify environment variables
4. Test locally with production environment variables
