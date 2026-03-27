# 📌 Testing Assignment 

## 📖 Overview
This repository contains my submission for the **Software Testing Assignment**, which includes:

- ✅ Manual Testing (Login & Form)
- ✅ Automation Testing using Playwright
- ✅ Bug Identification & Improvements
- ✅ Data-driven testing approach
- ✅ AI-assisted learning and implementation

The objective of this assignment was to **understand testing fundamentals, apply them practically, and automate real-world scenarios**.

---

## 🚀 Project Structure

```
Testing-Assignment/
│
├── tests/
│   ├── form.spec.js
│   ├── login.spec.js
│
├── pages/
│   ├── FormPage.js
│   ├── LoginPage.js
│
├── test-data/
│   ├── formdata.json
│   ├── logindata.json
│
├── tests/files/
│   ├── test.jpg
│   ├── test.pdf
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🧪 Manual Testing

### ✔ Covered Areas
- Positive Test Cases
- Negative Test Cases
- Edge Cases
- Field validations
- UI behavior
- Dependency testing (State → City)

### 📄 Documents Included
- Login Manual Test Cases
- Form Manual Test Cases
- Bug Reports
- Suggestions & Improvements

---

## 🤖 Automation Testing

### 🔧 Tool Used
- Playwright (JavaScript)

### 💡 Why Playwright?
- I already had JavaScript knowledge
- Easy to learn and implement
- Supports UI automation efficiently

### ✔ What is Automated?
- Form filling & submission
- Modal validation
- Field validations
- State → City dependency
- File upload scenarios
- Multiple hobby selection
- Data-driven test execution

---

## 📊 Test Execution Summary

### 🔹 Form Testing
- ✅ All test cases executed
- ✅ All passed successfully after fixes

### 🔹 Login Testing
- ✅ All test cases executed
- ✅ All passed successfully after fixes

---

## 🐞 Bugs Identified

### Form Module
- ❌ City not reset when state changes
- ❌ Future DOB accepted
- ❌ Invalid file type accepted
- ❌ Weak validation on mobile number
- ❌ Missing validation messages for required fields

### Login Module
- ❌ Missing validation for empty fields
- ❌ Improper error handling
- ❌ No security-focused error messages

---

## 💡 Suggestions & Improvements

- Add proper validation messages
- Restrict invalid file uploads
- Enforce strict mobile validation
- Disable future date selection
- Reset city dropdown on state change
- Use generic error messages for better security
- Improve UX for form validation flow

---

## ⚙️ How to Run This Project Locally

### 🔹 Step 1: Clone Repository
```bash
git clone https://github.com/MaheshKuleppanavar/Testing-Assignment.git
cd Testing-Assignment
```

---

### 🔹 Step 2: Install Dependencies
```bash
npm install
```

---

### 🔹 Step 3: Install Playwright Browsers
```bash
npx playwright install
```

---

### 🔹 Step 4: Run Tests
 
▶️ Run Login Test Cases

```bash
npx playwright test tests/login.spec.js --reporter=html
```

### 📊 View Login Report

```bash
npx playwright show-report
```

---

▶️ Run Form Validation Test Cases

```bash
npx playwright test tests/form.spec.js --reporter=html
```

### 📊 View Form Report

```bash
npx playwright show-report
```

---

## 📊 Data-Driven Testing

- Test cases are executed using JSON data
- Different inputs → Different scenarios
- Helps in scalability and maintainability

Example:
```json
  {
    "tc": "TC_01",
    "firstName": "Mahesh",
    "lastName": "K",
    "email": "mahesh@test.com",
    "mobile": "9876543210",
    "gender": "Male",
    "state": "NCR",
    "city": "Delhi",
    "expected": "success"
  }
```

---

## 🧠 Conceptual Understanding

### What I Learned:
- Fundamentals of Software Testing
- Writing structured test cases
- Identifying bugs & edge cases
- Difference between manual & automation testing
- Data-driven automation approach
- Real-world validation scenarios

---

## 🤖 AI Usage Documentation

### 📍 Where AI Was Used
- Learning testing fundamentals
- Generating automation scripts
- Understanding Playwright concepts
- Structuring documentation

---

### ⚙️ How AI Was Used
- Asked for explanations of testing concepts
- Generated initial automation code
- Used as a guide for structuring test cases

---

### ✅ How I Validated & Improved AI Output
- Compared AI output with actual application behavior
- Fixed locator issues and strict mode errors
- Improved assertions based on real results
- Added missing test cases manually
- Corrected logic based on manual testing findings

---

### 💡 Creative Approach
Instead of:
- Watching long tutorials
- Reading multiple blogs

👉 I used AI interactively:
- Asked doubts
- Tested outputs
- Improved results step-by-step

This helped me:
- Learn faster
- Apply concepts practically
- Build confidence in testing

---

## 📦 Submission Notes

- 📄 Complete documentation provided in Word file
- 💻 Automation scripts available in this repository
- 📊 Covers manual + automation + conceptual understanding
- 🔍 Designed for easy evaluation and execution

---

## 📬 Contact

**Mahesh Kudleppanavar**  
BCA Graduate | Web Developer  
Interested in QA & Automation Testing  