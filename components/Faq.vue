<template>
  <section id="FAQ">
    <h1>часто задаваемые вопросы</h1>
    <div class="faq">
      <div class="questions">
        <div class="q" v-for="(question, i) in FAQ" :key="i">
          <li @click="selectedQuestion = i">
            <div class="ques">
              <span :class="{ active: selectedQuestion === i }">{{
                  question.question
                }}</span>
            </div>
          </li>

          <div :class="[selectedQuestion === i ? 'a' : 'none']">
            {{ question.answer }}
          </div>
        </div>
      </div>
      <div class="answers">
        <Transition name="slide-fade" appear>
          <p>{{ answerText }}</p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      FAQ: [
        {
          question: "Какая стоимость доставки?",
          answer:
            "Доставка в пределах города Алматы абсолютно бесплатна до Вашего подъезда, доставка по области расчитывается отдельно.",
        },
        {
          question: "Сотрудничаете ли Вы с дизайнерами?",
          answer:
            "Да, по вопросам сотрудничества Вы можете обратиться по телефону +7(727)390-58-28",
        },
        {
          question:
            "Меняется ли стоимость изделий из-за индивидуальных размеров?",
          answer:
            "Да, Вы можете получить расчет стоимости изделия, оставив заявку на сайте.",
        },
        {
          question: "Я могу выбрать любой цвет мебели?",
          answer:
            "Для каждого изделия доступно несколько сочетаний цветов, чтобы Вы могли найти вариант именно для Вашего интерьера, подробнее узнать о возможных цветах можно оставив заявку на нашем сайте.",
        },
        {
          question: "Убирают ли сборщики за собой мусор?",
          answer:
            "После выполненной работы, наши сборщики убирают весь мусор и все последствия установки.",
        },
        {
          question: "Как отменить заказ, в случае необходимости?",
          answer:
            "В случае непредвиденных обстоятельств  до момента осуществления предоплаты, заказ можно отменить – достаточно позвонить по телефону +7(727)390-58-28 и сообщить об отмене заказа.",
        },
        {
          question: "Какие сроки изготовления изделий?",
          answer: "Срок изготовления зависит от сложности изделия.",
        },
      ],
      selectedQuestion: 0,
    };
  },
  methods: {},
  computed: {
    answerText() {
      return this.FAQ[this.selectedQuestion].answer;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadein {
  from {
    opacity: 0.7;
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.fade-in {
  animation: fadein 0.7s;
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
span {
  font-weight: 300;
}
.ques {
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 560px) {
    margin-left: 25px;
  }
}
#FAQ {
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
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 82px;
    color: var(--secondary-color);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 100px;
    @media screen and (max-width: 1600px) {
      font-size: 54px;
      line-height: 76px;
      margin-bottom: 100px;
    }
    @media screen and (max-width: 1300px) {
      font-size: 50px;
      line-height: 68px;
      margin-bottom: 90px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 44px;
      line-height: 62px;
      margin-bottom: 70px;
    }
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 55px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 560px) {
      font-size: 30px;
      line-height: 47px;
      margin-bottom: 30px;
    }
  }
  .faq {
    display: flex;
    justify-content: space-between;
    // gap: 100px;
    .questions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.5s;

      .q {
        li {
          background-image: url("~@/assets/icons/list.svg");
          background-repeat: no-repeat;
          background-position: 1px;
          padding-left: 20px;
          list-style-type: none;

          font-size: 32px;

          cursor: pointer;

          @media screen and (max-width: 1764px) {
            font-size: 28px;
          }
          @media screen and (max-width: 1600px) {
            font-size: 24px;
          }
          @media screen and (max-width: 1300px) {
            line-height: 30px;
            font-size: 21px;
          }
          @media screen and (max-width: 1024px) {
            margin-bottom: 22px;
          }
          @media screen and (max-width: 768px) {
            font-size: 18px;
            line-height: 32px;
            margin-bottom: 20px;
          }
        }
        .a {
          display: none;
          animation: fadein 0.7s;
          @media screen and (max-width: 1024px) {
            display: flex;
            align-items: flex-start;
            background-color: var(--secondary-color);
            color: #fff;
            margin-bottom: 23px;
            border-radius: 30px;
            transition: all 2s ease-in-out;
            font-size: 24px;
            line-height: 40px;
            padding: 36px 23px 36px 36px;
            @media screen and (max-width: 560px) {
              font-size: 18px;
              line-height: 32px;
            }
          }
        }
      }
    }
    .answers {
      width: 100%;
      max-width: 850px;
      padding: 110px 98px;
      background-color: var(--secondary-color);
      color: #fff;
      font-weight: 400;
      font-size: 32px;
      line-height: 56px;
      height: 446px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      margin-left: 30px;

      @media screen and (max-width: 1764px) {
        font-size: 28px;
      }
      @media screen and (max-width: 1600px) {
        max-width: 720px;
      }
      @media screen and (max-width: 1300px) {
        font-size: 24px;
        line-height: 40px;
        padding: 90px 78px;
      }
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }
  .active {
    text-decoration: underline 2px var(--secondary-color);

    font-weight: 400;
  }
  .none {
    display: none;
  }
}
</style>
