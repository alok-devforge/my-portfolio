# 🚀 Alok Kumar - Portfolio Website

A modern, minimal portfolio website built with Next.js 15, featuring an interactive CLI terminal, glassmorphism design, and smooth animations.

## ✨ Key Features

- 💻 **Interactive CLI Terminal**: Full-featured command-line interface for exploring portfolio
- 🎨 **Minimal Glassmorphism Design**: Clean, modern UI with subtle glass effects
- 🌊 **Smooth Animations**: Powered by Framer Motion
- 📧 **Working Contact Form**: Integrated with EmailJS
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js 15 (App Router) and Turbopack
- � **SEO Optimized**: Proper meta tags and semantic HTML
- 🔗 **Smooth Navigation**: Seamless scrolling between sections

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Email Service**: EmailJS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Poppins)

## � Sections

1. **Hero** - Introduction with animated gradient background
2. **About** - Personal information and background
3. **Skills** - Technical skills and achievements
4. **Projects** - Featured projects with live demos
5. **Resume** - Work experience and education timeline
6. **Contact** - Working contact form with EmailJS integration
7. **CLI Terminal** - Interactive terminal for portfolio exploration

## 🎮 CLI Terminal Commands

The portfolio includes a fully functional terminal interface accessible via the floating button:

- `help` - Display all available commands
- `about` - Learn about me
- `skills` - View technical skills
- `projects` - See featured projects
- `achievements` - View my achievements
- `contact` - Get contact information
- `clear` - Clear the terminal
- `exit` - Close the terminal

**Features:**
- Command history navigation (↑/↓ arrow keys)
- Auto-complete suggestions
- Monochrome minimal design
- macOS-style traffic light buttons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alok-devforge/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to `.env.local`

See `EMAILJS_SETUP.md` for detailed instructions.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Render

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Configure:
   - **Name**: my-portfolio
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
7. Click **"Create Web Service"**

### Custom Domain Setup (alokdevforge.dev)

1. Once deployed, go to **Settings** → **Custom Domain**
2. Add your domain: `alokdevforge.dev`
3. Render will provide DNS records
4. Update DNS at name.com:
   - **CNAME Record**: `@` → `your-app.onrender.com`
   - **CNAME Record**: `www` → `your-app.onrender.com`
5. Wait 10-30 minutes for DNS propagation
6. SSL certificate will be auto-issued

**Note**: Render's free tier may have cold starts (30-50 seconds). For better performance, consider the paid tier ($7/month).

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles and utilities
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills & achievements
│   ├── Projects.tsx         # Featured projects
│   ├── Resume.tsx           # Experience & education
│   ├── Contact.tsx          # Contact form
│   ├── Terminal.tsx         # CLI terminal interface
│   ├── TerminalButton.tsx   # Floating terminal button
│   ├── ScrollManager.tsx    # Scroll position handler
│   └── AnimatedBackground.tsx
├── public/
│   ├── profile.jpg          # Profile image
│   └── resume.pdf           # Resume PDF
└── .env.local               # Environment variables
```

## 🎨 Customization

### Update Personal Information

1. **Site Title & Description** (`app/layout.tsx`): Update metadata
2. **Hero Section** (`components/Hero.tsx`): Change name and tagline
3. **About Section** (`components/About.tsx`): Update bio
4. **Projects** (`components/Projects.tsx`): Add your projects
5. **Skills** (`components/Skills.tsx`): Update skills and achievements
6. **Resume** (`components/Resume.tsx`): Add experience and education
7. **Terminal Data** (`components/Terminal.tsx`): Update portfolio data in `portfolioData` object

### Theme Colors

The portfolio uses a minimal blue/purple gradient theme. Customize colors in `app/globals.css`:

```css
.accent-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
```

## 🎯 Featured Projects

- **MediScan**: AI Medical Imaging Platform
- **MAITRI**: Wildlife Safety & Tracking System
- **Location Tracker**: Real-Time GPS System

## 🏆 Achievements

- Finalist – IIT Madras Shaastra Coding Contest
- 1st Runner Up – Technologia 10.0 Hackathon
- Finalist – Status Code 2.0 Hackathon

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Portfolio**: [alokdevforge.dev](https://alokdevforge.dev)
- **GitHub**: [@alok-devforge](https://github.com/alok-devforge)
- **LinkedIn**: [alok-kumar](https://linkedin.com/in/alok-kumar-34874a28a)
- **Twitter**: [@alok_devforge](https://x.com/alok_devforge)
- **Email**: alok.csit@gmail.com

---

**Made with ❤️ by Alok Kumar**

Built using Next.js 15, TypeScript, Tailwind CSS 4, Framer Motion & EmailJS
