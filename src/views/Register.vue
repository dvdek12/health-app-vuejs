<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-1/4 h-auto flex flex-col space-y-4 bg-white shadow-xl rounded-lg p-10">

      <div class="inline-flex justify-between items-center">
        <div class="inline-flex space-x-2 items-center  ">
          <div class="bg-purple-500 w-3 h-3 rounded-full"></div>
          <h2 class="text-xl  font-dongle mt-1">FitTools</h2>
        </div>

        <div>
          <p class="font-outfit text-md ">Have account? <span class="text-purple-500 font-semibold font-sans">Log in</span></p>
        </div>
      </div>

      <h1 class="text-3xl text-gray-900 font-black pt-10">Manage your health good habits with us!</h1>

      <p class="text-xl text-gray-400">Takes less than moment to fill out fields needed to register you.</p>

      <form @submit.prevent="onFormSubmit()" class="flex flex-col space-y-12 py-7">
        
        <!-- EMAIL INPUT -->
        <div class="flex flex-col space-y-1">
          <span v-if="(!$v.email.email || !$v.email.required) && $v.email.$dirty" class="text-red-300 text-xs font-normal">Valid email!</span>
          <input 
            class="focus:outline-none transition ease-in-out focus:border-opacity-100 bg-gray-100 py-2 px-3 rounded-t-md border-opacity-0 border-b-2 " type="email" placeholder="Email..."
            v-model.trim="email"
            :class="[(!$v.email.required || !$v.email.email ) ? 'border-purple-500' : 'border-green-500 bg-green-100 rounded-t-md p-2']"
            @input="$v.email.$model = email"
          >
        </div>

        <!-- PASSWORD INPUT -->
        <div class="inline-flex">
          <div class="flex flex-col space-y-1 w-full">
            <span v-if="!$v.password.required  && $v.password.$dirty" class="text-red-300 text-xs font-normal">Password is required!</span>
            <span v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty" class="text-red-300 text-xs font-normal">Password must be between {{ $v.password.$params.minLength.min }} and {{ $v.password.$params.maxLength.max }} characters.</span>
            <input 
              @focus="focused = true" 
              @blur="focused = false" 
              class="w-full focus:outline-none transition z-30 ease-in-out focus:border-opacity-100 bg-gray-100 py-2 px-3 rounded-t-md border-opacity-0 border-b-2" type="text" placeholder="Password..."
              :class="[(!$v.password.required ||  !$v.password.minLength) ? 'border-purple-500' : 'border-green-500 bg-green-100 rounded-t-md p-2']"
              v-model.trim="password"
              @input="$v.password.$model = password"
            >
          </div>

          <img v-if="focused" src="../assets/tiny/hide.png" class="cursor-pointer w-4 h-4 transform -translate-x-full  transition ease-in-out z-50">
        </div>
        
        <!-- REPEAT PASSWORD INPUT -->
        <div class="inline-flex ">
          <div class="flex flex-col space-y-1 w-full">
            <span v-if="(!$v.confirmPassword.required || !$v.confirmPassword.sameAsPassword) && $v.confirmPassword.$dirty " class="text-red-300 text-xs font-normal">Password should be the same as the one above! </span>
            <input 
              @focus="focused2 = true" 
              @blur="focused2 = false" 
              class="w-full focus:outline-none transition ease-in-out focus:border-opacity-100 bg-gray-100 py-2 px-3 rounded-t-md border-opacity-0 border-b-2 border-purple-500" type="text" placeholder="Repeat Password..."
              :class="[(!$v.confirmPassword.required ||  !$v.confirmPassword.sameAsPassword) ? 'border-purple-500' : 'border-green-500 bg-green-100 rounded-t-md p-2']"
              v-model.trim="confirmPassword"
              @input="$v.confirmPassword.$model = confirmPassword"
            >
          </div>

          <img v-if="focused2" src="../assets/tiny/hide.png" class="w-4 h-4 transform -translate-x-full  transition ease-in-out">
        </div>

        <input type="submit" value="Get Started" class="cursor-pointer bg-purple-500 text-white font-semibold text-xl rounded-lg w-full tracking-wider py-5" />
      </form>

      
    </div>
  </div>
</template>

<script>
import authAxios from '../auth-axios'
import { required, email, sameAs, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      focused: false,
      focused2: false,
      isValid: false
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(64)
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    async onFormSubmit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        
        try {
          let response = await authAxios.post('accounts:signUp?key=AIzaSyDBPaWzd1wnE9fcpX8oEHIHYRMOPwy8eQ8', {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          });

          console.log(response)
        } catch(e) {
          console.log(e)
        }

      }else{
        console.log(this.$v.email.email)
      }
    }
  }
}
</script>