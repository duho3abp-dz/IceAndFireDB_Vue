<template>
    <router-link :to="{name: 'home'}" >
        <div class="b-logo">
            <img src="@/assets/img/icons/logo.png" alt="logo">
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped>
    .b-logo {
        width: 200px;
    }
</style>