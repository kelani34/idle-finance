# Subdomain Setup for Documentation Redirect

This project includes a universal subdomain redirect for documentation access that works for any domain.

## Quick Summary

✅ **Universal Support**: Works with any domain automatically  
✅ **Development Ready**: Easy localhost testing  
✅ **Production Ready**: Automatic subdomain handling  
✅ **Configurable**: Environment variable support  

Any `docs.*` subdomain automatically redirects to your GitBook documentation.

## Setup Instructions

### For Local Development

#### 1. Update your hosts file

To test the subdomain locally, add entries to your hosts file:

**macOS/Linux:**
```bash
sudo nano /etc/hosts
```

**Windows:**
Open `C:\Windows\System32\drivers\etc\hosts` as Administrator

Add these lines:
```
127.0.0.1 docs.localhost
127.0.0.1 localhost
```

#### 2. Start the development server

```bash
npm run dev
```

#### 3. Test the subdomain

- Main site: http://localhost:3000
- Docs subdomain: http://docs.localhost:3000 (redirects to GitBook)

### For Production

The subdomain redirect works automatically for any domain. For example:
- If your site is `idlefinance.com`, then `docs.idlefinance.com` will redirect to GitBook
- If your site is `myapp.vercel.app`, then `docs.myapp.vercel.app` will redirect to GitBook

## How it works

The subdomain redirect is implemented using:

1. **Next.js Middleware** (`middleware.ts`): Detects any hostname that starts with `docs.` and redirects to the GitBook documentation
2. **Next.js Redirects** (`next.config.ts`): Additional redirect configuration with regex pattern matching

## Production Setup

The subdomain redirect works automatically for any domain. You just need to:

1. **Set up DNS records** for `docs.yourdomain.com` pointing to the same server as your main domain
2. **Configure your hosting provider** to handle subdomains (most platforms like Vercel, Netlify handle this automatically)

### Examples:

- Main site: `idlefinance.com` → Docs: `docs.idlefinance.com` 
- Vercel deployment: `myapp.vercel.app` → Docs: `docs.myapp.vercel.app`
- Custom domain: `example.com` → Docs: `docs.example.com`

All of these will automatically redirect to: `https://idle-finance.gitbook.io/idle-finance.md/`

### DNS Configuration Example:

For your domain registrar, add a CNAME record:
```
Type: CNAME
Name: docs
Value: yourmainsite.com (or your hosting provider's domain)
TTL: 300 (or your preference)
```

### Hosting Platform Support:

- **Vercel**: Automatically handles subdomains when you add them to your project
- **Netlify**: Supports subdomain redirects through their DNS management  
- **Cloudflare**: Full subdomain support with DNS management
- **AWS/DigitalOcean**: Requires manual DNS configuration
