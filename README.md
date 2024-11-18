# Indian-Travel-Recommendation-System (Suggests cities based on user preferences such as travel type, budget, and duration.)

Trip Planner is a web application that helps users plan their ideal trip based on their preferences and interests. The application uses a combination of frontend technologies (HTML, CSS, JavaScript) and a backend server (Python with Flask) to provide personalized travel recommendations.

## Project Structure

- `index.html`: The main landing page of the application.
- `form.html`: A form page for users to input their initial trip planning details.
- `plan.html`: The page where users can input detailed preferences and view trip recommendations.
- `styles.css`: Main CSS file for styling the application.
- `plan.css`: Additional CSS file specifically for the plan page.
- `script.js`: JavaScript file for general functionality across the site.
- `plan.js`: JavaScript file specifically for the plan page functionality.
- `backend.py`: Python Flask server that handles data processing and recommendation logic.
- `cities.csv`: CSV file containing city data.
- `city_budget_duration.csv`: CSV file with budget and duration data for cities.
- `cities_type_data.csv`: CSV file with type data for cities.
- `travel_experience_types.csv`: CSV file containing travel experience types.
- `states_and_union_territories.csv`: CSV file with information about states and union territories.

## Features

- User-friendly interface for inputting trip preferences
- Dynamic loading of travel recommendations
- Responsive design for various screen sizes
- Backend processing for personalized trip suggestions

## Setup and Running

1. Install the required Python packages:

   pip install flask pandas flask-cors


2. Start the backend server:

   python backend.py

3. Open `index.html` in a web browser to access the application.

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript, Bootstrap
- Backend: Python, Flask
- Data Processing: Pandas

## Future Improvements

- Implement user authentication and profiles
- Add more detailed information about recommended destinations
- Integrate with external APIs for real-time travel data
- Enhance the recommendation algorithm for more personalized results


