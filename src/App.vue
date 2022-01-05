<template>
  <div id="app">
      <div class="relative min-h-screen md:flex">  
          <!-- mobile menu bar -->
          <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <a href="#" class="block p-4 text-white font-bold"> Fit Tools</a>   
            <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" /></svg>
            </button>
          </div>

          <!-- sidebar -->
          <div class="sidebar bg-gray-800 text-white w-72 space-y-6 py-0 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">
              
              <div class="container flex items-center justify-between h-24 bg-gray-900 pl-8 pr-20">
                <img src="./assets/logo.svg" class="w-16 h-16">
                <p class="text-white text-2xl text-bold tracking-wide"> Fit Tools </p>
              </div>

              <!-- nav -->
              <nav class="px-2 pt-5">
                  <router-link to="/" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/calendar.svg"> <span class="text-xl">Daily</span> 
                  </router-link>

                  <router-link to="/exercises" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/dumbbell.svg"> <span class="text-xl">Ćwiczenia</span>
                  </router-link>

                  <router-link to="/weight" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/weight-scale.svg"> <span class="text-xl">Waga</span>
                  </router-link>

                  <router-link to="/diet" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/diet.svg"> <span class="text-xl">Dieta</span>
                  </router-link>

                  <router-link to="/measurements" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/fit.svg"> <span class="text-xl">Wymiary</span>
                  </router-link>

                  <router-link to="/challenges" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/award.svg"> <span class="text-xl">Wyzwania</span>
                  </router-link>
                  
                  <router-link to="/sleep" class="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-900 hover:text-white flex items-center space-x-2"> 
                    <img class="w-5 h-5 mr-2" src="./assets/crescent-moon.svg"> <span class="text-xl">Sen</span>
                  </router-link>
              </nav>

              <div class="container flex justify-between items-center absolute inset-x-0 bottom-0 p-5">
                  <img src="./assets/profile.svg" class="w-12 h-12 rounded-full">
                  <div class="flex-grow ml-2">
                    <p class="text-sm font-semibold tracking-wide">Dudek Przemysław</p>
                    <small class="text-xs text-gray-400"><a href="#">Pokaż profil</a></small>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
              </div>
          </div>


          <!-- content -->
          <div class="flex-1  text-2xl font-bold">
              <router-view></router-view>
              
          </div>
      </div>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'App',
  mounted(){
      toggleSidebar()
  }
}




function toggleSidebar(){
      const btn = document.querySelector('.mobile-menu-button');
      const sidebar = document.querySelector('.sidebar');

      btn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
      })
}

</script>


<style src="./assets/tailwind.css"></style>
