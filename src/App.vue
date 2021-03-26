<template>
  <div class="l-outer">
    <div class="l-wrapper">

      <header class="l-header">
        <section class="l-header__section">
          <div class="l-header__inside">
            <Header />
          </div>
        </section>
      </header>

      <div class="l-content">
        <div class="l-conten__inside">
          <router-view/>
        </div>
      </div>

    </div>
    <footer class="l-footer">
      <section class="l-footer__section">
        <div class="l-footer__inside">
          <Footer />
        </div>
      </section>
    </footer>

    <Loader :class="{ show: loader }" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  components: { 
    Header,
    Footer,
    Loader
  },
  computed: {
    loader() {
      return this.$store.state.loader.loading;
    }
  }
}
</script>


<style>
.l-outer {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #323232;
}

.l-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #0a0a0a;
  z-index: 100;
}

.l-header__inside {
  width: 100%;
  padding: 20px 80px;
}

.l-conten__inside {
  padding: 140px 0 80px;
  width: 1120px;
  margin: 0 auto;
  position: relative;
}

.l-footer {
  background-color: #0a0a0a;
}

.l-footer__inside {
  padding: 20px 40px;
}
</style>