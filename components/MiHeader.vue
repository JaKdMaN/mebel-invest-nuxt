<template>
  <nav>
      <a href="#">
        <img src="@/assets/icons/Logo.svg" alt="logo" :class="['nav-logo']" />
      </a>
      <div class="menu-toggle" v-if="breakPoint">
        <img
          src="@/assets/icons/burger.svg"
          v-if="!navOpen"
          alt="open"
          class="filter-black"
          @click="toggleNavbar"
        />
        <img
          src="@/assets/icons/close.svg"
          alt="close"
          v-else
          @click="toggleNavbar"
        />
      </div>
      <ul :class="['menu', { active: navOpen }]">
        <li v-for="(link, index) in navLinks" :key="index">
          <a :href="link.link" @click="toggleNavbar">{{ link.name }}</a>
        </li>
        <div class="phonesM">
          <span class="phonesM__title">Адрес и контакты</span>
          <p class="phonesM__adress"> г. Алматы, ул. Толе би 127 <br>
            (вход с ул. Муратбаева)
          </p>
          <a href="tel:+77273905828" class="phonesM__phone">+7 (727) 390 58 28</a>
          <a href="tel:+77711911735" class="phonesM__phone">+7 (771) 191 17 35</a>
        </div>
      </ul>
      <div class="phones">
        <a href="tel:+77273905828">+7 (727) 390 58 28</a>
        <a href="tel:+77711911735">+7 (771) 191 17 35</a>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'MiHeader',
  data() {
    return {
      navLinks: [
        { name: "О компании", link: "#about" },
        { name: "Как мы работаем", link: "#work-process" },
        { name: "Каталог", link: "#examples" },
        { name: "Акции", link: "#discounts" },

        { name: "FAQ", link: "#FAQ" },
      ],
      navOpen: false,
      width: document.documentElement.clientWidth,
      prevScrollPos: 0,
      // welcomeSlider: document.getElementById("#welcome"),
    };
  },
  mounted() {
    let nav = document.querySelector("nav");
    window.addEventListener("resize", this.getWidth);
    window.addEventListener("scroll", this.toggleSticky);
    // window.addEventListener("mousemove", function (e) {
    //   nav.classList.toggle("sticky", e.clientY < 100);
    //   if (window.scrollY > 150) {
    //     nav.classList.toggle("hide", e.clientY > 100);
    //   }
    //   if (this.window.scrollY < 150) {
    //     nav.classList.remove("hide");
    //   }
    // });
  },
  unmounted() {
    window.removeEventListener("resize", this.getWidth);

    window.removeEventListener("scroll", this.toggleSticky);
    // window.removeEventListener("mousemove", this.hoverNav);
  },
  methods: {
    getWidth() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    },
    clickLink() {},
    toggleNavbar() {
      if (this.breakPoint) {
        this.navOpen = !this.navOpen;
        let body = document.querySelector("body");
        if (this.navOpen) {
          body.style.height = "100%";
          body.style.overflow = "hidden";
        }
        if (!this.navOpen) {
          body.style.height = "auto";
          body.style.overflow = "auto";
        }
      }
    },
    toggleSticky() {
      let nav = document.querySelector("nav");

      if (this.breakPoint) {
        nav.classList.toggle("sticky", window.scrollY > 0);
        nav.style.position = "fixed";
      }
      if (!this.breakPoint) {
        nav.classList.toggle(
          "hide",
          window.scrollY > 150 && window.scrollY > this.prevScrollPos
        );
        nav.classList.toggle(
          "sticky",
          window.scrollY > 150 && window.scrollY < this.prevScrollPos
        );
      }
      this.prevScrollPos = window.scrollY;
      nav.classList.toggle("test", window.scrollY > 150);
    },
  },
  computed: {
    breakPoint() {
      return this.width <= 920;
    },

    // height() {
    //   let rect = this.welcomeSlider.getBoundingClientRect();
    //   return rect.top;
    // },
  },
};
</script>

<style lang="scss" scoped>
.phones{
  display: flex;
  flex-direction: column;
  color: white;
  a{
    color: white;
  }
  @media screen and (max-width:500px){
    display: none;
  }
}
.phonesM{
  display: flex;
  flex-direction: column;
  @media screen and (min-width:500px){
    display: none;
  }
}
.phonesM__title{
  font-size: 26px;
  font-weight: 400;
}
.phonesM__adress{
  margin-top: 15px;
  font-size: 20px;
  font-weight: 300;
}
.phonesM__phone{
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
  color: #000;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
a,
ul {
  margin: 0;
  padding: 0;
}
.menu-toggle {
  & img {
    width: 44px;
    cursor: pointer;
    z-index: 13;
    @media screen and (max-width: 460px) {
      width: 36px;
    }
  }
}
.test {
  position: fixed;
}
.hide {
  opacity: 0 !important;
  transition: 0.4s;
}
.disable-scroll {
  height: 100vh !important;
  overflow: hidden !important;
}
.nav-logo {
  position: relative;
  z-index: 13;

  @media screen and(max-width:768px) {
    width: 140px;
  }
  @media screen and(max-width:560px) {
    width: 123px;
  }
}
nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  @media screen and (max-width: 1300px) {
    padding: 30px 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 30px 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media screen and (max-width: 560px) {
    padding: 30px 20px;
  }
  @media screen and (max-width: 460px) {
    padding: 20px 20px;
  }
}
.sticky {
  .phones{
    color: black;
    a{
      color: black;
    }
  }

  padding: 20px 100px;
  background: #fff;
  color: #000;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 1300px) {
    padding: 20px 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 560px) {
    padding: 20px 20px;
  }
  @media screen and (max-width: 460px) {
    padding: 10px 10px;
  }
  & .menu-toggle {
    .filter-black {
      filter: invert(94%) sepia(100%) saturate(2%) hue-rotate(286deg)
      brightness(107%) contrast(101%);
    }
  }
  & .nav-logo {
    filter: invert(94%) sepia(100%) saturate(2%) hue-rotate(286deg)
    brightness(107%) contrast(101%);
  }
  & .menu {
    li {
      a {
        color: #000;
      }
    }
  }
}
.menu {
  position: relative;
  display: flex;
  list-style: none;
  gap: 100px;
  animation: fadein 0.6s;
  @media screen and (max-width: 1600px) {
    gap: 75px;
  }
  @media screen and (max-width: 1300px) {
    gap: 40px;
  }
  @media screen and (max-width: 1024px) {
    gap: 25px;
  }
  & li {
    & a {
      font-weight: 300;
      font-size: 29px;
      line-height: 39px;
      white-space: nowrap;
      color: #ffffff;
      transition: 0.6s;
      @media screen and (max-width: 1600px) {
        font-size: 24px;
        line-height: 28px;
      }
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
}

@media screen and (max-width: 920px) {
  .menu {
    display: none;
  }
  .active {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0;
    height: 100vh;
    padding-left: 0;
    list-style-type: none;
    background-color: #ffffff;
    animation: fadein 0.6s;
    overflow: hidden;
    & li {
      padding: 1rem;
      & a {
        color: black;
        &:hover,
        &:active {
          color: var(--secondary-color);
        }
      }
    }
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.filter-white {
  filter: invert(94%) sepia(100%) saturate(2%) hue-rotate(286deg)
  brightness(107%) contrast(101%);
}
.filter-black {
  filter: invert(0%) sepia(48%) saturate(14%) hue-rotate(356deg) brightness(96%)
  contrast(100%);
}
</style>
