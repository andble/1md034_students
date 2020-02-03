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

console.log( this.display() ); 