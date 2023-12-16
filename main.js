let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Sharks = document.querySelector('.Sharks');
window = onscroll = function () {
    let value = this.scrollY;
    console.log(value)
    //  عشان لما اعمل سكرول بالماوس يطبعلي انا واقف فين علي محور الواي بالرقم بظبط وممكن افتح الكونسول عشان اشوف بنفسي
    stars.style.left = value + 'px';
    // هنا هقدر احرك النجوم ناحية الشمال اول لما اعمل سكرول عشان انا مخليها ابسليوت فهقدر اتحكم في حركتها
    moon.style.top = value * 4 + 'px';
    // كده لو عملت سكرول لتحت القمر هينزل لتحت معايا لحد ما يختفي ورا الصورة
    // انا ضربت القيمة الي جيالي في 4 عشان ينزل بشكل اسرع ويبقي ثلث 
    mountains3.style.top = value * 2 + 'px';
    // هنا اخلي اخر جبل الي تحت القمر بينزل معايا وانا بعمل اسكرول بس هخليه بسرعة اقل 
    mountains3.style.top = value * 1.5 + 'px';
    // نفس الي عملته في اخر جبل هعملة في الجبل التاني بس هقلل سرعته
    river.style.top = value + 'px';
    // هنا خليت النهر ينزل معايا لما اعمل سكرول بس بنفس سرعته عادي 
    boat.style.top = value + 'px';
    // كده المركب هتنزل لما اعمل سكرول لتحت وبنفس سرعة النهر عشان المنطقية
    boat.style.left = value * 3 + 'px';
    // هنا خليت المركب تتحرك وهي بتنزل لتحت وبسرعة عشان تتحرك اسرع ما بتنزل 
    Sharks.style.fontSize = value + 'px';
    // هنا خليت لما بنزل سكرول لتحت الكلمة الي في النص حجمها يكبر معايا
    if (scrollY >= 88) {
        Sharks.style.fontSize = 88 + 'px';
        // هنا خليت الكلمة تكبر لحد الحجم الي انا عايزها تقف عنده وانا شايفة مناسب بدل ما تفضل تكبر الي ما لا نهاية كده 
        Sharks.style.position = 'fixed';
        // خليته فيكسد عشان لما يوصل للنص وبالحكم الي خليته يقف عنده يبقي متثبت في الشاشه ميطلعش فوق اوي 
        if (scrollY >= 344) {
            Sharks.style.display = 'none';
            // هنا خليت الكلمة لما تنزل لتحت ورا الجبل تختفي عشان متكملش معايا لتحت وتبقي ورا الكلام 
        }
        else {
            Sharks.style.display = 'block';
            //  غير كده هيخلي الكلمة تفضل باينة عادي طلاما معدتش الجبل عشان لما اطلع تاني بالماوس تفضل باينه
        }
        if (scrollY >= 159) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
            // كده انا خلبت لما انزل بالسكرول لتحت والقمر يختفي السماء بالنجوم لونهم يبقي نهار 

        }

    }




}