<template>
  <div >
  	<div class = "c"></div>
    <text class="title" @click="update" >{{date}}</text>
      <selectvue class="list-mask" v-if="isselectaddress" :proviceList="proviceList" :cityListMap="cityListMap" :disListMap="disListMap"  @haveselectedaddress="selectedaddress"></selectvue>
  </div>

</template>

<style>
  .title { font-size: 48px; }
  .list-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    z-index: 10;
    background-color: black;
    opacity: 0.65;
  } 
  .c {
  	width: 750px;
  	height: 100px;
  }
</style>

<script>
  import selectvue from './select_address.vue'
  import './config'

  export default {
    components:{selectvue},
    methods: {
      update(e) {
        this.isselectaddress = true
      },
      
      selectedaddress(evtValue){
        this.isselectaddress = false
        if(evtValue === ''){
          return
        }
        this.date = evtValue
        //  weex.requireModule('modal').toast({
        //   message: evtValue,
        //   duration: 0.8
        // })       
      }
    },
    data(){
      return{
        proviceList:[],
        cityListMap:{},
        disListMap:{},
        isselectaddress: false,
        date:'点击选择地址'
      }
    },
    mounted(){
      console.error(global.proviceList)
      this.proviceList = global.proviceList
      this.cityListMap = global.cityListMap
      this.disListMap = global.disListMap            
    }
  }
</script>
