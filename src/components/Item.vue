<template>
    <li class="b-item">
        <router-link :to="{ path: `/characters/${character.id}` }" >
            <div class="b-item__button">
                <h6 class="b-item__name">
                    <span class="text--line">{{ character.name }}</span>
                </h6>
                <ul class="b-item__collection">
                    <li class="b-item__clause">
                        Gender: <span class="b-item__clause--accent">{{ character.gender }}</span>
                    </li>
                    <li class="b-item__clause">
                        Born: <span class="b-item__clause--accent">{{ character.born }}</span>
                    </li>
                    <li class="b-item__clause">
                        Culture: <span class="b-item__clause--accent">{{ character.culture }}</span>
                    </li>
                </ul>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        character: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.b-item {
    width: 300px;
    margin-right: 50px;
    margin-bottom: 50px;
}

.b-item__button {
    width: 100%;
    height: 100%;
    background-color: #272727;
    border: 5px solid #0a0a0a;
    padding: 30px 20px;
    box-shadow: #0a0a0a 0px 0px 0px;
    transition: box-shadow .1s ease;
}

.b-item__button:hover {
    box-shadow: #0a0a0a 10px 10px 0px;
}

.b-item__name {
    text-align: center;
    font-size: 24px;
    color: #dadada;
    font-weight: 800;
}

.b-item__collection {
    margin-top: 24px;
}

.b-item__clause {
    padding-left: 40px;
}

.b-item__clause--accent {
    color: #dadada;
    font-size: 20px;
}

@media screen and (max-width: 767px) {
    .b-item {
        margin-right: unset;
    }

    .b-item__button {
        box-shadow: #0a0a0a 10px 10px 0px;
    }
}
</style>