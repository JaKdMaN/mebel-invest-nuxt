<template>
  <transition name="slide-fade">
  <div class="wrap" v-show="showModal">
      <section id="modal">
      <img src="@/assets/icons/close.svg" class="close-modal" alt="close" @click="closeModal()" />
      <div class="contact-form">
        <h1>Оставьте заявку</h1>
        <p>
          Если у Вас еще остались вопросы или Вы хотите обсудить свой проект,
          оставьте заявку и мы перезвоним Вам в ближайшее время!
        </p>
        <form>
          <div class="wrapper">
            <input type="text" id="name" placeholder="Имя" :class="{ 'error-input': nameFail }" v-model="modelName" />
            <label for="name" class="error" v-if="nameFail">{{
                errors.modelName
              }}</label>
          </div>
          <div class="wrapper">
            <input type="tel" ref="tel" id="tel2" :class="{ 'error-input': telFail }" placeholder="+7 771 191 17 35"
                   @input="disableError" />
            <label for="name" class="error" v-if="telFail">{{
                errors.phoneNum
              }}</label>
          </div>
          <button class="button button-primary" @click.prevent="submitPerson">
            Отправить
          </button>
          <div class="submit-checkbox">
            <div class="checkbox-container">
              <input type="checkbox" v-model="personalData" :class="{ 'error-chk': checkFail }" id="someModal" />
              <label for="someModal" :class="['some__label', { 'error-chk': checkFail }]"></label>
            </div>
            <span :class="{ 'error-chk': checkFail }">Я даю свое согласие на обработку персональных данных</span>
          </div>
        </form>
      </div>
    </section>
    </div>
  </transition>
</template>

<script>
import IMask from "imask";
import axios from "axios";
export default {
  name: 'MiModal',
  props: {
    showModal: Boolean,
  },
  data() {
    return {
      modelName: "",
      phone: "",
      personalData: false,
      errors: {
        modelName: "Поле имени должно содержать минимум 2 символа",
        phoneNum: "Введите номер телефона",
        personalData: "Обязательное поле",
      },
      error: "",
      nameFail: false,
      telFail: false,
      checkFail: false,
    };
  },
  methods: {
    submitPerson() {
      if (this.modelName.trim().length < 2) {
        this.nameFail = true;
      }
      if (this.phone["_value"].length < 16) {
        this.telFail = true;
      }
      if (!this.personalData) {
        this.checkFail = true;
      }
      if (!this.nameFail && !this.telFail && !this.checkFail) {
        let curDate = new Date();
        axios
          .post(
            "https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people.json",
            {
              Name: this.modelName.trim(),
              Phone: this.phone["_value"],
              Date: curDate.toLocaleString(),
            }
          )
          .then((response) => {
            console.log(response);
            window.location.href = '/thank-you'
            // Swal.fire({
            //   title: 'Готово!',
            //   text: 'Ваша заявка успешно отправлена',
            //   icon: 'success',
            //   confirmButtonText: 'Продолжить',
            //   timer: 3000
            // })
            document.getElementById('tel2').value = ''
            this.closeModal()
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: 'Ошибка!',
              text: 'Пожалуйста, повторите попытку, либо свяжитесь с нами по телефону',
              icon: 'error',
              confirmButtonText: 'Продолжить',
              timer: 3000
            })
          });
      }
    },
    disableError() {
      this.telFail = false;
    },
    closeModal() {
      this.modelName = "";

      this.personalData = false;
      this.error = "";
      this.nameFail = false;
      this.telFail = false;
      this.checkFail = false;
      return this.$emit("close");
    },
  },

  watch: {
    modelName() {
      this.nameFail = false;
    },
    personalData() {
      this.checkFail = false;
    },
    showModal(val) {
      let body = document.querySelector("body");
      if (val) {
        body.style.height = "100%";
        body.style.overflow = "hidden";
      } else {
        body.style.height = "auto";
        body.style.overflow = "auto";
      }
    },
  },
  mounted() {
    this.phone = IMask(document.getElementById("tel2"), {
      mask: "+{7}(000)000-00-00",
    });
  },
};
</script>

<style lang="scss" scoped>

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.personal {
  cursor: pointer;
  text-decoration: underline;
}

.personal:hover {
  color: rgb(30, 112, 30);
}

.wrap {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  cursor: pointer;
}

