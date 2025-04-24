# Swarm - Freelance Help Platform

Welcome to SWARM — a peer-powered platform where individuals connect through shared passions. Whether you're seeking help, offering support, or building meaningful discussions, this is your space to collaborate, create, and grow together.

*[GitHub Repository](https://github.com/kalviumcommunity/S67_Ruchitha_Capstone_Swarm)* |
*[Low Fidelity Figma Design](https://www.figma.com/design/ZEtwQ4HbprBgdf45YPdcnt/low-fid?node-id=0-1&t=56D7jSCs6yV0IXTl-1)* |
*[Backend Deployment](https://s67-ruchitha-capstone-swarm-8.onrender.com/)*

---

## 📌 Project Description

**Swarm** is a platform that empowers freelancers and independent creators to connect, help each other, and build a reputation.  
Users can create profiles, highlight their skills and experience, engage in discussions, swap skills through help boards, contribute to the community, and earn points and badges for their contributions.

---

## 🌟 Vision

To foster a self-sustaining freelance community where users swap skills, help each other, and grow by collaboration and shared learning.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – Component-based UI development  
- **Tailwind CSS** – Utility-first styling framework  
- **Axios** – HTTP client for API calls  
- **React Router** – For routing and navigation  

### Backend
- **Node.js** – Runtime environment  
- **Express.js** – Web framework for building RESTful APIs  
- **Mongoose** – ODM for MongoDB  
- **JWT (jsonwebtoken)** – Authentication using JSON Web Tokens  
- **Cookie-Parser** – For reading JWTs from cookies  

### Database
- **MongoDB** – NoSQL document database  
- **MongoDB Atlas** – Cloud-based database hosting  

### Dev Tools
- **Bruno** – API testing (alternative to Postman)   
- **Dotenv** – Environment variable management  
- **Git & GitHub** – Version control and code hosting  
- **VS Code** – Code editor  

---

## ✨ Key Features

- **Profile Pages**
  - Username, Role, Points
  - About, Skills, Experience, Portfolio
  - Follower/Following stats
  - Contribution Summary (Posts, Helped Requests, Badges)

- **Skill Swapping & Community Contributions**
  - Post Help Requests
  - Help Others and Earn Points
  - Swap Skills and Collaborate
  - Join Public Discussions

- **Navigation**
  - Home, Help Board, Discussion Zone, Post

- **Responsive UI**
  - Optimized for mobile, tablet, and desktop

---

## 🗓️ 28-Day Development Plan

### Week 1 – Setup & Base Structure
- [ ] Initialize backend (Express, MongoDB, dotenv, cors)
- [ ] Setup MongoDB connection and Express server
- [ ] Create backend folder structure: `controllers/`, `models/`, `routes/`, `middleware/`
- [ ] Build basic User model (username, email, password, points, role, skills)
- [ ] Initialize frontend using Vite + React.js
- [ ] Setup Tailwind CSS and React Router
- [ ] Create frontend folder structure: `components/`, `pages/`, `assets/`

### Week 2 – Auth + Profile
- [ ] Create Signup API (with password hashing)
- [ ] Create Login API (JWT auth)
- [ ] Build Signup Page (UI + API integration)
- [ ] Build Login Page (UI + API integration)
- [ ] Add Protected Routes (for logged-in users)
- [ ] Build API to get profile by ID
- [ ] Build Profile Page (show skills, experience, portfolio)

### Week 3 – Help Board + Discussions
- [ ] Create Help Request model (title, description, createdBy, skillsRequired, status)
- [ ] Create Discussion Post model (title, body, createdBy, comments)
- [ ] Build API to create & fetch Help Requests
- [ ] Build API to create & fetch Discussions
- [ ] Build Help Board Page UI (display help requests, skill swap options)
- [ ] Build Discussion Zone Page UI (with discussions and replies)
- [ ] Create “Post Help Request” form + integrate API

### Week 4 – Points System & Final Touches
- [ ] Add logic to update points when a user helps another
- [ ] Show points and contributions in profile
- [ ] Implement Skill Swapping workflow (user can offer/request skills)
- [ ] (Optional) Add Follower/Following feature
- [ ] Finalize responsive UI for all devices
- [ ] Test all user flows (signup, login, posting, helping, skill swapping)
- [ ] Fix bugs, polish UI, prepare for deployment

---

## Day by day Progress:

DAY 1: Created a low fidelity design for the whole project.

DAY 2: Created a high fidelity design for the whole project.

DAY 3: Initialized the Git repository with all the necessary information in the README.md file.

DAY 4: Created issues in the github repository so that I can work on them each per day.

DAY 5: Created backend folder structure and basic server using Express.
