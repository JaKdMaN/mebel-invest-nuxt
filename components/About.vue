<template>
  <section id="about">
    <div class="wrapper">
      <div class="company-info">
        <h1>О компании</h1>
        <div class="info-desc">
          <p>
            МебельИнвест - это опытный и надежный производитель с большим опытом
            работы.
          </p>

          <p>
            Мы поможем Вам оперативно реализовать любую идею, как для дома, так
            и для коммерческого помещения!
          </p>
        </div>

        <div class="info-numbers">
          <div class="numbers-block">
            <div class="col">
              <div class="left">
               <p>1,500</p>
                <p style="margin-top: 15px">
                  м<sup><small>2</small></sup>
                </p>
              </div>
              <div class="right">
                <p>
                  <span>площадь</span> <br />
                  производственная
                </p>
              </div>
            </div>
            <div class="col">
              <div class="left perc">
                <p>100</p>
                <p class="percent">%</p>
              </div>
              <div class="right">
                <p>
                  <span>соответствие</span> <br />
                  стандартам
                </p>
              </div>
            </div>
          </div>
          <div class="numbers-block">
            <div class="col">
              <div class="left">
               <p>1,000</p>
                <p class="plus">+</p>
              </div>
              <div class="right">
                <p>
                  <span>мебели в год</span> <br />
                  по заказу
                </p>
              </div>
            </div>
            <div class="col">
              <div class="left">
               <p>20</p>
              </div>
              <div class="right">
                <p>
                  <span>лет</span> <br />
                  на рынке
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="company-img"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
  // data() {
  //   return {
  //     inView: false,
  //     seenAnimation: false,
  //   };
  // },
  // methods: {
  //   start() {
  //     this.$refs.counter1.start();
  //     this.$refs.counter2.start();
  //     this.$refs.counter3.start();
  //     this.$refs.counter4.start();
  //   },
  //   check(value) {
  //     if (value && this.seenAnimation === false) {
  //       this.start();
  //       this.seenAnimation = true;
  //     }
  //   },
  // },
  // watch: {
  //   // inView(value) {
  //   //   if (value) {
  //   //     this.start();
  //   //   }
  //   // },
  // },
  // components: {
  //   "vue-counter": Vue3Autocounter,
  //   "watch-intersect": WatchInterest,
  // }
}
</script>

