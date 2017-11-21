// import echarts from 'echarts'
import option from './echartsOption'
var echarts = require('echarts')


var newData = [];
let region  = option.region;
let chinaData = option.chinaData;

function setMap(region){
	for(var x=0;x<region.length;x++){
		for(var y=0;y<region[x].name.length;y++){
			newData.push({
            	name:region[x].name[y],
           		itemStyle:{
           			normal:{
           				areaColor:region[x].color,
                  borderColor: '#ffffff'
           			},
           			emphasis:{
           				areaColor:region[x].color
           			}
           		},
           		label: {
	                normal: {
	                    show: false,
	                },
	                emphasis: {
	                    show: false
	                }
	            }
            })
		}
	}
}

setMap(region)
echarts.registerMap('china2',chinaData);

export default newData;
