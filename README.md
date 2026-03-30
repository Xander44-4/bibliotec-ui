# bibliotec-ui

Frontend interface for the Bibliotec library management system, built with Next.js. This repository is part of a larger academic project that implements core data structures — including linked lists, queues, and stacks — to manage book inventory, loan records, and user profiles.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Contributing](#contributing)

---

## Overview

`bibliotec-ui` provides the user-facing layer of the Bibliotec system. It communicates with the backend to expose two distinct profiles: a **Librarian** profile for administrative operations and a **Student** profile for borrowing and managing loans.

The backend of this system is developed as a separate repository and implements the following data structures from scratch:

- `Libro` — node class representing a book
- `Cola` — queue-based list for managing book inventory
- `Registro` — node class representing a loan record
- `Pila` — stack-based list for tracking loan history
- `Usuario` — class representing a system user

---

## Project Structure

```
src/
├── app/
│   ├── (content)/            # Public-facing route group
│   └── (private)/            # Protected route group
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx            # Root layout
├── asserts/
│   ├── fonts/                # Local font files
│   └── images/               # Static images
├── components/
│   ├── content/              # Page-level components
│   └── ui/                   # Reusable UI primitives
│   └── providers.tsx         # Global context providers
└── features/
    ├── dashboard/            # Librarian and student dashboard logic
    └── login/                # Authentication feature
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) 1.0 or higher

### Installation

```bash
git clone https://github.com/your-org/bibliotec-ui.git
cd bibliotec-ui
bun install
```

### Development

```bash
bun dev
```

The application will be available at `http://localhost:3000`.

### Build

```bash
bun run build
bun start
```

---

## Features

### Librarian Profile

| Feature | Description |
|---|---|
| Save Book | Register a new book into the system |
| View All Books | List the complete book inventory |
| View Single Book | Look up a specific book by identifier |
| Change Status | Update the availability status of a book |
| Process Loan | Initiate a book loan for a student |
| Renewal | Extend the loan period for a borrowed book |
| Return | Register the return of a borrowed book |

### Student Profile

| Feature | Description |
|---|---|
| View Books | Browse available books in the library |
| Take Book | Reserve or check out a book |
| Process Loan | Submit a loan request |
| Renewal | Request an extension on an active loan |
| Return | Register the return of a borrowed book |

---



## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow the existing code style and keep pull requests focused on a single concern.

---

## License

This project is developed for academic purposes. See `LICENSE` for details.