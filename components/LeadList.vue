<template>
  <section class="leadList-section">
    <header class="sticky-top">
      <div class="header-menu">
        <div class="first-block-header-menu">
          <img src="@/assets/icons/Logo.svg"/>
        </div>
        <div class="second-block-header-menu">
          <ul>
            <li><a href="/leads">Текущие</a></li>
            <li><a href="/leads-off">Завершенные</a></li>
          </ul>
        </div>
        <div class="last-block-header-menu">
          <button class="btn_log btn btn-dark" @click="signOut">Выйти</button>
        </div>
      </div>
    </header>
    <div v-if="people.length !== 0">
      <div class="margin">
        <h3 class="text-center mb-3">Текущие Заявки</h3>
        <div class="card">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Телефон</th>
              <th scope="col">Дата</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(person, i) in people" :key="person.id">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ person.Name }}</td>
              <td>{{ person.Phone }}</td>
              <td>{{ person.Date }}</td>

              <td>
                <button class="btn btn-danger" @click="$emit('remove', person.id)">
                  Завершить
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="notlogged">Список пуст</h4>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LeadList',
  props: ["people"],
  emits: ["load", "remove"],
  methods: {

    authListener() {
       this.$fire.auth.onAuthStateChanged(function (user) {
        if (!user) {
          // not logged in
          alert("Ты должен быть авторизован");
          window.location.href='/'
        }
      })
    },

    async signOut() {
      await this.$fire
        .auth
        .signOut()
        .then(() => {
          this.$router.push({
            name: "index",
          });
        });
    },
  },

  beforeMount() {
    this.authListener()
  }
};

</script>


<style>
.sticky-top {
  position: fixed;
}

.header-menu {
  display: flex;
  width: 100%;
  height: 100%;
  background: #b0baa4;
  width: 100vw;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.last-block-header-menu {
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
}

li > a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

.margin {
  margin-top: 150px;
}

.card {
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
}

.btn_log {
  text-align: right;
}

.notlogged {
  text-align: center;
}
</style>
