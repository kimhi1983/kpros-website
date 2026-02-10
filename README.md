# KPROS Website

Official website for KPROS CORP - Cosmetic Raw Material Frontier

## 🌐 Live URLs

- **Production**: https://kproscorp.com
- **Cloudflare Pages**: https://kpros-website.pages.dev

## 🚀 Deployment

This website is automatically deployed to Cloudflare Pages when changes are pushed to the `main` branch.

### Quick Deploy

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Cloudflare Pages will automatically build and deploy your changes.

### Manual Deploy (Optional)

```bash
npx wrangler pages deploy 3_Execution --project-name=kpros-website
```

## 📁 Project Structure

```
kpros-website/
├── 3_Execution/          # Website files (deployment source)
│   ├── index.html        # Main HTML file
│   ├── styles.css        # Stylesheet
│   ├── script.js         # JavaScript
│   └── assets/           # Images and media
├── wrangler.jsonc        # Cloudflare Pages configuration
└── README.md             # This file
```

## 🛠️ Local Development

### Using PowerShell Script

```powershell
.\start_server.ps1
```

### Using Python HTTP Server

```bash
cd 3_Execution
python -m http.server 8080
```

Then open http://localhost:8080 in your browser.

## ⚙️ Configuration

The website uses `wrangler.jsonc` for Cloudflare Pages configuration:

```json
{
  "name": "kpros-website",
  "compatibility_date": "2026-02-10",
  "pages_build_output_dir": "3_Execution"
}
```

## 📝 Features

- Responsive design
- Modern UI with animations
- Product showcase
- Contact information
- Promotion archive

## 🔧 Technologies

- HTML5
- CSS3 (with modern features)
- Vanilla JavaScript
- Cloudflare Pages (hosting)

## 📄 License

© 2026 KPROS CORP. All Rights Reserved.
