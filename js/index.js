const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// ======
const services = document.querySelectorAll("a:nth-of-type(1)");
services.forEach(element => {
    element.textContent = siteContent.nav["nav-item-1"];
});

const product = document.querySelectorAll("a:nth-of-type(2)");
product[0].textContent = siteContent.nav["nav-item-2"];

const vision = document.querySelectorAll("a:nth-of-type(3)");
vision[0].textContent = siteContent.nav["nav-item-3"];

const features = document.querySelectorAll("a:nth-of-type(4)");
features[0].textContent = siteContent.nav["nav-item-4"];

const about = document.querySelectorAll("a:nth-of-type(5)");
about[0].textContent = siteContent.nav["nav-item-5"];

const contact = document.querySelectorAll("a:nth-of-type(6)");
contact[0].textContent = siteContent.nav["nav-item-6"];
/// ======= end =======

const content = document.querySelectorAll("h1");
content[0].textContent = siteContent.cta.h1;

const button = document.querySelectorAll("button");
button[0].textContent = siteContent.cta.button;

const img = document.querySelectorAll("#cta-img");
img[0].setAttribute("src", siteContent.cta["img-src"]);

// ==== end ======

const feat = document.querySelectorAll("h4");
feat[0].textContent = siteContent["main-content"]["features-h4"];

const featCont = document.querySelectorAll("p");
featCont[0].textContent = siteContent["main-content"]["features-content"];

const txt = document.querySelectorAll("h4");
txt[1].textContent = siteContent["main-content"]["about-h4"];

const aboutCont = document.querySelectorAll("p");
aboutCont[1].textContent = siteContent["main-content"]["about-content"];

// ========  end  =========

const img_mid = document.querySelectorAll("#middle-img");
img_mid[0].setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// ========  end  =========

const service = document.querySelectorAll("h4");
service[2].textContent = siteContent["main-content"]["services-h4"];

const servCont = document.querySelectorAll("p");
servCont[2].textContent = siteContent["main-content"]["services-content"];

const prod = document.querySelectorAll("h4");
prod[3].textContent = siteContent["main-content"]["product-h4"];

const prodCont = document.querySelectorAll("p");
aboutCont[3].textContent = siteContent["main-content"]["product-content"];

const visio = document.querySelectorAll("h4");
visio[4].textContent = siteContent["main-content"]["vision-h4"];

const visionCont = document.querySelectorAll("p");
visionCont[4].textContent = siteContent["main-content"]["vision-content"];

// ========== end ==========
const conTact = document.querySelectorAll("h4");
conTact[5].textContent = siteContent.contact["contact-h4"];

const address = document.querySelectorAll("p");
address[5].textContent = siteContent.contact.address;

const phone = document.querySelectorAll("p");
phone[6].textContent = siteContent.contact.phone;

const email = document.querySelectorAll("p");
email[7].textContent = siteContent.contact.email;

const copyRight = document.querySelectorAll("p");
copyRight[8].textContent = siteContent.footer.copyright;
/// ===== end =====

const newColor = document
    .querySelectorAll("a")
    .forEach(element => (element.style.color = "green"));

const nameUpTop = (document.createElement("a").textContent =
    "By Aaron Pleitez");
document.querySelector("nav").prepend(nameUpTop);

const newData = (document.createElement("a").textContent = "Hello World!");

const testTry = document.querySelector("nav");

testTry.append(newData);