/*
  Load
  State managment for load
*/

// Constant to reset this state information.
const initialState = () => ({
  all: true
});

// State object.
const state = initialState;

// Getter functions.
const getters = {}

// Actions.
const actions = {
  async getPizzas({
    commit
  }) {
    await this.$axios
      .$get('/pizzas')
      .then(res => {
        commit('SET_PIZZAS', res)
      })
      .catch(error => {
        console.log('REDIRIGIR A PANTALLA DE ERROR!')
      })
  },
}

// Mutations
const mutations = {
  SET_PIZZAS(state, payload) {
    state.all = payload;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
