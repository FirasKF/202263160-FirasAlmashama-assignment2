# Technical Documentation

## Overview
This project is an interactive portfolio website built using HTML, CSS, and JavaScript.  
It extends the work from Assignment 1 by adding dynamic features, user interaction, and improved user experience.

---

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, responsive design)
- JavaScript (DOM manipulation, events, localStorage, API fetch)
- Git and GitHub

---

## Implemented Features

### 1. Dynamic Content
The website dynamically displays project cards using JavaScript.  
Users can:
- Filter projects by category
- Search projects using a live search bar

This makes the website interactive and responsive to user input.

---

### 2. Data Handling
The project includes two types of data handling:

#### Local Storage
- Stores the selected theme (light or dark)
- Automatically applies the saved theme on reload

#### API Integration
- Fetches random fun facts from a public API
- Displays loading and error messages when needed

---

### 3. Navigation Interaction
- Responsive navigation menu for mobile devices
- Toggle button shows/hides menu

---

### 4. Form Validation
The contact form validates:
- Name must not be empty
- Email must follow a valid format
- Message must be at least 10 characters

User feedback is provided through:
- Error messages
- Success message after submission

---

### 5. Animations and Transitions
The website includes:
- Fade-in animation when scrolling
- Hover effects on buttons and cards
- Smooth transitions for UI elements

These improve the user experience without being distracting.

---

### 6. Error Handling and User Feedback
The application provides clear feedback to users:

- Form validation errors
- Success message on valid form submission
- Loading message when fetching API data
- Error message if API request fails
- Empty state message when no projects match search/filter

---

## JavaScript Structure

The JavaScript file handles:
- Navigation toggle logic
- Theme switching using localStorage
- Dynamic project rendering
- Filtering and searching logic
- API requests using fetch
- Form validation and feedback
- Scroll-based animations

---

## File Responsibilities

- `index.html` → Structure and content of the website  
- `css/styles.css` → Styling, layout, animations  
- `js/script.js` → Interactivity and dynamic behavior  
- `docs/ai-usage-report.md` → AI usage explanation  
- `docs/technical-documentation.md` → Technical details  

---

## Testing

The following were tested:

- Navigation toggle works on mobile
- Theme switching persists after reload
- Project filtering and search work correctly
- API loads data and handles errors
- Form validation works for all cases
- Layout is responsive across screen sizes

---

## Future Improvements
- Add backend for real form submission
- Add more projects with real links
- Improve accessibility (ARIA enhancements)
- Add deployment (GitHub Pages)