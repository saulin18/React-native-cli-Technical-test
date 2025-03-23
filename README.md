# Star Wars Universe Explorer

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

A mobile application built with React Native CLI that explores the Star Wars universe using SWAPI (Star Wars API).

## 📱 Overview

This application demonstrates:
- SWAPI integration with Spanish localization
- Architecture following Atomic Design principles
- Modern React Native development patterns
- Type-safe implementation with TypeScript
- State management with React Query

## ✨ Features

- **Multi-Entity Listing**: Browse Films, Planets, and Characters
- **Advanced Search**: Find characters by name/attributes
- **Detailed Views**: Comprehensive character information
- **Localized Data**: All API responses translated to Spanish
- **Responsive Design**: Optimized for various screen sizes

## 🛠 Tech Stack

- **React Native CLI** (0.78.1)
- **React Query** (v5) - Data fetching/caching
- **React Navigation** (v6) - Navigation handling
- **TypeScript** (v5.0) - Type safety
- **Axios** (v1.8) - HTTP client
- **Jest** (v29.6) - Testing framework

## 📂 Project Structure

src/
├── components/
│ ├── atoms/ # Reusable UI elements
│ ├── molecules/ # Complex UI components
│ └── organisms/ # Screen sections
├── hooks/ # Custom React hooks
├── navigation/ # Navigation configuration
├── screens/ # Application views
├── services/ # API service layer
└── types/ # Type definitions


## 🚀 Setup

1. **Clone Repository**
```bash
git clone https://github.com...
cd ...

Install Dependencies

bash
npm install --legacy-per-deps --force

Running the App

Android:
bash
npm run android

iOS:
bash
npm run ios
