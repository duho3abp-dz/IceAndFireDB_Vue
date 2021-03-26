<template>
  <div class="b-home">
    <div class="b-home__banner">
      <img src="@/assets/img/main/banner.jpg" alt="banner">
    </div>
    <div class="b-home__info">
      <h1 class="b-home__title">Characters</h1>
      <p class="b-home__description">
        On this site you can find any character from the "A Song of Ice and Fire" universe
      </p>
    </div>
    <div class="b-home__content">
      <div class="b-home__row">
        <Row 
          v-bind:src="'sandor-clegane'"
          v-bind:names="'Sandor Clegane'"
          v-bind:clazz="''"
          v-bind:text="'Sandor Clegane is a member of House Clegane and is the younger brother of Ser Gregor Clegane. Sandor is nicknamed the Hound for his fierce nature and unquestioning obedience to House Lannister and for the three dogs featured in his familys arms. In the television adaptation Game of Thrones, he is played by Rory McCann.'" />
      </div>
      <div class="b-home__row">
        <Row 
          v-bind:src="'daenerys-targaryen'"
          v-bind:names="'Daenerys Targaryen'"
          v-bind:clazz="'b-row--reverse'"
          v-bind:text="'Queen Daenerys I Targaryen, also known as Daenerys Stormborn, and colloquially known as Dany, was the younger sister of Rhaegar Targaryen and Viserys Targaryen and only daughter of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Roberts Rebellion. She also served a brief tenure as the de facto Queen of the Andals and the First Men and the twenty-first ruler of the Seven Kingdoms, after claiming the throne from her predecessor Cersei I Lannister, who was killed in the Battle of Kings Landing. However, she was never formally crowned, nor did she sit upon the Iron Throne.'" />
      </div>
      <div class="b-home__row">
        <Row 
          v-bind:src="'john-snow'"
          v-bind:names="'Jon Snow'"
          v-bind:clazz="''"
          v-bind:text="'Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna`s brother, and raised alongside Eddard`s lawful children at Winterfell. Jon`s true parentage is kept secret from everyone, including Jon himself, in order to protect him from those that sought the complete annihilation of House Targaryen.'" />
      </div>
    </div>
  </div>
</template>

<script>
import Row from '@/components/Row';

export default {
  name: 'Home',
  components: {
    Row
  }
}
</script>

<style scoped>
.b-home {
  margin-top: -100px;
}

.b-home__banner {
  width: calc(100% + (100vw - 100%));
  margin-left: calc((100% - 100vw)/2);
}

.b-home__info {
  margin-top: 60px;
  text-align: center;
}

.b-home__title {
  font-size: 50px;
  color: #e2e2e2;
  font-weight: 800;
}

.b-home__description {
  font-size: 18px;
}

.b-home__content {
  margin-top: 150px;
}

.b-home__row {
  margin-bottom: 120px;
}

.b-home__row:last-child {
  margin-bottom: unset;
}

@media screen and (max-width: 1200px) {
  .b-home__content {
    margin-top: 100px;
  }

  .b-home__title {
    font-size: 40px;
  }

  .b-home__row {
    margin-bottom: 80px;
  }

  .b-home__row:last-child {
    margin-bottom: unset;
  }
}

@media screen and (max-width: 767px) {
  .b-home__info {
    margin-top: 40px;
  }

  .b-home__title {
    font-size: 32px;
  }

  .b-home__description {
    font-size: 16px;
  }
}

@media screen and (max-width: 300px) {
  .b-home__banner {
    width: 300px;
    margin-left: -20px;
  }
}
</style>