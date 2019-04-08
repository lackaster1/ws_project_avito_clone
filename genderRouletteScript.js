$(document).ready(function () {
  var overlay = $('#overlay');
  var open_modal = $('.basic-gender-container');
  var close_modal = $('.close-button-container, #overlay');
  var modal = $('.modal-form-main-container');

  open_modal.click(function (event) {
    event.preventDefault();
    overlay.fadeIn(400,
        function () {
          modal
              .css('display', 'block', 'opacity')
              .animate({opacity: 1, top: '50%'}, 100);
        });
  });

  close_modal.click(function () {
    modal
        .animate({opacity: 0, top: '45%'}, 200,
            function () {
              $(this).css('display', 'none');
              overlay.fadeOut(400);
            }
        );
  });
});

class Gender {
  constructor(id, name, img_link, description) {
    this.id = id;
    this.name = name;
    this.img_link = img_link;
    this.description = description;
  }

  static createGender() {
    return new Gender()
  }
}

var genders = ["brooding duck", "mighty kangaroo", "shocked horse", "crying baby", "russian boy", "kurly kurly", "double finger bird", "eagle of anal freedom"];




var mighty_kangaroo = {
  id: 0,
  name: "mighty kangaroo",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/71zPg7nI4DL._SL1500_.jpg",
  description: "Best gender ever!"
}
var shocked_horse = {
  name: "shocked horse",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/71O2blC076L._UX679_.jpg",
  description: "Best gender ever!"
}
var crying_baby = {
  name: "crying baby",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/61Pi1yg8%2BLL._UX679_.jpg",
  description: "Best gender ever!"
}
var russian_boy = {
  name: "russian boy",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/61uNk%2BCM7VL._UX679_.jpg",
  description: "Best gender ever!"
}
var kurly_kurly = {
  name: "kurly kurly",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/719%2BEaf8sDL._UX679_.jpg",
  description: "Best gender ever!"
}
var double_finger_bird = {
  name: "double finger bird",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/7136vN9tAQL._UX679_.jpg",
  description: "Best gender ever!"
}
var eagle_of_anal_freedom = {
  name: "eagle of anal freedom",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/71mfn6d-G2L._SX679_.jpg",
  description: "Best gender ever!"
}
var big_hairy_kitty = {
  name: "eagle of anal freedom",
  img_link: "https://images-na.ssl-images-amazon.com/images/I/71mfn6d-G2L._SX679_.jpg",
  description: "Best gender ever!"
}

