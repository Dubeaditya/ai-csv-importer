*** AI CRM CSV Importer***

An AI-powered CRM CSV Importer built using **Next.js**, **Node.js**, **Express.js**, **TypeScript**, and **Google Gemini AI**. The application enables users to upload CSV files, preview records, process customer data using AI, visualize import analytics, and download the processed CRM-ready CSV.

---

## 🌐 Live Demo

### Frontend
https://crm-importer-frontend.onrender.com

### Backend
https://ai-csv-importer-cj76.onrender.com

---

# 📌 Features

- 📂 Drag & Drop CSV Upload
- 📄 CSV Preview before Import
- 🤖 AI-Powered CRM Data Processing (Gemini AI)
- 📊 Import Analytics Dashboard
- 📈 Success Rate Calculation
- ⏳ Progress Bar
- 🥧 Pie Chart Analytics
- 📋 Recent Activity Panel
- ⬇ Download Processed CSV
- 📱 Responsive UI
- ⚡ Fast CSV Parsing
- 🔒 Error Handling for Invalid CSVs
- ☁ Deployed on Render

---

# 📸 Application Workflow

```text
Upload CSV
      │
      ▼
CSV Preview
      │
      ▼
Confirm Import
      │
      ▼
Backend Receives CSV
      │
      ▼
CSV Parsing
      │
      ▼
Gemini AI Processing
      │
      ▼
Structured CRM Data
      │
      ▼
Analytics Dashboard
      │
      ▼
Download Processed CSV
```

#  Technology Stack

  ## Frontend
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - Axios
  - PapaParse
  - React Dropzone
  - Recharts
  - File Saver

  ## Backend
  - Node.js
  - Express.js
  - Multer
  - Google Gemini AI SDK
  - dotenv
  - CORS

# 📁 Project Structure
```text
AI-CRM-CSV-Importer
│
├── frontend
│   ├── app
│   ├── components
│   ├── public
│   ├── package.json
│   └── .env.local
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middleware
│   ├── utils
│   ├── uploads
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Dubeaditya/ai-csv-importer.git
```

```bash
cd ai-csv-importer
```

---

# ⚙ Backend Setup

Move inside backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create

```text
.env
```

Example

```env
PORT=5000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend

```bash
npm run dev
```

or

```bash
node server.js
```

Backend runs on

```
http://localhost:5000
```

---

# 💻 Frontend Setup

Move inside frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create

```text
.env.local
```

Add

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# 🤖 Gemini AI Setup

## Step 1

Visit

https://aistudio.google.com/

---

## Step 2

Login using your Google account.

---

## Step 3

Click

```
Get API Key
```

---

## Step 4

Create a new API Key.

---

## Step 5

Copy your API Key.

Example

```text
AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## Step 6

Open

```text
backend/.env
```

Paste

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Example

```env
PORT=5000

GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX
```

⚠ Never commit your API key to GitHub.

---

# 📡 API Documentation

## Upload CSV

```
POST /api/upload
```

### Content Type

```
multipart/form-data
```

### Request Body

| Field | Type |
|-------|------|
| csv | File |

### Success Response

```json
{
  "success": true,
  "totalRows": 100,
  "totalImported": 96,
  "totalSkipped": 4,
  "data": []
}
```

---

# 📊 Dashboard

The dashboard displays

- Total Records
- Imported Records
- Skipped Records
- Success Rate
- Duplicate Records
- Processing Status
- Processing Timestamp
- Pie Chart
- Progress Bar
- Recent Activity

---

# ☁ Deployment

## Backend

Deploy the **backend** folder as a Render Web Service.

Environment Variables

```env
PORT=5000

GEMINI_API_KEY=YOUR_API_KEY
```

---

## Frontend

Deploy the **frontend** folder as a Render Web Service.

Environment Variable

```env
https://ai-csv-importer-cj76.onrender.com
```

---

# 🔄 Updating the Project

## Backend Changes

After modifying backend code:

```bash
git add .

git commit -m "Updated backend"

git push
```

Render automatically redeploys the backend.

---

## Frontend Changes

After modifying frontend code:

```bash
git add .

git commit -m "Updated frontend"

git push
```

Redeploy the frontend if auto-deploy is not enabled.

---

# ⚠ Troubleshooting

## 429 Error

Gemini API quota exceeded. //This is the main error that is occurred after successfully run 2-3 times because Google Gemini provides limited spaces for free 

**Solution**

- Wait for quota reset.
- Upgrade your Gemini API plan.
- Check API usage in Google AI Studio.

---

## 500 Internal Server Error

Possible reasons:

- Invalid Gemini API Key
- Backend not running
- Missing environment variables

---

## PapaParse Error

Run   // If  showing red as papaparse 

```bash
npm install papaparse
npm install --save-dev @types/papaparse
```

---

## CORS Error

Verify the backend has CORS enabled.

---

## Frontend Not Updating

- Push latest code to GitHub.
- Redeploy the frontend.
- Hard refresh browser (`Ctrl + Shift + R`).

---

## Backend Not Updating

- Check Render deployment logs.
- Verify latest commit is deployed.
- Confirm environment variables are configured.

---

# 🚀 Future Enhancements

- User Authentication
- Database Integration (MongoDB/MySQL)
- Import History
- Search & Filters
- Pagination
- Excel Export
- AI Duplicate Detection
- Email Notifications
- Dark Mode
- User Roles & Permissions

---

# 👨‍💻 Developer

**Aditya Dubey**

B.Tech Computer Science & Engineering

Passionate about **Data Structures & Algorithms**, **Full Stack Development**, and **AI-powered Web Applications**.

GitHub: https://github.com/Dubeaditya

LinkedIn: https://www.linkedin.com/in/aditya-dubey-b778152a1

---

# 📄 License

This project is intended for educational and demonstration purposes. Update the license section as needed before production use.

---

⭐ If you found this project useful, consider me for Software developer Role(Intern)
