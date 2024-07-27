
# Form Handling, Sessions, and Cookies with Express.js

This repository provides an example of how to handle forms, sessions, and cookies in an Express.js application. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Features

- **Form Handling**: Learn how to process and validate form data submitted via HTTP POST requests.
- **Sessions**: Understand how to implement session management to maintain user state across different requests.
- **Cookies**: Learn how to set, retrieve, and manage cookies for client-side state management.
- **Authentication**: Example of user authentication using sessions and cookies.
- **Security**: Implement best practices for securing session data and cookies.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/likhithkp/form-handling-sessions-cookies.git
   ```
2. Navigate to the project directory:
   ```bash
   cd form-handling-sessions-cookies
   ```
3. Install the dependencies:
   ```bash
   yarn
   ```

### Usage

1. Start the server:
   ```bash
   yarn local
   ```
2. Open your browser and navigate to `http://localhost:3001`.

### Example Routes

- `GET /login` - Login form
- `POST /login` - Handle login form submission
- `GET /register` - Registration form
- `POST /register` - Handle registration form submission
- `GET /dashboard` - User dashboard (protected route)
- `GET /logout` - Logout route

### Middleware Examples

- Session management with `express-session`
- Cookie management with `cookie-parser`
- Form data parsing with `body-parser`

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
