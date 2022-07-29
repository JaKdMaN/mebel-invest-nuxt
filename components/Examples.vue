<template>
  <section id="examples">
    <h1>Примеры наших работ</h1>
    <div class="tabs">
      <div class="tabs-nav">
        <div v-swiper:mySwiper="allExamplesSwiperOptions">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide nav-block"
              v-for="tab in tabs"
              :key="tab"
              @click="currentTab = tab"
              :class="['tab-button', { active: currentTab === tab }]"
            >
              <p>{{ normalizeName(tab) }}</p>
            </div>
          </div>
        </div>
      </div>

      <component :is="currentTab" class="tab fade-in"></component>
    </div>
    <button class="button button-primary" @click="$emit('openModal', true)">
      Оставить заявку
    </button>
  </section>
</template>

<script>
import Desks from "@/components/tabs/Desks";
import Stelaji from "@/components/tabs/Stelaji";
import Stoiki from "@/components/tabs/Stoiki";
import Kitchen from "@/components/tabs/Kitchen";
import LivingRoom from "@/components/tabs/LivingRoom";
import Bath from "@/components/tabs/Bath";
import Shkaf from "@/components/tabs/Shkaf";
import Office from "@/components/tabs/Office";
import Prihojie from "@/components/tabs/Prihojie";
import Beds from "@/components/tabs/Beds";
import Garderob from "@/components/tabs/Garderob";

export default {
  components: {
    Desks,
    Stelaji,
    Stoiki,
    Kitchen,
    Bath,
    LivingRoom,
    Shkaf,
    Office,
    Prihojie,
    Beds,
    Garderob,
  },
  emits: {
    openModal: null,
  },
  data() {
    return {
      toggleModal: false,
      currentTab: "Kitchen",
      tabs: [
        "Desks",
        "Stelaji",
        "Stoiki",
        "Kitchen",
        "LivingRoom",
        "Shkaf",
        "Office",
        "Prihojie",
        "Beds",
        "Garderob",
        "Bath",
      ],
      allExamplesSwiperOptions: {
        slidesPerView: 6,
        breakpointsInverse: true,
        slideToClickedSlide: true,
        breakpoints: {
          1: { slidesPerView: 3 },
          650: { slidesPerView: 5 },
        },
      },
    };
  },
  methods: {
    normalizeName(name) {
      return name === "Kitchen"
        ? "Кухни"
        : name === "LivingRoom"
        ? "Гостинные"
        : name === "Bath"
        ? "Ванные"
        : name === "Beds"
        ? "Кровати"
        : name === "Garderob"
        ? "Гардеробные"
        : name === "Office"
        ? "Для офиса"
        : name === "Prihojie"
        ? "Прихожие"
        : name === "Desks"
        ? "Парты"
        : name === "Stelaji"
        ? "Стелажи"
        : name === "Stoiki"
        ? "Стойки"
        : "Шкафы";
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 1;
}

#examples {
  button {
    border: none;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  margin: 0 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and(max-width: 1600px) {
    & button {
      margin-top: 60px;
    }
  }
  @media screen and(max-width: 1300px) {
    margin: 0 80px 80px 80px;

    & button {
      margin-top: 60px;
    }
  }
  @media screen and(max-width: 1024px) {
    margin: 0 50px 80px 50px;
    & button {
      margin-top: 60px;
    }
  }

  @media screen and(max-width: 768px) {
    margin: 0 40px 80px 40px;
    & button {
      width: 100%;
      height: 100px;
      margin-top: 60px;
      font-size: 28px;
      line-height: 40px;
      white-space: nowrap;
    }
  }
  @media screen and(max-width: 560px) {
    margin: 0 20px 60px 20px;
    & button {
      margin-top: 50px;
      height: 78px;
      font-size: 21px;
    }
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

  .tabs {
    height: auto;
    width: 100%;

    .tabs-nav {
      margin-bottom: 50px;
      @media screen and(max-width: 1024px) {
        margin-bottom: 40px;
      }
      @media screen and(max-width: 768px) {
        margin-bottom: 20px;
      }
    }

    .nav-block {
      text-align: center;
      font-weight: 300;
      font-size: 35px;
      line-height: 48px;
      white-space: nowrap;

      &:hover {
        cursor: pointer;
      }

      @media screen and (max-width: 1920px) {
        margin: 0 20px;
      }

      @media screen and (max-width: 1550px) {
        font-size: 30px;
        line-height: 42px;
        margin: 0;
      }
      @media screen and (max-width: 1200px) {
        font-size: 26px;
        line-height: 40px;
      }
      @media screen and (max-width: 1084px) {
        font-size: 24px;
        line-height: 38px;
      }
      @media screen and (max-width: 998px) {
        font-size: 21px;
        line-height: 33px;
      }
      @media screen and (max-width: 550px) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    & .tab-button.active {
      border-bottom: 4px solid var(--secondary-color);
    }
  }

  @keyframes fadein {
    from {
      // opacity: 0.7;
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
      // opacity: 1;
    }
  }

  .fade-in {
    animation: fadein 0.5s;
  }
}
</style>
