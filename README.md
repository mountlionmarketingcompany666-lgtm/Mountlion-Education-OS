# Mountlion Education OS™

Prototype for Oscarian Express. React + Vite + Tailwind, with mock data standing in for a backend.

## Run it locally

```bash
npm install
npm run dev
```

Vite will print two URLs:

```
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
```

Open the **Local** URL on your computer. Open the **Network** URL on your phone,
as long as the phone is on the **same Wi-Fi network** as your computer. If it
doesn't connect, check that your computer's firewall allows inbound connections
on port 5173, and that both devices are on the same network (not a guest network
that isolates devices from each other).

## What's implemented

- Homepage: hero, horizontal service storytelling, institution CTA, country strip
- Get Started → Create Account → Select User Type → personal Dashboard
- Get Started → Create Institution → pick type → details → Institution Dashboard
- Join Institution (search + request-to-join mock)
- Demo mode selector in the nav — switches the dashboard, terminology, and stats
  live, including a Platform Owner view
- Dashboard: tasks you can check off, activity feed, quick links, an AI panel
- Mountlion Connect: multi-conversation chat with local send/receive state
- Mountlion AI: suggested prompts, mock "thinking" state, mock responses
- Owner Center: institutions list, revenue snapshot, payment destinations
  (activate/switch — no real credentials ever touch the frontend)
- Fully responsive: top nav collapses to a slide-out menu + bottom tab bar
  on mobile

## What's stubbed for later

Subscriptions, Platform Settings, Service Integrations, and Audit Records in
the Owner Center render a placeholder — they're scaffolded as tabs so real
data can be wired in without restructuring anything.

## Next steps toward production

- `src/data/mock.js` and `src/data/reference.js` are the seams to replace with
  real API calls (Firebase, your own backend, etc.) — nothing else needs to
  change if you keep the same function signatures
- `src/context/AppContext.jsx` is where real authentication would replace the
  mock `createAccount` / `createInstitution` calls
- Payment provider credentials should live server-side only, never in this
  frontend code
