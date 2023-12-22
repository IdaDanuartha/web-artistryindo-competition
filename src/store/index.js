// import { auth, db, storage } from '../firebase/config'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
// import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
// import { deleteObject, ref, uploadBytes } from 'firebase/storage'
// import moment from 'moment/moment'

import { auth,db } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      // console.log('user state changed: ', state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  actions: {    
    async signup(context, {username, email, password}) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
        // If the above line succeeds, the user is created, and now you can update the profile
        await updateProfile(auth.currentUser, { displayName: username });
    
        // After successful signup and profile update, commit the user to the Vuex store
        context.commit('setUser', res.user);
      } catch (error) {
        // Handle specific error when email is already registered
        if (error.code === 'auth/email-already-in-use') {
          // You can show a user-friendly message or handle the error as needed
          console.error('Email is already registered. Please use a different email.');
        } else {
          // Handle other errors
          console.error('An error occurred during signup:', error.message);
        }
        
        // Rethrow the error to indicate that the signup process failed
        throw error;
      }
    },
    async login(context, {email, password}) {
      const res = await signInWithEmailAndPassword(auth, email, password)

      if(res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
    },
    async fetchUser(context ,user) {      
      if (user) {
        context.commit("setUser", {          
          email: user.email
        });
      } else {
        context.commit("setUser", null);
      }
    },
    getTestimonials(context, testimonial) {
      onSnapshot(collection(db, "testimonials"), (querySnapshot) => {
        const fbTestimonial = []
        querySnapshot.forEach((doc) => {
          console.log(doc.data().created_at)
          const blog = {
            id: doc.id,
            username: doc.data().username,         
            message: doc.data().message,         
          }
          fbTestimonial.push(blog)
        });
        testimonial.value = fbTestimonial
      });
    },   
    async addTestimonial(context, { message, username }) {
      try {      
        // Check if the testimonial with the same message already exists
        const testimonialQuery = query(collection(db, 'testimonials'), where('username', '==', username));
        const existingTestimonials = await getDocs(testimonialQuery);

        if (existingTestimonials.size > 0) {
          // Testimonial with the same message already exists, return an error
          throw new Error('You have added a testimonial');
        }      
        await addDoc(collection(db, "testimonials"), {
          message,
          username
        });        
      } catch (err) {
        console.error("Error adding document: ", err);
        throw err
      }
    },
  },
})

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store