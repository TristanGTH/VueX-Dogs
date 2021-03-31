<template>
    <h1 class="title">Cats</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Species</th>
        </tr>
        <tr v-for="pet in pets" :key="pet.index">
            <td v-if="pet.species == 'Cat'"><router-link :to="{name : 'PetsCats' , params :{id : pets.indexOf(pet)} }">{{pet.name}}</router-link></td>
            <td v-if="pet.species == 'Cat'">{{pet.birthYear}}</td>
            <td v-if="pet.species == 'Cat'">{{pet.species}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "Cats",
        computed : {
            pets(){
                return this.$store.getters.pets
            }
        }
    }
</script>

<style scoped>

    .title{
        text-align: start;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    th, td{
        text-align: start;
        padding: 16px;
    }

    th{
        font-weight: bold;
    }


</style>