<template>
  <lead-List :people="people" @load="loadPeople" @remove="removePerson"/>
</template>

<script>
import axios from "axios";
export default {
  name: 'leads',
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
          "https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people.json"
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
      const response = await fetch(
        "https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people-off.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: this.people.find((person) => person.id === id).Name,
            Phone: this.people.find((person) => person.id === id).Phone,
            Date: this.people.find((person) => person.id === id).Date,
          }),
        }
      );
      try {
        const name = this.people.find((person) => person.id === id).Name;
        await axios.delete(
          `https://mebel-invest-base-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
        );
        this.people = this.people.filter((person) => person.id !== id);
      } catch (e) { }
    },
  },
};
</script>

<style>
</style>
