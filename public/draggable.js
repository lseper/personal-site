// Track draggable elements and their states
let totalDraggableElements = 0;
const draggableStates = new Map();

class DraggableState {
    constructor() {
        this.isDragging = false;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = 0;
        this.yOffset = 0;
    }
}

function dragStart(e) {
    // Only allow dragging from the title bar
    if (!e.target.closest('.title-bar') && !e.target.closest('.draggable-icon')) {
        return;
    }
    
    const draggedElement = e.target.closest('.draggable-icon')?.closest('.draggable') || e.target.closest('.draggable');
    if (!draggedElement) return;

    document.querySelectorAll('.draggable').forEach(element => {
        element.style.zIndex -= 1;
    });
    draggedElement.style.zIndex = totalDraggableElements + 1;


    // Get or create state for this element
    let state = draggableStates.get(draggedElement);
    if (!state) {
        state = new DraggableState();
        draggableStates.set(draggedElement, state);
    }

    if (e.type === "touchstart") {
        state.initialX = e.touches[0].clientX - state.xOffset;
        state.initialY = e.touches[0].clientY - state.yOffset;
    } else {
        state.initialX = e.clientX - state.xOffset;
        state.initialY = e.clientY - state.yOffset;
    }

    state.isDragging = true;
}

function dragEnd(e) {
    const draggedElement = e.target.closest('.draggable');
    if (!draggedElement) return;

    const state = draggableStates.get(draggedElement);
    if (!state) return;

    state.initialX = state.currentX;
    state.initialY = state.currentY;
    state.isDragging = false;
}

function drag(e) {
    const draggedElement = e.target.closest('.draggable');
    if (!draggedElement) return;

    const state = draggableStates.get(draggedElement);
    if (!state || !state.isDragging) return;

    e.preventDefault();

    if (e.type === "touchmove") {
        state.currentX = e.touches[0].clientX - state.initialX;
        state.currentY = e.touches[0].clientY - state.initialY;
    } else {
        state.currentX = e.clientX - state.initialX;
        state.currentY = e.clientY - state.initialY;
    }

    state.xOffset = state.currentX;
    state.yOffset = state.currentY;

    setTranslate(state.currentX, state.currentY, draggedElement);
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Add event listeners
document.addEventListener("touchstart", dragStart, false);
document.addEventListener("touchend", dragEnd, false);
document.addEventListener("touchmove", drag, false);
document.addEventListener("mousedown", dragStart, false);
document.addEventListener("mouseup", dragEnd, false);
document.addEventListener("mousemove", drag, false);

// Prevent native dragging on the icon
document.querySelectorAll('.draggable-icon').forEach(draggableIcon => {
    draggableIcon.ondragstart = () => false;
});

// Count total draggable elements on page load
window.addEventListener('load', () => {
    totalDraggableElements = document.querySelectorAll('.draggable').length;
});
