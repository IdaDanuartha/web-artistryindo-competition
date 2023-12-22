// import { auth, db, storage } from '../firebase/config'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
// import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
// import { deleteObject, ref, uploadBytes } from 'firebase/storage'
// import moment from 'moment/moment'

import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed: ', state.user)
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
    // getBlogs(context, blogs) {
    //   onSnapshot(collection(db, "blogs"), (querySnapshot) => {
    //     const fbBlogs = []
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data().created_at)
    //       const blog = {
    //         id: doc.id,
    //         title: doc.data().title,
    //         content: doc.data().content,
    //         thumbnail: doc.data().thumbnail,
    //         is_vote: doc.data().is_vote,
    //         created_at: moment(doc.data().created_at.toDate(), 'x').format('D MMM Y')
    //       }
    //       fbBlogs.push(blog)
    //     });
    //     blogs.value = fbBlogs
    //   });
    // },
    // async getBlog(context, {id, blog}) {
    //   const blogContent = await getDoc(doc(db, "blogs", id));

    //   blog.value.title = blogContent.data().title
    //   blog.value.content = blogContent.data().content
    // },
    // async addBlog(context, { title, content, thumbnail}) {
    //   try {        
    //     const filename = thumbnail.files[0].name
    //     const storageRef = ref(storage, `blogs/${filename}`);        

    //     uploadBytes(storageRef, thumbnail.files[0]).then((snapshot) => {          
    //       console.log('Uploaded a blob or file! ' + snapshot);
    //     });

    //     const docRef = await addDoc(collection(db, "blogs"), {
    //       title,
    //       content,
    //       thumbnail: filename,
    //       created_at: new Date()
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // },
    // async updateBlog(context, { id, title, content}) {
    //   try {
    //     const docRef = await updateDoc(doc(db, "blogs", id), {
    //       title,
    //       content,
    //     });
    //     console.log("Document updated with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error updating document: ", e);
    //   }
    // },
    // async deleteBlog(context, {id, filename}) {
    //   try {
    //     // Create a reference to the file to delete
    //     const storageRef = ref(storage, `blogs/${filename}`);        

    //     // Delete the file
    //     deleteObject(storageRef).then(() => {
    //       console.log("file deleted successfully")
    //     }).catch((error) => {          
    //       console.log(error)
    //     });

    //     await deleteDoc(doc(db, "blogs", id));

    //     console.log("Document written with ID: ", id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // }
  },
})

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store