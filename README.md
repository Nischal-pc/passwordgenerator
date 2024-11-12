# Password Generator

## Description

This is a React-based Password Generator application. It allows users to generate random passwords with customizable options such as length, inclusion of numbers, and special characters.

## Features

- Generate random passwords
- Adjust password length using a slider
- Include numbers in the password (optional)
- Include special characters in the password (optional)
- Copy generated password to clipboard

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## Usage

1. Adjust the password length using the slider
2. Check the "Number" box to include numbers in the password
3. Check the "Characters" box to include special characters in the password
4. The password will be automatically generated based on your selections
5. Click the "Copy" button to copy the generated password to your clipboard

## Components

### App

The main component that renders the entire application.

#### State Variables
- `length`: Controls the length of the password
- `isNumber`: Boolean to include numbers in the password
- `char`: Boolean to include special characters in the password
- `input`: Stores the generated password

#### Key Functions
- `passwordGenerator`: Generates a random password based on selected options
- `Copy`: Copies the generated password to the clipboard

