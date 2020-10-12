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
        description: 'CSS Content.',
        projects: {
            
        }
    }
}

function updateModal(skill) {
    const img = document.getElementById('skillsModalImg');
    img.setAttribute("src", skills[skill].image);
    
    const heading = document.getElementById('exampleModalLongTitle');
    heading.textContent = skills[skill].name;
    
    const desc = document.getElementById('skillsModalDescription');
    desc.textContent = skills[skill].description;
    
    const proj = document.getElementById('skillsModalBody');
    Object.entries(skills[skill].projects).forEach(project => {
        project[1].link;
        let container = document.createElement('div');
        container.setAttribute('class', 'sampleProjectsList');
        const modal = document.getElementById('skillsModalBody');
        modal.appendChild(container);
        
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas ' + project[1].icon);
        container.appendChild(icon);
        
        let link = document.createElement('a');
        link.setAttribute('href', project[1].link);
        link.setAttribute('target', '_blank');
        link.textContent = project[1].name;
        container.appendChild(link);
    });
}

$('#skillModal').on('hidden.bs.modal', function () {
    let container = document.getElementsByClassName('sampleProjectsList');
    container = Array.from(container);
    container.forEach(div => {
        div.remove();
    })
});

function closeBar() {
    const navbar = document.getElementById('collapsibleNavbar');
    if (navbar.classList.contains('show')) {
        /*navbar.classList.remove('show');*/
        $('.collapse').collapse('toggle');
    }
}

window.addEventListener("resize", addResize) 

function addResize() {
    let x = document.getElementsByClassName('nav-link');
    x = Array.from(x);
    let w = document.documentElement.clientWidth;
    if (w <= 767) {
        x.forEach(a => {
            a.setAttribute("onclick", 'closeBar()');
        });
    } else {
        x.forEach(a => {
            a.removeAttribute("onclick");
        });
    }
}

addResize();