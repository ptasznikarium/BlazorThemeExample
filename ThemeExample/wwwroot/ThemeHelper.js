
    function switchTheme(value) {
        document.documentElement.setAttribute("data-bs-theme", value)
        localStorage.setItem("data-bs-theme", value);
    };

    function getTheme() {
        return localStorage.getItem("data-bs-theme") ?? "light";
    };

    (function (){
        document.documentElement.setAttribute("data-bs-theme", localStorage.getItem("data-bs-theme") ?? "light")
    }());
