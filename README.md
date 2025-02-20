# Abdelrahman Younes Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- Modern and responsive design
- Smooth animations with Framer Motion
- Dark mode support
- Optimized images and assets
- SEO friendly
- Fast loading times

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/abdelrahman-younes-portfolio.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## Deployment

### Build for Production

1. Create a production build:
```bash
npm run build
# or
yarn build
```

2. Test the production build locally:
```bash
npm run start
# or
yarn start
```

### Deployment Platforms

#### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

#### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── app/        # App router pages
│   ├── components/ # React components
│   └── styles/     # Global styles
├── next.config.js  # Next.js configuration
└── tailwind.config.js # Tailwind configuration
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Performance Optimization

- Images are optimized using Next.js Image component
- CSS is purged in production
- JavaScript is minified and split into chunks
- Console logs are removed in production
- Assets are cached and served from CDN

## License

This project is licensed under the MIT License. 