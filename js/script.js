window.onscroll = function () { myFunction() };

      var bar = document.getElementById("bar");

      var sticky = bar.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          bar.classList.add("sticky")
        } else {
          bar.classList.remove("sticky");
        }
      }          