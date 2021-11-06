<template>
  <swiper :options="swiperOption">
    <swiper-slide>
        <img src="../assets/image1.jpg" alt="image1">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/image2.jpg" alt="image2">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/image3.jpg" alt="image3">
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 1000,
        loop: true,
      },
    }
  },
}
</script>
