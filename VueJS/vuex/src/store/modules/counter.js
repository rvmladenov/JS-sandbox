const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: (state, by) => {
        state.counter += by;
    },
    decrement: (state, by) => {
        state.counter -= by;
    }
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload.by);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload.by);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}