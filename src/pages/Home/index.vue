<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <Floor v-for="(f, index) in floorsList" :key="index" :floor="f" />
    </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import { mapState } from "vuex";
export default {
    name: "Home",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
    },
    mounted() {
        this.$store.dispatch("getFloorsList");
        // this.$store.dispatch("getUserInfo");
    },
    computed: {
        ...mapState({
            floorsList: (state) => {
                // console.log(state.home.floorsList);
                return state.home.floorsList;
            },
        }),
    },
};
</script>

<style>
</style>