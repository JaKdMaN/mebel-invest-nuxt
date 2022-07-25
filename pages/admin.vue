<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div class="grey darken-1 empty-layout">
      <form class="card auth-card" @submit.prevent="signIn">
        <div class="card-content">
          <span class="card-title">Вход в панель управления</span>
          <div class="input-field">
            <input id="name" type="text" class="validate login" v-model="email"/>
            <label for="name">Почта</label>
          </div>
          <div class="input-field">
            <input id="password" type="password" class="validate" v-model="password"/>
            <label for="password">Пароль</label>
          </div>
        </div>
        <div class="card-action">
          <div>
            <button class="btn waves-effect waves-light auth-submit">
              Войти
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {

  data(){
    return {
      email: '',
      password: ''
    }
},
methods: {
    async signIn() {
   await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password).then((data) => {
        console.log("Вход успешен");
        this.$router.push({name: 'leads'})
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            console.log("Почта введена не правильно");
            break;
          case "auth/user-not-found":
            console.log("Аккаунта с таким логином не существует");
            break;
          case "auth/wrong-password":
            console.log("Неправильный пароль");
            break;
          default:
            console.log("Почта или пароль неверны");
            break;
        }
      });
  },
}

}

</script>

<style scoped>
.empty-layout {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}

.auth-card {
  width: 500px;
}

.auth-submit {
  width: 100%;
}

.helper-text.invalid {
  color: #f44336;
}

.card .card-action {
  border-top: 0 !important;
}
</style>
