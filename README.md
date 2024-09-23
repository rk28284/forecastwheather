<h1>Weather Forecast Application</h1>

<p>
  This is a React.js-based weather forecast application that displays current weather conditions and a 5-day weather forecast for a selected city. The application uses the OpenWeatherMap API to fetch weather data, and Chakra UI for styling and modal popups.
</p>

<h2>Features</h2>
<ul>
  <li>Search weather by city name.</li>
  <li>Display current weather conditions including temperature, weather description, and weather icon.</li>
  <li>Toggle temperature display between Celsius and Fahrenheit.</li>
  <li>5-day weather forecast with daily high and low temperatures.</li>
  <li>Error handling with a modal popup for invalid city names.</li>
  <li>Responsive design with Chakra UI components.</li>
</ul>

<h2>Demo</h2>
<p>
  You can check out a live demo <a href="https://forecastwheather.vercel.app/" target="_blank">here</a>.
</p>

<h2>Screenshots</h2>
<h3>Current Weather and Forecast</h3>

![Screenshot 2024-09-23 112325](https://github.com/user-attachments/assets/7f2273e4-c5da-4b1f-be3a-3791f67ea0f0)


![Screenshot 2024-09-23 112339](https://github.com/user-attachments/assets/ef308260-0a83-4aec-894e-0cb4f1dd9ae5)


<h3>Error Modal (Invalid City)</h3>

![Screenshot 2024-09-23 112307](https://github.com/user-attachments/assets/c7eef031-b87b-4d16-8cd7-68f7cad044dc)

![Screenshot (368)](https://github.com/user-attachments/assets/3030b246-8ae5-4cad-ba32-98223d0f4e2f)
<h2>Installation</h2>
<ol>
  <li>Clone the repository to your local machine:
    <pre><code>git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
</code></pre>
  </li>
  <li>Install the necessary dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file in the root directory and add your OpenWeatherMap API key:
    <pre><code>REACT_APP_API_KEY=your_openweathermap_api_key</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Open your browser and go to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
</ol>

<h2>Usage</h2>
<ol>
  <li>Enter a city name in the search input field.</li>
  <li>The current weather and 5-day forecast for that city will be displayed.</li>
  <li>Use the toggle button to switch between Celsius and Fahrenheit.</li>
  <li>If an invalid city name is entered, a modal popup will alert you to enter a valid city name.</li>
</ol>

<h2>Project Structure</h2>
<pre><code>├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CitySearch.js
│   │   ├── CityName.js
│   │   ├── TemperatureDisplay.js
│   │   ├── WeatherIcon.js
│   │   ├── ToggleButton.js
│   │   ├── WeatherCondition.js
│   │   └── Fivedayforcast.js
│   ├── App.js
│   └── index.js
├── README.md
├── package.json
└── .env
</code></pre>

<h2>Key Components</h2>
<ul>
  <li><strong>CitySearch</strong>: Component for searching weather by city name.</li>
  <li><strong>CityName</strong>: Displays the name of the city.</li>
  <li><strong>TemperatureDisplay</strong>: Displays the temperature in Celsius or Fahrenheit.</li>
  <li><strong>WeatherIcon</strong>: Shows the corresponding weather icon from OpenWeatherMap.</li>
  <li><strong>ToggleButton</strong>: Toggle between Celsius and Fahrenheit.</li>
  <li><strong>WeatherCondition</strong>: Displays the weather description (e.g., clear, cloudy).</li>
  <li><strong>Fivedayforcast</strong>: Displays the 5-day forecast with daily highs and lows.</li>
</ul>

<h2>Dependencies</h2>
<ul>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://chakra-ui.com/">Chakra UI</a> - For UI components and styling</li>
  <li><a href="https://openweathermap.org/api">OpenWeatherMap API</a> - To fetch weather data</li>
</ul>

<h2>API Key Setup</h2>
<p>
  To use the application, you will need an API key from <a href="https://openweathermap.org/api">OpenWeatherMap</a>. After creating an account and obtaining your API key, add it to the <code>.env</code> file in the project root as follows:
</p>
<pre><code>REACT_APP_API_KEY=your_openweathermap_api_key
</code></pre>




