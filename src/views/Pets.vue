<template>
    <h1>{{pet.name}}({{pet.species}})</h1>
    <p>{{pet.birthYear}}</p>
</template>

<script>
    export default {
        name: "Pets",
        computed : {
            pet(){
                return this.$store.getters.getDog1(this.$route.params.id)
            }
        }
    }


</script>

<style scoped>

    h1, p{
        text-align: start;
    }

</style>