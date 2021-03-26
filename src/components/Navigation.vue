<template>
    <nav class="b-navigation">
        <ul class="b-navigation__list">
            <li class="b-navigation__item">
                <router-link class="animate-link" :to="{name: 'home'}" >Home</router-link>
            </li>
            <li class="b-navigation__item">
                <router-link class="animate-link" :to="{name: 'characters'}" >Characters</router-link>
            </li>
            <li class="b-navigation__item">
                <router-link class="animate-link" :to="{name: 'about'}" >About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'Navigation'
}
</script>

<style scoped>
    .b-navigation {
        width: 100%;
    }

    .b-navigation__list {
        display: flex;
    }

    .b-navigation__item {
        margin-right: 32px;
    }

    .b-navigation__item:last-child {
        margin-right: unset;
    }
</style>