#modal {
  background-image: url("~@/assets/images/modal.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  padding: 0 100px;
  max-height: 700px;
  max-width: 951px;
  width: 100%;
  border-radius: 20px;
  border: 3px solid var(--secondary-color);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and(max-width:1024px) {
    padding: 0 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media screen and(max-width:768px) {
    padding: 0 40px;
  }

  @media screen and(max-width:560px) {
    padding: 0 30px 30px;
  }

  .error {
    color: red;
  }

  .error-input {
    border: 2px solid red !important;
    border-radius: 5px !important;
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  .error-chk {
    color: red;
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  .contact-form {
    position: relative;
    margin: 40px 0;
    max-width: 843px;
    width: 100%;

    @media screen and(max-width:1024px) {
      margin: 30px 0;
    }

    @media screen and(max-width:560px) {
      margin: 20px 0;
    }

    & h1 {
      font-weight: 700;
      font-size: 39px;
      line-height: 56px;
      text-transform: uppercase;
      margin-bottom: 20px;

      @media screen and(max-width:768px) {
        font-size: 35px;
        line-height: 48px;
      }

      @media screen and(max-width:560px) {
        font-size: 30px;
        line-height: 41px;
      }
    }

    & p {
      font-weight: 300;
      font-size: 21px;
      line-height: 31px;
      margin-bottom: 30px;

      @media screen and(max-width:768px) {
        line-height: 27px;
        margin-bottom: 20px;
      }

      @media screen and(max-width:569px) {
        font-size: 18px;
        line-height: 26px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media screen and(max-width:768px) {
        gap: 20px;
      }

      & button {
        border: none;
        height: 94px;

        @media screen and(max-width:1300px) {
          height: 80px;
        }

        @media screen and(max-width:768px) {
          height: 60px;
          font-size: 28px;
          line-height: 36px;
          // padding: 22px 130px;
          padding: 25px;
        }

        @media screen and(max-width:560px) {
          height: 50px;
          font-size: 21px;
          line-height: 28px;
          padding: 25px;
        }
      }

      .wrapper {
        display: block;

        & label {
          position: absolute;
          top: 2px;
          left: 12px;
          pointer-events: none;

          @media screen and(max-width:560px) {
            top: 0px;
            text-align: end;
            margin-right: 10px;
          }
        }
      }

      & input {
        height: 94px;
        padding: 31px 59px;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        width: 100%;
        border: 2px solid var(--secondary-color);
        outline: var(--secondary-color);

        @media screen and(max-width:1300px) {
          height: 80px;
        }

        @media screen and(max-width:768px) {
          height: 60px;
          font-size: 21px;
          line-height: 32px;
          padding: 22px 30px;
        }

        @media screen and(max-width:560px) {
          height: 50px;
          font-size: 18px;
          line-height: 25px;
          padding: 20px 20px;
        }

        &::placeholder {
          opacity: 0.2;
        }
      }

      .submit-checkbox {
        display: flex;
        align-items: center;

        gap: 43px;

        @media screen and(max-width:1024px) {
          text-align: left;
          gap: 30px;
        }

        @media screen and(max-width:768px) {
          gap: 22px;
        }

        @media screen and(max-width:560px) {
          gap: 18px;
        }

        .checkbox-container {
          & input {
            height: 29px;
            width: 29px;
            background: rgba(0, 0, 0, 0);
          }
        }

        & label,
        span {
          font-weight: 300;
          font-size: 24px;
          line-height: 33px;

          @media screen and(max-width:768px) {
            font-size: 21px;
            line-height: 30px;
          }

          @media screen and(max-width:560px) {
            font-size: 18px;
            line-height: 25px;
          }
        }
      }
    }
  }

  @keyframes shake {

    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
}

#someModal {
  display: none;
}

.some__label {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: rgba(1, 1, 1, 0);
  text-align: center;
  line-height: 30px;
  // color:red;
}

#someModal:checked+label:after {
  content: "\2713";
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 16;
  transform: translate(-50%, -50%);
}
</style>

<style>
.swal2-confirm {
  background: #b0baa4 !important;
  padding: 0.625em 2.1em;
  border-radius: 1.25em !important;
}

.swal2-confirm:focus {
  box-shadow: none !important;
}

.swal2-popup {
  border-radius: 27px !important;
}
</style>
