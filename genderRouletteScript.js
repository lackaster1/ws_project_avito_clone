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
    return new Gender();
  }
}

$(document).ready(function () {
  var start = $('.start-roulette-button');
  var genders = [gen00(), gen01(), gen02(), gen03(), gen04(), gen05(), gen06(), gen07(), gen08()];
  start.click(function () {

          var newDiv = document.createElement("div");
          var newContent = document.createTextNode(genders[randomInteger(0,8)]);
          var randGenderName = newContent.getName;

          newDiv.appendChild(newContent);

          document.body.appendChild(newDiv);

    //console.log(genders[randomInteger(0, 8)]);

  });

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.round(rand);
    return rand;
  }
});

function gen00() {
  return new Gender("0", "brooding duck", "https://images-na.ssl-images-amazon.com/images/I/61QBy1vqeML._UX679_.jpg", "Best gender ever!");
}

function gen01() {
  return new Gender("1", "mighty kangaroo", "https://images-na.ssl-images-amazon.com/images/I/61HQmuFnn1L._UX679_.jpg", "Best gender ever!");
}

function gen02() {
  return new Gender("2", "shocked horse", "https://images-na.ssl-images-amazon.com/images/I/71zPg7nI4DL._SL1500_.jpg", "Best gender ever!");
}

function gen03() {
  return new Gender("3", "crying baby", "https://images-na.ssl-images-amazon.com/images/I/71O2blC076L._UX679_.jpg", "Best gender ever!");
}

function gen04() {
  return new Gender("4", "russian boy", "https://images-na.ssl-images-amazon.com/images/I/61Pi1yg8%2BLL._UX679_.jpg", "Best gender ever!");
}

function gen05() {
  return new Gender("5", "kurly kurly", "https://images-na.ssl-images-amazon.com/images/I/61uNk%2BCM7VL._UX679_.jpg", "Best gender ever!");
}

function gen06() {
  return new Gender("6", "double finger bird", "https://images-na.ssl-images-amazon.com/images/I/719%2BEaf8sDL._UX679_.jpg", "Best gender ever!");
}

function gen07() {
  return new Gender("7", "eagle of anal freedom", "https://images-na.ssl-images-amazon.com/images/I/7136vN9tAQL._UX679_.jpg", "Best gender ever!");
}

function gen08() {
  return new Gender("8", "big hairy kitty", "https://images-na.ssl-images-amazon.com/images/I/71mfn6d-G2L._SX679_.jpg", "Best gender ever!");
}
