# Dynamic Table Rendering

## Overview
The Dynamic Table Rendering project is a web application that allows users to input text and dynamically render a table based on specific keywords found in the input. The application does not fetch live data but instead processes predefined data based on the keywords provided by the user.

## Project Structure
```
DynamicTableRendering
├── app
│   ├── main.html      # HTML structure for the application
│   ├── main.css       # Styles for the application
│   └── app.js         # JavaScript logic for dynamic rendering
└── README.md          # Documentation for the project
```

## Files Description
- **app/main.html**: Contains the HTML structure for the dynamic table rendering application. It includes a textarea for user input, a submit button, and a table that will display the rendered data based on keywords from the input.
  
- **app/main.css**: Contains the styles for the application, defining the visual appearance of the HTML elements in `main.html`.

- **app/app.js**: Contains the JavaScript logic for the application. It handles user input, processes the keywords, and dynamically updates the table with the relevant data.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the `DynamicTableRendering` directory.
3. Open the `app/main.html` file in a web browser to view the application.

## Usage
1. Enter your text into the textarea provided.
2. Click the "Submit" button to process the input.
3. The table will dynamically update based on the keywords found in your input.

## Notes
- Ensure that your input contains the specified keywords for the table to render data.
- The application does not fetch live data; it relies on predefined data associated with the keywords.

## License
This project is open-source and available for modification and distribution.