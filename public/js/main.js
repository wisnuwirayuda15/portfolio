$(document).ready(function () {
    // Sidebar for mobile
    $(".drawer-side li").on("click", function () {
        $("html").css("overflow", "auto");
        $("#sidebar-close").click();
    });

    function scrollCheck() {
        if ($(window).scrollTop() > 1) {
            $("#navbar").addClass("navbar-fixed");
        } else {
            $("#navbar").removeClass("navbar-fixed");
        }
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").fadeIn(500);
        } else {
            $("#back-to-top").fadeOut(500);
        }
    }
    scrollCheck();

    $(window).scroll(function () {
        scrollCheck();
    });

    $("#back-to-top").click(function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    const owl = $("#projects-carousel");
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
                    "Your messages have been submitted.",
                );
                form_modal.showModal();
            },
            error: function (xhr, status, error) {
                console.error("ERROR: form submit failed. " + error);
                formSubmit.html(submitHtml);
                $("#form-modal-icon").html(
                    '<i class="ti ti-circle-x alert-failed"></i>',
                );
                $("#form-modal-title").text("Oops :(");
                $("#form-modal-text").text("Your messages failed to submit.");
                form_modal.showModal();
            },
        });
    });

    $("#lol-btn").mouseenter(function () {
        $("#warn-text").css("opacity", 100);
    });
    $("#lol-btn").mouseleave(function () {
        $("#warn-text").css("opacity", 0);
    });
    $("#lol-btn").click(function () {
        window.open(
            "https://youtu.be/dQw4w9WgXcQ?si=6_hkLXumriYlFpfj",
            "_blank",
        );
    });
});

$(window).on("load", function () {
    // window.scrollTo({ top: 0, behavior: "instant" });

    $("#preloader-content").fadeOut(500, function () {
        $("#preloader").slideUp(500, function () {
            $(this).remove();
            $("html").css("overflow", "auto");
            console.log(`INFO: preloader end`);
            sal();
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
        $("#tech-draggable-text").text(
            $("#tech-draggable-text").text() + " It's draggable by the way 😀",
        );
    } else {
        $("#tech-draggable-text").text(
            $("#tech-draggable-text").text() + " Click to see the detail 😉",
        );
    }

    VanillaTilt.init(document.querySelectorAll(".card-tech"), {
        scale: 1.2,
        perspective: 300,
    });

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
        typeSpeed: 50,

        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 1000,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 50,

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
            "I am a final-year undergraduate student at Telkom University. My passion lies in the field of web development, with a strong focus on the backend. I am deeply enthusiastic about pursuing a career as a web developer, where I can leverage my skills and knowledge to create innovative and efficient web solutions.",
        ],
        typeSpeed: 1,
        showCursor: false,
        startDelay: 1000,
    });

    // const element = document.getElementById("hero-text");

    // element.addEventListener("sal:in", ({ detail }) => {
    //     typewriterHeroText.start();
    //     console.log("entering", detail.target);
    // });

    // element.addEventListener("sal:out", ({ detail }) => {
    //     typewriterHeroText.stop();
    //     console.log("exiting", detail.target);
    // });

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
});
