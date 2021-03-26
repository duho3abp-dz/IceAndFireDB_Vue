<template>
  <div class="b-haracters">
    <Error v-if="error" />

    <div v-else-if="!loader" class="b-haracters__content">
      <ul class="b-haracters__list">
        <Item 
          v-for="character in characters"
          v-bind:key="character.id"
          v-bind:character="character" />
      </ul>
      <div class="b-haracters__buttons">
        <button 
          v-on:click.prevent="() => changePage('prev')" 
          class="b-haracters__btn" >
          <img src="@/assets/img/icons/arrow.svg" alt="arrow">
        </button>
        <div class="b-haracters__page">{{ page - 1 }}</div>
        <button 
          v-on:click.prevent="() => changePage('next')" 
          class="b-haracters__btn">
          <img class="inverted" src="@/assets/img/icons/arrow.svg" alt="arrow">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item';
import Error from '@/components/Error';

export default {
  name: 'Characters',
  computed: {
    characters() {
      return this.$store.state.characters.characters;
    },
    error() {
      return this.$store.state.error.error;
    },
    loader() {
      return this.$store.state.loader.loading;
    },
    page() {
      return this.$store.state.page.page;
    }
  },
  mounted() {
      this.$store.dispatch('getData', {
        func: 'getAllCharacters',
        id: this.page
      });
  },
  watch: {
    page() {
      this.$store.dispatch('getData', {
        func: 'getAllCharacters',
        id: this.page
      });
    }
  },
  methods: {
    changePage(direction) {
      switch(direction) {
        case 'next':
          this.$store.commit('nextPage');
          break;
        case 'prev':
          this.$store.commit('prevPage');
          break;
      }
    }
  },
  components: {
    Error,
    Item
  }
}
</script>

<style scoped>
.b-haracters__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.b-haracters__list {
  width: calc(600px + 50px + 50px);
  margin-right: -50px;
  margin-bottom: -50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.b-haracters__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.b-haracters__btn {
  width: 100px;
  margin-right: 20px;
  padding: 0 10px;
  border: 0px solid #0a0a0a;
  transition: border .1s ease;
}

.b-haracters__btn:last-child {
  margin-right: unset;
}

.b-haracters__btn:hover {
  border: 5px solid #0a0a0a;
}

.b-haracters__page {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-right: 20px;
}

@media screen and (max-width: 767px) {
  .b-haracters__list {
    width: 100%;
    margin-right: unset;
    margin-bottom: unset;
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: center;
    flex-wrap: unset;
  }
}
</style>