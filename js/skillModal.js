/**********************************************************************************
*
* Javascript file for modifying the skill modal
*
***********************************************************************************/

/*
* Skills Object: List of skills for the skills modal
*
* Layout:
* [skill]
*   [skill-name]
*   [skill-image]
*   [skill-description]
*   [sample-projects]
*       [project-name]
*       [project-icon]
*       [project-link]
*/
const skills = {
    html5: {
        name: 'HTML 5',
        image: 'images/472-html5-logo-big-3.png',
        description: 'Proficient in creating webpages in HTML 5 with both in class and real world experience. Knowledge in correct tag use, use of attributes, nesting, and the DOM.',
        projects: {
            prj1: {
                name: 'Aggregate Series - Sample Product Series Page',
                icon: 'fa-briefcase',
                link: 'https://tilestonesource.com/aggregate-series/'
            },
            prj2: {
                name: 'Joan\'s Tacos - Code and fix your first webpage',
                icon: 'fa-graduation-cap',
                link: 'https://github.com/marcinmmalec/ICT580-Assignment1'
            },
            prj3: {
                name: 'Joan\'s Tacos Feedback Form - Div and semantic tags, validating, and debugging HTML5 &amp; CSS3 markup code',
                icon: 'fa-graduation-cap',
                link: 'https://github.com/marcinmmalec/ICT580-Assignment2'
            },
            prj4: {
                name: 'Responsive design and web design concepts',
                icon: 'fa-graduation-cap',
                link: 'https://github.com/marcinmmalec/ICT580-Assignment3'
            }
        }
    },
    css3: {
        name: 'CSS 3',
        image: 'images/css3-logo-big-2.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    javaScript: {
        name: 'JavaScript',
        image: 'images/Javascript-shield-3.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    jQuery: {
        name: 'jQuery',
        image: 'images/jquerylogo2_white.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    mySql: {
        name: 'mySQL',
        image: 'images/mySQL_Logo2.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    php: {
        name: 'php',
        image: 'images/php_Logo2.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    bootstrap: {
        name: 'Bootstrap',
        image: 'images/bootstrap_logo2.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    wordpress: {
        name: 'Wordpress',
        image: 'images/wordpress-logo2_white.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    uofc: {
        name: 'University of Calgary',
        image: 'images/UC-2.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    react: {
        name: 'React',
        image: 'images/ReactIcon.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    nodeJS: {
        name: 'Node.js',
        image: 'images/Node.js_logo.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    express: {
        name: 'Express Node.js',
        image: 'images/NodeJSExpressLogo.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    mongoDB: {
        name: 'MongoDB',
        image: 'images/MongoDBLogo.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
    semanticUIReact: {
        name: 'Semantic-UI React',
        image: 'images/SemanticUIReactLogo.png',
        description: 'More content to come! I am just getting my projects organized. Stay tuned for more.',
        projects: {
            
        }
    },
}
/*
* Function that updates the skill modal
*
* Parameters: skill {string}
*/
function updateModal(skill) {
    /* If the skill passed isn't in the skills object, use a default value and record an error message to the console */
    if (skills[skill] === undefined) {
        console.error("Undefined skill error in updateModal(). Using default");
        skill = "html";
    }
    /* Set skill image */
    const img = document.getElementById('skillsModalImg');
    img.setAttribute("src", skills[skill].image);
    /* Set skill name */
    const heading = document.getElementById('exampleModalLongTitle');
    heading.textContent = skills[skill].name;
    /* Set skill description */
    const desc = document.getElementById('skillsModalDescription');
    desc.textContent = skills[skill].description;
    /* Set sample projects */
    const proj = document.getElementById('skillsModalBody');
    /* Set sample projects header */
    const header = document.getElementById('skillsModalProjectsHeader');
    if(Object.entries(skills[skill].projects).length > 1) {
        /* If there is more than 1 sample project in the object array, set header to plural */
        header.textContent = "Sample Projects";
    } else if(Object.entries(skills[skill].projects).length == 1) {
        /* if there is only 1 sample project in the object array, set header */
        header.textContent = "Sample Project";
    } else {
        /* If there isn't any sample projects in the object array, set header to blank */
        header.textContent = '';
    }
    /* For each project */
    Object.entries(skills[skill].projects).forEach(project => {
        /* Create project container */
        let container = document.createElement('div');
        container.setAttribute('class', 'sampleProjectsList');
        const modal = document.getElementById('skillsModalBody');
        modal.appendChild(container);
        /* Set project icon */
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas ' + project[1].icon);
        container.appendChild(icon);
        /* Set project link and name */
        let link = document.createElement('a');
        link.setAttribute('href', project[1].link);
        link.setAttribute('target', '_blank');
        link.textContent = project[1].name;
        container.appendChild(link);
    });
}
/* jQuery listener that deletes the sample projects field in the skills modal when the modal closes */
$('#skillModal').on('hidden.bs.modal', function () {
    let container = document.getElementsByClassName('sampleProjectsList');
    container = Array.from(container);
    /* For each project */
    container.forEach(div => {
        /* Remove project container from DOM */
        div.remove();
    })
});

$('#skillModal').on("shown.bs.modal", function () {
    /*document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';*/
    $('html').css('overflow', 'hidden');
}).on("hidden.bs.modal", function () {
    /*const scrollY = document.body.style.top;
    document.body.style.position = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.body.style.top = '';*/
    $('html').css('overflow', 'auto');
});