function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

let sounds = false;
let musicPlaying = false;
const musics = [
    "bloom-intro.mp3",
    "bubblegum-animal-crossing-lofi.mp3",
    "new-horizons-animal-crossing-lofi.mp3",
    "route-101-pokémon-ruby-&-sapphire-lofi.mp3",
];
let musicName = getRandomItem(musics);

const music = new Audio(); //prevent multiple music played at once
const rythm = new Rythm();
const lazyLoad = lozad();
const owl = $("#projects-carousel");

function soundPlay(path, volume = 1) {
    if (sounds) {
        let sound = new Audio();
        sound.src = `audio/sound/${path}`;
        sound.volume = volume;
        sound.play();
        sound.onended = function () {
            sound = undefined;
        };
    }
}

function musicPlay(path, loop = false, volume = 1) {
    if (musicPlaying) {
        music.load();
    }
    music.src = `audio/music/${path}`;
    music.volume = volume;
    music.loop = loop;
    rythm.connectExternalAudioElement(music);
    rythm.start();
    music.play();
    musicPlaying = true;
    if (!loop) {
        music.onended = function () {
            musicPlaying = false;
            $(".music-toggle").prop("checked", true);
            setTimeout(function () {
                musicPlay(getRandomItem(musics));
                $(".music-toggle").prop("checked", false);
            }, 1000);
        };
    }
}

function fixedNavbar() {
    $(this).scrollTop() > 1
        ? $("#navbar").addClass("navbar-fixed")
        : $("#navbar").removeClass("navbar-fixed");
}

function favIconHover() {
    $(this).scrollTop() > 1
        ? $("#fav-icon").removeClass("peer/logo")
        : $("#fav-icon").addClass("peer/logo");
}

function backToTop() {
    $(this).scrollTop() > 500
        ? $("#back-to-top").fadeIn(500)
        : $("#back-to-top").fadeOut(500);
}

function typewriter(delay = 500) {
    const typewriterHeroText = new Typed("#typewriter-hero-text", {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: [
            "Hello folks,^1000 my name is <span class='hero-title'>Wisnu Wirayuda</span>",
            "I'm from <span class='hero-title'>Indonesia</span>",
            "I'm a student at <a href='https://telkomuniversity.ac.id/' target='_blank' class='hero-title'>Telkom University</a>",
            "I'm a <span class='hero-title'>Web Developer</span>",
            "I'm a <span class='hero-title'>Laravel Developer</span>",
            "I'm a <span class='hero-title'>Back-End Developer</span>",
            "I'm a <span class='hero-title'>Front-End Developer</span>",
            "I'm a <span class='hero-title'>Tech Enthusiast</span>",
            "My hobby is <span class='hero-title'>Learning Computer Stuff</span>",
            "My hobby is <span class='hero-title'>Playing Video Games</span>",
            // "But sadly,^1000 I'm still <span class='hero-title'>SINGLE :(</span>",
            // "Nah,^1000 just kidding.^2000 I'm happy the way I am  <span class='hero-title'>(｡◕‿◕｡)</span>",
            "Let's be <span class='hero-title'>Friends ^_^</span>",
            "^1000.^1000.^1000.^1000.^1000.",
            "Why are you still here?",
            "Scroll down and go see the <span class='hero-title'>other section :D</span>^2000",
        ],
        stringsElement: null,

        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 20,

        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: delay,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 20,

        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,

        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,

        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 3000,

        /**
         * @property {boolean} fadeOut Fade out instead of backspace
         * @property {string} fadeOutClass css class for fade animation
         * @property {boolean} fadeOutDelay Fade out delay in milliseconds
         */
        fadeOut: false,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,

        /**
         * @property {boolean} loop loop strings
         * @property {number} loopCount amount of loops
         */
        loop: true,
        loopCount: Infinity,

        /**
         * @property {boolean} showCursor show cursor
         * @property {string} cursorChar character for cursor
         * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
         */
        showCursor: false,
        cursorChar: "|",
        autoInsertCss: true,

        /**
         * @property {string} attr attribute for typing
         * Ex: input placeholder, value, or just HTML text
         */
        attr: null,

        /**
         * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
         */
        bindInputFocusEvents: false,

        /**
         * @property {string} contentType 'html' or 'null' for plaintext
         */
        contentType: "html",

        /**
         * Before it begins typing
         * @param {Typed} self
         */
        onBegin: (self) => {},

        /**
         * All typing is complete
         * @param {Typed} self
         */
        onComplete: (self) => {},

        /**
         * Before each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        preStringTyped: (arrayPos, self) => {},

        /**
         * After each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStringTyped: (arrayPos, self) => {},

        /**
         * During looping, after last string is typed
         * @param {Typed} self
         */
        onLastStringBackspaced: (self) => {},

        /**
         * Typing has been stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingPaused: (arrayPos, self) => {},

        /**
         * Typing has been started after being stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingResumed: (arrayPos, self) => {},

        /**
         * After reset
         * @param {Typed} self
         */
        onReset: (self) => {},

        /**
         * After stop
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStop: (arrayPos, self) => {},

        /**
         * After start
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStart: (arrayPos, self) => {},

        /**
         * After destroy
         * @param {Typed} self
         */
        onDestroy: (self) => {},
    });

    const typewriterHeroDesc = new Typed("#typewriter-hero-desc", {
        strings: [
            "I'm a final-year undergraduate student at Telkom University with a passion for full-stack web development. I'm eager to launch a career as a web developer to create innovative web solutions.",
        ],
        typeSpeed: 1,
        showCursor: false,
        startDelay: delay,
    });

    function typewriterIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                typewriterHeroText.start();
                console.log("INFO: entering the viewport, typing started");
            } else {
                typewriterHeroText.stop();
                console.log("INFO: out of viewport, typing stopped");
            }
        });
    }

    const sectionObserver = new IntersectionObserver(typewriterIntersect, {
        root: null, // use viewport sas root
        rootMargin: "0px", // no additional margin
        threshold: 0.5, // when half or more of element displayed
    });

    const heroText = document.querySelector("#hero-text");
    if (heroText) {
        sectionObserver.observe(heroText);
    }
}

