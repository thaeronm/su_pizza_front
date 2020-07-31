<template>
  <div>
    <b-navbar toggleable="lg" class="d-flex custom-navbar" type="dark">
      <b-navbar-brand to="/dashboard">Home</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto align-items-center">
          <!-- Users -->
          <template v-if="getAuth !== null && getAuthType.name === 'Administrador'">
            <b-nav-item href="#">Usuarios</b-nav-item>
          </template>

          <!-- my parking -->
          <b-nav-item-dropdown text="Mis espacios" right>
            <b-dropdown-item to="/dashboard/parkings/1">Esp. 1</b-dropdown-item>
            <b-dropdown-item to="/dashboard/parkings/2">Esp. 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/dashboard/parkings/">Ver Todos</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Help -->
          <b-nav-item-dropdown text="Ayuda" right>
            <b-dropdown-item to="/dashboard/faq">FAQ</b-dropdown-item>
            <b-dropdown-item to="/dashboard/contact">Contacto</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Users -->
          <template v-if="getAuth !== null && getAuthType.name === 'Administrador'">
            <b-nav-item to="/dashboard/settings">Configuración</b-nav-item>
          </template>

          <!-- my Profile -->
          <b-nav-item-dropdown right class="profile-custom">
            <template v-slot:button-content>
              <div v-if="getAuth" class="profile-custom-btn">{{ getInitial() }}</div>
            </template>
            <b-dropdown-item href="#">Mi perfil</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Cerrar Session</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),
    getInitial() {
      const lastname = this.getAuth.lastnames;
      const lastnameLetters = lastname.split("");
      const initialLastName = lastnameLetters[0];
      return initialLastName;
    }
  },
  computed: {
    ...mapGetters({
      getAuth: "auth/getAuth",
      getAuthType: "auth/getUserType"
    })
  }
};
</script>
<style lang="scss">
.profile-custom {
  .dropdown-toggle::after {
    display: none;
  }
  &-btn {
    background-color: $accent-1;
    color: $blanco;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
.custom-navbar {
  height: 65px;
}
.navbar {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $accent-1;
    bottom: 0;
    left: 0;
  }
}
</style>