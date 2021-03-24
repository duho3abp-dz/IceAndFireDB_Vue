<template>
  <div class="l-outer">
    <div class="l-wrapper">
      <header class="l-header">Header</header>
      <router-view/>
    </div>
    <footer class="l-footer">Footer</footer>
  </div>
</template>

<style scoped>
  .l-outer {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .l-header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: #fff;
    z-index: 100;
  }

  .l-footer {
      background-color: #dddddd;
  }
  
  .l-content--section--inside {
      width: 1120px;
      margin: 0 auto;
      position: relative;

      @media screen and (max-width: 1279px) {
          width: 100%;
      }
  }

  .l-header--section--inside {
      width: 100%;
      padding: 20px 40px;
  }

  .l-footer--section--inside {
      padding: 64px 80px;
  }

</style>