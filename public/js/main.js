$(document).ready(function () {
    $(".drawer-side li").on("click", function () {
        $(".close-sidebar").click();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            // $("#back-to-top").addClass("show");
            $("#navbar").addClass("navbar-fixed");
        } else {
            // $("#back-to-top").removeClass("show");
            $("#navbar").removeClass("navbar-fixed");
        }
    });

    const owl = $(".owl-carousel");

    owl.owlCarousel({
        margin: 20,
        center: true,
        // autoHeight: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1280: {
                items: 3,
            },
        },
    });

    $(".owl-custom-next").click(function () {
        owl.trigger("next.owl.carousel");
    });

    $(".owl-custom-prev").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $(document).on("click", ".owl-item", function () {
        owlIndex = $(this).index();
        count = document.querySelectorAll(".owl-item.active").length;
        $(".owl-stage-outer").trigger("to.owl.carousel", owlIndex - count);
    });
});

$(window).on("load", function () {
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
        typeSpeed: 30,

        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 0,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 30,

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

    // $("#contact-me").mouseenter(function () {
    //     typewriterHeroText.stop();
    //     console.log('stoped');
    // });

    // $("#contact-me").mouseleave(function () {
    //     typewriterHeroText.start();
    //     console.log('started');
    // });

    const typewriterHeroDesc = new Typed("#typewriter-hero-desc", {
        strings: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt id iusto quas assumenda magnam fugit temporibus sequi facere obcaecati, laboriosam labore ducimus eligendi libero saepe expedita, aperiam ad eos?",
        ],
        typeSpeed: 5,
        showCursor: false,
    });
});
