/* How To Manage This Website? */




/* Function For Showing Full Screen Images */
function koktelindo_show_full_screen_image(src) {

    /* Create A Div To Contain The Big Image */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.id = "koktelindo_full_screen_img_overlay";

    /* Create A Button To Exit The Big Image Page */
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktelindo_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay

    /* Create The Big Image Element Based on The 'src' Value */
    let FullScreenImg = document.createElement('img');
    FullScreenImg.src = src;
    FullScreenImg.alt = "كوكتيل-اندو";
    FullScreenImg.title = "كوكتيل-اندو";
    FullScreenImg.classList.add('koktelindo_big_img');

    /* Append All The elements inside 'FullScreenImgOverlay' */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);
    FullScreenImgOverlay.appendChild(FullScreenImg);
    document.body.appendChild(FullScreenImgOverlay);

    /* Function To Exit The Big Image Page */
    fullScreenOverlayExitButton.onclick = function () {
        /* Hide The Full Screen Img Overlay */
        FullScreenImgOverlay.style.display = 'none';

        /* Scroll To Center The Element Vertically On The Screen */
        let elementToScrollTo = document.querySelector(`img[src="${src}"]`);

        elementToScrollTo.scrollIntoView({
            block: 'center',
            inline: 'center',
        });

        /* Reset All Data Stored Inside The Full Screen Overlay Element */
        FullScreenImgOverlay.innerHTML = '';
    }
};


