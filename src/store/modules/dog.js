import axios from 'axios'

const state = {
    dogs: [],
    dogsByBreedImage: [],
};

const getters = {
    allDogs: (state) => state.dogs,
    dogsByImage: (state) => state.dogsByBreedImage
};

const actions = {
    async fetchAllDogs({ commit }) {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');

        commit('setDogs', response.data)
        console.log(response.data)
    },
    async fetchAllDogsByBreedImage({ commit }) {
        const response = await axios.get('https://dog.ceo/api/breed/hound/images');

        commit('setDogsByImage', response.data)
        console.log(response.data)
    }
};


const mutations = {
    setDogs: (state, dogs) => (state.dogs = dogs),
    setDogsByImage: (state, dogsByBreedImage) => (state.dogsByBreedImage = dogsByBreedImage)
};


export default {
    state,
    getters,
    actions,
    mutations
};