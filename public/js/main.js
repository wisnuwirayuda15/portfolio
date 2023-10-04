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

    var typewriterHeroText = new Typed("#typewriter-hero-text", {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: [
            "Hello folks,^1000 my name is <span class='hero-title'>Wisnu Wirayuda</span>",
            "I'm a <span class='hero-title'>Student</span>",
            "I'm a <span class='hero-title'>Software Developer</span>",
            "I'm a <span class='hero-title'>Back-End Developer</span>",
            "I'm a <span class='hero-title'>Front-End Developer</span>",
            "I'm a <span class='hero-title'>Tech Enthusiast</span>",
            "My hobby is <span class='hero-title'>Playing Video Games</span>",
            "My hobby is <span class='hero-title'>Learning Computer Stuff</span>",
            "But sadly,^1000 I'm still <span class='hero-title'>SINGLE :(</span>",
            "Let's be <span class='hero-title'>Friends ^_^</span>",
        ],
        stringsElement: null,

        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 50,

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

    var typewriterHeroDesc = new Typed("#typewriter-hero-desc", {
        strings: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt id iusto quas assumenda magnam fugit temporibus sequi facere obcaecati, laboriosam labore ducimus eligendi libero saepe expedita, aperiam ad eos?",
        ],
        typeSpeed: 10,
        showCursor: false,
    });
});
