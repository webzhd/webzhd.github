<template>
    <div>
        <p>{{this.mtitle}}</p>
        <p>{{this.desc}}</p>
       
        <span @click="go">go</span>
    </div>
</template>

<script>
export default {
    methods: {
        go(){
            console.log(this.$page);
            this.$router.push(`article/1.html`)
        }
    },
    props:{
        mtitle: String,
        desc: String,
        path: String
    }
}
</script>

