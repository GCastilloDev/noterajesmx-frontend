<template>
    <v-container>    
        <CardCategoria />
    </v-container>
    
</template>

<script>

import CardCategoria from "../components/CardCategoria"
    export default {
        name: "Inicio",
        components: {
            CardCategoria
        }
    }
</script>

<style lang="css" scoped>
    div{
        margin-top: -10px;
    }
</style>