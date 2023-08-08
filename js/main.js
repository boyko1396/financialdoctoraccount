// fullpage scroll init
document.addEventListener('DOMContentLoaded', function() {
    const fullpageInstance = new fullpage('#fullpage', {
        css3: true,
        scrollingSpeed: 800,
        navigation: false,
        slidesNavigation: false,
        responsiveHeight: 330,
        controlArrows: false,
        fadingEffect: true,
        recordHistory: false
    });

    // nav fullpagescroll
    const scrollBtnHome = document.querySelector('.js-link-target');
    const scrollBtnHome2 = document.querySelector('.js-link-target2');
    const scrollBtnDown = document.querySelector('.main-hero__scroll-link-wrap');

    scrollBtnDown.addEventListener('click', function(e) {
        e.preventDefault();
        fullpageInstance.moveSectionDown();
    });

    scrollBtnHome.addEventListener('click', function(e) {
        e.preventDefault();
        fullpageInstance.moveTo(1);
    });

    scrollBtnHome2.addEventListener('click', function(e) {
        e.preventDefault();
        fullpageInstance.moveTo(1);
    });

    // scroll animated for mobile
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.22
    });

    const elements = document.querySelectorAll('.js-scroll-trigger');
    elements.forEach(element => {
        observer.observe(element);
    });

    function handleIntersection2(entries2, observer2) {
        entries2.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }

    const observer2 = new IntersectionObserver(handleIntersection2, {
        root: null,
        rootMargin: '0px',
        threshold: 0.22
    });

    const elements2 = document.querySelectorAll('.js-scroll-trigger');
    elements2.forEach(element => {
        observer2.observe(element);
    });
});

// btn-toggle nav mobile
const btnToggle = document.querySelector('.js-btn-toggle');
const headerDropdown = document.querySelector('.header__dropdown');

function toggleMenu() {
  const isActive = btnToggle.classList.contains('is-active');
  
  if (isActive) {
    btnToggle.classList.remove('is-active');
    headerDropdown.classList.remove('is-show');
  } else {
    btnToggle.classList.add('is-active');
    headerDropdown.classList.add('is-show');
  }
}

// Додаємо обробник події для кліку на бургер
btnToggle.addEventListener('click', toggleMenu);


// svg inline
document.addEventListener('DOMContentLoaded', function() {
    const svgContainers = document.querySelectorAll('.js-svg-inline');

    svgContainers.forEach(container => {
        const src = container.getAttribute('data-src');
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const svgText = xhr.responseText;
                    const wrapper = document.createElement('span');
                    wrapper.innerHTML = svgText.trim();

                    container.appendChild(wrapper.firstChild);
                } else {
                    console.error('Failed to load SVG:', src);
                }
            }
        };

        xhr.open('GET', src, true);
        xhr.send();
    });
});