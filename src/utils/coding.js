import representMe from "../assets/images/projects/Represent-Me.png"
import tinyLearn from "../assets/images/projects/Tiny-Learn.png";
import codeQuiz from "../assets/images/projects/Code-Quiz.png";
import dateNight from "../assets/images/projects/Date-Night-Helper.png";
import workDay from "../assets/images/projects/Work-Day-Scheduler.png";
import budgetTracker from "../assets/images/projects/Budget-Tracker.png";
import eatDaBurger from "../assets/images/projects/Eat-Da-Burger.png";
import employeeDirectory from "../assets/images/projects/Employee-Directory.png";
import employeeTracker from "../assets/images/projects/Employee-Tracker.png";
import workoutTracker from "../assets/images/projects/Fitness-Tracker.png";
import noteTaker from "../assets/images/projects/Note-Taker.png";
import templateEngine from "../assets/images/projects/Template-Engine.png";

function ProjectCard(title, about, imgURL, appURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.appURL = appURL;
    this.repoURL = repoURL;
};

const representMeCard = new ProjectCard(
    "Represent Me",
    "An app where users can find information on their local government. Learn about your locally elected officials, contact them when you don’t agree with their policies and get dates for upcoming elections. This app aims to ensure that everyone has free and equal access to information to make informed decisions about who they want to elect.",
    representMe,
    "https://represent-me-2020.herokuapp.com/",
    "https://github.com/gidmp/Represent-Me"
);

const tinyLearnCard = new ProjectCard(
    "Tiny Learn",
    "TinyLearn serves you one random subject to learn about a day. You can save your learns to your account keep on learnin' at a later time. With all the extra time we have during the COVID-19 crisis, TinyLearn aims to make a big impact in your day.",
    tinyLearn,
    "https://young-retreat-53983.herokuapp.com/",
    "https://github.com/vxmao87/project-2"
);

const codeQuizCard = new ProjectCard(
    "Code Quiz",
    "An application, built with React, that allows the user to have quick and easy access to employee information. User may filter and search employees by name, and sort by name, email, DOB, and phone number.",
    codeQuiz,
    "https://julieritz.github.io/Code-Quiz/",
    "https://github.com/julieritz/Code-Quiz"
);

const dateNightCard = new ProjectCard(
    "Date Night Helper",
    "An entertainment application which allows the user to browse for trending movies, tv shows, and books to keep them entertained during their involuntary time at home. User may save content to their personal list to remember for later. Built using the NYT bestseller and movie reviews API, and The Movie Database API.",
    dateNight,
    "https://julieritz.github.io/Project-One/",
    "https://github.com/julieritz/Project-One"
);

const workDayCard = new ProjectCard(
    "Work Day Scheduler",
    "A simple work-day scheduler that allows the user to see past hours, current hour, and future hours on today's date, 8am-5pm.",
    workDay,
    "https://julieritz.github.io/Work-Day-Scheduler",
    "https://github.com/julieritz/Work-Day-Scheduler"
);

const budgetTrackerCard = new ProjectCard(
    "Budget Tracker",
    "This app keeps track of all deposits and withdrawals you make. Give them a name to help you remember what they were for and total $ amount will automatically update. This app works online or offline for smooth transition when you don't have access to the internet using a Service Worker and Cache API.",
    budgetTracker,
    "https://github.com/julieritz/Budget-Tracker",
    "https://rocky-scrubland-50374.herokuapp.com/"
);

const eatDaBurgerCard = new ProjectCard(
    "Eat Da Burger",
    "This app helps you order burgers and keep track of which ones you've eaten. It uses an MVC which includes a model, handlebars and a connection & orm. It uses MySQL Workbench to create a database and seeds for some pre-fed information.",
    eatDaBurger,
    "https://github.com/julieritz/Eat-Da-Burger",
    "https://enigmatic-eyrie-22364.herokuapp.com/"
);

const employeeDirectoryCard = new ProjectCard(
    "Employee Directory",
    "This app lets you search through 200 of your coworkers by name, or allows you sort them by name when clicking on the 'Name' heading. It displays their information such as phone number, email and date of birth in an organized table. Created using React to organize and style data from the randomuser API.",
    employeeDirectory,
    "https://github.com/julieritz/Employee-Directory",
    "https://damp-sands-00031.herokuapp.com/"
);

const employeeTrackerCard = new ProjectCard(
    "Employee Tracker",
    "This employee tracker will help you keep track of all of your employees, their names, titles, salaries, departments and managers. Built with: a database using schema with MySQL, feeding it some initial data w/ seeds & using inquirer.",
    employeeTracker,
    "https://github.com/julieritz/Employee-Tracker",
    "https://github.com/julieritz/Employee-Tracker"
);

const workoutTrackerCard = new ProjectCard(
    "Workout Tracker",
    "Track your workouts with this simple and easy to use workout tracker! This app keeps track of all exercises in your workout and displays graphs summarizing all your workouts done in a week.",
    workoutTracker,
    "https://github.com/julieritz/Workout-Tracker",
    "https://still-hollows-73092.herokuapp.com/"
);

const noteTakerCard = new ProjectCard(
    "Note Taker",
    "This note taker uses express to set up a server and store information from the notes. You can add a note and delete it, but not edit it.",
    noteTaker,
    "https://github.com/julieritz/Express-Note-Taker",
    "https://github.com/julieritz/Express-Note-Taker"
);

const templateEngineCard = new ProjectCard(
    "Template Engine",
    "This template engine helps the user create an html page to keep track of information of everyone on their team. The team is led by one manager. The user can add as many engineers and interns as they like after that.",
    templateEngine,
    "https://github.com/julieritz/Template-Engine",
    "https://github.com/julieritz/Template-Engine"
);

let coding = [representMeCard, tinyLearnCard, codeQuizCard, dateNightCard, workDayCard, budgetTrackerCard, eatDaBurgerCard, employeeDirectoryCard, employeeTrackerCard, workoutTrackerCard, noteTakerCard, templateEngineCard];

export default coding;