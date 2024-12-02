function showAbout() {
    document.getElementById('about-dialog-container').style.contentVisibility = 'visible';
}

// hide dialog when clicking away from it
document.onmouseup = function(ev) {
    const container = document.getElementById('about-dialog-container');
    if (!container.contains(ev.target) && ev.target !== container) 
    {
        container.style.contentVisibility = 'hidden';
    }
}
