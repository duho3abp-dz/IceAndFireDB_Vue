<template>
  <div class="b-haracters">
    <Error v-if="error" />

    <div v-else class="b-haracters__content">
      <ul v-if="!loader" class="b-haracters__list">
        <Item 
          v-for="character in characters"
          v-bind:key="character.id"
          v-bind:character="character" />
      </ul>
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
    }
  },
  mounted() {
    this.$store.dispatch('getCharacters');
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
  justify-content: center;
}

.b-haracters__list {
  width: calc(600px + 50px + 50px);
  margin-right: -50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>