function menuItem(name, kCal, glut, lact, src, comment) {
        this.name = name;
        this.kCal = kCal;
        this.glut = glut;
        this.lact = lact;
        this.src = src;
        this.comment = comment;
        this.display = function() {return this.name + ' ' + 'kCal: ' + this.kCal;}
}

let theFireBurger = menuItem('The Fire Burger', 800, true, true, 'https://www.synergyconsultants.com/wp-content/uploads/2015/07/restaurant-design-header.jpg', 'Vår populäraste burgare')
let salmonBurger = menuItem('Salmon Deluxe', 700, true, true, 'https://static01.nyt.com/images/2014/04/18/dining/salmonburger2/salmonburger-articleLarge.jpg', 'Burgare gjord på färsk lax')
let veggieBurger = menuItem('Heavenly Veggie Burger', 600, false, false, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fclean-veggie-burgers-ck.jpg%3Fitok%3D_RJ5dLM4&w=450&c=sc&poi=face&q=85', 'Burgare gjord på mald majs, svarta bönor, samt persilja')
let hamBurger= menuItem('HAMburger', 800, true, true, 'https://image-cdn.neatoshop.com/styleimg/53981/none/lightturquoise/default/336937-20;1482116361t.jpg', 'Den lilla grisen på burgaren medkommer')
let leSpecial = menuItem('leSpecial', 770, true, true, 'https://memeguy.com/photos/images/is-it-a-hamburger-or-a-hot-dog-301683.jpg', 'Gissa vad denna innehåller')

let list = document.createElement('ul');

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");

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


console.log( this.display() ); 


//-----------------------loop----------------------
//HTTP-delen:
/*<div id="myID">
    <h1>Välj en burgare</h1>
</div>
*/

//JS-delen:
/*
let list = document.createElement('ul');
let burgers = [theFireBurger, salmonBurger, veggieBurger, hamBurger, leSpecial];


for (burger in burgers) {
	let li = document.createElement("li");
  let txt = document.createTextNode(burger.name); //Den kommer inte åt burgers?
  li.appendChild(txt);
  list.appendChild(li);
}
document.getElementById("myID").appendChild(list); */