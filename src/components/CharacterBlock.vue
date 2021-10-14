<template>
  <div>
    <div class="character-block">
      <img class="character-block_image" :src="character.image" :alt="character.name"> 
    </div>
    <div class="character-block_info">
      <span @click="detailedInfo">
        {{character.name}}
      </span>
      <span>
        {{character.status}} - {{character.species}}
      </span>
      <span>Last known location: {{character.location.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "character-block",
  props: {
    character: {
      type: Object,
      required: true,
      // if no required, then "default: 'some value'"
    }
  },
  methods: {
    detailedInfo() {
      this.$router.push({ name: 'CharacterDetails', params: {id: this.character.id}})
    }
  },
};
</script>
