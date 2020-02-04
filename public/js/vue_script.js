//-----------------HTML-delen för itemMenu--------------
                    /*<div v-for="burger in burgers">
                        <h2>{{ burger.name }}</h2>
                        <img v-bind:src="burger.src" width="200px" height="121px">
                        <ul>
                            <li>
                                {{"kCal: " + burger.kCal}}
                            </li>
                            <li v-if="burger.lact || burger.glut"> 
                                {{"Innehåller laktos och gluten"}}
                            </li>
                            <li>
                                {{burger.comment}}
                            </li>
                        </ul>
                    </div v-for="burger in burgers">*/

//------------------Vue delen--------------
const vm = new Vue({
    el: '#app',
    data: {
      burgers: food
    }
  })

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