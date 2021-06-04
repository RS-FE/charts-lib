/*
 * @Description: {地图图表} 
 * @Author: zhuoyan 
 * @Date: 2019-06-17 10:15:06 
 */
$(function () {
    // 图标尺寸适配
    var getSize = function (v) {
        // var fz = $('html').css('fontSize').replace(/px/, '');
        var fz = 50;
        return v * fz;
    }

    // map-1
    void (function () {
        // 地图
        var renderMap = function (count) {
            var mychart = echarts.init(document.getElementById('map-1'));
            var uploadedDataURL = "./assets/json/map1.json"; //浙江省
            $.get(uploadedDataURL, function (geoJson) {
                echarts.registerMap("兰溪", geoJson); //注册地图
                var geoCoordMap = {
                    "水亭乡": [119.2734, 29.1587],
                    "游埠镇": [119.3524, 29.1294],
                    "诸葛镇": [119.2863, 29.2445],
                    "永昌街道": [119.3297, 29.2362],
                    "赤溪街道": [119.3845, 29.1960],
                    "黄店镇": [119.3956, 29.3538],
                    "女埠街道": [119.4832, 29.3003],
                    "兰江街道": [119.4135, 29.2413],
                    "上华街道": [119.4719, 29.1550],
                    "灵洞乡": [119.5426, 29.1829],
                    "云山街道": [119.5155, 29.2476],
                    "香溪镇": [119.5518, 29.3012],
                    "马涧镇": [119.6363, 29.3009],
                    "柏社乡": [119.6775, 29.3922],
                    "梅江镇": [119.7458, 29.3276],
                    "横溪镇": [119.8560, 29.3668]
                };

                var data = [{
                    name: "水亭乡",
                    value: 242
                },
                {
                    name: "游埠镇",
                    value: 103
                },
                {
                    name: "诸葛镇",
                    value: 154
                },
                {
                    name: "永昌街道",
                    value: 157
                },
                {
                    name: "赤溪街道",
                    value: 159
                },
                {
                    name: "黄店镇",
                    value: 220
                },
                {
                    name: "女埠街道",
                    value: 100
                },
                {
                    name: "兰江街道",
                    value: 153
                },
                {
                    name: "上华街道",
                    value: 54
                },
                {
                    name: "灵洞乡",
                    value: 157
                },
                {
                    name: "云山街道",
                    value: 80
                },
                {
                    name: "香溪镇",
                    value: 65
                },
                {
                    name: "马涧镇",
                    value: 98
                },
                {
                    name: "柏社乡",
                    value: 101
                },
                {
                    name: "梅江镇",
                    value: 157
                },
                {
                    name: "横溪镇",
                    value: 127
                }
                ]
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value),
                            });
                        }
                    }
                    return res;
                };

                var mapOption = {
                    visualMap: {
                        show: true,
                        min: 0,
                        max: 250,
                        right: '2%',
                        bottom: '2%',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        textStyle: {
                            color: '#fff'
                        },
                        align: 'left',
                        inRange: {
                            color: ['#0084ff', '#b3edff']
                        }
                    },
                    geo: {
                        map: '兰溪',
                        label: {
                            normal: {
                                show: false,
                                color: '#000'
                            },
                            emphasis: {
                                color: '#000'
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#83e5ff',
                                borderColor: '#dadada',
                                borderWidth: 3
                            },
                            emphasis: {
                                areaColor: '#00b1e8',
                                borderColor: '#dadada',
                                borderWidth: 3
                            }
                        },
                        left: '5%',
                        right: '5%',
                        top: '20%',
                        bottom: '8%',
                        background: '#f30',
                    },
                    series: [{
                        type: 'map',
                        map: '兰溪',
                        geoIndex: 0,
                        aspectScale: 0.675, //长宽比
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        animation: false,
                    },
                    {
                        name: '点A',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'circle',
                        symbolSize: 1,
                        hoverAnimation: true,
                        zlevel: 6,
                        label: {
                            normal: {
                                formatter: function (para) {
                                    return para.name;
                                },
                                position: 'bottom',
                                offset: [0, -10],
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#fff',
                                    lineHeight: 20
                                }
                            },
                        },
                    }, {
                        name: '点B',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'image://./assets/img/map-label.png',
                        symbolSize: 28,
                        symbolOffset: [0, -20],
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: function (para) {
                                    return para.value[2];
                                },
                                position: 'top',
                                offset: [0, 25],
                                show: true,
                                textStyle: {
                                    color: '#d42f2f',
                                    lineHeight: 24
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        zlevel: 7,
                    }
                    ]
                }
                data = data.map(function (item) {
                    return {
                        name: item.name,
                        value: item.value + parseFloat(count)
                    }
                });
                mapOption.series[0].data = convertData(data);
                mapOption.series[1].data = convertData(data);
                mapOption.series[2].data = convertData(data);
                mychart.setOption(mapOption, true);
            })
        };
        renderMap(0);
    })();

    // map-2
    var renderMap = function (count) {
        var mychart = echarts.init(document.getElementById('map-2'));
        var uploadedDataURL = "./assets/json/data-1543561856764-h-LwAMlm2.json"; //浙江省
        $.get(uploadedDataURL, function (geoJson) {
            echarts.registerMap("浙江", geoJson); //注册地图
            var geoCoordMap = {
                "杭州市": [119.47, 29.90],
                "宁波市": [121.539029, 29.736103],
                "温州市": [120.61, 27.85],
                "绍兴市": [120.701386, 29.74081],
                "湖州市": [119.92, 30.70],
                "嘉兴市": [120.78, 30.58],
                "金华市": [119.94, 29.10],
                "衢州市": [118.80, 28.84],
                "舟山市": [122.10, 30.07],
                "台州市": [121.08, 28.78],
                "丽水市": [119.50, 28.07]
            };
            var data = [{
                name: "杭州市",
                value: 252
            },
            {
                name: "宁波市",
                value: 103
            },
            {
                name: "温州市",
                value: 154
            },
            {
                name: "绍兴市",
                value: 157
            },
            {
                name: "湖州市",
                value: 159
            },
            {
                name: "嘉兴市",
                value: 160
            },
            {
                name: "金华市",
                value: 100
            },
            {
                name: "衢州市",
                value: 153
            },
            {
                name: "舟山市",
                value: 54
            },
            {
                name: "台州市",
                value: 157
            },
            {
                name: "丽水市",
                value: 59
            }
            ]
            var data2 = [{
                name: "杭州市",
                value: 250
            },
            {
                name: "宁波市",
                value: 100
            },
            {
                name: "温州市",
                value: 150
            },
            {
                name: "绍兴市",
                value: 150
            },
            {
                name: "湖州市",
                value: 150
            },
            {
                name: "嘉兴市",
                value: 160
            },
            {
                name: "金华市",
                value: 100
            },
            {
                name: "衢州市",
                value: 150
            },
            {
                name: "舟山市",
                value: 50
            },
            {
                name: "台州市",
                value: 150
            },
            {
                name: "丽水市",
                value: 50
            }
            ]
            var data3 = [{
                name: "杭州市",
                value: 260
            },
            {
                name: "宁波市",
                value: 110
            },
            {
                name: "温州市",
                value: 160
            },
            {
                name: "绍兴市",
                value: 160
            },
            {
                name: "湖州市",
                value: 160
            },
            {
                name: "嘉兴市",
                value: 160
            },
            {
                name: "金华市",
                value: 110
            },
            {
                name: "衢州市",
                value: 160
            },
            {
                name: "舟山市",
                value: 60
            },
            {
                name: "台州市",
                value: 160
            },
            {
                name: "丽水市",
                value: 60
            }
            ]
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };
            var zjMapOption = {
                visualMap: {
                    show: true,
                    min: 0,
                    max: 300,
                    right: '5%',
                    bottom: '5%',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['#e7eef8', '#8badf4'] // 蓝绿
                    }
                },
                legend: {
                    data: [{
                        name: '一类事项',
                        icon: 'image://./assets/img/data-icon11.png'
                    },
                    {
                        name: '二类事项',
                        icon: 'image://./assets/img/data-icon22.png'
                    },
                    {
                        name: '三类事项',
                        icon: 'image://./assets/img/data-icon33.png'
                    }
                    ],
                    orient: 'vertical',
                    bottom: '5%',
                    left: '5%',
                    itemWidth: 20,
                    itemHeight: 8,
                    zlevel: 4
                },
                geo: {
                    map: '浙江',
                    label: {
                        normal: {
                            show: true,
                            color: '#000'
                        },
                        emphasis: {
                            color: '#000'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fb7075',
                            borderColor: '#dadada',
                            borderWidth: 2
                        },
                        emphasis: {
                            areaColor: '#fb7075',
                            borderColor: '#dadada',
                            borderWidth: 2
                        }
                    },
                    left: '10%',
                    right: '10%',
                    top: '15%',
                    bottom: '5%',
                },
                series: [{
                    type: 'map',
                    map: '浙江',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'image://./assets/img/map-point.png',
                    symbolSize: 10,
                    hoverAnimation: true,
                    zlevel: 6,
                    data: convertData(data),
                }, {
                    name: '一类事项',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'image://./assets/img/map-label.png',
                    symbolSize: 28,
                    symbolOffset: [-30, -40],
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: function (para) {
                                return para.value[2];
                            },
                            position: 'top',
                            offset: [0, 20],
                            show: true,
                            textStyle: {
                                color: '#d42f2f',
                                lineHeight: 24
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    zlevel: 7,
                    data: convertData(data),
                }, {
                    name: '二类事项',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'image://./assets/img/map-label.png',
                    symbolSize: 28,
                    symbolOffset: [0, -40],
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: function (para) {
                                return para.value[2];
                            },
                            position: 'top',
                            offset: [0, 20],
                            show: true,
                            textStyle: {
                                color: '#eba600',
                                lineHeight: 24
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    zlevel: 7,
                    data: convertData(data2),
                }, {
                    name: '三类事项',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'image://./assets/img/map-label.png',
                    symbolSize: 28,
                    symbolOffset: [30, -40],
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: function (para) {
                                return para.value[2];
                            },
                            position: 'top',
                            offset: [0, 20],
                            show: true,
                            textStyle: {
                                color: '#57a4dc',
                                lineHeight: 24
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    zlevel: 7,
                    data: convertData(data3),
                }
                ]
            }
            data = data.map(function (item) {
                return {
                    name: item.name,
                    value: item.value + parseFloat(count)
                }
            });
            zjMapOption.series[0].data = data;
            zjMapOption.series[2].data = convertData(data);
            mychart.setOption(zjMapOption, true);
        })
    };
    renderMap(0);

    // map-3
    void (function () {
        var mychart = echarts.init(document.getElementById('map-3'));
        var uploadedDataURL = "/assets/json/data-1543561856764-h-LwAMlm2.json"; //浙江省
        $.get(uploadedDataURL, function (geoJson) {
            echarts.registerMap("浙江", geoJson); //注册地图
            var geoCoordMap = {
                "杭州市": [119.47, 29.90],
                "宁波市": [121.539029, 29.736103],
                "温州市": [120.61, 27.85],
                "绍兴市": [120.701386, 29.74081],
                "湖州市": [119.92, 30.70],
                "嘉兴市": [120.78, 30.58],
                "金华市": [119.94, 29.10],
                "衢州市": [118.80, 28.84],
                "舟山市": [122.10, 30.07],
                "台州市": [121.08, 28.78],
                "丽水市": [119.50, 28.07]
            };

            var data = [{
                name: "杭州市",
                value: 252
            },
            {
                name: "宁波市",
                value: 103
            },
            {
                name: "温州市",
                value: 154
            },
            {
                name: "绍兴市",
                value: 157
            },
            {
                name: "湖州市",
                value: 159
            },
            {
                name: "嘉兴市",
                value: 160
            },
            {
                name: "金华市",
                value: 152
            },
            {
                name: "衢州市",
                value: 153
            },
            {
                name: "舟山市",
                value: 154
            },
            {
                name: "台州市",
                value: 157
            },
            {
                name: "丽水市",
                value: 159
            }
            ]
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };
            var zjMapOption = {
                geo: {
                    map: '浙江',
                    label: {
                        normal: {
                            show: true,
                            color: '#fff'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#031644',
                            borderColor: '#01afc2',
                            borderWidth: 2
                        },
                        emphasis: {
                            areaColor: '#0389a5',
                            borderColor: '#01afc2',
                            borderWidth: 2
                        }
                    },
                    x: 'center',
                    y: 'center',
                    top: 0,
                    bottom: 0,
                },
                series: [{
                    name: '省市数据',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'image://assets/img/map-point.png',
                    symbolSize: function (val) {
                        return val[2] / 3;
                    },
                    symbolOffset: [0, 10],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 12,
                            },
                            formatter: function (para) {
                                var v = para.value[2];
                                return v;
                            }
                        },
                    },
                    zlevel: 6,
                    data: convertData(data),
                }]
            }
            mychart.setOption(zjMapOption, true);
        })
    })();

    // map-4
    void (function () {
        var mychart = echarts.init(document.getElementById('map-4'));
        var uploadedDataURL = "./assets/json/data-1543561856764-h-LwAMlm2.json"; //浙江省
        $.get(uploadedDataURL, function (geoJson) {
            echarts.registerMap("浙江", geoJson); //注册地图
            var geoCoordMap = {
                "杭州市": [119.47, 29.90],
                "宁波市": [121.539029, 29.736103],
                "温州市": [120.61, 27.85],
                "绍兴市": [120.701386, 29.74081],
                "湖州市": [119.92, 30.70],
                "嘉兴市": [120.78, 30.58],
                "金华市": [119.94, 29.10],
                "衢州市": [118.80, 28.84],
                "舟山市": [122.10, 30.07],
                "台州市": [121.08, 28.78],
                "丽水市": [119.50, 28.07]
            };

            var data = [{
                name: "杭州市",
                value: 252
            },
            {
                name: "宁波市",
                value: 103
            },
            {
                name: "温州市",
                value: 154
            },
            {
                name: "绍兴市",
                value: 157
            },
            {
                name: "湖州市",
                value: 159
            },
            {
                name: "嘉兴市",
                value: 160
            },
            {
                name: "金华市",
                value: 152
            },
            {
                name: "衢州市",
                value: 153
            },
            {
                name: "舟山市",
                value: 154
            },
            {
                name: "台州市",
                value: 157
            },
            {
                name: "丽水市",
                value: 159
            }
            ]
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };
            var zjMapOption = {
                geo: {
                    map: '浙江',
                    label: {
                        normal: {
                            show: true,
                            color: '#fff'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, //// 0% 处的颜色
                                color: 'rgb(26,92,142)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(7,31,71)'
                            }
                            ], false),
                            borderColor: '#01afc2',
                            borderWidth: 2
                        },
                        emphasis: {
                            areaColor: '#0389a5',
                            borderColor: '#01afc2',
                            borderWidth: 2
                        }
                    },
                    left: '5%',
                    right: '5%',
                    top: '5%',
                    bottom: '5%',
                },
                series: [{
                    name: '省市数据',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'circle',
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    zlevel: 6,
                    itemStyle: {
                        normal: {
                            color: 'rgba(244,198,5,1)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(244,198,5,1)'
                        }
                    },
                    data: convertData(data),
                }]
            }
            mychart.setOption(zjMapOption, true);
        })
    })();

    // map-5
    void (function () {
        var mychart = echarts.init(document.getElementById('map-5'));
        var uploadedDataURL = "./assets/json/data-1529908086273-ByRuoWAW7.json"; //杭州市
        $.get(uploadedDataURL, function (geoJson) {
            echarts.registerMap("hangzhou", geoJson); //注册地图
            var geoCoordMap = {
                '上城区': [120.169312, 30.282404],
                '下城区': [120.221406, 30.349037],
                '临安区': [119.3247344, 30.233873],
                '余杭区': [120.050401, 30.399045],
                '富阳区': [119.960076, 29.908692],
                '建德市': [119.281231, 29.474759],
                '拱墅区': [120.151406, 30.361037],
                '桐庐县': [119.691467, 29.75299],
                '江干区': [120.370551, 30.292222],
                '淳安县': [119.004734, 29.608886],
                '滨江区': [120.201623, 30.169463],
                '萧山区': [120.304253, 30.183806],
                '西湖区': [120.088194, 30.239463],
            }
            var moveLine = {
                'normal': [{
                    "fromName:": "省委",
                    "toName": "上城区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.169312, 30.282404]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "下城区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.221406, 30.349037]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "临安区",
                    "coords": [
                        [120.285001, 30.317012],
                        [119.3247344, 30.233873]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "余杭区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.050401, 30.399045]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "富阳区",
                    "coords": [
                        [120.285001, 30.317012],
                        [119.960076, 29.908692]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "建德市",
                    "coords": [
                        [120.285001, 30.317012],
                        [119.281231, 29.474759]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "拱墅区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.151406, 30.361037]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "桐庐县",
                    "coords": [
                        [120.285001, 30.317012],
                        [119.691467, 29.75299]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "江干区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.370551, 30.292222]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "淳安县",
                    "coords": [
                        [120.285001, 30.317012],
                        [119.004734, 29.608886]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "滨江区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.201623, 30.169463]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "萧山区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.304253, 30.183806]
                    ]
                },
                {
                    "fromName:": "省委",
                    "toName": "西湖区",
                    "coords": [
                        [120.285001, 30.317012],
                        [120.088194, 30.239463]
                    ]
                }
                ],
                'warning': []
            };
            var data = [{
                name: "上城区",
                value: 252
            },
            {
                name: "下城区",
                value: 103
            },
            {
                name: "临安区",
                value: 154
            },
            {
                name: "余杭区",
                value: 157
            },
            {
                name: "富阳区",
                value: 159
            },
            {
                name: "建德市",
                value: 160
            },
            {
                name: "拱墅区",
                value: 152
            },
            {
                name: "桐庐县",
                value: 153
            },
            {
                name: "江干区",
                value: 154
            },
            {
                name: "淳安县",
                value: 157
            },
            {
                name: "滨江区",
                value: 159
            },
            {
                name: "萧山区",
                value: 159
            },
            {
                name: "西湖区",
                value: 159
            }
            ]
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };
            var zjMapOption = {
                geo: {
                    map: 'hangzhou',
                    label: {
                        show: false,
                        position: [50, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        areaColor: 'rgba(3,20,64,0.8)',
                        borderColor: 'rgba(25,218,237,0.5)',
                        borderWidth: 2
                    },
                    emphasis: {
                        label: {
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            areaColor: 'rgba(25,218,237,0.8)',
                            borderColor: 'rgba(25,218,237,0.5)',
                            borderWidth: 2
                        }
                    },
                    x: 'center',
                    y: 'center',
                    top: 15,
                    left: '8%',
                    right: '8%',
                    bottom: 15,
                },
                series: [{
                    name: '区级',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0)),
                    symbol: 'circle',
                    symbolSize: 8,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (params) {
                                return '{a|' + params.data.name + '}\n{b|0}';
                            },
                            offset: [0, 60],
                            textStyle: {
                                rich: {
                                    a: {
                                        lineHeight: 20,
                                        fontSize: 10,
                                        color: 'rgba(244,198,5,1)'
                                    },
                                    b: {
                                        lineHeight: 24,
                                        fontSize: 1,
                                        color: 'rgba(244,198,5,1)',
                                        align: 'center',
                                    }
                                }
                            },
                            position: 'top',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(244,198,5,1)',
                            shadowBlur: 5,
                            shadowColor: 'rgba(244,198,5,1)'
                        }
                    },
                    zlevel: 2
                },
                {
                    name: '黄色线',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 1,
                    large: true,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.1,
                        symbol: 'triangle', //标记类型
                        symbolSize: 8,
                    },
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(244,198,5,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(244,198,5,1)'
                            }], false),
                            width: 2,
                            opacity: 1.0,
                            curveness: -0.15
                        }
                    },
                    data: moveLine.normal,
                    animationDurationUpdate: 0
                }
                ]
            }
            mychart.setOption(zjMapOption, true);
            setInterval(function () {
                for (var i = 0; i < moveLine.normal.length; i++) {
                    moveLine.normal[i].coords.reverse();
                }
                if (zjMapOption.series[1].lineStyle.normal.curveness == '0.15') {
                    zjMapOption.series[1].lineStyle.normal.curveness = -0.15;
                } else {
                    zjMapOption.series[1].lineStyle.normal.curveness = 0.15;
                }
                zjMapOption.series[1].data = moveLine.normal;
                mychart.setOption(zjMapOption, true);
            }, 6000);
        })
    })();

    // map-6
    void (function () {
        $.getJSON("./assets/json/map6.json", function (data, textStatus, jqXHR) {
            var data = data;
            var mychart = echarts.init(document.getElementById('map-6'));
            var app = {};
            var option = null;
            var $imgs = data;
            var geoCoordMap = {
                '海门': [121.15, 31.89],
                '鄂尔多斯': [109.781327, 39.608266],
                '招远': [120.38, 37.35],
                '舟山': [122.207216, 29.985295],
                '齐齐哈尔': [123.97, 47.33],
                '盐城': [120.13, 33.38],
                '赤峰': [118.87, 42.28],
                '青岛': [120.33, 36.07],
                '乳山': [121.52, 36.89],
                '金昌': [102.188043, 38.520089],
                '泉州': [118.58, 24.93],
                '莱西': [120.53, 36.86],
                '日照': [119.46, 35.42],
                '胶南': [119.97, 35.88],
                '南通': [121.05, 32.08],
                '拉萨': [91.11, 29.97],
                '云浮': [112.02, 22.93],
                '梅州': [116.1, 24.55],
                '文登': [122.05, 37.2],
                '上海': [121.48, 31.22],
                '攀枝花': [101.718637, 26.582347],
                '威海': [122.1, 37.5],
                '承德': [117.93, 40.97],
                '厦门': [118.1, 24.46],
                '汕尾': [115.375279, 22.786211],
                '潮州': [116.63, 23.68],
                '丹东': [124.37, 40.13],
                '太仓': [121.1, 31.45],
                '曲靖': [103.79, 25.51],
                '烟台': [121.39, 37.52],
                '福州': [119.3, 26.08],
                '瓦房店': [121.979603, 39.627114],
                '即墨': [120.45, 36.38],
                '抚顺': [123.97, 41.97],
                '玉溪': [102.52, 24.35],
                '张家口': [114.87, 40.82],
                '阳泉': [113.57, 37.85],
                '莱州': [119.942327, 37.177017],
                '湖州': [120.1, 30.86],
                '汕头': [116.69, 23.39],
                '昆山': [120.95, 31.39],
                '宁波': [121.56, 29.86],
                '湛江': [110.359377, 21.270708],
                '揭阳': [116.35, 23.55],
                '荣成': [122.41, 37.16],
                '连云港': [119.16, 34.59],
                '葫芦岛': [120.836932, 40.711052],
                '常熟': [120.74, 31.64],
                '东莞': [113.75, 23.04],
                '河源': [114.68, 23.73],
                '淮安': [119.15, 33.5],
                '泰州': [119.9, 32.49],
                '南宁': [108.33, 22.84],
                '营口': [122.18, 40.65],
                '惠州': [114.4, 23.09],
                '江阴': [120.26, 31.91],
                '蓬莱': [120.75, 37.8],
                '韶关': [113.62, 24.84],
                '嘉峪关': [98.289152, 39.77313],
                '广州': [113.23, 23.16],
                '延安': [109.47, 36.6],
                '太原': [112.53, 37.87],
                '清远': [113.01, 23.7],
                '中山': [113.38, 22.52],
                '昆明': [102.73, 25.04],
                '寿光': [118.73, 36.86],
                '盘锦': [122.070714, 41.119997],
                '长治': [113.08, 36.18],
                '深圳': [114.07, 22.62],
                '珠海': [113.52, 22.3],
                '宿迁': [118.3, 33.96],
                '咸阳': [108.72, 34.36],
                '铜川': [109.11, 35.09],
                '平度': [119.97, 36.77],
                '佛山': [113.11, 23.05],
                '海口': [110.35, 20.02],
                '江门': [113.06, 22.61],
                '章丘': [117.53, 36.72],
                '肇庆': [112.44, 23.05],
                '大连': [121.62, 38.92],
                '临汾': [111.5, 36.08],
                '吴江': [120.63, 31.16],
                '石嘴山': [106.39, 39.04],
                '沈阳': [123.38, 41.8],
                '苏州': [120.62, 31.32],
                '茂名': [110.88, 21.68],
                '嘉兴': [120.76, 30.77],
                '长春': [125.35, 43.88],
                '胶州': [120.03336, 36.264622],
                '银川': [106.27, 38.47],
                '张家港': [120.555821, 31.875428],
                '三门峡': [111.19, 34.76],
                '锦州': [121.15, 41.13],
                '南昌': [115.89, 28.68],
                '柳州': [109.4, 24.33],
                '三亚': [109.511909, 18.252847],
                '自贡': [104.778442, 29.33903],
                '吉林': [126.57, 43.87],
                '阳江': [111.95, 21.85],
                '泸州': [105.39, 28.91],
                '西宁': [101.74, 36.56],
                '宜宾': [104.56, 29.77],
                '呼和浩特': [111.65, 40.82],
                '成都': [104.06, 30.67],
                '大同': [113.3, 40.12],
                '镇江': [119.44, 32.2],
                '桂林': [110.28, 25.29],
                '张家界': [110.479191, 29.117096],
                '宜兴': [119.82, 31.36],
                '北海': [109.12, 21.49],
                '西安': [108.95, 34.27],
                '金坛': [119.56, 31.74],
                '东营': [118.49, 37.46],
                '牡丹江': [129.58, 44.6],
                '遵义': [106.9, 27.7],
                '绍兴': [120.58, 30.01],
                '扬州': [119.42, 32.39],
                '常州': [119.95, 31.79],
                '潍坊': [119.1, 36.62],
                '重庆': [106.54, 29.59],
                '台州': [121.420757, 28.656386],
                '南京': [118.78, 32.04],
                '滨州': [118.03, 37.36],
                '贵阳': [106.71, 26.57],
                '无锡': [120.29, 31.59],
                '本溪': [123.73, 41.3],
                '克拉玛依': [84.77, 45.59],
                '渭南': [109.5, 34.52],
                '马鞍山': [118.48, 31.56],
                '宝鸡': [107.15, 34.38],
                '焦作': [113.21, 35.24],
                '句容': [119.16, 31.95],
                '北京': [116.46, 39.92],
                '徐州': [117.2, 34.26],
                '衡水': [115.72, 37.72],
                '包头': [110, 40.58],
                '绵阳': [104.73, 31.48],
                '乌鲁木齐': [87.68, 43.77],
                '枣庄': [117.57, 34.86],
                '杭州': [120.19, 30.26],
                '淄博': [118.05, 36.78],
                '鞍山': [122.85, 41.12],
                '溧阳': [119.48, 31.43],
                '库尔勒': [86.06, 41.68],
                '安阳': [114.35, 36.1],
                '开封': [114.35, 34.79],
                '济南': [117, 36.65],
                '德阳': [104.37, 31.13],
                '温州': [120.65, 28.01],
                '九江': [115.97, 29.71],
                '邯郸': [114.47, 36.6],
                '临安': [119.72, 30.23],
                '兰州': [103.73, 36.03],
                '沧州': [116.83, 38.33],
                '临沂': [118.35, 35.05],
                '南充': [106.110698, 30.837793],
                '天津': [117.2, 39.13],
                '富阳': [119.95, 30.07],
                '泰安': [117.13, 36.18],
                '诸暨': [120.23, 29.71],
                '郑州': [113.65, 34.76],
                '哈尔滨': [126.63, 45.75],
                '聊城': [115.97, 36.45],
                '芜湖': [118.38, 31.33],
                '唐山': [118.02, 39.63],
                '平顶山': [113.29, 33.75],
                '邢台': [114.48, 37.05],
                '德州': [116.29, 37.45],
                '济宁': [116.59, 35.38],
                '荆州': [112.239741, 30.335165],
                '宜昌': [111.3, 30.7],
                '义乌': [120.06, 29.32],
                '丽水': [119.92, 28.45],
                '洛阳': [112.44, 34.7],
                '秦皇岛': [119.57, 39.95],
                '株洲': [113.16, 27.83],
                '石家庄': [114.48, 38.03],
                '莱芜': [117.67, 36.19],
                '常德': [111.69, 29.05],
                '保定': [115.48, 38.85],
                '湘潭': [112.91, 27.87],
                '金华': [119.64, 29.12],
                '岳阳': [113.09, 29.37],
                '长沙': [113, 28.21],
                '衢州': [118.88, 28.97],
                '廊坊': [116.7, 39.53],
                '菏泽': [115.480656, 35.23375],
                '合肥': [117.27, 31.86],
                '武汉': [114.31, 30.52],
                '大庆': [125.03, 46.58]
            };
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        //var value_=data[i].value>15000?15000:data[i].value;
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            function renderItem(params, api) {
                var coords = [];
                var points = [];
                for (var i = 0; i < coords.length; i++) {
                    points.push(api.coord(coords[i]));
                }
                var color = api.visual('color');

                return {
                    type: 'polygon',
                    shape: {
                        points: echarts.graphic.clipPointsByRect(points, {
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height
                        })
                    },
                    style: api.style({
                        fill: color,
                        stroke: echarts.color.lift(color)
                    })
                };
            }
            option = {
                // backgroundColor: '#404a59',
                title: {
                    text: '',
                    subtext: '',
                    sublink: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                /**tooltip : {
                    trigger: 'item'
                },**/
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        var $pna = params.name;
                        var res = "";

                        for (var i = 0; i < $imgs.length; i++) {
                            if ($imgs[i].name == $pna) {
                                res = '<p><span>' + $imgs[i].name + '</span>(' + $imgs[i].value + ')</p>'; //设置自定义数据的模板，这里的模板是文字
                                //console.log(res);
                                break;
                            }
                        }

                        setTimeout(function () {
                            // 仅为了模拟异步回调
                            callback(ticket, res);
                            //回调函数，这里可以做异步请求加载的一些代码
                        }, 5)
                        return "loading";
                    }
                },
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [{
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": {
                                "color": "#044161"
                            }
                        },
                        {
                            "featureType": "land",
                            "elementType": "all",
                            "stylers": {
                                "color": "#004981"
                            }
                        },
                        {
                            "featureType": "boundary",
                            "elementType": "geometry",
                            "stylers": {
                                "color": "#064f85"
                            }
                        },
                        {
                            "featureType": "railway",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "highway",
                            "elementType": "geometry",
                            "stylers": {
                                "color": "#004981"
                            }
                        },
                        {
                            "featureType": "highway",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#005b96",
                                "lightness": 1
                            }
                        },
                        {
                            "featureType": "highway",
                            "elementType": "labels",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "arterial",
                            "elementType": "geometry",
                            "stylers": {
                                "color": "#004981"
                            }
                        },
                        {
                            "featureType": "arterial",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#00508b"
                            }
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "green",
                            "elementType": "all",
                            "stylers": {
                                "color": "#056197",
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "subway",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "manmade",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "local",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "arterial",
                            "elementType": "labels",
                            "stylers": {
                                "visibility": "off"
                            }
                        },
                        {
                            "featureType": "boundary",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#029fd4"
                            }
                        },
                        {
                            "featureType": "building",
                            "elementType": "all",
                            "stylers": {
                                "color": "#1a5787"
                            }
                        },
                        {
                            "featureType": "label",
                            "elementType": "all",
                            "stylers": {
                                "visibility": "off"
                            }
                        }
                        ]
                    }
                },
                series: [{
                    name: '城市',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: convertData(data),
                    symbolSize: function (val) {
                        // return val[2] / 1000;
                        var size = val[2] / 8;
                        size = size > 20 ? 20 : size;
                        return size;
                    },
                    //showEffectOn: 'emphasis',
                    rippleEffect: {
                        brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {
                        //return val[2] / 1000;
                        var size = val[2] / 8;
                        size = size > 20 ? 20 : size;
                        return size;
                    },
                    //showEffectOn: 'emphasis',
                    rippleEffect: {
                        brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                },
                {
                    type: 'custom',
                    coordinateSystem: 'bmap',
                    renderItem: renderItem,
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    animation: false,
                    silent: true,
                    data: [0],
                    z: -10
                }
                ]
            };
            mychart.setOption(option);
        });
    })();

    // map-7
    void (function () {
        var mapKey = '湖北省';
        var pageMode = 0;
        var myChart = echarts.init(document.getElementById('map-7'));
        var mapData = [];
        var opts = {
            subdistrict: 1, //返回下一级行政区
            showbiz: false //最后一级返回街道信息
        };
        var self = {};
        var that = this;
        self.init = function () {
            window.district = new AMap.DistrictSearch(opts); //注意：需要使用插件同步下发功能才能这样直接使用
            window.district.search(mapKey, (status, result) => {
                if (status == 'complete') {
                    self.methods.getData(result.districtList[0], '', result.districtList[0].adcode);
                }
            });
            myChart.off('click');
            myChart.on('click', self.methods.echartsMapClick);
        }
        self.methods = {
            getData: function (data, level, adcode) {
                var getMapItem = function () {
                    var v1 = Math.floor(Math.random() * 10 + 20);
                    var v2 = Math.floor(Math.random() * 100 + 200);
                    var v3 = Math.floor(Math.random() * 10 + 15);
                    var v4 = Math.floor(Math.random() * 100 + 300);
                    var v5 = Math.floor(Math.random() * 10 + 50);
                    var v6 = Math.floor(Math.random() * 100 + 800);
                    var v7 = Math.floor(Math.random() * 10 + 30);
                    var v8 = Math.floor(Math.random() * 100 + 500);
                    var v9 = Math.floor(Math.random() * 10 + 45);
                    var v10 = Math.floor(Math.random() * 100 + 690);
                    if (pageMode == 0) {
                        mapItemData = [
                            '谋划项目' + v1 + '个，总投资额' + v2 + '亿元',
                            '前期项目' + v3 + '个，总投资额' + v4 + '亿元',
                            '建设项目' + v5 + '个，总投资额' + v6 + '亿元',
                            '竣工项目' + v7 + '个，总投资额' + v8 + '亿元',
                            '达效项目' + v9 + '个，总投资额' + v10 + '亿元'
                        ];
                    } else if (pageMode == 1) {
                        mapItemData = [
                            '前期项目' + v3 + '个，总投资额' + v4 + '亿元',
                            '建设项目' + v5 + '个，总投资额' + v6 + '亿元',
                        ];
                    } else if (pageMode == 2) {
                        mapItemData = [
                            '前期项目' + v3 + '个，总投资额' + v4 + '亿元',
                            '建设项目' + v5 + '个，总投资额' + v6 + '亿元',
                        ];
                    } else if (pageMode == 3) {
                        mapItemData = [
                            '谋划项目' + v1 + '个，总投资额' + v2 + '亿元',
                            '前期项目' + v3 + '个，总投资额' + v4 + '亿元',
                            '建设项目' + v5 + '个，总投资额' + v6 + '亿元',
                        ];
                    } else if (pageMode == 4) {
                        mapItemData = [
                            '谋划项目' + v1 + '个，总投资额' + v2 + '亿元',
                            '前期项目' + v3 + '个，总投资额' + v4 + '亿元',
                            '建设项目' + v5 + '个，总投资额' + v6 + '亿元',
                            '竣工项目' + v7 + '个，总投资额' + v8 + '亿元',
                            '达效项目' + v9 + '个，总投资额' + v10 + '亿元'
                        ];
                    }
                    return mapItemData;
                }


                var bounds = data.boundaries || [];
                if (bounds) {
                    for (var i = 0, l = bounds.length; i < l; i++) {
                        var polygon = new AMap.Polygon({
                            map: this.map,
                            strokeWeight: 1,
                            strokeColor: '#0091ea',
                            fillColor: '#80d8ff',
                            fillOpacity: 0.2,
                            path: bounds[i]
                        });

                    }
                }
                var subList = data.districtList || [];
                if (subList) {
                    var contentSub = new Option('--请选择--');
                    var curlevel = subList[0].level;
                    if (curlevel === 'street') {
                        let mapJsonList = this.geoJsonData.features || [];
                        let mapJson = {};
                        for (let i in mapJsonList) {
                            if (mapJsonList[i].properties.name == this.cityName) {
                                mapJson.features = [].concat(mapJsonList[i]);
                            }
                        }
                        mapData = [];
                        mapData.push({
                            name: this.cityName,
                            value: getMapItem(),
                            level: curlevel
                        });
                        self.methods.loadMap(this.cityName, mapJson);
                        this.geoJsonData = mapJson;
                        return;
                    }

                    mapData = [];
                    for (var i = 0, l = subList.length; i < l; i++) {
                        var name = subList[i].name;
                        var cityCode = subList[i].adcode;
                        mapItemData = [];
                        mapData.push({
                            name: name,
                            value: getMapItem(),
                            cityCode: cityCode,
                            level: curlevel
                        });
                        var levelSub = subList[i] && subList[i].level;
                        contentSub = new Option(name);
                        contentSub.setAttribute("value", levelSub);
                        contentSub.center = subList[i].center;
                        contentSub.adcode = subList[i].adcode;

                    }
                    self.methods.loadMapData(adcode);
                }
            },
            loadMapData: function (areaCode) {
                AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {

                    //创建一个实例
                    var districtExplorer = window.districtExplorer = new DistrictExplorer({
                        eventSupport: true, //打开事件支持
                        map: this.map
                    });

                    districtExplorer.loadAreaNode(areaCode, (error, areaNode) => {

                        if (error) {
                            console.error(error);
                            return;
                        }
                        let mapJson = {};
                        mapJson.features = areaNode.getSubFeatures();
                        self.methods.loadMap(this.cityName, mapJson);
                        this.geoJsonData = mapJson;
                    });
                });
            },
            loadMap(mapName, data) {
                if (Object.keys(data).length !== 0 && data) {
                    echarts.registerMap(mapName, data);
                    var option = {
                        // visualMap: {
                        //     type: 'piecewise',
                        //     pieces: [{
                        //         max: 30,
                        //         label: '安全',
                        //         color: '#2c9a42'
                        //     },
                        //     {
                        //         min: 30,
                        //         max: 60,
                        //         label: '警告',
                        //         color: '#d08a00'
                        //     },
                        //     {
                        //         min: 60,
                        //         label: '危险',
                        //         color: '#c23c33'
                        //     },
                        //     ],
                        //     color: '#fff',
                        //     textStyle: {
                        //         color: '#fff',
                        //     },
                        //     visibility: 'off'
                        // },
                        tooltip: { //提示框组件
                            trigger: 'item',
                            axisPointer: {
                                type: 'shadow'
                            },
                            textStyle: {
                                fontSize: getSize(0.14)
                            },
                            formatter: function (param) {
                                var text = param.data.value.map(function (item, index) {
                                    return '<i class="point-type' + index + '"></i>' + item;
                                }).join('<br/>');
                                return '<p style="line-height: 1.8; font-size: ' + getSize(0.16) + 'px;">' + param.name + '<p>' + text;
                            },
                            padding: [0, getSize(0.1), getSize(0.1), getSize(0.1)]
                        },
                        series: [{
                            name: '数据名称',
                            type: 'map',
                            roam: false,
                            mapType: mapName,
                            selectedMode: 'single',
                            showLegendSymbol: false,
                            visibility: 'off',
                            top: '10%',
                            left: '15%',
                            right: '15%',
                            bottom: '25%',
                            itemStyle: {
                                normal: {
                                    color: '#ccc',
                                    areaColor: 'rgba(0, 0, 0, 0)',
                                    borderColor: '#8dd4f2',
                                    borderWidth: 2,
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: "rgb(249, 249, 249)"
                                        }
                                    }
                                },
                                emphasis: {
                                    areaColor: '#23aae3',
                                    borderColor: '#8dd4f2',
                                    areaStyle: {
                                        color: '#fff'
                                    },
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: "rgb(249, 249, 249)"
                                        }
                                    }
                                }
                            },
                            data: mapData
                        }]
                    };
                    myChart.setOption(option);
                }
            },
            echartsMapClick(params) { //地图点击事件
                if (!params.data || params.data.level == 'street') return;
                that.cityName = params.data.name;
                that.cityCode = params.data.cityCode;
                that.district.setLevel(params.data.level); //行政区级别
                that.district.setExtensions('all');
                //行政区查询
                //按照adcode进行查询可以保证数据返回的唯一性
                that.district.search(params.data.cityCode, (status, result) => {
                    if (status === 'complete') {
                        self.methods.getData(result.districtList[0], params.data.level, params.data.cityCode);
                    }
                });
            }
        }
        self.init();
        return function () {
            return self;
        };
    })();

    function chart8(dom) {
        echarts.init(dom).dispose();
        var myChart = echarts.init(dom);
        var uploadedDataURL = "./assets/json/huhehaote.json";
        var min = 0;
        var max = 300;
        var geoCoordMap = {};
        var cityData = [
            {
                name: '新城区',
                value: 92.7
            },
            {
                name: '回民区',
                value: 92.7
            },
            {
                name: '玉泉区',
                value: 92.7
            },
            {
                name: '赛罕区',
                value: 92.7
            },
            {
                name: '土默特左旗',
                value: 92.7
            },
            {
                name: '托克托县',
                value: 92.7
            },
            {
                name: '和林格尔县',
                value: 92.7
            },
            {
                name: '清水河县',
                value: 92.7
            },
            {
                name: '武川县',
                value: 92.7
            }
        ]
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        $.get(uploadedDataURL, function (geoJson) {
            for (var i = 0; i < geoJson.features.length; i++) {
                geoCoordMap[geoJson.features[i].properties.name] = geoJson.features[i].properties.centroid;
            }
            echarts.registerMap('呼和浩特', geoJson);
            var option = {
                visualMap: {
                    show: false,
                    min: min,
                    max: max,
                    inRange: {
                        color: ['#e0ffff', '#006edd']
                    },
                    calculable: true
                },
                geo3D: {
                    show: true,
                    map: '呼和浩特',
                    regionHeight: 4,
                    boxWidth: 70,
                    boxDepth: 50,
                    top: '10%',
                    viewControl: {
                        projection: 'orthographic',
                        autoRotate: false,
                        distance: 70,
                        orthographicSize: 50
                    },
                    label: {
                        show: true,
                        distance: 0,
                        textStyle: {
                            color: '#f4c605',
                            fontSize: getSize(0.14),
                            fontWeight: 'normal',
                            backgroundColor: 'rgba(0,23,11,0)'
                        }
                    },
                    itemStyle: {
                        color: '#014589',
                        borderWidth: getSize(0.01),
                        borderColor: '#187de1'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle: {
                                color: "#f4c605"
                            }
                        },
                        itemStyle: {
                            color: '#014589'
                        }
                    }
                },
                series: [{
                    name: '',
                    type: 'bar3D',
                    coordinateSystem: 'geo3D',
                    label: {
                        show: true,
                        distance: 2,
                        formatter: function (para) {
                            return para.value[2] + '亿元';
                        },
                        textStyle: {
                            color: '#00fcff',
                            backgroundColor: 'transparent'
                        }
                    },
                    shading: 'lambert',
                    itemStyle: {
                        color: '#f30'
                    },
                    zlevel: 10,
                    data: convertData(cityData)
                }]
            }
            myChart.setOption(option);
        });
    }
    chart8($('#map-8')[0]);

    function chart9(dom) {
        echarts.init(dom).dispose();
        var myChart = echarts.init(dom);
        var uploadedDataURL = "./assets/json/china.json";
        var geoCoordMap = {};
        var cityData = [
            { name: "北京市", value: 4312 },
            { name: "天津市", value: 4212 },
            { name: "河北省", value: 4112 },
            { name: "山西省", value: 4012 },
            { name: "内蒙古自治区", value: 3912 },
            { name: "辽宁省", value: 3812 },
            { name: "吉林省", value: 3712 },
            { name: "黑龙江省", value: 3612 },
            { name: "上海市", value: 3512 },
            { name: "江苏省", value: 3412 },
            { name: "浙江省", value: 3312 },
            { name: "安徽省", value: 3212 },
            { name: "福建省", value: 3112 },
            { name: "江西省", value: 3012 },
            { name: "山东省", value: 2912 },
            { name: "河南省", value: 2812 },
            { name: "湖北省", value: 2712 },
            { name: "湖南省", value: 2612 },
            { name: "广东省", value: 2512 },
            { name: "广西壮族自治区", value: 2412 },
            { name: "海南省", value: 2312 },
            { name: "重庆市", value: 2212 },
            { name: "四川省", value: 2112 },
            { name: "贵州省", value: 2012 },
            { name: "云南省", value: 1912 },
            { name: "西藏自治区", value: 1812 },
            { name: "陕西省", value: 1712 },
            { name: "甘肃省", value: 1612 },
            { name: "青海省", value: 1512 },
            { name: "宁夏回族自治区", value: 1412 },
            { name: "新疆维吾尔自治区", value: 1312 },
            { name: "台湾省", value: 1212 },
            { name: "香港特别行政区", value: 1112 },
            { name: "澳门特别行政区", value: 1012 }
        ]
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        $.get(uploadedDataURL, function (geoJson) {
            for (var i = 0; i < geoJson.features.length; i++) {
                geoCoordMap[geoJson.features[i].properties.name] = geoJson.features[i].properties.centroid;
            }
            echarts.registerMap('china', geoJson);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                geo: {
                    map: 'china',
                    top: '5%',
                    left: '5%',
                    right: '5%',
                    label: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: getSize(0.24),
                            fontWeight: 'normal',
                        }
                    },
                    itemStyle: {
                        color: '#196a94',
                        borderWidth: getSize(0.04),
                        borderColor: '#00f9ff'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        itemStyle: {
                            color: '#196a94'
                        }
                    }
                },
                series: [
                    {
                        name: '',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'image://./assets/img/map-point2.png',
                        symbolSize: getSize(0.6),
                        symbolOffset: [0, getSize(-0.5)],
                        label: {
                            show: true,
                            formatter: function (para) {
                                return para.data.value[2];
                            },
                            textStyle: {
                                padding: [getSize(-0.2), 0, 0, 0],
                                fontSize: getSize(0.24),
                                color: '#d42f2f'
                            }
                        },
                        zlevel: 6,
                        data: convertData(cityData)
                    },
                    {
                        name: '',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'circle',
                        symbolSize: 0.1,
                        label: {
                            show: true,
                            formatter: function (para) {
                                return para.name;
                            },
                            textStyle: {
                                fontSize: getSize(0.24),
                                color: '#fff'
                            }
                        },
                        zlevel: 6,
                        data: convertData(cityData)
                    }
                ]
            };
            myChart.setOption(option);
        });
    }
    chart9($('#map-9')[0]);
});