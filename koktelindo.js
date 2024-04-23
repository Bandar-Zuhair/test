/* How To Manage This Website? */




/* Function For Showing Full Screen Images */
function koktelindo_show_full_screen_image(src) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("koktelindo_full_screen_img_overlay");

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay

    // Check if the source is an image or a video
    const isImage = /\.(gif|jpg|jpeg|tiff|png)$/i.test(src);
    const isVideo = /\.(mp4|ogg|webm)$/i.test(src);

    if (isImage) {
        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.alt = "كوكتيل-اندو";
        FullScreenImg.title = "كوكتيل-اندو";
        FullScreenImg.classList.add('koktelindo_big_img');

        /* Append Image Element to FullScreenImgOverlay */
        FullScreenImgOverlay.appendChild(FullScreenImg);
    } else if (isVideo) {
        /* Create The Big Video Element Based on The 'src' Value */
        let FullScreenVideo = document.createElement('video');
        FullScreenVideo.src = src;
        FullScreenVideo.autoplay = true;
        FullScreenVideo.controls = true;
        FullScreenVideo.classList.add('koktelindo_big_video');

        /* Append Video Element to FullScreenImgOverlay */
        FullScreenImgOverlay.appendChild(FullScreenVideo);
    } else {
        console.error('Unsupported file format');
        return;
    }

    /* Append Exit Button to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);

    /* Append FullScreenImgOverlay to the body */
    document.body.appendChild(FullScreenImgOverlay);

    /* Function To Exit The Big Image or Video Page */
    fullScreenOverlayExitButton.onclick = function () {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        /* Hide The Full Screen Img Overlay */
        FullScreenImgOverlay.style.display = 'none';

        /* Reset All Data Stored Inside The Full Screen Overlay Element */
        FullScreenImgOverlay.innerHTML = '';
    }
}

/* Open Website Guidance */
function koktelindo_websiteGuidance(buttonClicked) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.id = "koktelindo_full_screen_guidance_overlay";

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');

    let webGuidanceText;

    /* Website Guidance */
    if (buttonClicked === 'how to use koktelindo website') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a href="https://koktelindo.com">1- في الصفحة الرئيسية انزل الى قسم اختيار الخدمة.</a>
            <a>2- بعد اختيار الخدمة، خذ نظرة على تعليمات الخدمة.</a>
        `;

        /* Restaurant Page Guidance */
    } else if (buttonClicked === 'how to use restaurant type page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع المطعم.</a>
            <a>2- اتبع تعليمات الطلب في صفحة قائمة المطعم.</a>
        `;

        /* Restaurant Menu Page Guidance */
    } else if (buttonClicked === 'how to use restaurant Menu page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع الوجبة.</a>
            <a>2- بعد الإنهاء من اختيار الوجبات اذهب لصفحة طلباتك.</a>
            <a>3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
        `;

        /* Pharmacy Page Guidance */
    } else if (buttonClicked === 'how to use products page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار المنتج وقم بإضافته.</a>
            <a>2- بعد الإنهاء من اختيار المنتجات اذهب لصفحة طلباتك.</a>
            <a>3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
        `;

        /* Services Guidance */
    } else if (buttonClicked === 'how to use services page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع الخدمة المناسبة.</a>
            <a>2- قم بتأكيد الطلب عن طريق ارسال الطلب عبر الواتساب.</a>
        `;

        /* Villa Booking Page Guidance */
    } else if (buttonClicked === 'how to use villa booking page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار الفيلا المناسبة.</a>
            <a>2- اضغط على احجز الآن وادخل تاريخ حجز الفيلا.</a>
            <a>3- قم بتأكيد الطلب عن طريق ارسال الطلب عبر الواتساب.</a>
        `;

        /* Filter Restaurant Type */
    } else if (buttonClicked === 'show restaurant type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktelindo_scrollToRestaurantTypeId('kokteindo_main_meal_type')">وجبات سريعة</a>
            <a onclick="koktelindo_scrollToRestaurantTypeId('kokteindo_meal_type_arabi_food')">اكلات عربية</a>
            <a onclick="koktelindo_scrollToRestaurantTypeId('kokteindo_meal_type_sea_food')">اكلات بحرية</a>
        `;

        /* Filter Meal Type */
    } else if (buttonClicked === 'show store mune page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktelindo_scrollToMealType('kokteindo_meal_type_fast_food')">وجبات رئيسية</a>
            <a onclick="koktelindo_scrollToMealType('kokteindo_family_meal_type')">وجبات عائلية</a>
            <a onclick="koktelindo_scrollToMealType('kokteindo_chicken_meal_type')">صحون دجاج</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show product type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktelindo_scrollToProductType('kokteindo_oil_product_section')">زيت</a>
            <a onclick="koktelindo_scrollToProductType('kokteindo_indomie_product_section')">اندومي</a>
        `;

        /* Filter Medicine Product Type */
    } else if (buttonClicked === 'show medicine type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktelindo_scrollToProductType('kokteindo_oil_product_section')">صداع الرأس</a>
            <a onclick="koktelindo_scrollToProductType('kokteindo_indomie_product_section')">ألم البطن</a>
        `;

        /* Filter Shisha Product Type */
    } else if (buttonClicked === 'show shisha type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktelindo_scrollToProductType('kokteindo_alphakhir_product_section')">نكهات الفاخر</a>
            <a onclick="koktelindo_scrollToProductType('kokteindo_mazaya_product_section')">نكهات مزايا</a>
            <a onclick="koktelindo_scrollToProductType('kokteindo_shisha_product_section')">ارجيلات</a>
            <a onclick="koktelindo_scrollToProductType('kokteindo_asset_product_section')">مستلزمات</a>
        `;
    }


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
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';
    }
}

/* Open Website Languages */
function koktelindo_websiteLanguage() {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.id = "koktelindo_full_screen_guidance_overlay";

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
    }
}








/* Down Resturant Code Down */
/* Function To Show And Hide The Upper Bar of The Filter Restaurant Button */
if (document.getElementById("koktelindo_restaurant_section")) {
    window.addEventListener('scroll', function () {
        let restaurantTypeNav = document.getElementById('koktelindo_filter_restaurant_type_div_id');
        let restaurantUpperBar = document.getElementById('koktelindo_restaurant_type_nav_upper_bar');

        let menuNavOptionsRect = restaurantTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            restaurantUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            restaurantUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });


    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktelindo_scrollToRestaurantType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    /* Scroll To Clicked Restaurant type */
    koktelindo_scrollToRestaurantTypeId = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }
}

