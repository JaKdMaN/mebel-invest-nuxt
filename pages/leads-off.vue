<template>
  <lead-off-list :people="people" @load="loadPeople" @remove="removePerson"/>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async loadPeople() {
      try {
        const { data } = await axios.get(
          "https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people-off.json"
        );
        if (!data) {
          throw new Error("Список людей пуст");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
      } catch (e) {
        this.alert = {
          type: "danger",
          title: "Ошибка",
          text: e.message,
        };
      }
    },
    async removePerson(id) {
      try {
        const name = this.people.find((person) => person.id === id).firstName;
        await axios.delete(
          `https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people-off/${id}.json`
        );
        this.people = this.people.filter((person) => person.id !== id);
      } catch (e) { }
    },
  },
};
</script>

<style>
</style>
