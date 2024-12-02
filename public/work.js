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

function showWorkExperience(id) {
    workExperienceObject[id].container.style.contentVisibility = 'visible';
    Object.keys(workExperienceObject).forEach(key => {
        if (key !== id) {
            workExperienceObject[key].container.style.contentVisibility = 'hidden';
        }
    });

    workExperienceScrollablePane.scrollTop = 0;

    _buildMenuItems(id);
}

function _buildMenuItem(id) {
    const item = document.createElement('li');
    item.role = 'menu-item';
    if (id === 'divider') {
        item.classList.add('divider');
    } else {
        item.innerHTML = `<a onclick="showWorkExperience('${id}')">${workExperienceObject[id].dropdownName}</a>`;
    }
    return item;
}

function _buildMenuItems(selectedId) {
    workExperienceMenu.innerHTML = '';

    workExperienceMenu.appendChild(_buildMenuItem(selectedId));

    workExperienceMenu.appendChild(_buildMenuItem('divider'));

    Object.keys(workExperienceObject).filter(key => key !== selectedId).forEach(key => {
        workExperienceMenu.appendChild(_buildMenuItem(key));
    });
}
