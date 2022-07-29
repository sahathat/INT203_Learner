<template>
    <h1>ID: {{$route.params.id}},Welcome : {{$route.params.name}}</h1>
</template>

<script>
export default {
    // check validate by if is not number then show overwise can't show page
    validate(data){ // return boolean
        return ! /^\d+$/.test(data.params.name)
    }
}
</script>