function openNav() { var o = document.getElementById("navbarContent"); "navbar-collapse" == o.className ? o.className += " closeNavbar" : o.className = o.className.replace(" closeNavbar", "") } function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? myButton.className = "back-to-top back-to-top-display-flex" : myButton.className = myButton.className.replace(" back-to-top-display-flex", "") } function topFunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } myButton = document.getElementById("myBtn"), window.onscroll = function () { scrollFunction() }, window.addEventListener("load", function () { const o = document.querySelector(".loader"); o.className = o.className.replace(" show", "") });