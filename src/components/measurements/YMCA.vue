<template>
    <div class="w-full h-auto bg-white  p-8 lg:p-10 rounded-lg">
            <div class="flex justify-between flex-wrap gap-10 text-base sm:text-3xl">
                <div class="grid lg:grid-cols-2  place-items-start gap-10">
                    <div class="flex">
                        <label class="mx-4">Płeć: </label>
                        <select class="bg-gray-200 w-3/5" v-model="gender">
                            <option value="woman">Kobieta</option>
                            <option value="man">Mężczyzna</option>
                        </select>
                    </div>
                    <div class="flex">
                        <label class="flex-none mx-4">Wiek: </label>
                        <input class="flex-grow bg-gray-200 w-3/5" v-model="age" type="text">
                    </div>
                    <div class="flex">
                        <label class="flex-none mx-4">Wzrost (cm): </label>
                        <input class="flex-grow bg-gray-200  w-3/5" v-model="bodyGrowth" type="text">
                    </div>
                    <div class="flex">
                        <label class="flex-none mx-4">Waga (kg): </label>
                        <input class="flex-grow bg-gray-200  w-3/5" v-model="bodyWeight" type="text">
                    </div>
                </div>
                <div class="m-auto">
                    <button class="flex flex-wrap" @click="countYMCA()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        <span class="font-medium">Oblicz</span>
                    </button>
                </div>
            </div>

            <div class="mx-4 mt-6" v-if="show">
                <p v-if="isCorrect"> Twój wskaźnik YMCA wynosi <span :class="{'text-red-500': result < 0, 'text-green-500': result > 0}">{{result}}</span>, czyli nie możesz zjeść mniej niż <span :class="{'text-red-500': result < 0, 'text-green-500': result > 0}">{{result}}</span> <span class="text-yellow-500"> kcal </span> dziennie. </p>
                <p v-else> Niestety podano niepoprawne dane.</p>
            </div>
    </div>
</template>


<script>
    

    export default{

    }
</script>