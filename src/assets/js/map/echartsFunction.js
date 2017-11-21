import option from './echartsOption'
import tpls from './tpls'
import echarts from 'echarts'
import $ from 'jquery'

var m_fun = {
  chinaMap() {

  },
  regionMap(sheng) {
    // /*根据点击事件传递过来的省份名称，重组整个地图序列*/
    var regionNames = [];
    var regionColor = "";
    for (var x = 0; x < option.region.length; x++) {
      for (var y = 0; y < option.region[x].name.length; y++) {
        if (option.region[x].name[y] == sheng) {
          regionNames = option.region[x].name;
          regionColor = option.region[x].color;
          break;
        }
      }
    }
    // /*克隆地图json数据并修改新克隆数据用以绘图*/
    var regionData = {};
    $.extend(regionData, option.chinaData);
    regionData.features = [];
    // /*定义当前地区省份数据用以填充地图*/
    var regionMapData = []
    for (var a = 0; a < option.chinaData.features.length; a++) {
      var sheng1 = option.chinaData.features[a].properties["name"];
      for (var b = 0; b < regionNames.length; b++) {
        if (sheng1 == regionNames[b]) {
          regionData.features.push(option.chinaData.features[a]);
          regionMapData.push({
            name: sheng1,
            itemStyle: {
              normal: {
                areaColor: regionColor,
                borderColor: '#ffffff'
              },
              emphasis: {
                areaColor: regionColor
              }
            },
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false
              }
            }
          });
          break;
        }
      }
    }
    echarts.registerMap('region', regionData);
    tpls.chinaMap1.series[0].data = regionMapData;
  },
  cityMap(sheng, city) {
    var regionNames = [];
    var regionColor = "";
    for (var x = 0; x < option.region.length; x++) {
      for (var y = 0; y < option.region[x].name.length; y++) {
        if (option.region[x].name[y] == sheng) {
          regionNames = option.region[x].name;
          regionColor = option.region[x].color;
          break;
        }
      }
    }
    // /*克隆地图json数据并修改新克隆数据用以绘图*/
    var cityData = {};
    $.extend(cityData, option.chinaData.features);
    cityData.features = [];

    // // /*定义当前地区省份数据用以填充地图*/
    // var cityMapData = []
    //
    // for (var a = 0; a < _data.length; a++) {
    //   // var sheng1 = option.chinaData.features[a].properties["name"];
    //   // for(var b=0;b<regionNames.length;b++){
    //   //   if(sheng == regionNames[b]){
    //   //     cityData.features.push(option.chinaData.features[a]);
    //   cityMapData.push({
    //     name: city,
    //     itemStyle: {
    //       normal: {
    //         areaColor: regionColor
    //       },
    //       emphasis: {
    //         areaColor: regionColor
    //       }
    //     },
    //     label: {
    //       normal: {
    //         show: true,
    //       },
    //       emphasis: {
    //         show: false
    //       }
    //     }
    //   });
    //   //     break;
    //   //   }
    //   // }
    // }
    // echarts.registerMap();
    // tpls.chinaMap2.series[0].data = cityMapData;
    tpls.chinaMap2.geo.map = city;
    tpls.chinaMap2.geo.itemStyle = {
      normal: {
        areaColor: regionColor,
        borderColor: '#ffffff'
      },
      emphasis: {
        areaColor: '#f4e925'
      }
    }
  }
}
export  default m_fun;


