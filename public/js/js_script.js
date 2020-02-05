/*
let myButton = document.getElementById('submit');
myButton.onclick = function () {

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;


let street = document.getElementById("street").value;


let number = document.getElementById("nummer").value;


let pay = document.getElementById("payment");
let payment = pay.options[pay.selectedIndex].value;


let gender = getGender();


let userInfoArray = [name, email, street, number, payment, gender];
}


function getGender() {
  let ele = document.getElementsByName('gender');

  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
          return ele[i].value;
      }
  }
  return null;
}




//--------------------------Old school burgers-------------------
function menuItem(name, kCal, glut, lact, src, comment) {
        this.name = name;
        this.kCal = kCal;
        this.glut = glut;
        this.lact = lact;
        this.src = src;
        this.comment = comment;
        this.display = function() {return this.name + '\n' + 'kCal: ' + this.kCal + '/n' + this.comment;}
}

let theFireBurger = new menuItem("The Fire Burger", 800, true, true, 'https://i.iheart.com/v3/re/new_assets/5a0ae89a2697c93e2ac77b9d?ops=max%28750%2C0%29%2Cquality%2880%29', 'Vår populäraste burgare');
let veggieBurger = new menuItem('Heavenly Veggie Burger', 600, false, false, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fclean-veggie-burgers-ck.jpg%3Fitok%3D_RJ5dLM4&w=450&c=sc&poi=face&q=85', 'Burgare gjord på mald majs, svarta bönor, samt persilja');
let salmonBurger = new menuItem('Salmon Deluxe', 700, true, true, 'https://static01.nyt.com/images/2014/04/18/dining/salmonburger2/salmonburger-articleLarge.jpg', 'Burgare gjord på färsk lax');
let hamBurger= new menuItem('HAMburger', 800, true, true, 'https://image-cdn.neatoshop.com/styleimg/53981/none/lightturquoise/default/336937-20;1482116361t.jpg', 'Den lilla grisen på burgaren medkommer');
let leSpecial = new menuItem('leSpecial', 770, true, true, 'https://memeguy.com/photos/images/is-it-a-hamburger-or-a-hot-dog-301683.jpg', 'Gissa vad denna innehåller');
*/

//---------------HTML-delen------------
                /*<div class="wrapper" id="app">
                   
                </div>   

//-------------------------JS-delen

//let theFireBurger = JSON.parse({ "name":"The Fire Burger", "kCal":800, "glut":true, "lact": true, "src":"https://i.iheart.com/v3/re/new_assets/5a0ae89a2697c93e2ac77b9d?ops=max%28750%2C0%29%2Cquality%2880%29", "comment": "Vår populäraste burgare"});

//let burgers = [theFireBurger, salmonBurger, veggieBurger, hamBurger, leSpecial];
let grid = document.getElementById("app");

for (let i = 0; i <food.length; i++) {

  burger = food[i];

  let box = document.createElement("div");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  let burgerName = document.createTextNode(burger.name);
  img.src = burger.src;
  img.class = "burgerpic";
  img.width = "200";
  img.height = "121";
  let kCal = document.createTextNode("kCal: " + burger.kCal);
  if(burger.lact || burger.glut) {
    let allergy = document.createTextNode("Innehåller laktos och gluten");
    li2.appendChild(allergy);
    ul.appendChild(li2);
  }
  let comment = document.createTextNode(burger.comment);
  
  h2.appendChild(burgerName);
  box.appendChild(h2);
  box.appendChild(img);

  li1.appendChild(kCal);
  li3.appendChild(comment);

  ul.appendChild(li1);
  ul.appendChild(li3);
  
  box.appendChild(ul);

  grid.appendChild(box);
}*/