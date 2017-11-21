<template>
    <div class="map_box">
      <div class="chart" id="map_region"></div>
      <div class="chart" id="map_province"></div>
      <div class="chart" id="map_city"></div>
    </div>
</template>
<script type="text/ecmascript-6">
  import '../assets/js/map/maps_city/index';
  import $ from 'jquery';
  var echarts = require('echarts');
  import tpls from '../assets/js/map/tpls';
  import option from '../assets/js/map/echartsOption';
  import m_fun from '../assets/js/map/echartsFunction'
export default{
  data() {
    return {

    }
  },
  props: {

  },
  mounted() {
    this.chinaMap()
  },
  methods: {
    chinaMap(){
      var chinaMap = document.getElementById("map_region");
      chinaMap = echarts.init(chinaMap);

      chinaMap.setOption(tpls.chinaMap,true);
      /*根据地区数量，循环生成dom节点并插入到根据地图经纬度转换过来的平面坐标上*/
      for(var i=0;i<option.region.length;i++){
        $("#map_region").append("<span style='cursor:pointer;position:absolute;left:"+chinaMap.convertToPixel({geoIndex: 0}, option.region[i].position)[0]+"px;top:"+chinaMap.convertToPixel({geoIndex: 0}, option.region[i].position)[1]+"px'>"+option.region[i].region+"</span>");
      }
      /*绑定点击事件*/
      var _this =this;
      var regionNames = [];

      chinaMap.on('click', function (params) {
        /*
         * 下面代码为解决echarts3.0华南地图几省单独绘画时，莫名放大
         * 的bug而写，更新echarts版本后请注意查证是否还有此bug，否则
         * 会造成不良显示效果*/
        if(params.name =="广东"||params.name =="广西"||params.name =="海南"||params.name =="香港"||params.name =="澳门"){
          tpls.chinaMap1.series[0].zoom = 0.4;
        }else if(params.name =="河南"||params.name =="湖北"||params.name =="湖南"){
          tpls.chinaMap1.series[0].zoom = 0.5;
        } else{
          tpls.chinaMap1.series[0].zoom = 1;
        }
        for(var x=0;x<option.region.length;x++){
          for(var y=0;y<option.region[x].name.length;y++){
            if(option.region[x].name[y]==params.name){
              regionNames = option.region[x].value;
              break;
            }
          }
        }
        /*调用地区绘画*/
          _this.regionMap(params.name);
          _this.$emit('regionclick',params)
      });
    },
    regionMap(sheng){
      /*根据点击事件传递过来的省份名称，重组整个地图序列*/
      var _this = this;
      m_fun.regionMap(sheng);

      var arr = _this.province_data;
      var chinaMap1 = document.getElementById("map_province");
      chinaMap1 = echarts.init(chinaMap1);

      chinaMap1.setOption(tpls.chinaMap1,true);
      chinaMap1.on('click', function (params) {
        _this.cityMap(params.name,params.data.itemStyle.normal.areaColor);
        _this.$emit('provinceclick',params)
      });

    },
    cityMap(sheng,city){//点击显示城市
        var _this =this;
        m_fun.cityMap(sheng,city);
        var chinaMap2 = document.getElementById("map_city");
        chinaMap2 = echarts.init(chinaMap2);
        chinaMap2.setOption(tpls.chinaMap2,true);
        chinaMap2.on('click', function (params) {
          _this.$emit('cityclick',params)
        });

    },
  }
}
</script>
<style rel="stylesheet/less">
  .map_box{
    clear: both;
  }
  .chart{
    width: 500px;
    height: 400px;
    float: left;
  }

</style>
