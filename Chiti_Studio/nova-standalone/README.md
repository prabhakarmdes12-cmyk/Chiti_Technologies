# Nova - Adaptive Cinematic Concierge

Standalone embeddable version of Nova that can be added to any website with a single script tag.

## Quick Setup

### 1. Add Videos

Copy your Nova videos to the public folder:

```
nova-standalone/
└── public/
    └── nova/
        └── videos/
            ├── welcome.mp4        (4-5s)
            ├── thinking.mp4        (2-3s)
            ├── acknowledgement.mp4 (2-3s)
            ├── approval.mp4       (2-3s)
            └── closing.mp4         (4-5s)
```

### 2. Add to Any Website

Add this to your HTML:

```html
<script 
  src="https://your-domain.com/nova-embed.js" 
  data-api="https://your-domain.com/api/lead"
  data-position="bottom-right">
</script>
```

### 3. Configure API (Optional)

Create a `/api/lead` endpoint to receive leads:

```json
POST /api/lead
{
  "name": "John",
  "email": "john@example.com",
  "projectType": "website",
  "budget": "50k-1l",
  "timeline": "month"
}
```

## Configuration Options

| Attribute | Values | Default |
|-----------|--------|---------|
| `data-position` | `bottom-right`, `bottom-left` | `bottom-right` |
| `data-primaryColor` | hex color | `#6366f1` |
| `data-accentColor` | hex color | `#8b5cf6` |
| `data-api` | URL | `/api/lead` |

## Programmatic Control

```javascript
// Open Nova programmatically
Nova.open();

// Close Nova
Nova.close();

// Update config at runtime
Nova.setConfig('position', 'bottom-left');
```

## Deploy Options

### Option A: Self-Hosted
1. Host the `dist/nova-embed.js` on your server
2. Host videos in `public/nova/videos/`
3. Update script src to your URL

### Option B: CDN
Upload to any CDN (Cloudflare, AWS S3, etc.) and use that URL

### Option C: Next.js Integration
Copy the embedded version into your Next.js public folder

## Demo

Open `demo.html` in a browser to test the standalone version.