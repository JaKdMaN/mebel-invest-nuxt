<template>
  <div class="terms">
    <div class="materials">
      <div class="about-icon">
        <img src="@/assets/icons/terms1.svg" alt="quality" />
      </div>
      <div class="about-description">
        <p>
          Качественные<br />
          материалы
        </p>
      </div>
    </div>
    <div class="materials">
      <div class="about-icon">
        <img src="@/assets/icons/terms2.svg" alt="warranty" />
      </div>
      <div class="about-description">
        <p>
          Гарантия<br />
          12 месяцев
        </p>
      </div>
    </div>
    <div class="materials">
      <div class="about-icon">
        <img src="@/assets/icons/terms3.svg" alt="speed" />
      </div>
      <div class="about-description">
        <p>Быстрые сроки <br />производства</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms'
};
</script>

<style lang="scss" scoped>

.terms {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 100px;
  @media screen and (max-width: 1300px) {
    margin: 100px 80px;
  }
  @media screen and (max-width: 1024px) {
    margin: 100px 50px;
  }

  .materials {
    display: flex;
    align-items: center;
    gap: 45px;
    @media screen and (max-width: 1200px) {
      max-width: 516px;
      width: 100%;
      gap: 20px;
    }
  }
  .about-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    min-width: 120px;
    background-color: var(--secondary-color);
    border-radius: 10px;
  }
  .about-description {
    white-space: nowrap;
    p {
      font-weight: 300;
      margin-bottom: 0;
      font-size: 36px;
      line-height: 49px;
      color: #000000;
    }
  }

  @media screen and (max-width: 1450px) {
    .about-description {
      p {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }
  @media screen and (max-width: 1350px) {
    .about-description {
      p {
        font-size: 27px;
      }
    }
    .about-icon {
      min-width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 1200px) {
    .about-description {
      p {
        // font-size: 36px;
        // line-height: 49px;
      }
    }
    .about-icon {
      height: 100px;
      min-width: 100px;
    }
    // flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media screen and (max-width: 1113px) {
    .about-icon {
      height: 90px;
      min-width: 90px;
    }
    .about-description {
      p {
        font-size: 24px;
        line-height: 36px;
      }
    }
    // flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;

    .about-description {
      p {
        font-size: 36px;
        line-height: 49px;
      }
    }
    .about-icon {
      height: 120px;
      min-width: 120px;
    }
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    margin: 80px 40px;
  }
  @media screen and (max-width: 650px) {
    .about-description {
      p {
        font-size: 27px;
        line-height: 37px;
      }
    }
    .about-icon {
      height: 100px;
      min-width: 100px;
    }
  }
  @media screen and (max-width: 560px) {
    margin: 60px 20px;
  }
  @media screen and (max-width: 450px) {
  }
}
</style>
