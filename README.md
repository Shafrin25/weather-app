# 🌤️ Weather App

A responsive **real-time weather application** built with HTML, CSS, and JavaScript that consumes the **OpenWeather API** to display current weather information for a searched city.

The project focuses on practical frontend development concepts such as **REST API integration, asynchronous JavaScript, DOM manipulation, dynamic UI updates, user input handling, and error handling**.

---

## 📌 Project Overview

The Weather App allows users to search for a city and view its current weather information in a simple, responsive interface.

When a user searches for a city, the application sends a request to the OpenWeather API, processes the returned JSON data, and dynamically updates the weather card.

### Weather information displayed

* 🌡️ Current temperature
* 🏙️ City name
* 💧 Humidity
* 💨 Wind speed
* 🌤️ Weather condition icon
* ⚠️ Invalid city error message

---

## ✨ Features

### 🔎 City Search

Search for a city by entering its name and clicking the search button.

### 🌡️ Real-Time Weather Data

Weather information is retrieved from the OpenWeather API instead of using static data.

### 🌤️ Dynamic Weather Icons

The displayed weather icon changes according to the weather condition returned by the API.

### 💧 Humidity

Displays the current humidity percentage for the selected city.

### 💨 Wind Speed

Displays the current wind speed returned by the API.

### ⚠️ Error Handling

Invalid city searches are handled by displaying an error message and hiding the weather information.

### 📱 Responsive UI

The application uses responsive CSS so the weather card adapts to different screen sizes.

---

## 🛠️ Tech Stack

| Technology            | Usage                                             |
| --------------------- | ------------------------------------------------- |
| **HTML5**             | Page structure and semantic content               |
| **CSS3**              | Layout, styling, gradients, and responsive design |
| **JavaScript (ES6+)** | Application logic and dynamic UI                  |
| **Fetch API**         | HTTP requests to the weather API                  |
| **OpenWeather API**   | Real-time weather data                            |

---

## 🧠 Technical Concepts Demonstrated

This project demonstrates practical understanding of:

* DOM manipulation
* DOM element selection
* Event listeners
* JavaScript functions
* `async/await`
* Promises
* `fetch()`
* REST API integration
* JSON data handling
* Conditional rendering
* User input handling
* HTTP response status handling
* Dynamic image replacement
* Responsive CSS
* Basic error handling

---

## 🔄 Application Flow

```text
User enters city
       ↓
Search button clicked
       ↓
JavaScript captures user input
       ↓
Fetch request sent to OpenWeather API
       ↓
API returns weather data
       ↓
JSON response is processed
       ↓
Weather information is extracted
       ↓
DOM is updated dynamically
       ↓
Temperature, city, humidity,
wind speed and weather icon displayed
```

---

## 📂 Project Structure

```text
Weather_app/
│
├── css/
│   └── style.css
│
├── image/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
│
├── index.html
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

You only need:

* A modern web browser
* VS Code or another code editor
* An OpenWeather API key
* A local development server such as VS Code Live Server

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```

### 2. Open the project

```bash
cd weather-app
```

### 3. Configure the API

Create an OpenWeather API key and configure the application according to your chosen architecture.

**Important:** Never commit API keys or other secrets to a public GitHub repository.

For a public/production deployment, use a backend or server-side proxy to protect the API credential.

### 4. Run the application

Open the project using **VS Code Live Server** or another local development server.

Then open the generated local URL in your browser.

---

## 🧪 How to Use

1. Open the application.
2. Enter a city name in the search field.
3. Click the search button.
4. The application requests the latest weather data.
5. The weather card updates with the returned information.
6. Try an invalid city name to test the error state.

### Example

```text
Input:
Chennai

Output:
Chennai
Temperature
Humidity
Wind Speed
Weather Icon
```

---

## 🎯 Project Objective

The goal of this project was to build a practical frontend application that consumes a **real-world external API** and converts live data into a dynamic user interface.

The project demonstrates the complete basic API-consumption workflow:

```text
Input
  ↓
API Request
  ↓
Response
  ↓
JSON Processing
  ↓
Data Extraction
  ↓
DOM Update
  ↓
User Interface
```

This makes the project more than a static HTML/CSS page and demonstrates how JavaScript can connect a frontend application to an external data source.

---

## 🔐 Security Note

API credentials should **not be exposed in client-side source code**.

The current learning implementation uses the API directly from the frontend. Before making this project public or deploying it, the API credential should be removed from the source code and replaced with a secure architecture such as:

```text
Frontend
   ↓
Backend / Serverless Function
   ↓
OpenWeather API
```

This prevents the API credential from being directly exposed to users through the browser or public repository.

---

## 🔮 Future Improvements

The following improvements can make the project more complete:

* [ ] Secure API key using a backend/serverless function
* [ ] Add current-location weather using the Geolocation API
* [ ] Add a 5-day weather forecast
* [ ] Add feels-like temperature
* [ ] Add atmospheric pressure
* [ ] Add visibility information
* [ ] Add sunrise and sunset times
* [ ] Add loading state while fetching data
* [ ] Improve API/network error handling
* [ ] Support pressing `Enter` to search
* [ ] Add Celsius/Fahrenheit conversion
* [ ] Improve accessibility
* [ ] Improve mobile responsiveness
* [ ] Deploy the application

---

## 💼 What This Project Demonstrates

**Frontend Development**

HTML5 • CSS3 • Responsive Design

**JavaScript**

DOM Manipulation • Events • Functions • Async/Await

**API Integration**

Fetch API • REST API • JSON • HTTP Responses

**Application Development**

User Input • Dynamic Rendering • Error Handling

---

## 👨‍💻 Author

**Shafrin Sulthan**

Aspiring Software Developer building practical projects while developing strong foundations in **Java, JavaScript, frontend development, API integration, and software engineering fundamentals**.

### Profiles

* **GitHub:** https://github.com/ShafrinSulthan
* **LinkedIn:** www.linkedin.com/in/shafrin-m-40321b259/

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐.
