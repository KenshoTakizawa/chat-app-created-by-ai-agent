# GPT-4o Chat App

A ChatGPT-like application with advanced memory system, built with modern web technologies and deployed on AWS using Terraform.

## Features

- 🤖 GPT-4o integration via OpenAI API
- 💾 3-tier memory system (short/medium/long-term)
- 💬 ChatGPT-like UI/UX
- 🔒 Secure user data management
- ☁️ Scalable AWS serverless architecture
- 🏗️ Infrastructure as Code with Terraform

## Quick Start

1. **Setup project:**
   ```bash
   npm run setup
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Start development:**
   ```bash
   npm run docker:up  # Start local database
   npm run dev        # Start frontend & backend
   ```

4. **Access the app:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Project Structure

```
├── frontend/          # React frontend (Next.js)
├── backend/           # Express.js API server
├── infrastructure/    # Terraform configurations
├── docker/           # Docker configurations
├── docs/             # Documentation
└── scripts/          # Deployment scripts
```

## Development Steps

Follow the implementation steps in `app-document.md` for detailed 30-minute development phases.

## License

MIT