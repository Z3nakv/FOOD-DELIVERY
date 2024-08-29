# MERN Stack E-commerce Platform

## Description

This project is an e-commerce platform built using the MERN stack (MongoDB, Express, React, and Node.js). The application provides various functionalities such as filtering items by category, text-based search, payment gateway integration, an admin panel for management, and the ability to register new items.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## Features

- **Filter Items by Category**: Users can filter items based on different categories to quickly find what they are looking for.
- **Search by Text**: The application includes a search bar allowing users to find items by entering keywords.
- **Payment Gateway Integration**: Secure payment processing integrated into the platform to handle transactions.
- **Admin Panel**: A dedicated admin panel for managing items, categories, orders, and users.
- **Register New Items**: Admins can add new items to the platform through the admin panel.
- **Order Tracking**: Users can track the status of their orders in real-time to see where their delivery is and when it is expected to arrive.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Z3nakv/your-repo.git
    cd your-repo
    ```

2. **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4. **Create a `.env` file in the server directory with the following variables:**

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

5. **Run the server and client:**

    ```bash
    # In the server directory
    npm run start

    # In the client directory
    npm run start
    ```

6. **Open your browser and navigate to:**

    ```
    http://localhost:4000
    ```

## Usage

1. **Filtering and Searching**: Use the filter options or the search bar to find items based on categories or specific keywords.
2. **Making a Purchase**: Add items to your cart and proceed to checkout to use the payment gateway for secure transactions.
3. **Admin Panel**: Log in as an admin to manage products, categories, users, and orders.
4. **Order Tracking**: After placing an order, you can track its status through the "My Orders" section to see real-time updates on your delivery's location and estimated arrival time.

## Technologies Used

- **MongoDB**: Database for storing user data, products, orders, and categories.
- **Express**: Server-side framework for handling requests and routing.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Stripe**: Payment gateway integration for handling online transactions.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact me at [ad.rivarola18@gmail.com].
