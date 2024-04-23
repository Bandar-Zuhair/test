/* How To Add Villa?
   Make Sure To Enter The All Info Needed inside the Cards Array And The Card Details Array
   Make Sure To Enter The SAME 'Pass' Text To Both 'Cards_Array' And 'Cards_Details_Array'
   (The Pass Text Should Go In Order Of The English Alphabet)
   Make Sure To FOCUS On The Spellings While Entering Each Info in ENGLISH
*/

/* How To Remove Villa?
   Make Sure To Remove The Villa From The Cards Array And The Card Details Array
*/

/* 
Filtering Keywords To Copy And Paste (MUST BE THE SAME):

five_million_and_less
four_million_and_less
three_million_and_less
two_million_and_less
one_million_and_less

inside
outside

all_people
family

with_pool
without_pool
*/

/* Cisarua Card Data Create */
let cards_Array_Cisarua = [
    {
        pass: "cisarua_a",
        image: "صور-الفلل/almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "1,450,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_ab",
        image: "صور-الفلل/taxas1_choprial/2.jpg",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "اربعة مليون وخمس مئة الف روبية باليوم",
        IDRprice: "4,500,000 Rp باليوم",
        filterPrice: "five_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abc",
        image: "صور-الفلل/real_choprial/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "سبع مية وخمسين الف روبية باليوم",
        IDRprice: "750,000 Rp باليوم",
        filterPrice: "one_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcd",
        image: "صور-الفلل/harizbon_choprial/1.JPG",
        location: "بداخل تشوبريال تشوكلت",
        IDRprice: "مليون وثلاث مئة وخمسين الف روبية باليوم",
        IDRprice: "1,350,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcde",
        image: "صور-الفلل/marseilia_v4/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdef",
        image: "صور-الفلل/marina_v2/1.JPG",
        location: "بداخل تشوبريال",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefg",
        image: "صور-الفلل/marina_c1/1.JPG",
        location: "بداخل تشوبريال",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefgh",
        image: "صور-الفلل/perdana_6/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghi",
        image: "صور-الفلل/perdana_7/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghij",
        image: "صور-الفلل/amanah_101/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghijk",
        image: "صور-الفلل/perdana_3/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghijkl",
        image: "صور-الفلل/perdana_2/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "all_people",
        filterPool: "with_pool",
    },
    {
        pass: "cisarua_abcdefghijklm",
        image: "صور-الفلل/golf_tulip/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "family",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcdefghijklmn",
        image: "صور-الفلل/golf_adenium/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "لم يتم تحديد السعر بعد",
        filterPrice: "one_million_and_less",
        filterPlace: "inside",
        filterPeople: "family",
        filterPool: "without_pool",
    },
    {
        pass: "cisarua_abcdefghijklmno",
        image: "صور-الفلل/nn/1.JPG",
        location: "خلف مطعم بافقيه",
        IDRprice: "700,000 روبية",
        filterPrice: "one_million_and_less",
        filterPlace: "outside",
        filterPeople: "all_people",
        filterPool: "without_pool",
    },
];
/* Cipanas Card Data Create */
let cards_Array_Cipanas = [
    {
        pass: "cipanas_a",
        image: "صور-الفلل/almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "1,450,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cipanas_a",
        image: "صور-الفلل/almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "1,450,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cipanas_a",
        image: "صور-الفلل/almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "1,450,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
    {
        pass: "cipanas_a",
        image: "صور-الفلل/almadina_baFqih/1.jpg",
        location: "خلف مطعم بافقيه",
        IDRprice: "1,450,000 Rp باليوم",
        filterPrice: "two_million_and_less",
        filterPlace: "outside",
        filterPeople: "family",
        filterPool: "with_pool",
    },
];

/* Cisarua Villa Details Create */
let cards_Details_Array_Cisarua = [
    {
        pass: "cisarua_a",
        video: "صور-الفلل/almadina_baFqih/video.mp4",
        imgAraay: ["صور-الفلل/almadina_baFqih/1.jpg", "صور-الفلل/almadina_baFqih/2.jpg", "صور-الفلل/almadina_baFqih/3.jpg", "صور-الفلل/almadina_baFqih/4.jpg", "صور-الفلل/almadina_baFqih/5.jpg", "صور-الفلل/almadina_baFqih/6.jpg", "صور-الفلل/almadina_baFqih/7.jpg", "صور-الفلل/almadina_baFqih/8.jpg", "صور-الفلل/almadina_baFqih/9.jpg", "صور-الفلل/almadina_baFqih/10.jpg", "صور-الفلل/almadina_baFqih/11.jpg", "صور-الفلل/almadina_baFqih/12.jpg",],
        location: "فيلا ثلاث غرف خلف مطعم بافقيه",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه في كل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - برادة مياه+تلفزيون بلازما+جلسة خارجية+مسبح خاص+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "1,450,000 روبيه باليوم",
        SARprice: "حوالي 369 ريال سعودي باليوم",
        USDprice: "حوالي 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_ab",
        video: "صور-الفلل/taxas1_choprial/video.mp4",
        imgAraay: ["صور-الفلل/taxas1_choprial/2.jpg", "صور-الفلل/taxas1_choprial/3.jpg", "صور-الفلل/taxas1_choprial/4.jpg", "صور-الفلل/taxas1_choprial/5.jpg", "صور-الفلل/taxas1_choprial/6.jpg", "صور-الفلل/taxas1_choprial/7.jpg", "صور-الفلل/taxas1_choprial/8.jpg", "صور-الفلل/taxas1_choprial/9.jpg", "صور-الفلل/taxas1_choprial/10.jpg", "صور-الفلل/taxas1_choprial/11.jpg", "صور-الفلل/taxas1_choprial/12.jpg", "صور-الفلل/taxas1_choprial/13.jpg", "صور-الفلل/taxas1_choprial/14.jpg", "صور-الفلل/taxas1_choprial/15.jpg", "صور-الفلل/taxas1_choprial/16.jpg", "صور-الفلل/taxas1_choprial/17.jpg", "صور-الفلل/taxas1_choprial/18.jpg", "صور-الفلل/taxas1_choprial/19.jpg", "صور-الفلل/taxas1_choprial/20.jpg", "صور-الفلل/taxas1_choprial/21.jpg", "صور-الفلل/taxas1_choprial/22.jpg",],
        location: "فيلا ستة غرف بداخل منطقة تشوبريال تشوكلت",
        description: "ليست بداخل مجمع+ليست للعوائل فقط+في الدور الاول صالة كبيرة+غرفتين نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخ+في الدور الثاني صالة كبيرة+اربع غرف نوم مع مكيف مركزي ودورة مياه لكل غرفة+مطبخين+طاولة بلياردو+جلسة خارجية+مسبح خاص+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "4,500,000 روبية باليوم",
        SARprice: "حوالي 369 ريال سعودي باليوم",
        USDprice: "حوالي 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abc",
        video: "real_choprial/video.mp4",
        imgAraay: ["صور-الفلل/real_choprial/1.JPG", "صور-الفلل/real_choprial/2.jpg", "صور-الفلل/real_choprial/3.jpg", "صور-الفلل/real_choprial/4.jpg", "صور-الفلل/real_choprial/5.jpg", "صور-الفلل/real_choprial/6.jpg", "صور-الفلل/real_choprial/7.jpg", "صور-الفلل/real_choprial/8.jpg", "صور-الفلل/real_choprial/9.jpg", "صور-الفلل/real_choprial/10.jpg", "صور-الفلل/real_choprial/11.jpg",],
        location: "فيلا ثلاث غرف بداخل منطقة تشوبريال تشوكلت",
        description: "ليست بداخل مجمع+ليست للعوائل فقط+صالة+غرفتين نوم بسرير مزدوج مع دورة مياه لكل غرفة+مطبخ - ثلاجة صغيره - طاولة طعام+تلفزيون بلازما مع سماعات+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة جيده+منطقة آمنة",
        IDRprice: "750,000 روبية باليوم",
        SARprice: "حوالي 369 ريال سعودي باليوم",
        USDprice: "حوالي 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abcd",
        video: "real_choprial/video.mp4",
        imgAraay: ["صور-الفلل/harizbon_choprial/1.JPG", "صور-الفلل/harizbon_choprial/2.JPG", "صور-الفلل/harizbon_choprial/3.JPG", "صور-الفلل/harizbon_choprial/4.JPG", "صور-الفلل/harizbon_choprial/5.JPG", "صور-الفلل/harizbon_choprial/6.JPG",],
        location: "فيلا ثلاث غرف بداخل منطقة تشوبريال تشوكلت",
        description: "ليست باخل مجمع+ليست للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج مع دورة مياه لكل غرفة+مطبخ+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة جيده+منطقة جيده",
        IDRprice: "مليون وثلاث مئة وخمسين الف روبية باليوم",
        SARprice: "حوالي 369 ريال سعودي باليوم",
        USDprice: "حوالي 94 دولار امريكي باليوم",
    },
    {
        pass: "cisarua_abcde",
        video: "صور-الفلل/marseilia_v4/video.mp4",
        imgAraay: ["صور-الفلل/marseilia_v4/1.JPG", "صور-الفلل/marseilia_v4/2.JPG", "صور-الفلل/marseilia_v4/3.JPG", "صور-الفلل/marseilia_v4/4.JPG", "صور-الفلل/marseilia_v4/5.JPG", "صور-الفلل/marseilia_v4/6.JPG", "صور-الفلل/marseilia_v4/7.JPG", "صور-الفلل/marseilia_v4/8.JPG", "صور-الفلل/marseilia_v4/9.JPG", "صور-الفلل/marseilia_v4/10.JPG", "صور-الفلل/marseilia_v4/11.JPG",],
        location: "فيلا اربع غرف خلف مطعم بافقيه للعوائل فقط",
        description: "بداخل مجمع+للعوائل فقط+في الدور الاول صالة كبيرة مع دورة مياه وغسالة ملابس+غرفة نوم بسرير مزدوج+مكيف مركزي ودورة مياه+سخان مياه في دورة المياه+مطبخ+تلفزيون بلازما مع سماعات+مسبح خاص+في الدور الثاني ممر جميل+ثلاث غرف نوم بسرير مزدوج مع مكيف مركزي ودورة مياه لكل غرفة+سخان مياه لكل دورة مياه+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع رفع صوت الاغاني من بعد الساعة 12 ليلا+ممنوع استخدام الالعاب النارية",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdef",
        video: "صور-الفلل/marina_v2/video.mp4",
        imgAraay: ["صور-الفلل/marina_v2/1.JPG", "صور-الفلل/marina_v2/2.JPG", "صور-الفلل/marina_v2/3.JPG", "صور-الفلل/marina_v2/4.JPG", "صور-الفلل/marina_v2/5.JPG", "صور-الفلل/marina_v2/6.JPG", "صور-الفلل/marina_v2/7.JPG", "صور-الفلل/marina_v2/8.JPG", "صور-الفلل/marina_v2/9.JPG", "صور-الفلل/marina_v2/10.JPG", "صور-الفلل/marina_v2/11.JPG", "صور-الفلل/marina_v2/12.JPG", "صور-الفلل/marina_v2/13.JPG", "صور-الفلل/marina_v2/14.JPG", "صور-الفلل/marina_v2/15.JPG", "صور-الفلل/marina_v2/16.JPG",],
        location: "فيلا اربع غرف بداخل منطقة تشوبريال",
        description: "بداخل مجمع+ليست للعوائل فقط+الدور الاول صالة كبيرة ودورة مياه مع غسالة+مكواة ملابس+غرفة نوم بسرير مزدوج+مكيف مركزي ودورة مياه+مطبخ - ثلاجة - مايكرويف+تلفزيون بلازما مع سماعات+مسبح خاص+في الدور الثاني صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع رفع صوت الاغاني من بعد الساعة 12 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefg",
        video: "صور-الفلل/marina_c1/video.mp4",
        imgAraay: ["صور-الفلل/marina_c1/1.JPG", "صور-الفلل/marina_c1/2.JPG", "صور-الفلل/marina_c1/3.JPG", "صور-الفلل/marina_c1/4.JPG", "صور-الفلل/marina_c1/5.JPG", "صور-الفلل/marina_c1/6.JPG", "صور-الفلل/marina_c1/7.JPG",],
        location: "فيلا غرفتين بداخل منطقة تشوبريال",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+غرفتين نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام+تلفزيون بلازما+مسبح مشترك مع الفيلا العلوية+جلسة خارجية+مطله على منظر جميل+انترنت مجاني خاص+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع رفع صوت الاغاني من بعد الساعة 12 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefgh",
        video: "صور-الفلل/perdana_6/video.mp4",
        imgAraay: ["صور-الفلل/perdana_6/1.JPG", "صور-الفلل/perdana_6/2.JPG", "صور-الفلل/perdana_6/3.JPG", "صور-الفلل/perdana_6/4.JPG", "صور-الفلل/perdana_6/5.JPG", "صور-الفلل/perdana_6/6.JPG", "صور-الفلل/perdana_6/7.JPG", "صور-الفلل/perdana_6/8.JPG", "صور-الفلل/perdana_6/9.JPG", "صور-الفلل/perdana_6/10.JPG", "صور-الفلل/perdana_6/11.JPG", "صور-الفلل/perdana_6/12.JPG",],
        location: "فيلا اربع غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+اربع غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام - برادة مويه - معدات الشواء+تلفزيون بلازما+مسبح خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفه داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghi",
        video: "صور-الفلل/perdana_7/video.mp4",
        imgAraay: ["صور-الفلل/perdana_7/1.JPG", "صور-الفلل/perdana_7/2.JPG", "صور-الفلل/perdana_7/3.JPG", "صور-الفلل/perdana_7/4.JPG", "صور-الفلل/perdana_7/5.JPG", "صور-الفلل/perdana_7/6.JPG", "صور-الفلل/perdana_7/7.JPG", "صور-الفلل/perdana_7/8.JPG", "صور-الفلل/perdana_7/9.JPG", "صور-الفلل/perdana_7/10.JPG", "صور-الفلل/perdana_7/11.JPG", "صور-الفلل/perdana_7/12.JPG", "صور-الفلل/perdana_7/13.JPG",],
        location: "فيلا اربع غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+صالة+اربع غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - طاولة طعام - برادة مويه - معدات الشواء+تلفزيون بلازما+مسبح خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفه داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghij",
        video: "صور-الفلل/amanah_101/video.mp4",
        imgAraay: ["صور-الفلل/amanah_101/1.JPG", "صور-الفلل/amanah_101/2.JPG", "صور-الفلل/amanah_101/3.JPG", "صور-الفلل/amanah_101/4.JPG", "صور-الفلل/amanah_101/5.JPG", "صور-الفلل/amanah_101/6.JPG", "صور-الفلل/amanah_101/7.JPG", "صور-الفلل/amanah_101/8.JPG", "صور-الفلل/amanah_101/9.JPG", "صور-الفلل/amanah_101/10.JPG", "صور-الفلل/amanah_101/11.JPG", "صور-الفلل/amanah_101/12.JPG", "صور-الفلل/amanah_101/13.JPG", "صور-الفلل/amanah_101/14.JPG", "صور-الفلل/amanah_101/15.JPG",],
        location: "فيلا ثلاث غرف خلف مطعم بافقيه",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+دورة مياه+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+غسالة+مكواة ملابس+مطبخ - ثلاجة - برادة مويه+طاولة طعام+تلفزيون بلازما+مسبح مشترك خاص+جلسة خارجية+مطله على منظر جميل+انترنت مجاني خاص+مواقف سيارات+خدمة ممتازة+منطقة آمنة",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghijk",
        video: "صور-الفلل/perdana_3/video.mp4",
        imgAraay: ["صور-الفلل/perdana_3/1.JPG", "صور-الفلل/perdana_3/2.JPG", "صور-الفلل/perdana_3/3.JPG", "صور-الفلل/perdana_3/4.JPG", "صور-الفلل/perdana_3/5.JPG", "صور-الفلل/perdana_3/6.JPG", "صور-الفلل/perdana_3/7.JPG", "صور-الفلل/perdana_3/8.JPG", "صور-الفلل/perdana_3/9.JPG", "صور-الفلل/perdana_3/10.JPG", "صور-الفلل/perdana_3/11.JPG", "صور-الفلل/perdana_3/12.JPG", "صور-الفلل/perdana_3/13.JPG", "صور-الفلل/perdana_3/14.JPG", "صور-الفلل/perdana_3/15.JPG", "صور-الفلل/perdana_3/16.JPG", "صور-الفلل/perdana_3/17.JPG", "صور-الفلل/perdana_3/18.JPG", "صور-الفلل/perdana_3/19.JPG",],
        location: "فيلا خمس غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+في الدور الاول صالة+دورة مياه+غرفتين نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+غسالة ملابس+مطبخ+ثلاجة+برادة موية+تلفزيون بلازما+مسبح خاص+جلسة خارجية+في الدور الثاني صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+جلسة خارجية+مطله على مظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفة داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghijkl",
        video: "صور-الفلل/perdana_2/video.mp4",
        imgAraay: ["صور-الفلل/perdana_2/1.JPG", "صور-الفلل/perdana_2/2.JPG", "صور-الفلل/perdana_2/3.JPG", "صور-الفلل/perdana_2/4.JPG", "صور-الفلل/perdana_2/5.JPG", "صور-الفلل/perdana_2/6.JPG", "صور-الفلل/perdana_2/7.JPG", "صور-الفلل/perdana_2/8.JPG", "صور-الفلل/perdana_2/9.JPG", "صور-الفلل/perdana_2/10.JPG", "صور-الفلل/perdana_2/11.JPG", "صور-الفلل/perdana_2/12.JPG", "صور-الفلل/perdana_2/13.JPG", "صور-الفلل/perdana_2/14.JPG", "صور-الفلل/perdana_2/15.JPG", "صور-الفلل/perdana_2/16.JPG", "صور-الفلل/perdana_2/17.JPG",],
        location: "فيلا خمس غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+ليست للعوائل فقط+في الدور الاول صالة+مغسلة يد+غرفتين نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+غسالة ملابس+مطبخ+ثلاجة+طاولة طعام+تلفزيون بلازما+مسبح خاص+جلسة خارجية+في الدور الثاني صالة+ثلاث غرف نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+جلسة خارجية+مطله على مظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+ممنوع استخدام الالعاب النارية+ممنوع ادخال الحيوانات الاليفة داخل الفيلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghijklm",
        video: "صور-الفلل/golf_tulip/video.mp4",
        imgAraay: ["صور-الفلل/golf_tulip/1.JPG", "صور-الفلل/golf_tulip/2.JPG", "صور-الفلل/golf_tulip/3.JPG", "صور-الفلل/golf_tulip/4.JPG", "صور-الفلل/golf_tulip/5.JPG", "صور-الفلل/golf_tulip/6.JPG", "صور-الفلل/golf_tulip/7.JPG", "صور-الفلل/golf_tulip/8.JPG", "صور-الفلل/golf_tulip/9.JPG", "صور-الفلل/golf_tulip/10.JPG", "صور-الفلل/golf_tulip/11.JPG", "صور-الفلل/golf_tulip/12.JPG", "صور-الفلل/golf_tulip/13.JPG",],
        location: "فيلا اربع غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+للعوائل فقط+في الدور الاول صالة+مروحة سقفية+غرفتين نوم بسرير مزدوج+مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ+ثلاجة+طاولة طعام+مكروويف+تلفزيون بلازما+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+خدمة ممتازة+منطقة آمنة+مواقف سيارات+ممنوع استخدام الالعاب النارية من بعد الساعة 8 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghijklmn",
        video: "صور-الفلل/golf_adenium/video.mp4",
        imgAraay: ["صور-الفلل/golf_adenium/1.JPG", "صور-الفلل/golf_adenium/2.JPG", "صور-الفلل/golf_adenium/3.JPG", "صور-الفلل/golf_adenium/4.JPG", "صور-الفلل/golf_adenium/5.JPG", "صور-الفلل/golf_adenium/6.JPG", "صور-الفلل/golf_adenium/7.JPG", "صور-الفلل/golf_adenium/8.JPG", "صور-الفلل/golf_adenium/9.JPG", "صور-الفلل/golf_adenium/10.JPG",],
        location: "فيلا ثلاث غرف خلف مطعم بافقيه",
        description: "بداخل مجمع+للعوائل فقط+صالة+مروحة سقفية+ثلاث غرف نوم بسرير مزدوج+مروحة ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ+ثلاجة+طاولة طعام+مكروويف+تلفزيون بلازما+جلسة خارجية+مطله على منظر جميل+انترنت مجاني+خدمة ممتازة+منطقة آمنة+مواقف سيارات+ممنوع استخدام الالعاب النارية من بعد الساعة 8 ليلا",
        IDRprice: "لم يتم تحديد السعر بعد",
        SARprice: "لم يتم تحديد السعر بعد",
        USDprice: "لم يتم تحديد السعر بعد",
    },
    {
        pass: "cisarua_abcdefghijklmno",
        video: "صور-الفلل/nn/video.mp4",
        imgAraay: ["صور-الفلل/nn/1.JPG", "صور-الفلل/nn/2.JPG", "صور-الفلل/nn/3.JPG", "صور-الفلل/nn/4.JPG", "صور-الفلل/nn/5.JPG", "صور-الفلل/nn/6.JPG", "صور-الفلل/nn/7.JPG", "صور-الفلل/nn/8.JPG", "صور-الفلل/nn/9.JPG", "صور-الفلل/nn/10.JPG", "صور-الفلل/nn/11.JPG",],
        location: "فيلا ثلاث غرف خلف مطعم بافقيه",
        description: "ليست بداخل مجمع+ليست للعوائل فقط+صالة+مغسلة يد+ثلاث غرف نوم بسرير مزدوج+دورتين مياه+سخان مياه لكل دورة مياه+مطبخ+ثلاجة+طاولة طعام+برادة موية+تلفزيون صغير+مدفأة+جلسة خارجية+انترنت مجاني+مواقف سيارات+خدمة جيدة+منطقة جيدة+ممنوع استخدام الالعاب النارية",
        IDRprice: "700,000 روبية باليوم",
        SARprice: "تقريبا 177 ريال سعودي باليوم",
        USDprice: "تقريبا 48 دولار امريكي باليوم",
    },
];
/* Cipanas Villa Details Create */
let cards_Details_Array_Cipanas = [
    {
        pass: "cipanas_a",
        video: "صور-الفلل/almadina_baFqih/video.mp4",
        imgAraay: ["صور-الفلل/almadina_baFqih/1.jpg", "صور-الفلل/almadina_baFqih/2.jpg", "صور-الفلل/almadina_baFqih/3.jpg", "صور-الفلل/almadina_baFqih/4.jpg", "صور-الفلل/almadina_baFqih/5.jpg", "صور-الفلل/almadina_baFqih/6.jpg", "صور-الفلل/almadina_baFqih/7.jpg", "صور-الفلل/almadina_baFqih/8.jpg", "صور-الفلل/almadina_baFqih/9.jpg", "صور-الفلل/almadina_baFqih/10.jpg", "صور-الفلل/almadina_baFqih/11.jpg", "صور-الفلل/almadina_baFqih/12.jpg",],
        location: "فيلا ثلاث غرف خلف مطعم عربي",
        description: "ليست بداخل مجمع+للعوائل فقط+صالة+ثلاث غرف نوم بسرير مزدوج مع مكيف مركزي ودورة مياه لكل غرفة+سخان مياه في كل دورة مياه+مطبخ - ثلاجة - برادة مياه+تلفزيون بلازما+جلسة خارجية+مسبح+حديقة بسيطة+مطله على منظر جميل+انترنت مجاني+مواقف سيارات+خدمة ممتازة+منطقة آمنة+تواصل معنا للمزيد من المعلومات",
        IDRprice: "مليون واربع مئة وخمسين روبيه يوميا",
    },
];














