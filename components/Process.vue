<template>
  <section id="work-process">
    <h1>Как мы работаем</h1>

    <div v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/how-slider1.webp" alt="заявка" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/how-slider2.webp" alt="Дизайн проект" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/how-slider3.webp" alt="договр" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/how-slider4.webp" alt="Создаем мебель" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img
              src="@/assets/images/how-slider5.webp"
              alt="доставка и сборка"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/how-slider6.webp" alt="связь" />
          </div>
        </div>
      </div>
      <div class="leftClick">
        <img src="@/assets/icons/slide-r.svg" alt="prev" />
      </div>
      <div class="rightClick">
        <img src="@/assets/icons/slide-r.svg" alt="next" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Process",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        breakpointsInverse: true,
        navigation: {
          nextEl: ".rightClick",
          prevEl: ".leftClick",
        },
        breakpoints: {
          1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          700: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#work-process {
  margin: 0px 100px 80px 100px;
  text-align: center;
  @media screen and (max-width: 1300px) {
    margin: 0 80px 80px 80px;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 50px 80px 50px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 40px 60px 40px;
  }
  @media screen and (max-width: 560px) {
    margin: 0 20px 40px 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 82px;
    text-transform: uppercase;
    color: var(--secondary-color);
    margin-bottom: 40px;

    @media screen and(max-width:1300px) {
      font-size: 48px;
      margin-bottom: 40px;
    }
    @media screen and(max-width:1024px) {
      font-size: 42px;
    }
    @media screen and(max-width:768px) {
      font-size: 36px;
    }
    @media screen and(max-width:550px) {
      font-size: 30px;
      line-height: 41px;
    }
  }
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .slider-img {
      & img {
        margin: auto;
        width: 100%;
        height: 100%;
        // max-height: 738px;
        object-fit: contain;
        @media screen and(max-width:700px) {
          min-width: 380px;
        }
        @media screen and(max-width:440px) {
          min-width: 340px;
        }
      }
    }
  }
}

.rightClick {
  padding: 5px;
  position: absolute;
  top: 30%;
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
  top: 30%;
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
