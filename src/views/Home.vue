<template>
  <div class="home">
    <h1 class="mainTitle">Adopt a pet</h1>
    <dashboard></dashboard>
    <AddForm v-if="this.$store.state.isDisplayed"></AddForm>
  </div>
</template>

<script>
// @ is an alias to /src

import Dashboard from "../components/Dashboard";
import AddForm from "../components/AddForm";

export default {
  name: 'Home',
  components: {
    Dashboard,
    AddForm
  }
}
</script>

<style>

  .mainTitle{
    color: deepskyblue;
  }

</style>
