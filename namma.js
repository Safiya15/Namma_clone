let layer = document.querySelector(".layer");
let menu = document.querySelector(".menu");
let menuLayer = document.querySelector(".menu-layer");

let f = 0;

const hoverme2 = document.querySelector(".img-hover-2");
const images2  = Array.from(document.querySelectorAll(".img-hover-me-2"));

let index2    = 0;
let shown2    = [];
let interval2 = null;
let zCounter2 = 1;

function showNext2() {
    if (shown2.length >= 2) {
        const oldIdx = shown2.shift();
        const old = images2[oldIdx];
        old.classList.remove("active");
        old.classList.add("hide");

        setTimeout(() => {
            old.classList.remove("hide");
            old.style.transition = "none";
            old.style.transform = "translateY(100%) rotate(0deg)";
            old.style.visibility = "hidden";
            old.style.opacity = "0";
            old.style.zIndex = "0";
        }, 300);
    }

    const img  = images2[index2];
    const tilt = TILTS[index2 % 2];

    img.classList.remove("active", "hide");
    img.style.transition = "none";
    img.style.transform = "translateY(100%) rotate(0deg)";
    img.style.visibility = "visible";
    img.style.opacity = "0";
    img.style.zIndex = ++zCounter2;

    void img.offsetWidth;

    img.style.transition = "";
    img.style.transform = `translateY(30%) ${tilt}`;
    img.style.opacity = "1";
    img.classList.add("active");

    shown2.push(index2);
    index2 = (index2 + 1) % images2.length;
}

hoverme2.addEventListener("mouseenter", () => {
    if (interval2) return;
    showNext2();
    interval2 = setInterval(showNext2, 350);
});

hoverme2.addEventListener("mouseleave", () => {
    clearInterval(interval2);
    interval2 = null;
    index2 = 0;
    shown2 = [];
    zCounter2 = 1;

    images2.forEach(img => {
        img.classList.remove("active", "hide");
        img.style.transition = "none";
        img.style.transform = "translateY(100%) rotate(0deg)";
        img.style.visibility = "hidden";
        img.style.opacity = "0";
        img.style.zIndex = "0";
    });
});


const hoverme = document.querySelector(".img-hover");
const images  = Array.from(document.querySelectorAll(".img-hover-me"));
const TILTS   = ["rotate(-6deg)", "rotate(6deg)"];

let index    = 0;
let shown    = [];
let interval = null;
let zCounter = 1;

function showNext() {
    if (shown.length >= 2) {
        const oldIdx = shown.shift();
        const old = images[oldIdx];
        old.classList.remove("active");
        old.classList.add("hide");

        setTimeout(() => {
            old.classList.remove("hide");
            old.style.transition = "none";
            old.style.transform = "translateY(100%) rotate(0deg)";
            old.style.visibility = "hidden";
            old.style.opacity = "0";
            old.style.zIndex = "0";
        }, 300);
    }

    const img  = images[index];
    const tilt = TILTS[index % 2];

    img.classList.remove("active", "hide");
    img.style.transition = "none";
    img.style.transform = "translateY(100%) rotate(0deg)";
    img.style.visibility = "visible";
    img.style.opacity = "0";
    img.style.zIndex = ++zCounter;

    void img.offsetWidth;

    img.style.transition = "";
    img.style.transform = `translateY(30%) ${tilt}`;
    img.style.opacity = "1";
    img.classList.add("active");

    shown.push(index);
    index = (index + 1) % images.length;
}

hoverme.addEventListener("mouseenter", () => {
    if (interval) return;
    showNext();
    interval = setInterval(showNext, 350);
});

hoverme.addEventListener("mouseleave", () => {
    clearInterval(interval);
    interval = null;
    index = 0;
    shown = [];
    zCounter = 1;

    images.forEach(img => {
        img.classList.remove("active", "hide");
        img.style.transition = "none";
        img.style.transform = "translateY(100%) rotate(0deg)";
        img.style.visibility = "hidden";
        img.style.opacity = "0";
        img.style.zIndex = "0";
    });
});


