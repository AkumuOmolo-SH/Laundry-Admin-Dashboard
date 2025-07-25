

**# Kneat Laundries – Business Admin Dashboard**

***## Table of Contents***

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Preview the System (Deployed Links)](#preview-the-system-deployed-links)
- [Contributing](#contributing)
- [License](#license)
  

---

**## Project Overview**

Kneat Laundries – Business Admin Dashboard is a simple yet smart web-based dashboard built specifically for small laundry businesses. It helps shop owners and employees manage customer laundry orders digitally. The platform allows users to view all current orders, add new ones, mark them as completed, or delete them when done — functioning like a digital notebook that’s clean, organized, and always up to date. It offers a user-friendly, responsive interface that streamlines workflow and enhances daily operations.

This Minimum Viable Product (MVP) focuses on core functionalities to provide a seamless digital management experience for laundry businesses.

---

**## Features**

As an administrator or employee, you can:

-   **View all laundry orders:** See a comprehensive list of all current laundry orders, including customer names and their current status.
-   **Add new orders:** Easily add new customer laundry orders through a short, intuitive form.
-   **Update order status:** Change the status of an order (e.g., from "Pending" to "Ready" or "Picked Up") to keep track of its progress.
-   **Delete completed or cancelled orders:** Remove orders that are no longer relevant from the system.
-   **Filter orders by status:** Quickly find specific orders by filtering them based on their current status.
-   **Sort orders:** Organize orders by submitted or completed dates for better overview.
-   **Clean, mobile-friendly dashboard:** Access and manage orders efficiently on various devices, thanks to a responsive design.
-   **Real-time updates:** Experience dynamic updates of your orders, powered by a local JSON database acting as a fake REST API.

---

**## Technologies Used**

The Kneat Laundries Dashboard is built with modern web technologies:

-   **Frontend:**
    -   [Next.js]: A React framework for production, providing server-side rendering and static site generation capabilities.
    -   [React]: A JavaScript library for building user interfaces.
    -   [Tailwind CSS]: A utility-first CSS framework for rapidly styling components.
    -   Global CSS: For additional styling and overrides.

---

-   **Backend (Fake API):**
    -   `db.json`: A simple JSON file serving as a local, fake REST API for order management.

-   **Deployment:**
    -   **Frontend:** Vercel
    -   **Backend (Fake API):** Render

---

**## Project Structure**

The project follows a well-organized structure, typical for Next.js applications:

```
.
├── components/
│ ├── Order/
│ ├── Background.jsx
│ ├── FilterBar.jsx
│ ├── Header.jsx
│ ├── NavBar.jsx
│ └── lib/
│ └── api.js // API utility functions for interacting with the backend
├── public/ // Static assets (e.g., images, favicon)
├── src/app/ // Main application directory for Next.js App Router
│ ├── AddOrder/
│ ├── Home/
│ ├── Order/
│ ├── OrderItem/
│ ├── favicon.ico
│ ├── globals.css // Global styles
│ ├── layout.js // Root layout for the application
│ └── page.js // Main page component
└── db.json // Fake API data (local backend)

```
---

**Key Directories/Files:**

-   `components/`: Reusable UI components used throughout the application.
-   `src/app/`: Contains the main application routes and pages, structured with Next.js 13+ App Router conventions.
-   `src/app/api.js`: Handles communication with the fake REST API (`db.json`).
-   `db.json`: Your local database for managing laundry orders.
-   `public/`: For static assets like images and `favicon.ico`.
-   `globals.css`: Contains global CSS styles for the application.

---

**## Installation**

To set up the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone 
    cd kneat-laundries-dashboard
    ```


2.  **Install frontend dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up the backend (db.json):**
    The `db.json` file serves as your local API. No additional installation is needed for the database itself, but you will need to run a JSON server to serve it as a REST API.

    Install `json-server` globally or as a dev dependency:
    ```bash
    npm install -g json-server
    # or
    npm install --save-dev json-server
    ```

**## Running the Application**

To run both the frontend and the fake backend concurrently, you'll need two separate terminal windows.

1.  **Start the Backend (JSON Server):**

    In your first terminal window, navigate to the project root and run the JSON server:

    ```bash
    json-server --watch db.json --port 5000
    ```
    This will start the fake API server at `http://localhost:5000`.

2.  **Start the Frontend (Next.js Development Server):**

    In your second terminal window, navigate to the project root and start the Next.js development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The frontend application will typically be accessible at `http://localhost:3000`.

---

**## Preview the System (Deployed Links)**

You can preview the deployed versions of the Kneat Laundries Dashboard:

-   **Frontend (Vercel):** https://laundry-admin-dashboard-jmho-git-main-akumuomolo-shs-projects.vercel.app/Home
-   **Backend (Render):** https://backend-kneat-laundries.onrender.com/orders

*Note: Please replace the placeholder links above with your actual deployed URLs.*

## Contributing

We welcome contributions to improve the Kneat Laundries Dashboard! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

**###  Authors**

**Akumu Omolo**  
GitHub: [@AkumuOmolo-SH](https://github.com/AkumuOmolo-SH)

**Willy Kyeni**
Github: https://github.com/WillyKyeni3

**Mike Muteithia**
Github: https://github.com/Mike-Muteithia

**Grace Bass**
GitHub: https://github.com/Grace-Eileen7


---

**### License**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

