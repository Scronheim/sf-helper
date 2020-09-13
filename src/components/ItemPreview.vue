<template>
  <v-card max-width="300">
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-text align="center">
      <v-row>
        <v-col>
          <v-img :src="item.pic" width="150" @click="showItem"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Tier: {{ item.tier }} | Sink value: {{ item.sinkValue }} | Stack size: {{ item.stackSize }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ItemPreview",
  props: ['item'],
  methods: {
    showItem() {
      this.$router.push(`/items/${this.item.id}`)
    }
  }
}
</script>

<style scoped>

</style>