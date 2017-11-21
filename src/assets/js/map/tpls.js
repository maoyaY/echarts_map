// /*定义echarts图形配置*/
// import china2 from 'china2'
import newData from './china2'
var tpls = {
  chinaMap: {
    geo: {
      map: 'china2',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#ffffff'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      {
        name: 'china',
        type: 'map',
        mapType: 'china2',
        coordinateSystem: 'geo',
        roam: false,
        label: {
          normal: {
            show: false,
            offset: [0, 0]
          },
          emphasis: {
            show: false
          }
        },
        data: newData
      }
    ]
  },
  chinaMap1: {
    series: [
      {
        name: 'china',
        type: 'map',
        mapType: 'region',
        coordinateSystem: 'geo',
        roam: false,
        zoom: 0.4,
        label: {
          normal: {
            show: false,
            offset: [0, 0]
          },
          emphasis: {
            show: false
          }
        },
        data: []
      }
    ]
  },
  chinaMap2: {
    geo: {
      map: '',
      type: 'map',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      selectedMode: 'single',
      roam: true,
      // selectedMode : 'single',
      itemStyle: {
        normal: {
          areaColor: '#FFF8EB',
          borderColor: '#ffffff'
        },
        emphasis: {
          areaColor: '#f4e925'
        }
      }
    }
  }
}
export default tpls;