$(document).ready(function () {
    rythm.addRythm("rythm-pulse", "pulse", 0, 10, {
        min: 1,
        max: 1.3,
    });

    rythm.addRythm("rythm-kern", "kern", 0, 10, {
        min: 1,
        max: 10,
    });

    // Sidebar for mobile
    $(".drawer-side li").on("click", function () {
        $("html").css("overflow", "auto");
        $("#sidebar-close").click();
    });

    fixedNavbar();
    favIconHover();
    backToTop();

    $(window).scroll(function () {
        fixedNavbar();
        favIconHover();
        backToTop();
    });

    $("#back-to-top").click(function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    $(".theme-change").click(function () {
        $("html").data("data-theme")
            ? soundPlay("light.mp3")
            : soundPlay("dark.mp3");
    });

    $(".sound-toggle").change(function (e) {
        e.preventDefault();
        if (this.checked) {
            sounds = false;
            $(".sound-toggle").prop("checked", true);
            console.log(`INFO: sound ${sounds}`);
        } else {
            sounds = true;
            soundPlay("beepd.mp3");
            $(".sound-toggle").prop("checked", false);
            console.log(`INFO: sound ${sounds}`);
        }
    });

    $(".music-toggle").change(function (e) {
        e.preventDefault();
        if (!musicPlaying) {
            musicPlay(musicName);
            $(".music-toggle").prop("checked", false);
            console.log(`INFO: music played`);
        } else {
            if (music.paused) {
                music.play();
                $(".music-toggle").prop("checked", false);
                console.log(`INFO: music played`);
            } else {
                music.pause();
                $(".music-toggle").prop("checked", true);
                console.log(`INFO: music paused`);
            }
        }
    });

    owl.owlCarousel({
        margin: 40,
        center: true,
        smartSpeed: 500,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            1280: {
                items: 3,
            },
        },
    });

    owl.on("changed.owl.carousel", function (event) {
        soundPlay("interface.mp3");
    });

    $(".owl-custom-next").click(function () {
        owl.trigger("next.owl.carousel");
        console.log("INFO: next button pressed, go to the next item");
    });

    $(".owl-custom-prev").click(function () {
        owl.trigger("prev.owl.carousel");
        console.log("INFO: previous button pressed, go to the previous item");
    });

    $("#contact-form").submit(function (event) {
        event.preventDefault();
        $("#refresh").addClass("hidden");
        const formSubmit = $("#form-submit");
        const formModal = $("#form_modal");
        const submitHtml = formSubmit.html();
        const modaltHtml = formModal.html();
        formSubmit.html('<span class="submit-loading"></span>');
        const formData = $(this).serialize();
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: formData,
            headers: {
                Accept: "application/json",
            },
            success: function (response) {
                console.log("INFO: form submitted.");
                formSubmit.html(submitHtml);
                $("#contact-form")[0].reset();
                $("#form-modal-icon").html(
                    '<i class="ti ti-circle-check alert-success"></i>',
                );
                $("#form-modal-title").text("Thanks ^_^");
                $("#form-modal-text").text(
                    "Your messages have been submitted, I will send a reply to your message to the email you provided as soon as possible.",
                );
                form_modal.showModal();
                soundPlay("send-success.mp3");
            },
            error: function (xhr, status, error) {
                console.error("ERROR: form submit failed. " + error);
                formSubmit.html(submitHtml);
                $("#form-modal-icon").html(
                    '<i class="ti ti-circle-x alert-failed"></i>',
                );
                $("#form-modal-title").text("Oops :(");
                $("#form-modal-text").html(
                    "Sorry, your messages failed to submit.<br>Please refresh this page or try again later.",
                );
                $("#refresh").removeClass("hidden");
                form_modal.showModal();
                soundPlay("send-failed.mp3");
            },
        });
    });

    $("#lol-btn").click(function () {
        window.open(
            "https://youtu.be/dQw4w9WgXcQ?si=6_hkLXumriYlFpfj",
            "_blank",
        );
    });

    $("#secret-sign").click(function (e) {
        soundPlay("secret.mp3");
        secret_modal.showModal();
    });

    $(".nav-page").each(function (index, element) {
        $(element).click(function () {
            soundPlay("beepd.mp3");
        });
    });

    //run the code only on device that has bigger screen than mobile phone
    if ($(window).width() >= 640) {
        $(".owl-carousel").on("click", ".owl-item", function () {
            owlIndex = $(this).index();
            count = $(".owl-item.active").length;
            $(".owl-stage-outer").trigger("to.owl.carousel", owlIndex - count);
            console.log(
                `INFO: #${$(this).children().attr("id")} selected on #${$(this)
                    .closest(".owl-carousel")
                    .attr("id")}`,
            );
        });

        const techDrag = dragula([document.querySelector("#tech-list")]);
        techDrag.on("drag", function () {
            soundPlay("bubble.mp3");
        });
        techDrag.on("drop", function () {
            soundPlay("digital-beeping.mp3");
        });

        $("#tech-draggable-text").text(
            $("#tech-draggable-text").text() + " It's draggable by the way 😀",
        );
    } else {
        $("#tech-draggable-text").text(
            $("#tech-draggable-text").text() + " Click to see the detail 😉",
        );
    }

    $("#tech-list").on("mouseenter", ".card-tech", function () {
        soundPlay("click-menu.mp3");
    });

    VanillaTilt.init(document.querySelectorAll(".card-tech"), {
        scale: 1.2,
        perspective: 300,
        gyroscope: false,
    });
});

$(window).on("load", function () {
    $("#preloader-content").fadeOut(500, function () {
        $("#preloader-confirm").removeClass("hidden");
        $("#preloader-confirm").on("click", "button", function () {
            if ($(this).data("sound") == true) {
                sounds = true;
                soundPlay("beepd.mp3");
                musicPlay(musicName);
                $(".sound-toggle, .music-toggle").prop("checked", false);
            }
            $("#preloader-confirm").fadeOut(500, function () {
                $("#preloader").slideUp(500, function () {
                    $(this).remove();
                    $("html").css("overflow", "auto");
                    window.scrollTo({ top: 0, behavior: "instant" });
                    typewriter(1000);
                    console.log(`INFO: preloader end`);
                    lazyLoad.observe();
                    AOS.init({
                        duration: 1000,
                        once: true,
                        delay: 100,
                    });
                });
            });
        });
    });
});
