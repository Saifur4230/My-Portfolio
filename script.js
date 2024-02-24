function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return  (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },  
    React.createElement("div", { className: "overlay" }),  
    React.createElement("div", { className: "menu-items" },  
    React.createElement("ul", null,  
    React.createElement("li", null,  
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),  


    React.createElement("li", null,  
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")),  



    React.createElement("li", null,  
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),  



    React.createElement("li", null,  
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))),  




    React.createElement(SocialLinks, null))));

};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return  (
    React.createElement(React.Fragment, null,  
    React.createElement("nav", { id: "navbar" },  
    React.createElement("div", { className: "nav-wrapper" },  
    React.createElement("p", { className: "brand" }, "Saifur",  

    React.createElement("strong", null, " Rahman")),  

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },  

    React.createElement("span", null))))));


};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return  (
    React.createElement("header", { id: "welcome-section" },  
    React.createElement("div", { className: "forest" }),  
    React.createElement("div", { className: "silhouette" }),  
    React.createElement("div", { className: "moon" }),  
    React.createElement("div", { className: "container" },  
    React.createElement("h1", null,  
    React.createElement("span", { className: "line" }, "I do"),  
    React.createElement("span", { className: "line" },  
    React.createElement("span", { className: "color" }, "Programmering"))),  


    React.createElement("div", { className: "buttons" },  
    React.createElement("a", { href: "#projects" }, "my portfolio"),  
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));


};


/***********************
  About Component
 ***********************/

const About = props => {
  return  (
    React.createElement("section", { id: "about" },  
    React.createElement("div", { className: "wrapper" },  
    React.createElement("article", null,  
    React.createElement("div", { className: "title" },  
    React.createElement("h3", null, "Who's this guy?"),  
    React.createElement("p", { className: "separator" })),  

    React.createElement("div", { className: "desc full" },  
    React.createElement("h4", { className: "subtitle" }, "My name is Saifur."),  
    React.createElement("p", null, "I am a web developer and UX designer live in the beautiful city Narayanganj, Dhaka."),  



    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I love learning new things. I am in my first year of intermediate studies at Narayanganj College. I also love gaming, so I'm thinking of building a gaming PC. And Kacchi, it is a part of my immotion!")),  


    React.createElement("div", { className: "title" },  
    React.createElement("h3", null, "What does he do?"),  
    React.createElement("p", { className: "separator" })),  

    React.createElement("div", { className: "desc full" },  
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."),  
    React.createElement("p", null, "For the front-end, I usually work with Javascript, and I also use popular frameworks like ReactJS. I also make the web pretty by using HTML and CSS whenever needed, and I also use Bootstrap, Tailwind CSS etc."),  




    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But I am not interested in backend development too much.")),  

    ))));

};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    html: 'fab fa-html5',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
     };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return  (
    React.createElement("div", { className: "project" },  
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },  
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),  

    React.createElement("div", { className: "project-details" },  
    React.createElement("div", { className: "project-tile" },  
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>  
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,  
    React.createElement("div", { className: "buttons" },  
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",  
    React.createElement("i", { className: "fas fa-external-link-alt" })),  

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",  
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));


};

/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return  (
    React.createElement("section", { id: "projects" },  
    React.createElement("div", { className: "projects-container" },  
    React.createElement("div", { className: "heading" },  
    React.createElement("h3", { className: "title" }, "My Works"),  
    React.createElement("p", { className: "separator" }),  
    React.createElement("p", { className: "subtitle" }, "Here's a list of ",  
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my free time. I've been coding for almost 9 months.")),  



    React.createElement("div", { className: "projects-wrapper" },  
    
    
    React.createElement(Project, {
      title: "My Dream Cars.",
      img: 'https://saifur4230.github.io/image-uploads/images/My-Dream-Cars.png',
      tech: " html css js ",
      link: "https://saifur4230.github.io/my-dream-cars/",
      repo: "https://github.com/Saifur4230/my-dream-cars" },  

    React.createElement("small", null, "Built using HTML, CSS, JS."),  
    React.createElement("p", null, "This is a website that I made that lists all my favorite cars.")),  



    React.createElement(Project, {
      title: "Solar System",
      img: 'https://saifur4230.github.io/image-uploads/images/Solar-System.png',
      tech: " html css",
      link: "https://saifur4230.github.io/Solar-System/",
      repo: "https://github.com/Saifur4230/Solar-System" },  

    React.createElement("small", null, "Built using HTML and CSS."),  

    React.createElement("p", null, "I built this website, which looks like a 2D version of a solar system.")),  



    React.createElement(Project, {
      title: "Personal Library.",
      img: 'https://saifur4230.github.io/image-uploads/images/Calculator-Code-By-Saifur.png',
      tech: " html css js",
      link: "https://saifur4230.github.io/calculator/",
      repo: "https://github.com/Saifur4230/calculator" },  

    React.createElement("small", null, "Built using JS, CSS + Bootstrap and HTML."),  
    React.createElement("p", null, "Just a normal calculator.")),  



    React.createElement(Project, {
      title: "Age Calculator",
      img: 'https://saifur4230.github.io/image-uploads/images/Age-Calculator.png',
      tech: " html js css",
      link: "https://saifur4230.github.io/age-calculator/",
      repo: "https://github.com/Saifur4230/age-calculator" },  

    React.createElement("small", null, "Built using JS, CSS + Bootstrap and HTML."),  
    React.createElement("p", null, "This website calculates your age using your birth date.")),  



    React.createElement(Project, {
      title: "To Do List",
      img: 'https://saifur4230.github.io/image-uploads/images/To-Do-List.png',
      tech: "html js css",
      link: "https://saifur4230.github.io/To-Do-List/",
      repo: "https://github.com/Saifur4230/To-Do-List" },  

    React.createElement("small", null, "Built using HTML, JS and CSS + Bootstrap."),  
    React.createElement("p", null, "This website will help you make a to-do list.")),  



    React.createElement(Project, {
      title: "Structure of Carbon",
      img: 'https://saifur4230.github.io/image-uploads/images/Structure-of-Carbon.png',
      tech: "html css",
      link: "https://saifur4230.github.io/Structure-of-Carbon/",
      repo: "https://github.com/Saifur4230/Structure-of-Carbon/" },  

    React.createElement("small", null, "Built using CSS + Bootstrap and HTML."),  
    React.createElement("p", null, "An Animated carbon structure.")),  



    React.createElement(Project, {
      title: "Tic Tac Toe",
      img: 'https://saifur4230.github.io/image-uploads/images/Tic-Tac-Toe.png',
      tech: "js css html",
      link: "https://saifur4230.github.io/Tic-Tac-Toe/",
      repo: "https://github.com/Saifur4230/Tic-Tac-Toe" },  

    React.createElement("small", null, "Built using HTML, JS and CSS."),  
    React.createElement("p", null, "Play tic-tac-teo on my webpage.")),  



    React.createElement(Project, {
      title: "Mamory Game",
      img: 'https://saifur4230.github.io/image-uploads/images/mamory-game.png',
      tech: "js css html",
      link: "https://saifur4230.github.io/Memory-Game/",
      repo: "https://github.com/Saifur4230/Memory-Game" },  

    React.createElement("small", null, "Built using CSS, JS and HTML."),  
    React.createElement("p", null, "To play this game, remember the previous image.")),  



    React.createElement(Project, {
      title: "Password Generator.",
      img: 'https://saifur4230.github.io/image-uploads/images/Password-Generator.png',
      tech: "js html css",
      link: "https://saifur4230.github.io/Password-Generator/",
      repo: "https://github.com/Saifur4230/Password-Generator" },  

    React.createElement("small", null, "Built using CSS, JS and HTML."),  
    React.createElement("p", null, "Generate your own difficult password.")),  



    React.createElement(Project, {
      title: "Space Shooter",
      img: 'https://saifur4230.github.io/image-uploads/images/Space-Shooter.png',
      tech: "js html css",
      link: "https://saifur4230.github.io/space-game/",
      repo: "https://github.com/Saifur4230/space-game" },  

    React.createElement("small", null, "Built using CSS, JS and HTML."),  
    React.createElement("p", null, "Play a game in outer space.")),  



    React.createElement(Project, {
      title: "Typing Speed Test",
      img: 'https://saifur4230.github.io/image-uploads/images/Typing-Speed-Test.png',
      tech: "js html css",
      link: "https://saifur4230.github.io/Typing-Speed-Test/",
      repo: "https://github.com/Saifur4230/Typing-Speed-Test" },  

    React.createElement("small", null, "Built using JS, HTML and CSS."),  
    React.createElement("p", null, "Test your typing speed.")),  



    React.createElement(Project, {
      title: "Calander.",
      img: 'https://saifur4230.github.io/image-uploads/images/CALENDAR.png',
      tech: "js html css",
      link: "https://saifur4230.github.io/CALENDAR/",
      repo: "https://github.com/Saifur4230/CALENDAR" },  

    React.createElement("small", null, "Built using HTML, JS and CSS."),  
    React.createElement("p", null, "A normal calender.")),  



    React.createElement(Project, {
      title: "",
      img: 'https://saifur4230.github.io/image-uploads/images/Drawing-App.png',
      tech: "js html css",
      link: "https://saifur4230.github.io/Drawing-App/",
      repo: "https://github.com/Saifur4230/Drawing-App" },  

    React.createElement("small", null, "Built using HTML, CSS and JS."),  
    React.createElement("p", null, "Draw your own imagination.")),  



    React.createElement(Project, {
      title: "Sharingan of Madara",
      img: 'https://saifur4230.github.io/image-uploads/images/Sharingan-Madara-Uchiha.png',
      tech: "css",
      link: "https://saifur4230.github.io/Sharingan-Madara/",
      repo: "https://github.com/Saifur4230/Sharingan-Madara" },  

    React.createElement("small", null, "Built using CSS ."),  
    React.createElement("p", null, "Madara's Mangekyou Sharingan.")),  



    React.createElement(Project, {
      title: "Sharingan of Shisui",
      img: 'https://saifur4230.github.io/image-uploads/images/sharingan-Shisui.png',
      tech: "css",
      link: "https://saifur4230.github.io/sharingan-Shisui/",
      repo: "https://github.com/Saifur4230/sharingan-Shisui" },  

    React.createElement("small", null, "Built using CSS."),  
    React.createElement("p", null, "Shisui's Mangekyou Sharingan."))
    
    
    ))));


};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return  (
    React.createElement("section", { id: "contact" },  
    React.createElement("div", { className: "container" },  
    React.createElement("div", { className: "heading-wrapper" },  
    React.createElement("div", { className: "heading" },  
    React.createElement("p", { className: "title" }, "Want to ",  
    React.createElement("br", null), "contact me?"),  


    React.createElement("p", { className: "separator" }),  
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '',  
    React.createElement("span", { className: "mail" }, "saifur4230",  

    React.createElement("i", { className: "fas fa-at at" }), "gmail",  

    React.createElement("i"), ".com"), ":")),  





    React.createElement(SocialLinks, null)),  

    React.createElement("form", { id: "contact-form", action: "#" },  
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }),  
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }),  
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }),  
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));


};


/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return  (
    React.createElement("footer", null,  
    React.createElement("div", { className: "wrapper" },  
    React.createElement("h3", null, "THANKS FOR VISITING"),  
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Saifur Rahman."),  
    React.createElement(SocialLinks, null))));



};


/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return  (
    React.createElement("div", { className: "social" },  
    React.createElement("a", {
      href: "https://www.facebook.com/profile.php?id=100069560412259",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to Saifur's Facebook profile" },

    ' ',  
    React.createElement("i", { className: "fab fa-facebook" })),  

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/Saifur4230",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to Saifur's GitHub Profile" },

    ' ',  
    React.createElement("i", { className: "fab fa-github" })),  

    React.createElement("a", {
      href: "https://www.instagram.com/obito__12___/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to Saifur's Codepen Profile" },

    ' ',  
    React.createElement("i", { className: "fab fa-instagram" }))));


};


/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return  (
      React.createElement(React.Fragment, null,  
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),  
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),  
      React.createElement(Header, null),  
      React.createElement(About, null),  
      React.createElement(Projects, null),  
      React.createElement(Contact, null),  
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}


ReactDOM.render( React.createElement(App, null), document.getElementById('app'));