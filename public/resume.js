const workExperienceContainers = [
    'hudl-content',
    'palantir-content',
    'meta-content',
    'fnbo-content',
    'ameritas-content',
    'csce-content',
    'flywheel-content',
    'codehero-content'
].map(id => document.getElementById(id));

const workExperienceObject = {
    hudl: {
        dropdownName: 'Hudl',
        container: document.getElementById('hudl-content'),
    },
    palantir: {
        dropdownName: 'Palantir',
        container: document.getElementById('palantir-content'),
    },
    meta: {
        dropdownName: 'Meta',
        container: document.getElementById('meta-content'),
    },
    fnbo: {
        dropdownName: 'First National Bank',
        container: document.getElementById('fnbo-content'),
    },
    ameritas: {
        dropdownName: 'Ameritas',
        container: document.getElementById('ameritas-content'),
    },
    csce: {
        dropdownName: 'UNL Computing',
        container: document.getElementById('csce-content'),
    },
    flywheel: {
        dropdownName: 'Flywheel',
        container: document.getElementById('flywheel-content'),
    },
    codehero: {
        dropdownName: 'Code Hero Academy',
        container: document.getElementById('codehero-content'),
    }
}
const workExperienceMenu = document.getElementById('work-experience-menu');
const workExperienceScrollablePane = document.getElementById('work-experience-scrollable-pane');
const aboutMenu = document.getElementById('about-menu');

const projectsObject = {
    website: document.getElementById('website-content'),
    slipstream: document.getElementById('slipstream-content'),
    rustracer: document.getElementById('rustracer-content'),
    tagFeud: document.getElementById('tag-feud-content'),
};

function _hideEducation() {
    document.getElementById('education-content').style.contentVisibility = 'hidden';
}

function _hideAllWorkExperience() {
    Object.keys(workExperienceObject).forEach(key => {
        workExperienceObject[key].container.style.contentVisibility = 'hidden';
    });
}

function showWorkExperience(id) {
    workExperienceObject[id].container.style.contentVisibility = 'visible';
    _hideEducation();
    Object.keys(workExperienceObject).forEach(key => {
        if (key !== id) {
            workExperienceObject[key].container.style.contentVisibility = 'hidden';
        }
    });

    workExperienceScrollablePane.scrollTop = 0;

    _buildMenuItems(id, 'showWorkExperience');
}

function _hideProjects() {
    Object.keys(projectsObject).forEach(key => {
        projectsObject[key].style.contentVisibility = 'hidden';
    });
}

function showProject(id) {
    _hideProjects();
    projectsObject[id].style.contentVisibility = 'visible';
}

function _buildMenuItem(id, fnString) {
    const item = document.createElement('li');
    item.role = 'menu-item';
    if (id === 'divider') {
        item.classList.add('divider');
    } else {
        item.innerHTML = `<a onclick="${fnString}('${id}')">${workExperienceObject[id].dropdownName}</a>`;
    }
    return item;
}

function _buildMenuItems(selectedId, fnString) {
    workExperienceMenu.innerHTML = '';

    workExperienceMenu.appendChild(_buildMenuItem(selectedId, fnString));

    workExperienceMenu.appendChild(_buildMenuItem('divider', fnString   ));

    Object.keys(workExperienceObject).filter(key => key !== selectedId).forEach(key => {
        workExperienceMenu.appendChild(_buildMenuItem(key, fnString));
    });
}

function showEducation() {
    document.getElementById('education-content').style.contentVisibility = 'visible';
    _hideAllWorkExperience();
}

function closeWindow(id) {
    document.getElementById(id).style.contentVisibility = 'hidden';
}

function showWindow(id) {
    const windowToShow = document.getElementById(id);
    windowToShow.style.zIndex = totalDraggableElements + 1;
    windowToShow.style.contentVisibility = 'visible';
}
