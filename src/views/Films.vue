<template>
    <div>
        <Banner
        :tags='tags'></Banner>
    </div>
</template>

<script>
import Banner from '../components/Banner';
import axios from 'axios';
export default {
    components:{
        Banner
    },
    data() {
        return {
            tags:[]
        }
    },
    methods: {
        getdata(){
            axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=4106710',{
                headers:{
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546287901881195678781"}',
                    "X-Host": "mall.cfg.common-banner"
                }
            }).then(res=>{
                 let ress=res.data;
                if(ress.status===0){
                   this.tags=ress.data;
                }else{
                    alert(res.msg);
                }
            })
        }
    },
    created() {
        this.getdata();
    },
}
</script>
