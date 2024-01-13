# React-Redux Bank Project

Welcome to the React-Redux Bank project! This application was developed with the primary goal of learning and implementing Redux and Redux Toolkit in a React application. Special thanks to Jonas Schmedtmann for providing valuable insights and inspiration during the development process.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Introduction

The React-Redux Bank is a simple banking application that showcases the integration of Redux and Redux Toolkit into a React application. It provides basic banking functionalities such as creating a new customer, managing customer accounts, and performing account operations. Additionally, the application utilizes an API for currency conversion to USD.

## Live Site
Access the live site: [React-Redux Bank](https://r3-react-redux-bank.netlify.app/)

## Getting Started

To run the project locally using Yarn, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/r3hmantom/react-redux-bank

   cd react-redux-bank
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Project Structure

The project is organized into the following key components:

- **`App.js`**: The main component that orchestrates the rendering of various features based on the Redux store state.

- **`CreateCustomer.jsx`**: Component responsible for creating a new customer.

- **`Customer.jsx`**: Component that displays a welcome message to the customer.

- **`AccountOperations.jsx`**: Component handling various account operations like deposit, withdrawal, loan request, and loan repayment.

- **`BalanceDisplay.jsx`**: Component displaying the account balance.

## Features

- **Create Customer**: Users can create a new customer by providing their full name and national ID.

- **Customer Display**: After creating a customer, the application welcomes the user with a personalized message.

- **Account Operations**: Users can perform deposit, withdrawal, request a loan, and pay back a loan.

- **Balance Display**: Real-time display of the account balance.

## API Integration

The application integrates with an external API for currency conversion to USD during the deposit operation.

## Usage

The application is designed to be intuitive and user-friendly. Upon opening the application, users can create a new customer, and once created, they can perform various account operations.

## Contributing

If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## Credits

This project wouldn't have been possible without the guidance from Jonas Schmedtmann. Check out his work at [Jonas Schmedtmann's GitHub](https://github.com/jonasschmedtmann).

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.