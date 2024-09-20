# **Agent Marketplace Frontend**

This is the frontend for the **Agent Marketplace**, a platform where users can browse, subscribe to, and interact with intelligent agents. Built with **Next.js** and **React.js**, this project forms the user interface for a marketplace that allows creators to upload agents, define inputs/outputs, and configure processing tasks, while users can subscribe to agents and interact with them.

---

## **Project Overview**

The **Agent Marketplace** is one of the first of its kind in the emerging field of intelligent agents. Users can explore a variety of agents across different categories, subscribe to them, and utilize them on-demand. Each agent has its own dedicated page with detailed descriptions, inputs, and outputs, allowing users to interact with agents that range from simple text processing to complex image generation.

The platform features:
- **Agent browsing**: Search, filter, and sort agents by category and tags.
- **Agent subscription**: Users can subscribe to agents and manage their subscriptions.
- **Agent interaction**: Users can interact with the agents they have subscribed to from their personal dashboard.
- **Creator profiles**: Each creator has a profile with a list of agents they’ve developed, along with links to their social media.

---

## **Tech Stack**

The frontend is built with the following technologies:
- **React.js**: Core framework for building the user interface.
- **Next.js**: Server-side rendering, routing, and API support for the project.
- **TypeScript**: Ensures type safety and helps with more reliable code.
- **Next/font**: Automatically optimizes and loads fonts.
- **Shadcn**: CSS-in-JS library for styling components.
- **Tailwind**: Utility-first CSS framework for styling components.

---

## **Frontend Structure**

The project is structured as follows:

- `src/components`: Contains reusable React components such as buttons, modals, input fields, and other UI elements.
- `/app`: Contains Next.js pages. Key pages include:
  - `(auth)`: Authentication pages for login, registration, and password reset.
  - `agents/[agent_id]`: Page for a specific agent.
    - `/reviews`: User Reviews for a specific agent.
  - `builders/[builder_id]`: Page for a specific agent builder.
  - `categories`: Page for browsing agents by category.
  - `(dashboard)`: Contains all pages related to user dashboard
    - `dashboard`: Main dashboard page.
    - `interaction`: Agent interaction page
    - `settings`: User settings page.
    - `support`: User support page.
  - `not-found`: Page for 404 / 500 errors.
  - `prices`: Page for browsing agents by price.
  - `search`: Page for searching agents by name, tag, category...

---

## **Getting Started**

To start working on the project locally, follow these steps:

### **1. Clone the repository:**

```bash
git clone https://github.com/keyko-io/agentmarketplace.git
cd agent-marketplace
```

### **2. Install dependencies:**

The project uses `npm`, but you can also use `yarn`, `pnpm`, or `bun` if you prefer.

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### **3. Start the development server:**

Run the development server on localhost:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### **4. File Editing:**

You can start editing the pages by modifying files in the `/app` directory. The app auto-updates as you edit the files.

For example, to edit the homepage, modify `app/page.tsx`.

---

## **Contributing**

Contributions are welcome! If you find any bugs or want to add new features, feel free to submit a pull request. Please ensure that your code is well-documented and tested before submitting.
