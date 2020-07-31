<template>
  <div class="position-relative">
    <!-- <div class="sky-pizza position-absolute">
      <img src="@/static/img/pizza_real.png" class="img-fluid" alt>
    </div>-->

    <!-- hero -->
    <section id="hero" class="wrapper__hero position-relative">
      <div class="round-overlay position-absolute">
        <!-- <div class="pizza-hero position-absolute">
          <img src="@/static/img/pizza.png" class="img-fluid" alt>
        </div>-->
      </div>
      <div class="container">
        <div class="row section-block align-items-center">
          <div
            class="col-12 col-md-6 section-block__welcome text-center text-md-left position-relative"
          >
            <!-- <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3> -->
            <h1 class="pb-4">¡Pizza del horno a tu casa!</h1>
            <a href="#our-menu" class="btn btn-primary font-weight-bold">Ver menu</a>
          </div>
          <div class="pizza position-absolute">
            <img src="@/static/img/pizza/pizza-1.png" class="img-fluid" alt />
          </div>
        </div>
      </div>
    </section>

    <!-- combos and specials -->
    <section
      id="combos-and-specials"
      @scroll="prueba"
      class="section-block section-block__combos pt-5 d-flex justify-content-center align-items-center"
    >
      <div class="container combos-content position-relative">
        <!-- combos -->
        <div class="row align-content-center justify-content-center mb-0 mb-xl-5">
          <div class="col-12">
            <h2
              class="combos-content__title pb-5 pt-5 pt-md-0 text-center text-md-right font-weight-bold"
            >Combos y Especiales</h2>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 mb-xl-0 custom-card"
            @click="showCombo"
          >
            <div class="custom-card__wrapper">
              <!-- body -->
              <div class="custom-card__body position-relative">
                <div class="custom-card__name">
                  <h3>Combo 1</h3>
                </div>
                <div class="custom-card__price">
                  <h3 class="price">
                    <span class="price__currency">$</span>
                    <span class="price__unidad">49.</span>
                    <span class="price__centena">90</span>
                  </h3>
                </div>
                <ul class="custom-card__items list-unstyled">
                  <li class="custom-card__item">Pizza Chica</li>
                  <li class="custom-card__item">Refresco 355ml</li>
                </ul>
              </div>
              <div
                class="custom-card__card-overlay position-absolute h-100 w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="combo-pieces combo-pieces--combo-1">
                  <img src="@/static/img/pizza/combo1.png" class="img-fluid" alt />
                  <!-- <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/small-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >-->
                </div>
                <h2 class="pt-2">Combo 1</h2>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 mb-xl-0 custom-card"
            @click="showCombo"
          >
            <div class="custom-card__wrapper">
              <!-- body -->
              <div class="custom-card__body position-relative">
                <div class="custom-card__name">
                  <h3>Combo 2</h3>
                </div>
                <div class="custom-card__price">
                  <h3 class="price">
                    <span class="price__currency">$</span>
                    <span class="price__unidad">99.</span>
                    <span class="price__centena">90</span>
                  </h3>
                </div>
                <ul class="custom-card__items list-unstyled">
                  <li class="custom-card__item">Pizza Grande</li>
                  <li class="custom-card__item">2 Refrescos 355ml</li>
                </ul>
              </div>
              <div
                class="custom-card__card-overlay position-absolute h-100 w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="combo-pieces combo-pieces--combo-2">
                  <img src="@/static/img/pizza/combo2.png" class="img-fluid" alt />
                  <!-- <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/small-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >
                  <img
                    src="@/static/img/small-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >-->
                </div>
                <h2 class="pt-2">Combo 2</h2>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 mb-xl-0 custom-card"
            @click="showCombo"
          >
            <div class="custom-card__wrapper">
              <!-- body -->
              <div class="custom-card__body position-relative">
                <div class="custom-card__name">
                  <h3>Combo 3</h3>
                </div>
                <div class="custom-card__price">
                  <h3 class="price">
                    <span class="price__currency">$</span>
                    <span class="price__unidad">269.</span>
                    <span class="price__centena">90</span>
                  </h3>
                </div>
                <ul class="custom-card__items list-unstyled">
                  <li class="custom-card__item">3 Pizzas Grandes</li>
                  <li class="custom-card__item">2 Refrescos 1.5l</li>
                </ul>
              </div>
              <div
                class="custom-card__card-overlay position-absolute h-100 w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="combo-pieces combo-pieces--combo-3">
                  <img src="@/static/img/pizza/combo3.png" class="img-fluid" alt />
                  <!-- <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/big-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >
                  <img
                    src="@/static/img/big-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >-->
                </div>
                <h2 class="pt-2">Combo 3</h2>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 mb-xl-0 custom-card"
            @click="showCombo"
          >
            <div class="custom-card__wrapper">
              <!-- body -->
              <div class="custom-card__body position-relative">
                <div class="custom-card__name">
                  <h3>Combo 4</h3>
                </div>
                <div class="custom-card__price">
                  <h3 class="price">
                    <span class="price__currency">$</span>
                    <span class="price__unidad">349.</span>
                    <span class="price__centena">90</span>
                  </h3>
                </div>
                <ul class="custom-card__items list-unstyled">
                  <li class="custom-card__item">4 Pizzas Grandes</li>
                  <li class="custom-card__item">3 Refrescos 1.5l</li>
                </ul>
              </div>
              <div
                class="custom-card__card-overlay position-absolute h-100 w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="combo-pieces combo-pieces--combo-4">
                  <img src="@/static/img/pizza/combo4.png" class="img-fluid" alt />
                  <!-- <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/pizza-icon.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--pizza"
                    alt
                  >
                  <img
                    src="@/static/img/big-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >
                  <img
                    src="@/static/img/big-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >
                  <img
                    src="@/static/img/big-coke.svg"
                    class="img-fluid combo-pieces__piece combo-pieces__piece--small-coke"
                    alt
                  >-->
                </div>
                <h2 class="pt-2">Combo 4</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- specials -->
        <div class="specials mx-auto mb-5">
          <div class="special-box">
            <h3 class="special-box__title">
              <span class="accent">Miercoles</span>
              Hawaiiana
            </h3>
            <p class="special-box__price py-3 py-lg-0">
              <span class="accent">$</span>159.
              <span class="cents">90</span>
            </p>
            <ul class="special-box__pieces">
              <li class="special-box__piece text-left text-lg-rigth">
                2 Pizza
                <span class="accent">GRANDES</span>
              </li>
              <li class="special-box__piece text-left text-lg-rigth">Refresco de 1.5l</li>
            </ul>
            <div class="special-box__background">
              <img src="@/static/img/pizza/pizza-2.png" class="img-fluid" alt />
              <!-- <img src="@/static/img/pizza-icon.svg" class="img-fluid" alt> -->
            </div>
          </div>
          <div class="special-box">
            <h3 class="special-box__title">
              <span class="accent">Jueves</span>
              Pepperoni
            </h3>
            <p class="special-box__price py-3 py-lg-0">
              <span class="accent">$</span>159.
              <span class="cents">90</span>
            </p>
            <ul class="special-box__pieces">
              <li class="special-box__piece text-left text-lg-rigth">
                2 Pizza
                <span class="accent">GRANDES</span>
              </li>
              <li class="special-box__piece text-left text-lg-rigth">Refresco de 1.5l</li>
            </ul>
            <div class="special-box__background">
              <img src="@/static/img/pizza/pizza-1.png" class="img-fluid" alt />
              <!-- <img src="@/static/img/pizza-icon.svg" class="img-fluid" alt> -->
            </div>
          </div>
          <div class="special-box special-box--without-title">
            <p class="special-box__price py-3 py-lg-0">
              <span class="accent">$</span>15.
              <span class="cents">00</span>
            </p>
            <p class="special-box__description">
              Con la compra de cualquier pizza
              <span class="accent">más</span> 15 pesos te llevas
              <span class="accent">un Refresco de 1.5l</span>
            </p>
            <div class="special-box__background">
              <!-- <img src="@/static/img/big-coke.svg" class="img-fluid" alt> -->
              <img src="@/static/img/pizza/big-coke.png" class="img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- promotions -->
    <section
      id="promotions"
      class="section-block section-block__promotions position-relative d-flex align-items-center"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>hey</h1>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 col-md-6 d-flex justify-content-center align-items-center mb-5 mb-md-0"
          >
            <div class="wrapper-promo text-center">
              <h2>¡Promociones!</h2>
            </div>
          </div>
          <div
            class="col-12 col-md-6 promotions-block position-relative d-flex justify-content-center align-items-center"
          >
            <div class="layout-elements position-absolute overflow-hidden">
              <div class="pizzas position-absolute">
                <div class="pizzas__img">
                  <img src="@/static/img/pizza/pizza.png" class="img-fluid" alt />
                </div>
                <div class="pizzas__img">
                  <img src="@/static/img/pizza/pizza.png" class="img-fluid" alt />
                </div>
              </div>
            </div>
            <div class="wrapper-promotion d-flex justify-content-center position-relative">
              <h2 class="promotion-message text-right">
                <span class="promotion-message__quantity">2</span> pizzas grandes por
                <span class="promotion-message__price">
                  <span class="promotion-message__currency">$</span>160
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Short -->
    <section
      class="section-block section-block__pizzas section-block--short my-5 d-flex justify-content-center align-items-center"
    >
      <div class="container">
        <div class="row">
          <div class="col carousel-wrapper">
            <carousel
              items="3"
              :nav="false"
              :center="true"
              :loop="true"
              :responsive="responsiveCarousel"
              :autoplay="true"
            >
              <div class="carousel__item item">
                <img src="@/static/img/pizza/pizza-1.png" class="img-fluid carousel__img" alt />
                <div class="carousel__title">Extra Grande</div>
                <div class="carousel__information">
                  <ul class="carousel__list">
                    <li class="carousel__list-item">42cm</li>
                    <li class="carousel__list-item">12 Rebanadas</li>
                  </ul>
                  <div class="carousel__price">$115</div>
                </div>
              </div>
              <div class="carousel__item item">
                <img src="@/static/img/pizza/pizza-2.png" class="img-fluid carousel__img" alt />
                <div class="carousel__title">Grande</div>
                <div class="carousel__information">
                  <ul class="carousel__list">
                    <li class="carousel__list-item">34cm</li>
                    <li class="carousel__list-item">8 Rebanadas</li>
                  </ul>
                  <div class="carousel__price">$90</div>
                </div>
              </div>
              <div class="carousel__item item">
                <img src="@/static/img/pizza/pizza-3.png" class="img-fluid carousel__img" alt />
                <div class="carousel__title">Mediana</div>
                <div class="carousel__information">
                  <ul class="carousel__list">
                    <li class="carousel__list-item">25cm</li>
                    <li class="carousel__list-item">8 Rebanadas</li>
                  </ul>
                  <div class="carousel__price">$70</div>
                </div>
              </div>
              <div class="carousel__item item">
                <img src="@/static/img/pizza/pizza-1.png" class="img-fluid carousel__img" alt />
                <div class="carousel__title">Chica</div>
                <div class="carousel__information">
                  <ul class="carousel__list">
                    <li class="carousel__list-item">20cm</li>
                    <li class="carousel__list-item">4 Rebanadas</li>
                  </ul>
                  <div class="carousel__price">$45</div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- our menu -->
    <section id="our-menu" class="section-block section-block__menu row">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-center py-3 pb-5">
              Su menú!
              <div class="show-items-wrapper cursor-pointer" @click="showAllMenu = !showAllMenu">
                <img src="@/static/img/hide.svg" v-if="showAllMenu" class="img-fluid" alt />
                <img src="@/static/img/show.svg" v-else class="img-fluid" alt />
              </div>
            </h2>
            <!-- <select name="background-pattern" v-model="patternSelect">
              <option value="pattern1">Fondo 1</option>
              <option value="pattern2">Fondo 2</option>
              <option value="pattern3">Fondo 3</option>
            </select>-->
          </div>
        </div>
        <div class="row justify-content-around my-menu" :class="patternSelect">
          <div
            class="col-12 col-md-6 col-lg-4 orders-menu d-flex justify-content-center align-items-center my-5"
            v-for="(pizza, i) in menu"
            :key="i"
          >
            <div class="deeply-switch" :class="showAllMenu ? 'active-all' : ''">
              <div class="deeply-switch__title text-capitalize">
                {{ pizza.name }}
                <span v-if="pizza.newProduct" class="new-pizza">New</span>
              </div>
              <div class="deeply-switch__back">
                <div class="deeply-switch__wrapper-body">
                  <!-- <div class="deeply-switch__title text-capitalize">{{ pizza.name }}</div> -->
                  <div class="deeply-switch__description">{{ pizza.description }}</div>
                </div>
              </div>
              <div class="deeply-switch__front">
                <img :src="pizza.img" v-if="pizza.img" class="img-fluid" alt />
                <img src="@/static/img/pizza.png" v-else class="img-fluid" alt />
              </div>
              <ul class="deeply-switch__sizes">
                <li class="deeply-switch__size">
                  <span>Extra Grande</span>
                  <span>$115</span>
                </li>
                <li class="deeply-switch__size">
                  <span>Grande</span>
                  <span>$90</span>
                </li>
                <li class="deeply-switch__size">
                  <span>Mediana</span>
                  <span>$70</span>
                </li>
                <li class="deeply-switch__size">
                  <span>Chica</span>
                  <span>$45</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: "Su pizza | Del horno a tu casa"
    };
  },
  scrollToTop: true,
  layout: "pizzeria",
  data() {
    return {
      combos: [
        {
          id: 1,
          name: "Combo 1",
          price: "$49.90",
          pieces: [{ name: "Pizza chica" }, { name: "Refresco 355ml" }],
          img: require("@/static/img/pizza.png")
        },
        {
          id: 2,
          name: "Combo 2",
          price: "$99.90",
          pieces: [{ name: "Pizza Grande" }, { name: "2 Refrescos 355ml" }],
          img: require("@/static/img/pizza.png")
        },
        {
          id: 3,
          name: "Combo 3",
          price: "$269.90",
          pieces: [{ name: "3 Pizzas Grandes" }, { name: "2 Refrescos 1.5l" }],
          img: require("@/static/img/pizza.png")
        },
        {
          id: 4,
          name: "Combo 4",
          price: "$349.90",
          pieces: [{ name: "4 Pizzas Grandes" }, { name: "3  Refrescos 1.5l" }],
          img: require("@/static/img/pizza.png")
        }
      ],
      menu: [
        {
          id: "",
          name: "Hawaiiana",
          description: "Jamón, piña cereza, ex. queso"
        },
        {
          id: "",
          name: "pepperoni",
          description: "Extra pepperoni extra queso"
        },
        {
          id: "",
          name: "vegetariana",
          description: "Champiñon, piña, pimiento,cebolla"
        },
        {
          id: "",
          name: "Ranchera",
          description: "Frijol, chorizo, cebolla,jalapeño"
        },
        {
          id: "",
          name: "Carnes frias",
          description: "Jamón, salchicha, salami, pepperoni "
        },
        {
          id: "",
          name: "Burguer",
          description: "C. molida, salami, tocino, q. amarillo"
        },
        {
          id: "",
          name: "Mexicana",
          description: "Chorizo. c. molida, jalapeño, tocino"
        },
        {
          id: "",
          name: "Del mar",
          description: "Camaron, atun, pimiento, ex. queso"
        },
        {
          id: "",
          name: "Chickén",
          description: "Jamón, pollo, champion, ex. queso"
        },
        {
          id: "",
          name: "A la diabla",
          description: "C. pastor, chipotle, jalapeño, chorizo"
        },
        {
          id: "",
          name: "Cordón blue",
          description: "Pollo, jamón, tocino, q. amarillo"
        },
        {
          id: "",
          name: "Emperatriz",
          description: "Pepperoni, pimiento, c. molida, tocina"
        },
        {
          id: "",
          name: "Marina",
          description: "Atún, elote, pimiento, cebolla"
        },
        {
          id: "",
          name: "Norteña",
          description: "Chorizo, tocino, pimiento, elote"
        },
        {
          id: "",
          name: "Romana",
          description: "Champoñon, chorizo, jalapeño, tocino"
        },
        {
          id: "",
          name: "Cubana",
          description: "Jamón, tocino, chorizo, q. amarillo"
        },
        {
          id: "",
          name: "4 quesos",
          description: "Mozarella, oaxaca, americano, gouda"
        },
        {
          id: "",
          name: "Kanter",
          description: "Champiñon, tocino, salami, peperoni"
        },
        {
          id: "",
          name: "Pastor",
          description: "C. pator, piña, cebolla, tocino"
        },
        {
          id: "",
          name: "Hawaiiana VIP",
          description: "Jamón, piña, jalapeño, tocino"
        },
        {
          id: "",
          name: "Italiana",
          description: "Jamon, salchicha, salami, pimiento"
        },
        {
          id: "",
          name: "Al gusto",
          description: "4 ingredientes al gusto"
        },
        {
          id: "",
          name: "Combinación pizza suprema",
          description: "Pruebala!",
          newProduct: true
        },
        {
          id: "",
          name: "Alitas",
          description: "adobadas, a la brava, búfalo, mango habanero",
          img: require("@/static/img/alitas.png")
        },
        {
          id: "",
          name: "Papas a las francesa",
          description: "yum!",
          img: require("@/static/img/papasFrancesa.png")
        },
        {
          id: "",
          name: "Papas en gajos",
          description: "yum!",
          img: require("@/static/img/papasGajo.png")
        }
      ],
      patternSelect: "pattern1",
      responsiveCarousel: {
        0: { items: 1 },
        991: { items: 3 }
      },
      showAllMenu: false
    };
  },
  methods: {
    prueba() {
      console.info("pruebisima");
    },
    showCombo(event) {
      const element = event.target.closest(".custom-card");
      const elements = document.querySelectorAll(".custom-card");
      elements.forEach(el => {
        el.classList.remove("open");
      });
      element.classList.toggle("open");
    }
  }
};
</script>
<style lang="scss">
.round-overlay {
  width: 100vw;
  height: 100%;
  background: linear-gradient(150deg, $primary, $primary, darken($primary, 15));
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-bottom-right-radius: 100%;
  animation: swipeBorder 3s ease 1;
  z-index: 100;
  .pizza-hero {
    top: 50%;
    left: 0;
    transform: translate(-80%, -50%);
  }
  @media (max-width: 768px) {
    border-bottom-right-radius: 0%;
    overflow: hidden;
    animation: swipeBorder 3s ease 1 reverse;
    .pizza-hero {
      top: unset;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 60%);
      width: 75%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  @keyframes swipeBorder {
    0% {
      border-bottom-right-radius: 0%;
    }
    100% {
      border-bottom-right-radius: 100%;
    }
  }
}
.deeply-switch {
  $width_front: 150px;
  position: relative;
  width: $width_front;
  &__sizes {
    background-color: $secondary;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 270px;
    position: absolute;
    bottom: 0;
    transform: translate(-50%, 0%);
    z-index: 100;
    left: 50%;
    align-items: center;
    height: 65px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(black, 0.25);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  &__size {
    text-align: center;
    font-size: 10pt;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    position: relative;
    &::after {
      content: "";
      width: 2px;
      height: 45px;
      background-color: rgba($primary, 0.25);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
    span {
      color: $primary;
      &:first-child {
        height: 27px;
      }
    }
  }
  &__title {
    $extra_size: 25px;
    color: $primary;
    position: relative;
    z-index: 1;
    text-align: center;
    font-size: 14pt;
    padding: 1rem;
    font-weight: bold;
    background-color: #fff;
    transition: background-color 0.5s ease;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(black, 0.25);
    width: calc(100% + #{$extra_size});
    transform: translateX($extra_size / 2 * -1);
    .new-pizza {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      background-color: red;
      padding: 0.5rem;
      font-size: 10pt;
      border-radius: 5px;
    }
  }
  &__front {
    width: $width_front;
    height: 140px;
    position: relative;
    z-index: 100;
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
  }
  &__back {
    background-color: $secondary;
    width: 0%;
    height: 100%;
    top: 2.5px;
    left: $width_front / 2;
    position: absolute;
    transition: width 0.5s ease, transform 0.5s ease;
    border-top-right-radius: 130px;
    border-bottom-right-radius: 130px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .deeply-switch__wrapper-body {
      width: 250px;
    }
    .deeply-switch__title,
    .deeply-switch__description {
      opacity: 0;
      color: $primary;
      width: 50%;
      margin-right: 1.5rem;
      margin-left: auto;
      transition: opacity 0.5s ease;
    }
    .deeply-switch__description {
      color: grey;
    }
  }
  &:hover,
  &.active-all {
    .deeply-switch__sizes {
      opacity: 1;
      transform: translate(-50%, 50%);
    }
    .deeply-switch__title {
      background-color: transparent;
      box-shadow: 0px 6px 10px rgba(black, 0);
    }
    .deeply-switch__front {
      transform: translateX(-50%);
    }
    .deeply-switch__back {
      width: 250px;
      transform: translateX(-35%);
      box-shadow: 0px 6px 10px rgba(black, 0.25);
    }
    .deeply-switch__title,
    .deeply-switch__description {
      opacity: 1;
    }
  }
}
body {
  background: $primary;
}
* {
  color: $secondary;
  scroll-behavior: smooth;
}
.wrapper {
  &__hero {
    background-color: $secondary;
  }
}
.section-block {
  min-height: 100vh;
  .pizza {
    position: absolute;
    z-index: 100;
    width: 50%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 768px) {
      width: 60%;
      right: 50%;
      bottom: 0;
      top: unset;
      transform: translate(50%, 25%);
    }
  }
  &--short {
    min-height: 50vh;
  }
  &__welcome {
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 42pt;
      font-family: "Comfortaa", "Open Sans", sans-serif !important;
    }
    a {
      margin: 0 auto;
    }
  }
  &__combos {
    background-color: $secondary;
  }
  &__promotions {
    background-color: $secondary;
    // background: url("~@/static/img/pizzeria_patter.png");
    // min-height: 55vh;
  }
  &__menu {
    padding: 5rem 0 0;
    position: relative;
    .show-items-wrapper {
      display: inline-block;
      cursor: pointer;
      transform: translateY(15%);
      img {
        height: 35px;
        padding-left: 1rem;
        filter: invert(1);
      }
    }
  }
  .my-menu {
    position: relative;
    padding-top: 3rem;
    &::after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100%;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      opacity: 0.9;
    }
    &.pattern1 {
      &::after {
        background: url("~@/static/img/pizzeria_patter.png");
      }
    }
    &.pattern2 {
      &::after {
        background: url("~@/static/img/pizza_pattern2.png");
        background-size: 250px;
      }
    }
    &.pattern3 {
      &::after {
        background: linear-gradient(
            180deg,
            $primary,
            transparent,
            transparent,
            transparent,
            transparent,
            transparent,
            transparent,
            white
          ),
          url("~@/static/img/pizza_pattern4.png");
        background-size: 250px;
      }
    }
  }
  &__pizzas {
    .carousel {
      &__item {
        width: 250px;
        margin: 0 auto;
        text-align: center;
        color: $primary;
        display: grid;
        position: relative;
        border-radius: 20px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        background-color: transparent;
        transition: background-color 0.5s ease;
      }
      &__price,
      &__title,
      &__list,
      &__information {
        color: $primary;
        display: none;
      }
      &__img {
        width: 75% !important;
        height: auto;
        margin: 2rem 0;
        justify-self: center;
        filter: grayscale(1);
        transform: scale(1);
        transition: transform 0.5s 0.25s ease, filter 0.5s ease;
      }
      &__information {
        margin-top: 1rem;
        // display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 7px;
        margin-right: 7px;
        margin-bottom: 5px;
        border-radius: 20px;
        // margin: 0 auto;
        background-color: $primary;
      }
      &__price {
        font-size: 21pt;
        color: $secondary;
        font-weight: bold;
        justify-self: center;
        align-self: center;
      }
      &__list {
        padding: 1rem 0;
        font-size: 11pt;
        text-align: right;
        font-weight: bold;
        &-item {
          color: $secondary;
        }
      }
      &__title {
        font-size: 20pt;
        font-weight: bold;
        padding: 1.5rem 0;
        grid-row: 1 / 2;
      }
    }
    .owl-stage {
      display: flex;
      align-items: center;
    }
    .owl-item.active.center {
      .carousel {
        &__item {
          background-color: $secondary;
        }
        &__img {
          filter: grayscale(0);
          padding: 0;
          transform: scale(1.7);
        }
        &__information {
          display: grid;
        }
        &__price,
        &__title,
        &__list {
          display: block;
        }
      }
    }
    .owl-dots {
      margin-top: 2rem !important;
      .owl-dot {
        span {
          background-color: $secondary;
          width: 15px;
          height: 15px;
          border-radius: 5px;
        }
        &:focus {
          outline: none;
        }
        &.active span,
        &:hover span {
          background-color: $primary;
          border: 2px solid $secondary;
        }
      }
    }
  }
}
// h1 {
//   font-size: 42pt;
//   @media (max-width: 414px) {
//     font-size: 32pt;
//   }
// }
h2 {
  font-size: 24pt;
}
// theme start
.combos-content {
  display: grid;
  grid-template-rows: 65% 1fr;
  z-index: 200;
  &__title {
    color: $primary;
  }
  .custom-card {
    height: 275px;
    &__wrapper {
      cursor: pointer;
      background-color: $secondary;
      display: grid;
      height: 100%;
      width: 250px;
      margin: 0 auto;
      box-shadow: 1px 1px 4px rgba(black, 0.25);
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }
    h3,
    li,
    span {
      color: $accent-3;
    }
    &__body {
      padding: 3rem 1rem;
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(3, 1fr);
      overflow: hidden;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 10px;
        background-color: $primary;
        bottom: 0;
        left: 0;
      }
    }
    &__name {
      grid-column: 1 / -1;
      justify-self: center;
      align-self: center;
      font-weight: bold;
      color: $accent-3;
      font-size: 18pt;
      text-transform: uppercase;
      h3 {
        color: $accent-3;
      }
    }
    &__price {
      grid-column: 1 / 4;
      grid-row: 3 / 4;
      align-self: center;
      justify-self: center;
      z-index: 100;
      position: relative;
      font-weight: bold;
      font-size: 25pt;
      color: $primary;
      h3,
      span {
        color: $primary;
      }
      .price {
        display: flex;
        text-shadow: 0px 2px 0px white;
        &__currency {
          color: $accent-3;
          margin-right: 0.5rem;
          font-size: 20pt;
        }
        &__centena {
          font-size: 10pt;
        }
      }
    }
    &__card-overlay {
      background-color: $primary;
      z-index: 150;
      transform: translateY(0);
      transition: transform 0.5s ease, background-color, 0.5s ease;
      img {
        width: 75%;
      }
      .combo-pieces {
        width: 100%;
        display: flex;
        height: 150px;
        position: relative;
        justify-content: center;
        align-items: center;
        &__piece {
          position: absolute;
          &--pizza {
            width: 110px;
          }
        }
        // &--combo-1 {
        //   .combo-pieces__piece {
        //     &--pizza {
        //       z-index: 200;
        //       width: 95px;
        //     }
        //     &--small-coke {
        //       height: 100px;
        //       transform: translate(50%, -25%);
        //     }
        //   }
        // }
        // &--combo-2 {
        //   .combo-pieces__piece {
        //     &--pizza {
        //       z-index: 200;
        //       // width: 100px;
        //     }
        //     &--small-coke {
        //       height: 100px;
        //       transform: translate(25%, -35%);
        //       opacity: 0.9;
        //     }
        //     &--small-coke:nth-child(2) {
        //       transform: translate(50%, -25%);
        //       z-index: 150;
        //       opacity: 1;
        //     }
        //   }
        // }
        // &--combo-3 {
        //   .combo-pieces__piece {
        //     &--pizza {
        //       z-index: 200;
        //       &:nth-child(1) {
        //         transform: translateY(-15%);
        //         z-index: 300;
        //       }
        //       &:nth-child(2) {
        //         z-index: 250;
        //       }
        //       &:nth-child(3) {
        //         transform: translateY(15%);
        //       }
        //     }
        //     &--small-coke {
        //       transform: translate(0%, -35%);
        //       // transform: translate(0, -35%);
        //       &:nth-child(4) {
        //         transform: translate(25%, -35%);
        //       }
        //       &:nth-child(5) {
        //         // transform: translate(25%, -35%);
        //         transform: translate(-25%, -35%);
        //       }
        //     }
        //   }
        // }
        // &--combo-4 {
        //   .combo-pieces__piece {
        //     &--pizza {
        //       z-index: 200;
        //       &:nth-child(1) {
        //         transform: translateY(-15%);
        //         z-index: 300;
        //       }
        //       &:nth-child(2) {
        //         z-index: 250;
        //       }
        //       &:nth-child(3) {
        //         transform: translateY(15%);
        //       }
        //       &:nth-child(4) {
        //         transform: translateY(-30%);
        //         z-index: 350;
        //       }
        //     }
        //     &--small-coke {
        //       transform: translate(0%, -35%);
        //       &:nth-child(5) {
        //         transform: translate(45%, -15%);
        //       }
        //       &:nth-child(6) {
        //       }
        //       &:nth-child(7) {
        //         transform: translate(-45%, -15%);
        //       }
        //     }
        //   }
        // }
      }
    }
    &__items {
      grid-row: 5 / 6;
      grid-column: 1 / 4;
      align-self: center;
      text-align: center;
    }
    &__item {
      font-weight: bold;
      z-index: 100;
      position: relative;
      font-size: 11pt;
      text-shadow: 0px 1px 0px white;
    }
    &.open {
      .custom-card {
        &__card-overlay {
          transform: translateY(-100%);
        }
      }
    }
    &:not(.open) {
      .custom-card {
        &__card-overlay {
          background-color: darken($primary, 5);
        }
      }
    }
  }
  .specials {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    align-items: center;
    // margin: 1rem auto 48px;
    .special-box {
      background-color: $secondary;
      color: $accent-3;
      border: 3px solid #dceee5;
      box-shadow: 0px 5px 5px #dceee5;
      border-radius: 20px;
      padding: 1.5rem;
      display: grid;
      position: relative;
      overflow: hidden;
      height: 170px;
      &__piece,
      &__pieces,
      &__price,
      &__title,
      &__description {
        color: $accent-3;
        font-weight: bold;
        z-index: 200;
      }
      &__piece,
      &__description {
        font-size: 11pt;
        text-align: right;
        align-self: end;
      }
      &__price {
        font-weight: bold;
        font-size: 22pt;
        letter-spacing: -1px;
        display: flex;
        .cents {
          font-size: 14pt;
          color: $primary;
        }
      }
      &__title {
        text-transform: uppercase;
        width: min-content;
      }
      &__background {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        transform: translate(50%, 0%);
      }
      &--without-title {
        grid-template-rows: repeat(2, 1fr);
        .special-box {
          &__price {
            justify-self: center;
            align-self: center;
          }
          &__description {
            padding-right: 1.5rem;
            align-self: flex-start;
          }
          &__background {
            width: 46px;
            right: 0;
            transform: translate(25%, 0%);
            img {
              height: 100%;
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      .special-box:nth-child(3) {
        grid-column: 1 / 3;
        justify-self: center;
      }
    }
    @media (max-width: 576px) {
      width: 70%;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      justify-content: center;
      .special-box:nth-child(2) {
        grid-row: 2 / 3;
      }
      .special-box:nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
    }
  }
}
.orders-menu {
  height: 150px;
}
.wrapper-promo {
  width: 300px;
  h2 {
    color: $primary;
  }
}
.promotion-message {
  font-size: 27pt;
  width: min-content;
  position: relative;
  z-index: 150;
  &__quantity {
    font-size: 35pt;
  }
  &__price {
    font-size: 70pt;
  }
  &__currency {
    transform: scale(0.5);
  }
}

// ref
.promotions-block {
  height: 350px;
  .layout-elements {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at bottom right,
      darken($primary, 10),
      darken($primary, 2),
      $primary
    );
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 150px;
    border-top-right-radius: 150px;
    .pizzas {
      width: 300px;
      height: 200px;
      bottom: 0;
      right: 0;
      transform: translate(15%, 35%);
      &__img {
        width: 200px;
        position: absolute;
      }
      &__img:nth-child(1) {
        z-index: 100;
        img {
          filter: drop-shadow(18px 15px 3px rgba(8, 30, 2, 0.2));
        }
      }
      &__img:nth-child(2) {
        transform: translateX(50%);
        filter: blur(1px);
        opacity: 0.9;
      }
    }
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}
.section-block__promotions {
  position: relative;
  .box-promotions {
    bottom: 0;
    transform: translateY(-25%);
    // width: 100%;
    // height: 100%;
    // display: grid;
    // grid-template-rows: 1;
    // grid-template-columns: repeat(4, 1fr);
    // grid-gap: 2rem;
    // align-items: center;
    // transform: translateY(25%);
    .promotion {
      display: grid;
      justify-content: center;
      &__title,
      &__list,
      &__item,
      &__price {
        color: $accent-3;
        font-weight: bold;
        text-align: center;
      }
      &__img {
        width: 150px;
      }
      &__title {
        font-size: 14pt;
        color: $primary;
      }
      &__price {
        color: $primary;
      }
      &__list {
        margin: 0.5rem 0;
      }
      &__item {
        font-size: 10pt;
      }
    }
  }
}
.sky-pizza {
  z-index: 100;
  max-height: 150vh;
  width: 50%;
  top: 70vh;
  left: 50%;
  transform: translateX(-50%);
  img {
    filter: drop-shadow(-7px 5px 5px rgba(black, 0.25));
  }
}
// animations
@keyframes swipeLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
// queries
@media (max-width: 320px) {
  .wrapper__hero {
    // background-color: #bada55;
  }
}
</style>