/* ── MENU ── */
menu.addEventListener("click", function () {
    if (f == 0) {
        f = 1;
        layer.style.top = "-150%";
        layer.style.transform = "rotate(35deg)";
        setTimeout(() => { menu.innerHTML = "CLOSE"; }, 1000);

        setTimeout(() => {
            menuLayer.style.visibility = "visible";
            menuLayer.style.opacity = "1";

            let menuItems = document.querySelectorAll(".menu-layer h1, .menu-layer h2");
            menuItems.forEach((item, index) => {
                item.style.animation = "none";
                item.style.transform = "translateY(100%)";
                item.style.opacity = "0";
                item.style.filter = "";
                item.style.transformOrigin = "";
                void item.offsetWidth;
                setTimeout(() => {
                    item.style.animation = "";
                    item.style.transform = "";
                    item.style.opacity = "";
                    item.classList.add("active");
                }, index * 150);
            });
        }, 800);

    } else {
        f = 0;
        let menuItems = document.querySelectorAll(".menu-layer h1, .menu-layer h2");

        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transformOrigin = "center center";
                item.style.transition = "transform 1.2s cubic-bezier(0.4, 0, 1, 1), opacity 1.2s ease, filter 1.2s ease";
                item.style.transform = "scale(5) rotate(-25deg)";
                item.style.opacity = "0";
                item.style.filter = "blur(30px)";
            }, index * 150);
        });

        setTimeout(() => {
            layer.style.top = "-500%";
            layer.style.transform = "rotate(-45deg)";
        }, 900);

        setTimeout(() => {
            menuLayer.style.visibility = "hidden";

            menuItems.forEach(item => {
                item.style.transition = "";
                item.style.transform = "translateY(100%)";
                item.style.opacity = "0";
                item.style.filter = "";
                item.style.animation = "none";
                item.style.transformOrigin = "";
                item.classList.remove("active");
            });
        }, 1400);

        setTimeout(() => { menu.innerHTML = "OPEN"; }, 1400);
    }
});


/* ── NEXT VIDEO SECTION ANIMATION ── */
let nextSection = document.querySelector(".next-vedio");
let nextTexts = document.querySelectorAll(".next-banner h1");
let nextP = document.querySelector(".next-vedio-p");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            nextP.classList.add("active");
            nextTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.classList.add("active");
                }, (index + 1) * 300);
            });
        }
    });
}, { threshold: 0.4 });

observer.observe(nextSection);


/* ── HERO VIDEO FOLLOW CURSOR ── */
let vedio = document.querySelector(".vedio-container-move");
let hero = document.querySelector(".hero-section");

let vedioX = 0, vedioY = 0;
let targetX = 0, targetY = 0;

hero.addEventListener("mousemove", (e) => {
    targetX = e.clientX + 20;
    targetY = e.clientY + 20;
    vedio.style.opacity = "1";
});

hero.addEventListener("mouseleave", () => {
    vedio.style.opacity = "0";
});

function animateVedio() {
    vedioX += (targetX - vedioX) * 0.08;
    vedioY += (targetY - vedioY) * 0.08;
    vedio.style.transform = `translate(${vedioX}px, ${vedioY}px)`;
    requestAnimationFrame(animateVedio);
}

animateVedio();


/* ── LET'S TALK LAYER ── */
let talk = document.querySelector(".talk");
let layer2 = document.querySelector(".layer2");
let l2Close = document.getElementById("l2Close");
let fg = 1;

function openLayer2() {
    layer2.style.top = "0%";
    layer2.style.transition = "top 1s ease";
    fg = 0;
}

function closeLayer2() {
    layer2.style.top = "-100%";
    layer2.style.transition = "top 1s ease";
    fg = 1;
}

talk.addEventListener("click", () => {
    if (fg == 1) {
        openLayer2();
    } else {
        closeLayer2();
    }
});

/* ── CLOSE BUTTON FIX ── */
l2Close.addEventListener("click", () => {
    closeLayer2();
});


/* ── PLAYGROUND CARD SCROLL ENTRANCE ── */
(function () {
    const cards = document.querySelectorAll(".div1, .div2, .div3, .div4");
    if (!cards.length) return;

    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("card-visible");
                    cardObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => cardObserver.observe(card));
})();


/* ── LOCOMOTIVE SCROLL ── */
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 3.2,
    lerp: 0.05,
    smartphone: { smooth: true },
    tablet: { smooth: true }
});


