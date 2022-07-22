<template>
  <section id="discounts">
      <div v-swiper:mySwiper="swipeDiscountsOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="discount first">
              <div class="slide-text">
                <h3>скидка - 10%</h3>
                <p>На все кухни, при заказе с сайта</p>
              </div>
              <button
                class="button button-primary slider-btn"
                @click="$emit('openModal', true)"
              >
                Заказать
              </button>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="discount second">
              <div class="slide-text">
                <h3>сертификат до 15.000₸</h3>
                <p>
                  На матрасы SUPRA, AGORA,<br />
                  BOSFOR, SPARTA, SIDE
                </p>
              </div>
              <button
                class="button button-primary slider-btn"
                @click="$emit('openModal', true)"
              >
                Заказать
              </button>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="discount third">
              <div class="slide-text">
                <h3>скидка - 10%</h3>
                <p>На все шкафы до конца месяца</p>
              </div>
              <button
                class="button button-primary slider-btn"
                @click="$emit('openModal', true)"
              >
                Заказать
              </button>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="discount fourth">
              <div class="slide-text">
                <h3>скидка - 10%</h3>
                <p>На комплекты офисной мебели</p>
              </div>

              <button
                class="button button-primary slider-btn"
                @click="$emit('openModal', true)"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
  </section>
</template>

<script>
export default {
  emits: {
    openModal: null,
  },
  data() {
    return {
      toggleModal: false,
      swipeDiscountsOptions: {
        loop: true,
        autoplay: true,
        delay: 5000,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>

.carousel-wrapper{
  ::v-deep.swiper-pagination-bullets-active {
    background-color: black;
  }
}


#discounts {
  margin: 0 100px 100px 100px;

  @media screen and(max-width:1300px) {
    margin: 0 80px 80px 80px;
  }

  @media screen and(max-width:1024px) {
    margin: 0 50px 60px 50px;
  }
  @media screen and(max-width:768px) {
    margin: 0 40px 50px 40px;
  }
  @media screen and(max-width:560px) {
    margin: 0 20px 40px 20px;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper {
    height: 800px;
    @media screen and(max-width:1300px) {
      height: 700px;
    }
    @media screen and(max-width:768px) {
      height: 600px;
    }
  }
  .swiper-slide {
    background-position: center;
    background-size: 700px;
    .discount {
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @media screen and(max-width:1300px) {
        height: 600px;
      }
      @media screen and(max-width:768px) {
        padding: 0 20px;
        height: 509px;
      }
      & h3 {
        font-weight: 600;
        font-size: 90px;
        line-height: 123px;
        text-transform: uppercase;

        color: #ffffff;
        @media screen and(max-width:1600px) {
          font-size: 80px;
          line-height: 114px;
        }
        @media screen and(max-width:1300px) {
          font-size: 70px;
          line-height: 100px;
        }
        @media screen and(max-width:1090px) {
          font-size: 66px;
          line-height: 92px;
        }
        @media screen and(max-width:932px) {
          text-align: center;
        }
        @media screen and(max-width:768px) {
          font-size: 55px;
          line-height: 76px;
        }
        @media screen and(max-width:560px) {
          font-size: 45px;
          line-height: 61px;
        }
      }
      & .slide-text {
        padding-top: 70px;
        margin-top: auto;
        margin-bottom: auto;
      }
      & p {
        font-weight: 300;
        font-size: 40px;
        line-height: 54px;
        text-align: center;

        color: #ffffff;
        margin-top: 35px;
        @media screen and(max-width:1600px) {
          font-size: 36px;
          line-height: 50px;
        }
        @media screen and(max-width:1300px) {
          font-size: 32px;
          line-height: 46px;
        }
        @media screen and(max-width:1024px) {
          font-size: 30px;
          line-height: 42px;
        }
        @media screen and(max-width:768px) {
          font-size: 27px;
          line-height: 37px;
        }
        @media screen and(max-width:560px) {
          font-size: 25px;
          line-height: 34px;
        }
      }

      & .slider-btn {
        width: 602px;
        text-align: center;
        margin-bottom: 117px;
        @media screen and(max-width:1600px) {
          margin-bottom: 100px;
        }
        @media screen and(max-width:1300px) {
          margin-bottom: 70px;
          height: 100px;
          font-size: 31px;
          line-height: 47px;
        }
        @media screen and(max-width:768px) {
          height: 78px;
          width: 100%;
          font-size: 21px;
          line-height: 29px;
        }
      }
    }
  }

  .first {
    background-image: url("~@/assets/images/discount1.jpg");
  }
  .second {
    background-image: url("~@/assets/images/discount2.jpg");
  }
  .third {
    background-image: url("~@/assets/images/discount3.jpg");
  }
  .fourth {
    background-image: url("~@/assets/images/discount4.jpg");
  }
}
</style>
