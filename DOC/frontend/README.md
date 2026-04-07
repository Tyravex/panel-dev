# 🎮 Game Hosting Panel — Frontend

Modern SaaS-style dashboard for managing game servers (inspired by Pelican / Pterodactyl).

---

# 🚀 Tech Stack

* React + TypeScript
* Vite
* TailwindCSS
* React Router
* React Query
* Feature-Sliced Design (FSD)

---

# 🧠 Architecture Overview

This project follows a **Feature-Sliced Design (FSD)** architecture.

It is designed for:

* scalability
* modularity
* clean separation of concerns

---

# 📁 Project Structure

```
src/

├── app/                # Application-level setup (providers, routing, global config)
├── layouts/            # Layout wrappers (Main, Auth, Minimal)
├── templates/          # UI templates (page-level composition blocks)
├── pages/              # Route pages (entry points for views)
├── features/           # Business logic (auth, servers, users, etc.)
├── entities/           # Core data models (server, user, etc.)
├── widgets/            # Large reusable UI blocks (sidebar, navbar)
├── shared/             # Shared utilities, UI, API layer
├── processes/          # Optional flows (auth flows, onboarding)
├── styles/             # Global styles
```

---

# 📦 Folder Breakdown

## 🔧 app/

Application configuration layer.

### providers/

* `QueryProvider.tsx` → React Query setup
* `ThemeProvider.tsx` → global theme wrapper

### router/

* `routes.tsx` → route definitions
* `RouterProvider.tsx` → router wrapper
* `ProtectedRoute.tsx` → auth guard

---

## 🧱 layouts/

Defines page layouts.

* `MainLayout` → dashboard layout (sidebar + navbar)
* `AuthLayout` → login/register layout
* `MinimalLayout` → minimal pages (optional)

---

## 📄 pages/

Routing entry points.

* `dashboard/` → main dashboard
* `servers/` → server list & details
* `auth/` → login & register
* `users/` → users management
* `settings/` → user settings

---

## 🔥 features/

Business logic grouped by domain.

### auth/

* API calls (login/register)
* hooks (`useAuth`)
* auth-related components

### servers/

* `server.api.ts` → server endpoints
* `useServers.ts` → fetching logic
* components:

  * `ServerList`
  * `ServerItem`
  * `ServerActions`

---

## 📦 entities/

Core domain models.

* `server/` → server model/types
* `user/` → user model
* `deployment/` → deployment model

---

## 🧩 widgets/

Reusable UI blocks.

* `sidebar/` → main navigation
* `navbar/` → top bar (user menu, notifications)
* `server-card/` → server display
* `charts/` → stats/graphs

---

## 🔁 shared/

Global reusable utilities.

### api/

* `client.ts` → fetch wrapper
* `endpoints.ts` → API routes

### ui/

* Button, Input, Modal, Card components

### utils/

* helper functions

---

## 🎨 styles/

* `global.css` → Tailwind + global styles

---

# 🎯 Current Features

✅ Authentication UI (login/register)
✅ Protected routes
✅ Dashboard layout (sidebar + navbar)
✅ Notifications drawer
✅ User dropdown menu
✅ Server list (mock data)
✅ Server details page:

* stats (CPU, RAM, uptime)
* console (logs)

---

# 🧑‍💻 Development

```bash
npm install
npm run dev
```

---

# 🌐 API

Backend expected at:

```
http://localhost:3000
```

---

# 🏗️ Goal

Build a **production-ready game hosting panel UI** with:

* scalable architecture
* real-time server management
* modern SaaS UX

---

# ✨ Author Notes

This project is structured to grow into a **full SaaS platform**, not just a UI prototype.

Keep layers separated:

* UI → widgets/shared
* logic → features
* data → entities
* routing → pages/app

---

```
src/
├─ app/
│ ├─ api/
│ │ └─ axios.ts
│ ├─ providers/
│ │ ├─ AuthProvider.tsx
│ │ ├─ QueryProvider.tsx
│ │ ├─ ThemeProvider.tsx
│ │ └─ index.ts
│ ├─ router/
│ │ ├─ ProtectedRoute.tsx
│ │ ├─ RouterProvider.tsx
│ │ └─ routes.tsx
│ └─ store/
│ └─ auth.store.ts
├─ entities/
│ ├─ User.ts
│ └─ Server.ts
├─ features/
│ ├─ auth/
│ │ ├─ api/
│ │ │ └─ auth.api.ts
│ │ ├─ hooks/
│ │ │ └─ useAuth.ts
│ │ └─ model/
│ │ └─ useLogout.ts
│ └─ theme/
│ ├─ model/
│ │ └─ useTheme.ts
│ └─ ui/
│ └─ ThemeSwitcher.tsx
├─ layouts/
│ ├─ AuthLayout/
│ │ ├─ AuthLayout.tsx
│ │ └─ index.ts
│ └─ MainLayout/
│ ├─ MainLayout.tsx
│ └─ index.ts
├─ pages/
│ ├─ auth/
│ │ ├─ LoginPage.tsx
│ │ └─ RegisterPage.tsx
│ ├─ dashboard/
│ │ ├─ DashboardPage.tsx
│ │ └─ ServerDetailsPage.tsx
│ ├─ profile/
│ │ └─ index.tsx
│ └─ settings/
│ └─ index.tsx
└─ widgets/
├─ navbar/
│ └─ ui/
│ └─ Navbar.tsx
└─ server/
└─ ServerCard.tsx
└─ sidebar/
└─ Sidebar.tsx
```