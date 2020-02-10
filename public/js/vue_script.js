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
 function getGender() {
    let ele = document.getElementsByName('gender');
  
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            return ele[i].value;
        }
    }
    return null;
  }

  'use strict';
const socket = io();

  const vm = new Vue({
    el: '#app',
    data: {
      burgers: food,
      yourBurger: []
    }
  })

  const vo = new Vue({
    el: '#contact',
    data: {
        fullname: '',
        street: '',
        email: '',
        housenum: '',
        payment: '',
        gender: '',
        userInfo: [],
        yourBurgers:[],
        orders: {},
        localOrder: {x: 0, y: 0},
        lastOrder: 0,
    },
    methods: {
        submitOrder: function() {
            this.fullname = "Name: " + document.getElementById("name").value;
            this.email = "E-mail: " + document.getElementById("email").value;
            var pay = document.getElementById("payment");
            this.payment = "Betalningsmetod: " + pay.options[pay.selectedIndex].value;
            this.gender = "Kön: " + getGender();
            this.yourBurgers = vm.yourBurger;

            this.userInfo = [this.fullname, this.email, this.street, this.housenum, this.payment, this.gender];
            console.log(this.userInfo);
        },
        getNext: function() {
            this.lastOrder++;
            return this.lastOrder;
        },
        displayOrder: function() {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
              };
                  this.localOrder.x = event.clientX - 10 - offset.x;
                  this.localOrder.y = event.clientY - 10 - offset.y;
        },
        addOrder: function() {
            socket.emit('addOrder', {
              orderId: this.getNext(),
              details: {
                x: this.localOrder.x,
                y: this.localOrder.y, 
              },
              orderItems: vm.yourBurger,
            });
        },
    }
});
//---------------------------loop och conditional------------------------
  // I HTML-filen: 
  /*
   <div id="myID">
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