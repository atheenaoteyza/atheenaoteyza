# Portfolio | Atheena Luis Ysabel B. Oteyza

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

🚀 **Live Demo:** [https://atheenaoteyza.vercel.app](https://atheenaoteyza.vercel.app/)

A "future-proof" engineering portfolio showcasing high-performance software solutions. This platform demonstrates my ability to architect scalable solutions by bridging modern frontend frameworks (Next.js) with robust enterprise backends (.NET/C#).

> *"Building scalable, efficient systems for the modern web."*

## 🚀 About Me

I am a Software Engineer focused on building production-ready applications that solve real-world problems. My approach to development is grounded in **systems thinking and optimization**—leveraging my engineering background to design workflows that are not just functional, but highly efficient and scalable.

I specialize in full-stack development, combining the flexibility of the **MERN stack** with the structural discipline of the **.NET ecosystem**. Whether optimizing database queries or designing intuitive UIs, I aim to reduce friction and drive operational excellence through code.

## 🛠️ Tech Stack

### Core Engineering
* **Frontend:** Next.js 15 (App Router), React 19, TypeScript
* **Backend:** C#, .NET Core, Node.js
* **Database:** SQL Server (Relational), MongoDB (NoSQL), PostgreSQL

### Tools & DevOps
* **Design:** Tailwind CSS, Framer Motion
* **Infrastructure:** Docker, Firebase, AWS S3
* **Management:** Git, DBeaver, Postman

## ✨ Key Features

* **⚡ Optimization First:** Built with **Incremental Static Regeneration (ISR)** to balance data freshness with static performance.
* **📊 Data Visualization:** Integrated GitHub activity charts to visualize consistent productivity and output.
* **🔄 Infinite Marquee Tech Stack:** A dynamic, auto-scrolling display of my technical toolkit.
* **🏆 Certification Gallery:** A modal-based credential showcase featuring backdrop blur effects and detailed skill breakdowns.
* **🎨 Professional UI:** A Dark Mode-first aesthetic optimized for readability and user experience.

## 📦 Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

### Prerequisites
* Node.js 18+ 
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/atheenaoteyza.git](https://github.com/yourusername/atheenaoteyza.git)
    cd atheenaoteyza
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```bash
├── components/           # UI Components
│   ├── Certifications.js     # Modal-based certification gallery
│   ├── ContributionChart.js  # GitHub contribution graph visualization
│   ├── GithubStats.js        # GitHub statistics display
│   ├── Header.js             # Site navigation and branding
│   ├── LeftSection.js        # Sticky sidebar profile container
│   ├── ProfileCard.js        # Main user profile card
│   ├── ProjectGrid.js        # Grid display for portfolio projects
│   ├── RightSection.js       # Main content area (Tabs for Projects/Certs)
│   ├── TechStack.js          # Infinite scrolling tech marquee
│   ├── ThemeToggle.js        # Dark/Light mode switcher
│   ├── MockContent.js        # Static text data
│   └── MockProjects.js       # Project data structure
├── context/              # React Context API
│   └── StatsContext.js       # State management for app-wide stats
├── lib/                  # Utility libraries
│   └── github.js             # GitHub API fetching logic
├── pages/                # Next.js Pages Router
│   ├── api/                  # API Routes
│   │   └── hello.js          # Example API endpoint
│   ├── _app.js               # App entry point (Global providers)
│   ├── _document.js          # HTML document structure
│   └── index.js              # Homepage
├── public/               # Static Assets
│   ├── atheenadev.jpg           # Profile image
│   └── logos/                # (Optional) Local SVG logos
├── styles/               # Global Styles
│   └── globals.css           # Tailwind imports and custom CSS
├── .env.local            # Environment variables
├── package.json          # Project dependencies
└── README.md             # Project documentation
