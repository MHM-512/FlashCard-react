# React Flash Cards 🧠

A simple and interactive Flash Cards application built with React, TypeScript, and Material UI.

The application allows users to review questions and reveal their answers using an interactive flash card interface.

## 🚀 Features

- Display questions one by one
- Show the answer for the current question
- Navigate between questions using Next and Previous buttons
- Display the current question number
- Dynamic progress indicator
- Responsive and clean UI
- Component-based React architecture
- Type-safe development with TypeScript
- Reusable components
- State management with React Hooks

## 🛠️ Technologies

- React
- TypeScript
- Material UI (MUI)
- Vite
- React Hooks
- CSS

## 📂 Project Structure

```text
src/
├── component/
│   ├── FlashCard/
│   │   ├── FlashCard.tsx
│   │   └── AnswerCart.tsx
│   │
│   └── Header/
│       └── Header.tsx
│
├── types/
│   └── flashcard.ts
│
├── App.tsx
└── main.tsx
```

## 🧩 Main Components
FlashCard

Responsible for displaying the current question.

AnswerCart

Displays the answer when the user clicks the Show Answer button.

Header

Displays the progress information, including:

Current question
Total number of questions
Progress percentage

## ⚛️ React Concepts Used

This project was built to practice and demonstrate several important React concepts:

useState
Props
Component composition
Parent-to-child data flow
Conditional rendering
Event handling
State lifting
Reusable components

## 📘 TypeScript

TypeScript is used to make the application type-safe.

For example, the question data is defined using a custom type:

export type Question = {
  question: string;
  answer: string;
};

Component props are also typed explicitly:

type AnswerCartProps = {
  showAnswer: boolean;
  answer: string;
};

This helps prevent incorrect data from being passed between components.

## ▶️ Getting Started

1. Clone the repository
```git
git clone https://github.com/MHM-512/FlashCard-react-.git
```
2. Navigate to the project
```cjs
cd flash-card
```
3. Install dependencies
```cjs
npm install
```
4. Start the development server
```cjs
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🎯 Project Goal

The main goal of this project was to practice building a small React application using reusable components, state management, props, conditional rendering, and TypeScript.

It also helped me practice structuring a React project and creating a simple interactive user interface with Material UI.

## 📌 Future Improvements
Add more flash cards
Add card flip animations
Add a shuffle feature
Add categories for different subjects
Store flash cards in local storage
Add a score or learning progress system
Add dark mode
