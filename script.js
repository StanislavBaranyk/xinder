var featuredSlider = tns({
    container: '.featured-slider',
    items: 5,
    slideBy: '2',

    responsive: {

        0: {
            fixedWidth: 237,
            gutter: 24,
            controls: false,
            nav: false,
        }
    }
});

var latestSlider = tns({
    container: '.latest-masterpieces-slider',
    items: 4,
    slideBy: '2',

    responsive: {

        0: {
            fixedWidth: 300,
            gutter: 24,
            controls: false,
            nav: false,
        },

        1200: {
            controls: true,
            controlsText: ['', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M13.314 12.071L8.36399 7.12098C8.18184 6.93238 8.08104 6.67978 8.08332 6.41758C8.0856 6.15538 8.19077 5.90457 8.37618 5.71916C8.56158 5.53375 8.8124 5.42859 9.07459 5.42631C9.33679 5.42403 9.58939 5.52482 9.77799 5.70698L15.435 11.364C15.6225 11.5515 15.7278 11.8058 15.7278 12.071C15.7278 12.3361 15.6225 12.5905 15.435 12.778L9.77799 18.435C9.58939 18.6171 9.33679 18.7179 9.07459 18.7157C8.8124 18.7134 8.56158 18.6082 8.37618 18.4228C8.19077 18.2374 8.0856 17.9866 8.08332 17.7244C8.08104 17.4622 8.18184 17.2096 8.36399 17.021L13.314 12.071Z" fill="#475569"/>
</svg>`],
        }

    }
});


var incredibleSlider = tns({
    container: '.incredible-slider',
    autoWidth: true,
    gutter: 24,
    slideBy: 1,
    items: 3,
    responsive: {

        0: {
            controls: false,
            nav: false,
        },

        992: {
            center: true,
            fixedWidth: 380,
        },
        1200: {
            controls: true,
            controlsText: [`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.757 12L15.707 16.95C15.8025 17.0422 15.8787 17.1526 15.9311 17.2746C15.9835 17.3966 16.0111 17.5278 16.0122 17.6606C16.0134 17.7934 15.9881 17.9251 15.9378 18.048C15.8875 18.1708 15.8133 18.2825 15.7194 18.3764C15.6255 18.4703 15.5138 18.5445 15.3909 18.5948C15.268 18.6451 15.1364 18.6704 15.0036 18.6692C14.8708 18.6681 14.7396 18.6405 14.6176 18.5881C14.4956 18.5357 14.3852 18.4595 14.293 18.364L8.63599 12.707C8.44852 12.5195 8.3432 12.2652 8.3432 12C8.3432 11.7348 8.44852 11.4805 8.63599 11.293L14.293 5.636C14.4816 5.45384 14.7342 5.35305 14.9964 5.35532C15.2586 5.3576 15.5094 5.46277 15.6948 5.64818C15.8802 5.83359 15.9854 6.0844 15.9877 6.3466C15.9899 6.60879 15.8891 6.8614 15.707 7.05L10.757 12Z" fill="#475569"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.314 12.071L8.36399 7.12098C8.18184 6.93238 8.08104 6.67978 8.08332 6.41758C8.0856 6.15538 8.19077 5.90457 8.37618 5.71916C8.56158 5.53375 8.8124 5.42859 9.07459 5.42631C9.33679 5.42403 9.58939 5.52482 9.77799 5.70698L15.435 11.364C15.6225 11.5515 15.7278 11.8058 15.7278 12.071C15.7278 12.3361 15.6225 12.5905 15.435 12.778L9.77799 18.435C9.58939 18.6171 9.33679 18.7179 9.07459 18.7157C8.8124 18.7134 8.56158 18.6082 8.37618 18.4228C8.19077 18.2374 8.0856 17.9866 8.08332 17.7244C8.08104 17.4622 8.18184 17.2096 8.36399 17.021L13.314 12.071Z" fill="#475569"/>
</svg>`,]
        }
    }
});


let tns3Item0 = document.getElementById('tns3-item0');
let tns3Item1 = document.getElementById('tns3-item1');
let tns3Item2 = document.getElementById('tns3-item2');


function smallItemSlide() {


}

setInterval(smallItemSlide, 1000)


let tns3Iw = document.getElementById('tns3-iw');


tns3Iw.addEventListener('click', () => {

    console.log(incredibleSlider.getInfo())
})

// let tns3SlideActive = document.querySelector('.tns-slide-active');


// let incredibleSliderCol = document.querySelector('.incredible-slider-col');

// tns3Iw.addEventListener('click', ()=> {
//
//
//     if (tns3Item0.classList.contains('tns-slide-active')) {
//
//         tns3Item0.classList.add('center-slider')
//
//     }
//
// })


let btnActiveSmallNav = document.getElementById('btn-active-small-nav');
let smallNavContainer = document.getElementById('small-nav-container');


btnActiveSmallNav.addEventListener('click', () => {
    if (btnActiveSmallNav.classList.contains('activated-small-nav')) {

        smallNavContainer.innerHTML = `
            <div class="container">
        <ul>
            <li class="nav-item">
                <a href="#" class="nav-link">Explore</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Solutions</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Articles</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Sign In</a>
            </li>
        </ul>
        <div class="small-nav-btn">
            <button type="button" class="btn btn-outline-light">Join Now</button>
        </div>
    </div>`;

        btnActiveSmallNav.classList.add('remove-small-nav');
        btnActiveSmallNav.classList.remove('activated-small-nav');

        smallNavContainer.style.right = '0';

        document.body.classList.add('overflow-hidden');

    } else if (btnActiveSmallNav.classList.contains('remove-small-nav')) {

        btnActiveSmallNav.classList.add('activated-small-nav');
        btnActiveSmallNav.classList.remove('remove-small-nav');

        smallNavContainer.style.right = '-100%';

        document.body.classList.remove('overflow-hidden');

        smallNavContainer.innerHTML = ''
    }
})


if (smallNavContainer.style.right = '-100%') {
    document.body.classList.remove('overflow-hidden');
}

var videoPictureSlide = tns({
    container: '#video-picture-slide',
    items: 1,
    speed: 500,

    responsive: {

        0: {
            gutter: 24,
            controls: false,
            nav: false,
            items: 1,
        },

        1200: {
            controls: true,
            controlsText: [`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.7566 12.0001L15.7066 16.9501C15.8021 17.0423 15.8783 17.1526 15.9307 17.2747C15.9831 17.3967 16.0107 17.5279 16.0118 17.6607C16.013 17.7934 15.9877 17.9251 15.9374 18.048C15.8871 18.1709 15.8128 18.2826 15.719 18.3765C15.6251 18.4703 15.5134 18.5446 15.3905 18.5949C15.2676 18.6452 15.1359 18.6705 15.0032 18.6693C14.8704 18.6682 14.7392 18.6406 14.6172 18.5882C14.4952 18.5358 14.3848 18.4596 14.2926 18.3641L8.63556 12.7071C8.44809 12.5195 8.34277 12.2652 8.34277 12.0001C8.34277 11.7349 8.44809 11.4806 8.63556 11.2931L14.2926 5.63606C14.4812 5.4539 14.7338 5.35311 14.996 5.35538C15.2582 5.35766 15.509 5.46283 15.6944 5.64824C15.8798 5.83365 15.985 6.08446 15.9872 6.34666C15.9895 6.60885 15.8887 6.86146 15.7066 7.05006L10.7566 12.0001Z" fill="#475569"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M13.3137 12.071L8.36372 7.12098C8.18156 6.93238 8.08077 6.67978 8.08305 6.41758C8.08532 6.15538 8.19049 5.90457 8.3759 5.71916C8.56131 5.53375 8.81212 5.42859 9.07432 5.42631C9.33652 5.42403 9.58912 5.52482 9.77772 5.70698L15.4347 11.364C15.6222 11.5515 15.7275 11.8058 15.7275 12.071C15.7275 12.3361 15.6222 12.5905 15.4347 12.778L9.77772 18.435C9.58912 18.6171 9.33652 18.7179 9.07432 18.7157C8.81212 18.7134 8.56131 18.6082 8.3759 18.4228C8.19049 18.2374 8.08532 17.9866 8.08305 17.7244C8.08077 17.4622 8.18156 17.2096 8.36372 17.021L13.3137 12.071Z" fill="#475569"/>
</svg>`]
        }
    }
});