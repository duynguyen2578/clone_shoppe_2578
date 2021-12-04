const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);


    const sliderMain = $('.slider-main');
    const sliderList = $$('.slider-item');
    const sliderLength = sliderList.length;
    const sliderWidth = sliderList[0].offsetWidth;
    const navDotItems = $$('.slider__nav-item');
    const prevBtn = $('.prevBtn');
    const nextBtn = $('.nextBtn');
    let positionX = 0;
    let index = 0;

    prevBtn.onclick = function () {
        handleSliderChange(0);
    }
    
    nextBtn.onclick = function () {
        handleSliderChange(1);
    }

    // handleSliderChange and dot actions
    function handleSliderChange(condition) {
        if(condition == 1) {
            index++;
            if(index >= sliderLength) {
                index = sliderLength - 1;
                return;
            }

            positionX = positionX - sliderWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }else {
            index--;
            if(index < 0) {
                index = 0;
                return;
            }

            positionX = positionX + sliderWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }
        handleDotActions(index);
    }
    
    // handleDotsChange
    var handleDotActions = function (index) {
        navDotItems.forEach(function (dotitem) {
            dotitem.classList.remove('active');
        })

        navDotItems[index].classList.add('active');
    };

    // dot action click
    navDotItems.forEach(function(dotitem, currentindex) {
        dotitem.addEventListener('click', function () {
            handleDotActions(currentindex);
            
            positionX = -1 * currentindex * sliderWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            // gan lai bien index 
            console.log(currentindex)
            index = currentindex;
        })
    })


    // handleCaruoselImg
    const caruoselMain = $('.image-caruosel-list');
    const caruoselListItems = $$('.caruosel-box-wrapper');
    const caruoselsLength = caruoselListItems.length;
    const caruoselWidth = caruoselListItems[0].offsetWidth;
    const caruoselLength = caruoselListItems[0].length;
    const caruoselNextBtn = $('.caruosel-next-btn');
    const caruoselPrevBtn = $('.caruosel-prev-btn');
    
    caruoselPrevBtn.onclick = function () {
        handleCaruoselImgChange(0);
    }

    caruoselNextBtn.onclick = function () {
        handleCaruoselImgChange(1);
    }
    
    let indexCaruosel = 0;
    let positionCaruosel = 0;
    function handleCaruoselImgChange(condition) {
        if(condition == 1) {
            indexCaruosel++;
            if(indexCaruosel > caruoselListItems.length - 10) {
                indexCaruosel = caruoselListItems.length - 10;
                return;
            }

            positionCaruosel = positionCaruosel - caruoselWidth;
            caruoselMain.style = `transform: translateX(${positionCaruosel}px)`;
        }else {
            indexCaruosel--;
            if(indexCaruosel < 0){
                indexCaruosel = 0;
                return;
            }
            
            positionCaruosel = positionCaruosel + caruoselWidth;
            caruoselMain.style = `transform: translateX(${positionCaruosel}px)`;
        }
    }

    function countDownTimer() {
        const dateTime = new Date('November 30, 2021 00:00:00').getTime();
        const nowTime = new Date().getTime();
        const gap = dateTime - nowTime;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDays = Math.floor(gap / day);
        const textHours = Math.floor((gap % day) / hour);
        const textMinutes = Math.floor((gap % hour) / minute);
        const textSeconds = Math.floor((gap % minute) / second);

        textDays < 10 ? $('.count-down-days-number').innerHTML = `0${textDays}` : $('.count-down-days-number').innerHTML = textDays
        textHours < 10 ? $('.count-down-hours-number').innerHTML = `0${textHours}` : $('.count-down-hours-number').innerHTML = textHours
        textMinutes < 10 ? $('.count-down-minutes-number').innerHTML = `0${textMinutes}` : $('.count-down-minutes-number').innerHTML = textMinutes
        textSeconds < 10 ? $('.count-down-seconds-number').innerHTML = `0${textSeconds}` : $('.count-down-seconds-number').innerHTML = textSeconds
        
    }

    setInterval(countDownTimer, 1000);

        const saleProductMain = $('.flash-sale-product-list-wrapper');
        const saleProductList = $$('.flash-sale-product-item');
        const saleProductWidth = saleProductList[0].offsetWidth;
        const saleProductLength = saleProductList.length;
        const saleProductPrevBtn = $('.flash-sale-prev-btn');
        const saleProductNextBtn = $('.flash-sale-next-btn');
        let positionProductX = 0;
        let indexProduct = 0;
        console.log(saleProductWidth)

    saleProductPrevBtn.onclick = function() {
        handleChangeSaleProducts(0);
    }

    saleProductNextBtn.onclick = function() {
        handleChangeSaleProducts(1);
    }

    
    function handleChangeSaleProducts(condition) {
        if(condition == 1) {
            indexProduct++;
            if(indexProduct >= 1 && index <= 3) {
                saleProductPrevBtn.style = `display: Block`
            }
            if(indexProduct >= 3) {
                indexProduct = 2;
                saleProductNextBtn.style = `display: none`
                return;
            }

            positionProductX = positionProductX - (5 * saleProductWidth);
            saleProductMain.style = `transform: translateX(${positionProductX}px)`;
        }else {
            indexProduct--;
            if(indexProduct < 0) {
                saleProductPrevBtn.style = `display: none`
                indexProduct = 0;
                return;
            }
            
            saleProductNextBtn.style = `display: Block`
            positionProductX = positionProductX + (5 * saleProductWidth);
            saleProductMain.style = `transform: translateX(${positionProductX}px)`;
        }
    }

        const shoppeMallProductMain = $('.shoppe-mall-list-product');
        const shoppeMallProductList = $$('.shoppe-mall-product-item');
        const shoppeMallProductItemWidth = shoppeMallProductList[0].offsetWidth;
        const shoppeMallProductListLength = shoppeMallProductList.length;
        const shoppeMallDotsList = $$('.shoppe-mall__nav-item');
        const shoppeMallPrevBtn = $('.shoppe-mall-prevBtn');
        const shoppeMallNextBtn = $('.shoppe-mall-nextBtn');
        let shoppeMallProductId = 0;

        shoppeMallPrevBtn.onclick = moveToPrevProduct;
        shoppeMallNextBtn.onclick = moveToNextProduct;


    function moveToPrevProduct() {
        shoppeMallProductId--; 
        if(shoppeMallProductId < 0) {
            shoppeMallProductId = 0;
            return;
        }

        shoppeMallProductMain.style = `transform: translateX(${-shoppeMallProductId * shoppeMallProductItemWidth}px)`;
        shoppeMallProductMain.style.transition = '0.7s';
        handleShoppeMallDotChange(shoppeMallProductId);
    }

    function moveToNextProduct() {
        console.log('123')
        shoppeMallProductId++; 
        if(shoppeMallProductId >= shoppeMallProductListLength) {
            shoppeMallProductId = shoppeMallProductListLength - 1;
            return;
        }

        shoppeMallProductMain.style =`transform: translateX(${-shoppeMallProductId * shoppeMallProductItemWidth}px)`;
        shoppeMallProductMain.style.transition = '0.7s';
        handleShoppeMallDotChange(shoppeMallProductId);
    }

    const handleShoppeMallDotChange = (shoppeMallProductId) => {
        shoppeMallDotsList.forEach((shoppeMallDotitem) => {
            shoppeMallDotitem.classList.remove('active');
        })

        shoppeMallDotsList[shoppeMallProductId].classList.add('active');
    }


        const shoppeMallCarouselNextBtn = $('.shoppe-mall-carousel-nextBtn');
        const shoppeMallCarouselPrevBtn = $('.shoppe-mall-carousel-prevBtn');
        const shoppeMallCarouselProductMain = $('.shoppe-mall-list-ofs-carousel-product-main');
        const shoppeMallCarouselProductList = $$('.shoppe-mall-list-ofs-carousel-product-item-box');
        const shoppeMallCarouselProductWidth = shoppeMallCarouselProductList[0].offsetWidth * 4;
        const shoppeMallCarouselProductListLength = shoppeMallCarouselProductList.length;
        let shoppeMallCarouseId = 0;

        shoppeMallCarouselNextBtn.onclick = movetoNextCarouselItem;
        shoppeMallCarouselPrevBtn.onclick = movetoPrevCarouselItem;

    function movetoNextCarouselItem() {
        shoppeMallCarouseId++;
        
        if(shoppeMallCarouseId >= shoppeMallCarouselProductListLength/4) {
            shoppeMallCarouselNextBtn.style.display = 'none'
            shoppeMallCarouseId = shoppeMallCarouselProductListLength/4 - 1;
            return;
        }

        shoppeMallCarouselPrevBtn.style.display = 'block';
        shoppeMallCarouselProductMain.style = `transform: translateX(${-shoppeMallCarouseId * shoppeMallCarouselProductWidth}px)`;
        shoppeMallCarouselProductMain.style.transition = '0.7s';
    }

    function movetoPrevCarouselItem() {
        shoppeMallCarouseId--;
        if(shoppeMallCarouseId < 0) {
            shoppeMallCarouselPrevBtn.style.display = 'none'
            shoppeMallCarouseId = 0;
            return;
        }
        shoppeMallCarouselNextBtn.style.display = 'block';
        shoppeMallCarouselProductMain.style = `transform: translateX(${-shoppeMallCarouseId * shoppeMallCarouselProductWidth}px)`;
        shoppeMallCarouselProductMain.style.transition = '0.7s';
    }

        const shoppeTopTrendingMain = $('.shoppe-top-trending-main');
        const shoppeTopTredingList = $$('.shoppe-top-trend-item');
        const shoppeTopTrendingListLength = shoppeTopTredingList.length;
        const shoppeTopTrendingWidth = shoppeTopTredingList[0].offsetWidth;
        const shoppeTopTredingNextBtn = $('.shoppe-top-trending-nextBtn');
        const shoppeTopTredingPrevBtn = $('.shoppe-top-trending-prevBtn');
        let shoppeTopTrendingId = 0

    shoppeTopTredingPrevBtn.onclick = moveToPrevPage;

    shoppeTopTredingNextBtn.onclick = moveToNextPage;

    function moveToNextPage() {
        shoppeTopTrendingId++;
        if(shoppeTopTrendingId > 2) {
            shoppeTopTrendingId = 2;
            shoppeTopTredingNextBtn.style.display = 'none';
            return;
        }

        shoppeTopTredingPrevBtn.style.display = 'block';
        positionX = -shoppeTopTrendingId * shoppeTopTrendingWidth*6;
        shoppeTopTrendingMain.style.transform = `translateX(${positionX}px)`;
        shoppeTopTrendingMain.style.transition = '2s';
    }

    function moveToPrevPage() {
        shoppeTopTrendingId--;
        if(shoppeTopTrendingId < 0) {
            shoppeTopTrendingId = 0;
            shoppeTopTredingPrevBtn.style.display = 'none';
            return;
        }

        shoppeTopTredingNextBtn.style.display = 'block';
        positionX = -shoppeTopTrendingId * shoppeTopTrendingWidth*6;
        shoppeTopTrendingMain.style.transform = `translateX(${positionX}px)`;
        shoppeTopTrendingMain.style.transition = '2s';
    }
    
    const shoppeRecommendLine = $('.shoppe-recommend-line');
    const shoppeRecommendToday = $('.shoppe-recommend-recommend-today');
    const shoppeRecommendSale11 = $('.shoppe-recommend-sale11');
    const shoppeRecommendTabs = $$('.tab');
    const shoppeRecommendTabActive = $('.tab.active');
    const shoppeReccomendLine = $('.shoppe-recommend-line');
    const shoppeListRecommendProducts = $('#today');
    const shoppeListProducts11 = $('#sale11__11');

    shoppeRecommendLine.style.left = shoppeRecommendToday.offsetLeft + 'px';
    shoppeRecommendLine.style.width = shoppeRecommendToday.offsetWidth + 'px';
    
    shoppeRecommendTabs.forEach(function(tab, index) {
        tab.onclick = function() {
            if(tab.className.includes('shoppe-recommend-recommend-today')) {
                shoppeListRecommendProducts.style.display = 'block';
                shoppeListProducts11.style.display = 'none';
            } 

            if (tab.className.includes('shoppe-recommend-sale11')) {
                shoppeListProducts11.style.display = 'block';
                shoppeListRecommendProducts.style.display = 'none';
            }

            shoppeRecommendTabActive.classList.remove('active');
            
            shoppeReccomendLine.style.left = this.offsetLeft + 'px';
            shoppeReccomendLine.style.width = this.offsetWidth + 'px';
            tab.classList.add('active');
        }
    })