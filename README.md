# Johan Karkaria — Portfolio Website

Personal portfolio website built with Next.js. Includes an AI-powered chat feature ("Digital Twin") that answers questions about my career using OpenRouter.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- CSS Modules
- OpenRouter API (LLaMA 3.3 70B free tier with automatic fallback)

## Features

- Animated particle canvas background
- Sections: Hero, About, Skills, Projects, Certifications, Portfolio, Contact
- AI Digital Twin chat — streams responses about my career, projects, and skills
- Responsive design

## Run Locally

```bash
git clone https://github.com/johankarkaria/myportfoliowebsite.git
cd myportfoliowebsite
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Create a `.env` file in the root:

```
OPENROUTER_API_KEY=your_openrouter_api_key
```

The AI chat will not work without this key. Get a free key at [openrouter.ai](https://openrouter.ai).

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add `OPENROUTER_API_KEY` under Project Settings > Environment Variables
4. Deploy

## Contact

johankar555@gmail.com  
[linkedin.com/in/johan-karkaria](https://www.linkedin.com/in/johan-karkaria)