/* Open Website Guidance */
function koktelindo_websiteGuidance(buttonClicked) {

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

    let webGuidanceText;

    if (buttonClicked === 'how to use koktelindo website') {
        webGuidanceText = `
            <a href="https://koktelindo.com">1- في الصفحة الرئيسية انزل الى قسم اختيار نوع العمالة الاندونيسية.</a>
            <a href="https://koktelindo.com">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
            <a onclick="koktelindo_whatsApp()">3- اخيرا، تواصل معنا للاستقدام او لطلب المزيد من المعلومات والنصائح.</a>
            <a href="https://koktelindo.com/اسئلة-استقدام-من-اندونيسيا.html" id="koktelindo_web_guidance_note_text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>
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
        FullScreenGuidanceOverlay.style.display = 'none';
        FullScreenGuidanceOverlay.innerHTML = '';
    }
}

/* Open Website Languages */
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
    let koktelindo_mealInfoNoteTextarea = `<textarea placeholder="ملاحظاتك هنا" class="koktelindo_meal_info_note_textarea" maxlength="80"></textarea>`;
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
    koktelindo_totalPriceDiv.classList.add('koktelindo_total_price_div');
    let koktelindo_totalPriceH3 = `<h3 onclick="koktelindo_createOrderText()">إضافة لعربة الطلبات = ${currentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h3>`;
    koktelindo_totalPriceDiv.innerHTML = koktelindo_totalPriceH3;
    koktelindo_meal_info_options_area_id.appendChild(koktelindo_totalPriceDiv);


    // Create Button To Show Orders Page
    let koktelindo_mealOrderIconDiv = document.createElement('div');
    koktelindo_mealOrderIconDiv.id = 'koktelindo_meal_order_icon_div';
    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك.html' id="koktelindo_meal_order_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
    document.body.appendChild(koktelindo_mealOrderIconDiv);


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

        koktelindo_totalPriceH3 = `<h3 onclick="koktelindo_createOrderText()">إضافة لعربة الطلبات = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h3>`;
        koktelindo_totalPriceDiv.innerHTML = koktelindo_totalPriceH3;

        /* Get The Minus Icon So You Can Change its Opacity Value */
        let minusIcon = document.getElementById('koktelindo_minus_icon');
        if (minusIcon.style.opacity === '0') {
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
        let total
        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        // Update the displayed total price
        koktelindo_totalPriceH3 = `<h3 onclick="koktelindo_createOrderText()">إضافة لعربة الطلبات = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h3>`;
        koktelindo_totalPriceDiv.innerHTML = koktelindo_totalPriceH3;
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
                    koktelindo_ensure_all_required_box_selected_div.style.opacity = '1';
                    setTimeout(() => {
                        koktelindo_ensure_all_required_box_selected_div.style.opacity = '0';
                    }, 2000);
                    break; // Exit the loop
                }
            }

            return allRequiredCheckboxesChecked;
        }

        // Function to scroll to the middle of the viewport for a given element
        function scrollToMiddle(element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2 - elementRect.height / 2);
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
        let totalCurrentMealPriceText = document.querySelector('.koktelindo_total_price_div h3').textContent;
        let totalCurrentMealPrice = parseFloat(totalCurrentMealPriceText.replace(/[^\d.]/g, '')).toLocaleString() + ' Rp'; // Format with commas

        // Get the meal amount number
        let mealAmountNumber = parseInt(document.getElementById('koktelindo_amountNumberElement').innerText).toLocaleString(); // Format with commas

        // Get the web logo source from the element with id "koktelindo_web_logo_no_moving"
        let webLogoSource = document.getElementById('koktelindo_web_logo_no_moving').src;

        // Create an object to represent the order
        let order = {
            mealName: mealName,
            mealDetails: mealDetails,
            orderText: orderText,
            mealAmountNumber: mealAmountNumber,
            noteText: noteText,
            totalCurrentMealPrice: totalCurrentMealPrice,
            webLogoSource: webLogoSource // Save the exact image source
        };

        // Get existing orders from localStorage or initialize as an empty array if not present
        let existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

        // Append the new order object to the existing orders array
        existingOrders.push(order);

        // Save the updated orders back to localStorage
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        // Print the number of orders
        console.log("Number of orders:", existingOrders.length);

        // Display the order text in the console
        console.log(order);


        document.getElementById('koktelindo_meal_order_icon_div').style.opacity = '1';


        // Create a box with the text "تمت اضافة الطلب"
        let successBox = document.createElement('div');
        successBox.textContent = 'تمت اضافة الطلب';
        successBox.classList.add('success-box');
        document.body.appendChild(successBox);

        // Apply styles to the success box
        successBox.style.position = 'fixed';
        successBox.style.top = '50%';
        successBox.style.left = '50%';
        successBox.style.transform = 'translate(-50%, 100%)';
        successBox.style.padding = '10px';
        successBox.style.backgroundColor = 'white';
        successBox.style.color = 'black';
        successBox.style.borderRadius = '7px';
        successBox.style.textAlign = 'center';
        successBox.style.boxShadow = '0 0 5px 0.5px black';
        successBox.style.transition = 'transform 1.2s, opacity 1.5s'; // Adjusted transition property
        successBox.style.fontSize = '20px'; // Increased font size for the text

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
}

/* Function To Create Order Details Page Content */
if (document.getElementById("koktelindo_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك جاهزة للإرسال</h1>


            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktelindo_delete_all_orders_button' onclick='koktelindo_ensure_delete_all_orders_box(this)'>حذف جميع الطلبات</h4>
            </div>

            <div class="koktelindo_koktelindo_order_details_bottom_button_div" id='koktelindo_total_order_price_text'></div>

            <div class="koktelindo_koktelindo_order_details_bottom_button_div">
                <h4 id='koktelindo_sendOrderButton' onclick="koktelindo_createFinalWhatsAppMessage()">ارسال الطلبات عبر الواتس</h4>
            </div>

            <a href="توصيل-مطاعم.html" class="koktelindo_full_screen_overlay_exit_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> ..قسم المطاعم</a>
        </div>`;

        /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktelindo_order_details_body_id' Element */
        document.getElementById('koktelindo_order_details_body_id').innerHTML = all_order_page_content;


    /* in Case if There Was Any Data in The Orders Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('orders')) {


        // Parse orders from localStorage
        let orders = JSON.parse(localStorage.getItem('orders'));

        // Calculate the total price by summing up the values of totalCurrentMealPrice for each order
        let totalPrice = orders.reduce((acc, order) => acc + parseFloat(order.totalCurrentMealPrice.replace(',', '')), 0);

        // Calculate the delivery fee by multiplying the number of orders by 20000
        let deliveryFee = orders.length * 20000;

        // Add the delivery fee to the total price
        let totalPriceWithDelivery = totalPrice + deliveryFee;


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

            // Construct the inner HTML content for the order
            let localStorageOrderCardContent = `
                <h2 onclick="koktelindo_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
                <img src='${orderData.imgSrc}' alt='كوكتيل-اندو-توصيل-مطاعم' onclick="koktelindo_show_order_details_page(${index})" title="كوكتيل-اندو-للتوصيل-من-المطاعم">
                <div>
                    <h3 onclick="koktelindo_show_order_details_page(${index})">السعر مع التوصيل = ${(orderData.totalCurrentMealPrice + 20000).toLocaleString()} Rp</h3>
                </div>
                <div class='koktelindo_orderFinished_info_and_delete'>
                    <h3 onclick="koktelindo_show_order_details_page(${index})">تفاصيل الطلب</h3>
                    <h3 onclick="koktelindo_ensure_delete_all_orders_box(this)">حذف الطلب</h3>
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

                <div id='koktelindo_ensure_delete_this_orders_overlay' style='display:none'>
                    <div id='koktelindo_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                            <h6 onclick='koktelindo_delete_this_orders_function(this>عودة</h6>
                        </div>
                    </div>
                </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


            let koktelindo_order_details_final_price_title_h4 = `<h4 id="koktelindo_order_details_final_price_title">السعر الإجمالي لجميع الطلبات = ${(totalPriceWithDelivery).toLocaleString()} Rp (مع سعر التوصيل)</h4>`;
            document.getElementById('koktelindo_total_order_price_text').innerHTML = koktelindo_order_details_final_price_title_h4;
        });

        // Set opacity to 1 if there are orders
        koktelindo_delete_all_orders_button.style.display = 'block';
    } else {

        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Set opacity to 1 if there are orders
        koktelindo_delete_all_orders_button.style.display = 'none';
    }



    /* Function To Show The Ensure Delete Box */
    koktelindo_ensure_delete_all_orders_box = function (clickedDeleteButton) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            document.getElementById('koktelindo_ensure_delete_this_orders_overlay').style.display = 'block';

        } else {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
        }
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
            localStorage.removeItem('orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktelindo_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع الطلبات';
            successBox.classList.add('success-box');
            document.body.appendChild(successBox);

            // Apply styles to the success box
            successBox.style.position = 'fixed';
            successBox.style.top = '50%';
            successBox.style.left = '50%';
            successBox.style.transform = 'translate(-50%, 100%)';
            successBox.style.padding = '10px';
            successBox.style.backgroundColor = 'white';
            successBox.style.color = 'black';
            successBox.style.borderRadius = '7px';
            successBox.style.textAlign = 'center';
            successBox.style.boxShadow = '0 0 5px 0.5px black';
            successBox.style.transition = 'transform 1.2s, opacity 1.5s'; // Adjusted transition property
            successBox.style.fontSize = '20px'; // Increased font size for the text

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
    }






    /* Function To Delete Only One Order Data */
    koktelindo_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_this_orders_overlay').style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById('koktelindo_ensure_delete_this_orders_overlay').style.display = 'none';

            /* Store The Orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated orders back to localStorage
            localStorage.setItem('orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('orders');

                /* Also Delete The Total price H4 Element */
                document.getElementById('koktelindo_total_order_price_text').innerHTML = '';
            }

            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('success-box');
            document.body.appendChild(successBox);

            // Apply styles to the success box
            successBox.style.position = 'fixed';
            successBox.style.top = '50%';
            successBox.style.left = '50%';
            successBox.style.transform = 'translate(-50%, 100%)';
            successBox.style.padding = '10px';
            successBox.style.backgroundColor = 'white';
            successBox.style.color = 'black';
            successBox.style.borderRadius = '7px';
            successBox.style.textAlign = 'center';
            successBox.style.boxShadow = '0 0 5px 0.5px black';
            successBox.style.transition = 'transform 1.2s, opacity 1.5s'; // Adjusted transition property
            successBox.style.fontSize = '20px'; // Increased font size for the text

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



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktelindo_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 onclick="koktelindo_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
                        <img src='${orderData.imgSrc}' alt='كوكتيل-اندو-للتوصيل-من-المطاعم' onclick="koktelindo_show_order_details_page(${index})" title="كوكتيل-اندو-للتوصيل-من-المطاعم">
                    <div>
                        <h3 onclick="koktelindo_show_order_details_page(${index})">السعر مع التوصيل = ${(parseFloat(orderData.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktelindo_orderFinished_info_and_delete'>
                        <h3 onclick="koktelindo_show_order_details_page(${index})">تفاصيل الطلب</h3>
                        <h3 onclick="koktelindo_ensure_delete_all_orders_box(this)">حذف الطلب</h3>
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

                    <div id='koktelindo_ensure_delete_this_orders_overlay' style='display:none'>
                        <div id='koktelindo_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktelindo_delete_this_orders_function(this, ${index})'>نعم</h6>
                                <h6 onclick='koktelindo_delete_this_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>
                    `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktelindo_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });

            // Set opacity to 1 if there are orders
            koktelindo_delete_all_orders_button.style.display = 'block';
        } else {

            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktelindo_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktelindo_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Set opacity to 1 if there are orders
            koktelindo_delete_all_orders_button.style.display = 'none';
        }
    }

    // Call renderOrders function to initially render orders
    renderOrders();




    // Function to show order details
    function koktelindo_show_order_details_page(orderIndexNumber) {

        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('orders'));
        if (!orders) return; // Exit if there are no orders

        let order = orders[orderIndexNumber];
        if (!order) return; // Exit if the order is not found

        // Create order details HTML content
        let orderDetailsContent = `
            <div id="koktelindo_order_details_text_img">
                <img src="${order.webLogoSource}" alt="كوكتيل-اندو-للتوصيل-من-المطاعم" id="koktelindo_weblogo" title="كوكتيل-اندو-للتوصيل-من-المطاعم"  onclick="koktelindo_show_full_screen_image(this.src)">
            </div>
            <div>
                <h1 class="koktelindo_order_details_title">تفاصيل الطلب رقم ${orderIndexNumber + 1}</h1>
            </div>
            <div id="koktelindo_order_details_text_background">
                <h4>الاسم: ${order.mealName}</h4>
                <h4>الوصف: ${order.mealDetails}</h4>
                <h4>الطلب:</h4>
                ${order.orderText.split('\n').map(line => `<h4>${line}</h4>`).join('')}
                <h4>${order.noteText}</h4>
                <h4>عدد الطلب: ${order.mealAmountNumber}</h4>
                <h4>سعر التوصيل = 20,000 Rp</h4>
                <h4>سعر الطلب = ${order.totalCurrentMealPrice} (بدون سعر التوصيل)</h4>
            </div>
            <div id="koktelindo_koktelindo_order_details_text_bottom_button_div">
                <h5 onclick="koktelindo_hide_order_details_page()">عودة</h5>
                <h5 onclick="koktelindo_ensure_delete_text_orders_box()">حذف الطلب</h5>
            </div>

            <div id='koktelindo_ensure_delete_text_orders_overlay' style='display:none'>
                <div id='koktelindo_ensure_delete_all_orders_div'>
                    <h6>متاكد من حذف هذا الطلب؟</h6>
                    <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                        <h6 onclick='koktelindo_delete_text_orders_function(this, ${orderIndexNumber})'>نعم</h6>
                        <h6 onclick='koktelindo_delete_text_orders_function(this)'>عودة</h6>
                    </div>
                </div>
            </div>
        `;

        // Hide the order list container
        document.getElementById('koktelindo_order_details_div_id').style.display = 'none';

        // Create a new div element to hold the order details content
        let orderDetailsContainer = document.createElement('div');
        orderDetailsContainer.id = 'koktelindo_order_details_text_div';
        orderDetailsContainer.innerHTML = orderDetailsContent;

        // Append the order details content to the order details container
        document.getElementById('koktelindo_order_details_body_id').appendChild(orderDetailsContainer);
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
            let orders = JSON.parse(localStorage.getItem('orders'));

            // Remove the order with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated orders back to localStorage
            localStorage.setItem('orders', JSON.stringify(orders));

            // Check if orders is empty or null
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('orders');

                /* Also Delete The Total price H4 Element */
                document.getElementById('koktelindo_total_order_price_text').innerHTML = '';
            }

            // Refresh the page or update the display to reflect the changes
            // For example, you can re-render the order list
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('success-box');
            document.body.appendChild(successBox);

            // Apply styles to the success box
            successBox.style.position = 'fixed';
            successBox.style.top = '50%';
            successBox.style.left = '50%';
            successBox.style.transform = 'translate(-50%, 100%)';
            successBox.style.padding = '10px';
            successBox.style.backgroundColor = 'white';
            successBox.style.color = 'black';
            successBox.style.borderRadius = '7px';
            successBox.style.textAlign = 'center';
            successBox.style.boxShadow = '0 0 5px 0.5px black';
            successBox.style.transition = 'transform 1.2s, opacity 1.5s'; // Adjusted transition property
            successBox.style.fontSize = '20px'; // Increased font size for the text

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
    }

    /* Function To Create The Final WhatsApp Message */
    koktelindo_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('orders'));
    
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
    
            let orderInfo = `${index + 1}. ${order.mealName}\n`;
            orderInfo += `   - الوصف: ${order.mealDetails}\n`;
            orderInfo += `   - الطلب:\n${orderedText}\n`;
            orderInfo += `   - الملاحظات: ${order.noteText}\n`;
            orderInfo += `   - سعر التوصيل: 20,000 Rp\n`;
            orderInfo += `   - السعر مع التوصيل: ${totalWithDelivery.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n`;
    
            // Push the order information to the array
            orderDetails.push(orderInfo);
        });
    
        // Construct the final message by joining all order details
        let finalMessage = "طلباتك:\n";
        finalMessage += orderDetails.join('');
    
        // Append the grand total to the final message
        finalMessage += `- السعر الإجمالي للطلبات مع التوصيل: ${grandTotal.toLocaleString()} Rp\n`;
        finalMessage += `___________________________________\n`;
        finalMessage += `- تعليمات مهمة!\n`;
        finalMessage += `1- يرجى ارسال موقعك عن طريق الواتس اب\n`;
        finalMessage += `2- الدفع عند الإستلام كاش فقط\n`;
    
        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);
    
        // Construct the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;
    
        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}

/* in Case If There is Any Data in The LocalStorage Then Show The 'koktelindo_meal_order_icon' Icon. if No Data Found Then Hide it*/
if (localStorage.getItem('orders')) {

    // Create Button To Show Orders Page
    let koktelindo_mealOrderIconDiv = document.createElement('div');
    koktelindo_mealOrderIconDiv.id = 'koktelindo_meal_order_icon_div';
    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك.html' id="koktelindo_meal_order_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
    document.body.appendChild(koktelindo_mealOrderIconDiv);
} else {
    /* if There is No Data in The Orders Key Then Check if The 'koktelindo_meal_order_icon_div' Was Visible Then Hide it */
    if (document.getElementById('koktelindo_meal_order_icon_div')) {
        document.getElementById('koktelindo_meal_order_icon_div').style.opacity = '0';
        console.log("Hide Itttt");
    }
}

/* Make The Old Box Unchecked And Only The New Box Checked */
if (document.getElementById("koktelindo_meal_info_section")) {
    koktelindo_uncheckOldBox = function (clickedBoxId) {
        // Get the parent div of the clicked checkbox
        const parentDiv = document.getElementById(clickedBoxId).closest('.koktelindo_meal_info_options_div');

        // Get all checkboxes within the parent div
        const checkboxes = parentDiv.querySelectorAll('input[type="checkbox"]');

        // Uncheck all checkboxes except for the clicked checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.id !== clickedBoxId) {
                checkbox.checked = false;
            }
        });
    };
}

/* Make The TextArea in The koktelindo_meal_info_section Resposnive With The Text Inside */
if (document.getElementById("koktelindo_meal_info_section")) {
    let koktelindo_meal_info_note_textarea = document.querySelectorAll('.koktelindo_meal_info_note_textarea');
    koktelindo_meal_info_note_textarea.forEach(textarea => {
        textarea.addEventListener('keyup', e => {

            textarea.style.height = '50px';

            let scHeight = e.target.scrollHeight;

            textarea.style.height = `${scHeight}px`;
        });
    });
}


















/* Function To Open Menu Nav Bar Using koktelindo_menu_nav Button */
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

/* Function To Open Nav Bar Using koktelindo_nav Button */
if (document.getElementById("koktelindo_nav")) {
    koktelindo_nav.onclick = (event) => {
        event.stopPropagation();
        koktelindo_showNavOptions();
    };
}

/* Function To Close Nav Bar Using Close Button */
if (document.getElementById("koktelindo_close_nav")) {
    koktelindo_close_nav.onclick = (event) => {
        event.stopPropagation();
        koktelindo_hideNavOptions();
    };
}

if (document.getElementById("koktelindo_nav_options")) {
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
if (document.getElementById("koktelindo_go_up_arrow")) {
    window.onscroll = function () {
        if (window.pageYOffset >= koktelindo_nav.offsetTop) {
            koktelindo_go_up_arrow.style.opacity = "1";
        } else {
            koktelindo_go_up_arrow.style.opacity = "0";
        }
    };
}

/* Page Load Header Fade Animation */
if (document.getElementById("koktelindo_header")) {
    setTimeout(function () {
        koktelindo_header.style.opacity = "1";
    }, 100);
}

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
