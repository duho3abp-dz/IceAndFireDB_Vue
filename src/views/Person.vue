<template>
    <div class="b-person">
        <Error v-if="error" />
        <div v-else-if="!loader" class="b-person__wrap">
            <div class="b-person__block">
                <h1 class="b-person__title title-l">
                    <span class="text--line">{{ person.name }}</span>
                </h1>
                <ul class="b-person__collection">
                    <li class="b-person__clause">
                        Gender: <span class="b-person__clause--accent">{{ person.gender }}</span>
                    </li>
                    <li class="b-person__clause">
                        Born: <span class="b-person__clause--accent">{{ person.born }}</span>
                    </li>
                    <li class="b-person__clause">
                        Died: <span class="b-person__clause--accent">{{ person.died }}</span>
                    </li>
                    <li class="b-person__clause">
                        Culture: <span class="b-person__clause--accent">{{ person.culture }}</span>
                    </li>
                    <li class="b-person__clause">
                        Father: <span class="b-person__clause--accent">{{ person.father }}</span>
                    </li>
                    <li class="b-person__clause">
                        Mother: <span class="b-person__clause--accent">{{ person.mother }}</span>
                    </li>
                </ul>
            </div>
            <div class="b-person__back">
                <router-link class="animate-button" :to="{name: 'characters'}" >Back</router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import Error from '@/components/Error';

export default {
    name: 'Person',
    computed: {
        person() {
            return this.$store.state.person.info;
        },
        error() {
            return this.$store.state.error.error;
        },
        loader() {
            return this.$store.state.loader.loading;
        }
    },
    mounted() {
        this.$store.dispatch('getData', {
            func: 'getPerson', 
            id: this.$route.params.id
        });
    },
    components: {
        Error
    }
}
</script>

    
<style scoped>
.b-person {
    padding-top: 50px;
}

.b-person__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.b-person__block {
    width: 700px;
    background-color: #272727;
    border: 5px solid #0a0a0a;
    padding: 50px 150px
}

.b-person__title {
    color: #dadada;
}

.b-person__collection {
    margin-top: 40px;
}

.b-person__clause {
    font-size: 18px;
    margin-bottom: 18px;
    overflow: hidden;
}

.b-person__clause:last-child {
    margin-bottom: unset;
}

.b-person__clause--accent {
    font-size: 30px;
    color: #dadada;
    margin-left: 20px;
}

.b-person__back {
    margin-top: 50px;
}

@media screen and (max-width: 1200px) {
    .b-person__block {
        width: 650px;
        padding: 50px 150px
    }
}

@media screen and (max-width: 767px) {
    .b-person__block {
        width: 100%;
        padding: 50px 20px
    }

    .b-person__collection {
        margin-top: 30px;
    }

    .b-person__clause {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .b-person__clause:last-child {
        margin-bottom: unset;
    }

    .b-person__clause--accent {
        font-size: 24px;
        margin-left: 10px;
    }
}
</style>