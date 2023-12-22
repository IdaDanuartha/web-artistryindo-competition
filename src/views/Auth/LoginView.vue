<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>

    <div>{{ error }}</div>
  </form>
</template>

<script>
import { ref  } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const email = ref('')
    const password = ref('')
    const error = ref(null)    

    let user = null;

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {        
        user = currentUser.email;
        if(user) {
          router.push('/')
        }
      } else {        
        user = null;
      }
    });

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })

        router.push('/')
      } catch (err) {
        error.value = "Email or password incorrect"
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>