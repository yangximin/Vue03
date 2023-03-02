<template>
    <div class="floorBanner">
        <div class="swiper-container" ref="floor1Swiper">
            <div class="swiper-wrapper">
                <div v-for="item of list" :key="item.id" class="swiper-slide">
                    <img :src="item.imgUrl" />
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: 'Carousel',
    props: ["list"],
    watch: {
        list: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    new Swiper(this.$refs.floor1Swiper, {
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button_prev",
                        },
                    });
                })
            }
        }
    }
}
</script>

<style></style>