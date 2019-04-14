<template>
    <div>
        <ul>
            <li
            v-for="item in 100"
            :key="item">{{ item }}</li>
        </ul>
        <p>{{datas}}</p>
    </div>
</template>
<script>
export default {
   data() {
       return {
           datas:this.$route.params.id
       }
   },
    name:'myDetail',
    beforeRouteEnter (to, from, next) {
        next()
    },
    beforeRouteLeave (to, from, next) {
        next()
    }
}
</script>
