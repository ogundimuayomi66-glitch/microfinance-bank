

document.getElementById("year").textContent =
    new Date().getFullYear();

   //ANIMATED BALANCE//


(function(){

    const el =
        document.getElementById("balanceNumber");

    if(!el) return;

    let base = 2480650;
    let step = 0;

    setInterval(function(){

        step = (step + 1) % 4;

        el.textContent =
            (base + step * 1250)
            .toLocaleString("en-NG");

    },2200);

})();


  //DARK / LIGHT MODe//



(function(){

    const toggle =
        document.getElementById("themeToggle");

    if(!toggle) return;


    /* Check previously saved theme */

    const savedTheme =
        localStorage.getItem("greenville-theme");


    if(savedTheme === "dark"){

        document.documentElement
            .classList.add("dark");

    }


    /* Update moon / sun icon */

    function updateIcon(){

        const isDark =
            document.documentElement
                .classList
                .contains("dark");


        if(isDark){

            toggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

            toggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            toggle.setAttribute(
                "title",
                "Switch to light mode"
            );

        }else{

            toggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

            toggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            toggle.setAttribute(
                "title",
                "Switch to dark mode"
            );

        }

    }


    /* Set correct icon when page loads */

    updateIcon();


    /* Toggle theme */

    toggle.addEventListener(
        "click",
        function(){

            document.documentElement
                .classList
                .toggle("dark");


            const isDark =
                document.documentElement
                    .classList
                    .contains("dark");


            /* Save user's choice */

            localStorage.setItem(
                "greenville-theme",
                isDark ? "dark" : "light"
            );


            /* Change icon */

            updateIcon();

        }
    );

})();