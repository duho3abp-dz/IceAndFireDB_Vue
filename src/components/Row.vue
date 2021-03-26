<template>
    <div :class="`b-row ${clazz}`">
        <div class="b-row__picture">
            <img 
                :src="getImgUrl(src)"
                :alt="src">
        </div>
        <div class="b-row__block">
            <h4 class="b-row__name"><span class="text--line">{{ names }}</span></h4>
            <p class="b-row__description">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Row',
    props: {
        src: { type: String },
        names: { type: String },
        text: { type: String },
        clazz: { type: String }
    },
    methods: {
        getImgUrl(pic) {
            return require(`@/assets/img/main/${pic}.jpeg`)
        }
    }
}
</script>

<style scoped>
.b-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.b-row--reverse {
    flex-direction: row-reverse;
}

.b-row__picture {
    width: 532px;
}

.b-row__block {
    width: 460px;
}

.b-row__name {
    font-size: 30px;
    font-weight: 800;
}

.b-row__description {
    margin-top: 20px;
    font-size: 18px;
}

@media screen and (max-width: 1200px) {
    .b-row__picture {
        width: 350px;
    }

    .b-row__block {
        width: 300px;
    }

    .b-row__name {
        font-size: 18px;
    }

    .b-row__description {
        margin-top: 12px;
        font-size: 16px;
    }
}

@media screen and (max-width: 767px) {
    .b-row {
        flex-direction: column;
        justify-content: center;
        align-items: unset;
    }

    .b-row__picture {
        width: 100%;
        margin-bottom: 16px;
    }

    .b-row__block {
        width: 100%;
    }

    .b-row__name {
        font-size: 18px;
    }

    .b-row__description {
        font-size: 14px;
    }
}
</style>