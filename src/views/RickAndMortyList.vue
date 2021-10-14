<template>
  <div class="home">
    rick and morty
    <div class="characters-list">
    <character-block
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
    </div>
      <paginate
      v-if="pages"
      v-model="currentPage"
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import CharacterBlock from "@/components/CharacterBlock.vue";
const Paginate =() => import('vuejs-paginate')

export default {
  name: "rick-and-morty-list",
  components: {
    CharacterBlock,
    Paginate
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    characters() {
      console.log(this.$store.getters['getCharactersByPage'](this.currentPage), 'characters')
      return this.$store.getters['getCharactersByPage'](this.currentPage);
    },
    firstCharacter() {
      // usually getters arent called from 'computed'
      return this.$store.getters['getCharacterById']({id: 1, page: 1});
    },
    pages() {
      return this.$store.state.pages;
    }
  },
  methods: {
    clickCallback(pageNum) {
      console.log({pageNum})
    },
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch('fetchCharacters', page); 
      },
      immediate: true
    }
  }
};
</script>
