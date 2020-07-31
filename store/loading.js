/*
  Load
  State managment for load
*/

// Constant to reset this state information.
const initialState = () => ({
    loading: true
});

// State object.
const state = initialState;

// Getter functions.
const getters = {
    getStateLoading: state => {
        return state.loading;
    },
}

// Actions.
const actions = {
    setLoading({
        commit
    }, data) {
        commit('SET_LOADING', data)
    },
}

// Mutations
const mutations = {
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