/* Function To Show And Hide The Upper Bar of The Filter Menu Button */
if (document.getElementById("koktelindo_restaurant_menu_section")) {

    /* Show or Hide The 'upperBar' Element Based on The 'koktelindo_filter_product_type_div_id' element postion */
    window.addEventListener('scroll', function () {
        let menuNav = document.getElementById('koktelindo_filter_meal_type_div_id');
        let upperBar = document.getElementById('koktelindo_meal_type_nav_upper_bar');

        let menuNavOptionsRect = menuNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            upperBar.style.top = '0'; // Slide down upperBar
        } else {
            upperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Menu Type Button */
    koktelindo_scrollToFilterFoodType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    koktelindo_scrollToMealType = function (mealTypeName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let mealTypeNameArea = document.getElementById(mealTypeName);

        mealTypeNameArea.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }
}

/* Function To Show Meal Info Elements And Culculate The Price Numbers */
if (document.getElementById("koktelindo_meal_info_section")) {

    // Get reference to the element with id "koktelindo_meal_info_section"
    let koktelindo_meal_info_options_area_id = document.getElementById("koktelindo_meal_info_section");

    // Arrays to store added numbers and current meal prices
    let addedNumbers = [];
    let currentMealPrices = [];

    /* Create the content for adding notes to the meal */
    let koktelindo_mealInfoOptionsDiv = document.createElement('div');
    koktelindo_mealInfoOptionsDiv.classList.add('koktelindo_meal_info_options_div');
    let koktelindo_mealInfoOptionsTitle = document.createElement('div');
    koktelindo_mealInfoOptionsTitle.classList.add('koktelindo_meal_info_options_title');
    let koktelindo_mealInfoOptionsTitleH2 = document.createElement('h2');
    koktelindo_mealInfoOptionsTitleH2.innerHTML = `<h2>اضافة ملاحظة للتعديل على الطلب <samp style="color: rgb(0, 255, 0);">اختياري</samp></h2>`;
    koktelindo_mealInfoOptionsTitle.appendChild(koktelindo_mealInfoOptionsTitleH2);
    koktelindo_mealInfoOptionsDiv.appendChild(koktelindo_mealInfoOptionsTitle);
    koktelindo_meal_info_options_area_id.appendChild(koktelindo_mealInfoOptionsDiv);

    // Create textarea for user to add notes to the meal
    let koktelindo_mealInfoNote = document.createElement('div');
    koktelindo_mealInfoNote.classList.add('koktelindo_meal_info_note');
    let koktelindo_mealInfoNoteTextarea = `<textarea placeholder="ملاحظاتك هنا" class="koktelindo_meal_info_note_textarea" maxlength="100"></textarea>`;
    koktelindo_mealInfoNote.innerHTML = koktelindo_mealInfoNoteTextarea;
    koktelindo_mealInfoOptionsDiv.appendChild(koktelindo_mealInfoNote);

    // Create title for selecting the number of items
    let koktelindo_mealInfoOptionsAmountTitle = document.createElement('div');
    koktelindo_mealInfoOptionsAmountTitle.classList.add('koktelindo_meal_info_options_amount_title');
    let koktelindo_mealInfoOptionsAmountTitleH2 = document.createElement('h2');
    koktelindo_mealInfoOptionsAmountTitleH2.innerHTML = `<h2>العدد <samp style="color: red;">مطلوب</samp></h2>`;
    koktelindo_mealInfoOptionsAmountTitle.appendChild(koktelindo_mealInfoOptionsAmountTitleH2);
    koktelindo_meal_info_options_area_id.appendChild(koktelindo_mealInfoOptionsAmountTitle);

    // Create buttons to increase/decrease the number of items
    let koktelindo_meal_Info_Options_Div = document.createElement('div');
    koktelindo_meal_Info_Options_Div.classList.add('koktelindo_meal_info_options_div');
    let koktelindo_mealInfoOptionsAmount = document.createElement('div');
    koktelindo_mealInfoOptionsAmount.classList.add('koktelindo_meal_info_options_amount');
    let koktelindo_amountNumberContent = `
        <ion-icon name="add-outline" id="koktelindo_plus_icon" style="color: rgb(0, 255, 0);" onclick="koktelindo_updateMealAmountNumber(this)"></ion-icon>
        <h2 id='koktelindo_amountNumberElement'>1</h2>
        <ion-icon name="remove-outline" id="koktelindo_minus_icon" style="color: red; opacity: 0; transition: opacity 0.2s ease-in-out" onclick="koktelindo_updateMealAmountNumber(this)"></ion-icon>`;
    koktelindo_mealInfoOptionsAmount.innerHTML = koktelindo_amountNumberContent;
    koktelindo_meal_Info_Options_Div.appendChild(koktelindo_mealInfoOptionsAmount);
    koktelindo_meal_info_options_area_id.appendChild(koktelindo_meal_Info_Options_Div);


    // Get original meal price
    let originalMealPriceElement = document.getElementById("koktelindo_orignal_price");
    let originalMealPrice = parseFloat(originalMealPriceElement.innerText.replace(/[^0-9\.]+/g, ""));
    let currentMealPrice = originalMealPrice;

    // Create element to display total price
    let koktelindo_totalPriceDiv = document.createElement('div');
    koktelindo_totalPriceDiv.id = 'koktelindo_product_bottom_counter_div';
    koktelindo_totalPriceDiv.innerHTML = `<h6 onclick="koktelindo_createOrderText()">إضافة الطلب = ${currentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;
    koktelindo_meal_info_options_area_id.appendChild(koktelindo_totalPriceDiv);


    // Function to update the number of items
    function koktelindo_updateMealAmountNumber(clickedIcon) {
        let change = clickedIcon.getAttribute('name') === "add-outline" ? 1 : -1;
        let mealAmountNumberElement = document.getElementById('koktelindo_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);
        mealAmountNumber += change;
        mealAmountNumber = Math.max(mealAmountNumber, 1); // Ensure the quantity never goes below 1
        mealAmountNumberElement.innerText = mealAmountNumber;

        // Recalculate current meal prices for all added numbers
        currentMealPrices = addedNumbers.map(number => number * mealAmountNumber);

        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        koktelindo_totalPriceDiv.innerHTML = `<h6 onclick="koktelindo_createOrderText()">إضافة الطلب = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;

        /* Get The Minus Icon So You Can Change its Opacity Value */
        let minusIcon = document.getElementById('koktelindo_minus_icon');
        if (minusIcon) {
            if (mealAmountNumber > 1) {
                minusIcon.style.opacity = '1';
            } else {
                minusIcon.style.opacity = '0';
            }
        }
    };

    // Function to add or remove numbers
    function koktelindo_addMoreNumberToPrice(clickedBox, addedNumber) {
        let mealAmountNumberElement = document.getElementById('koktelindo_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);

        if (clickedBox.checked) {
            // Store added number and corresponding current meal price in arrays
            addedNumbers.push(addedNumber);
            currentMealPrices.push(addedNumber * mealAmountNumber);
        } else {
            // Remove added number and corresponding current meal price from arrays
            let index = addedNumbers.indexOf(addedNumber);
            if (index !== -1) {
                addedNumbers.splice(index, 1);
                currentMealPrices.splice(index, 1);
            }
        }

        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        // Update the displayed total price
        koktelindo_totalPriceDiv.innerHTML = `<h6 onclick="koktelindo_createOrderText()">إضافة الطلب = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;
    };


    /* Get The Summry Text of The Order And Save it For Later Use */
    koktelindo_createOrderText = function () {
        // Function to dynamically find elements with IDs matching the pattern 'required_div_' + index
        function findRequiredDivs() {
            let index = 1;
            let requiredDivs = [];

            // Keep searching for elements with IDs matching the pattern until no more are found
            while (true) {
                let requiredDiv = document.getElementById('required_div_' + index);

                // If no element is found with the current ID, stop searching
                if (!requiredDiv) {
                    break;
                }

                // Add the found required_div to the array
                requiredDivs.push(requiredDiv);
                index++;
            }

            return requiredDivs;
        }

        // Function to check if at least one checkbox is checked in each required div
        function areAllRequiredCheckboxesChecked(requiredDivs) {
            let allRequiredCheckboxesChecked = true;

            // Check if at least one checkbox is checked in each required div
            for (let requiredDiv of requiredDivs) {
                let checkboxes = requiredDiv.querySelectorAll('input[type="checkbox"]');
                let atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                if (!atLeastOneChecked) {
                    // Scroll to the middle of the viewport for the element with unchecked checkbox
                    scrollToMiddle(requiredDiv);
                    allRequiredCheckboxesChecked = false; // Set the flag to false

                    // Show error message and fade out after 2 seconds
                    // Create a box with the text "تمت اضافة الطلب"
                    let successBox = document.createElement('div');
                    successBox.textContent = 'تأكد من ملئ جميع الخيارات';
                    successBox.style.color = 'red';
                    successBox.classList.add('koktelindo_success_box');
                    document.body.appendChild(successBox);

                    // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                    setTimeout(() => {
                        successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                        successBox.style.opacity = '1'; // Fade-in animation
                    }, 10);

                    // Remove the success box after 3 seconds
                    setTimeout(() => {
                        // Trigger the fade-out animation by setting opacity to 0
                        successBox.style.opacity = '0';

                        // Remove the element from
                        // Remove the element from the DOM after the fade-out animation completes
                        setTimeout(() => {
                            successBox.remove();
                        }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    }, 800); // Wait for 3 seconds before triggering fade-out
                    break; // Exit the loop
                }
            }

            return allRequiredCheckboxesChecked;
        }

        // Function to scroll to the middle of the viewport for a given element
        function scrollToMiddle(element) {
            let elementRect = element.getBoundingClientRect();
            let absoluteElementTop = elementRect.top + window.pageYOffset;
            let middle = absoluteElementTop - (window.innerHeight / 2 - elementRect.height / 2);
            window.scrollTo({
                top: middle,
                behavior: 'smooth'
            });
        }

        // Get the required divs dynamically
        let requiredDivs = findRequiredDivs();

        // Check if at least one checkbox is checked in each required div
        let allRequiredCheckboxesChecked = areAllRequiredCheckboxesChecked(requiredDivs);

        // If at least one checkbox is checked in each required div, proceed with the rest of the function
        if (!allRequiredCheckboxesChecked) {
            // If any required div doesn't have any checkbox checked, Stop The Process
            return; // Exit the function
        }

        if (document.getElementById('koktelindo_restaurant_order_icon_div')) {
            document.getElementById('koktelindo_restaurant_order_icon_div').style.opacity = '1';

        } else {
            // Create Button To Show Orders Page
            let koktelindo_mealOrderIconDiv = document.createElement('div');
            koktelindo_mealOrderIconDiv.id = 'koktelindo_order_page_icon_div';
            let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك-من-المطاعم.html' id="koktelindo_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
            koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
            koktelindo_mealOrderIconDiv.style.opacity = '0';
            document.body.appendChild(koktelindo_mealOrderIconDiv);
            setTimeout(() => {
                koktelindo_mealOrderIconDiv.style.opacity = '1';
            }, 1);

        }

        // Get the inner text of the meal name and details
        let mealName = document.getElementById('koktelindo_meal_name').innerText;
        let mealDetails = document.getElementById('koktelindo_meal_details').innerText;

        // Get all checked checkboxes
        let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        // Get the innerText of each checked checkbox
        let checkedTexts = Array.from(checkedCheckboxes).map(checkbox => checkbox.parentElement.innerText);

        // Concatenate all checked texts with line breaks
        let orderText = checkedTexts.join('\n');

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktelindo_meal_info_note_textarea');
        let noteText = noteTextarea.value.trim();

        // Get the total current meal price
        let totalCurrentMealPriceText = document.getElementById('koktelindo_product_bottom_counter_div').querySelector('h6').textContent;
        let totalCurrentMealPrice = parseFloat(totalCurrentMealPriceText.replace(/[^\d.]/g, '')).toLocaleString() + ' Rp'; // Format with commas

        // Get the meal amount number
        let mealAmountNumber = parseInt(document.getElementById('koktelindo_amountNumberElement').innerText).toLocaleString(); // Format with commas

        // Get the web logo source from the element with id "koktelindo_web_logo_no_moving"
        let mealImgSrc = document.getElementById('koktelindo_web_logo_no_moving').src;

        // Create an object to represent the order
        let order = {
            mealName: mealName,
            mealDetails: mealDetails,
            orderText: orderText,
            mealAmountNumber: mealAmountNumber,
            noteText: noteText,
            totalCurrentMealPrice: totalCurrentMealPrice,
            mealImgSrc: mealImgSrc // Save the exact image source
        };


        // Get existing restaurant orders from localStorage or initialize as an empty array if not present
        let existingOrders = JSON.parse(localStorage.getItem('restaurant_orders')) || [];

        // Append the new restaurant order object to the existing orders array
        existingOrders.push(order);

        // Save the updated orders back to localStorage
        localStorage.setItem('restaurant_orders', JSON.stringify(existingOrders));


        // Create a box with the text "تمت اضافة الطلب"
        let successBox = document.createElement('div');
        successBox.textContent = 'تمت اضافة الطلب';
        successBox.classList.add('koktelindo_success_box');
        document.body.appendChild(successBox);

        // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
        setTimeout(() => {
            successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
            successBox.style.opacity = '1'; // Fade-in animation
        }, 10);

        // Remove the success box after 3 seconds
        setTimeout(() => {
            // Trigger the fade-out animation by setting opacity to 0
            successBox.style.opacity = '0';

            // Remove the element from
            // Remove the element from the DOM after the fade-out animation completes
            setTimeout(() => {
                successBox.remove();
            }, 9000); // Wait for the fade-out transition to complete (1.5s)

        }, 800); // Wait for 3 seconds before triggering fade-out
    }

    /* Make The Old Box Unchecked And Only The New Box Checked */
    koktelindo_uncheckOldBox = function (clickedBoxId) {
        // Get the parent div of the clicked checkbox
        let parentDiv = document.getElementById(clickedBoxId).closest('.koktelindo_meal_info_options_div');

        // Get all checkboxes within the parent div
        let checkboxes = parentDiv.querySelectorAll('input[type="checkbox"]');

        // Uncheck all checkboxes except for the clicked checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.id !== clickedBoxId) {
                checkbox.checked = false;
            }
        });
    };
}

/* Function To Create Restaurant Order Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktelindo_restaurant_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك من المطاعم جاهزة للإرسال</h1>


            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktelindo_delete_all_restaurant_orders_button' onclick='koktelindo_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>


            <div id="koktelindo_order_check_out_div" style="display: none;"></div>


            <a href="https://bandar-zuhair.github.io/test/مطاعم-اندونيسيا.html"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم المطاعم</a>
        </div>`;

    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktelindo_restaurant_order_details_body_id' Element */
    document.getElementById('koktelindo_restaurant_order_details_body_id').innerHTML = all_order_page_content;





    // Parse restaurant_orders from localStorage
    if (localStorage.getItem('restaurant_orders')) {

        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));


        orders.forEach((orderData, index) => {
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

            // Remove the comma from totalCurrentMealPrice before adding 20000
            let totalPriceWithoutComma = parseFloat(orderData.totalCurrentMealPrice.replace(',', ''));
            let totalPriceWithDeliveryForOrder = totalPriceWithoutComma + 20000;
            let totalPriceWithDeliveryFormatted = totalPriceWithDeliveryForOrder.toLocaleString();

            let localStorageOrderCardContent = `
            <h2 onclick="koktelindo_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
            <img src=${orderData.mealImgSrc} alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_order_details_page(${index})" title="كوكتيل-اندو-للتوصيل-من-المطاعم">
            <div>
                <h3 onclick="koktelindo_show_order_details_page(${index})">السعر مع التوصيل = ${totalPriceWithDeliveryFormatted} Rp</h3>
            </div>
            <div class='koktelindo_orderFinished_info_and_delete'>
                <h3 onclick="koktelindo_show_order_details_page(${index})">تفاصيل الطلب</h3>
                <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
            </div>`;

            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;
            koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
        });


        /* Create The Bill Card Content */
        let totalPrices = orders.map(order => parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000);
        let totalPriceSum = totalPrices.reduce((acc, price) => acc + price, 0);
        let totalPriceSumFormatted = totalPriceSum.toLocaleString();

        let koktelindo_order_check_out_whatsApp_content = `
            <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات عبر الواتس</h5>
            </div>
            <div id="koktelindo_order_check_out_bill_div">
                <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                ${orders.map(order => `<h6>السعر: ${(parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h6>`).join('')}
                <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل : ${totalPriceSumFormatted} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        document.getElementById('koktelindo_delete_all_restaurant_orders_button').style.display = 'block';

    } else {

        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktelindo_order_check_out_div').innerHTML = '';

    }






    /* Function To Show The Ensure Delete Box */
    koktelindo_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktelindo_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktelindo_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('restaurant_orders');

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات المطاعم';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }






    /* Function To Delete Only One Order Data */
    koktelindo_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';
        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Check if orders exist and if the index is valid
            if (orders && indexNumber >= 0 && indexNumber < orders.length) {
                // Remove the order with the specified index
                orders.splice(indexNumber, 1);

                // Save the updated orders back to localStorage
                localStorage.setItem('restaurant_orders', JSON.stringify(orders));

                // Refresh the page or update the display to reflect the changes
                renderOrders();

                // Create a box with the text "تم حذف الطلب"
                let successBox = document.createElement('div');
                successBox.textContent = 'تم حذف الطلب';
                successBox.classList.add('koktelindo_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)
                }, 800); // Wait for 3 seconds before triggering fade-out
            }
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }




    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktelindo_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));



        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('restaurant_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';

        }


        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('restaurant_orders')) {

            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 onclick="koktelindo_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
                        <img src=${orderData.mealImgSrc} alt='كوكتيل-اندو-للتوصيل-من-المطاعم' onclick="koktelindo_show_order_details_page(${index})" title="كوكتيل-اندو-للتوصيل-من-المطاعم">
                    <div>
                        <h3 onclick="koktelindo_show_order_details_page(${index})">السعر مع التوصيل = ${(parseFloat(orderData.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktelindo_orderFinished_info_and_delete'>
                        <h3 onclick="koktelindo_show_order_details_page(${index})">تفاصيل الطلب</h3>
                        <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    
                    <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                    `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);

                // Increment the index for the next iteration
                index++;

            })

            /* Create The Bill Card Content */
            let totalPrices = orders.map(order => parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000);
            let totalPriceSum = totalPrices.reduce((acc, price) => acc + price, 0);
            let totalPriceSumFormatted = totalPriceSum.toLocaleString();

            let koktelindo_order_check_out_whatsApp_content = `
                <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات عبر الواتس</h5>
                </div>
                <div id="koktelindo_order_check_out_bill_div">
                    <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                    ${orders.map((order, index) => `<h6>الطلب رقم ${index + 1} : ${(parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h6>`).join('')}
                    <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل : ${totalPriceSumFormatted} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;

            document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        }

    }


    // Call renderOrders function to initially render orders
    renderOrders();




    // Function to show order details
    function koktelindo_show_order_details_page(orderIndexNumber) {

        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));
        if (!orders) return; // Exit if there are no orders

        let order = orders[orderIndexNumber];
        if (!order) return; // Exit if the order is not found

        // Create a new div element to hold the order details content
        let orderDetailsContainer = document.createElement('div');
        orderDetailsContainer.id = 'koktelindo_order_details_text_div';

        // Create order details HTML content
        let orderDetailsContent = `
            <div id="koktelindo_order_details_text_img">
                <img src=${order.mealImgSrc} alt="كوكتيل-اندو-للتوصيل-من-المطاعم" id="koktelindo_weblogo" title="كوكتيل-اندو-للتوصيل-من-المطاعم"  onclick="koktelindo_show_full_screen_image(this.src)">
            </div>
            <div>
                <h1 class="koktelindo_order_details_title">تفاصيل الطلب رقم ${orderIndexNumber + 1}</h1>
            </div>
            <div id="koktelindo_order_details_text_background" style="background: linear-gradient(to right, rgb(0, 123, 255), rgb(0, 79, 163));">
                <h4>الاسم: ${order.mealName}</h4>
                <h4>الوصف: ${order.mealDetails}</h4>
                <h4>الطلب:</h4>
                ${order.orderText.split('\n').map(line => `<h4>${line}</h4>`).join('')}
                <h4>${order.noteText}</h4>
                <h4>عدد الطلب: ${order.mealAmountNumber}</h4>
                <h4>سعر التوصيل = 20,000 Rp</h4>
                <h4>سعر الطلب = ${order.totalCurrentMealPrice} (بدون سعر التوصيل)</h4>
            </div>
            <div id="koktelindo_koktelindo_order_details_text_bottom_button_div" style="background: linear-gradient(to right, rgb(132, 0, 255), rgb(60, 0, 117));">
                <h5 onclick="koktelindo_hide_order_details_page()">عودة</h5>
                <h5 onclick="koktelindo_ensure_delete_text_orders_box()">حذف الطلب</h5>
            </div>

            <div id='koktelindo_ensure_delete_text_orders_overlay' style='display:none'>
                <div id='koktelindo_ensure_delete_all_orders_div'>
                    <h6>متاكد من حذف هذا الطلب؟</h6>
                    <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                        <h6 onclick='koktelindo_delete_text_orders_function(this)'>عودة</h6>
                        <h6 onclick='koktelindo_delete_text_orders_function(this, ${orderIndexNumber})'>نعم</h6>
                    </div>
                </div>
            </div>
        `;

        // Hide the order list container
        document.getElementById('koktelindo_order_details_div_id').style.display = 'none';


        // Append The Following Elements To Each Other
        orderDetailsContainer.innerHTML = orderDetailsContent;
        document.getElementById('koktelindo_restaurant_order_details_body_id').appendChild(orderDetailsContainer);
    }

    // Function to hide order details
    function koktelindo_hide_order_details_page() {

        // Remove the order details content from the container
        let orderDetailsContainer = document.getElementById('koktelindo_order_details_text_div');
        if (orderDetailsContainer) {
            orderDetailsContainer.remove();
        }

        // Show the order list container
        document.getElementById('koktelindo_order_details_div_id').style.display = 'flex';
    }

    /* Function To Show Ensure Delete Box From The Order Text Page */
    koktelindo_ensure_delete_text_orders_box = function () {
        document.getElementById('koktelindo_ensure_delete_text_orders_overlay').style.display = 'block';

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';

    }

    /* if The Clicked Button From The Order Text Page */
    koktelindo_delete_text_orders_function = function (clickedButtonAnswer, indexNumber) {
        if (clickedButtonAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_text_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_text_orders_overlay').style.display = 'none';

            /* Store The Orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Remove the order with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated orders back to localStorage
            localStorage.setItem('restaurant_orders', JSON.stringify(orders));

            // Check if orders is empty or null
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('restaurant_orders');
            }

            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Remove the order details content from the container
            let orderDetailsContainer = document.getElementById('koktelindo_order_details_text_div');
            if (orderDetailsContainer) {
                orderDetailsContainer.remove();
            }

            // Show the order list container
            document.getElementById('koktelindo_order_details_div_id').style.display = 'flex';

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    koktelindo_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

        // Initialize an array to store order details
        let orderDetails = [];

        // Initialize a variable to store the grand total
        let grandTotal = 0;

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            let totalWithDelivery = parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000;
            grandTotal += totalWithDelivery;

            // Split order.orderText by newline character and prepend each line with its index number
            let orderedText = order.orderText.split('\n').map((line, i) => `${i + 1}- ${line}`).join('\n');

            let orderInfo = `الطلب رقم ${index + 1}- ${order.mealName}\n`;
            orderInfo += `- الوصف: ${order.mealDetails}\n\n`;
            orderInfo += `- تفاصيل الطلب:\n${orderedText}\n`;
            orderInfo += `- عدد الطلب: ${order.mealAmountNumber}\n`;
            orderInfo += `- الملاحظات: ${order.noteText}\n`;
            orderInfo += `- سعر التوصيل: 20,000 Rp\n`;
            orderInfo += `- السعر مع التوصيل: ${totalWithDelivery.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من المطاعم:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join('');


        // Append the grand total to the final message
        finalMessage += `- السعر الإجمالي للطلبات مع التوصيل: ${grandTotal.toLocaleString()} Rp\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n\n`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Create the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }
}
/* Up Resturant Code Up */













/* Down Supermarket Code Down */
/* Function To Add Orders And Create supermarket_orders Key in the localStorage */
if (document.getElementById("koktelindo_supermarket_section")) {

    /* Show or Hide The 'upperBar' Element Based on The 'koktelindo_filter_product_type_div_id' element postion */
    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktelindo_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktelindo_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktelindo_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktelindo_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktelindo_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktelindo_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktelindo_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktelindo_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktelindo_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktelindo_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'supermarket_orders' key exists in localStorage
                if (localStorage.getItem('supermarket_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('supermarket_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('supermarket_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'supermarket_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('supermarket_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktelindo_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktelindo_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktelindo_mealOrderIconDiv = document.createElement('div');
                    koktelindo_mealOrderIconDiv.id = 'koktelindo_order_page_icon_div';
                    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك-من-السوبرماركت.html' id="koktelindo_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
                    koktelindo_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktelindo_mealOrderIconDiv);
                    setTimeout(() => {
                        koktelindo_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktelindo_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktelindo_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Supermarket Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktelindo_supermarket_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك من السوبرماركت جاهزة للإرسال</h1>


            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktelindo_delete_all_restaurant_orders_button' onclick='koktelindo_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktelindo_orders_static_price_h4" id="koktelindo_orders_static_price_h4_id" style="display: none;">سعر التوصيل = 20,000 Rp</h4>
            </div>

            <div class="koktelindo_meal_info_note" id="koktelindo_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktelindo_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktelindo_koktelindo_order_details_bottom_button_div" id='koktelindo_total_order_price_text'></div>

            <div id="koktelindo_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/test/سوبرماركت-اندونيسيا.html" class="koktelindo_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم السوبرماركت</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktelindo_restaurant_order_details_body_id' Element */
    document.getElementById('koktelindo_supermarket_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The supermarket_orders Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('supermarket_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {

            // Increment index by 1
            index += 1;

            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src='${orderData.productImgSrc}' alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_full_screen_image(this.src)" title="كوكتيل-اندو-للتوصيل-من-السوبرماركت">
                    <div>
                        <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktelindo_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktelindo_order_check_out_whatsApp_content = `
            <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات عبر الواتس</h5>
            </div>
            <div id="koktelindo_order_check_out_bill_div">
                <h6 id="koktelindo_order_check_out_bill_title">الفاتورة</h6>
                ${orders.map((order, orderIndex) => `<h6>سعر الطلب رقم ${orderIndex + 1}: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktelindo_order_check_out_bill_total_price">إجمالي السعر مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;


        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktelindo_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktelindo_meal_info_note_id').style.display = 'block';
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktelindo_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktelindo_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktelindo_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktelindo_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('supermarket_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktelindo_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktelindo_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('supermarket_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('supermarket_orders');


            }


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                    <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';
        }
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktelindo_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('supermarket_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('supermarket_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src='${orderData.productImgSrc}' alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_full_screen_image(this.src)" title="كوكتيل-اندو-للتوصيل-من-السوبرماركت">
                <div>
                    <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                </div>
                <div class='koktelindo_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktelindo_order_check_out_whatsApp_content = `
                <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات عبر الواتس</h5>
                </div>
                <div id="koktelindo_order_check_out_bill_div">
                    <h6 id="koktelindo_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6>سعر الطلب رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktelindo_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">إجمالي السعر مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;

            document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any supermarket_orders Data */
            document.getElementById('koktelindo_meal_info_note_id').style.display = 'none';
            document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktelindo_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktelindo_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `الطلب رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- السعر الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من السوبرماركت:\n\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n\n\n`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Create the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }

}
/* Up Supermarket Code Up */















/* Down Villa Booking Down */
if (document.getElementById("koktelindo_choose_villa_area_section")) {
    /* Alwasy Hide The Following Section in Every User New Visit */
    document.getElementById('koktelindo_villa_cards_section').style.display = 'none';
    document.getElementById('koktelindo_villa_details').style.display = 'none';


    // All The Variables For Filtering Villa Cards Later (MUST SET TO NULL)
    let stored_Filter_Price_Id = null;
    let stored_Filter_Type_Id = null;
    let stored_Filter_Place_Id = null;
    let stored_Filter_Pool_Id = null;

    /* Scroll Down To Villa Details */
    page_Scroll = function () {
        setTimeout(function () {
            /* Scroll down to the middle of 'koktelindo_villa_details_title' element after 1 second */
            koktelindo_villa_details_title.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior: 'smooth',
            });
        }, 500);
    };

    /* Funcion To Show Clciked Villa Card Details */
    koktelindo_showVillaDetailsFunction = function (pass, areaName, uniqueNumber) {

        /* in Case The 'koktelindo_villa_details' Element Was Hidden Then Show It */
        if (koktelindo_villa_details.style.display === 'none') {
            koktelindo_villa_details.style.display = 'block';
        }

        // Find The Clicked Card Array Based On The 'areaName' Value Passed To This Function.
        let arraySelected = areaName === 'سيساروا' ? cards_Details_Array_Cisarua : cards_Details_Array_Cipanas;

        // Find And Store The Object That is Inside The 'arraySelected' That is Related To The Clicked Card Based on The Pass Value
        let clicked_Card_Details = arraySelected.find(item => item.pass === pass);


        // Create A New Div Element To Contain All The Villa Details Elements
        let villa_Details_Card = document.createElement("div");
        villa_Details_Card.classList.add("koktelindo_villa_details_card");

        /* Store The Description Content of The Clicked Villa card in A Variable To Edit it Later */
        let card_Details_Description = clicked_Card_Details.description;

        // Replace '+' in The Villa Details Description With Line Breaks
        let newDescription = card_Details_Description.replace(/\+/g, "<br>");

        // Craete The HTML Content For The 'villa_Details_Card'.
        let villa_Details_Info = `
        <a onclick="take_Me_Back(${uniqueNumber});" id="koktelindo_go_back_card">فيلا رقم ${uniqueNumber}</a>


            <div id="koktelindo_villa_details_title">
                <h2>موقع الفيلا</h2>
                <h2>وصف الفيلا</h2>
            </div>

            <div id="villa_Details_Topic">
            
                <div id="villa_details_location">

                    <h3 id="clicked_card_details_location_h1">${clicked_Card_Details.location}</h3>
                    <h3 class="koktelindo_villa_details_buttons" title ="كوكتيل لحجز فلل اندونيسيا" onclick="koktelindo_show_full_screen_image('${clicked_Card_Details.video}')">شاهد الفيديو</h3>
                    <h3 class="koktelindo_villa_details_text_villa_number"> فيلا رقم ${uniqueNumber}</h3>
                    <h3 class="koktelindo_villa_details_buttons" onclick="koktelindo_villaBookingDateFunction('${clicked_Card_Details.pass}', '${clicked_Card_Details.location}', '${clicked_Card_Details.IDRprice}', '${clicked_Card_Details.SARprice}', '${clicked_Card_Details.USDprice}', '${newDescription}');" style="color: rgb(0, 255, 0);">احجز هذه الفيلا الآن</h3>

                </div>


                <div id="villa_Details_Description">
                
                    <h4>${newDescription}</h4>
                    <h4 class="price">${clicked_Card_Details.IDRprice}</h4>
                    <h4 class="price">${clicked_Card_Details.SARprice}</h4>
                    <h4 class="price">${clicked_Card_Details.USDprice}</h4>
                    <a class="Contact_For_More_Info_Btn" href="https://wa.me/+6282246117155" target="_blank">تواصل معنا للمزيد من المعلومات</a>

                </div>
            
            </div>
    `;


        // Set The Inner HTML of The 'villa_Details_Card' To The 'villa_details_info' HTML.
        villa_Details_Card.innerHTML = villa_Details_Info;

        // Clear And Then Append The 'villa_Details_Card' To The 'koktelindo_villa_details_area'
        koktelindo_villa_details_area.innerHTML = "";
        koktelindo_villa_details_area.appendChild(villa_Details_Card);


        // Pass All The Images From The 'clicked_Card_Details' To The 'create_Big_Img' Function.
        create_Big_Img(clicked_Card_Details.imgAraay);
    }

    /* Create The Cards Based On The 'theChoosenArea' Value */
    koktelindo_buildVillaCardsAreaType = function (theChoosenArea) {

        // clear Any Pervious Content in These Two Area Div Elements
        koktelindo_villa_cards_area.innerHTML = "";
        koktelindo_villa_details_area.innerHTML = "";


        // Hide The 'koktelindo_villa_details' Whenever You Build The Villa Cards
        koktelindo_villa_details.style.display = "none";

        // Scroll To The Middle of The 'koktelindo_villa_cards_title' Elemment
        setTimeout(() => {
            koktelindo_villa_cards_title.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior: 'smooth',
            });
        }, 100);

        // Set The 'villa_Cards_Title' InnerText Based on The 'theChoosenArea' Value Passed To This Function
        // Then Call The 'create_Villa_Card' Function Based on The 'theChoosenArea' Value Passed To This Function
        if (theChoosenArea === 'Cisarua') {
            koktelindo_villa_cards_title.innerText = 'فلل في منطقة سيساروا'
            create_Villa_Card(cards_Array_Cisarua, 'سيساروا');
        } else {
            koktelindo_villa_cards_title.innerText = 'فلل في منطقة شيباناس'
            create_Villa_Card(cards_Array_Cipanas, 'شيباناس');
        }

        // Reset The Defualt Text in Everytime You Build Villa Cards
        koktelindo_custom_cards_title.innerText = 'تصنيفات الفلل ▼';

        // in Case The 'koktelindo_villa_cards_section' Was Hidden, Show it
        if (koktelindo_villa_cards_section.style.display === 'none') {
            koktelindo_villa_cards_section.style.display = 'block';
        }
    }

    /* Create Cards */
    /* The data word here referce to the cards array name (Cisarua or Cipanas Cards) */
    function create_Villa_Card(data, areaName) {

        // Counter For Creating Unique Numbers
        let cardCounter = 1;

        // Go Through Each Item in The 'data' Value Array (data = All Villa Cards Array Cisarua And Cipanas)
        data.forEach((item, i) => {
            // Get All The Properties From Each Item in The Object From The Choosen Array
            let { pass, image, location, IDRprice } = item;

            // Create A New Div Element For Each Villa Card
            let koktelindo_villaCard = document.createElement("div");

            // Create An Unique Number For Each Villa Card
            let uniqueNumber = cardCounter++;

            // Create The HTML Content For The 'koktelindo_villa_card' Element And Put All The Functions That You Want Them To Run Once The User Clicks on Any Card
            koktelindo_villaCard.innerHTML = `
            <div id="${uniqueNumber}" onclick="koktelindo_showVillaDetailsFunction('${pass}', '${areaName}', ${uniqueNumber}); page_Scroll();" class="koktelindo_villa_card">
                <img src="${image}" alt="كوكتيل لحجز فلل اندونيسيا" title="كوكتيل لحجز فلل اندونيسيا">
                <div class="villa_Info">
                    <h3>${location}</h3>
                    <h3 class="price">${IDRprice}</h3>
                    <h3 class="koktelindo_villa_id">فيلا رقم ${uniqueNumber}</h3>
                    <h3>${areaName}</h3>
                </div>
            </div>
        `;

            // Append The Created Villa Card in The 'koktelindo_villa_cards_area' Element
            koktelindo_villa_cards_area.appendChild(koktelindo_villaCard);
        });
    }

    /* Custom Cards */
    koktelindo_filterVillaTypeFunction = function () {

        // Disable scrolling
        document.documentElement.style.overflow = 'hidden';

        // Create A Div To Contain The Big Image
        let FullScreenGuidanceOverlay = document.createElement('div');
        FullScreenGuidanceOverlay.id = "koktelindo_full_screen_guidance_overlay";

        // Create A Button To Exit The Big Image Page
        let fullScreenOverlayExitButton = document.createElement('a');
        fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
        fullScreenOverlayExitButton.innerText = "عودة";

        // Create Website Guidance Content
        let webGuidanceDiv = document.createElement('div');

        webGuidanceDiv.classList.add('overlay');
        webGuidanceDiv.id = 'custom_Cards_Overlay_Div';

        let webGuidanceText = `
            <div id="koktelindo_all_custom_card_box_div">

                <div class="koktelindo_custom_card_box">

                    <div class="koktelindo_custom_card_box_title">
                        <h1>اسعار الفلل باليوم</h1>
                    </div>

                    <div class="koktelindo_custom_card_box_options">
                        <h3 id="all_price" onclick="change_Clicked_Price_Btn_Color('all_price')">كل الاسعار</h3>
                        <h3 id="five_million_and_less" onclick="change_Clicked_Price_Btn_Color('five_million_and_less')">خمسة مليون روبيه او اقل</h3>
                        <h3 id="four_million_and_less" onclick="change_Clicked_Price_Btn_Color('four_million_and_less')">اربع مليون روبيه او اقل</h3>
                        <h3 id="three_million_and_less" onclick="change_Clicked_Price_Btn_Color('three_million_and_less')">ثلاث مليون روبيه او اقل</h3>
                        <h3 id="two_million_and_less" onclick="change_Clicked_Price_Btn_Color('two_million_and_less')">مليونين روبيه او اقل</h3>
                        <h3 id="one_million_and_less" onclick="change_Clicked_Price_Btn_Color('one_million_and_less')">مليون روبيه او اقل</h3>
                    </div>
                </div>

                <div class="koktelindo_custom_card_box">

                    <div class="koktelindo_custom_card_box_title">
                        <h1>مكان الفلل</h1>
                    </div>

                    <div class="koktelindo_custom_card_box_options">
                        <h3 id="all_place" onclick="change_Clicked_Place_Btn_Color('all_place')">كل الاماكن</h3>
                        <h3 id="inside" onclick="change_Clicked_Place_Btn_Color('inside')">داخل مجمع</h3>
                        <h3 id="outside" onclick="change_Clicked_Place_Btn_Color('outside')">ليست بداخل مجمع</h3>
                    </div>
                </div>

            

                <div class="koktelindo_custom_card_box">

                    <div class="koktelindo_custom_card_box_title">
                        <h1>نوع الفلل</h1>
                    </div>

                    <div class="koktelindo_custom_card_box_options">
                        <h3 id="all_people" onclick="change_Clicked_Type_Btn_Color('all_people')">كل الانواع</h3>
                        <h3 id="family" onclick="change_Clicked_Type_Btn_Color('family')">للعوائل فقط</h3>
                    </div>
                </div>

                <div class="koktelindo_custom_card_box">

                    <div class="koktelindo_custom_card_box_title">
                        <h1>ملحقات الفلل</h1>
                    </div>

                    <div class="koktelindo_custom_card_box_options">
                        <h3 id="all_pool" onclick="change_Clicked_Pool_Btn_Color('all_pool')">كل الملحقات</h3>
                        <h3 id="with_pool" onclick="change_Clicked_Pool_Btn_Color('with_pool')">مع مسبح</h3>
                        <h3 id="without_pool" onclick="change_Clicked_Pool_Btn_Color('without_pool')">بدون مسبح</h3>
                    </div>
                </div>

            </div>
        `;

        // Create a button element for submiting the custom cards
        let submit_Custom_Cards_Btn = document.createElement("a");
        submit_Custom_Cards_Btn.innerText = "بحث";
        submit_Custom_Cards_Btn.style.opacity = "0";
        submit_Custom_Cards_Btn.id = "submit_Custom_Cards_Btn";



        // Append All The elements inside 'FullScreenGuidanceOverlay'
        webGuidanceDiv.innerHTML = webGuidanceText;
        FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
        FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);
        FullScreenGuidanceOverlay.appendChild(submit_Custom_Cards_Btn);


        // Hide And Show Different Sections
        document.body.appendChild(FullScreenGuidanceOverlay);

        // Function To Exit The Big Image Page
        fullScreenOverlayExitButton.onclick = function () {

            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';

            // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
            let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
            document.body.removeChild(FullScreenGuidanceOverlay);
            FullScreenGuidanceOverlay.innerHTML = '';
        }



        // The First Function Will Be Explained And then All the 4 Down Functions Work in The Same Way
        /* Function To Select Only One Button From Each Section in The Custom Cards Page */
        change_Clicked_Price_Btn_Color = function (id) {

            // Store The Id Value So You Can Use It Later in The 'update_Filtered_Cards' Function
            stored_Filter_Price_Id = id;

            // Reset All The Buttons Style Codes
            all_price.style.backgroundColor = "rgb(41, 38, 38)";
            all_price.style.borderColor = "white";
            five_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
            five_million_and_less.style.borderColor = "white";
            four_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
            four_million_and_less.style.borderColor = "white";
            three_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
            three_million_and_less.style.borderColor = "white";
            two_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
            two_million_and_less.style.borderColor = "white";
            one_million_and_less.style.backgroundColor = "rgb(41, 38, 38)";
            one_million_and_less.style.borderColor = "white";

            // Store The Id Element in A Variable
            let clicked_Btn = document.getElementById(id);

            // Give The 'clicked_Btn' Element Style Codes
            clicked_Btn.style.backgroundColor = "green";
            clicked_Btn.style.borderColor = "orange";

            /* Show 'submit_Custom_Cards_Btn' After Clicking on Any Option Button From The Custom Cards Options */
            if (submit_Custom_Cards_Btn.style.opacity === '0') {
                submit_Custom_Cards_Btn.style.opacity = "1";
            }

        }
        change_Clicked_Type_Btn_Color = function (id) {

            stored_Filter_Type_Id = id;


            all_people.style.backgroundColor = "rgb(41, 38, 38)";
            all_people.style.borderColor = "white";
            family.style.backgroundColor = "rgb(41, 38, 38)";
            family.style.borderColor = "white";

            let clicked_Btn = document.getElementById(id);

            clicked_Btn.style.backgroundColor = "green";
            clicked_Btn.style.borderColor = "orange";

            /* Show 'submit_Custom_Cards_Btn' After Clicking on Any Option Button From The Custom Cards Options */
            if (submit_Custom_Cards_Btn.style.opacity === '0') {
                submit_Custom_Cards_Btn.style.opacity = "1";
            }

        }
        change_Clicked_Place_Btn_Color = function (id) {

            stored_Filter_Place_Id = id;

            all_place.style.backgroundColor = "rgb(41, 38, 38)";
            all_place.style.borderColor = "white";
            inside.style.backgroundColor = "rgb(41, 38, 38)";
            inside.style.borderColor = "white";
            outside.style.backgroundColor = "rgb(41, 38, 38)";
            outside.style.borderColor = "white";

            let clicked_Btn = document.getElementById(id);

            clicked_Btn.style.backgroundColor = "green";
            clicked_Btn.style.borderColor = "orange";

            /* Show 'submit_Custom_Cards_Btn' After Clicking on Any Option Button From The Custom Cards Options */
            if (submit_Custom_Cards_Btn.style.opacity === '0') {
                submit_Custom_Cards_Btn.style.opacity = "1";
            }

        }
        change_Clicked_Pool_Btn_Color = function (id) {

            stored_Filter_Pool_Id = id;

            all_pool.style.backgroundColor = "rgb(41, 38, 38)";
            all_pool.style.borderColor = "white";
            with_pool.style.backgroundColor = "rgb(41, 38, 38)";
            with_pool.style.borderColor = "white";
            without_pool.style.backgroundColor = "rgb(41, 38, 38)";
            without_pool.style.borderColor = "white";

            let clicked_Btn = document.getElementById(id);

            clicked_Btn.style.backgroundColor = "green";
            clicked_Btn.style.borderColor = "orange";

            /* Show 'submit_Custom_Cards_Btn' After Clicking on Any Option Button From The Custom Cards Options */
            if (submit_Custom_Cards_Btn.style.opacity === '0') {
                submit_Custom_Cards_Btn.style.opacity = "1";
            }

        }


        /* Function To Check if All Sections in Custom Villa cards Got One Buttun Selected */
        submit_Custom_Cards_Btn.onclick = function () {

            // if The Values in The 4 Variables Are Not Null (Means All Section Have One Button Selecetd) Then Run The 'update_Filtered_Cards' Function
            if (stored_Filter_Price_Id && stored_Filter_Type_Id && stored_Filter_Place_Id && stored_Filter_Pool_Id !== null) {

                /* Function To Display The Filtered Villa Cards */
                update_Filtered_Cards();

                // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
                let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
                document.body.removeChild(FullScreenGuidanceOverlay);
                FullScreenGuidanceOverlay.innerHTML = '';

                // Re-enable scrolling
                document.documentElement.style.overflow = 'auto';


            } else {
                alert('- الرجاء التحقق من تحديد جميع الخيارات\n\n- Please ensure all the options are selected');
            }


        }

        /* Function To Display The Filtered Villa Cards */
        function update_Filtered_Cards() {
            // Make Sure The 'new_Filterd_Cards' Value is The Same As The Current 'koktelindo_villa_cards_title' InnerText
            let new_Filterd_Cards = koktelindo_villa_cards_title.innerText === 'فلل في منطقة سيساروا' ? cards_Array_Cisarua : cards_Array_Cipanas;

            // Filter The 'filtered_Cards_Array' By Finding Objects With The Same Equirements
            // in Case if The Value of The Clicked Buttons Was (ALL) Then The process of Filtering Villa Cards Will Be Cancelled
            let filtered_Cards_Array = new_Filterd_Cards.filter(item =>
                (stored_Filter_Price_Id !== "all_price" ? item.filterPrice === stored_Filter_Price_Id : true) &&
                (stored_Filter_Type_Id !== "all_people" ? item.filterPeople === stored_Filter_Type_Id : true) &&
                (stored_Filter_Place_Id !== "all_place" ? item.filterPlace === stored_Filter_Place_Id : true) &&
                (stored_Filter_Pool_Id !== "all_pool" ? item.filterPool === stored_Filter_Pool_Id : true)
            );

            // Clear The 'koktelindo_villa_cards_area' Content After Filtering The Cards
            koktelindo_villa_cards_area.innerHTML = "";

            // Make Sure The 'areaName' Value is The Same As the 'koktelindo_villa_cards_title' InnerText
            let areaName = koktelindo_villa_cards_title.innerText === 'فلل في منطقة سيساروا' ? 'سيساروا' : 'شيباناس';



            // if There Was No Villa Cards Found Then Display The Following Element
            if (filtered_Cards_Array.length === 0) {


                // Display All of These Elements if There Was No Cards Found
                koktelindo_no_cards_found_div.classList.remove('koktelindo_dispaly_none_class');
                koktelindo_no_cards_found_h1.classList.remove('koktelindo_dispaly_none_class');
                koktelindo_refresh_all_cards_btn.classList.remove('koktelindo_dispaly_none_class');


            } else {

                // if There Was Found Cards Then Do The Following Code
                koktelindo_no_cards_found_h1.classList.add('koktelindo_dispaly_none_class');
                koktelindo_no_cards_found_div.classList.remove('koktelindo_dispaly_none_class');

                // if All The Filtering Values Are "All Kinds" Then Do The Following
                if (stored_Filter_Price_Id == "all_price" & stored_Filter_Type_Id == "all_people" & stored_Filter_Place_Id == "all_place" & stored_Filter_Pool_Id == "all_pool") {

                    /* Hide The Refresh Villa Cards Button And Show All Villa Cards Based on 'areaname' innerText Value */
                    koktelindo_refresh_all_cards_btn.classList.add('koktelindo_dispaly_none_class');
                    create_Villa_Card(filtered_Cards_Array, areaName);

                } else {
                    /* Show The Refresh Villa Cards Button And Show Only The Filtered Villa Cards Based on 'areaname' innerText Value */
                    koktelindo_refresh_all_cards_btn.classList.remove('koktelindo_dispaly_none_class');
                    create_Villa_Card(filtered_Cards_Array, areaName);
                }

            }


            // Onclick The Refresh Villa Cards Button Clear And Then Reshow All The Orignal Cards Based on 'areaName' Value
            koktelindo_refresh_all_cards_btn.onclick = function () {
                koktelindo_no_cards_found_h1.classList.add('koktelindo_dispaly_none_class');

                koktelindo_villa_cards_area.innerHTML = "";
                koktelindo_refresh_all_cards_btn.classList.add('koktelindo_dispaly_none_class');
                create_Villa_Card(new_Filterd_Cards, areaName);

                /* Hide These Element if They Exist */
                if (koktelindo_villa_details.style.display === 'block') {
                    koktelindo_villa_details.style.display = 'none';
                }

                if (document.getElementById("koktelindo_order_details_div_id")) {
                    document.getElementById("koktelindo_order_details_div_id").style.display = 'none';
                }
            }

            // Reset All The Variables Values After Submitting The Filtering Villa Cards Process
            stored_Filter_Price_Id = null;
            stored_Filter_Type_Id = null;
            stored_Filter_Place_Id = null;
            stored_Filter_Pool_Id = null;


            /* Hide These Element if They Exist */
            if (koktelindo_villa_details.style.display === 'block') {
                koktelindo_villa_details.style.display = 'none';
            }
            if (document.getElementById("koktelindo_order_details_div_id")) {
                document.getElementById("koktelindo_order_details_div_id").style.display = 'none';
            }
        }
    }

    /* Create Villa Images */
    function create_Big_Img(imgArray) {

        /* Clear And Show The 'koktelindo_big_img_div' Element in Everytime This Function Run */
        koktelindo_big_img_div.innerHTML = '';
        koktelindo_big_img_div.style.display = 'flex';

        // Add A Title For The Image Section.
        let bigImgTitle = document.createElement('a');
        bigImgTitle.textContent = 'صور الفيلا';
        bigImgTitle.classList.add('koktelindo_section_intro_bigger_text');
        bigImgTitle.style.backgroundColor = 'black';
        bigImgTitle.style.color = 'rgb(0, 255, 0)';
        bigImgTitle.classList.add('koktelindo_section_intro_bigger_text');
        bigImgTitle.id = 'koktelindo_big_img_title';
        bigImgTitle.style.marginBottom = '10px';
        bigImgTitle.style.color = 'rgb(0, 255, 0)';
        koktelindo_big_img_div.appendChild(bigImgTitle);

        // Add A Button To Go Back To Villa Details And Set Its Opacity To 0.
        let go_Back_Villa_Details = document.createElement('a');
        go_Back_Villa_Details.textContent = 'تفاصيل الفيلا';
        go_Back_Villa_Details.id = 'koktelindo_go_back_villa_details';
        go_Back_Villa_Details.style.opacity = '0';
        koktelindo_big_img_div.appendChild(go_Back_Villa_Details);

        // When The 'go_Back_Villa_Details' Button is Clicked Scroll To The Villa Details Section Smoothly.
        go_Back_Villa_Details.onclick = () => {
            if (go_Back_Villa_Details.style.opacity === '1') {
                koktelindo_villa_details_title.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
            }
        };

        // Update The Opacity of The 'go_Back_Villa_Details' Button Based on User Scrolling Position.
        window.addEventListener('scroll', () => {
            if (koktelindo_villa_details.style.display === 'block') {
                let bigImgTitle = document.querySelector('#koktelindo_big_img_title');
                let bigImgTitlePosition = bigImgTitle.getBoundingClientRect();
                go_Back_Villa_Details.style.opacity = bigImgTitlePosition.top <= 0 ? '1' : '0';
                // Disable click event listener when opacity is 0
                if (go_Back_Villa_Details.style.opacity === '0') {
                    go_Back_Villa_Details.style.pointerEvents = 'none';
                } else {
                    go_Back_Villa_Details.style.pointerEvents = 'auto';
                }
            }
        });


        // Go Through Each Image Source in The Provided Array And Create Image Elements
        imgArray.forEach(imgSrc => {
            let imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = 'كوكتيل لحجز فلل اندونيسيا';
            imgElement.title = 'كوكتيل لحجز فلل اندونيسيا';
            imgElement.setAttribute('data-image-source', imgSrc);
            imgElement.addEventListener('click', () => koktelindo_show_full_screen_image(imgSrc));
            koktelindo_big_img_div.appendChild(imgElement);
        });
    }

    /* Function To Go Back To The Same Clciked Villa Card */
    function take_Me_Back(id) {
        // Find the Card element using the provided 'id'.
        let card = document.getElementById(id);

        // Calculate the offset needed for scrolling to center the element vertically in the viewport.
        let offset = card.getBoundingClientRect().top - (window.innerHeight / 2 - card.clientHeight / 2);

        // Scroll the window smoothly to bring the Card element to the center of the viewport.
        window.scrollBy({
            top: offset,
            behavior: 'smooth',
        });

        // Change the background color of the Card element to green.
        card.style.backgroundColor = "green";

        // Change the border color of the Card element to orange.
        card.style.borderColor = "orange";
    }

    /* Create Booking Date Content */
    function koktelindo_villaBookingDateFunction(villaPass, villaLocation, villaIDRprice, villaSARprice, villaUSDprice, villaDescription) {

        // Disable scrolling
        document.documentElement.style.overflow = 'hidden';

        let bookingDateDivContainerOverlay = document.createElement("div");
        bookingDateDivContainerOverlay.id = 'koktelindo_booking_date_div_container_overlay';

        let bookingDateDivInfo = `
        <div id="koktelindo_booking_date_div_container">
            <h5>تاريخ الحجز</h5>

            <div class="koktelindo_booking_date_div">
                <h6>من تاريخ</h6>
                <div class="koktelindo_villa_book_date_note" style="margin-top: 5px;">
                    <textarea placeholder="..." id="koktelindo_villa_book_date_id_1" maxlength="30"></textarea>
                </div>
            </div>

            <div class="koktelindo_booking_date_div">
                <h6>الى تاريخ</h6>
                <div class="koktelindo_villa_book_date_note" style="margin-top: 5px;">
                    <textarea placeholder="..." id="koktelindo_villa_book_date_id_2" maxlength="30"></textarea>
                </div>
            </div>

            <div class="koktelindo_booking_date_div">
                <h6 style="color: rgb(0, 255, 0);">إضافة ملاحظة (إختياري)</h6>
                <div class="koktelindo_villa_book_date_note" style="margin-top: 5px;">
                    <textarea placeholder="..." id="koktelindo_villa_book_date_id_3" maxlength="50"></textarea>
                </div>
            </div>

            <div id="koktelindo_submit_booking_date_info">
                <h6 onclick="koktelindo_submitBookingDateFunction(this)">إرسال</h6>
                <h6 onclick="koktelindo_submitBookingDateFunction(this)">إلغاء</h6>
            </div>
        </div>
    `;

        /* Add All Booking Date Content To The Body */
        bookingDateDivContainerOverlay.innerHTML = bookingDateDivInfo;
        document.body.appendChild(bookingDateDivContainerOverlay);


        koktelindo_submitBookingDateFunction = function (clickedAnswer) {
            if (clickedAnswer.innerText === 'إلغاء') {
                bookingDateDivContainerOverlay.style.display = 'none';
                bookingDateDivContainerOverlay.innerHTML = '';

                // Re-enable scrolling
                document.documentElement.style.overflow = 'auto';

            } else {

                // Get the text inside the textarea
                let noteTextarea1 = document.getElementById('koktelindo_villa_book_date_id_1');
                let noteTextarea2 = document.getElementById('koktelindo_villa_book_date_id_2');
                let noteTextarea3 = document.getElementById('koktelindo_villa_book_date_id_3');
                let noteText1 = noteTextarea1 ? noteTextarea1.value.trim() : ''; // Check if textarea exists
                let noteText2 = noteTextarea2 ? noteTextarea2.value.trim() : ''; // Check if textarea exists
                let noteText3 = noteTextarea3 ? noteTextarea3.value.trim() : ''; // Check if textarea exists

                // Check if both textareas have text
                if (noteText1 === '' || noteText2 === '') {
                    alert('يرجى ملئ جميع الحقول المطلوبة.');
                    return; // Stop further processing
                }

                // Get today's date
                let today = new Date();
                let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


                // Create the final message And join all order details
                let finalMessage = `طلب جديد حجز فيلا ${villaPass}:\n`;
                finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`;
                finalMessage += `${villaLocation}\n\n`;
                finalMessage += `___________________________________\n\n`;
                finalMessage += `من تاريخ: ${noteText1}\n`;
                finalMessage += `الى تاريخ: ${noteText2}\n`;
                finalMessage += `الملاحظات: ${noteText3}\n`;
                finalMessage += `___________________________________\n\n`;
                finalMessage += `سعر الفيلا\n`;
                finalMessage += `${villaIDRprice}\n`;
                finalMessage += `${villaSARprice}\n`;
                finalMessage += `${villaUSDprice}\n`;
                finalMessage += `- الدفع كاش فقط ويتم مع صاحب الفيلا بشكل مباشر\n\n`;

                // Replace <br> tags with ' - ' in villaDescription
                villaDescription = villaDescription.replace(/<br>/g, ' - ');

                finalMessage += `وصف الفيلا:\n`;
                finalMessage += `${villaDescription}`;

                // Encode the message using encodeURIComponent
                let encodedMessage = encodeURIComponent(finalMessage);

                // Create the WhatsApp URL
                let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

                // Open WhatsApp in a new window
                window.open(whatsappURL, '_blank');
            }
        }
    }
}
/* Up Villa Booking Up */















/* Down Worker And Driver Booking Down */
if (document.getElementById("koktelindo_choose_worker_type_section")) {

    /* Craete Home Worker WhatsApp Message */
    koktelindo_whatsApp_worker_message.onclick = function () {

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = "طلب جديدة حجز شغالة:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Craete the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `\n\nيرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Craete the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Craete the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }

    /* Choose Driver Type Car Or Motor */
    koktelindo_whatsApp_driver_message.onclick = function () {

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';

        let paymeantMethodeBox = document.createElement("div");
        paymeantMethodeBox.id = 'koktelindo_driver_type_box_overlay';

        paymeantMethodeBox.innerHTML = `
            <div id="koktelindo_driver_type_box">
                <div id="koktelindo_driver_type_box_title">
                    <h3>اختار نوع السائق</h3>    
                </div>

                <div id="koktelindo_driver_type_box_options">
                    <h4 onclick="koktelindo_driverTypeWhatsAppMessage('car')">سيارة</h4>
                    <h4 onclick="koktelindo_driverTypeWhatsAppMessage('motor')">دباب</h4>
                    <h4 onclick="koktelindo_driverTypeWhatsAppMessage('cancel')" style="background-color: gray;">إلغاء</h4>
                </div>
            </div
        `;

        document.getElementById('koktelindo_choose_worker_type_section').appendChild(paymeantMethodeBox)
    }

    /* Craete Home Driver WhatsApp Message */
    koktelindo_driverTypeWhatsAppMessage = function (driverType) {

        let clickedDriverType;

        if (driverType === 'car') {
            clickedDriverType = 'طلب جديد حجز سائق سيارة'
        } else if (driverType === 'motor') {
            clickedDriverType = 'طلب جديد حجز سائق دباب'
        } else {
            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';

            document.getElementById('koktelindo_choose_worker_type_section').removeChild(document.getElementById('koktelindo_driver_type_box_overlay'))
            return;

        }


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = `${clickedDriverType}\n`; // Initial message
        finalMessage += `${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Craete the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Craete the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Craete the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }
}
/* Up Worker And Driver Booking Up */

















/* Down Massage Worker Down */
if (document.getElementById("koktelindo_choose_massage_person_section")) {

    /* Craete Massage Person Type WhatsApp Message */
    function koktelindo_massageWorkerTypeMessage(workerType) {
        // Define the worker type specific message header
        let messageType = (workerType === 'female') ? 'انثى' : 'ذكر';


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = `طلب جديد حجز مساج ${messageType}\n`; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;



        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Create the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }
}
/* Up Massage Worker Up */






















/* Down Pharmacy Down */
/* Function To Add Orders And Create pharmacy_orders Key in the localStorage */
if (document.getElementById("koktelindo_pharmacy_section")) {

    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktelindo_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktelindo_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktelindo_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktelindo_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktelindo_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktelindo_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktelindo_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktelindo_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktelindo_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktelindo_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'pharmacy_orders' key exists in localStorage
                if (localStorage.getItem('pharmacy_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('pharmacy_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('pharmacy_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'pharmacy_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('pharmacy_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktelindo_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktelindo_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktelindo_mealOrderIconDiv = document.createElement('div');
                    koktelindo_mealOrderIconDiv.id = 'koktelindo_order_page_icon_div';
                    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك-من-الصيدلية.html' id="koktelindo_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
                    koktelindo_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktelindo_mealOrderIconDiv);
                    setTimeout(() => {
                        koktelindo_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktelindo_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktelindo_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktelindo_pharmacy_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك من الصيدلية جاهزة للإرسال</h1>


            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktelindo_delete_all_restaurant_orders_button' onclick='koktelindo_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktelindo_orders_static_price_h4" id="koktelindo_orders_static_price_h4_id" style="display: none;">سعر التوصيل = 20,000 Rp</h4>
            </div>


            <div class="koktelindo_meal_info_note" id="koktelindo_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktelindo_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktelindo_koktelindo_order_details_bottom_button_div" id='koktelindo_total_order_price_text'></div>

            <div id="koktelindo_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/test/صيدلية-اندونيسيا.html" class="koktelindo_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم السوبرماركت</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktelindo_restaurant_order_details_body_id' Element */
    document.getElementById('koktelindo_pharmacy_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The 'pharmacy_orders' Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('pharmacy_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src='${orderData.productImgSrc}' alt='توصيل من المطاعم - كوكتيل اندو' onclick="koktelindo_show_full_screen_image(this.src)" title="توصيل من المطاعم - كوكتيل اندو">
                    <div>
                        <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktelindo_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktelindo_order_check_out_whatsApp_content = `
            <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات عبر الواتس</h5>
            </div>
            <div id="koktelindo_order_check_out_bill_div">
                <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                ${orders.map(order => `<h6>السعر: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        document.getElementById('koktelindo_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktelindo_meal_info_note_id').style.display = 'block';
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktelindo_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktelindo_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktelindo_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktelindo_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('pharmacy_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktelindo_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktelindo_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('pharmacy_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('pharmacy_orders');


            }


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                    <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktelindo_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('pharmacy_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('pharmacy_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src='${orderData.productImgSrc}' alt='صيدلية اندونيسيا - كوكتيل اندو' onclick="koktelindo_show_full_screen_image(this.src)" title="صيدلية اندونيسيا - كوكتيل اندو">
                <div>
                    <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                </div>
                <div class='koktelindo_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktelindo_order_check_out_whatsApp_content = `
                <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات عبر الواتس</h5>
                </div>
                <div id="koktelindo_order_check_out_bill_div">
                    <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                    ${orders.map(order => `<h6>السعر: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل: ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
            document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any 'pharmacy_orders' Data */
            document.getElementById('koktelindo_meal_info_note_id').style.display = 'none';
            document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktelindo_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktelindo_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `الطلب رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- السعر الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من الصيدلية:\n\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n\n\n`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Create the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }
}
/* Up Pharmacy Up */



















/* Down Shisha Down */
/* Function To Add Orders And Create shisha_orders Key in the localStorage */
if (document.getElementById("koktelindo_shisha_section")) {

    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktelindo_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktelindo_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktelindo_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktelindo_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktelindo_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktelindo_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktelindo_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktelindo_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktelindo_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktelindo_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktelindo_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'shisha_orders' key exists in localStorage
                if (localStorage.getItem('shisha_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('shisha_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('shisha_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'shisha_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('shisha_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktelindo_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktelindo_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktelindo_mealOrderIconDiv = document.createElement('div');
                    koktelindo_mealOrderIconDiv.id = 'koktelindo_order_page_icon_div';
                    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك-من-المعسلات.html' id="koktelindo_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
                    koktelindo_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktelindo_mealOrderIconDiv);
                    setTimeout(() => {
                        koktelindo_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktelindo_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktelindo_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktelindo_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktelindo_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktelindo_shisha_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك من المعسلات جاهزة للإرسال</h1>


            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktelindo_delete_all_restaurant_orders_button' onclick='koktelindo_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktelindo_orders_static_price_h4" id="koktelindo_orders_static_price_h4_id" style="display: none;">سعر التوصيل = 20,000 Rp</h4>
            </div>


            <div class="koktelindo_meal_info_note" id="koktelindo_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktelindo_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktelindo_koktelindo_order_details_bottom_button_div" id='koktelindo_total_order_price_text'></div>

            <div id="koktelindo_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/test/معسلات-اندونيسيا.html" class="koktelindo_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم السوبرماركت</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktelindo_restaurant_order_details_body_id' Element */
    document.getElementById('koktelindo_shisha_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The 'shisha_orders' Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('shisha_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src='${orderData.productImgSrc}' alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_full_screen_image(this.src)" title="كوكتيل-اندو-للتوصيل-من-السوبرماركت">
                    <div>
                        <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktelindo_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktelindo_order_check_out_whatsApp_content = `
            <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات عبر الواتس</h5>
            </div>
            <div id="koktelindo_order_check_out_bill_div">
                <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                ${orders.map(order => `<h6>السعر: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        document.getElementById('koktelindo_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktelindo_meal_info_note_id').style.display = 'block';
        document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktelindo_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktelindo_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktelindo_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktelindo_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('shisha_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktelindo_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktelindo_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktelindo_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('shisha_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('shisha_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('shisha_orders');


            }


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                    <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktelindo_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktelindo_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('shisha_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktelindo_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktelindo_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('shisha_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('shisha_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="margin-bottom: 5px; cursor: text;">طلب رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src='${orderData.productImgSrc}' alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_full_screen_image(this.src)" title="كوكتيل-اندو-للتوصيل-من-السوبرماركت">
                <div>
                    <h3 style="cursor: text;">السعر الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                </div>
                <div class='koktelindo_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 onclick="koktelindo_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktelindo_ensure_delete_this_orders_overlay_${index}' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktelindo_order_check_out_whatsApp_content = `
                <div id="koktelindo_order_check_out_whatsApp_div" onclick="koktelindo_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات عبر الواتس</h5>
                </div>
                <div id="koktelindo_order_check_out_bill_div">
                    <h6 style="margin-bottom: 25px;">الفاتورة</h6>
                    ${orders.map(order => `<h6>السعر: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 style="margin-top: 25px">إجمالي السعر مع التوصيل: ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktelindo_order_check_out_div').innerHTML = koktelindo_order_check_out_whatsApp_content;
            document.getElementById('koktelindo_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any 'shisha_orders' Data */
            document.getElementById('koktelindo_meal_info_note_id').style.display = 'none';
            document.getElementById('koktelindo_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktelindo_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktelindo_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `الطلب رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- السعر الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من الصيدلية:\n\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n\n\n`;

        // Retrieve the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            // Extract latitude and longitude from the position object
            let { latitude, longitude } = position.coords;

            // Create the Google Maps URL with latitude and longitude
            let mapsURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

            // Append the user's location as a link to Google Maps to the final message
            finalMessage += `يرجى التأكد من صحة موقعك:\n`;
            finalMessage += mapsURL + '\n';
            finalMessage += `إذا كان الموقع صحيح ارسل تم\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        }, (error) => {
            console.error('Error getting location:', error);
            // If there's an error retrieving the location, proceed without appending the location to the message
            finalMessage += `يرجى إرسال موقعك..\n\n`;
            finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
            finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
            finalMessage += `Dana: 087720208728`;

            // Encode the message using encodeURIComponent
            let encodedMessage = encodeURIComponent(finalMessage);

            // Create the WhatsApp URL
            let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

            // Open WhatsApp in a new window
            window.open(whatsappURL, '_blank');
        });
    }
}
/* Up Pharmacy Up */






















/* Down Ads Videos And Images Down */
/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let koktelindo_adsVideosArray = [

    {
        videoSrc: "koktelindo_ads/video1.mp4",
        videoThumbnailSrc: "koktelindo_ads/خدمات-اندونيسيا.png",
    },

    {
        imgSrc: "koktelindo_ads/خدمات-اندونيسيا.png",
    },

]

if (document.getElementById('koktelindo_accounts_section')) {
    koktelindo_adsVideosArray.forEach((item) => {
        /* Get The Array Properties */
        let { imgSrc, videoSrc, videoThumbnailSrc } = item;

        /* Create The Card Container Div */
        let AdsVideoDiv = document.createElement("div");
        AdsVideoDiv.classList.add("indoforall_ads_only_videos_div");

        let AdsImgDiv = document.createElement("div");
        AdsImgDiv.classList.add("indoforall_ads_only_img_div");

        /* Create A Variable To Store The Inner HTML Code */
        let AdsVideoInfo;
        let AdsImgInfo;

        /* Check If The Object Has 'imgSrc' Or 'videoSrc' And Based On it, It Will Show Different Code */
        if (imgSrc) {
            /* Create The HTML Content For The Images */
            AdsImgInfo = `
            <img src=${imgSrc} alt="استقدام من اندونيسيا - اندو للجميع" title="استقدام من اندونيسيا - اندو للجميع">
        `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsImgDiv.innerHTML = AdsImgInfo;


            /* Append The 'AdsVideoDiv' To the 'indoforall_proof_area' */
            indoforall_ads_videos_and_img_div.appendChild(AdsImgDiv);

            AdsImgDiv.onclick = function () {
                koktelindo_show_full_screen_image(imgSrc);
            };
        } else if (videoSrc) {
            /* Create The HTML Content For The Videos */
            AdsVideoInfo = `
            <img src=${videoThumbnailSrc} alt="خدمات اندونيسيا - كوكتيل اندو" class="indoforall_ads_thumbnail_img" title="خدمات اندونيسيا - كوكتيل اندو">
            <video src=${videoSrc} controls title="خدمات اندونيسيا - كوكتيل اندو" class="indoforall_ads_orignal_video"></video>
        `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsVideoDiv.innerHTML = AdsVideoInfo;

            /* Append The 'AdsVideoDiv' To the 'indoforall_proof_area' */
            indoforall_ads_videos_and_img_div.appendChild(AdsVideoDiv);

            /* Get The Elements So You Can Use it Later */
            let orignalVideos = document.getElementsByClassName('indoforall_ads_orignal_video');
            let thumbnailImages = document.getElementsByClassName('indoforall_ads_thumbnail_img');

            for (let i = 0; i < orignalVideos.length; i++) {
                orignalVideos[i].addEventListener('play', function () {
                    // Pause other videos
                    for (let j = 0; j < orignalVideos.length; j++) {
                        if (j !== i) {
                            orignalVideos[j].pause();
                            thumbnailImages[j].style.opacity = 1; // Make thumbnail visible
                        }
                    }
                    thumbnailImages[i].style.opacity = 0; // Hide thumbnail of the playing video
                });
            }
        }

    });
}
/* Up Ads Videos And Images Up */










/* Make The TextArea in The koktelindo_meal_info_section Resposnive With The Text Inside */
if (document.getElementById("koktelindo_meal_info_section") || document.getElementById("koktelindo_supermarket_order_details_body_id") || document.getElementById("koktelindo_pharmacy_order_details_body_id") || document.getElementById("koktelindo_choose_villa_area_section")) {
    // Select all elements with the class 'koktelindo_meal_info_note_textarea'
    let koktelindo_meal_info_note_textarea = document.querySelectorAll('.koktelindo_meal_info_note_textarea');

    // Iterate through each selected textarea element
    koktelindo_meal_info_note_textarea.forEach(textarea => {
        // Add an event listener for keyup events on each textarea
        textarea.addEventListener('keyup', e => {
            // Set the initial height of the textarea to 50px
            textarea.style.height = '50px';

            // Get the scroll height of the textarea
            let scHeight = e.target.scrollHeight;

            // Set the height of the textarea to match its scroll height
            textarea.style.height = `${scHeight}px`;
        });
    });
}



if (document.getElementById("koktelindo_nav")) {
    /* Hide And Show nav Bar */
    let koktelindo_showNavOptions = () => {
        koktelindo_nav_options.style.opacity = "1";
        koktelindo_nav_options.style.height = "100%";
        koktelindo_nav_options.style.right = "0"; // Move from right (-50%) to the original position (0%)
        document.body.classList.add("nav-open");
    };

    let koktelindo_hideNavOptions = () => {
        koktelindo_nav_options.style.opacity = "0";
        koktelindo_nav_options.style.height = "0";
        koktelindo_nav_options.style.right = "-50%"; // Move to the right (-50%)
        document.body.classList.remove("nav-open");
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
}





/* Open WhatsApp Chat */
function koktelindo_whatsApp() {
    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Scroll Up */
/* Scroll Up To The Beginning Icon */
function koktelindo_scrollUpIcon() {
    document.getElementById('koktelindo_header').scrollIntoView({ top: 0, behavior: 'smooth' });
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

    // letruct the Google Maps URL
    let mapsUrl = "https://www.google.com/maps?q=" + encodedAddress;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Page Load Header Fade Animation */
if (document.getElementById("koktelindo_header")) {
    setTimeout(function () {
        koktelindo_header.style.opacity = "1";
    }, 100);
}
