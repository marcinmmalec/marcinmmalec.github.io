/* Object containing all the resources */
const resourceList = {
    w3Schools: {
        name: 'W3 Schools',
        image: '',
        description: 'Online resource for web developers, covering all the aspects of web developemnt: HTML Tutorial, CSS Tutorial, JavaScript Tutorial, PHP Tutorial, SQL Tutorial, Python Tutorial, Java Tutorial, C++ Tutorial, XML Tutorial, W3.CSS Tutorial, and Much More...',
        link: 'https://www.w3schools.com/',
        categories: ['generalResources']
    },
    w3SchoolsHowTo: {
        name: 'W3 Schools How To...',
        image: '',
        description: '',
        link: 'https://www.w3schools.com/howto/default.asp',
        categories: ['generalResources']
    },
    flexboxIo: {
        name: 'Flexbox.io',
        image: '',
        description: 'A simple, free 20 video course that will help you master CSS Flexbox!',
        link: 'https://flexbox.io/',
        categories: ['specificTutorials', 'flex', 'flexbox']
    },
    cssGridGarden: {
        name: 'CSS Grid Garden',
        image: '',
        description: 'Gamification Grid Tutorial.',
        link: 'http://cssgridgarden.com/',
        categories: ['specificTutorials', 'Grid']
    },
    flexboxFroggy: {
        name: 'Flexbox Froggy',
        image: '',
        description: 'Gamification Flexbox Tutorial.',
        link: 'https://flexboxfroggy.com/',
        categories: ['specificTutorials', 'flex', 'flexbox']
    },
    gitForBeginners: {
        name: 'Git Tutorial for Beginners: Learn Git in 1 Hour',
        image: '',
        description: 'Part of Programming with Mosh.',
        link: 'https://www.youtube.com/watch?v=8JJ101D3knE&t=850s&ab_channel=ProgrammingwithMosh',
        categories: ['specificTutorials', 'git']
    },
    javaScriptWebProjects20Projects: {
        name: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio',
        image: '',
        description: 'Udemy course that goes over building 20 different JavaScript courses.',
        link: 'https://evolveu.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20424503#content',
        categories: ['specificTutorials', 'javaScript']
    },
    javaScriptUnderstandingtheWeirdParts: {
        name: 'JavaScript: Understanding the Weird Parts with Tony Alicea',
        image: '',
        description: 'This is an advanced Javascript course for everyone, giving a deep understanding of the language by understanding how it works under the hood.',
        link: 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&feature=emb_logo',
        categories: ['specificTutorials', 'javaScript']
    },
    cssTricks: {
        name: 'CSS Tricks',
        image: '',
        description: 'Articles regarding CSS, HTML, JavaScript, Wordpress, Front-end devloper, and designer.',
        link: 'https://css-tricks.com/',
        categories: ['generalResources', 'css']
    },
    freeCodeCamp: {
        name: 'Free Code Camp',
        image: '',
        description: 'Nonprofit community that helps you learn to code by building projects.',
        link: 'https://www.freecodecamp.org/learn/',
        categories: ['generalResources']
    },
    vsCodeEmmetCheatsheet: {
        name: 'Emmet Cheat Sheet',
        image: '',
        description: 'Cheatsheet for Emmet in VS Code.',
        link: 'https://docs.emmet.io/cheat-sheet/',
        categories: ['generalResources', 'vsCode']
    },
    vsCodeMultiCursorEditing: {
        name: 'Multi-Cursor Editing in Visual Studio Code',
        image: '',
        description: 'Article detailing how to use multiple selection in VS Code.',
        link: 'https://www.codecademy.com/catalog',
        categories: ['specificTutorials', 'vsCode']
    },
    codecademy: {
        name: 'Codecademy',
        image: '',
        description: 'Most of the web content is behind a paywall.',
        link: 'https://tahoeninjas.blog/2019/03/30/multi-cursor-editing-in-visual-studio-code/',
        categories: ['generalResources']
    },
    websiteBuilderExpert: {
        name: 'Website Builder Expert - How to Choose Color',
        image: '',
        description: 'How to Choose a Good Color Scheme For Your Website.',
        link: 'https://www.websitebuilderexpert.com/designing-websites/how-to-choose-color-for-your-website/',
        categories: ['styles']
    },
    canva: {
        name: 'Canva',
        image: '',
        description: 'Color palette generator that uses images; each palette utilizes 4 colors.',
        link: 'https://www.canva.com/colors/color-palette-generator/',
        categories: ['styles']
    },
    coolors: {
        name: 'Coolors',
        image: '',
        description: 'Create the perfect palette or get inspired by thousands of beautiful color schemes.',
        link: 'https://coolors.co/',
        categories: ['styles']
    },
    colormind: {
        name: 'Colormind',
        image: '',
        description: 'Colormind is a color scheme generator that uses deep learning. It can learn color styles from photographs, movies, and popular art.',
        link: 'http://colormind.io/',
        categories: ['styles']
    },
    paletton: {
        name: 'Paletton - Color Scheme Designer',
        image: '',
        description: '',
        link: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
        categories: ['styles']
    },
    htmlcolorcodes: {
        name: 'HTML Color Codes',
        image: '',
        description: 'Extensive Tool/Library for finding the Hex, RGB, and HSL of colors.',
        link: 'https://htmlcolorcodes.com/color-chart/',
        categories: ['styles']
    },
    heroPatterns: {
        name: 'Hero Patterns',
        image: '',
        description: 'Hero Image/Patterns collection.',
        link: 'https://www.heropatterns.com/',
        categories: ['styles']
    },
    heroIcons: {
        name: 'Hero Icons',
        image: '',
        description: 'SVG icons collection; created by the makers of Tailwind CSS framework.',
        link: 'https://heroicons.com/',
        categories: ['styles']
    },
    fontAwesome: {
        name: 'Font Awesome',
        image: '',
        description: 'Vector Icons and Social Logos collection.',
        link: 'https://fontawesome.com/',
        categories: ['styles']
    },
    cssgradient: {
        name: 'CSS Gradient',
        image: '',
        description: 'Generator to create linear and radial gradients.',
        link: 'https://cssgradient.io/',
        categories: ['styles']
    },
    loadingIo: {
        name: 'Loading.io',
        image: '',
        description: 'Collection of loading images.',
        link: 'https://loading.io/',
        categories: ['styles']
    },
    unDraw: {
        name: 'unDraw',
        image: '',
        description: 'Collection of SVG illustrations.',
        link: 'https://undraw.co/illustrations',
        categories: ['styles']
    },
    unSplash: {
        name: 'unSplash',
        image: '',
        description: 'Collection of Freely available images.',
        link: 'https://unsplash.com/',
        categories: ['styles']
    },
    openSourceWebDesign: {
        name: 'Open Source Web Design',
        image: '',
        description: 'Open Source Web Design is a platform for sharing standards-compliant free web design templates. We give web publishers a voice through good design.',
        link: 'http://www.oswd.org',
        categories: ['frameworks']
    },
    bootstrap: {
        name: 'Bootstrap',
        image: '',
        description: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.',
        link: 'https://getbootstrap.com/',
        categories: ['frameworks']
    },
    tailwindcss: {
        name: 'tailwindcss',
        image: '',
        description: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
        link: 'https://tailwindcss.com/',
        categories: ['frameworks']
    },
    sampleVideos: {
        name: 'Sample Videos',
        image: '',
        description: 'Collection of dummy videos for demo use.',
        link: 'https://sample-videos.com/',
        categories: ['other']
    },
    freelogoDesign: {
        name: 'Free Logo Design',
        image: '',
        description: 'Logo generator.',
        link: 'https://www.freelogodesign.org/',
        categories: ['other']
    },
    handBrake: {
        name: 'HandBrake.fr',
        image: '',
        description: 'Video transcoder.',
        link: 'https://handbrake.fr/',
        categories: ['other']
    },
    justColorPicker: {
        name: 'Just Color Picker',
        image: '',
        description: 'Chrome extension that provides a tool to select colors on a webpage.',
        link: 'https://chrome.google.com/webstore/detail/just-color-picker/anjjklgikjggiojapklkllfgehkbljpd/related?hl=en',
        categories: ['other']
    },
    colorZilla: {
        name: 'ColorZilla',
        image: '',
        description: 'Another Color Selection tool. There is also a gradient generator.',
        link: 'http://www.colorzilla.com/',
        categories: ['other']
    },
    webFormatter: {
        name: 'Web Formatter',
        image: '',
        description: 'Tool that formats HTML, CSS, XML, JavaScript, PHP, and JSON.',
        link: 'https://webformatter.com/',
        categories: ['other']
    },
    randomuser: {
        name: 'Randomuser.me',
        image: '',
        description: 'API that generates random users.',
        link: 'https://randomuser.me/',
        categories: ['other']
    },
    backBlaze: {
        name: 'Back Blaze',
        image: '',
        description: 'Service that provides data backup.',
        link: 'https://www.backblaze.com/',
        categories: ['other']
    },
    sheetScript1: {
        name: 'How to Hide a Row based on a Cell Value in Google Sheets with Filter or Google Apps Script',
        image: '',
        description: '',
        link: 'https://yagisanatode.com/2018/05/26/how-to-hide-a-row-based-on-a-cell-value-in-google-sheets-with-filter-or-google-apps-script/',
        categories: ['other']
    },
    pageSpeedInsights: {
        name: 'PageSpeed Insights',
        image: '',
        description: 'Google tool that measures mobile/desktop load speed and applies a rating. Provides suggestions to improve your site. Useful for SEO.',
        link: 'https://developers.google.com/speed/pagespeed/insights/',
        categories: ['other']
    },
    mobileFriendlyTest: {
        name: 'Mobile-Friendly Test',
        image: '',
        description: 'Google tool to help determine if the site is mobile-friendly.',
        link: 'https://search.google.com/test/mobile-friendly',
        categories: ['other']
    },
    ampDocumentation: {
        name: 'AMP Documentation',
        image: '',
        description: 'Accelerated Mobile Pages documentation to develop mobile pages that more mobile-friendly. May be mandatory for SEO depending on Google algorithms.',
        link: 'https://amp.dev/',
        categories: ['other']
    },
    shapeUp: {
        name: 'Shape Up: Stop Running in Circles and Ship Work that Matters',
        image: '',
        description: 'This book is a guide to how we do product development at Basecamp. It’s also a toolbox full of techniques that you can apply in your own way to your own process. Whether you’re a founder, CTO, product manager, designer, or developer, you’re probably here because of some common challenges that all software companies have to face.',
        link: 'https://basecamp.com/shapeup/webbook',
        categories: ['generalResources']
    },
    userStories: {
        name: 'What are (good) user stories?',
        image: '',
        description: 'By definition a user story is a (software) requirement formulated in everyday language. It can represent a user’s need, serve as a planning item in agile software development, or simply be used as a basis for discussion. User stories are understandable for everyone and clearly express the customers’ benefit.',
        link: 'https://blogs.itemis.com/en/what-are-good-user-stories',
        categories: ['generalResources']
    },
}

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function populateResources() {
    let container = document.getElementsByClassName('container')[0];
    Object.entries(resourceList).forEach(x => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card filterDiv');
        card.classList.add(...x[1].categories);
        
        let images = document.createElement('img');
        images.setAttribute('class', 'card-img-top');
        images.setAttribute('src', x[1].image);
        
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerText = x[1].name;
        
        let cardText = document.createElement('p');
        cardText.setAttribute('class', 'card-text');
        cardText.innerText = x[1].description;
        
        let cardLink = document.createElement('a');
        cardLink.setAttribute('class', 'btn btn-primary');
        cardLink.setAttribute('href', x[1].link);
        cardLink.setAttribute('target', '_blank');
        cardLink.innerText = 'Go to Site';
        
        card.appendChild(images);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardLink);
        container.appendChild(card);
    });
}

function filterList() {
    let list = document.getElementsByClassName('filterDiv');
    let input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    let textValue, descriptionValue;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        textValue = list[i].children[1].children[0].innerText;
        descriptionValue = list[i].children[1].children[1].innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1 || descriptionValue.toUpperCase().indexOf(filter) > -1) {
            list[i].removeAttribute('hidden', '');
        } else {
            list[i].setAttribute('hidden', '');
        }
    }
}

populateResources();
filterSelection("all");