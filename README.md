# 🚀 Real-Time Temperature Monitoring System  

## **Overview**  
This project is a **real-time temperature monitoring system** that processes and visualizes temperature data through a modern web interface. It is built using:  

- **Frontend:** React (Real-time dashboard)  
- **Backend:** Node.js with WebSocket for real-time updates  
- **Database:** MongoDB for data persistence  
- **Processing:** Node.js (without n8n)  

The system continuously collects temperature data, processes it, and updates the frontend dashboard in real-time. It also categorizes the readings as **NORMAL** or **HIGH** based on defined thresholds.  

---

## **Features**  

✅ **Real-time temperature updates (every 2 seconds)**  
✅ **WebSocket-based live data streaming**  
✅ **Database persistence using MongoDB**  
✅ **Status indicators for NORMAL/HIGH temperatures**  
✅ **Last 5 readings displayed with timestamps**  
✅ **Dockerized setup for easy deployment**  

---

## **System Architecture**  

The system consists of the following components:

Frontend (React): Displays real-time temperature data.

Backend (Node.js): Generates temperature data and provides WebSocket connections.

Database (MongoDB): Stores temperature readings for historical reference.

Processing Service (Node.js): Handles business logic such as setting status badges (NORMAL/HIGH) based on temperature thresholds.

🚀 Installation & Setup

1️⃣ Clone the repository

https://github.com/31Subhashree/real-time-temperature-monitoring.git
cd real-time-temperature-monitoring

2️⃣ Install Dependencies

Backend

cd backend
npm install

Frontend

cd ../frontend
npm install

3️⃣ Start MongoDB (If not using Docker)

Ensure that MongoDB is installed and running locally:

4️⃣ Run the Project

Run Backend

cd backend
node src/server.js

Run Frontend

cd frontend
npm start
