<template>
    <div>
        <YMCA></YMCA>
    </div>
</template>

<script>
    import YMCA from './measurements/YMCA'

    export default{
        components: {
            YMCA
        },
        data(){
            return {
                gender: '',
                age: '',
                bodyWeight: '',
                bodyGrowth: '',
                result: 0,
                show: false,
                isCorrect: false
            }
        },
        methods: {
            countYMCA(){ // funkcja licząca wskaźnik YMCA
                if(regex.test(this.bodyWeight) && regex.test(this.age) && regex.test(this.bodyGrowth)){
                    if(this.gender == 'man')
                        this.result = (10 * this.bodyWeight) + (6.25 * this.bodyGrowth) - (5 * this.age) + 5
                    else
                        this.result = (10 * this.bodyWeight) + (6.25 * this.bodyGrowth) - (5 * this.age) - 161
                    this.show = true
                    this.isCorrect = true
                }else{
                    this.show = true
                    this.isCorrect = false
                }
            }
        }
    }

    const regex = new RegExp("^[0-9]{1,3}$") //wyr. regularne, która sprawdza czy string ma 3 cyfry w zakresie 1-9
    
</script>