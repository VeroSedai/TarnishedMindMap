# Elden Ring Lore Board

A drag & drop web app inspired by tools like Mural, designed to build mind maps and reconstruct the lore of Elden Ring.
It integrates official data through the GraphQL API of [Elden Ring Fan API](https://docs.eldenring.fanapis.com/), with support for saving boards and real-time collaboration.



<img width="1728" height="936" alt="image" src="https://github.com/user-attachments/assets/3fb56996-3182-428e-a2d8-e448dbeb133c" />

---

## Features

* Interactive drag & drop board: create nodes, connect them, and visualize relationships between characters, events, and locations.
* GraphQL data integration: automatically fetch information about NPCs, items, bosses, and areas of the Elden Ring world.
* Supabase authentication:

  * User registration and login
  * Private groups for board management
* Real-time collaboration with `@superviz/react-sdk` + `yjs`
* Data persistence with Supabase
* Export boards as images (via `html-to-image`)

---

## Tech Stack

* **Framework**: React (CRA, react-scripts)
* **UI / Graph Rendering**: React Flow (`reactflow`)
* **Routing**: React Router DOM
* **Data fetching**: GraphQL + `graphql-request`
* **State & utilities**: `lodash`, `uuid`
* **Authentication & Database**: Supabase (`@supabase/supabase-js`)
* **Collaboration / Realtime**: `@superviz/react-sdk`, `@superviz/yjs`, `yjs`
* **Export / Images**: `html-to-image`
* **Deployment**: GitHub Pages (`gh-pages`)

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-elden-ring-mind-map.git
cd react-elden-ring-mind-map
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a file called `.env.local` in the project root with these values:

```env
# Supabase
REACT_APP_SUPA_URL =your_supabase_url
REACT_APP_SUPA_ANON =your_supabase_anon_key

# Superviz
REACT_APP_SUPVIZ=your_superviz_api_key

# Elden Ring API (GraphQL)
REACT_APP_ER_API=https://eldenring.fanapis.com/graphql
```

*(Note: in Create React App, env variables must start with `REACT_APP_`)*

### 4. Start the development server

```bash
npm start
```

### 5. Build & Deploy to GitHub Pages

```bash
npm run deploy
```
---

## Roadmap

* Read-only mode for guest users
* Export board to PDF/JSON in addition to PNG
* Tags and advanced filtering for nodes
* Integration with additional lore APIs or wikis
* Optimized mobile UI

---

## Contributing

Contributions are welcome.
Open an issue or submit a pull request to improve the board.

---

## License

MIT License
Created by Elden Ring fans for Elden Ring fans.
