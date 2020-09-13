<template>
  <v-container>
    <v-row>
      <v-col v-for="item of $store.getters.items" :key="item.name">
        <item-preview :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemPreview from "@/components/ItemPreview";
export default {
  name: 'Home',
  components: {
    ItemPreview
  }
}
</script>
