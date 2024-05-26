# Personal Doctor

I have participated in [HackUniv](https://www.hackuniv.com/) (a hackathon organized by Repozitory Technologies Pvt. Ltd. at GJUST, Hisar), with my classmate [Parhlad Singh](https://github.com/parhladSingh). Together, we worked on a project - *Personal Doctor*. Parhlad created the design (frontend) for it, and I focused on making it work well (backend). Our aim was to make healthcare more accessible. We combined our skills to make Personal Doctor a reality. It was challenging, but we felt proud of our accomplishment.

## Problem Statement

There are mainly two problems:

### 1. Cost of Healthcare:
Quack doctors often exploit the scarcity of good doctors, charging extra fees from needy patients. People avoid seeking medical help due to financial constraints or pay high costs for consultations. Apart from this there are some doctors who are willing to provide their consultation services at low cost or for free in their free time for welfare, but they lack a reliable platform. Additionally, lack of information about medicines can lead to people forgetting why they were prescribed a certain medication.

### 2. Lack of access to healthcare:
India has a significant shortage of qualified doctors and quality healthcare facilities, especially in rural or backward areas. The best hospitals are mostly established in cities. This shortage leads to many problems, including:

**a. Inaccessibility:** Many people in rural areas cannot afford frequent urban travel for medical care. Even if they can do so, they often face long waits and other logistical challenges.

**b. Misinformation:** In the absence of qualified doctors, people may turn to traditional healers or self-medicate. Many times, less educated people in backward areas buy medicines directly from medical shops without consulting a doctor. This may lead to misdiagnosis and inappropriate treatment. 

Due to these problems, sometimes small diseases become big disasters and can cause death. According to a report from Statista, published in The Times of India, approximately five million people die every year — almost a third of them in India (1.6 million) — due to Lack of access to healthcare.

## Our Solution

To address these issues, Personal Doctor emerges as a solution by connecting these people in rural areas with certified doctors through online chat, audio, or video calls. Online consultations provide various benefits:

a. patients can connect with high-qualified doctors to verify treatments prescribed by local doctors.</br>
b. patients can get advice or consult with a doctor for minor issues, symptoms, stress, anxiety, etc.</br>
c. Patients can consult a doctor in online consultancy and buy the medicine prescribed by the doctor from any medical shop and get their disease treated.

Since we provide a seamless rating system between patients and doctors, doctors can easily create their branding on the platform by providing their services at low cost, thus creating greater competition on the price, i.e. making healthcare affordable for all irrespective of their financial status. As is obvious, prices will fall due to excessive competition.

Additionally, we have also integrated the power of ChatGPT into this platform to make it more attractive. Many times, people forget why they were prescribed a certain medicine, Personal Doctor provides information about the use of medicines by generating responses using ChatGPT. Patients can easily search for a specific medicine by its name through the user-friendly interface provided by the platform.

**Our mission** at Personal Doctor is to make healthcare accessible to everyone, irrespective of their financial status and location. We welcome doctors who wish to provide their services for free, and we do not charge for these services. However, for those who earn money by providing consultations on our platform, we apply a nominal 5% commission to their revenue. This commission serves as a **sustainable business model** for our platform.

## Technologies Used
#### For frontend (designed by Parhlad) -
- HTML
- CSS
- JavaScript
- Bootstrap
#### For backend (developed by Me) -
- Node.js
- Express.js
- MongoDB
- ChatGPT (API)
- Handlebars (.hbs)

My teammate Parhlad worked on the front-end – that's the part you see and interact with. He used HTML to create the structure of our web pages, CSS to make them look good and work on any device, and JavaScript to add dynamic interactions. He also used bootstrap, a pre-built framework, to make things quickly and keep them looking consistent.

On the backend, for the server-side operations, I chose Node.js, a robust JavaScript runtime environment. It keeps everything running smoothly. MongoDB is our data's home – a flexible NoSQL database efficiently storing and managing the diverse information crucial to our project. To structure our web applications, I've implemented Express.js, a minimalist web framework for Node.js. It provides a structured approach to building web applications, ensuring a seamless user experience.

But that's not all. We've incorporated some cutting-edge technologies to take our project to the next level:

The **ChatGPT API** is our secret weapon for intelligent interactions. It's a state-of-the-art language model that delivers information about the uses of medicines by generating responses using ChatGPT. And to keep our code efficient and maintainable, I've integrated the Handlebars (.hbs) Templating Engine. It's a smart tool that efficiently generates dynamic content, that ensures our users have a smooth and engaging experience.

## Third party partners

1. Zegocloud (Pre-built UIKits) - Used for Voice & Video Calls

2. CometChat (Live Chat Widgets) - Used for Realtime Chatting

3. Cosmofeed (Payment Gateway) - Used for Online Payments

As a beginner with time constraints due to university exams, this approach allows us to rapidly integrate essential features without delving into extensive coding. However, these can be easily implemented by using simple Javascript libarires like WebRTC, socket.io etc.

## Quick Demo

- **Live link** - https://personal-doctor.vercel.app/ 
  
- **Payment link** - https://cosmofeed.com/vp/656452ee5929eb0029dd5ae2

#### For full demo (screen recording) of our project, please visit the [LinkedIn post.](https://www.linkedin.com/posts/ankit-matth_personalabrdoctor-html-css-activity-7162015994641571840-2z1x?utm_source=share&utm_medium=member_desktop)

### Test Users

**Doctor -**  *Username* : Ravi, *Password* : 12345  

**Patient -**  *Username* : Amit, *Password* : amit@789
 
## Prerequisites & Installation Steps

Follow these steps to set up the project on your local machine:

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

7. **Run server:**
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
