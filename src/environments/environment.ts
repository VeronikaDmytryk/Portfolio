// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false
};

export const projects = [
  {
    "id": "interviews",
    "name": "Interview Management System - Angular",
    "description": "Designed and implemented Interview Management System (IMS). IMS stores data of interviews and candidates in a MongoDB. Users can look up interviews data, search and filter interviews, edit interviews, see candidates profiles, see reports and customize them by different categories.",
    "type": "development",
    "technologies": [
      "Angular 5",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "ng2-Charts (Charts.js)"
    ],
    "repositoryUrl": "https://github.com/VeronikaDmytryk/remotable",
    "previewImage": "../assets/projects/remotable/thumbnail.png",
    "images": [
      "../assets/projects/remotable/1.png",
      "../assets/projects/remotable/2.png",
      "../assets/projects/remotable/3.png",
      "../assets/projects/remotable/4.png"
    ],
    "demoUrl": "http://veronikadmytryk.net/projects/remotable/interviews"
  },
  {
    "id": "volvo",
    "name": "Volvo Samara - Responsive Landing Page",
    "description": "Cross-browser landing page with a responsive and adaptive design for a car dealership in Samara, Russia. Includes CSS animations, validations, pop-up windows. Fully responsive layout design.",
    "type": "development",
    "technologies": [
      "HTML5",
      "CSS3",
      "CSS Animations",
      "SASS",
      "jQuery",
      "Animate.css",
      "Bootstrap",
      "Slick Slider",
      "Gulp.js",
      "Bower"
    ],
    "repositoryUrl": null,
    "images": [
      "../assets/projects/volvo/1.png"
    ],
    "previewImage": "../assets/projects/volvo/thumbnail.png",
    "demoUrl": "http://veronikadmytryk.net/webpages/volvo/"
  },
  {
    "id": "tasker",
    "name": "Tasker - React.js",
    "description": "Designed and implemented responsive Task Manager Application (light version of Trello) allows users to add, edit and delete tasks. All tasks will be stored in the user's local storage. A Simple user guide is included in form of pre-defined tasks which explain how to use tasker. Responsive layout allows to use tasker on any platform using your web-browser.",
    "type": "development",
    "technologies": [
      "React.js",
      "CSS3",
      "Bootstrap",
      "HTML5"
    ],
    "repositoryUrl": "https://github.com/VeronikaDmytryk/tasker",
    "previewImage": "../assets/projects/tasker/thumbnail.png",
    "images": [
      "../assets/projects/tasker/1.png"
    ],
    "demoUrl": "http://veronikadmytryk.net/projects/tasker/"
  },
  {
    "id": "calculator",
    "name": "Calculator App - React.js",
    "description": "Designed and implemented simple calculator that supports addition / subtraction / multiplication / division / power. Developed without using JavaScript eval() function. The calculator handles division by zero. Designed under inspiration of Fluent Design System by Microsoft.",
    "type": "development",
    "technologies": [
      "React.js",
      "CSS3",
      "Bootstrap",
      "HTML5"
    ],
    "repositoryUrl": "https://github.com/VeronikaDmytryk/calculator",
    "previewImage": "../assets/projects/calculator/thumbnail.png",
    "images": [
      "../assets/projects/calculator/1.png"
    ],
    "demoUrl": "http://veronikadmytryk.net/projects/calculator/"
  },
  {
    "id": "freelance-show",
    "name": "Freelance Show - Responsive Landing Page",
    "description": "Promotional 5-screens Landing Page for educational project WayUp. Includes animations, validations pop-up windows and custom counter. Fully responsive and adaptive layout design.",
    "type": "development",
    "technologies": [
      "HTML5",
      "CSS3",
      "SASS",
      "jQuery",
      "Animate.css",
      "Bootstrap",
      "Gulp.js",
      "Bower"
    ],
    "repositoryUrl": null,
    "images": [
      "../assets/projects/freelanceshow/1.png"
    ],
    "previewImage": "../assets/projects/freelanceshow/thumbnail.png",
    "demoUrl": "http://veronikadmytryk.net/webpages/freelanceshow/"
  },
  {
    "id": "freelance-design",
    "name": "Freelance Design - Responsive Landing Page",
    "type": "development",
    "description": "Promotional 8-screens Landing Page for educational master classes by WayUp. Custom CSS animations were created for this project. Includes CSS animations, validations, pop-up windows, PHP back-end implementation for capturing submitted forms. Fully responsive and adaptive layout design.",
    "technologies": [
      "HTML5",
      "CSS3",
      "CSS Animations",
      "SASS",
      "jQuery",
      "Animate.css",
      "Bootstrap",
      "Gulp.js",
      "Bower",
      "PHP (forms)"
    ],
    "repositoryUrl": null,
    "demoUrl": "http://veronikadmytryk.net/webpages/freelance-design/",
    "images": [
      "../assets/projects/freelancedesign/1.png"
    ],
    "previewImage": "../assets/projects/freelancedesign/thumbnail.jpg",

  },
  {
    "id": "web-games",
    "name": "Web Games - Responsive Landing Page",
    "description": "Promotional 7-screens Landing Page for educational event by WayUp. Includes CSS animations, validations, pop-up windows, PHP back-end implementation for capturing submitted forms. Fully responsive and adaptive layout design.",
    "type": "development",
    "technologies": [
      "HTML5",
      "CSS3",
      "SASS",
      "jQuery",
      "Animate.css",
      "Bootstrap",
      "Gulp.js",
      "Bower",
      "PHP (forms)"
    ],
    "repositoryUrl": null,
    "images": [
      "../assets/projects/webgames/1.png"
    ],
    "previewImage": "../assets/projects/webgames/thumbnail.png",
    "demoUrl": "http://veronikadmytryk.net/webpages/webgames/"
  },
  {
    "id": "frontend-genius",
    "name": "Frontend Genius - Responsive Landing Page",
    "description": "Cross-browser responsive and adaptive 8-screens Landing Page for educational master class by WayUp. Includes CSS animations, validations, pop-up windows. Fully responsive and adaptive layout design.",
    "type": "development",
    "technologies": [
      "HTML5",
      "CSS3",
      "SASS",
      "jQuery",
      "jQuery Validate",
      "Animate.css",
      "Bootstrap",
      "Gulp.js",
      "Bower"
    ],
    "repositoryUrl": null,
    "images": [
      "../assets/projects/frontendgenius/1.png"
    ],
    "previewImage": "../assets/projects/frontendgenius/thumbnail.png",
    "demoUrl": "http://veronikadmytryk.net/webpages/frontend-genius/"
  },
  {
    "id": "first-pixel",
    "name": "First-Pixel - Responsive Landing Page",
    "description": "Promotional 9-screens Landing Page for online marathon by WayUp. Custom CSS animations were created for this project. Includes CSS animations, validations, pop-up windows, PHP backend implementation for capturing submitted forms. Fully responsive layout design.",
    "type": "development",
    "technologies": [
      "HTML5",
      "CSS3",
      "CSS Animations",
      "SASS",
      "jQuery",
      "Animate.css",
      "Bootstrap",
      "Gulp.js",
      "Bower",
      "PHP (forms)"
    ],
    "repositoryUrl": null,
    "images": [
      "../assets/projects/firstpixel/1.png"
    ],
    "previewImage": "../assets/projects/firstpixel/thumbnail.png",
    "demoUrl": "http://veronikadmytryk.net/webpages/first-pixel/"
  },
  {
    "id": "furry-house",
    "name": "Furry House - Landing Page design",
    "description": "Landing Page design for Pet's Hotel business. Developed logo, page concept, icons and all additional elements. Design was created with deep empathy in mind. Stylish yet simple design elements keeps user focused on the most important parts of the page.",
    "type": "design",
    "images": [
      "../assets/design/furryhouse/1.jpg",
      "../assets/design/furryhouse/2.jpg"
    ],
    "previewImage": "../assets/design/furryhouse/thumbnail.jpg",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ],
  },
  {
    "id": "mixer",
    "name": "Landing Page ideas mixer",
    "description": "4 Landing Page designs for different types of business. Created 1st screen for furniture store, new phone page, windows manufacturing firm, shoes on-line store. All designs tell the user different brand story combined with strong call to action.",
    "type": "design",
    "images": [
      "../assets/design/mixer/1.jpg",
      "../assets/design/mixer/2.jpg",
      "../assets/design/mixer/3.jpg",
      "../assets/design/mixer/4.jpg"
    ],
    "previewImage": "../assets/design/mixer/thumbnail.jpg",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    "id": "zima-leto",
    "name": "Zima-Leto - Landing Page design",
    "description": "Landing Page design for fur studio. Developed logo, page concept, icons and all additional elements.",
    "type": "design",
    "images": [
      "../assets/design/zimaleto/1.jpg",
      "../assets/design/zimaleto/2.jpg"
    ],
    "previewImage": "../assets/design/zimaleto/thumbnail.jpg",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    "id": "tic-tac-toe",
    "name": "Tic Tac Toe - game design",
    "description": "Tic Tac Toe game design inspired by times when kids didn't have mobile phones during school break. Blackboard texture and hand-written chalk fonts bring atmosphere of old school times to your game experience.",
    "type": "design",
    "images": [
      "../assets/design/xo/1.jpg",
      "../assets/design/xo/2.jpg",
      "../assets/design/xo/3.jpg"
    ],
    "previewImage": "../assets/design/xo/thumbnail.jpg",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    "id": "femida-legal",
    "name": "Legal Services - Landing Page design",
    "description": "Landing Page design for Legal Services business. Developed logo, page concept, icons and all additional elements. Design was created with simplicity in mind. Simple yet authentic graphics alows the client to focus on the most important information on the page. UX decisions help the client to easily navigate and find all necessary information.",
    "type": "design",
    "images": [
      "../assets/design/legalservices/1.jpg",
      "../assets/design/legalservices/2.png",
      "../assets/design/legalservices/3.png"
    ],
    "previewImage": "../assets/design/legalservices/thumbnail.jpg",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    "id": "cinema-app",
    "name": "Cinema App - booking experience design",
    "description": "UI/UX experience for booking a ticket to the movie. Developed concept, icons and ux flow. The app allows to book ticket to cinema in 4 simple steps. Clickable progress bar allows user to quickly and easily navigate to any step from any screen. Graphic icons are easy to understand. At the end of booking experience, instant QR code allows user to enter theater right away.",
    "type": "design",
    "images": [
      "../assets/design/cinemaapp/1.png",
      "../assets/design/cinemaapp/2.png",
      "../assets/design/cinemaapp/3.png",
      "../assets/design/cinemaapp/4.png",
      "../assets/design/cinemaapp/5.png"
    ],
    "previewImage": "../assets/design/cinemaapp/thumbnail.png",
    "technologies": [
      "Photoshop",
      "Illustrator"
    ]
  }
]

export const skills = [
  "Java",
  "C++",
  "JavaScript",
  "OOP",
  "jQuery",
  "HTML & CSS",
  "SASS",
  "Bootstrap",
  "jQuery",
  "Node.js",
  "Angular",
  "React.js",
  "Git",
  "MongoDB",
  "API integration",
  "Adobe Photoshop",
  "Adobe Illustrator"
]