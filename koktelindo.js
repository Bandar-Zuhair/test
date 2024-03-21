/* How To Manage This Website? */








sendOrderToMyNumber = function () {
    let orderDetails = "3 ساندويتشات من كنتاكي%0A5 مشروبات كوكاكولا%0A2 ايسكريم شوكلاته";

    // Encode the message using encodeURIComponent
    let encodedMessage = encodeURIComponent(orderDetails);

    // Construct the WhatsApp URL
    let whatsappURL = `https://wa.me/6287720208728?text=${encodedMessage}`;

    // Open WhatsApp in a new window
    window.open(whatsappURL, '_blank');
}


















/* Function For Showing Full Screen Images */
function koktelindo_show_full_screen_image(src) {

    /* Create A Div To Contain The Big Image */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("koktelindo_full_screen_img_overlay");

    /* Create A Button To Exit The Big Image Page */
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    /* Create The Big Image Element Based on The 'src' Value */
    let FullScreenImg = document.createElement('img');
    FullScreenImg.src = src;
    FullScreenImg.alt = "استقدام-من-اندونيسيا";
    FullScreenImg.title = "استقدام-من-اندونيسيا";
    FullScreenImg.classList.add('koktelindo_big_img');

    /* Append All The elements inside 'FullScreenImgOverlay' */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);
    FullScreenImgOverlay.appendChild(FullScreenImg);
    document.body.appendChild(FullScreenImgOverlay);

    /* Hide And Show Different Sections */
    koktelindo_header.style.display = 'none';
    koktelindo_accounts_section.style.display = 'none';
    koktelindo_footer.style.display = 'none';

    /* Function To Exit The Big Image Page */
    fullScreenOverlayExitButton.onclick = function () {
        /* Re-display The Worker Card Details Again */
        /* Hide And Show Different Sections */
        koktelindo_header.style.display = 'block';
        koktelindo_accounts_section.style.display = 'flex';
        koktelindo_footer.style.display = 'flex';

        /* Scroll To Center The Element Vertically On The Screen */
        let elementToScrollTo = document.querySelector(`img[src="${src}"]`);
        if (elementToScrollTo) {
            const windowHeight = window.innerHeight;
            const elementHeight = elementToScrollTo.offsetHeight;
            const elementTop = elementToScrollTo.getBoundingClientRect().top;
            const scrollY = elementTop - (windowHeight - elementHeight) / 2;
            window.scrollTo({ top: scrollY });
        }

        /* Hide And Reset All Data Stored Inside The 'FullScreenImgOverlay' Element */
        FullScreenImgOverlay.innerHTML = '';
        FullScreenImgOverlay.style.display = 'none';
    }

};














/* Open Website Guidance */
function koktelindo_websiteGuidance() {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.classList.add("koktelindo_full_screen_guidance_overlay");

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');
    webGuidanceDiv.classList.add('web_guidance_div');

    let webGuidanceText = `
        <a href="https://koktelindo.com">1- في الصفحة الرئيسية انزل الى قسم اختيار نوع العمالة الاندونيسية.</a>
        <a href="https://koktelindo.com">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
        <a onclick="koktelindo_whatsApp()">3- اخيرا، تواصل معنا للاستقدام او لطلب المزيد من المعلومات والنصائح.</a>
        <a href="https://koktelindo.com/اسئلة-استقدام-من-اندونيسيا.html" id="koktelindo_web_guidance_note_text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>
    `;

    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);

    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        FullScreenGuidanceOverlay.style.display = 'none';
        FullScreenGuidanceOverlay.innerHTML = '';

        // Scroll Back The 'koktelindo_nav' Element After Exiting The Website Guidance Page
        koktelindo_nav.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }
}






/* Open Website Guidance */
function koktelindo_websiteLanguage() {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.classList.add("koktelindo_full_screen_guidance_overlay");

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');
    webGuidanceDiv.classList.add('web_guidance_div');

    let webGuidanceText = `
        <a href="https://indoforall.com">العربية - Arabic</a>
        <a href="https://indoforall.com">الإندونيسية - Indonesian</a>
    `;

    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);

    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        FullScreenGuidanceOverlay.style.display = 'none';
        FullScreenGuidanceOverlay.innerHTML = '';

        // Scroll Back The 'koktelindo_nav' Element After Exiting The Website Guidance Page
        koktelindo_nav.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }
}









