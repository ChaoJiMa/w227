(function () {
  var num = 0;
  var img = {
    Img: function () {
      var lbImg = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
      ];
      return lbImg;
    },
    init: function () {
      $("img")[0].src = img.Img()[num];
    },
    time: function () {
      setInterval(function () {
        if (num < img.Img().length) {
          img.init();
          console.log("a " + num);
        } else {
          num = 0;
          img.init();
        }
        num++;
        console.log("b " + num);
      }, 2000);
      this.left();
      this.right();
    },
    left: function () {
      $(".left").click(function () {
        if (num - 2 >= 0) {
          $("img")[0].src = img.Img()[num - 2];
        }
      });
    },
    right: function () {
      $(".right").click(function () {
        if (num < img.Img().length) {
          $("img")[0].src = img.Img()[num];
        }
      });
    },
  };
  img.time();
})();
