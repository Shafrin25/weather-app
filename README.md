# 🌤️ Weather App

A responsive weather application that provides **real-time weather information for any city** using the OpenWeather API. The application demonstrates API integration, asynchronous JavaScript, dynamic DOM manipulation, responsive UI design, and error handling in a clean, beginner-friendly implementation.

## 🚀 Live Demo

**Live Demo:** Add your deployed URL here

**GitHub Repository:** Add your GitHub repository URL here

---

## 📌 Overview

The Weather App allows users to search for a city and instantly view its current weather conditions.

The application fetches live weather data from the **OpenWeather API** and dynamically updates the interface based on the API response.

### Key information displayed

* 🌡️ Current temperature
* 💧 Humidity
* 💨 Wind speed
* 🌤️ Weather condition
* 🏙️ City name
* ⚠️ Invalid-city error handling
* 📱 Responsive layout

---

## ✨ Features

### 🔎 City-Based Weather Search

Users can enter any city name and retrieve its current weather information.

### 🌡️ Real-Time Weather Data

Weather information is retrieved dynamically from the OpenWeather API rather than being hard-coded.

### 🌤️ Dynamic Weather Icons

The application changes the weather illustration based on the current weather condition returned by the API.

Supported conditions include:

* Clear
* Clouds
* Rain
* Drizzle
* Mist

### 💧 Humidity Information

Displays the current humidity percentage for the searched location.

### 💨 Wind Speed

Displays the current wind speed returned by the weather API.

### ⚠️ Error Handling

If an invalid city is entered, the application displays an appropriate error message instead of showing invalid weather data.

### 📱 Responsive Design

The interface is designed to adapt to different screen sizes using responsive CSS techniques.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| **HTML5**             | Application structure                             |
| **CSS3**              | Styling, layout, gradients, and responsive design |
| **JavaScript (ES6+)** | Application logic and DOM manipulation            |
| **Fetch API**         | Communication with the weather API                |
| **OpenWeather API**   | Real-time weather data                            |

---

## 🧠 Concepts Demonstrated

This project demonstrates practical frontend development concepts including:

* DOM selection and manipulation
* Event listeners
* JavaScript functions
* `async/await`
* Promises
* `fetch()`
* REST API integration
* JSON response handling
* Conditional rendering
* Error handling
* Dynamic image updates
* Responsive CSS
* User input handling

---

## 🔄 How It Works

The application follows a simple request-and-render flow:

```text
User enters city
       ↓
Search button clicked
       ↓
JavaScript sends API request
       ↓
OpenWeather API returns JSON
       ↓
Application processes weather data
       ↓
DOM is updated
       ↓
Temperature + Humidity + Wind + Weather Icon displayed
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
└── index.html
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```

### 2. Open the project

Navigate into the project directory:

```bash
cd weather-app
```

### 3. Configure the API

Create/configure your OpenWeather API credentials according to the deployment architecture.

**Do not commit API keys or other secrets to GitHub.**

For a production implementation, API credentials should be protected using a backend service or an appropriate environment-variable-based deployment setup.

### 4. Run the application

Because this is a frontend application, you can run it using a local development server such as **VS Code Live Server**.

Then open the provided local URL in your browser.

---

## 🧪 Example Usage

1. Enter a city name such as `Chennai`.
2. Click the search button.
3. The application requests the latest weather information.
4. The weather card updates with the returned data.
5. Enter an invalid city name to test the error state.

---

## 🎯 Project Objective

The primary objective of this project was to build a practical frontend application that consumes a **real-world REST API** and transforms the returned data into an interactive user interface.

Rather than displaying static information, the application demonstrates how frontend JavaScript can:

1. Capture user input.
2. Send an HTTP request.
3. Process asynchronous API responses.
4. Extract relevant JSON data.
5. Update the UI dynamically.
6. Handle invalid user input.

---

## 🔐 Security Considerations

API credentials should **never be exposed in publicly accessible frontend source code**.

For a production-ready version, the API request should be routed through a secure backend or server-side function, with sensitive credentials stored as environment variables.

This prevents API credentials from being unnecessarily exposed through browser developer tools or the public source repository.

---

## 🔮 Future Improvements

Potential improvements for the next version include:

* [ ] Use environment variables / backend proxy for API credentials
* [ ] Add current location weather using Geolocation API
* [ ] Add a 5-day weather forecast
* [ ] Display feels-like temperature
* [ ] Display pressure and visibility
* [ ] Add sunrise and sunset information
* [ ] Add loading state while fetching data
* [ ] Improve API error handling
* [ ] Add keyboard support for searching with `Enter`
* [ ] Improve accessibility with meaningful alt text and labels
* [ ] Add temperature-unit conversion between Celsius and Fahrenheit
* [ ] Improve mobile responsiveness
* [ ] Deploy the application with a production-safe API architecture

---

## 💼 Why This Project Matters

This project goes beyond a static HTML/CSS page by demonstrating how a frontend application communicates with an external service and converts live data into a user-facing experience.

It demonstrates practical experience with:

**Frontend Development → API Integration → Asynchronous JavaScript → DOM Manipulation → Error Handling → Responsive UI**

These are foundational skills used in modern web development.

---

## 👨‍💻 Author

**Shafrin Sulthan**

Aspiring Software Developer focused on building practical applications and strengthening skills in **Java, JavaScript, frontend development, API integration, and software engineering fundamentals**.

### Connect With Me

* **GitHub:** Add your GitHub profile
* **LinkedIn:** Add your LinkedIn profile
* **Portfolio:** Add your portfolio URL

---

## ⭐ If You Found This Project Useful

Consider giving the repository a ⭐ on GitHub.
