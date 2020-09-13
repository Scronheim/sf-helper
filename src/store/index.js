import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      // all speeds are in minutes
      // all powers are in MJ/item
      // all times are in seconds
      {
        id: 1,
        name: 'Copper ore',
        pic: require('@/assets/items/copper_ore.png'),
        tier: 0,
        sinkValue: 1,
        stackSize: 100
      },
      {
        id: 2,
        name: 'Iron ore',
        pic: require('@/assets/items/iron_ore.png'),
        tier: 0,
        sinkValue: 1,
        stackSize: 100
      },
      {
        id: 3,
        name: 'Copper ingot',
        pic: require('@/assets/items/copper_ingot.png'),
        tier: 0,
        sinkValue: 6,
        stackSize: 100,
        obtaining: [
          {
            ingredients: [1],
            building: 'Smelter',
            time: 2,
            products: 1,
            speed: 30,
            manualSpeed: 80,
            power: 8
          }
        ]
      }
    ]
  },
  getters: {
    items: state => state.items
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
