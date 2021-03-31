<template>
    <form class="inserForm">
        <label class="labelForm">Name:</label>
        <input type="text" id="name">

        <label class="labelForm">Species:</label>
        <select id="select">
            <option>Cat</option>
            <option>Dog</option>
        </select>

        <label class="labelForm">Birth Year:</label>
        <input type="number" id="birthYear">

        <button @click="addPet">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "AddForm",
        methods : {
            addPet(){
                let name = document.getElementById('name').value
                let select = document.getElementById('select').value
                let birthYear = document.getElementById('birthYear').value

                if(name.length == 0 || select.length == 0 || birthYear.length == 0){
                    return
                }

                this.$store.commit('addPets', {'name': name, 'species': select, 'birthYear': birthYear})
                console.log(this.$store.state.pets)
            }
        }
    }
</script>

<style scoped>
    .inserForm{
        display: flex;
        flex-direction: column;
        text-align: start;
        color: deepskyblue;
        margin-top: 30px;
    }
    .labelForm{
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
    }

    #name, #select, #birthYear{
        border: 1px solid rgba(128,128,128,0.5);
        border-radius: 5px;
        padding: 5px;
        font-size: 20px;
    }

    button{
        width: 15%;
        padding: 5px;
        background-color: dodgerblue;
        border-style: none;
        color: white;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-top: 20px;
        font-size: 20px;
    }
</style>