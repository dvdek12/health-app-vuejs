<template>
    <div class="grid grid-rows-3 grid-flow-col gap-20 h-full">
        <div class="col-span-2 bg-blue-500 rounded-xl p-10">
            <!-- komponent z trenerami -->
            <div class="flex flex-row space-x-3">
                <div class="bg-local rounded-full z-0 h-24 w-24 border-4 border-yellow-400" style="background-image: url('logo.png')">
                    
                </div>
                <div class="rounded-full h-24 w-24">
                    <img src="../assets/trainers/man.svg">
                </div>
                <div class="rounded-full h-24 w-24">
                    <img src="../assets/trainers/man2.svg">
                </div>
                <div class="rounded-full h-24 w-24">
                    <img src="../assets/trainers/man3.svg">
                </div>
                <div class="rounded-full h-24 w-24">
                    <!-- <img src="../assets/trainers/man4.svg"> -->
                </div>
            </div>
        </div>
        <div class="row-span-2 col-span-2 bg-blue-500 rounded-xl p-10">Popularne plany treningowe</div>
        <div class="row-span-3 bg-blue-100 rounded-xl p-6 flex flex-col space-y-6">
            
            <div class="flex flex-col justify-between w-full h-48 rounded-xl p-3 shadow-2xl" id="plan">
                <div class="flex flex-col">
                    <p class="font-semibold text-green-500 text-lg">
                        Advanced Level
                    </p>
                    <p class="font-bold text-2xl text-white">
                        Strong and Big Chest
                    </p>
                </div>

                <div class="flex flex-row justify-between">
                    <div class="flex flex-col text-gray-200 text-base font-normal  w-3/4">
                        <p>Full Equipment</p>
                        <p>Strength</p>
                        <p>Total time: 45 minutes</p>
                    </div>

                    <div class="place-self-end">
                        <button class="rounded-full bg-green-500 text-black font-bold text-xl py-1 px-6">
                            TRY
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-between w-full h-48 rounded-xl p-3 shadow-2xl" id="plan2">
                <div class="flex flex-col">
                    <p class="font-semibold text-green-500 text-lg">
                        Advanced Level
                    </p>
                    <p class="font-bold text-2xl text-white">
                        Strong and Big Chest
                    </p>
                </div>

                <div class="flex flex-row justify-between">
                    <div class="flex flex-col text-gray-200 text-base font-normal  w-3/4">
                        <p>Full Equipment</p>
                        <p>Strength</p>
                        <p>Total time: 45 minutes</p>
                    </div>

                    <div class="place-self-end">
                        <button class="rounded-full bg-green-500 text-black font-bold text-xl py-1 px-6">
                            TRY
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-between w-full h-48 rounded-xl p-3 shadow-2xl" id="plan3">
                <div class="flex flex-col">
                    <p class="font-semibold text-green-500 text-lg">
                        Advanced Level
                    </p>
                    <p class="font-bold text-2xl text-white">
                        Strong and Big Chest
                    </p>
                </div>

                <div class="flex flex-row justify-between">
                    <div class="flex flex-col text-gray-200 text-base font-normal  w-3/4">
                        <p>Full Equipment</p>
                        <p>Strength</p>
                        <p>Total time: 45 minutes</p>
                    </div>

                    <div class="place-self-end">
                        <button class="rounded-full bg-green-500 text-black font-bold text-xl py-1 px-6">
                            TRY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{

    }
</script>

<style>
    body{
        /* Mountains */
        background-color: #1e2426;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%230ca6cc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23048caa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233d99c7' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23307a9c' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%236d8bc2' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%235c688e' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%239e7ebe' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23885581' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23ce70b9' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23b44373' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ff63b4' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23e03165' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;

        /* background-color: #1cb5e6;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.69'%3E%3Cpath fill='%2365a7d7' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%238c98c7' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ab87b5' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c474a1' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23db5d8b' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c4598e' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23aa5590' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%238b5093' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23624b95' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23084698' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover; */
    }

    #plan {
        background-image: url("../assets/photo1.jpg");
        background-size: cover;
        filter: contrast(1.2);
    }

    #plan2 {
        background-image: url("../assets/photo2.jpg");
        background-size: cover;
        filter: contrast(1.2);
    }

    #plan3 {
        background-image: url("../assets/photo3.jpg");
        background-size: cover;
        filter: contrast(1.2);
    }
</style>