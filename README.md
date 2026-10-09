# John Bryan Ponce - Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, and Node.js.

**Live Website:** [brr-portfolio.vercel.app](https://brr-portfolio.vercel.app/)
**Repository:** [GitHub Repository](https://github.com/Brr-bry/brr.dcism.org)

## Tech Stack

* React
* Vite
* Tailwind CSS
* Node.js
* GitHub REST API

## Project Structure

```text
brr.dcism.org/
├── client/
│   ├── public/
│   └── src/
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Requirements

* Node.js
* npm
* Git

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Brr-bry/brr.dcism.org.git
cd brr.dcism.org
```

### 2. Install dependencies

Install the root dependencies:

```bash
npm install
```

Install the client dependencies:

```bash
npm install --prefix client
```

### 3. Run the development server

Start the React/Vite development server:

```bash
npm run dev --prefix client
```

The development site will normally be available at:

```text
http://localhost:5173
```

If the GitHub API backend is being used locally, start the Node server in another terminal:

```bash
npm start
```

The Node server runs on:

```text
http://localhost:20261
```

## Production Build

Build the React application:

```bash
npm run build
```

This creates the production files in:

```text
client/dist/
```

Start the Node server:

```bash
npm start
```

The Node server serves the built React application from `client/dist`.

## GitHub API

The portfolio uses the GitHub REST API to display public repository information.

The GitHub API token is kept on the Node.js server and should **never be committed to the repository**.

For local development, create a `.env` file in the project root:

```env
GITHUB_TOKEN=your_github_token
```

Make sure `.env` is included in `.gitignore`.

## Deployment

The production application uses:

```text
Node.js
    ↓
server.js
    ↓
client/dist
```

After building the project, upload the required production files to the server and configure the Node.js application to run:

```bash
npm start
```

Set the `GITHUB_TOKEN` environment variable on the production server.