<style lang="scss" scoped>
#about {
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
  .wrapper {
    display: flex;
    justify-content: space-between;
    gap: 80px;

    @media screen and (max-width: 1650px) {
      gap: 0;
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .company-info {
      display: flex;
      flex-direction: column;
      @media screen and(max-width:1650px) {
        width: 800px;
      }
      @media screen and(max-width:1294px) {
        min-width: 500px;
        max-width: 640px;
      }
      @media screen and(max-width:768px) {
        min-width: 400px;
        max-width: fit-content;
      }
      @media screen and(max-width:540px) {
        min-width: 100%;
        max-width: 100%;
        // max-width: 452px;
        text-align: left;
      }

      & h1 {
        font-weight: 700;
        font-size: 60px;
        line-height: 82px;
        text-transform: uppercase;
        color: var(--secondary-color);
        margin-bottom: 40px;
        @media screen and( max-width:1200px) {
          font-size: 48px;
          line-height: 74px;
          margin-bottom: 30px;
        }
        @media screen and (max-width: 1024px) {
          font-size: 40px;
          line-height: 60px;
          margin-bottom: 20px;
        }
      }
      .info-desc {
        margin-right: 100px;
        @media screen and (max-width: 1650px) {
          margin-right: 50px;
        }
        @media screen and (max-width: 1024px) {
          margin-right: 0;
        }
        & p {
          font-weight: 300;
          font-size: 36px;
          line-height: 49px;
          color: #000000;
          margin-bottom: 25px;
          @media screen and (max-width: 1650px) {
            font-size: 32px;
          }
          @media screen and (max-width: 1366px) {
            font-size: 28px;
            line-height: 38px;
          }
          &:last-child {
            margin-bottom: 0;
          }
          @media screen and (max-width: 1366px) {
            font-size: 25px;
            line-height: 34px;
          }
        }
      }
    }
    .info-numbers {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 800px;
      margin-top: 100px;
      margin-bottom: 80px;
      @media screen and (max-width: 1650px) {
        margin-top: 40px;
      }
      @media screen and (max-width: 1350px) {
        margin-top: 20px;
      }
      @media screen and (max-width: 1024px) {
        margin-top: 0;
        align-items: center;
        margin-bottom: 0;
      }
      @media screen and (max-width: 1366px) {
        width: 100%;
      }

      .numbers-block {
        display: flex;

        align-items: center;
        gap: 40px;
        &:last-child {
          gap: 80px;
          .col {
            &:first-child {
              gap: 60px;
            }
            &:last-child {
              gap: 80px;
            }
          }
          @media screen and (max-width: 1650px) {
            gap: 40px;
            .col {
              &:first-child {
                gap: 40px;
              }
              &:last-child {
                gap: 80px;
              }
            }
          }
          @media screen and (max-width: 1366px) {
            gap: 40px;
            .col {
              &:first-child {
                gap: 0px;
              }
              &:last-child {
                gap: 0px;
              }
            }
          }
          @media screen and (max-width: 768px) {
            gap: 0;
            .col {
              &:first-child {
                gap: 45px;
              }
              &:last-child {
                gap: 145px;
              }
            }
          }
          @media screen and (max-width: 560px) {
            gap: 0;
            .col {
              &:last-child {
                gap: 125px;
              }
            }
          }
        }
        &:first-child {
          @media screen and (max-width: 768px) {
            .col {
              &:last-child {
                gap: 45px;
              }
            }
          }
          @media screen and (max-width: 560px) {
            .col {
              &:last-child {
                gap: 40px;
              }
            }
          }
        }
        p {
          margin-bottom: 0;
        }

        @media screen and (max-width: 1024px) {
          justify-content: space-between;
          &:first-child {
            margin-top: 25px;
          }
        }
        @media screen and (max-width: 768px) {
          flex-direction: column;
          width: 450px;

          gap: 0;
        }
        @media screen and(max-width:540px) {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
        }
        .col {
          display: flex;
          align-items: center;
          min-width: 463px;
          gap: 40px;
          margin-top: 30px;
          @media screen and (max-width: 1650px) {
            justify-content: center;
            min-width: 350px;
            gap: 20px;
          }
          @media screen and (max-width: 1366px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            margin-top: 20px;
            min-width: 300px;
          }
          @media screen and( max-width:1200px) {
            min-width: 240px;
          }
          @media screen and (max-width: 1024px) {
            &:first-child {
              text-align: left;
            }
            &:last-child {
              align-items: flex-end;
              text-align: end;
              @media screen and (max-width: 768px) {
                align-items: center;
                text-align: left;
              }
            }
          }
          @media screen and (max-width: 768px) {
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-top: 0;
            gap: 25px;

            .right {
              p {
                margin-bottom: 0;
              }
            }
            .perc {
              margin-right: 33px;
            }
          }
        }
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
          @media screen and (max-width: 560px) {
            gap: 2px;
          }
          & span {
            font-weight: 600;
            font-size: 62px;
            line-height: 84px;
            text-transform: capitalize;

            color: #000000;
            @media screen and(max-width:1650px) {
              font-size: 50px;
            }
            @media screen and (max-width: 768px) {
              align-items: flex-start;
            }
            @media screen and(max-width:560px) {
              font-size: 42px;
            }
          }
          & p {
            font-size: 36px;
            line-height: 49px;
            font-weight: 600;
            @media screen and(max-width:1650px) {
              font-size: 28px;
            }
          }
        }
        .right {
          & p {
            font-size: 23px;
            font-weight: 300;
            line-height: 31px;
            white-space: nowrap;
            @media screen and (max-width: 600px) {
              font-size: 18px;
              line-height: 25px;
            }
            @media screen and (max-width: 460px) {
              font-size: 16px;
              line-height: 22px;
            }
            & span {
              font-size: 25px;
              line-height: 34px;
              font-weight: 700;
              @media screen and (max-width: 600px) {
                font-size: 20px;
                line-height: 27px;
              }
              @media screen and (max-width: 460px) {
                font-size: 18px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .company-img {
      background-image: url('~/assets/images/about-company.jpg');
      background-size: cover;
      background-position: center;
      width: 100%;
      max-width: 725px;
      min-width: 380px;
      @media screen and(max-width:1650px) {
        width: 90%;
      }
      @media screen and(max-width:1294px) {
        // width: 60%;
        width: 470px;
      }
      @media screen and(max-width:1024px) {
        // width: 60%;
        margin-top: 45px;

        width: 100%;
        height: 700px;
      }
      @media screen and(max-width:768px) {
        // width: 60%;
        min-width: 320px;
        width: 100%;
        height: 434px;
      }
    }
  }
  .percent {
    font-size: 62px;
    font-weight: 600;
  }
  .plus {
    font-size: 50px;
  }
}
</style>
