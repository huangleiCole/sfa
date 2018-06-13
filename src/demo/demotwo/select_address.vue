<template>
  <div class="stories-view" append="tree" :style="{height:`${totalheight-180}px`}">
      <div class="list-mask" :style="{height:`${totalheight-80}px`}"  @click="unselectedaddress"></div>
      <text class="addbutton basebutton" @click="selectedaddress" >确定</text>    
      <div class="select-item"  >
        <list class="listitem">
          <cell v-for="(item, index) in proviceList" append="tree" @click="selectprovince(index)">
            <text class="cityitem" :style="{color:(index === selectindex)?'#00BBE4':'gray'}"> {{item.name}} </text>
          </cell>
        </list>    
        <list class="listitem">
          <cell v-for="(item ,index) in cityList" append="tree" @click="selectcity(index)">
            <text class="cityitem" :style="{color:(index === selectcityindex)?'#00BBE4':'gray'}"> {{item.name}} </text>
          </cell>
        </list>
        <list class="listitem">
          <cell v-for="(item, index) in disList" append="tree" @click="selectdist(index)">
            <text class="cityitem" :style="{color:(index === selectdisindex)?'#00BBE4':'gray'}"> {{item.name}} </text>
          </cell>
        </list>
    </div>
  </div>
</template>

<style>
  .stories-view {
    min-height:250px;
    overflow-y:auto;
  }
  .list-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    z-index: 10;
    background-color: black;
    opacity: 0.65;
  }
  .select-item{
    flex-direction: row;
    flex-wrap: nowrap;    
    position: absolute;    
    background-color: white;
    align-items: center;
    justify-content: center center;
    bottom: 80px;
    height: 600px;
    width: 750px;
    z-index:101;
    opacity: 1;
  }  
   .listitem{
     max-height: 500px;
     margin-top: 20px;
     margin-bottom: 20px;
     width: 250px;
     max-height: 500px;
     flex-grow:1;   
  } 
  .cityitem{
    color: gray;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 32px;
  }  
  .addbutton{
    bottom: 0px;
    width:750px;
    padding-top: 18px;    
    text-align: center;     
  }  
  .basebutton{
    color:white;
    background-color: #00BBE4; 
    position: absolute;
    font-size:32px; 
    height:80px;
  }  
</style>

<script>
  import './config'
  export default { 
    props: {
      proviceList: {
        type: Array,
        required: true
      },
      cityListMap: {
        type: Object,
        required: true
      },
      disListMap: {
        type: Object,
        required: true
      }
    },    
    data() {
      return{
        selectindex:0,
        selectcityindex:0,
        selectdisindex:0,
        cityList:[],//当前市列表
        disList:[],  // 当前区列表
        selectedprovince:{},
        selectedcity:{},
        selecteddist:{},
      }
    },
    methods: {
      selectedaddress(){
        //  this.isselectaddress = false  //关闭选择框           
         this.selectplace =  proviceList[this.selectindex].name+'  '+ this.cityList[this.selectcityindex].name +'  ' + this.disList[this.selectdisindex].name      
         this.$emit('haveselectedaddress',this.selectplace);                  
      },
      unselectedaddress(){
         this.$emit('haveselectedaddress','');                  
      },      
      selectprovince(index){
        this.selectedprovince = this.proviceList[index]
        //显示 市和区
        this.cityList = this.cityListMap[this.proviceList[index].recordId] 
        this.disList = this.disListMap[this.cityList[0].recordId]   
        this.selectindex = index;     
      },
      selectcity(index){
        this.selectedcity = this.cityList[index]
        //显示区
        this.disList = this.disListMap[this.cityList[index].recordId]   
        this.selectcityindex = index       
      },
      selectdist(index){
        this.selecteddist = this.disList[index]
        this.selectdisindex = index
      }   
    },
    computed: {
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        console.error('height:'+height)
        return height
      }
    },
    created(){
      this.cityList = cityListMap[proviceList[this.selectindex].recordId]
      this.disList = disListMap[this.cityList[this.selectcityindex].recordId]
    }
  }
</script>
