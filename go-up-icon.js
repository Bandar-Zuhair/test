/* Scroll Up To The Beginning Icon */
function koktelindo_scrollUpIcon() {
    document.getElementById('koktelindo_header').scrollIntoView({ top: 0, behavior: 'smooth' });
}

// Create the icon element
let goUpIcon = document.createElement('ion-icon');
goUpIcon.setAttribute('name', 'caret-up-circle-outline');
goUpIcon.setAttribute('id', 'koktelindo_go_up_arrow');
goUpIcon.style.opacity = "0"; // Set initial opacity to 0
goUpIcon.onclick = koktelindo_scrollUpIcon;

// Append the icon to the body
document.body.appendChild(goUpIcon);

// Select the footer element
let koktelindo_footer = document.getElementById('koktelindo_footer');

/* Hide Or Show Go Up Button */
window.onscroll = function () {
    let footerRect = koktelindo_footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight) {
        goUpIcon.style.opacity = "1";
        goUpIcon.style.pointerEvents = 'auto'; // Make the icon clickable
    } else {
        goUpIcon.style.opacity = "0";
        goUpIcon.style.pointerEvents = 'none'; // Make the icon unclickable
    }
};

