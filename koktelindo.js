/* How To Manage This Website? */







/* Just For Test To Send The Spicific text to WhatsApp */
sendOrderToMyNumber = function () {
    let orderDetails = "3 ساندويتشات من كنتاكي\n5 مشروبات كوكاكولا\n2 ايسكريم شوكلاته";

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






/* in Case If There is Any Data in The LocalStorage Then Show The 'koktelindo_meal_order_icon' Icon */
if (localStorage.getItem('orderMessage')) {
    // Create Button To Show Orders Page
    let koktelindo_mealOrderIconDiv = document.createElement('div');
    koktelindo_mealOrderIconDiv.id = 'koktelindo_meal_order_icon_div';
    koktelindo_mealOrderIconDiv.style.opacity = '0';
    let koktelindo_mealOrderIcon = `<a href='طلباتك.html' id="koktelindo_meal_order_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
    document.body.appendChild(koktelindo_mealOrderIconDiv);

    // Show The 'koktelindo_meal_order_icon_div' Element By Changing The Opacity Value 
    document.getElementById('koktelindo_meal_order_icon_div').style.opacity = '1';
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
    koktelindo_mealOrderIconDiv.style.opacity = '0';
    let koktelindo_mealOrderIcon = `<a href='طلباتك.html' id="koktelindo_meal_order_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
    function koktelindo_createOrderText() {
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

        // Prepare the console message
        let consoleMessage = 'اسم الوجبة: ' + mealName + '\n';
        consoleMessage += 'تفاصيل الوجبة: ' + mealDetails + '\n';
        consoleMessage += '\nالطلب:\n'; // Add "The Order is" here
        consoleMessage += orderText;
        consoleMessage += '\nالعدد: ' + mealAmountNumber; // Add mealAmountNumber here
        if (noteText !== '') {
            consoleMessage += '\nملاحظة: ' + noteText;
        }
        consoleMessage += '\nالسعر الإجمالي: ' + totalCurrentMealPrice + ' Rp';

        // Get existing orders from localStorage or initialize as an empty array if not present
        let existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

        // Append the new order to the existing orders array
        existingOrders.push(consoleMessage);

        // Save the updated orders back to localStorage
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        // Display the order text in the console
        console.log(consoleMessage);

        // Show The 'koktelindo_meal_order_icon_div' Element By Changing The Opacity Value 
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

            // Remove the element from the DOM after the fade-out animation completes
            setTimeout(() => {
                successBox.remove();
            }, 9000); // Wait for the fade-out transition to complete (1.5s)
        }, 800); // Wait for 3 seconds before triggering fade-out




        // Print all data in localStorage to the console after 1 second
        setTimeout(() => {
            let allOrders = JSON.parse(localStorage.getItem('orders'));
            let totalPrices = 0;

            console.log("All Orders:");
            allOrders.forEach((order, index) => {
                console.log(order);
                // Add a break line after each order, except for the last one
                if (index < allOrders.length - 1) {
                    console.log(""); // Empty line
                }

                // Extract the total price from the order and add it to the totalPrices variable
                let match = order.match(/السعر الإجمالي: ([\d,]+(\.\d+)?)/);
                if (match && match[1]) {
                    totalPrices += parseFloat(match[1].replace(/,/g, ''));
                }
            });

            // Display the total price once at the end of the displayed data
            console.log('Rp ' + "السعر النهائي لجميع الطلبات: " + totalPrices.toLocaleString());

            /* // Clear localStorage after 5 seconds
            setTimeout(() => {
                localStorage.removeItem('orders');
                console.log("LocalStorage Cleared");
            }, 5000); */

        }, 1000);
    }

};

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



/* Function To Create Order Details Page Content */
if (document.getElementById("koktelindo_order_details_body_id")) {

    let all_order_page_content = `
    
        <div class="koktelindo_order_details_div" id="koktelindo_order_details_div_id" style="display: flex;">
            <h1 class="koktelindo_order_details_title">طلباتك جاهزة للإرسال</h1>

            <div class='koktelindo_order_finished_card_area' id='koktelindo_order_finished_card_area_id'>

                <div id='koktelindo_order_finished_card'></div>

            </div>

            <div>
                <h4 id='koktelindo_delete_all_orders_button' onclick='koktelindo_ensure_delete_all_orders_function();'>حذف جميع الطلبات</h4>
            </div>

            <div id="koktelindo_koktelindo_order_details_bottom_button_div">
                <h4 id="koktelindo_order_details_final_price_title">السعر الإجمالي لجميع الطلبات 540,000 Rp (مع سعر التوصيل)
                </h4>
                <h4 id='koktelindo_sendOrderButton' onclick="koktelindo_createFinalWhatsAppMessage()">ارسال الطلبات عبر الواتس
                </h4>
            </div>

            <a href="توصيل-مطاعم.html" class="koktelindo_full_screen_overlay_exit_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> ..قسم المطاعم</a>




            <div id='koktelindo_ensure_delete_all_orders_overlay' style='display:none'>
                <div id='koktelindo_ensure_delete_all_orders_div'>
                    <h6>متاكد من حذف جميع الطلبات؟</h6>

                    <div id='koktelindo_ensure_delete_all_orders_answer_div'>
                        <h6 onclick='koktelindo_delete_all_orders_function(this)'>نعم</h6>
                        <h6 onclick='koktelindo_delete_all_orders_function(this)'>عودة</h6>
                    </div>
                </div>
            </div>
        </div>
    
    `;

    koktelindo_order_details_body_id.innerHTML = all_order_page_content;


    if (localStorage.getItem('orders')) {
        // Create inner 'koktelindo_order_finished_card' Content

        let localStorageOrderCardContent = `
        
            <h2>طلب رقم 1</h2>
            <img src="koktelindo_store_card_logo/1.png" alt''>

            <div>
                <h3 onclick="koktelindo_show_order_details_page()">سعر التوصيل = 15,000 Rp</h3>
            </div>

            <div id='koktelindo_orderFinished_info_and_delete'>
                <h3 onclick="koktelindo_show_order_details_page()">تفاصيل الطلب</h3>
                <h3>حذف الطلب</h3>
            </div>

        `

        document.getElementById('koktelindo_order_finished_card').innerHTML = localStorageOrderCardContent;

    } else {
        let localStorageOrderCardContent = `
        
            <h2 id='koktelindo_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h2>

        `
        document.getElementById('koktelindo_order_finished_card').innerHTML = localStorageOrderCardContent;

    }


    koktelindo_ensure_delete_all_orders_function = function () {
        document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'block';
    }


    koktelindo_delete_all_orders_function = function (clickedDeleteAnswer) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            document.getElementById('koktelindo_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('orders');

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


            setTimeout(() => { location.reload(); }, 1400);
        }
    }
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








/* Function To Show or Hide Order Details in The Screen As Test */
if (document.getElementById("koktelindo_order_finished_card_area")) {
    koktelindo_show_order_details_page = function () {

        if (koktelindo_order_details_div_id.style.display === 'flex') {

            koktelindo_order_details_div_id.style.display = 'none';
            koktelindo_order_details_text_div.style.display = 'block';
        } else {

            koktelindo_order_details_div_id.style.display = 'flex';
            koktelindo_order_details_text_div.style.display = 'none';
        }
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
