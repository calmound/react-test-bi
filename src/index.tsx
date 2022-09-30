import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MColumn } from 'moka-bi-charts'
import 'moka-bi-charts/dist/main.css'
// import {Button} from 'sugar-design'
const _config = {
  "code": 1000000,
  "data": {
    isMobile: true,
    "dataSourceId": 1625,
    "dim": [
      {
        "dimVectorsDepth": 0,
        "entityAlias": "e9",
        "entityId": 86,
        "fieldAlias": "x0",
        "fieldId": 4187,
        "fieldType": "string",
        "tableAlias": "e9",
        "tableId": 352,
        "title": "籍贯"
      }
    ],
    "reportBrief": {
      "advancedFeature": {
        "freeze": false,
        "hideNoDataRows": false,
        "referenceLine": [],
        "splitDimension": false,
        "styleConditions": []
      },
      "beShareTo": false,
      "beSubTo": false,
      "confStyle": {
        "conversionTag": false,
        "decimalPlace": 0,
        "graphTheme": {
          "colors": [
            "#5B8FF9",
            "#61DDAA",
            "#65789B",
            "#F6BD16",
            "#7262FD",
            "#78D3F8",
            "#9661BC",
            "#F6903D",
            "#008685",
            "#F08BB4"
          ]
        },
        "label": {
          "hideOverlap": true,
          "show": true,
          "style": {
            "fill": "#ffffff"
          },
          "position": "middle"
        },
        "legend": {
          "show": true
        },
        "linkage": true,
        "showMainKpiName": false,
        "style": {
          "radius": {
            "type": "out",
            "value": 4
          }
        },
        "thousandSeparator": false,
        "xaxis": {
          "line": {
            "show": false
          },
          "grid": {
            "show": true
          },
          "label": {
            "show": true
          },
          "title": {
            "show": false,
            "text": ""
          }
        },
        "yaxis": {
          "line": {
            "show": true
          },
          "grid": {
            "show": false
          },
          "label": {
            "show": true
          },
          "title": {
            "show": false,
            "text": ""
          }
        }
      },
      "createTime": 1637824094000,
      "dataSourceId": 1625,
      "description": "",
      "id": 9282,
      "isCollect": false,
      "modifyTime": 1637824094000,
      "modifyUserId": 410007022,
      "name": "条形百分比",
      "reportType": "percent_bar_chart",
      "sharePermission": true,
      "shared": false,
      "userName": "liuxinyu"
    },
    "series": [
      {
        "dim": "-",
        "id": "0",
        "index": "c_2",
        "mappingDim": "-",
        "name": "候选人",
        "value": 18507
      },
      {
        "dim": "-",
        "id": "1",
        "index": "c_3",
        "mappingDim": "-",
        "name": "面试",
        "value": 420
      },
      {
        "dim": "-",
        "id": "2",
        "index": "c_4",
        "mappingDim": "-",
        "name": "申请",
        "value": 13896
      },
      {
        "dim": "湖北,荆门市",
        "id": "3",
        "index": "c_2",
        "mappingDim": "湖北,荆门市",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "湖北,荆门市",
        "id": "4",
        "index": "c_3",
        "mappingDim": "湖北,荆门市",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "湖北,荆门市",
        "id": "5",
        "index": "c_4",
        "mappingDim": "湖北,荆门市",
        "name": "申请",
        "value": 1
      },
      {
        "dim": "河北,邯郸市",
        "id": "6",
        "index": "c_2",
        "mappingDim": "河北,邯郸市",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "河北,邯郸市",
        "id": "7",
        "index": "c_3",
        "mappingDim": "河北,邯郸市",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "河北,邯郸市",
        "id": "8",
        "index": "c_4",
        "mappingDim": "河北,邯郸市",
        "name": "申请",
        "value": 1
      },
      {
        "dim": "广东,广州市",
        "id": "9",
        "index": "c_2",
        "mappingDim": "广东,广州市",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "广东,广州市",
        "id": "10",
        "index": "c_3",
        "mappingDim": "广东,广州市",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "广东,广州市",
        "id": "11",
        "index": "c_4",
        "mappingDim": "广东,广州市",
        "name": "申请",
        "value": 3
      },
      {
        "dim": "广东",
        "id": "12",
        "index": "c_2",
        "mappingDim": "广东",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "广东",
        "id": "13",
        "index": "c_3",
        "mappingDim": "广东",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "广东",
        "id": "14",
        "index": "c_4",
        "mappingDim": "广东",
        "name": "申请",
        "value": 1
      },
      {
        "dim": "山西,大同市",
        "id": "15",
        "index": "c_2",
        "mappingDim": "山西,大同市",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "山西,大同市",
        "id": "16",
        "index": "c_3",
        "mappingDim": "山西,大同市",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "山西,大同市",
        "id": "17",
        "index": "c_4",
        "mappingDim": "山西,大同市",
        "name": "申请",
        "value": 1
      },
      {
        "dim": "山西,临汾市",
        "id": "18",
        "index": "c_2",
        "mappingDim": "山西,临汾市",
        "name": "候选人",
        "value": 2
      },
      {
        "dim": "山西,临汾市",
        "id": "19",
        "index": "c_3",
        "mappingDim": "山西,临汾市",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "山西,临汾市",
        "id": "20",
        "index": "c_4",
        "mappingDim": "山西,临汾市",
        "name": "申请",
        "value": 2
      },
      {
        "dim": "北京市,北京市,石景山区",
        "id": "21",
        "index": "c_2",
        "mappingDim": "北京市,北京市,石景山区",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "北京市,北京市,石景山区",
        "id": "22",
        "index": "c_3",
        "mappingDim": "北京市,北京市,石景山区",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "北京市,北京市,石景山区",
        "id": "23",
        "index": "c_4",
        "mappingDim": "北京市,北京市,石景山区",
        "name": "申请",
        "value": 2
      },
      {
        "dim": "北京市,北京市,东城区",
        "id": "24",
        "index": "c_2",
        "mappingDim": "北京市,北京市,东城区",
        "name": "候选人",
        "value": 2
      },
      {
        "dim": "北京市,北京市,东城区",
        "id": "25",
        "index": "c_3",
        "mappingDim": "北京市,北京市,东城区",
        "name": "面试",
        "value": 1
      },
      {
        "dim": "北京市,北京市,东城区",
        "id": "26",
        "index": "c_4",
        "mappingDim": "北京市,北京市,东城区",
        "name": "申请",
        "value": 2
      },
      {
        "dim": "北京市,北京市",
        "id": "27",
        "index": "c_2",
        "mappingDim": "北京市,北京市",
        "name": "候选人",
        "value": 3
      },
      {
        "dim": "北京市,北京市",
        "id": "28",
        "index": "c_3",
        "mappingDim": "北京市,北京市",
        "name": "面试",
        "value": 4
      },
      {
        "dim": "北京市,北京市",
        "id": "29",
        "index": "c_4",
        "mappingDim": "北京市,北京市",
        "name": "申请",
        "value": 5
      },
      {
        "dim": "上海市,上海市,普陀区",
        "id": "30",
        "index": "c_2",
        "mappingDim": "上海市,上海市,普陀区",
        "name": "候选人",
        "value": 1
      },
      {
        "dim": "上海市,上海市,普陀区",
        "id": "31",
        "index": "c_3",
        "mappingDim": "上海市,上海市,普陀区",
        "name": "面试",
        "value": 0
      },
      {
        "dim": "上海市,上海市,普陀区",
        "id": "32",
        "index": "c_4",
        "mappingDim": "上海市,上海市,普陀区",
        "name": "申请",
        "value": 1
      },
      {
        "dim": "上海市,上海市,徐汇区",
        "id": "33",
        "index": "c_2",
        "mappingDim": "上海市,上海市,徐汇区",
        "name": "候选人",
        "value": 726
      },
      {
        "dim": "上海市,上海市,徐汇区",
        "id": "34",
        "index": "c_3",
        "mappingDim": "上海市,上海市,徐汇区",
        "name": "面试",
        "value": 69
      },
      {
        "dim": "上海市,上海市,徐汇区",
        "id": "35",
        "index": "c_4",
        "mappingDim": "上海市,上海市,徐汇区",
        "name": "申请",
        "value": 725
      }
    ]
  },
  "msg": "成功",
  "success": false
}

class App extends Component {
  render() {
    return (
      <div>
        <div>my-pro11--ject1!!!!!</div>
        <MColumn showLinkHighlight={true} {..._config} />
        {/* <Button>123</Button> */}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));