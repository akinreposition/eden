import { createStore } from 'vuex';
import dogs from './modules/dog';

const store = createStore({
    modules: {
        dogs
    },
    state() {
        return {

        }
    },
    getters: {},
    mutations: {},
    actions: {}
});

export default store;
