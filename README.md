# Cinderwell Garage

Service-desk board for an independent repair shop on the cinder lot. Advisors use it to run the floor: bays, promised times, long repair instructions, the customer roster, parts holds, and crew load.

## What it does

- **Shop floor** groups today's repair orders by bay, with job kind, estimate, and the advisor instruction on each ticket.
- **Customers** is a searchable roster with account filters and row selection for pickup texts.
- **Crew** shows how many jobs each technician still has open.
- Opening an order focuses a dialog. Escape closes it and the listener is removed.

The shop day in seed data is `2026-08-17`, so the board stays stable in tests.

## Requirements

- Node.js 20
- npm (this repo ships exactly one lockfile: `package-lock.json`)

## Scripts

```bash
npm install
npm run dev
npm test
npm run lint
npm run typecheck
npm run build
```

Tests use Vitest and Testing Library against local seed data only.
