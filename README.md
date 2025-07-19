# 🌦️ Weather Viewer App

A modern weather tracking application built using **React.js**, **Tailwind CSS**, and the **OpenWeatherMap API**.

## 🚀 Features

- 🌍 Search real-time weather for any city
- 🏷️ Add custom labels to cities (e.g., Home, Work)
- 💾 Save cities locally using `localStorage`
- 📱 Responsive and clean UI with Tailwind CSS
- 🌗 Dynamic themes based on day/night status
- 🧭 Navigate between Dashboard and Saved Cities

## 🧰 Tech Stack

- React 19
- Tailwind CSS 4
- React Router v7
- Axios for API calls
- Lucide Icons + React Icons
- Vite for fast development

## 🌐 OpenWeatherMap API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch live weather data.

### Setup Your API Key

Create a `.env` file in the root folder:

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

> Make sure to **never expose this key publicly**. The `.env` file is already listed in `.gitignore`.

## 📂 Project Structure

```
src/
│
├── components/         # Reusable UI components (AddCityForm, CityCard, etc.)
├── api/                # Axios setup for making the API calls....
├── context/            # CityContext and WeatherContext using React Context API
├── pages/              # Route components like Home.jsx, Cities.jsx
├── routes/             # MainRoutes.jsx for route definitions
├── utils/              # localstorage setup, icons ....
├── App.jsx             # Root app structure with context providers
├── main.jsx            # Vite entry point
└── assets/             # Optional: icons, images, etc.

```

## 🛠️ Getting Started

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

## 📦 Build for Production

```
npm run build
```

## 🧪 Preview Build

```
npm run preview
```

## 📄 License

This project is for personal portfolio and learning purposes.
