# Weather-Based Travel Planner with API Integration

## **Project Title:**
Weather-Based Travel Planner with API Integration

## **Objective:**
Build a functional application that integrates APIs to address a real-world problem and demonstrate teamwork and technical expertise. This app helps users plan trips based on real-time weather conditions in their chosen destinations.

---

## **Features**

### **Core Features:**
1. **Destination Search:**
   - Users can search for a destination by city or location name.

2. **Weather Integration:**
   - Real-time weather data for the searched destination.
   - 7-day weather forecast.
   - Display of temperature, humidity, wind speed, and weather conditions (e.g., sunny, rainy, cloudy).

3. **Activity Recommendations:**
   - Activity suggestions based on weather conditions (e.g., hiking for sunny weather, indoor activities for rainy weather).
   - Use of a predefined activity dataset or an external API.

4. **Favorites List:**
   - Allow users to save destinations to a "Favorites" list for quick reference.

### **Bonus Feature:**
- **Map Integration:**
   - Uses a map API, Mapbox to display the selected destination on a map.

---

## **Technology Stack**

### **Frontend:**
- Web: React.js


### **Backend:**
- Node.js
- Database: Firebase Firestore

### **APIs Used:**
- **Weather API:**
  - Fetch real-time and forecast weather data, OpenWeatherMap API
- **Map API :**
  - Display the selected destination on a map, Mapbox

---

## **Setup Instructions**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file in the root directory and add the following:
     ```env
     REACT_APP_WEATHER_API_KEY=your_weather_api_key
     REACT_APP_MAP_API_KEY=your_map_api_key (optional)
     ```

4. **Run the App:**
   - For the frontend:
     ```bash
     npm start
     ```
   - For the backend:
     ```bash
     node server.js
     ```

5. **Build APK (For Mobile):**
   ```bash
   expo build:android
   ```

---

## **Challenges and Solutions**

1. **API Rate Limits:**
   - Solution: Implemented caching and used efficient API calls to avoid hitting limits.

2. **Activity Recommendations:**
   - Solution: Created a predefined dataset for activities with conditions for dynamic updates.

3. **Responsive Design:**
   - Solution: Used Material-UI and responsive layouts to ensure a seamless user experience across devices.

4. **Version Control Collaboration:**
   - Solution: Used GitHub and structured commits with detailed messages.

---

## **Deliverables**

### **Functional Application:**
- A fully functional web app displaying weather data and activity recommendations.

### **Git Repository:**
- Public repository with commit history: https://github.com/Asiphile1/Group-Technical-Assessment

### **Documentation:**
- App description
- Setup instructions
- APIs used
- Challenges and solutions
- Link to APK or app https://group-technical-assessment.vercel.app/


---

## **Collaboration Tools:**
- **Version Control:** GitHub
- **Task Management:** Trello (Shared board for team collaboration) 

---

## **Contributors:**


- Asiphile Mthethwa
- Elizabeth Ndzukule
- Oscar Poco

