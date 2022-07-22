<template>
  <section id="footer">
    <div class="logo tablet">
      <a href="#"><img src="@/assets/icons/Logo.svg" alt="logo" /></a>
      <p>© ТОО «Мебель Инвест», 2022. <br />Все права защищены.</p>
    </div>
    <div class="top">
      <a href="#"><img src="@/assets/icons/Logo.svg" alt="logo" /></a>
    </div>
    <div class="info-block">
      <div class="nav">
        <ul>
          <a href="#" class="primary">Главная</a>
          <div class="links">
            <li class="nav-link"><a href="#about">О компании</a></li>

            <li class="nav-link">
              <a href="#work-process">Как мы работаем</a>
            </li>
            <li class="nav-link"><a href="#examples">Каталог</a></li>
            <li class="nav-link"><a href="#discounts">Акции</a></li>
            <li class="nav-link"><a href="#FAQ">FAQ</a></li>
          </div>
        </ul>
      </div>
      <div class="contacts">
        <p class="primary">Адрес и контакты</p>
        <p>
          г. Алматы, ул. Толе би 127 <br />
          <span>(вход с ул. Муратбаева)</span>
        </p>
        <a href="tel:+77273905828">+7 (727) 390 58 28</a>
        <a href="tel:+77711911735">+7 (771) 191 17 35</a>
        <div class="contact-icons">
          <div class="icon-wrap">
            <a href="https://www.instagram.com/mebel_invest/">
              <img src="@/assets/icons/insta.svg" alt="insta"
              /></a>
          </div>
          <div class="icon-wrap">
            <a href="https://wa.me/77711911735">
              <img src="@/assets/icons/whatsup.svg" alt="whatsup" />
            </a>
          </div>
          <div class="icon-wrap">
            <a href="https://t.me/Invest_mebel">
              <img src="@/assets/icons/telega.svg" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <p>© ТОО «Мебель Инвест», 2022.</p>
      <p>Все права защищены.</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  height: 450px;
  padding: 81px 100px 89px 100px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    padding: 60px 70px 69px 70px;
  }
  @media screen and (max-width: 1024px) {
    padding: 42px 20px 30px 20px;
    flex-direction: column;
    height: auto;
  }
  .logo {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & img {
      width: 175px;
    }
    & p {
      font-weight: 300;
      font-size: 23px;
      line-height: 31px;

      color: #ffffff;
    }
  }
  .info-block {
    display: flex;
    height: 100%;
    gap: 100px;
    @media screen and (max-width: 1200px) {
      gap: 70px;
    }
    @media screen and (max-width: 1024px) {
      gap: 10px;
      width: 100%;
      justify-content: space-between;
    }
    @media screen and (max-width: 560px) {
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    & .nav {
      display: flex;
      justify-content: space-between;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0;
        padding-left: 0;
        li {
          a {
            text-decoration: none;
            color: #ffffff;
            font-weight: 300;
            font-size: 23px;
            line-height: 31px;
            @media screen and (max-width: 560px) {
              font-size: 21px;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
  .contacts {
    a{
      color: #fff;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 560px) {
      margin-top: 40px;
      align-items: center;
      text-align: center;
      gap: 43px;
      & .primary {
        margin-bottom: 0 !important;
      }
      p {
        font-size: 21px;
        line-height: 28px;
      }
    }
    & .primary {
      font-weight: 700;
      font-size: 25px;
      line-height: 34px;

      color: #ffffff;
    }
    p {
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
      color: #ffffff;
      @media screen and (max-width: 560px) {
        font-size: 21px;
        line-height: 28px;
      }
      & span {
        font-weight: 300;
        font-style: italic;
      }
    }
    .contact-icons {
      display: flex;
      gap: 22px;
      .icon-wrap {
        height: 43px;
        width: 43px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .primary {
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;

    color: #ffffff;
    @media screen and (max-width: 560px) {
    }
  }
  .tablet {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .top,
  .bot {
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
      & img {
        margin-bottom: 40px;
      }
      & p {
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
        &:first-child {
          margin-top: 40px;
        }
      }
    }
  }
}
.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 1024px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 560px) {
    margin-top: 32px;
  }
}
.nav-link {
  padding: 0;
  a {
    margin: 0;
  }
}
p {
  margin-bottom: 0;
}
</style>
