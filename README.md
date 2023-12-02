# Personal-Doctor

In underserved regions where access to healthcare is limited, and in scenarios where individuals seek online medical consultations at minimal or no cost, Personal Doctor emerges as a solution. This platform acts as a bridge, facilitating interactions between users and certified healthcare professionals through online chat and audio-video calls. Moreover, it offers a valuable resource by providing information about various medicines and their uses.

## Project Objectives

### 1. Accessibility of Healthcare
Personal Doctor addresses the challenge of limited access to quality healthcare in rural and underserved areas. By connecting patients with willing doctors for online consultations, we aim to make healthcare more accessible for minor problems and consultations.

### 2. Information about Medicines
To enhance patient understanding, Personal Doctor offers a comprehensive database of medications and their uses. Users can easily search for medications by name to gain insights into their purposes.

## Technologies Used

The project leverages the following technologies:

- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- MongoDB
- Express.js
- ChatGPT (API)
- Handlebars (.hbs)

### Test Users
**Doctor**  
 *Username* : Ravi,
 *Password* : 12345  
 
**Patient**  
 *Username* : Amit,
 *Password* : amit@789
 
## Prerequisites & Installation Steps

Follow these steps to set up the project on your local machine:

### Cloning the Repository

1. **Download Node.js:** Ensure you have the latest version of Node.js installed.
2. **Clone the Repository:** Run the following command in your terminal:
    ```bash
    git clone https://github.com/Ankit-Matth/Personal-Doctor.git
    ```

3. **Navigate to the Project Directory:**
    ```bash
    cd Personal-Doctor
    ```
4. **Configure API Key in the .env File:**

   Open the *.env* file in the root directory and look for the line that says `KEY=<API Key>` and replace the `<API Key>` with the actual API key you obtained from the Open AI. I am not providing my API key directly here because it goes against the guidelines set by OPEN AI. (OPEN AI detects my key and blocks it due to the reason that I expose it in public.)

   **Note:** If you don't have an API key, kindly email me at ankitmatth101@gmail.com, and I will provide it to you personally. Alternatively, you may replace it with a dummy API key (**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**) to bypass a specific feature, namely the ability to search for information about the uses of medicines.

6. **Install Dependencies:**
    ```bash
    npm install
    ```

7. **Run the Application:**
    ```bash
    npm start
    ```

8. **View Output:**
   Open your browser and go to [http://localhost:8089/](http://localhost:8089/) to see the output.

9. **Development Mode:**
    ```bash
    npm run dev
    ```
   This command starts the project in development mode using nodemon.

**Note:** The main backend code is located in the `app.js` file, serving as the core of our project. To run it directly, run the following command in your terminal:
```bash
node src/app.js
```

## Demo Payment Link
https://cosmofeed.com/vp/656452ee5929eb0029dd5ae2

## Features provided by us

1. **Remote Access to Certified Doctors:**
   - Bridging healthcare gaps for rural areas through seamless online consultations.

2. **Medicine Insights On-the-Go:**
   - Access a comprehensive medication database for quick and easy understanding.

3. **Secure & User-Friendly Platform:**
   - Experience a trustworthy space for online consultations with an intuitive and user-friendly navigation system.

4. **Real-time Chat & Video Calls:**
   - Connect directly with certified doctors for personalized and real-time consultations.

5. **Transparent Payment Process:**
   - Ensure secure transactions with our trusted partner, Cosmofeed, for worry-free financial interactions.

6. **Post-Consultation Ratings:**
   - Promote accountability and transparency with our user-friendly rating system.

7. **Dedicated Customer Support:**
   - Access 24/7 assistance for a seamless and reliable healthcare experience.

### Some popular screenshots of our platform  

![forPatients](https://github.com/Ankit-Matth/Personal-Doctor/assets/146843890/3afcb266-4a35-49ca-8b6f-1e55c6460d2d)

![forDoctors](https://github.com/Ankit-Matth/Personal-Doctor/assets/146843890/64000ab6-73da-41c2-b2e9-d1f9add91f4a)

![page404](https://github.com/Ankit-Matth/Personal-Doctor/assets/146843890/1d70192c-d91d-4674-826f-23bc445fb342)

![paracetamolUses](https://github.com/Ankit-Matth/Personal-Doctor/assets/146843890/6e5e9656-4762-444c-9839-fbb8c9c659ab)
