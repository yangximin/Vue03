<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="item of floorList" :key="item.id" :floorInfo="item" />
    <Brand />
  </div>
</template>

<script>
// import TypeNav from "@/components/TypeNav";
import ListContainer from "./listContainer";
import Recommend from "./recommend";
import Rank from "./rank";
import Like from "./like";
import Floor from "./floor";
import Brand from "./brand";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
};
</script>

<style>
</style>