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
            this.$router.push(this.path)
        }
    },
    props:{
        mtitle: String,
        desc: String,
        path: String
    }
}
</script>

