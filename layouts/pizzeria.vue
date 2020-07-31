<template>
  <div class="position-relative overflow-hidden">
    <!-- loading page -->
    <section
      v-if="getStateLoading"
      class="loadScreen"
      :class="getStateLoading ? 'loaded': 'loading'"
    >
      <img src="@/static/img/pizza-loader.gif" alt />
    </section>

    <!-- header -->
    <header
      class="container layout-block layout-block__header position-absolute d-flex justify-content-between align-items-center mx-auto"
    >
      <img src="@/static/img/logoSuPizza.svg" width="125" class="img-fluid" alt />

      <!-- main menu -->
      <ul class="main-menu d-none d-md-flex">
        <li class="main-menu__item" v-for="(item, index) in menuSettings.sections" :key="index">
          <nuxt-link
            :to="item.link"
            tag="a"
            :menu-name="item.link"
            class="text-decoration-none text-reset"
          >{{item.name}}</nuxt-link>
        </li>
      </ul>

      <!-- Mobile menu -->
      <ul class="mobile-menu d-flex d-md-none" :class="pizzaMenu ? '' : 'hidden'">
        <li class="mobile-menu__item" v-for="(item, index) in menuSettings.sections" :key="index">
          <nuxt-link
            :to="item.link"
            tag="a"
            :menu-name="item.link"
            class="text-decoration-none text-reset"
          >{{item.name}}</nuxt-link>
        </li>
        <li
          class="mobile-menu__item mobile-menu__item--toggle"
          :class="pizzaMenu ? 'hide' : 'show'"
          @click="pizzaMenu = !pizzaMenu"
        >
          <div v-if="pizzaMenu">
            <img src="@/static/img/pizza/open.svg" class="img-fluid" alt />
          </div>
          <div v-else>
            <img src="@/static/img/pizza/close.svg" class="img-fluid" alt />
          </div>
        </li>
      </ul>
    </header>

    <!-- body -->
    <nuxt />

    <!-- footer -->
    <footer class="wrapper-footer position-relative">
      <div class="layout-block layout-block__footer container">
        <!-- sections -->
        <div class="footer-block footer-block--sections">
          <h3 class="footer-block__title">Secciones</h3>
          <ul>
            <li v-for="(section, i) in menuSettings.sections" :key="i" class="pb-2">
              <a :href="section.link" class="text-decoration-none text-reset">{{ section.name }}</a>
            </li>
          </ul>
        </div>

        <!-- direction -->
        <div class="footer-block footer-block--direction text-center">
          <h3 class="footer-block__title">Dirección</h3>
          <p class="footer-block__direction">Av. Quinceo 387 Granjas del Maestro Morelia, Mich</p>
        </div>

        <!-- phone -->
        <div class="footer-block footer-block--phones text-right">
          <h3 class="footer-block__title">Contactanos</h3>
          <ul class="footer-block__phone">
            <li class="phone__item pb-2">312.80.50</li>
            <li class="phone__item pb-2">232.29.38</li>
            <li class="phone__item pb-2">4433.51.54.66</li>
          </ul>
        </div>

        <!-- shipping -->
        <!-- <ul class="footer-block footer-block--payment-methods">
        <li class="payment-methods__method">VISA</li>
        <li class="payment-methods__method">Master Car</li>
        </ul>-->

        <!-- social Media -->
        <div class="footer-block footer-block--social-media">
          <ul class="list-unstyled social-wrapper">
            <li class="social-media__item">
              <a
                href="https://www.facebook.com/supizzamorelia/"
                class="text-decoration-none text-reset"
                target="_blank"
              >
                <img src="@/static/img/icon_facebook.png" alt />
              </a>
            </li>
            <li class="social-media__item">
              <a
                href="https://www.facebook.com"
                class="text-decoration-none text-reset"
                target="_blank"
              >
                <img src="@/static/img/icon_twitter.png" alt />
              </a>
            </li>
          </ul>
        </div>

        <!-- copyright -->
        <div class="footer-block footer-block--copyright">2020 @ su pizzeria all rights reserved.</div>
      </div>
      <div class="footer-pizza position-absolute">
        <img src="@/static/img/pizza.png" class="img-fluid" alt />
      </div>
    </footer>
    <a
      href="https://api.whatsapp.com/send?phone=5214433515466&text=%C2%A1Hola!%20me%20gustar%C3%ADa%20pedir%20una%20pizza."
      class="position-fixed go-top text-decoration-none font-weight-bold"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="go-top__icon">
        <img src="@/static/img/whatss.svg" class="img-fluid" alt />
      </span>
    </a>
    <!-- <nuxt-link to="/#inicio" class="">
      <span class="go-top__icon">
        <img src="@/static/img/whatss.svg" class="img-fluid" alt>
      </span>
    </nuxt-link>-->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      pizzaMenu: false,
      menuSettings: {
        sections: [
          // { link: "#hero", name: "Inicio" },
          { link: "#combos-and-specials", name: "Especiales" },
          { link: "#promotions", name: "Promociones" },
          { link: "#our-menu", name: "Menu" }
        ]
      },
      windowTop: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    if (process.browser) {
      window.onNuxtReady(app => {
        setTimeout(() => {
          this.setLoading(false);
        }, 2000);
      });
    }
  },
  computed: {
    ...mapGetters({
      getStateLoading: "loading/getStateLoading"
    })
  },
  methods: {
    ...mapActions({
      setLoading: "loading/setLoading"
    }),
    handleScroll: function(event) {
      this.windowTop = window.top.scrollY;
    }
  }
};
</script>
<style lang="scss">
.wrapper-footer {
  background: linear-gradient(180deg, $primary, $primary, darken($primary, 5));
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40px;
    z-index: 0;
    bottom: 0;
    left: 0;
    background: url("~@/static/img/pizzeria_patter.png");
  }
}
.layout-block {
  position: relative;
  &__header {
    // top: 1rem;
    padding-top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    z-index: 200;
    a[menu-name="#promotions"] {
      position: relative;
      &::after {
        content: "!";
        background-color: $accent-2;
        position: absolute;
        text-align: center;
        top: 0;
        padding: 0 5px;
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      &:hover {
        &::after {
          transform: translateY(-25%);
        }
      }
    }
    .mobile-menu {
      position: absolute;
      background-color: $primary;
      width: 100vw;
      left: 50%;
      transform: translate(-50.1%, 0%);
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      top: 0;
      transition: transform 0.5s ease;
      a[menu-name="#promotions"]::after {
        top: 50%;
        transform: translateY(-100%);
      }
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
      }
      &.hidden {
        transform: translate(-50.1%, -100%);
      }
      &__item {
        // background-color: #bada55;
        flex: 1;
        height: 100%;
        display: flex;
        transition: background-color 0.5s ease, color 0.8s ease;
        a {
          text-align: center;
          display: block;
          width: 100%;
          height: 100%;
          padding: 50px 0;
          font-weight: bold;
        }
        &--toggle {
          cursor: pointer;
          background-color: transparent;
          position: absolute;
          bottom: -22px;
          transform: translateY(100%);
          right: 2rem;
          height: max-content;
          width: 50px;
          // padding: 1rem;
          transition: bottom 0.5s 0.5s ease;
          font-weight: bold;
          color: $secondary;
          p {
            color: $secondary;
          }
          &.hide {
            bottom: 0px;
          }
        }
        ::after {
          color: $secondary;
        }
        &:hover {
          // background-color: #bada55;
          color: $primary;
          ::after {
            color: $secondary;
          }
          &--toggle {
            background-color: transparent !important;
          }
        }
      }
      @media (max-width: 575px) {
        &__item {
          flex: 0 1 100%;
        }
      }
    }
  }
  &__footer {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 0 70px;
    .footer-block {
      padding: 0 1rem;
      font-size: 14pt;
      &__title {
        font-size: 18pt;
        font-weight: bolder;
        padding-bottom: 0.8rem;
      }
      &--direction {
        display: grid;
        grid-template-rows: max-content 1fr;
      }
      &__direction {
        align-self: center;
      }
      &--payment-methods,
      &--copyright,
      &--social-media {
        justify-self: center;
        align-self: center;
      }
      &--payment-methods,
      &--social-media {
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
      &--social-media {
        grid-column: 2 / 3;
        padding: 1rem 0;
      }
      &--copyright {
        grid-row: 3 / -1;
        grid-column: 1 / -1;
        font-size: 10pt;
        font-weight: bold;
      }
      .social-wrapper {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      .footer-block {
        &--direction,
        &--copyright,
        &--phones,
        &--social-media,
        &--sections {
          justify-self: center;
          text-align: center;
          grid-column: 1 / 2;
        }
        &--direction {
          grid-row: 2 / 3;
          margin: 2.5rem auto;
          width: 70%;
        }
        &--copyright {
          grid-row: 6 / 7;
        }
        &--phones {
          grid-row: 3 / 4;
          margin-bottom: 1rem;
        }
        &--social-media {
          grid-row: 4 / 5;
        }
        &__phone {
          text-align: center;
        }
      }
    }
  }
}
.main-menu {
  &__item {
    padding: 0.9rem;
    font-weight: bold;
  }
}
.footer-pizza {
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(60%) rotate(0deg);
  animation: spin 5s ease infinite;
  // z-index: 100;
  display: none;
  img {
    width: 25%;
    // opacity: 0.4;
  }

  @keyframes spin {
    0% {
      transform: translateY(60%) rotate(0deg);
    }
    100% {
      transform: translateY(60%) rotate(360deg);
    }
  }
}
.go-top {
  bottom: 0;
  right: 0;
  background-color: $primary;
  margin: 2rem;
  color: $secondary;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid $secondary;
  z-index: 1000;
  img {
    height: 30px;
  }
  a {
    color: currentColor;
  }
}
</style>