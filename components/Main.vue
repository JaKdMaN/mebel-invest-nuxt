<template>
  <main class="main-section" id="welcome">
    <div v-swiper:mainSwiper="mainSwiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide-block section first">
            <div class="slide-text">
              <div class="slide-header">
                <h1>Широкий</h1>
                <h3>Выбор мебели</h3>
              </div>
              <div class="slide-description">
                <p>
                  Уникальные интерьерные решения <span>для дома и офиса</span>
                </p>
              </div>
            </div>
            <button
              class="slide-button button button-primary"
              @click="$emit('openModal', true)"
            >
              Оставить заявку
            </button>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-block section second">
            <div class="slide-text">
              <div class="slide-header">
                <h3>Дизайн-Проект</h3>
                <h1>Бесплатно</h1>
              </div>
              <div class="slide-description">
                <p>Вы получите <span>замер, проект и визуализацию</span></p>
              </div>
            </div>
            <button
              class="slide-button button button-primary"
              @click="$emit('openModal', true)"
            >
              Оставить заявку
            </button>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-block section third">
            <div class="slide-text">
              <div class="slide-header">
                <h2>Широкий выбор</h2>
                <h4>Материалов и цветов</h4>
              </div>
              <div class="slide-description">
                <p>
                  Создадим <span>уникальную мебель</span> по индивидуальным
                  размерам
                </p>
              </div>
            </div>
            <button
              class="slide-button button button-primary"
              @click="$emit('openModal', true)"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      toggleModal: false,
      mainSwiperOptions: {
        effect: "fade",
        autoplay: true,
        delay: 5000,
        loop: true,
        disableOnInteraction: false,
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  background-position: center;
  background-size: cover;

  .slide-block {
    padding: 100px 100px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;

    background-size: cover;
    background-position: center;
    @media screen and(max-width: 1600px) {
      padding: 100px 100px 50px 100px;
    }
    @media screen and(max-width: 1440px) {
      padding: 100px 100px 50px 100px;
    }
    @media screen and(max-width: 1300px) {
      padding: 80px 80px;
    }

    @media screen and(max-width: 1024px) {
      padding: 80px 50px;
    }
    @media screen and(max-width: 768px) {
      padding: 80px 40px;
    }
    @media screen and(max-width: 560px) {
      padding: 60px 20px 60px 20px;
    }
  }

  .slide-text {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    margin-top: auto;
  }

  .slide-description {
    margin-top: 32px;
    width: 769px;
    // height: 136px;
  }

  .slide-header {
    // height: 337px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .slide-button {
    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    height: 115px;
    width: 492px;
    border: none;
    cursor: pointer;

    @media screen and(max-width: 1440px) {
      height: 75px;
      width: 440px;
    }
  }

  .section {
    & h1 {
      font-weight: 700;
      font-size: 157px;
      line-height: 185px;
      text-transform: uppercase;
      white-space: nowrap;
      color: #ffffff;
      margin-bottom: 0;
    }

    & h2 {
      font-weight: 700;
      font-size: 103px;
      line-height: 104px;
      text-transform: uppercase;
      white-space: nowrap;
      color: #ffffff;
      margin-bottom: 0;
    }

    & h4 {
      font-weight: 600;
      font-size: 79px;
      line-height: 114px;
      text-transform: uppercase;
      white-space: nowrap;
      color: #ffffff;
      margin-bottom: 0;
    }

    & h3 {
      font-weight: 700;
      font-size: 105px;
      line-height: 143px;
      text-transform: uppercase;
      white-space: nowrap;
      color: #ffffff;
      margin-bottom: 0;
    }

    & p {
      font-weight: 300;
      font-size: 50px;
      line-height: 68px;
      color: #ffffff;
      margin-bottom: 0;

      span {
        font-weight: 600;
      }
    }
  }

  @media screen and(max-width: 1600px) {
    .slide-header {
      h1 {
        font-size: 120px;
        line-height: 150px;
      }

      h3 {
        font-size: 90px;
        line-height: 120px;
      }

      h2 {
        font-size: 94px;
        line-height: 104px;
      }

      h4 {
        font-size: 68px;
        line-height: 104px;
      }
    }
    .slide-description {
      p {
        font-size: 40px;
        line-height: 58px;
      }
    }
  }
  @media screen and(max-width: 1440px) {
    .slide-header {
      h1 {
        font-size: 62px;
        line-height: 70px;
      }

      h3 {
        font-size: 60px;
        line-height: 70px;
      }

      h2 {
        font-size: 65px;
        line-height: 64px;
      }

      h4 {
        font-size: 55px;
        line-height: 64px;
      }
    }
    .slide-description {
      p {
        font-size: 40px;
        line-height: 58px;
      }
    }
    .swiper-slide {
      .slide-block {
        padding: 100px 100px 50px 100px;
      }
    }
  }
  @media screen and(max-width: 1200px) {
    .slide-text {
      align-items: center;
      margin-bottom: auto;
      margin-top: auto;
    }
    .slide-block {
      align-items: center;
      text-align: center;
    }
    .slide-button {
      height: 105px;
    }
  }
  @media screen and(max-width: 1024px) {
    .slide-header {
      h1 {
        font-size: 92px;
        line-height: 120px;
      }

      h3 {
        font-size: 72px;
        line-height: 110px;
      }

      h2 {
        font-size: 80px;
        line-height: 96px;
      }

      h4 {
        font-size: 58px;
        line-height: 96px;
      }
    }
    .slide-description {
      p {
        font-size: 38px;
        line-height: 58px;
      }
    }
    .slide-button {
      height: 100px;

      font-size: 28px;
    }
  }
  @media screen and(max-width: 768px) {
    .slide-button {
      width: 100%;
      height: 88px;
    }
    .slide-header {
      h1 {
        font-size: 80px;
        line-height: 100px;
      }

      h3 {
        font-size: 60px;
        line-height: 78px;
      }

      h2 {
        font-size: 55px;
        line-height: 55px;
      }

      h4 {
        font-size: 45px;
        line-height: 55px;
      }
    }
    .slide-description {
      white-space: normal;
      word-wrap: normal;
      max-width: 550px;

      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
  @media screen and (max-width: 560px) {
    .slide-header {
      h1 {
        font-size: 68px;
        line-height: 90px;
        margin-bottom: 0;
      }

      h3 {
        font-size: 45px;
        line-height: 62px;
        margin-bottom: 0;
      }

      h2 {
        font-size: 39px;
        line-height: 53px;
        margin-bottom: 0;
      }

      h4 {
        font-size: 30px;
        line-height: 41px;
        margin-bottom: 0;
      }
    }
    .slide-description {
      white-space: normal;
      word-wrap: normal;
      max-width: 388px;

      p {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (max-width: 460px) {
    .slide-header {
      h1 {
        font-size: 60px;
        line-height: 70px;
      }

      h3 {
        font-size: 39px;
        line-height: 52px;
      }

      h2 {
        font-size: 39px;
        line-height: 53px;
      }

      h4 {
        font-size: 30px;
        line-height: 41px;
      }
    }
    .slide-description {
      white-space: normal;
      word-wrap: normal;
      max-width: 365px;

      p {
        font-size: 24px;
        line-height: 36px;
      }
    }
    .slide-button {
      height: 78px;

      font-size: 21px;
    }
  }

  .first {
    background-image: url("~/assets/images/welcome1.webp");
  }

  .second {
    background-image: url("~/assets/images/welcome2.webp");
  }

  .third {
    background-image: url("~/assets/images/welcome3.webp");
  }
}
</style>