/* ── NAMMA SHRINK ON SCROLL ── */
(function () {
    const section = document.getElementById('nammaSection');
    const letters = document.querySelectorAll('.letter');
    if (!section || !letters.length) return;

    function getShrinkProgress() {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;

        const start = viewH;
        const end   = viewH * 0.3;

        let p = (start - rect.bottom) / (start - end);
        p = Math.max(0, Math.min(1, p));
        p = p * p * (3 - 2 * p);
        return p;
    }

    function applyScale(p) {
        letters.forEach((l, i) => {
            const sp = Math.max(0, Math.min(1, p - i * 0.03));
            const eased = sp * sp * (3 - 2 * sp);
            const scale = Math.max(0.001, 1 - eased);
            l.style.transform = `scaleY(${scale})`;
        });
    }

    scroll.on('scroll', () => {
        applyScale(getShrinkProgress());
    });

    window.addEventListener('scroll', () => {
        applyScale(getShrinkProgress());
    });

    applyScale(getShrinkProgress());
})();


/* ── CURSOR BALL ── */
(function () {
    const ball = document.getElementById('cursorBall');
    const hero = document.querySelector('.hero-section');

    let mouseX = 0, mouseY = 0;
    let ballX = 0, ballY = 0;
    let initialized = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!initialized) {
            ballX = mouseX;
            ballY = mouseY;
            initialized = true;
        }

        const heroRect = hero.getBoundingClientRect();
        const overHero = (
            e.clientY >= heroRect.top &&
            e.clientY <= heroRect.bottom &&
            e.clientX >= heroRect.left &&
            e.clientX <= heroRect.right
        );

        ball.style.opacity = overHero ? '0' : '1';
    });

    document.addEventListener('mouseleave', () => {
        ball.style.opacity = '0';
    });

    function animateBall() {
        ballX += (mouseX - ballX) * 0.1;
        ballY += (mouseY - ballY) * 0.1;
        ball.style.left = ballX + 'px';
        ball.style.top  = ballY + 'px';
        requestAnimationFrame(animateBall);
    }

    animateBall();

    function resetBall() {
        ball.style.width = '20px';
        ball.style.height = '20px';
        ball.style.borderRadius = '50%';
        ball.style.background = 'blue';
        ball.innerHTML = '';
        ball.style.transform = 'translate(10px, 10px) rotate(0deg)';
    }

    function expandBall(label) {
        ball.style.width = '150px';
        ball.style.height = '45px';
        ball.style.borderRadius = '8px';
        ball.style.background = 'blue';
        ball.innerHTML = `<span style="color:white;font-size:14px;font-weight:900;letter-spacing:2px;pointer-events:none;">${label}</span>`;
        ball.style.transform = 'translate(10px, 10px) rotate(-10deg)';
    }

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.playground h1')) expandBall('PORTFOLIO');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.playground h1')) resetBall();
    });

    const cardLabels = {
        'div1': 'MATERA',
        'div2': 'CHANCE',
        'div3': 'SILVR',
        'div4': 'INTRAMUROS'
    };

    document.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.div1, .div2, .div3, .div4');
        if (card) {
            const className = ['div1','div2','div3','div4'].find(c => card.classList.contains(c));
            expandBall(cardLabels[className]);
        }
    });
    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.div1, .div2, .div3, .div4');
        if (card) resetBall();
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.art .seeall')) expandBall('SERVICES');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.art .seeall')) resetBall();
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.talk') || e.target.closest('.working-right .seeall')) expandBall("LET'S TALK");
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.talk') || e.target.closest('.working-right .seeall')) resetBall();
    });

})();


/* ── LOCATION + TIME ── */
(function () {
    const locationEl = document.getElementById('locationName');
    const clockEl    = document.getElementById('liveClock');

    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        clockEl.textContent = `${h}:${m}:${s}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
            const city    = data.city    || '';
            const country = data.country_name || '';
            locationEl.textContent = `${city.toUpperCase()}, ${country.toUpperCase()}`;
        })
        .catch(() => {
            locationEl.textContent = 'UNKNOWN';
        });
})();


/* ── COOKIE BANNER ── */
(function () {
    const banner = document.getElementById('cookieBanner');

    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);

    banner.addEventListener('click', () => {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        setTimeout(() => banner.remove(), 500);
    });
})();