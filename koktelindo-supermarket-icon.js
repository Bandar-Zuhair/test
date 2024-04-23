/* in Case If There is Any Data in The LocalStorage Then Show The 'koktelindo_order_page_icon' Icon. if No Data Found Then Hide it*/
if (localStorage.getItem('supermarket_orders')) {

    // Create Button To Show Orders Page
    let koktelindo_mealOrderIconDiv = document.createElement('div');
    koktelindo_mealOrderIconDiv.id = 'koktelindo_order_page_icon_div';
    let koktelindo_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/test/طلباتك-من-السوبرماركت.html' id="koktelindo_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktelindo_mealOrderIconDiv.innerHTML = koktelindo_mealOrderIcon;
    document.body.appendChild(koktelindo_mealOrderIconDiv);

} else {
    /* if There is No Data in The Orders Key Then Check if The 'koktelindo_order_page_icon_div' Was Visible Then Hide it */
    if (document.getElementById('koktelindo_order_page_icon_div')) {
        document.getElementById('koktelindo_order_page_icon_div').style.opacity = '0';
    }
}