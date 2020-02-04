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


let burgers = [theFireBurger, salmonBurger, veggieBurger, hamBurger, leSpecial];
let grid = document.getElementById("app");

for (let i in burgers) {

  burger = burgers[i];

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
}



//burger 1
/*
let list = document.createElement('ul');

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let txt1 = document.createTextNode('800 kCAL');
let txt2 = document.createTextNode('Innehåller laktos och gluten');
let txt3 = document.createTextNode('Vår populäraste burgare');

li1.appendChild(txt1);
li2.appendChild(txt2);
li3.appendChild(txt3);

list.appendChild (li1);
list.appendChild (li2);
list.appendChild (li3);

document.getElementById("boxA").appendChild(list); 
*/
//burger 2
/*
let list2 = document.createElement('ul');

let li4 = document.createElement("li");
let li5 = document.createElement("li");
let li6 = document.createElement("li");

let txt4 = document.createTextNode('700 kCAL');
let txt5 = document.createTextNode('Innehåller laktos och gluten');
let txt6 = document.createTextNode('Burgare gjord på färsk lax');

li1.appendChild(txt4);
li2.appendChild(txt5);
li3.appendChild(txt6);

list.appendChild (li4);
list.appendChild (li5);
list.appendChild (li6);

document.getElementById("gridboxb").appendChild(list2); */
/*
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let txt1 = document.createTextNode(theFireBurger.display());
let txt2 = document.createTextNode(salmonBurger.display());
let txt3 = document.createTextNode(veggieBurger.display());
let txt4 = document.createTextNode(hamBurger.display());
let txt5 = document.createTextNode(leSpecial.display());

li1.appendChild(txt1);
li2.appendChild(txt2);
li3.appendChild(txt3);
li4.appendChild(txt4);
li5.appendChild(txt5);

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
list.appendChild(li5);

document.getElementById("myID").appendChild(list); 


//console.log( this.display() ); 


//-----------------------loop----------------------
//HTTP-delen:
<div id="myID">
    <h1>Välj en burgare</h1>
</div>


//JS-delen:

let list = document.createElement('ul');
let burgers = [theFireBurger, salmonBurger, veggieBurger, hamBurger, leSpecial];


for (burger in burgers) {
	let li = document.createElement("li");
  let txt = document.createTextNode(burger.name); //Den kommer inte åt burgers?
  li.appendChild(txt);
  list.appendChild(li);
}
document.getElementById("myID").appendChild(list); */
/*
<ul>
<li>800 kCAL</li>
<li>Innehåller <span class="allergy">laktos och gluten</span></li>
<li>Vår populäraste burgare</li>
</ul>*/