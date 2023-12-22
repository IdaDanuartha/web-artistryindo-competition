<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>

    <div>{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

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
        await store.dispatch('signup', {
          email: email.value,
          password: password.value
        })

        router.push('/auth/login')
      } catch (err) {
        error.value = "Email already registered"
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>