<template>
    <h2 class="dashboard">Dashboard</h2>
    <div class="dashContainer">
        <p> {{pets.length}} pet(s) in the database:</p>
        <ul>
            <li># dogs</li>
            <li># cats</li>
        </ul>
    </div>
    <div class="buttonForm">
        <button class="displayForm" @click="displayForm">Add a new pet</button>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        methods: {
            displayForm(){

                if (this.$store.state.isDisplayed == false){
                    this.$store.state.isDisplayed = true
                }
                else {
                    this.$store.state.isDisplayed = false
                }

            }
        },
        computed : {
            pets(){
                return this.$store.getters.pets
            }
        }

    }
</script>

<style scoped>

    .dashboard{
        text-align: start;
        color: deepskyblue;
    }

    .dashContainer{
        border: 1px solid rgba(128,128,128,0.5);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: deepskyblue;
        text-align: start;
        padding: 10px;
    }

    .buttonForm{
        border: 1px solid rgba(128,128,128,0.5);
        display: flex;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: deepskyblue;
        text-align: start;
        padding: 10px;
        justify-content: center;

    }

    .displayForm{
        background-color: dodgerblue;
        border-style: none;
        color: white;
        width: 80%;
        border-radius: 5px;
        font-size: 20px;
        padding: 5px;
    }
</style>