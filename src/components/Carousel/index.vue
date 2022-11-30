<template>
    <div class="swiper-container" ref="Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(car) in carouselList" :key="car.id">
                <img :src="car.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "Carousel",
    props: ["carouselList"],
    watch: {
        carouselList: {
            //为floor设计immediate，因为floor中数据并未改变
            immediate: true,
            handler(newvalue, oldvalue) {
                this.$nextTick(() => {
                    var mySwiper = new Swiper(this.$refs.Swiper, {
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                });
            },
        },
    },
};
</script>

<style>
</style>