/* Hide And Show nav Bar */
let koktelindo_showNavOptions = () => {
    koktelindo_nav_options.style.opacity = "1";
    koktelindo_nav_options.style.height = "100%";
    koktelindo_nav_options.style.right = "0"; // Move from right (-50%) to the original position (0%)
    document.body.classList.add("nav-open");
    document.body.style.overflow = "hidden"; // Disable scrolling
};

let koktelindo_hideNavOptions = () => {
    koktelindo_nav_options.style.opacity = "0";
    koktelindo_nav_options.style.height = "0";
    koktelindo_nav_options.style.right = "-50%"; // Move to the right (-50%)
    document.body.classList.remove("nav-open");
    document.body.style.overflow = ""; // Enable scrolling (restore default)
};

koktelindo_nav.onclick = (event) => {
    event.stopPropagation();
    koktelindo_showNavOptions();
};

koktelindo_close_nav.onclick = (event) => {
    event.stopPropagation();
    koktelindo_hideNavOptions();
};

document.addEventListener('click', (event) => {
    if (!koktelindo_nav_options.contains(event.target) && event.target !== koktelindo_close_nav) {
        koktelindo_hideNavOptions();
    }
});






/* Hide And Show Menu nav Bar */
if (document.getElementById("koktelindo_menu_nav")) {
    let koktelindo_showNavMenu = () => {
        koktelindo_menu_nav_options.style.opacity = "1";
        koktelindo_menu_nav_options.style.height = "100%";
        koktelindo_menu_nav_options.style.right = "0"; // Move from right (-50%) to the original position (0%)
        document.body.classList.add("nav-open");
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    let koktelindo_hideNavMenu = () => {
        koktelindo_menu_nav_options.style.opacity = "0";
        koktelindo_menu_nav_options.style.height = "0";
        koktelindo_menu_nav_options.style.right = "-50%"; // Move to the right (-50%)
        document.body.classList.remove("nav-open");
        document.body.style.overflow = ""; // Enable scrolling (restore default)
    };

    koktelindo_menu_nav.onclick = (event) => {
        event.stopPropagation();
        koktelindo_showNavMenu();
    };

    koktelindo_close_menu_nav.onclick = (event) => {
        event.stopPropagation();
        koktelindo_hideNavMenu();
    };

    document.addEventListener('click', (event) => {
        if (!koktelindo_menu_nav_options.contains(event.target) && event.target !== koktelindo_close_menu_nav) {
            koktelindo_hideNavMenu();
        }
    });
};








/* Open WhatsApp Chat */
function koktelindo_whatsApp() {
    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Open Gmail Contact */
function koktelindo_gmail() {
    let mailtoLink = "mailto:koktelindo.office@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function koktelindo_location() {
    // Address to search on Google Maps
    let address = "Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128";

    // Encode the address to be used in the URL
    let encodedAddress = encodeURIComponent(address);

    // Construct the Google Maps URL
    let mapsUrl = "https://www.google.com/maps?q=" + encodedAddress;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Scroll Up To The Beginning Icon */
function koktelindo_scrollUpIcon() {
    koktelindo_header.scrollIntoView({ top: 0, behavior: 'smooth' });
}

/* Hide Or Show Go Up Button */
window.onscroll = function () {
    if (window.pageYOffset >= koktelindo_nav.offsetTop) {
        koktelindo_go_up_arrow.style.opacity = "1";
    } else {
        koktelindo_go_up_arrow.style.opacity = "0";
    }
};

/* Page Load Header Fade Animation */
setTimeout(function () {
    koktelindo_header.style.opacity = "1";
}, 100);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = 'module';
ioniconsModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModuleScript);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsNomoduleScript = document.createElement('script');
ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNomoduleScript);

// Hide The Webpage Name '.html' Extension
/* if (window.location.pathname.endsWith('.html')) {
    var newPath = window.location.pathname.replace('.html', '');
    window.history.replaceState({}, document.title, newPath);
} */