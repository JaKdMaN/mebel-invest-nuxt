<template>
  <section class="bath-tab">
    <h1>наше производство</h1>

    <div v-swiper:mySwiper="productionSwiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/production1.webp" alt="Production1" />
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/production2.webp" alt="Production2" />
          </div>
        </div>

        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production3.webp" alt="Production3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production4.webp" alt="Production3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production5.webp" alt="Production3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production6.webp" alt="Production3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production7.webp" alt="Production3" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/Production8.webp" alt="Production3" />
          </div>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>

      <div class="leftClick">
        <img src="@/assets/icons/slide-r.svg" alt="prev" />
      </div>
      <div class="rightClick">
        <img src="@/assets/icons/slide-r.svg" alt="prev" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OurProduction",
  data() {
    return {
      productionSwiperOptions: {
        breakpointsInverse: true,
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".rightClick",
          prevEl: ".leftClick",
        },
        breakpoints: {
          1: { slidesPerView: 1 },
          560: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.bath-tab {
  margin: 0 100px 100px 100px;
  @media screen and (max-width: 1300px) {
    margin: 0 80px 80px 80px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 50px 80px 50px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 40px 80px 40px;
  }
  @media screen and (max-width: 560px) {
    margin: 0 20px 80px 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 82px;
    text-transform: uppercase;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 40px;
    @media screen and(max-width: 1600px) {
      margin-bottom: 60px;
    }
    @media screen and(max-width: 1300px) {
      font-size: 48px;
      margin-bottom: 30px;
    }
    @media screen and(max-width: 1024px) {
      font-size: 42px;
      margin-bottom: 20px;
    }
    @media screen and(max-width: 768px) {
      font-size: 36px;
      margin-bottom: 10px;
    }
    @media screen and(max-width: 550px) {
      font-size: 30px;
      line-height: 41px;
    }
  }
}

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
