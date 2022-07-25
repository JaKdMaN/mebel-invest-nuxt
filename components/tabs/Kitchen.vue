<template>
  <section class="kitchen-tab">
    <div v-swiper:mySwiper="examplesSwiperOptions">

      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/1.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/2.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/3.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/4.jpg" alt=""/>
          </div>
        </div>


        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/5.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/6.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/7.jpg" alt=""/>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/tabs/kitchen/8.jpg" alt=""/>
          </div>
        </div>
    </div>
      <div class="leftClick">
        <img src="@/assets/icons/slide-r.svg" alt="prev"/>
      </div>
      <div class="rightClick">
        <img src="@/assets/icons/slide-r.svg" alt="prev"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Kitchen',
  data() {
    return {
      examplesSwiperOptions: {
        breakpointsInverse: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".rightClick",
          prevEl: ".leftClick",
        },
          breakpoints: {
            1: {slidesPerView: 1},
            560: {slidesPerView: 2,spaceBetween: 20},
            1024: {slidesPerView: 3,spaceBetween: 20}
          }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.swiper-slide {

  & img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}


.rightClick {
  padding: 5px;
  position: absolute;
  top: 45%;
  right: 10px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);

  img {
    height: 60px;
    width: 60px;
    right: -5px;
  }

  cursor: pointer;
  @media screen and (max-width: 1600px) {
    img {
      height: 50px;
      width: 50px;
      right: -2px;
    }
  }
  @media screen and (max-width: 1300px) {
    img {
      height: 40px;
      width: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      height: 30px;
      width: 30px;
    }
  }
}

.leftClick {
  padding: 5px;

  position: absolute;
  top: 45%;

  left: 10px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);

  cursor: pointer;
  transform: rotate(180deg);

  img {
    height: 60px;
    width: 60px;
    right: -5px;
  }

  @media screen and (max-width: 1600px) {
    img {
      height: 50px;
      width: 50px;
      right: -2px;
    }
  }
  @media screen and (max-width: 1300px) {
    img {
      height: 40px;
      width: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
