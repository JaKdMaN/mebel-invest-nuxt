<template>
  <div>
    <client-only>
      <mi-header/>
    </client-only>
    <Main @openModal="Open"/>
    <Terms/>
    <About/>
    <Process/>
    <Examples @openModal="Open"/>
    <Discounts @openModal="Open"/>
    <Faq/>
    <ContactUs/>
    <mi-footer/>
      <mi-modal
        :showModal="openModal"
        @close="openModal = false"
      />
    <div class="phone__contRound" @click="Open(true)">
      <img class="img__phone" src="@/assets/images/MebelPhone.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){
    return {
      title: 'Мебель Инвест'
    }
  },
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    Open(val) {
      return (this.openModal = val);
    },
  },
};
</script>


<style lang="scss" scoped>
.phone__contRound{
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: #b0baa4;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 10px;
  cursor: pointer;

  img{
    width: 60px;
  }

  @media screen and (max-width: 1440px) {
    img{
      width: 50px;
    }
  }

  @media screen and (max-width: 1200px) {
    img{
      width: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    right: 20px;
    bottom: 20px;
  }
}

</style>
