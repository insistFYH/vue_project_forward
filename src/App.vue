<template>
    <div id="app">
        <ShopHead></ShopHead>
        <router-view></router-view>
        <ShopFoot v-show="$route.meta.isShow"></ShopFoot>
    </div>
</template>

<script>
import ShopHead from "./components/ShopHead";
import ShopFoot from "./components/ShopFoot";
export default {
    name: "App",
    components: {
        ShopHead,
        ShopFoot,
    },
    mounted() {
        this.$store.dispatch("getCategoryList");
    },
};
</script>

<style>
</style>
