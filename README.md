# Next.js SaaS Starter — Production-Grade Dashboard Template

🔗 **Live Demo:** [https://nextjs-saas-starter-green.vercel.app/](https://nextjs-saas-starter-green.vercel.app/)

> A full-featured, production-ready SaaS starter built with **Next.js 15**, **Prisma**, **Tailwind CSS**, and **TypeScript**. Clone it, run it, and start building your SaaS in minutes.

---

## ✨ Features

- 🔐 **Authentication** — JWT-based auth with login, register, and session management
- 📊 **Analytics Dashboard** — Interactive charts and KPI cards with Recharts
- 📣 **Campaign Management** — Full CRUD with filtering, sorting, and status tracking
- 👥 **Multi-Tenant Orgs** — Organization-scoped data with role-based access
- ⚡ **Prisma ORM** — Type-safe database with SQLite (zero-config) or PostgreSQL
- 🛡️ **Route Protection** — Middleware-based auth guards for protected routes
- 🎨 **Dark Theme UI** — Premium glassmorphic design with Tailwind CSS
- 📱 **Responsive** — Mobile-first design that works on all screen sizes

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/KhalDragonFeng/nextjs-saas-starter.git
cd nextjs-saas-starter

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Initialize database & seed demo data
npm run db:setup

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🔑 Demo Credentials

| Field    | Value            |
|----------|------------------|
| Email    | `demo@saas.com`  |
| Password | `password123`    |

---

## 🏗️ Project Structure

```
nextjs-saas-starter/
├── prisma/
│   ├── schema.prisma          # Database schema (User, Organization, Campaign)
│   └── seed.ts                # Demo data seeder
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── login/page.tsx     # Authentication - Login
│   │   ├── register/page.tsx  # Authentication - Register
│   │   ├── dashboard/
│   │   │   ├── page.tsx       # Dashboard overview (stats + charts)
│   │   │   ├── campaigns/     # Campaign management with filters
│   │   │   ├── analytics/     # Analytics with funnel & channels
│   │   │   └── settings/      # User profile settings
│   │   └── api/
│   │       ├── auth/          # Login, Register, Logout, Me endpoints
│   │       └── campaigns/     # Campaign CRUD API
│   ├── components/
│   │   ├── ui/                # Reusable UI primitives (Button, Card, Input, Badge)
│   │   └── dashboard/         # Dashboard-specific components
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client singleton
│   │   ├── auth.ts            # JWT session management
│   │   ├── utils.ts           # Formatting utilities
│   │   └── mock-data.ts       # Realistic demo data
│   ├── types/index.ts         # Shared TypeScript interfaces
│   └── middleware.ts          # Route protection middleware
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🛠️ Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | Next.js 15 (App Router)                 |
| Language   | TypeScript 5                            |
| Styling    | Tailwind CSS 3                          |
| Database   | Prisma ORM + SQLite (swappable to PostgreSQL) |
| Auth       | JWT (jose) + HTTP-only cookies          |
| Charts     | Recharts                                |
| Deployment | Vercel / Docker / Any Node.js host      |

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

### Docker

```bash
docker build -t saas-starter .
docker run -p 3000:3000 saas-starter
```

### Switch to PostgreSQL

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Update `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/saas"
```

Then run `npx prisma db push`.

---

## 👨‍💻 Author

**Qifan Feng** — Senior Full-Stack Architect & DevOps Specialist

- 🏠 [Portfolio](https://khaldragonfeng.github.io/portfolio/)
- 💻 [GitHub](https://github.com/KhalDragonFeng)

---

## 📄 License

MIT — feel free to use this for your own projects.
