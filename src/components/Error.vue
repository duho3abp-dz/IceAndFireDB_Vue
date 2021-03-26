<template>
    <div class="b-error">
        <div class="b-error__picture">
            <img src="@/assets/img/error/error.png" alt="error">
        </div>
        <p class="b-error__text">
            <span class="b-error__text--accent">Ooops!</span><br>
            Something went wrong with connection ...
        </p>
    </div>
</template>

<script>
export default {
    name: 'Error'
}
</script>

<style scoped>
.b-error {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.b-error__picture {
    width: 200px;
}

.b-error__text {
    margin-top: 24px;
    font-weight: 800;
    font-size: 22px;
    text-align: center;
    color: #fff;
}

.b-error__text--accent {
    font-size: 32px;
}
</style>