<template>
  <div>
    <nav class="navbar">
      <div class="container d-flex justify-content-between align-items-center">
          <div class="navbar-link d-flex align-items-center">
              <a href="#">
                  <img src="../assets/images/brand/logo-brand.svg" alt="Logo Brand" class="img-fluid" width="56">
              </a>
              <a href="#" class="link-item d-none d-md-inline-block">Home</a>
              <a href="#" class="link-item d-none d-md-inline-block">About</a>
              <a href="#" class="link-item d-none d-md-inline-block">Category</a>
              <a href="#" class="link-item d-none d-md-inline-block">Blog</a>
          </div>
          <button type="button" :class="{ active: active }" @click="$emit('activeSidebar')" class="navbar-button d-md-none d-flex flex-column justify-content-center align-items-center gap-1">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </button>
          <div class="wrapper d-flex gap-2">
            <a href="#" class="button-primary-small d-none d-md-inline-block">Explore Now</a>
            <button v-if="!user" type="button" data-bs-toggle="modal" data-bs-target="#modalLogin" class="button-reverse-small d-none d-md-inline-block">Login Account</button>
            <button v-if="user" type="button" @click="handleLogout()" class="button-reverse-small d-none d-md-inline-block">Logout</button>
          </div>  
      </div>
    </nav>

    <nav :class="{ active: active }" class="navbar-list d-flex justify-content-center align-items-center">
      <div class="list-wrapper text-center d-flex flex-column align-items-center gap-3">
        <a href="#" class="list-item">Home</a>
        <a href="#" class="list-item">About Us</a>
        <a href="#" class="list-item">Category Art</a>
        <a href="#" class="list-item">Blog ArtistryIndo</a>
        <a href="#" class="button-primary mt-3 w-100">Explore Now</a>
      </div>
    </nav>

    <!-- LOGIN MODAL -->
    <div v-if="!user" class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="content-header d-flex justify-content-between gap-3">
                  <h1 class="title">Login Account</h1>
                  <button type="button" class="exit-button" data-bs-dismiss="modal">
                      <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                  </button>
              </div>
              <div class="err-message" v-if="loginMsg">
                {{ loginMsg }}
              </div>
              <div class="content-body d-flex flex-column align-items-center">
                  <form class="form" @submit.prevent="handleLogin()">
                      <input required type="email" v-model="email" class="input mb-2" placeholder="Email address">
                      <input required type="password" v-model="password" class="input mb-4" placeholder="Password account">
                      <button class="button-primary w-100">Login Account</button>
                  </form>
                  <p class="link-redirect">Don't have an account? <button type="button" data-bs-toggle="modal" data-bs-target="#modalRegister">Register Now</button></p>
              </div>
          </div>
      </div>
    </div>

    <!-- SIGNUP MODAL  -->
    <div v-if="!user" class="modal fade" id="modalRegister" tabindex="-1" aria-labelledby="modalRegisterLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="content-header d-flex justify-content-between gap-3">
                    <h1 class="title">Register Account</h1>
                    <button type="button" class="exit-button" data-bs-dismiss="modal">
                        <img src="../assets/images/icons/exit.svg" alt="Exit Icon" class="img-fluid" width="16">
                    </button>
                </div>
                <div class="err-message" v-if="signupMsg">
                  {{ signupMsg }}
                </div>
                <div class="content-body d-flex flex-column align-items-center">
                    <form class="form" @submit.prevent="handleSignup()">
                        <input required type="text" v-model="new_username" class="input mb-2" placeholder="Username">
                        <input required type="email" v-model="new_email" class="input mb-2" placeholder="Email address">
                        <input required type="password" v-model="new_password" class="input mb-4" placeholder="Password account">
                        <button type="submit" class="button-primary w-100">Create an Account</button>
                    </form>
                    <p class="link-redirect">Already have an account? <button type="button" data-bs-toggle="modal" data-bs-target="#modalLogin">Login Account</button></p>
                </div>
            </div>
        </div>
    </div>

  </div>  
</template>

<script setup>
import { ref, computed  } from 'vue'
import { useStore } from 'vuex'
// import { auth } from '../firebase/config'
// import { onAuthStateChanged } from 'firebase/auth';

// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
  active: Boolean,
});
// eslint-disable-next-line no-unused-vars, no-undef
const emit = defineEmits(['activeSidebar'])

const store = useStore()

const email = ref('')
const password = ref('')
const new_username = ref('')
const new_email = ref('')
const new_password = ref('')

const loginMsg = ref(null)    
const signupMsg = ref(null)    

const user = computed(() => store.state.user)
// const authIsReady = computed(() => store.state.authIsReady)

const handleLogin = async () => {
  try {
    await store.dispatch('login', {
      email: email.value,
      password: password.value
    })
    
    email.value = ""
    password.value = ""

    location.reload()
    
  } catch (err) {
    loginMsg.value = "Email or password incorrect"
  }
}

const handleSignup = async () => {
  try {
    await store.dispatch('signup', {
      username: new_username.value,
      email: new_email.value,
      password: new_password.value
    })

    signupMsg.value = "Account Created Successfully"
    new_username.value = ""
    new_email.value = ""
    new_password.value = ""

    location.reload()

  } catch (err) {
    signupMsg.value = "Email already registered"
  }
}    

const handleLogout = () => {
  store.dispatch('logout')
}
</script>