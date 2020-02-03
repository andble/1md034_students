const vm = new Vue({
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