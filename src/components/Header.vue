<template>
    <div class="b-header">
        <div class="b-header__logo">
            <Logo />
        </div>
        <div class="b-header__navigation">
            <Navigation />
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';

export default {
    name: 'Header',
    components: { 
        Logo,
        Navigation
    }
}
</script>

<style scoped>
.b-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>