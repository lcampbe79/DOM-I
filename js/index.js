const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((navLink, i) => {
  navLink.textContent = siteContent["nav"][`nav-item-${i+1}`];
});

const nav = document.querySelector("nav");
const beginning = document.createElement("a");
beginning.textContent = "Beginning";
nav.prepend(beginning);

const end = document.createElement("a");
end.textContent = "End";
nav.appendChild(end);


const anchors = document.querySelectorAll("nav a");
anchors.forEach((anchor) => {
  anchor.style.color = "green";
});


//middle images: DOM IS AWESOME


const cta = document.querySelector(".cta-text");
const h1 = cta.querySelector("h1");
h1.textContent = siteContent.cta.h1;

//button under DOM
const button = cta.querySelector("button");
button.textContent  = "Get Started";
//Right img
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main Content
//Features
const topContentFeatures = document.querySelectorAll(".text-content");
const h4Features = topContentFeatures[0].querySelector("h4");
h4Features.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = topContentFeatures[0].querySelector("p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

//About
const topContentAbout = document.querySelectorAll(".text-content");
const h4About = topContentFeatures[1].querySelector("h4");
h4About.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = topContentFeatures[1].querySelector("p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

//Middle Img
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Bottom Content
//Services
const bottomContentServices = document.querySelectorAll(".text-content");
const h4Services = topContentFeatures[2].querySelector("h4");
h4Services.textContent = siteContent["main-content"]["services-h4"];
const servicesContent = topContentFeatures[2].querySelector("p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

//Product
const bottomContentProduct = document.querySelectorAll(".text-content");
const h4Product = topContentFeatures[3].querySelector("h4");
h4Product.textContent = siteContent["main-content"]["product-h4"];
const productContent = topContentFeatures[3].querySelector("p");
productContent.textContent = siteContent["main-content"]["product-content"];
//Vision
const bottomContentVision = document.querySelectorAll(".text-content");
const h4Vision = topContentFeatures[4].querySelector("h4");
h4Vision.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = topContentFeatures[4].querySelector("p");
visionContent.textContent = siteContent["main-content"]["vision-content"];

//Contact
const contact = document.querySelector(".contact");
const h4Contact = contact.querySelector("h4");
h4Contact.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelectorAll(".contact p")[0];
address.textContent = siteContent.contact.address;
const phone = document.querySelectorAll(".contact p")[1];
phone.textContent = siteContent.contact.phone;
const email = document.querySelectorAll(".contact p")[2];
email.textContent = siteContent.contact.email;

const copyright = document.querySelector("footer");
copyright.textContent = siteContent.footer.copyright;