Frontend Setup:
   - Open the "index.html" file in your web browser (e.g., Google Chrome, Mozilla Firefox, etc.)
   - You can interact with the calculator by entering your age, height, and weight and then clicking the "Calculate" button.
   - The results will be displayed in a modal dialog with your calculated BMI, Bodyfat %, BMR, and Daily Calories.

 Backend Node.js Setup:
   - Ensure you have Node.js installed on your system. If not, download and install it from https://nodejs.org/.
   - Navigate to the "node-backend" directory in the project folder using the command line.
   - Install the required Node.js dependencies
   - Start the Node.js server
   - The server will start running on http://localhost:3000/.
   - The backend server will handle the API requests from the frontend to calculate BMI, Bodyfat %, BMR, and Daily Calories.

Frontend and Backend Interaction:
   - The frontend (index.html) makes API requests to the backend server running on http://localhost:3000/ to fetch the calculated health metrics based on the user inputs.
   - The Node.js backend utilizes the "nodeApp.js" file to handle the incoming API requests, perform the necessary calculations, and return the results in JSON format.

To stop the Node.js server, press "Ctrl + C" in the terminal where the server is running.

GitHub link: https://github.com/UWkhoi/tcss460-assign3