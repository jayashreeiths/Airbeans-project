import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:[
      {
      id:1,
      name:"Brggkaffe",
      cost:"49 kr",
      Brew:"Bryggd på månadens bönor"
      },
      {
        id:2,
        name:"Caffè Doppio",
        cost:"49 kr",
        Brew:"Bryggd på månadens bönor"

        },
      {
        id:3,
        name:"Cappuccino",
        cost:"49 kr",
        Brew:"Bryggd på månadens bönor"
        
          },
          {
            id:4,
            name:"Latte Macchiato",
        cost:"49 kr",
        Brew:"Bryggd på månadens bönor"
            },
            {
              id:5,
              name:"Kaffe Latte",
          cost:"49 kr",
          Brew:"Bryggd på månadens bönor"
              },   
              {
                id:6,
                name:"Cortado",
            cost:"49 kr",
            Brew:"Bryggd på månadens bönor"
                },   

    ]
  },
  getters:{
    menu:state=>{
    return state.menu;
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
