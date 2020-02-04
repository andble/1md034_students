/*const vm = new Vue({
    el: '#myID',
    data: {
      arbitraryVariableName: 'Välj en burgare',
      b1: theFireBurger.display(), 
      b2: salmonBurger.display(), 
      b3: veggieBurger.display(), 
      b4: hamBurger.display(), 
      b5: leSpecial.display()
    }
  })
*/
//---------------------------loop och conditional------------------------
  // I HTML-filen: 
  /* <div id="myID">
    <h1> {{arbitraryVariableName}} </h1>

      <ul>
       <li v-for="burger in burgers">
        {{ burger.display() }}
       </li>
      </ul>
</div>*/

//I Vue:
/*
<div id="myID">
    <h1> {{arbitraryVariableName}} </h1>

      <ul>
       <li v-for="burger in burgers">
      {{ burger.display()}} <br /> <span v-if="burger.glut"> Contains gluten  </span> <br /> <span v-if="burger.lact"> Contains lactose </span>
       </li>
      </ul>
</div>
  })*/