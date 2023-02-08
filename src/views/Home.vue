<template>
    <div class="justify-center align-middle ml-9">
        <h3>Dogs</h3>
        <div class="grid grid-cols-3">            
            <card-view :dogsByImage="dogsByImage" ></card-view>

            <!-- <div v-for="dog in allDogs" :key="dog.id" class="cursor-pointer relative text-center border rounded-md dog p-3 bg-white">
                {{ dog.title }}
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardView from '../components/CardView.vue';
export default { 
    name: "Home",
    components: {
        CardView,
    },
    computed:  mapGetters(['dogsByImage']),
    created() {
        // this.fetchAllDogs();
        this.fetchAllDogsByBreedImage();
    },
    methods: {
        // ...mapActions(['fetchAllDogs']),
        ...mapActions(['fetchAllDogsByBreedImage']),
    },
}
</script>

<style scoped>
/* .dogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.dog {
    border: 1px solid #ccc;
    background: rgb(240 249 255);;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
} */
</style>
