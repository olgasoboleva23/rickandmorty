<template>
  <div class="home">
    rick and morty
    <character-block />
  </div>
</template>

<script>
import CharacterBlock from "@/components/CharacterBlock.vue";

export default {
  name: "rick-and-morty-list",
  components: {
    CharacterBlock,
  },
  created() {
    this.$store.dispatch('fetchCharacters');
  }
};
</script>
