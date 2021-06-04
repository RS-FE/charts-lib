/*
 * @Description: {一般图表} 
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

    var getSize1 = function (v) {
        // var fz = $('html').css('fontSize').replace(/px/, '');
        var fz = 200;
        return v * fz;
    }

    // gauge-1
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-1'));
        var axislineColor1 = '#f2f4f4';
        var option = {
            series: [{
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: false
                },
                radius: '80%',
                min: 0,
                max: 500,
                startAngle: 210,
                endAngle: -30,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [1, axislineColor1]
                        ],
                        width: 20
                    }

                },
                splitLine: { //分隔线样式
                    show: false,
                },
                axisLabel: { //刻度标签
                    show: true,
                    color: '#333333',
                    fontSize: 10,
                    distance: 0
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    color: '#fff',
                },
                data: [{
                    value: 120,
                    name: ''
                }]
            }, {
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: true,
                    length: '60%'
                },
                itemStyle: {
                    color: '#2c3638'
                },
                radius: '80%',
                min: 0,
                max: 500,
                startAngle: 210,
                endAngle: -30,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.2, '#91c7ae'],
                            [0.8, '#63869e'],
                            [1, '#c23531']
                        ],
                        width: 20
                    }

                },
                splitLine: { //分隔线样式
                    show: true,
                },
                axisLabel: { //刻度标签
                    show: false,
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                },
                data: [{
                    value: '120',
                    name: ''
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // gauge-2
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-2'));
        var axislineColor1 = '#f2f4f4';
        var gradientColor1 = [
            [
                0.8, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ae3df6'
                    },
                    {
                        offset: 1,
                        color: '#53bef9'
                    }
                ]
                )
            ],
            [
                1, '#f00'
            ]
        ]
        var option = {
            series: [{
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: false
                },
                radius: '80%',
                min: 0,
                max: 100,
                startAngle: 210,
                endAngle: -30,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [1, axislineColor1]
                        ],
                        width: 20
                    }

                },
                splitLine: { //分隔线样式
                    show: false,
                },
                axisLabel: { //刻度标签
                    show: true,
                    color: '#333333',
                    fontSize: 10,
                    distance: -50
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    color: '#fff',
                },
                data: [{
                    value: 55,
                    name: ''
                }]
            }, {
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: true,
                    length: '60%'
                },
                itemStyle: {
                    color: '#2c3638'
                },
                radius: '80%',
                min: 0,
                max: 100,
                startAngle: 210,
                endAngle: -30,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: gradientColor1,
                        width: 20
                    }

                },
                splitLine: { //分隔线样式
                    show: true,
                },
                axisLabel: { //刻度标签
                    show: false,
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                },
                data: [{
                    value: 55,
                    name: ''
                }]
            }, {
                type: 'pie',
                hoverAnimation: false,
                legendHoverLink: false,
                radius: ['0', '10%'],
                z: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: '{c}%',
                        fontSize: 12,
                        color: '#fff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 55,
                    itemStyle: {
                        normal: {
                            color: "#2c3638"
                        }
                    }
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // gauge-3
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-3'));
        var option = {
            series: [{
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: true,
                    width: getSize1(0.03),
                    length: '60%'
                },
                itemStyle: {
                    color: '#2c3638'
                },
                radius: '100%',
                min: 0,
                max: 100,
                startAngle: 210,
                endAngle: -30,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.3, '#EF4864'],
                            [0.7, '#FACC14'],
                            [1, '#2FC25B']
                        ],
                        width: getSize1(0.05)
                    }

                },
                splitLine: { //分隔线样式
                    show: true,
                    length: getSize1(0.05)
                },
                axisLabel: { //刻度标签
                    show: true,
                    formatter: function (para) {
                        if (para == 0 || para == 50 || para == 100) {
                            return para;
                        } else {
                            return '';
                        }
                    },
                    distance: getSize1(0.02),
                    fontSize: getSize1(0.05),
                    color: '#000'
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    padding: [getSize1(0.2), 0, 0, 0],
                    fontWeight: 'bold',
                    color: '#3196FA',
                    formatter: '{value}%',
                    fontSize: getSize1(0.12)
                },
                data: [{
                    value: '60',
                    name: ''
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // gauge-4
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-4'));
        var gradientColor1 = [
            [
                1, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                        offset: 0,
                        color: '#32c25a'
                    },
                    {
                        offset: 0.25,
                        color: '#8fcc35'
                    },
                    {
                        offset: 0.5,
                        color: '#facc14'
                    },
                    {
                        offset: 0.75,
                        color: '#fa8b38'
                    },
                    {
                        offset: 1,
                        color: '#df4b64'
                    }
                ]
                )
            ]
        ]
        var option = {
            backgroundColor: '#003f6a',
            series: [{
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: true,
                    width: getSize(0.1),
                    length: '60%'
                },
                itemStyle: {
                    color: '#979797'
                },
                radius: '80%',
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: gradientColor1,
                        width: getSize(0.15)
                    }

                },
                splitLine: { //分隔线样式
                    show: false,
                    length: getSize(0.1)
                },
                axisLabel: { //刻度标签
                    show: true,
                    formatter: function (para) {
                        if (para == 0 || para == 50 || para == 100) {
                            return para;
                        } else {
                            return '';
                        }
                    },
                    distance: getSize(0.2),
                    fontSize: getSize(0.2),
                    color: '#fff'
                },
                axisTick: { //刻度样式
                    show: false,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    offsetCenter: ['0%', '70%'],
                    padding: [getSize(0.2), 0, 0, 0],
                    fontWeight: 'bold',
                    formatter: '{a|85%}\n{b|污水零直排\n小区建设}',
                    textStyle: {
                        lineHeight: getSize(0.4),
                        rich: {
                            a: {
                                fontSize: getSize(0.38),
                                color: '#facc14'
                            },
                            b: {
                                fontSize: getSize(0.3),
                                color: '#fff'
                            }
                        }
                    }
                },
                data: [{
                    value: '85',
                    name: ''
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // gauge-5
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-5'));
        var gradientColor1 = [
            [
                1, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                        offset: 0,
                        color: '#3c99f7'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0,0)'
                    }
                ]
                )
            ]
        ]
        var option = {
            backgroundColor: '#003f6a',
            title: {
                x: 'center',
                top: '22%',
                text: '500',
                textStyle: {
                    fontFamily: 'DS-DIGIT',
                    fontWeight: 'normal',
                    fontSize: getSize(0.6),
                    color: '#00f6ff'
                },
            },
            series: [{
                name: '内圈小',
                type: 'gauge',
                pointer: {
                    show: true,
                    width: getSize(0.1),
                    length: '60%'
                },
                itemStyle: {
                    color: '#979797'
                },
                radius: '90%',
                min: 0,
                max: 1,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 10,
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: gradientColor1,
                        width: getSize(0.15)
                    }

                },
                splitLine: { //分隔线样式
                    show: false,
                    length: getSize(0.1)
                },
                axisLabel: { //刻度标签
                    show: true,
                    formatter: function (para) {
                        return '';
                    },
                    distance: getSize(0.2),
                    fontSize: getSize(0.2),
                    color: '#fff'
                },
                axisTick: { //刻度样式
                    show: false,
                },
                pointer: { //仪表盘指针
                    show: false,
                    length: '90%',
                    width: 2
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    offsetCenter: ['0%', '30%'],
                    padding: [getSize(0.2), 0, 0, 0],
                    fontWeight: 'bold',
                    formatter: '{a|网络舆情(件)}',
                    textStyle: {
                        lineHeight: getSize(0.4),
                        rich: {
                            a: {
                                fontSize: getSize(0.3),
                                color: '#fff'
                            }
                        }
                    }
                },
                data: [{
                    value: '85',
                    name: ''
                }]
            }, {
                name: '',
                type: 'gauge',
                splitNumber: 20, //刻度数量
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 1,
                radius: '100%', //图表尺寸
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 0,
                        shadowBlur: 0,
                        color: [
                            [0.05, '#0a82ba'],
                            [1, '#0a82ba']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: 'auto',
                        width: 1
                    },
                    length: getSize(0.03),
                    splitNumber: 5
                },
                splitLine: {
                    show: false,
                    length: 2,
                    lineStyle: {
                        color: 'auto',
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: { //仪表盘指针
                    show: false,
                    length: '70%',
                    width: 2
                },
                detail: {
                    show: false,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2,
                    offsetCenter: [0, '0%'], // x, y，单位px
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'transparent',
                        fontSize: 30,
                    },
                    formatter: '{value}'
                },
                data: [{
                    name: "",
                    value: 100
                }]
            }, {
                name: "",
                type: "pie",
                radius: ["0", "65%"],
                startAngle: 180,
                hoverAnimation: false,
                silent: true,
                z: 0,
                zlevel: 0,
                label: {
                    normal: {
                        show: false,
                        position: "center"
                    }
                },
                data: [{
                    value: '50',
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#03294f',
                            shadowColor: '#03294f',
                            shadowBlur: getSize(0.05)
                        }
                    }
                }, {
                    value: '50',
                    name: "placeholder",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "transparent"
                        }
                    }
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // gauge-6
    void (function () {
        var myChart = echarts.init(document.getElementById('gauge-6'));
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [
                {
                    name: '速度',
                    type: 'gauge',
                    center: ['50%', '60%'],
                    z: 3,
                    min: 0,
                    max: 100,
                    startAngle: 200,
                    endAngle: -20,
                    splitNumber: 5,
                    radius: '90%',
                    axisLabel: { //刻度标签
                        show: true,
                        formatter: function (para) {
                            if (para === 0 | para === 50 | para === 100) {
                                return para;
                            } else {
                                return '';
                            }
                        },
                        distance: -getSize(0.3),
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    axisLine: {            // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: getSize(0.05),
                            color: [
                                [1, '#0093ee']
                            ]
                        }
                    },
                    axisTick: {              // 坐标轴小标记
                        length: getSize(0.15), // 属性length控制线长
                        lineStyle: {         // 属性lineStyle控制线条样式
                            color: '#3196fa'
                        }
                    },
                    splitLine: {
                        show: false,       // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic'
                        }
                    },
                    pointer: { //仪表盘指针
                        show: true,
                        length: '80%',
                        width: getSize(0.1)
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        offsetCenter: ['0%', '60%'],
                        formatter: '{a|80}\n{b|当日城市管理事件}',
                        textStyle: {
                            lineHeight: getSize(0.6),
                            rich: {
                                a: {
                                    fontFamily: 'DS-DIGIT',
                                    fontSize: getSize(0.6),
                                    color: '#00f6ff'
                                },
                                b: {
                                    fontSize: getSize(0.3),
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data: [{
                        value: '85',
                        name: ''
                    }]
                },
                {
                    name: '',
                    type: 'gauge',
                    center: ['20%', '55%'],
                    z: 3,
                    min: 0,
                    max: 100,
                    startAngle: 200,
                    endAngle: 35,
                    splitNumber: 3,
                    radius: '70%',
                    axisLabel: { //刻度标签
                        show: false,
                        formatter: function (para) {
                            if (para === 0 | para === 50 | para === 100) {
                                return para;
                            } else {
                                return '';
                            }
                        },
                        distance: -getSize(0.3),
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: getSize(0.05),
                            color: [
                                [
                                    1, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#3196fa'
                                        },
                                        {
                                            offset: 1,
                                            color: '#3196fa'
                                        }
                                    ]
                                    )
                                ]
                            ]
                        }
                    },
                    axisTick: {              // 坐标轴小标记
                        length: getSize(0.15), // 属性length控制线长
                        lineStyle: {         // 属性lineStyle控制线条样式
                            color: '#3196fa'
                        }
                    },
                    splitLine: {
                        show: false,       // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic'
                        }
                    },
                    pointer: { //仪表盘指针
                        show: true,
                        length: '80%',
                        width: getSize(0.1)
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        offsetCenter: ['0%', '70%'],
                        formatter: '{a|500}\n{b|待结案}',
                        textStyle: {
                            lineHeight: getSize(0.6),
                            rich: {
                                a: {
                                    fontFamily: 'DS-DIGIT',
                                    fontSize: getSize(0.6),
                                    color: '#00f6ff'
                                },
                                b: {
                                    fontSize: getSize(0.3),
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data: [{
                        value: '85',
                        name: ''
                    }]
                },
                {
                    name: '',
                    type: 'gauge',
                    center: ['80%', '55%'],
                    z: 3,
                    min: 0,
                    max: 100,
                    startAngle: 145,
                    endAngle: -20,
                    splitNumber: 3,
                    radius: '70%',
                    axisLabel: { //刻度标签
                        show: false,
                        formatter: function (para) {
                            if (para === 0 | para === 50 | para === 100) {
                                return para;
                            } else {
                                return '';
                            }
                        },
                        distance: -getSize(0.3),
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: getSize(0.05),
                            color: [
                                [
                                    1, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#3196fa'
                                        },
                                        {
                                            offset: 1,
                                            color: '#3196fa'
                                        }
                                    ]
                                    )
                                ]
                            ]
                        }
                    },
                    axisTick: {              // 坐标轴小标记
                        length: getSize(0.15), // 属性length控制线长
                        lineStyle: {         // 属性lineStyle控制线条样式
                            color: '#3196fa'
                        }
                    },
                    splitLine: {
                        show: false,       // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic'
                        }
                    },
                    pointer: { //仪表盘指针
                        show: true,
                        length: '80%',
                        width: getSize(0.1)
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        offsetCenter: ['0%', '70%'],
                        formatter: '{a|500}\n{b|已结案}',
                        textStyle: {
                            lineHeight: getSize(0.6),
                            rich: {
                                a: {
                                    fontFamily: 'DS-DIGIT',
                                    fontSize: getSize(0.6),
                                    color: '#00f6ff'
                                },
                                b: {
                                    fontSize: getSize(0.3),
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    data: [{
                        value: '55',
                        name: ''
                    }]
                }

            ]
        };
        myChart.setOption(option);
    })();

    // bar-1
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-1'));
        var dataArrA = [10000, 12000, 15500, 12500, 12000, 13500, 14000];
        var dataArrB = dataArrA.map(function (item) {
            return item - 2000;
        })
        var xArr = ['10月11日', '10月12日', '10月13日', '10月14日', '10月15日', '10月16日', '10月17日']
        var seriesObj = [{
            name: '今日输入', //系列名称
            type: 'bar',
            barWidth: '25%',
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#62adea",
                }
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            data: dataArrA
        }, {
            name: '今日输出', //系列名称
            type: 'bar',
            barWidth: '25%',
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#f7968c",
                }
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            data: dataArrB
        }];
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                top: 0,
                data: ['今日输入', '今日输出'],
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    padding: [5, 0, 0, 0]
                },
                itemWidth: 12,
                itemHeight: 12
            },
            grid: { //直角坐标系
                top: '20%',
                left: '6%',
                right: '6%',
                bottom: '6%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#707e84'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '(条)',
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 38, 0, 0]
                },
                minInterval: 4000,
                margin: 10,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#707e84'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // bar-2
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-2'));
        var nameArr = ["行政奖励", "审核转报、联办事项", "行政给付", "行政许可", "行政确认", "其他行政权力", "行政裁决", "行政许可"].reverse();
        var dataArr = [32, 32, 9, 6, 5, 7, 4, 8].reverse();
        var option = {
            backgroundColor: '#003f6a',
            color: ['rgba(12,249,255,0.38)', 'rgba(125,212,255,0.62)'],
            grid: {
                top: '5%',
                left: '7%',
                right: '7%',
                bottom: '10%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
            },
            yAxis: [{
                type: 'category',
                zlevel: 1,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#00ffff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    fontSize: 12,
                    color: '#fff',
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            xAxis: [{
                type: 'value',
                boundaryGap: true,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: {
                    show: false,
                    color: '#fff',
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: '空气优良天数',
                type: 'bar',
                barGap: 0,
                barWidth: '60%',
                label: {
                    show: true,
                    position: 'right',
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'Impact',
                    color: '#fff'
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, //// 0% 处的颜色
                        color: 'rgb(0,48,80)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(0,177,192)'
                    }
                    ], false),
                },
                data: dataArr
            }]

        };
        myChart.setOption(option);
    })();

    // bar-3
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-3'));
        var nameArr = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];
        var dataArr = [46, 60, 50, 62, 48, 52, 40, 50, 60, 49, 43, 50];
        var dataArr1 = dataArr.map(function (item) {
            return item - 20;
        });
        var dataArr2 = dataArr1.map(function (item) {
            item = 20;
            return item;
        });
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '7%',
                right: '5%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#616f80'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff'
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: nameArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                max: 80,
                minInterval: 20,
                nameGap: 10,
                name: '（万次）',
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 25, 5, 0]
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#616f80'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    formatter: function (para) {
                        return para;
                    },
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '数据每月增长量1', //系列名称
                type: 'bar',
                stack: '堆叠',
                barWidth: '50%',
                lineStyle: { //线条样式。
                    normal: {
                        color: "#0cf9ff", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        show: false,
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "transparent",
                    }
                },
                data: dataArr1
            }, {
                name: '数据每月增长量2', //系列名称
                type: 'bar',
                stack: '堆叠',
                barWidth: '50%',
                lineStyle: { //线条样式。
                    normal: {
                        color: "#0cf9ff", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        show: true,
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        formatter: function (para) {
                            return dataArr[para.dataIndex];
                        },
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#5296c0",
                    }
                },
                data: dataArr2
            }]
        };
        myChart.setOption(option);
    })();

    // bar-4
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-4'));
        var dataArr = [80, 40, 50, 66, 55, 54];
        var colorArr = ['#c79444', '#13c1b4', '#88da3d', '#c5335b', '#57cec7', '#56ccc8'];
        var nameArr = ['GDP总值', '第一产业', '第二产业', '第三产业', '规上工业', '工业用电'];
        var seriesArr = [{
            name: '柱状图',
            type: 'bar',
            stack: '柱状图',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: 10,
                    formatter: function (param) {
                        return param.value + '%';
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 14,
            data: function () {
                var result = [],
                    item;
                for (var i = 0; i < dataArr.length; i++) {
                    item = {
                        value: dataArr[i],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0.1,
                                    color: colorArr[i]
                                }, {
                                    offset: 1,
                                    color: '#1b5d8f'
                                }], false)
                            }
                        }
                    };
                    result.push(item);
                }
                return result;
            }(),
        }, {
            name: '柱状图',
            type: 'scatter',
            stack: '柱状图',
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            data: [0, 0, 0, 0, 0, 0],
            label: {
                normal: {
                    show: false,
                }
            },
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: '#03f5fc',
                }
            },
        }];
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: 'rgba(112,112,112,0)',
                    },
                },
            },
            grid: {
                top: '14%',
                bottom: '35%'
            },
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#1b7390',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    },
                    rotate: 30,
                    margin: 15,
                },
                data: nameArr
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#32346c',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#32346c ',
                    }
                },
                axisLabel: {
                    show: false
                },
            },
            series: seriesArr
        };
        myChart.setOption(option);
    })();

    // bar-5
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-5'));
        var option = {
            backgroundColor: '#003f6a',
            color: ['rgba(12,249,255,0.38)'],
            grid: {
                top: '5%',
                left: '5%',
                right: '15%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
                formatter: '{b}<br>{c}次'
            },
            xAxis: [{
                type: 'value',
                name: '(次)',
                nameTextStyle: {
                    color: '#fff'
                },
                // nameGap: 30,
                // nameRotate: 270,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    color: '#fff',
                },
                axisTick: {
                    show: false,
                },
            }],
            yAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: {
                    show: true,
                    color: '#fff',
                    textStyle: {
                        lineHeight: 40
                    }
                },
                axisTick: {
                    show: false,
                },
                data: ['出资额', '商标名称', '投资企业', '投资方类型', '统一社会\n信用代码'].reverse()
            }],
            series: {
                type: 'bar',
                barWidth: '18',
                label: {
                    show: false,
                },
                data: [185, 175, 290, 120, 280]
            }

        };
        myChart.setOption(option);
    })();

    // bar-6
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-6'));
        var option = {
            backgroundColor: '#003f6a',
            color: ['rgba(12,249,255,0.38)', 'rgba(125,212,255,0.62)'],
            grid: {
                top: '20%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true,
            },
            legend: {
                x: 'center',
                top: '0',
                data: ['空气优良天数', '优于Ⅲ类水质占比'],
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
            },
            yAxis: [{
                type: 'value',
                name: '天数',
                max: 30,
                interval: 3,
                nameTextStyle: {
                    color: '#fff'
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    color: '#fff',
                },
                axisTick: {
                    show: true,
                },
            },
            {
                type: 'value',
                name: '百分比%',
                max: 100,
                interval: 10,
                nameTextStyle: {
                    color: '#fff'
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    show: true,
                    color: '#fff',
                },
                axisTick: {
                    show: true,
                },
            }
            ],
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: {
                    show: true,
                    color: '#fff',
                },
                axisTick: {
                    show: false,
                },
                data: ['1月', '3月', '7月', '9月', '12月']
            }],
            series: [{
                name: '空气优良天数',
                type: 'bar',
                barGap: 0,
                barWidth: '18',
                label: {
                    show: false,
                },
                data: [18, 15, 28, 12, 29]
            },
            {
                name: '优于Ⅲ类水质占比',
                yAxisIndex: 1,
                type: 'bar',
                barGap: 0,
                barWidth: '18',
                label: {
                    show: false,
                },
                data: [20, 40, 80, 60, 70]
            }
            ]

        };
        myChart.setOption(option);
    })();

    // bar-7
    void (function () {
        var nameData = ['就业创业', '教育培训', '医疗卫生', '环保治理', '户籍人员', '企业服务'];
        var valueArr = [250, 260, 220, 240, 250, 270, 280, 265, 245, 240, 230, 220];
        var legendArr = [];
        var dataArr = [];
        for (var i = 0; i < nameData.length; i++) {
            legendArr[i] = {
                name: nameData[i],
                icon: 'image://./assets/img/data-icon' + (i + 1) + '.png'
            }
            dataArr[i] = {
                name: nameData[i],
                type: 'bar',
                data: valueArr.map(function (a) {
                    return a + 20;
                }),
                stack: 'one for all',
                barWidth: 10, //柱子宽度
                barGap: 0, //柱子之间间距
            }
        }

        var myChart = echarts.init(document.getElementById('bar-7'));
        var option = {
            color: ['#fb7075', '#93defa', '#fea44a', '#c2cffd', '#d5f8ef', '#fdd458'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: legendArr,
                top: '5%',
                textStyle: {
                    color: "#000"
                },
                itemGap: 5,
                itemWidth: 20,
                itemHeight: 8
            },
            grid: {
                left: '4%',
                right: '4%',
                top: '35%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月 ',
                    '十一月',
                    '十二月'
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#dcdee8",
                        width: 1,
                        type: "dashed"
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#020202",
                    },
                    margin: 12,
                    rotate: 30
                },
            }],
            yAxis: [{
                type: 'value',
                name: '单位：个',
                nameTextStyle: {
                    color: "#020202",
                },
                axisLabel: {
                    show: true,
                    formatter: '{value}',
                    textStyle: {
                        color: "#020202",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#dcdee8",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#dcdee8",
                        width: 1,
                        type: "dashed"
                    }
                }
            }],
            series: dataArr
        };
        myChart.setOption(option);
    }());

    // bar-8
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-8'));
        var dataArr = [1050, 863, 790, 650, 580, 660, 882];
        var option = {
            backgroundColor: '#0b112a',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                data: ['督查', '文电', '深改', '法规', '交换', 'A系统', 'B系统'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false,
                }
            },
            series: [{
                name: '应用系统数据图',
                type: 'bar',
                barWidth: 10,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: 10,
                        color: '#fff'
                    }
                },
                data: function () {
                    var itemArr = [],
                        item;
                    for (var i = 0; i < dataArr.length; i++) {
                        if (i < 5) {
                            item = {
                                value: dataArr[i],
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0.1,
                                            color: '#036e92'
                                        }, {
                                            offset: 1,
                                            color: '#01a9db'
                                        }], false)
                                    }
                                }
                            };
                        } else {
                            item = {
                                value: dataArr[i],
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0.1,
                                            color: '#03347d'
                                        }, {
                                            offset: 1,
                                            color: '#015bda'
                                        }], false)
                                    }
                                }
                            };
                        }

                        itemArr.push(item);
                    }
                    return itemArr;
                }()
            }]
        }
        myChart.setOption(option);
    })();

    // bar-9
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-9'));
        var option = {
            backgroundColor: '#0b0f28',
            color: ['#10f0b0'], //调色盘颜色列表
            tooltip: { //提示框
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            grid: { //直角坐标系内绘图网格
                top: '10%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [ //直角坐标系 grid 中的 x 轴
                {
                    type: 'category',
                    data: ['高新区', '富阳区', '余杭区'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,

                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#5b6e97'
                        }
                    },
                }
            ],
            yAxis: [ //直角坐标系 grid 中的 y 轴
                {
                    type: 'value',
                    min: 90,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#5b6e97'
                        }
                    },
                    axisTick: {
                        show: true,
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#5b6e97'
                        }
                    },
                }
            ],
            series: [ //系列名
                {
                    type: 'bar',
                    barWidth: '20%',
                    data: [100.19, 98.06, 97.51]
                },
            ]
        };
        myChart.setOption(option);
    })();

    // bar-10
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-10'));
        var dataMap = [];
        // 名称
        var pList = ['杭州国家自主创新示范区', '中国（杭州）跨境电子商务综合试验区', '基层政务公开标准化示范国家级试点', '‘证照分离’改革试点', '杭州互联网法院', '深化服务贸易创新发展试点', '浙江省全面创新改革试验区', '养老服务业综合改革试点', '桐庐县纵深推进‘最多跑一次’改革', '小城市培育试点'];
        var plistShort = ['国家创新示范区', '跨境电商', '基层政务公开', '证照分离', '互联网法院', '服贸创新', '全面创新', '养老服务', '桐庐最多跑一次', '小城市培育']
        var val2 = ['50', '20', '0', '0', '0', '33.33', '0', '0', '0', '0'];
        var val1 = ['50', '80', '100', '100', '100', '66.67', '100', '100', '100', '100'];
        var dataarr = [],
            dataarr_2 = [],
            dataarr_3 = [];

        for (var k = 0; k < pList.length; k++) {
            dataarr[k] = {
                name: pList[k],
                value: val1[k]
            }; // 任务进展一
            dataarr_2[k] = {
                name: pList[k],
                value: val2[k]
            }; // 任务进展二
            dataarr_3[k] = {
                name: pList[k],
                value: parseFloat(val1[k]) + parseFloat(val2[k])
            };
        }

        for (var i = 0; i < Math.ceil(dataarr.length / 10); i++) {
            // 任务进展一
            dataMap[i] = {
                task1: dataarr.slice(i * 10, (i + 1) * 10)
            }
            // 任务进展二
            dataMap[i].task2 = dataarr_2.slice(i * 10, (i + 1) * 10)
            // 名称
            dataMap[i].name = pList.slice(i * 10, (i + 1) * 10)

            // 任务进展三
            dataMap[i].task3 = dataarr_3.slice(i * 10, (i + 1) * 10);
        }

        var optionsArr = [];
        for (var i = 0; i < dataMap.length; i++) {
            optionsArr.push({
                backgroundColor: '#0b0f28',
                xAxis: [{
                    'type': 'category',
                    'axisLabel': {
                        'interval': 0
                    },
                    'data': '',
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    data: dataMap[i].task1,
                    type: 'bar',
                    barWidth: '25%',
                    label: {
                        show: true,
                        position: 'bottom',
                        formatter: '{c}%',
                        textStyle: {
                            fontSize: 10,
                            color: '#fff'
                        },
                        offset: [0, -270]
                    },
                    zlevel: 1
                },
                {
                    data: dataMap[i].task2,
                    type: 'bar',
                    barWidth: '25%'
                },
                {
                    data: dataMap[i].task3,
                    type: 'bar',
                    barWidth: '25%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function (para) {
                            var index = para.dataIndex;
                            var name = plistShort[index].split('').join('\n');
                            return name;
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                        offset: [0, 240]
                    },
                    zlevel: 0,
                    silent: true
                },
                ]
            })
        }
        var option = {
            baseOption: {
                timeline: {
                    show: false,
                    // y: 0,
                    axisType: 'category',
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    // currentIndex: 2,
                    playInterval: 1000,
                    // controlStyle: {
                    //     position: 'left'
                    // },
                    data: dataMap
                },
                tooltip: {},
                calculable: true,
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,

                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#5b6e97'
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                }],
                series: [{
                    name: '已完成',
                    type: 'bar',
                    stack: '总量',
                    color: '#3e58e4'
                },
                {
                    name: '未完成',
                    type: 'bar',
                    stack: '总量',
                    color: '#2eced1'
                },
                {
                    name: '完成度',
                    type: 'bar',
                    color: 'transparent'
                },
                ]
            },
            options: optionsArr
        };
        myChart.setOption(option);
    })();

    // bar-11
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-11'));
        var seriesArr = [];
        var legendArr = [];
        var nameArr = ['接口访问量', '目录访问量'];
        var valueArrA = [32, 42, 40, 15, 22, 39, 8, 19, 22, 42, 46, 30, 12, 15];
        var valueArrB = valueArrA.map(function (item) {
            return item + Math.floor(Math.random(0, 1) * (10 - 5) + 5);
        });
        var valueArr = [valueArrA, valueArrB];
        var colorArr = ['#5daaf2', '#ffa300'];
        for (var i = 0; i < nameArr.length; i++) {
            seriesArr.push({
                name: nameArr[i], //系列名称
                type: 'bar',
                barWidth: '10px',
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: colorArr[i],
                    }
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: false,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                },
                data: valueArr[i]
            });
            legendArr.push({
                icon: 'rect',
                name: nameArr[i]
            });
        }
        var xArr = ['区应急管理局', '区财政局', '区档案局', '区税务局', '区发改经信局', '区审计局', '区科技局', '区投促局', '区卫健局', '区民政局', '区教育局', '区公安分局', '区统计局', '区司法局']

        var option = {
            backgroundColor: '#fff',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            title: {
                text: '数据详情',
                x: 'center',
                top: '5%',
                textStyle: {
                    fontSize: 18,
                    color: '#0096ff'
                }
            },
            legend: {
                x: 'center',
                top: '12%',
                itemWidth: 17,
                itemHeight: 15,
                itemGap: 15,
                textStyle: {
                    padding: [0, 10, 0, 0],
                    fontSize: '16',
                    color: '#242a2e'
                },
                data: legendArr
            },
            grid: { //直角坐标系
                top: '25%',
                left: '6%',
                right: '6%',
                bottom: '6%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#cccccc'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    fontSize: 16,
                    color: '#000000',
                    rotate: 30,
                    margin: 40,
                    align: 'center',
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '(条)',
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 38, 0, 0]
                },
                margin: 10,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#cccccc'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#cccccc'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    fontSize: 16,
                    color: '#000000',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesArr
        };
        myChart.setOption(option);
    })();

    // bar-12
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-12'));
        var dataArrA = [55, 80, 55, 50, 60, 48, 38, 82];
        var dataArrB = [85, 80, 55, 86, 90, 80, 0, 0];
        var xArr = ['跑零次实现率', '即办事项比例', '承诺压缩比', '网上办实现率', '掌上办实现率', '全流程网版比例', '全流程网版比例', '浙政钉日活率']
        var seriesObj = [{
            name: '已完成', //系列名称
            type: 'bar',
            barWidth: '25%',
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#40cbbc",
                }
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false
            },
            xAxisIndex: 1,
            zlevel: 2,
            data: dataArrA
        }, {
            name: '目标', //系列名称
            type: 'bar',
            barWidth: '25%',
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#f9bc62",
                }
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false
            },
            zlevel: 1,
            data: dataArrB
        }];
        var option = {
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                // formatter: '{a0}：{c0}%<br/>{a1}：{c1}%',
                formatter: function (para) {
                    var arr = [];
                    var str;
                    str += para[0].marker + para[0].seriesName + '：' + para[0].value + '%';
                    for (var i = 0; i < para.length; i++) {
                        str = para[i].marker + para[i].seriesName + '：' + para[i].value + '%';
                        arr.push(str);
                    }
                    arr = arr.join('<br>');
                    return arr;
                },
                textStyle: {
                    padding: [20, 10, 20, 10],
                    fontFmaily: 'simsun',
                    fontSize: 12,
                    fontWeight: 'bold',
                    lineHeight: 24,
                    color: '#666666'
                },
                backgroundColor: '#f5f5f5',
                extraCssText: 'border-radius: 6px; padding: 5px 12px;'
            },
            grid: { //直角坐标系
                top: '10%',
                left: '4%',
                right: '4%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: false,
                    lineStyle: {
                        color: '#707e84'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        margin: 15,
                        fontSize: 14,
                        color: '#555555',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }, { //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '(条)',
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 38, 0, 0]
                },
                margin: 10,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#e6e6e6'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: false,
                    lineStyle: {
                        color: '#707e84'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        fontSize: 12,
                        color: '#999999',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
        // 自适应
        $(window).resize(function () {
            myChart.resize();
        });
        // 点击坐标轴  还需允许坐标轴事件冒泡
        myChart.on('click', 'xAxis.category', function (params) {
            alert(params.value);
        });
        // 点击柱子
        myChart.on('click', 'series.bar', function (params) {
            alert(params.name);
        });
    })();

    // bar-13
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-13'));
        var dataArr1 = [93828, 17828, 3534, 2930, 124];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '10%',
                left: '4%',
                right: '4%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                // nameGap: getSize(0.1),
                // name: '(月份)',
                // nameLocation: 'start',
                // nameTextStyle: {
                //     padding: [getSize(0.3), getSize(0.1), 0, 0],
                //     fontSize: getSize(0.12),
                //     color: '#fff'
                // },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#0cf9ff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.11),
                        color: '#fff',
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: ['亿元以下', '1~5亿', '5~10亿', '10~100亿', '100亿以上']
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.4)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#0cf9ff'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    fontSize: getSize(0.12),
                    color: '#fff',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '投资规模分布情况', //系列名称
                type: 'bar',
                barWidth: '25%',
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#fff'
                    }
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.1,
                            color: 'rgba(12, 249, 255, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(12, 249, 255, 1)'
                        }], false)
                    }
                },
                data: dataArr1
            }]
        };
        myChart.setOption(option);
    })();

    // bar-14
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-14'));
        var nameArr = [
            '地区生\n产总值\n(1-6月)',
            '规上\n工业\n增加值',
            '服务业\n增加值\n(1-6月)',
            '时尚\n产业\n增加值',
            '高端装\n备制造\n产业\n增加值',
            '固定\n资产\n投资',
            '生态环\n境和公\n共建设',
            '高新技\n术产业\n投资',
            '民间项\n目投资',
            '工业\n投资',
            '货物\n出口\n(1-7月)',
            '服务贸\n易出口\n(1-7月)',
            '社会消\n费品零\n售总额',
            '网络\n零售额',
            '单位GDP\n电耗降\n低率\n(1-6月)',
            'PM2.5\n平均\n浓度'
        ];
        var rankMax = 13;
        var dataArr = [4, 1, 12, 3, 7, 3, 6, 4, 7, 2, 10, 3, 11, 5, 3, 3].map(function (item) {
            return rankMax - item;
        });
        var dataArr2 = [19.25, 20.00, 17.25, 19.50, 18.50, 19.50, 18.75, 19.25, 18.50, 19.75, 17.75, 19.50, 17.50, 19.00, 19.00, 19.50];

        var palceholderArr = [];
        for (var i = 0; i < dataArr2.length; i++) {
            palceholderArr.push(0);
        }
        var option = {
            backgroundColor: '#003f6a',
            grid: {
                top: '20%',
                left: '2%',
                right: '2%',
                bottom: '8%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (para) {
                    return para[1].axisValue + ':<br/> 第' + parseFloat(rankMax - para[1].data.value) + '名';
                },
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                zlevel: 1,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: 'rgba(49,150,250,0.5)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: 'rgba(49,150,250,1)'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    lineHeight: getSize(0.3),
                    fontSize: getSize(0.18),
                    color: '#ffffff',
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            yAxis: [{
                name: '单位：名',
                nameLocation: 'end',
                nameTextStyle: {
                    padding: [-getSize(2), 0, 0, getSize(0.2)],
                    fontSize: getSize(0.3),
                    color: '#ccc'
                },
                type: 'value',
                max: 12,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(49,150,250,0.5)'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(49,150,250,1)'
                    },
                },
                axisLabel: {
                    show: true,
                    fontSize: getSize(0.3),
                    formatter: function (para) {
                        return parseFloat(rankMax - para);
                    },
                    color: '#cccccc',
                    inverse: true,
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: '',
                type: 'bar',
                barGap: 0,
                barWidth: '30%',
                stack: 'all',
                label: {
                    show: true,
                    position: 'top',
                    formatter: function (para) {
                        return dataArr2[para.dataIndex];
                    },
                    textStyle: {
                        padding: [0, -getSize(0.8), -getSize(0.2), 0],
                        fontSize: getSize(0.3),
                        color: '#f0ff00',
                    },
                    rotate: 90
                },
                itemStyle: {
                    color: 'transparent'
                },
                lineStyle: {
                    color: 'transparent'
                },
                data: palceholderArr,
                silent: true,
                zlevel: 3
            }, {
                name: '得分排名',
                type: 'bar',
                barGap: 0,
                stack: 'all',
                barWidth: '30%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: function (para) {
                        return '第' + parseFloat(rankMax - para.data.value) + '名';
                    },
                    fontSize: getSize(0.3),
                    color: '#fff'
                },
                data: function () {
                    var itemArr = [],
                        item;
                    for (var i = 0; i < dataArr.length; i++) {
                        if (rankMax - dataArr[i] > 3) {
                            item = {
                                value: dataArr[i],
                                label: {
                                    color: '#ffcb00'
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0, //// 0% 处的颜色
                                            color: 'rgba(49,150,250,1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(49,150,250,0.1)'
                                        }
                                        ], false),
                                    }
                                }
                            };
                        } else {
                            item = {
                                value: dataArr[i],
                                label: {
                                    color: '#00ce75'
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0, //// 0% 处的颜色
                                            color: 'rgba(0,206,117,1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0,206,117,0.1)'
                                        }
                                        ], false),
                                    }
                                }
                            };
                        }

                        itemArr.push(item);
                    }
                    return itemArr;
                }()
            }]
        };
        myChart.setOption(option);
    })();

    // bar-15
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-15'));
        var nameArr = [
            '地区生产总值\n(1-6月）',
            '规上工业\n增加值',
            '服务业增加值\n（1-6月）',
            '时尚产业\n增加值',
            '高端装备制造\n产业增加值',
            '固定资产\n投资',
            '生态环境和\n公共建设',
            '高新技术\n产业投资',
            '民间项目\n投资',
            '工业投资',
            '货物出口\n（1-7月）',
            '社会消费品\n零售总额',
            '网络零售额',
            'PM2.5平均\n浓度'
        ].reverse();
        var rankMax = 13;
        var dataArr = [3, 1, 12, 2, 6, 3, 6, 4, 7, 2, 9, 12, 4, 2].reverse().map(function (item) {
            return rankMax - item;
        });
        var option = {
            backgroundColor: '#003f6a',
            grid: {
                top: '10%',
                left: '6%',
                right: '15%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (para) {
                    return para[0].axisValue + ':<br/> 第' + parseFloat(rankMax - para[0].data.value) + '名';
                },
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
            },
            yAxis: [{
                type: 'category',
                zlevel: 1,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: 'rgba(49,150,250,0.5)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: 'rgba(49,150,250,1)'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    lineHeight: getSize(0.3),
                    fontSize: getSize(0.24),
                    color: '#ffffff',
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            xAxis: [{
                name: '单位：名',
                nameLocation: 'end',
                nameTextStyle: {
                    padding: [-getSize(2), 0, 0, -getSize(1)],
                    fontSize: getSize(0.3),
                    color: '#ccc'
                },
                type: 'value',
                max: 12,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(49,150,250,0.5)'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(49,150,250,1)'
                    },
                },
                axisLabel: {
                    show: true,
                    fontSize: getSize(0.3),
                    formatter: function (para) {
                        return parseFloat(rankMax - para);
                    },
                    color: '#cccccc',
                    inverse: true,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
            }],
            series: [{
                name: '绝对值排名',
                type: 'bar',
                barGap: 0,
                barWidth: '50%',
                label: {
                    show: true,
                    position: 'right',
                    formatter: function (para) {
                        return '第' + parseFloat(rankMax - para.data.value) + '名';
                    },
                    fontSize: getSize(0.3),
                    color: '#fff'
                },
                data: function () {
                    var itemArr = [],
                        item;
                    for (var i = 0; i < dataArr.length; i++) {
                        if (rankMax - dataArr[i] > 3) {
                            item = {
                                value: dataArr[i],
                                label: {
                                    color: '#ffcb00'
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0, //// 0% 处的颜色
                                            color: 'rgba(49,150,250,0.1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(49,150,250,1)'
                                        }
                                        ], false),
                                    }
                                }
                            };
                        } else {
                            item = {
                                value: dataArr[i],
                                label: {
                                    color: '#00ce75'
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0, //// 0% 处的颜色
                                            color: 'rgba(0,206,117,0.1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0,206,117,1)'
                                        }
                                        ], false),
                                    }
                                }
                            };
                        }

                        itemArr.push(item);
                    }
                    return itemArr;
                }()
            }]

        };
        myChart.setOption(option);
    })();

    // bar-16
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-16'));
        var dataArr1 = [7, 5, 3, 3, 2];
        var nameArr = ['精神一科', '老年一科', '老年二科', '关爱病区', '心身一科'];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '6%',
                right: '6%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#6688b4'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    margin: getSize(0.2),
                    textStyle: {
                        fontSize: getSize(0.14),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '单位：(件）',
                nameTextStyle: {
                    fontSize: getSize(0.16),
                    color: '#fff',
                    padding: [0, 0, 0, getSize(0.4)]
                },
                min: 0, //坐标轴刻度最小值。
                splitNumber: 4,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#2c5995'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#6688b4'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '', //系列名称
                type: 'bar',
                barWidth: '25%',
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: false,
                    position: 'top',
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.1,
                            color: 'rgba(115, 227, 150, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(28, 192, 200, 1)'
                        }], false),
                        barBorderRadius: [getSize(0.08), getSize(0.08), 0, 0]
                    }
                },
                data: dataArr1
            }]
        };
        myChart.setOption(option);
    })();

    // bar-17
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-17'));
        var dataArr1 = [60, 58, 30, 58, 60, 60, 30, 50];
        var nameArr = ['一支部', '二支部', '三支部', '四支部', '五支部', '六支部', '七支部', '八支部'];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '20%',
                left: '8%',
                right: '8%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: false,
                    lineStyle: {
                        color: '#6688b4'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    show: true,
                    margin: getSize(0.2),
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                // name: '单位：(件）',
                // nameTextStyle: {
                //     fontSize: getSize(0.16),
                //     color: '#fff',
                //     padding: [0, 0, 0, getSize(0.4)]
                // },
                min: 0, //坐标轴刻度最小值。
                splitNumber: 4,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#2c5995'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: false,
                    lineStyle: {
                        color: '#6688b4'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: false,
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '', //系列名称
                type: 'bar',
                barWidth: '20%',
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.1,
                            color: 'rgba(255, 89, 161, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 89, 161, 0.5)'
                        }], false),
                        borderWidth: 1,
                        borderColor: '#fff',
                        barBorderRadius: [getSize(0.1), getSize(0.1), 0, 0]
                    }
                },
                data: dataArr1
            }]
        };
        myChart.setOption(option);
    })();

    // bar-18
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-18'));
        var nameArr = ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6'].reverse();
        var categoryArr = ['绿灯总数', '黄灯总数', '红灯总数'];
        var colorArr = ['#0fb050', '#ff9e00', '#e73f3f'];
        var seriesArr = [];
        for (var index = 0; index < categoryArr.length; index++) {
            seriesArr.push({
                type: 'bar',
                barWidth: '40%',
                stack: '办件效率',
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    }
                },
                itemStyle: {
                    color: colorArr[index],
                    barBorderRadius: [0, getSize(0.03), getSize(0.03), 0],
                    shadowBlur: getSize(0.03),
                    shadowColor: colorArr[index]
                },
                data: [150, 200, 250, 300, 350, 400]
            });
        }
        var option = {
            backgroundColor: '#0b112a',
            color: ['rgba(12,249,255,0.38)'],
            grid: {
                show: true,
                top: '10%',
                left: '8%',
                right: '10%',
                bottom: '10%',
                containLabel: true,
                borderWidth: 0,
                backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,222,225,0)'
                }, {
                    offset: 1,
                    color: 'rgba(0,222,225,0.1)'
                }], false)
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                },
                formatter: '{b}<br>{c}次'
            },
            xAxis: [{
                type: 'value',
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#41a1eb'
                    },
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: 'rgba(68,86,108,0.6)'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    margin: getSize(0.15),
                    fontSize: getSize(0.16),
                    fontFamily: 'DIN Medium',
                    color: '#fff'
                },
                axisTick: {
                    show: false,
                },
            }],
            yAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#41a1eb'
                    },
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(68,86,108,0.6)'
                    }
                },
                axisLabel: {
                    show: true,
                    margin: getSize(0.15),
                    color: '#fff',
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            series: seriesArr

        };
        myChart.setOption(option);
    })();

    // bar-19
    void (function () {
        var myChart = echarts.init(document.getElementById('bar-19'));
        var dataArr1 = [1300, 1800, 2200, 1800, 2500, 2200];
        var dataArr2 = [4, 4.5, 6.5, 6, 8.5, 5];
        var xArr = ['8月', '9月', '10月', '11月', '12月', '1月'];
        var categoryArr = ['会议通知数（个）', '平均签收时间（分钟）'];
        var seriesObj = [{
            type: 'bar',
            name: categoryArr[0],
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: [getSize(0.05), getSize(0.05), 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#28d5cf'
                        },
                        {
                            offset: 1,
                            color: '#81ea88'
                        }
                    ])
                }
            },
            data: dataArr1
        }, {
            type: 'line',
            name: categoryArr[1],
            smooth: false,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: getSize(0.08),
            lineStyle: {
                normal: {
                    color: "#58e7ff",
                }
            },
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: "#fef123"
                }
            },
            yAxisIndex: 1,
            data: dataArr2
        }]

        var option = {
            backgroundColor: '#0b112a',
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '25%',
                left: '6%',
                right: '6%',
                bottom: '12%',
                containLabel: true,
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: {
                    margin: getSize(0.15),
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{
                type: 'value',
                name: categoryArr[0],
                nameTextStyle: {
                    padding: [0, -getSize(0.1), getSize(0.1), 0],
                    fontSize: getSize(0.14),
                    fontFamily: 'DIN Medium',
                    color: '#fff'
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(80,102,138,0.8)'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.15),
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    },
                },
                axisTick: {
                    show: false,
                },
            }, {
                type: 'value',
                name: categoryArr[1],
                nameTextStyle: {
                    padding: [0, getSize(0.6), getSize(0.1), 0],
                    fontSize: getSize(0.14),
                    fontFamily: 'DIN Medium',
                    color: '#fff'
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#27628d'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.15),
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // pictorialBar-1
    void (function () {
        var myChart = echarts.init(document.getElementById('pictorialBar-1'));
        var maxData = 800;
        var myData = [320, 650, 230];
        var option = {
            backgroundColor: '#0b112a',
            xAxis: {
                show: false,
                splitLine: {
                    show: false
                },
                offset: 10,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    margin: 10
                }
            },
            yAxis: {
                data: ['两办', '市直', '区县'],
                inverse: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                }
            },
            grid: {
                left: '20%',
                top: '4%',
                right: '40%',
                bottom: '4%',
            },
            series: [{
                name: 'showData',
                type: 'pictorialBar',
                symbolRepeat: true,
                symbolSize: ['14px', '26px'],
                barCategoryGap: '10%',
                symbolClip: true,
                data: [{
                    value: myData[0],
                    symbol: 'image://assets/img/people-blue.png'
                }, {
                    value: myData[1],
                    symbol: 'image://assets/img/people-orange.png'
                }, {
                    value: myData[2],
                    symbol: 'image://assets/img/people-green.png'
                }],
            }, {
                name: 'fullData',
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                symbolRepeat: true,
                symbolSize: ['16px', '28px'],
                barCategoryGap: '10%',
                animationDuration: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return myData[params.dataIndex] + '人' + ' 占比' + (myData[params.dataIndex] / maxData * 100).toFixed(0) + '%'
                        },
                        position: 'right',
                        offset: [5, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                data: [{
                    value: maxData,
                    symbol: 'image://assets/img/people-blue.png'
                }, {
                    value: maxData,
                    symbol: 'image://assets/img/people-orange.png'
                }, {
                    value: maxData,
                    symbol: 'image://assets/img/people-green.png'
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // pictorialBar-2
    void (function () {
        var myChart = echarts.init(document.getElementById('pictorialBar-2'));
        var option = {
            backgroundColor: '#0b112a',
            title: {
                text: '2018年系统运行情况',
                top: 0,
                x: 'center',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#fff'
                }
            },
            grid: {
                top: '15%',
                left: '3%',
                right: '3%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ['中央精神', '中央文电', '省委文电', '深改', '督察督办'],
            }],
            yAxis: [{
                name: '单位：个',
                nameTextStyle: {
                    color: '#fff'
                },
                type: 'value',
                max: '5000',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: {
                name: '2018年系统运行情况',
                type: 'pictorialBar',
                barWidth: '18',
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{c}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'image://assets/img/canvas-bar.png',
                symbolRepeat: false,
                data: [2300, 3780, 2189, 1880, 1789]
            }

        };
        myChart.setOption(option);
    })();

    // pictorialBar-3
    void (function () {
        var myChart = echarts.init(document.getElementById('pictorialBar-3'));
        var option = {
            backgroundColor: '#0b112a',
            title: {
                text: '2018年系统运行情况',
                top: 0,
                x: 'center',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#fff'
                }
            },
            grid: {
                top: '15%',
                left: '5%',
                right: '15%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                }
            },
            xAxis: [{
                type: 'value',
                name: '单位：个',
                nameTextStyle: {
                    color: '#fff'
                },
                nameGap: 30,
                nameRotate: 270,
                splitLine: {
                    show: false,
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            yAxis: [{
                type: 'category',
                boundaryGap: true,
                max: '5000',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ['业务类型', '业务类型', '业务类型', '业务类型', '业务类型']
            }],
            series: {
                name: '2018年系统运行情况',
                type: 'pictorialBar',
                barWidth: '18',
                label: {
                    show: false,
                },
                symbol: 'image://assets/img/canvas-bar2.png',
                symbolRepeat: false,
                data: [1200, 1780, 2689, 3580, 3800]
            }

        };
        myChart.setOption(option);
    })();

    // pictorialBar-4
    void (function () {
        var myChart = echarts.init(document.getElementById('pictorialBar-4'));
        var option = {
            backgroundColor: '#000',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
                formatter: function (item) {
                    return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data;
                },
            },
            legend: {
                top: '5%',
                textStyle: {
                    color: '#fff',
                },
                data: ['2015', '2016'],
            },
            grid: {
                top: '20%',
                right: 20,
                left: 50,
                bottom: 30,
            },
            xAxis: [
                {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#FFFFFF',
                        fontSize: 12,
                        interval: 0,
                    },
                },
                {
                    type: 'category',
                    show: true,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                        interval: 0,
                        margin: 10,
                        color: '#fff',
                        fontSize: '10',
                    },
                    data: [120, 200, 150, 80, 70, 110, 130],
                },
            ],
            yAxis: [
                {
                    //scale:true,
                    // min: function(item){
                    // 	return parseInt(item.min / 10) * 10
                    // },
                    max: 200,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF',
                        },
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFFFFF',
                        },
                        // formatter: function(value){
                        //   return parseInt(value * 100) + '%'
                        // },
                    },
                },
            ],
            series: [
                {
                    name: '2015',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        color: '#10bffc',
                    },
                    symbolRepeat: true,
                    symbolSize: [14, 4],
                    // symbolBoundingData: 100,
                    symbolMargin: 2,
                    symbolPosition: 'start',
                    z: -20,
                    barGap: '10%',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                },
                {
                    name: '2016',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    barGap: '10%',
                    itemStyle: {
                        color: '#f30',
                    },
                    symbolRepeat: true,
                    symbolSize: [14, 4],
                    // symbolBoundingData: 100,
                    symbolMargin: 2,
                    symbolPosition: 'start',
                    z: -20,
                    data: [120, 200, 150, 120, 70, 110, 130],
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                },
            ],
        };

        myChart.setOption(option);
    })();

    // line-1
    void (function () {
        Highcharts.chart('line-1', {
            chart: {
                type: 'areaspline',
                margin: [50, 20, 30, 60]
            },
            title: {
                text: '近半年垃圾清运情况',
                align: 'center'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '1月', '2月', '3月', '4月', '5月', '6月', '7月'
                ],
                dashStyle: 'dot',
                labels: {
                    rotation: 0
                }
            },
            yAxis: {
                align: 'center',
                gridLineColor: '#3E3E3E',
                max: 40,
                min: -40,
                minTickInterval: 20,
                minorTickInterval: 20,
                gridLineDashStyle: 'dot',
                title: {
                    text: '(吨)',
                    rotation: 0,
                    x: 25,
                    y: -40,
                },
            },
            tooltip: {
                shared: true,
                valueSuffix: ' 单位'
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: '小张',
                tickPixelInterval: 40,
                marker: {
                    radius: 2
                },
                data: [13, 14, 13, -15, 8, 10, 18],
                zones: [{
                    value: 0,
                    color: '#FF7E00',
                }, {
                    color: '#00E400'
                },]
            }]
        });
    })();

    // line-2
    void (function () {
        var myChart = echarts.init(document.getElementById('line-2'));
        var dataArr = [1000, 1200, 1700, 1250, 1200, 1850, 1800];
        var xArr = ['10月11日', '10月12日', '10月13日', '10月14日', '10月15日', '10月16日', '10月17日']
        var seriesObj = {
            name: '实时调用量', //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'emptyCircle', //标记的图形。
            symbolSize: 6, //标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#00d7fe", // 线条颜色
                    shadowOffsetY: 0,
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#00d7fe",
                }
            },
            tooltip: { //提示框
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, //// 0% 处的颜色
                        color: 'rgba(0,188,196,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,188,196, 0)'
                    }
                    ], false),
                    shadowColor: 'rgba(0,188,196,0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: dataArr
        };
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '18%',
                left: '4%',
                right: '4%',
                bottom: '6%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#707e84'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '(次)',
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 38, 0, 0]
                },
                margin: 10,
                minInterval: 500,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#707e84'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-3
    void (function () {
        var myChart = echarts.init(document.getElementById('line-3'));
        var dataArr1 = [15, 20, 40, 20];
        var dataArr2 = dataArr1.map(function (a) {
            return a + 10;
        });
        var dataArr3 = dataArr1.map(function (a) {
            return a + 20;
        });
        var legendArr = ['企业运行指数', '发展环境指数', '生产经营指数'];
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                top: '5%',
                itemGap: 5,
                data: legendArr,
                textStyle: {
                    color: '#fff'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '8%',
                right: '8%',
                bottom: '0',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                        margin: 15,
                    },
                    rotate: '15',
                    margin: 30,
                    align: 'center'
                },
                axisTick: {
                    show: true,
                },
                data: ['2018年第二季度', '2018年第三季度', '2018年第四季度', '2019年第一季度'],
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                minInterval: 2,
                nameGap: 10,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    formatter: function (para) {
                        var v = Math.ceil(para);
                        return v + '.0';
                    },
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: true,
                },
            }],
            series: [{
                name: '企业运行指数', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#0cf9ff", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#2c82f4",
                    }
                },
                data: dataArr1
            }, {
                name: '发展环境指数', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#2c82f4", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#2c82f4",
                    }
                },
                data: dataArr2
            }, {
                name: '生产经营指数', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#febf00", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#febf00",
                    }
                },
                data: dataArr3
            },]
        };
        myChart.setOption(option);
    })();

    // line-4
    void (function () {
        var myChart = echarts.init(document.getElementById('line-4'));
        var xArr = [];
        var yArr = [];
        var index;
        for (var i = 0; i < 30; i++) {
            if (i < 10) {
                index = '0' + i;
            } else {
                index = i;
            }
            xArr.push('10-' + index);
            yArr.push((Math.random() * (2000 - 1000 + 1) + 1000).toFixed(0));
        }
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '20%',
                left: '4%',
                right: '4%',
                bottom: '10%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    color: '#fff',
                    margin: 10,
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: xArr
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                name: '（条）',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    padding: [0, 30, 0, 0]
                },
                type: 'value', ////直角坐标系 grid 中的 x 轴
                minInterval: 500,
                splitLine: {
                    show: false
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    formatter: function (para) {
                        return para;
                    },
                    color: '#fff',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '企业运行指数', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                symbol: 'circle',
                symbolSize: 0,
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: 'rgba(0, 255, 163, 0.1)'
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //// 0% 处的颜色
                            color: 'rgba(0, 255, 163, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 163, 0.1)'
                        }
                        ], false),
                    }
                },
                data: yArr
            }]
        };
        myChart.setOption(option);
    })();

    // line-5
    void (function () {
        // 初始化实例
        var line_1 = echarts.init(document.getElementById('line-5'));
        var percentArr = [];
        var dataArr = [50, 50, 100, 150, 200, 250, 250];
        var maxData = 0;
        for (var i = 0; i < dataArr.length; i++) {
            maxData += dataArr[i];
        }
        for (var j = 0; j < dataArr.length; j++) {
            var percent = (dataArr[j] / maxData * 100).toFixed(0) + '%';
            percentArr.push(percent)
        };
        var option = {
            backgroundColor: '#003f6a',
            title: {
                text: '{a|兰溪市GDP增长趋势}',
                x: 'center',
                textStyle: {
                    rich: {
                        a: {
                            fontWeight: 'normal',
                            fontSize: 14,
                            lineHeight: 24,
                            color: "#fff",
                        },
                    }
                }
            },
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                formatter: "{a} <br/>{b} : {c}",
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#00d0ff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                splitNumber: 0, //坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#018aac',
                        type: 'dashed'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: false,
                    lineStyle: {
                        color: '#2e466e'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },

            }],
            series: [{
                name: '兰溪市GDP增长趋势', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 0, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#00d7fe", // 线条颜色
                        shadowOffsetY: 2,
                        shadowColor: '#062252',
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: false,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#00d7fe",
                    }
                },
                tooltip: { //提示框
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //// 0% 处的颜色
                            color: '#00bdcc'
                        },
                        {
                            offset: 1,
                            color: '#014e74'
                        }
                        ], false),
                        shadowColor: '#017c8d', //阴影颜色
                        shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                data: dataArr
            }]
        };
        line_1.setOption(option);
    })();

    // line-6
    void (function () {
        var myChart = echarts.init(document.getElementById('line-6'));
        var option = {
            backgroundColor: '#010c23',
            color: ['#1895ba', '#0151c0', '#a3050e'],
            grid: {
                top: '30%',
                left: '5%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                }
            },
            legend: {
                right: 20,
                top: '5%',
                itemGap: 20,
                itemWidth: 22,
                itemHeight: 8,
                data: [{
                    name: '接收率',
                    icon: 'rect',
                },
                {
                    name: '反馈率',
                    icon: 'rect',
                },
                {
                    name: '办结率',
                    icon: 'rect',

                }
                ],
                textStyle: {
                    color: '#fff',
                },
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018',],
            }],
            yAxis: [{
                name: '单位：百分比',
                nameTextStyle: {
                    color: '#fff'
                },
                type: 'value',
                max: '100',
                minInterval: 20,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#39627d'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: '接收率',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1895ba'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0, 0)'
                        }
                        ], false),
                    }
                },
                data: [10, 18, 26, 38, 35, 45, 55]
            },
            {
                name: '反馈率',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0151c0'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0, 0)'
                        }
                        ], false),
                    }
                },
                data: [20, 28, 36, 48, 45, 55, 65]
            },
            {
                name: '办结率',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#a3050e'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0, 0)'
                        }
                        ], false),
                    }
                },
                data: [30, 38, 46, 58, 55, 65, 75]
            }
            ]

        };
        myChart.setOption(option);
    })();

    // line-7
    void (function () {
        var myChart = echarts.init(document.getElementById('line-7'));
        var dataArr = [0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0];
        var nameArr = [];

        for (var i = 0; i < 12; i++) {
            nameArr.push(i + 1 + '月');
        }

        var option = {
            toolbox: {
                show: true,
                right: '5%',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    magicType: {
                        type: ['line', 'bar'],
                    },
                    restore: {},
                    saveAsImage: {}
                },
                emphasis: {
                    iconStyle: {
                        color: '#de4b19',
                        borderColor: '#de4b19'
                    }
                }
            },
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                backgroundColor: 'rgba(214,225,247,0.75)',
                textStyle: {
                    fontSize: 16,
                    lineHeight: 32,
                    color: '#333333'
                },
                extraCssText: 'border-radius: 6px; padding: 5px 12px;'
            },
            grid: { //直角坐标系
                top: '10%',
                left: '5%',
                right: '5%',
                bottom: '10%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: { //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#f2f2f2'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#f2f2f2'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: 18,
                        color: '#666666'
                    },
                },
                axisTick: {
                    show: false,
                },
                data: nameArr,
            },
            yAxis: { //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                minInterval: 2,
                maxInterval: 2,
                max: 14,
                nameGap: 10,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#f2f2f2'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#f2f2f2'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    formatter: function (para) {
                        return para + '%';
                    },
                    textStyle: {
                        fontSize: 18,
                        color: '#666666',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            },
            series: {
                name: '效率统计', //系列名称
                type: 'line',
                symbol: 'none',
                lineStyle: { //线条样式。
                    normal: {
                        color: "#da3700", // 线条颜色
                    },
                },
                data: dataArr,
                connectNulls: true
            }
        };
        myChart.setOption(option);
    })();

    // line-8
    void (function () {
        var myChart = echarts.init(document.getElementById('line-8'));
        var dataArr1 = [];
        for (var i = 0; i < 12; i++) {
            dataArr1.push(Math.floor(Math.random() * (40 - 20) + 20));
        }
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '4%',
                right: '4%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                // nameGap: getSize(0.1),
                // name: '(月份)',
                // nameLocation: 'start',
                // nameTextStyle: {
                //     padding: [getSize(0.3), getSize(0.1), 0, 0],
                //     fontSize: getSize(0.12),
                //     color: '#fff'
                // },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.1),
                        color: '#fff',
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                nameGap: getSize(0.1),
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#464d64'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    fontSize: getSize(0.11),
                    color: '#fff',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [{
                name: '预警数据', //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 0, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "transparent", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "transparent",
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //// 0% 处的颜色
                            color: 'rgba(195,57,50,1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(195,57,50,0.4)'
                        }
                        ], false),
                    }
                },
                data: dataArr1
            }]
        };
        myChart.setOption(option);
    })();

    // line-9
    void (function () {
        var myChart = echarts.init(document.getElementById('line-9'));
        var dataArr1 = [];
        var dataArr2 = [];
        for (var i = 0; i < 12; i++) {
            dataArr1.push(Math.floor(Math.random() * (5000 - 2000) + 10000));
            dataArr2.push(Math.floor(Math.random() * (40 - 10) + 10));
        }
        var legendArr = ['转化金额（亿元）', '转化率'];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                top: '5%',
                itemGap: getSize(0.5),
                data: legendArr,
                itemWidth: getSize(0.6),
                textStyle: {
                    color: '#fff'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '4%',
                right: '4%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                nameGap: getSize(0.1),
                name: '(月份)',
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [getSize(0.3), getSize(0.1), 0, 0],
                    fontSize: getSize(0.12),
                    color: '#fff'
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#464d64'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#fff',
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                nameGap: getSize(0.1),
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#464d64'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#09b3c1'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    fontSize: getSize(0.12),
                    color: '#fff',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }, { //直角坐标系 grid 中的 y 轴
                type: 'value',
                nameGap: getSize(0.1),
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#09b3c1'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    show: true,
                    fontSize: getSize(0.12),
                    color: '#fff',
                    formatter: function (param) {
                        return param + '.00%';
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: legendArr[0], //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#2243ec", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#2243ec",
                    }
                },
                data: dataArr1
            }, {
                name: legendArr[1], //系列名称
                type: 'line',
                yAxisIndex: 1,
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#c962b8", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#c962b8",
                    }
                },
                data: dataArr2
            }]
        };
        myChart.setOption(option);
    })();

    // line-10
    void (function () {
        var myChart = echarts.init(document.getElementById('line-10'));
        var dataArr1 = [];
        var dataArr2 = [];
        for (var i = 0; i < 12; i++) {
            dataArr1.push(Math.floor(Math.random() * (5000 - 2000) + 10000));
            dataArr2.push(Math.floor(Math.random() * (9000 - 1000) + 3000));
        }
        var legendArr = ['新增项目数', '新增投资额'];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                top: '5%',
                itemGap: getSize(0.5),
                data: legendArr,
                itemWidth: getSize(0.1),
                itemHeight: getSize(0.1),
                textStyle: {
                    color: '#fff'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '4%',
                right: '4%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                nameGap: getSize(0.1),
                name: '(月份)',
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [getSize(0.3), getSize(0.1), 0, 0],
                    fontSize: getSize(0.12),
                    color: '#fff'
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#464d64'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#fff',
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                min: 0, //坐标轴刻度最小值。
                nameGap: getSize(0.1),
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        color: '#464d64'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#09b3c1'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    fontSize: getSize(0.12),
                    color: '#fff',
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }, { //直角坐标系 grid 中的 y 轴
                type: 'value',
                nameGap: getSize(0.1),
                splitNumber: 5,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#09b3c1'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    show: true,
                    fontSize: getSize(0.12),
                    color: '#fff',
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: legendArr[0], //系列名称
                type: 'line',
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'rect', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#ffc90c", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#ffc90c",
                    }
                },
                data: dataArr1
            }, {
                name: legendArr[1], //系列名称
                type: 'line',
                yAxisIndex: 1,
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'rect', //标记的图形。
                symbolSize: 6, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#0cf9ff", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#0cf9ff",
                    }
                },
                data: dataArr2
            }]
        };
        myChart.setOption(option);
    })();

    // line-11
    void (function () {
        var myChart = echarts.init(document.getElementById('line-11'));
        var rankArr = [7, 3, 4, 3, 6, 6, 5, 4, 1, 1];
        var placeHolderArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var labelArr = [96.22, 95, 96.0, 98.9, 97.95, 99.74, 95, 99.69, 100, 100];
        var xArr = ['清洁城区', '序化街面', '市政设施管理', '河道管理', '亮化管理', '停车管理', '广告监管', '市民投诉', '执法业务', '城管队伍'];
        var seriesObj = [
            {
                name: '排名', //系列名称
                type: 'line',
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: true,
                    formatter: function (para) {
                        return '第' + rankArr[para.dataIndex] + '名';
                    },
                    position: 'bottom',
                    textStyle: {
                        padding: [-getSize(1.5), 0, 0, 0],
                        fontSize: getSize(0.18),
                        color: '#fff',
                    }
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: 'rgba(49,149,249,1)'
                    }
                },
                data: placeHolderArr,
                z: 100,
                silent: true,
                tooltip: { //提示框组件
                    show: false
                }
            }, {
                name: '当月得分', //系列名称
                type: 'bar',
                barWidth: '25%',
                stack: 'one',
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: true,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        fontSize: getSize(0.36),
                        color: '#facc14',
                    }
                },
                itemStyle: { //折线拐点标志的样式。                
                    normal: {
                        color: 'rgba(49,150,250,1)'
                    }
                },
                data: labelArr
            },
            {
                name: '考核目标值', //系列名称
                type: 'line',
                smooth: false, //是否平滑曲线显示
                // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'circle', //标记的图形。
                symbolSize: 0, //标记的大小
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: false,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        fontSize: getSize(0.36),
                        color: '#facc14',
                    }
                },
                itemStyle: { //折线拐点标志的样式。                
                    normal: {
                        color: 'rgba(0,255,0,0.8)'
                    }
                },
                data: labelArr
            }
        ];
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: true,
                itemWidth: getSize(0.4),
                itemHeight: getSize(0.2),
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                }
            },
            grid: { //直角坐标系
                top: '30%',
                left: '4%',
                right: '4%',
                bottom: '10%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                margin: getSize(0.1),
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.2),
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                // name: '单位：万人',
                // nameTextStyle: {
                //     fontSize: getSize(0.24),
                //     color: '#cccccc',
                //     padding: [0, getSize(0.3), 0, 0]
                // },
                // minInterval: 15,
                // margin: getSize(0.1),
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(27,92,155,1)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: false,
                    lineStyle: {
                        color: 'rgba(27,92,155,1)'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: false,
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        color: '#cccccc',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-12
    void (function () {
        var myChart = echarts.init(document.getElementById('line-12'));
        var dataArr = [305, 305, 395, 440, 440, 314.06];
        var xArr = ['2013', '2014', '2015', '2016', '2017', '2019']
        var seriesObj = {
            name: '地区生产总值', //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'circle', //标记的图形。
            symbolSize: 6, //标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#00d7fe", // 线条颜色
                    shadowOffsetY: 0,
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#cccccc',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#21cee1",
                }
            },
            tooltip: { //提示框
                show: true
            },
            data: dataArr
        };
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '22%',
                left: '4%',
                right: '4%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                margin: getSize(0.1),
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.24),
                        color: '#cccccc',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '单位：亿元',
                nameTextStyle: {
                    fontSize: getSize(0.24),
                    color: '#cccccc',
                    padding: [0, getSize(0.3), 0, 0]
                },
                margin: getSize(0.1),
                minInterval: 200,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#3196fa'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        fontSize: getSize(0.24),
                        color: '#cccccc',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    void (function () {
        var myChart = echarts.init(document.getElementById('line-13'));
        var dataArr = [];
        var xArr = [];
        for (var i = 0; i < 12; i++) {
            dataArr.push(Math.floor(Math.random() * 2) + 5);
            xArr.push((i + 1) + '月');
        }
        var seriesObj = {
            name: '', //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'circle', //标记的图形。
            symbolSize: 6, //标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#00d7fe", // 线条颜色
                    shadowOffsetY: 0,
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#cccccc',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#21cee1",
                }
            },
            tooltip: { //提示框
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, //// 0% 处的颜色
                        color: 'rgba(0,188,196,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,188,196, 0)'
                    }
                    ], false),
                    shadowColor: 'rgba(0,188,196,0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: dataArr
        };
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            title: {
                x: 'center',
                top: '5%',
                text: '2019年税收月收入趋势',
                textStyle: {
                    fontSize: getSize(0.36),
                    fontWeight: 'normal',
                    color: '#cccccc'
                }
            },
            grid: { //直角坐标系
                top: '30%',
                left: '4%',
                right: '4%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                margin: getSize(0.1),
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.2),
                        color: '#cccccc',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '单位：亿元',
                nameTextStyle: {
                    fontSize: getSize(0.24),
                    color: '#cccccc',
                    padding: [0, getSize(0.3), 0, 0]
                },
                margin: getSize(0.1),
                splitNumber: 5,
                max: 12,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#3196fa'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    margin: 10, //刻度标签与轴线之间的距离。
                    textStyle: {
                        fontSize: getSize(0.24),
                        color: '#cccccc',
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-14
    void (function () {
        var myChart = echarts.init(document.getElementById('line-14'));
        var dataArr1 = [130, 80, 68, 55, 45];
        var nameArr = ['精神一科', '老年一科', '老年二科', '关爱病区', '心身一科'];
        var option = {
            backgroundColor: '#003f6a',
            color: [],
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: { //直角坐标系
                top: '15%',
                left: '4%',
                right: '10%',
                bottom: '8%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#6688b4'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    margin: getSize(0.2),
                    textStyle: {
                        fontSize: getSize(0.14),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: nameArr
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                // name: '单位：(件）',
                // nameTextStyle: {
                //     fontSize: getSize(0.16),
                //     color: '#fff',
                //     padding: [0, 0, 0, getSize(0.4)]
                // },                
                min: 0, //坐标轴刻度最小值。
                splitNumber: 4,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#2c5995'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#6688b4'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    textStyle: {
                        fontSize: getSize(0.16),
                        color: '#fff',
                        fontFamily: "DIN Medium",
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }],
            series: [
                {
                    name: '', //系列名称
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                    symbol: 'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                    showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                    symbol: 'emptyCircle', //标记的图形。
                    symbolSize: getSize(0.08), //标记的大小
                    lineStyle: { //线条样式。
                        normal: {
                            color: "#00d7fe", // 线条颜色
                            shadowOffsetY: 2,
                            shadowColor: '#062252',
                        },
                    },
                    label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                        show: true,
                        position: 'top',
                        textStyle: {
                            padding: [0, 0, 0, getSize(0.2)],
                            fontFamily: "DIN Medium",
                            fontSize: getSize(0.16),
                            color: '#fff',
                        }
                    },
                    itemStyle: { //折线拐点标志的样式。
                        normal: {
                            color: "#00d7fe",
                        }
                    },
                    tooltip: { //提示框
                        show: true
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, //// 0% 处的颜色
                                color: '#00bdcc'
                            },
                            {
                                offset: 1,
                                color: '#014e74'
                            }
                            ], false),
                            shadowColor: '#017c8d', //阴影颜色
                            shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: dataArr1
                }
            ]
        };
        myChart.setOption(option);
    })();

    // line-15
    void (function () {
        var myChart = echarts.init(document.getElementById('line-15'));
        var dataArr1 = [65, 40, 70, 58, 65, 52, 45, 85, 35, 40];
        var dataArr2 = [650, 400, 700, 580, 650, 525, 450, 850, 350, 400];
        var xArr = ['市政府办公室', '市委编办', '市人力社保局', '市委办公室', '市教育局', '市财政局', '市委组织部', '市公安分局', '市公安分局', '市公安分局']
        var seriesObj = [{
            name: '办件效率（%）',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'image://assets/img/line-point.png',
            symbolSize: getSize(0.2),
            lineStyle: {
                normal: {
                    color: "#e3bc10",
                },
            },
            label: {
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#cccccc',
                }
            },
            itemStyle: {
                normal: {
                    color: "#e3bc10",
                }
            },
            yAxisIndex: 1,
            data: dataArr1
        }, {
            type: 'bar',
            name: '办件量（件）',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: 100,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00ddf3'
                        },
                        {
                            offset: 1,
                            color: '#0079ff'
                        }
                    ])
                }
            },
            data: dataArr2
        }]

        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '20%',
                left: '4%',
                right: '4%',
                bottom: '4%',
                containLabel: true,
            },
            legend: {
                x: 'center',
                top: '6%',
                data: [
                    { name: '办件量（件）', icon: 'image://assets/img/legend-bar.png' },
                    { name: '办件效率（%）', icon: 'image://assets/img/legend-line.png' }
                ],
                textStyle: {
                    fontSize: getSize(0.14),
                    color: '#fff'
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: {
                    margin: getSize(0.3),
                    textStyle: {
                        padding: [0, -getSize(0.2), 0, 0],
                        fontSize: getSize(0.12),
                        color: '#fff'
                    },
                    rotate: 45
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{
                type: 'value',
                minInterval: 200,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#27628d'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.1),
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#7da9bf',
                    },
                },
                axisTick: {
                    show: false,
                },
            }, {
                type: 'value',
                minInterval: 20,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#27628d'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.1),
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#7da9bf',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-16
    void (function () {
        var myChart = echarts.init(document.getElementById('line-16'));
        var dataArr = [250, 400, 600, 750, 600, 300, 450, 750, 800, 936, 800, 200];
        var xArr = [];
        for (var i = 1; i <= 12; i++) {
            xArr.push(i + '月');
        }
        var seriesObj = [{
            name: '年度办件',
            type: 'line',
            smooth: true,
            showSymbol: false,
            showAllSymbol: false,
            lineStyle: {
                normal: {
                    color: 'rgba(7,219,137,1)',
                    shadowColor: 'rgba(7,219,137,1)',
                    shadowBlur: getSize(0.1),
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(7,219,137,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(7,219,137,0.1)'
                    }], false),
                }
            },
            label: {
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#cccccc',
                }
            },
            data: dataArr
        }]

        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: '{c}件'
            },
            grid: {
                top: '18%',
                left: '5%',
                right: '5%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: {
                    margin: getSize(0.1),
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#fff'
                    },
                },
                axisTick: {
                    show: true,
                    inside: true
                },
                data: xArr,
            }],
            yAxis: [{
                type: 'value',
                name: '单位(件)',
                nameTextStyle: {
                    padding: [0, getSize(0.4), getSize(0.1), 0],
                    fontSize: getSize(0.12),
                    color: '#fff'
                },
                minInterval: 200,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#27628d'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.1),
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#7da9bf',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-17
    void (function () {
        var myChart = echarts.init(document.getElementById('line-17'));
        var dataArr = [];
        var pointArr = [];
        var xArr = [];
        var value;
        for (var i = 1; i <= 12; i++) {
            value = parseFloat((Math.random() * (60)).toFixed(1) + 10)
            dataArr.push(value);
            xArr.push(i + '月');
            pointArr.push({
                name: i + '月'
            })
        }
        var seriesObj = [{
            name: '年度办件',
            type: 'line',
            smooth: true,
            showSymbol: false,
            showAllSymbol: false,
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#13f7ff' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#7f53ff' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(30,59,138,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(30,59,138,0.1)'
                    }], false),
                }
            },
            label: {
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    margin: 0,
                    padding: [getSize(0.04), getSize(0.05), 0],
                    fontSize: getSize(0.12),
                    color: '#ffffff',
                    height: getSize(0.26),
                    lineHeight: getSize(0.26),
                    backgroundColor: '#26d2fa',
                    borderRadius: getSize(0.08)
                }
            },
            markPoint: {
                data: pointArr
            },
            data: dataArr
        }]

        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: false
                    }
                },
                showContent: false
            },
            grid: {
                top: '15%',
                left: '4%',
                right: '5%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    },
                },
                axisLabel: {
                    margin: getSize(0.1),
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#d5e7fb'
                    },
                },
                axisTick: {
                    show: true,
                    inside: true
                },
                data: xArr,
            }],
            yAxis: [{
                type: 'value',
                name: '市政务完成率(%)',
                nameTextStyle: {
                    padding: [0, 0, 0, getSize(0.1)],
                    fontSize: getSize(0.12),
                    color: '#fff'
                },
                max: 100,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#27628d'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3196fa'
                    }
                },
                axisLabel: {
                    margin: getSize(0.1),
                    formatter: function (para) {
                        return para + '%';
                    },
                    textStyle: {
                        fontSize: getSize(0.12),
                        color: '#d5e7fb',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: seriesObj
        };
        myChart.setOption(option);
    })();

    // line-18
    void (function () {
        var myChart = echarts.init(document.getElementById('line-18'));
        var dataArr1 = [320, 420, 400, 430, 450, 480];
        var dataArr2 = [100, 260, 250, 300, 240, 310];
        var dataArr3 = [58, 60, 40, 60, 70, 82];
        var xArr = ['8月', '9月', '10月', '11月', '12月', '1月'];
        var legendArr = ['好评数', '差评数', '好评率'];
        var option = {
            backgroundColor: '#003f6a',
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                top: '5%',
                itemGap: getSize(0.5),
                data: legendArr,
                itemWidth: getSize(0.4),
                textStyle: {
                    fontFamily: 'simhei',
                    fontSize: getSize(0.14),
                    color: '#fff'
                }
            },
            grid: { //直角坐标系
                show: true,
                top: '25%',
                left: '5%',
                right: '5%',
                bottom: '10%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
                borderWidth: 0,
                backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,222,225,0)'
                }, {
                    offset: 1,
                    color: 'rgba(0,222,225,0.1)'
                }], false)
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#41a1eb'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    margin: getSize(0.15),
                    textStyle: {
                        fontSize: getSize(0.16),
                        fontFamily: 'DIN Medium',
                        color: '#fff'
                    },
                    align: 'center'
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: [{ //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#464d64'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: true,
                    lineStyle: {
                        color: '#41a1eb'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    margin: getSize(0.15),
                    fontSize: getSize(0.16),
                    fontFamily: 'DIN Medium',
                    color: '#fff'
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            }, { //直角坐标系 grid 中的 y 轴
                type: 'value',
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#6b85a3'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#09b3c1'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    show: true,
                    margin: getSize(0.15),
                    fontSize: getSize(0.16),
                    fontFamily: 'DIN Medium',
                    color: '#fff',
                    formatter: function (param) {
                        return param + '%';
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: legendArr[0], //系列名称
                type: 'line',
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 7, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#5da673", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#5da673",
                    }
                },
                data: dataArr1
            }, {
                name: legendArr[1], //系列名称
                type: 'line',
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 7, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#0c89c3", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#0c89c3",
                    }
                },
                data: dataArr2
            }, {
                name: legendArr[2], //系列名称
                type: 'line',
                yAxisIndex: 1,
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'emptyCircle', //标记的图形。
                symbolSize: 7, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: "#fb696a", // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    normal: {
                        position: 'top',
                        distance: '5',
                        textStyle: {
                            color: '#fff',
                        },
                        fontStyle: '10'
                    },
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: "#fb696a",
                    }
                },
                data: dataArr3
            }]
        };
        myChart.setOption(option);
    })();

    // line-19
    void (function () {
        var myChart = echarts.init(document.getElementById('line-19'));
        var xArr = ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30', '01-31', '02-01', '02-02', '02-03', '02-04'];
        var dataArr = [
            [9, 10, 12, 15, 17, 21, 18, 23, 25, 27, 29, 31, 33, 35, 37, 39],
            [7, 8, 9, 10, 11, 12, 13, 10, 12, 14, 16, 18, 20, 22, 23, 25],
            [3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ];
        var colorArr = ['#e83334', '#eb9117', '#267878']
        var legendArr = ['密切接触者', '居家隔离', '集中隔离'];
        var seriesArr = [];
        for (var i = 0; i < legendArr.length; i++) {
            seriesArr.push({
                name: legendArr[i], //系列名称
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
                symbol: 'circle', //标记的图形。
                symbolSize: 7, //标记的大小
                lineStyle: { //线条样式。
                    normal: {
                        color: colorArr[i], // 线条颜色
                    },
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                    show: false
                },
                itemStyle: { //折线拐点标志的样式。
                    normal: {
                        color: colorArr[i],
                    }
                },
                data: dataArr[i]
            })
        }
        var start = 100 - Math.round(100 / Math.ceil(xArr.length / 5));

        var option = {
            backgroundColor: '#fff',
            tooltip: { //提示框组件
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'transparent'
                    }
                },
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderColor: '#80bca6',
                borderWidth: 1,
                textStyle: {
                    fontSize: getSize(0.18),
                    color: '#242524'
                },
                extraCssText: 'line-height: 20px;',
                formatter: function (para) {
                    var arr = [];
                    for (var i = 0; i < para.length; i++) {
                        arr.push('<span style="margin-right: 5px; vertical-align: 1px; display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: ' + colorArr[
                            para[i].seriesIndex] + ';"></span>' + para[i].seriesName + '  ' + para[i].data);
                    }
                    return arr.join('<br>');
                }
            },
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0],
                start: start,
                end: 100,
                filterMode: 'filter',
                zoomLock: true
            }],
            legend: {
                right: getSize(0.3),
                top: '5%',
                padding: [getSize(0.15), getSize(0.2)],
                backgroundColor: '#f5f5f6',
                borderRadius: getSize(0.26),
                itemGap: getSize(0.2),
                data: legendArr,
                itemWidth: getSize(0.16),
                itemHeight: getSize(0.24),
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#242524'
                }
            },
            grid: { //直角坐标系
                top: '25%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis: [{ //直角坐标系 grid 中的 x 轴
                type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                boundaryGap: true,
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#f5f5f6'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#f5f5f6'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    margin: getSize(0.2),
                    fontSize: getSize(0.22),
                    color: '#242524'
                },
                axisTick: {
                    show: false,
                },
                data: xArr,
            }],
            yAxis: { //直角坐标系 grid 中的 y 轴
                type: 'value', ////直角坐标系 grid 中的 x 轴
                name: '单位：人',
                nameTextStyle: {
                    padding: [0, 0, getSize(0.28), -getSize(0.05)],
                    fontSize: getSize(0.22),
                    color: '#242524'
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线
                    show: false,
                    lineStyle: {
                        color: '#f5f5f6'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。
                    show: false,
                    lineStyle: {
                        color: '#f5f5f6'
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    show: true,
                    margin: getSize(0.2),
                    fontSize: getSize(0.22),
                    color: '#242524'
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
            },
            series: seriesArr
        };
        myChart.setOption(option);
    })();

    // pie-1
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-1'));
        var option = {
            backgroundColor: '#003f6a',
            title: {
                text: '共计:{a|3156135}家',
                x: 'center',
                bottom: '2%',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#ffffff',
                    fontSize: 18,
                    color: '#fff',
                    rich: {
                        a: {
                            fontSize: 24,
                            color: '#00ffba'
                        }
                    }
                }
            },
            color: ['#5fa098', '#96d5ab', '#5597fc', '#305382', '#8cf8ff', '#8dceda'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
                name: 'GDP变化情况',
                type: 'pie',
                roseType: 'radius',
                clockWise: true,
                radius: ['30%', '50%'],
                center: ['50%', '45%'],
                startAngle: 120,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            fontSize: 12,
                            fontFamily: 'DIN Reg Alt',
                            formatter: ['{b}{a|{c}%}'].join('\n'),
                            fontSize: 12,
                            color: '#fff',
                            rich: {
                                a: {
                                    fontFamily: 'Helvetica Neue',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                },
                            }
                        },
                        labelLine: {
                            show: true,
                            length: 5,
                            length2: 5,
                        },
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                hoverAnimation: false,
                data: [{
                    name: '股份制企业',
                    value: 16,
                }, {
                    name: '国有企业',
                    value: 16,
                }, {
                    name: '集体所有制',
                    value: 16,
                }, {
                    name: '有限合伙企业',
                    value: 16,
                }, {
                    name: '其他',
                    value: 16,
                }, {
                    name: '个人独资企业',
                    value: 16,
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-2
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-2'));
        var myData = [{
            name: '第一产业',
            value: '50.9'
        },
        {
            name: '第二产业',
            value: '26.2'
        },
        {
            name: '第三产业',
            value: '23.8'
        }
        ]
        var colorArr = ['#00ff18', '#0adaff', '#fff100'];
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'center',
                bottom: '8%',
                itemWidth: 8,
                itemHeight: 8,
                itemGap: 15,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
                data: [{
                    icon: 'rect',
                    name: myData[0].name
                },
                {
                    icon: 'rect',
                    name: myData[1].name
                },
                {
                    icon: 'rect',
                    name: myData[2].name
                }
                ]
            },
            series: {
                name: '各系统数据量',
                type: 'pie',
                clockWise: true,
                center: ['50%', '40%'],
                radius: ['45%', '55%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            color: '#fff',
                            formatter: '{d}%',
                        },
                        labelLine: {
                            show: true
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(12, 222, 246, 0.26)'
                    }
                },
                data: myData
            }
        }
        myChart.setOption(option);
    })();

    // pie-3
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-3'));
        var option = {
            backgroundColor: '#003f6a',
            color: ['#afd6dd', '#48c1de', '#7dd4ff', '#0cf9ff'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                right: '2%',
                y: 'center',
                bottom: '5%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
                itemGap: 30,
                orient: 'vertical',
                data: [{
                    icon: 'circle',
                    name: '上城区'
                },
                {
                    icon: 'circle',
                    name: '富阳区'
                },
                {
                    icon: 'circle',
                    name: '拱墅区'
                },
                {
                    icon: 'circle',
                    name: '临安区'
                }
                ]
            },
            series: [{
                name: '公共服务数据监管分析',
                type: 'pie',
                clockWise: true,
                roseType: true,
                center: ['43%', '50%'],
                radius: ['0', '30%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            fontSize: 14,
                            formatter: '{c}次',
                        },
                        labelLine: {
                            show: true,
                            length1: 5,
                            length2: 5,
                        }
                    }
                },
                data: [{
                    name: '上城区',
                    value: 27797,
                }, {
                    name: '富阳区',
                    value: 34564,
                }, {
                    name: '拱墅区',
                    value: 94097,
                }, {
                    name: '临安区',
                    value: 138811,
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-4
    void (function () {
        // 初始化实例
        var pie_one = echarts.init(document.getElementById('pie-4'));
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {},
            series: [{
                type: 'pie',
                clockWise: true,
                radius: ['50%', '60%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: 996,
                    name: '已完成',
                    itemStyle: {
                        normal: {
                            color: '#0e8ba6',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{c}{a|个}',
                        fontSize: 20,
                        fontFamily: 'CAI978',
                        color: '#00d7fe',
                        rich: {
                            a: {
                                fontSize: 12,
                                color: '#fff',
                                verticalAlign: 'bottom'
                            }
                        }
                    }
                }, {
                    name: '未完成',
                    value: 1500,
                    itemStyle: {
                        normal: {
                            color: '#0db9cb',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }]
            }]
        }
        pie_one.setOption(option);
    })();

    // pie-5
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-5'));
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                borderWidth: 10,
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        };
        var placeHolderStyle = {
            normal: {
                color: '#eaecef',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };
        var option = {
            title: {
                text: '{a|30}%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: 14,
                    color: '#030303',
                    rich: {
                        a: {
                            fontFamily: 'CAI978',
                            fontSize: 26,
                            verticalAlign: 'bottom'
                        }
                    }
                }
            },
            series: [{
                name: 'pieA',
                type: 'pie',
                clockWise: true,
                radius: ['60%', '70%'],
                center: ['50%', '50%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                startAngle: 90,
                data: [{
                    value: 30,
                    name: '待签收',
                    itemStyle: {
                        normal: {
                            color: '#cd3232'
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
                ]
            },
            {
                name: 'pieB',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '53%'],
                center: ['50%', '50%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                startAngle: 90,
                data: [{
                    value: 30,
                    name: '待签收',
                    itemStyle: {
                        normal: {
                            color: '#eaeaea'
                        }
                    }
                },
                {
                    value: 0,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
                ]
            }
            ]
        };
        myChart.setOption(option);
    })();

    // pie-6
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-6'));
        var option = {
            backgroundColor: '#003f6a',
            color: ['#006afe', '#99effc', '#0ed0dc'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'center',
                bottom: '5%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
                data: [{
                    icon: 'circle',
                    name: '任务完成'
                },
                {
                    icon: 'circle',
                    name: '任务在办'
                },
                {
                    icon: 'circle',
                    name: '任务超期'
                }
                ]
            },
            series: [{
                name: '深改系统',
                type: 'pie',
                roseType: 'radius',
                clockWise: true,
                avoidLabelOverlap: false,
                center: ['50%', '40%'],
                radius: ['40%', '58%'],
                startAngle: 90,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            fontFamily: 'DIN',
                        }
                    }
                },
                data: [{
                    name: '任务完成',
                    value: 65,
                }, {
                    name: '任务在办',
                    value: 18,
                }, {
                    name: '任务超期',
                    value: 17,
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-7
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-7'));
        var option = {
            backgroundColor: '#003f6a',
            color: ['#006afe', '#99effc', '#0ed0dc'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'center',
                bottom: '5%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
                data: [{
                    icon: 'circle',
                    name: '任务完成'
                },
                {
                    icon: 'circle',
                    name: '任务在办'
                },
                {
                    icon: 'circle',
                    name: '任务超期'
                }
                ]
            },
            series: [{
                name: '督查系统',
                type: 'pie',
                clockWise: true,
                center: ['50%', '40%'],
                radius: ['40%', '58%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            fontSize: 16,
                            fontFamily: 'DIN',
                            formatter: '{c}',
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                data: [{
                    name: '任务完成',
                    value: 1032,
                }, {
                    name: '任务在办',
                    value: 608,
                }, {
                    name: '任务超期',
                    value: 1068,
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-8
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-8'));
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 40,
                borderWidth: 10,
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        };
        var placeHolderStyle = {
            normal: {
                color: '#838fa3',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };
        var option = {
            backgroundColor: '#071e45',
            title: {
                text: '{a|60}%\n办结率',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: '#fff',
                    rich: {
                        a: {
                            fontFamily: 'CAI978',
                            fontSize: 26,
                            verticalAlign: 'bottom'
                        }
                    }
                }
            },
            series: [{
                name: 'Line 2',
                type: 'pie',
                clockWise: true,
                radius: ['55%', '68%'],
                center: ['50%', '50%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                startAngle: 90,
                data: [{
                    value: 60,
                    name: '三级匹配度',
                    itemStyle: {
                        normal: {
                            color: '#faec06'
                        }
                    }
                },
                {
                    value: 40,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
                ]
            },
            {
                name: 'Line 3',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '53%'],
                center: ['50%', '50%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                startAngle: 90,
                data: [{
                    value: 30,
                    name: '二级匹配度',
                    itemStyle: {
                        normal: {
                            color: '#cacaca'
                        }
                    }
                },
                {
                    value: 0,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
                ]
            }
            ]
        };
        myChart.setOption(option);
    })();

    // pie-9
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-9'));
        var option = {
            backgroundColor: '#003f6a',
            title: {
                text: '55%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontFamily: 'IMPACT_3',
                    fontWeight: 'normal',
                    color: '#fff',
                    fontSize: '20'
                }
            },
            color: ['rgba(255,255,255,0.5)'],
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: false,
                radius: ['50%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: 55,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {
                    name: '02',
                    value: 20
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-10
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-10'));
        var dataArr = [{
            'name': '接入电话',
            'value': 1980
        }, {
            'name': '解决问题',
            'value': 400
        }, {
            'name': '上门',
            'value': 300
        }]
        var seriesObjs = [];
        var r = 75;
        var colorArr = ['#006afe', '#1aa4ff', '#0cdef6'];
        var placeHolderStyle = {
            normal: {
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
        for (var i = 0; i < dataArr.length; i++) {
            var seriesObj = {
                name: dataArr[i].name,
                type: 'pie',
                clockWise: true,
                center: ['50%', '40%'],
                radius: [r - 1 - i * 20, r - i * 20],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        borderWidth: 12,
                        shadowBlur: 50,
                        borderColor: colorArr[i],
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: dataArr[i].value
                }, {
                    name: 'invisible',
                    value: dataArr[0].value * 4 / 3 - dataArr[i].value,
                    itemStyle: placeHolderStyle
                }]
            }
            seriesObjs.push(seriesObj)
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            // title: {
            //     left: '35%',
            //     top: '4%',
            //     text: '{a|' + dataArr[0].value + '个}\n{a|' + dataArr[1].value + '个}\n{a|' + dataArr[2].value + '次}',
            //     textStyle: {
            //         fontWeight: 'normal',
            //         fontSize: 14,
            //         color: '#fff',
            //         rich: {
            //             a: {
            //                 lineHeight: 16
            //             }
            //         }

            //     }
            // },
            tooltip: {
                position: 'top',
                formatter: '{a}：{d}%'
            },
            legend: {
                x: 'center',
                bottom: '8%',
                itemWidth: 15,
                itemHeight: 5,
                itemGap: 15,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
                data: [dataArr[0].name, dataArr[1].name, dataArr[2].name]
            },
            grid: {
                top: '12%',
                bottom: '68%',
                left: "45%",
                containLabel: false
            },
            xAxis: [{
                show: false
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    inside: true,
                    align: 'right',
                    textStyle: {
                        color: "#f30",
                        fontSize: 16,
                    },
                    show: true
                },
                data: [1980, 400, 300]
            }],
            toolbox: {
                show: false
            },
            series: seriesObjs
        }
        myChart.setOption(option);
    })();

    // pie-11
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-11'));
        var dataArr = [];
        var legendArr = [];
        var nameArr = ['接口访问量', '目录访问量'];
        var valueArr = [70, 30];
        for (var i = 0; i < nameArr.length; i++) {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i]
            });
            legendArr.push({
                icon: 'rect',
                name: nameArr[i]
            });
        }
        var option = {
            backgroundColor: '#fff',
            color: ['#43afff', '#ffa300'],
            title: {
                text: '平台访问情况',
                x: 'center',
                top: '5%',
                textStyle: {
                    fontSize: 18,
                    color: '#0096ff'
                }
            },
            legend: {
                x: 'center',
                bottom: '6%',
                itemWidth: 17,
                itemHeight: 15,
                itemGap: 15,
                textStyle: {
                    padding: [0, 10, 0, 0],
                    fontSize: '16',
                    color: '#242a2e'
                },
                data: legendArr
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
                name: 'GDP变化情况',
                type: 'pie',
                clockWise: true,
                radius: ['0%', '60%'],
                center: ['50%', '48%'],
                startAngle: 0,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 5,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: dataArr
            }]
        }
        myChart.setOption(option);
    })();

    // pie-12
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-12'));
        var nameArr = ['经济建设', '城市建设', '文化休闲', '道路交通', '环境建设', '民生服务', '教育科技', '机构团体'];
        var valueArr = [16, 16, 16, 16, 16, 16, 16, 16];
        var option = {
            backgroundColor: '#fff',
            color: ['#5fa098', '#96d5ab', '#6bb0e6', '#305382', '#8dceda', '#76a9da', '#3b8c45', '#6ea96e'],
            title: {
                text: '数据领域',
                x: 'center',
                top: '5%',
                textStyle: {
                    fontSize: 18,
                    color: '#0096ff'
                }
            },
            legend: {
                left: '10%',
                right: '10%',
                bottom: '6%',
                itemWidth: 17,
                itemHeight: 15,
                itemGap: 15,
                textStyle: {
                    padding: [0, 18, 0, 0],
                    fontSize: 16,
                    color: '#242a2e'
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
                name: 'GDP变化情况',
                type: 'pie',
                roseType: 'radius',
                clockWise: true,
                radius: ['30%', '55%'],
                center: ['50%', '45%'],
                startAngle: 0,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        // shadowBlur: 5, ie 不支持阴影
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [{
                    name: '经济建设',
                    value: 10
                },
                {
                    name: '城市建设',
                    value: 10
                },
                {
                    name: '文化休闲',
                    value: 10
                },
                {
                    name: '道路交通',
                    value: 10
                },
                {
                    name: '环境建设',
                    value: 10
                },
                {
                    name: '民生服务',
                    value: 10
                },
                {
                    name: '教育科技',
                    value: 10
                },
                {
                    name: '机构团体',
                    value: 10
                }
                ]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-13
    void (function () {
        var myChart = echarts.init(document.querySelector('#pie-13'));
        var option = {
            color: [
                { // 完成的圆环的颜色
                    colorStops: [{
                        offset: 0,
                        color: '#72b798' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#48857c' // 100% 处的颜色
                    }]
                },
                '#f5f0db'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: ['0%', '83%'],
                center: ['50%', '50%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                data: [
                    {
                        name: '已完成',
                        value: 48.5,
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}%',
                            fontSize: getSize(0.3),
                            color: '#fff'
                        }
                    },
                    {
                        name: '未完成',
                        value: 51.5
                    }
                ]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-14
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-14'));
        var option = {
            backgroundColor: '#0c4376',
            color: ['#2fc25b', '#facc14', '#ef4864', '#3196fa'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                bottom: '5%',
                x: 'center',
                itemWidth: getSize(0.15),
                itemHeight: getSize(0.15),
                itemGap: getSize(0.1),
                align: 'center',
                formatter: function (para) {
                    var str = '';
                    if (para == '讲座') {
                        str += para + '\n15%';
                    } else if (para == '培训') {
                        str += para + '\n25%';
                    } else if (para == '演出') {
                        str += para + '\n25%';
                    } else {
                        str += para + '\n35%';
                    }
                    return str;
                },
                textStyle: {
                    padding: [getSize(1), 0, 0, 0],
                    lineHeight: getSize(0.3),
                    fontSize: getSize(0.24),
                    color: '#fff'
                },
                // orient: 'vertical',
                data: [{
                    icon: 'circle',
                    name: '讲座'
                },
                {
                    icon: 'circle',
                    name: '培训'
                },
                {
                    icon: 'circle',
                    name: '演出'
                },
                {
                    icon: 'circle',
                    name: '文化走亲'
                }
                ]
            },
            series: [{
                name: '重点案件分析',
                type: 'pie',
                clockWise: true,
                center: ['50%', '35%'],
                radius: ['45%', '58%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            fontSize: 16,
                            fontFamily: 'DIN',
                            formatter: '{c}',
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                data: [{
                    name: '讲座',
                    value: 15,
                }, {
                    name: '培训',
                    value: 25,
                }, {
                    name: '演出',
                    value: 25,
                }, {
                    name: '文化走亲',
                    value: 35,
                }
                ]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-15
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-15'));
        var colorArr = ['#3196fa', '#bb9aff', '#00fffc', '#e4ff00', '#e04158', '#35ff65', '#009e29', '#faffc5', '#ff32e9', '#a75309', '#ff9600'];
        var dataArr = [];
        var legendArr = [];
        var nameArr = ['申花产业集聚区', '北城·智慧园', '汽车互联网小镇', '北部软件园', '康桥新能源产业园', '康桥健康产业园', '上塘电商小镇', '运河财富小镇', '工业设计小镇', '智慧网谷小镇'];
        var valueArr = [30, 40, 35, 25, 56, 45, 33, 22, 30, 20];
        for (var i = 0; i < nameArr.length; i++) {
            if (i === 0) {
                dataArr.push({
                    name: nameArr[i],
                    value: valueArr[i],
                    label: {
                        show: true,
                        padding: [getSize(4.5), 0, 0, 0]
                    }
                });
            } else {
                dataArr.push({
                    name: nameArr[i],
                    value: valueArr[i],
                });
            }
            legendArr.push({
                icon: 'roundRect',
                name: nameArr[i]
            });
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            title: {
                x: 'center',
                top: '0%',
                text: '任务累计完成情况',
                textStyle: {
                    fontSize: getSize(0.3),
                    fontWeight: 'normal',
                    color: '#fff'
                }
            },
            legend: {
                right: '10%',
                top: '20%',
                bottom: '20%',
                itemWidth: getSize(0.26),
                itemHeight: getSize(0.14),
                itemGap: getSize(0.15),
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff'
                },
                orient: 'vertical',
                data: legendArr,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            series: [{
                name: '任务累计完成情况',
                type: 'pie',
                clockWise: true,
                radius: ['40%', '70%'],
                center: ['30%', '50%'],
                startAngle: 90,
                label: {
                    show: false,
                    position: 'center',
                    formatter: '{a|180}\n{b|项}',
                    textStyle: {
                        rich: {
                            a: {
                                fontSize: getSize(0.44),
                                color: '#3196fa'
                            },
                            b: {
                                fontSize: getSize(0.28),
                                color: '#3196fa'
                            }
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: dataArr,
            }]
        }
        myChart.setOption(option);
    })();

    // pie-16
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-16'));
        var colorArr = ['#3196fa', '#bb9aff', '#00fffc', '#e4ff00', '#e04158', '#35ff65', '#009e29', '#faffc5', '#ff32e9', '#a75309', '#ff9600'];
        var dataArr = [];
        var legendArr = [];
        var nameArr = ['康桥街道', '祥符街道', '大关街道', '拱宸桥街道', '半山街道', '米市巷街道', '上塘街道', '园区', '小河街道', '和睦街道', '湖墅街道'];
        var valueArr = [30, 40, 35, 25, 56, 45, 33, 22, 30, 20, 40];
        for (var i = 0; i < nameArr.length; i++) {
            if (i === 0) {
                dataArr.push({
                    name: nameArr[i],
                    value: valueArr[i],
                    label: {
                        show: true,
                        padding: [getSize(4.5), 0, 0, 0]
                    }
                });
            } else {
                dataArr.push({
                    name: nameArr[i],
                    value: valueArr[i],
                });
            }
            legendArr.push({
                icon: 'roundRect',
                name: nameArr[i]
            });
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            title: {
                x: 'center',
                top: '0%',
                text: '任务累计完成情况',
                textStyle: {
                    fontSize: getSize(0.3),
                    fontWeight: 'normal',
                    color: '#fff'
                }
            },
            legend: {
                right: '10%',
                top: '20%',
                bottom: '20%',
                itemWidth: getSize(0.26),
                itemHeight: getSize(0.14),
                itemGap: getSize(0.15),
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff'
                },
                orient: 'vertical',
                data: legendArr,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            series: [{
                name: '任务累计完成情况',
                type: 'pie',
                clockWise: true,
                radius: ['40%', '70%'],
                center: ['30%', '50%'],
                startAngle: 90,
                label: {
                    show: false,
                    position: 'center',
                    formatter: '{a|180}\n{b|项}',
                    textStyle: {
                        rich: {
                            a: {
                                fontSize: getSize(0.44),
                                color: '#3196fa'
                            },
                            b: {
                                fontSize: getSize(0.28),
                                color: '#3196fa'
                            }
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: dataArr,
            }]
        }
        myChart.setOption(option);
    })();

    // pie-17
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-17'));
        var colorArr = ['#01bbe2', '#787aff', '#fb7075', '#5fdba1', '#01dcfc', '#dbc900'];
        var dataArr = [];
        var legendArr = [];
        var nameArr = ['医药类', '设备/耗材类', '总务膳食类', '基建类', '信息类', '其他'];
        var valueArr = [100, 20, 9, 8, 20, 30];
        for (var i = 0; i < nameArr.length; i++) {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i],
                label: {
                    show: true
                }
            });
            legendArr.push({
                icon: 'roundRect',
                name: nameArr[i]
            });
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            title: {
                text: '{a|供应商}\n{b|接待数}',
                left: '35%',
                top: '40%',
                textStyle: {
                    rich: {
                        a: {
                            fontSize: getSize(0.2),
                            color: '#fff',
                            lineHeight: getSize(0.3)
                        },
                        b: {
                            fontSize: getSize(0.2),
                            color: '#fff',
                            lineHeight: getSize(0.3)
                        }
                    }
                },
                align: 'center'
            },
            legend: {
                right: '5%',
                y: 'center',
                itemWidth: getSize(0.11),
                itemHeight: getSize(0.03),
                itemGap: getSize(0.15),
                textStyle: {
                    fontSize: getSize(0.14),
                    color: '#fff'
                },
                orient: 'vertical',
                data: legendArr,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: true,
                radius: ['42%', '70%'],
                center: ['38%', '50%'],
                startAngle: 90,
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}',
                    textStyle: {
                        fontSize: getSize(0.14),
                        color: '#fff',
                        fontFamily: "DIN Medium"
                    }
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                data: dataArr,
            }, {
                name: '',
                type: 'gauge',
                splitNumber: 20, //刻度数量
                min: 0,
                max: 100,
                startAngle: 360,
                endAngle: 1,
                radius: '78%', //图表尺寸
                center: ['38%', '50%'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 0,
                        shadowBlur: 0,
                        color: [
                            [0.05, '#0a82ba'],
                            [1, '#0a82ba']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    },
                    length: getSize(0.05),
                    splitNumber: 5
                },
                splitLine: {
                    show: false,
                    length: 2,
                    lineStyle: {
                        color: 'auto',
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: { //仪表盘指针
                    show: false,
                    length: '70%',
                    width: 2
                },
                detail: {
                    show: false,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2,
                    offsetCenter: [0, '0%'], // x, y，单位px
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'transparent',
                        fontSize: 30,
                    },
                    formatter: '{value}'
                },
                data: [{
                    name: "",
                    value: 100
                }]
            }]
        }
        myChart.setOption(option);
    })();

    // pie-18
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-18'));
        var defaultColor = 'rgba(20, 200, 120, 0.9)';
        var titleText = Math.floor(Math.random() * 50) + 1200;
        var displayVal = 100;
        var placeVal = 100 - displayVal;
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                trigger: "item"
            },
            title: {
                x: 'center',
                y: 'center',
                text: titleText,
                textStyle: {
                    fontSize: getSize(0.16),
                    fontFamily: 'impact',
                    color: '#fff'
                }
            },
            series: [
                {
                    name: "",
                    type: "gauge",
                    radius: "60%",
                    startAngle: 0,
                    endAngle: 359.9,
                    splitNumber: 30,
                    hoverAnimation: true,
                    silent: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: getSize(0.06),
                        lineStyle: {
                            width: 1,
                            color: defaultColor,
                            shadowColor: defaultColor,
                            shadowBlur: getSize(0.05)
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 0,
                        name: ""
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["80%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: 100,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["68%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: displayVal,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }, {
                        value: placeVal,
                        name: "placeholder",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "transparent"
                            }
                        }
                    }]
                }
            ]
        }
        myChart.setOption(option);
    })();

    // pie-19
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-19'));
        var defaultColor = 'rgba(217, 128, 6, 0.9)';
        var titleText = Math.floor(Math.random() * 50) + 873;
        var displayVal = Math.floor(Math.random() * 20) + 60;
        var placeVal = 100 - displayVal;
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                trigger: "item"
            },
            title: {
                x: 'center',
                y: 'center',
                text: titleText,
                textStyle: {
                    fontSize: getSize(0.16),
                    fontFamily: 'impact',
                    color: '#fff'
                }
            },
            series: [
                {
                    name: "",
                    type: "gauge",
                    radius: "60%",
                    startAngle: 0,
                    endAngle: 359.9,
                    splitNumber: 30,
                    hoverAnimation: true,
                    silent: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: getSize(0.06),
                        lineStyle: {
                            width: 1,
                            color: defaultColor,
                            shadowColor: defaultColor,
                            shadowBlur: getSize(0.05)
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 0,
                        name: ""
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["80%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: 100,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["68%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: displayVal,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }, {
                        value: placeVal,
                        name: "placeholder",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "transparent"
                            }
                        }
                    }]
                }
            ]
        }
        myChart.setOption(option);
    })();

    // pie-20
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-20'));
        var defaultColor = 'rgba(49, 103, 219, 0.9)';
        var titleText = Math.floor(Math.random() * 50) + 327;
        var displayVal = Math.floor(Math.random() * 20) + 40;
        var placeVal = 100 - displayVal;
        var option = {
            backgroundColor: '#003f6a',
            tooltip: {
                trigger: "item"
            },
            title: {
                x: 'center',
                y: 'center',
                text: titleText,
                textStyle: {
                    fontSize: getSize(0.16),
                    fontFamily: 'impact',
                    color: '#fff'
                }
            },
            series: [
                {
                    name: "",
                    type: "gauge",
                    radius: "60%",
                    startAngle: 0,
                    endAngle: 359.9,
                    splitNumber: 30,
                    hoverAnimation: true,
                    silent: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: getSize(0.06),
                        lineStyle: {
                            width: 1,
                            color: defaultColor,
                            shadowColor: defaultColor,
                            shadowBlur: getSize(0.05)
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 0,
                        name: ""
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["80%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: 100,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }]
                },
                {
                    name: "",
                    type: "pie",
                    radius: ["68%", "85%"],
                    hoverAnimation: false,
                    silent: true,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        }
                    },
                    data: [{
                        value: displayVal,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: defaultColor,
                                shadowColor: defaultColor,
                                shadowBlur: getSize(0.05)
                            }
                        }
                    }, {
                        value: placeVal,
                        name: "placeholder",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "transparent"
                            }
                        }
                    }]
                }
            ]
        }
        myChart.setOption(option);
    })();

    // pie-21
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-21'));
        var colorArr1 = ['#6328aa', '#749d3a', '#d1cf27', '#b43c58', '#247bc4'];
        var colorArr2 = ['#42273f', '#18543d', '#958142', '#871f3e', '#1c1a48'];
        var dataArr = [];
        var legendArr = [];
        var nameArr = ['一颗星', '二颗星', '三颗星', '四颗星', '五颗星'];
        for (var i = 0; i < nameArr.length; i++) {
            dataArr.push({
                name: nameArr[i],
                value: Math.floor(Math.random() * 50) + 50
            });
            legendArr.push({
                icon: 'image://assets/img/star' + i + '.png',
                name: nameArr[i]
            });
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr1,
            legend: {
                left: '5%',
                y: 'center',
                itemWidth: getSize(0.27),
                itemHeight: getSize(0.27),
                itemGap: getSize(0.3),
                textStyle: {
                    fontSize: getSize(0.14),
                    color: '#fff'
                },
                orient: 'vertical',
                data: legendArr,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: true,
                radius: ['36%', '62%'],
                center: ['62%', '50%'],
                startAngle: 90,
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        padding: [-getSize(0.3), -getSize(0.5), 0, -getSize(0.5)],
                        fontSize: getSize(0.14),
                        color: '#fff',
                    }
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: '#7da9bf'
                    },
                    length2: getSize(0.5)
                },
                data: dataArr,
            }, {
                name: '',
                type: 'pie',
                clockWise: true,
                radius: ['30%', '38%'],
                center: ['62%', '50%'],
                startAngle: 90,
                label: {
                    show: false,
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        padding: [-getSize(0.3), -getSize(0.5), 0, -getSize(0.5)],
                        fontSize: getSize(0.14),
                        color: '#fff',
                    }
                },
                labelLine: {
                    show: false,
                    lineStyle: {
                        color: '#7da9bf'
                    },
                    length2: getSize(0.5)
                },
                itemStyle: {
                    color: function (para) {
                        return colorArr2[para.dataIndex]
                    }
                },
                data: dataArr,
                silent: true
            }]
        }
        myChart.setOption(option);
    })();

    // pie-22
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-22'));
        var legendArr = [];
        var dataArr = [];
        var nameArr = ['电力能源', '农畜产品加工', '养殖帮扶', '石油化工', '生物医药', '其他'];
        var valueArr = ['25', '22', '18', '15', '12', '8'];
        var colorArr = ['#3c88fe', '#30d9ff', '#00b59f', '#fbcd58', '#f7588c', '#876ffe'];
        for (var i = 0; i < nameArr.length; i++) {
            legendArr.push(
                {
                    name: nameArr[i],
                    icon: 'roundRect'
                }
            )
            dataArr.push(
                {
                    name: nameArr[i],
                    value: valueArr[i]
                }
            )
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'center',
                bottom: '5%',
                itemGap: getSize(0.2),
                itemWidth: getSize(0.2),
                itemHeight: getSize(0.1),
                textStyle: {
                    padding: [0, getSize(0.2), 0, 0],
                    fontSize: getSize(0.14),
                    color: '#d5e7fb'
                },
                data: legendArr
            },
            series: [{
                name: '产业实时应用',
                type: 'pie',
                clockWise: true,
                roseType: true,
                center: ['50%', '40%'],
                radius: ['0', '50%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{c}%',
                            fontSize: getSize(0.16),
                            color: '#d5e7fb',
                        },
                        labelLine: {
                            show: true,
                            length1: getSize(0.1),
                            length2: getSize(0.1),
                        }
                    }
                },
                data: dataArr
            }, {
                name: '',
                type: 'pie',
                silent: true,
                zlevel: 2,
                clockWise: true,
                center: ['50%', '40%'],
                radius: ['0', '12%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        color: '#ffffff',
                        label: {
                            show: false,
                            formatter: '{c}%',
                            fontSize: getSize(0.16),
                            color: '#d5e7fb',
                        },
                        labelLine: {
                            show: false,
                            length1: getSize(0.1),
                            length2: getSize(0.1),
                        }
                    }
                },
                data: [100]
            }
            ]
        }
        myChart.setOption(option);
    })();

    // pie-23
    void (function () {
        var myChart = echarts.init(document.getElementById('pie-23'));
        var legendArr = [];
        var dataArr = [];
        var nameArr = ['发文总数', '收文总数', '简报刊物', '领导批示', '电子公告'];
        var valueArr = [12345, 10000, 9999, 18000, 14000];
        var colorArr = ['#f7a35c', '#8085e9', '#920783', '#10b9f8', '#90ed7d'];
        for (var i = 0; i < nameArr.length; i++) {
            legendArr.push(
                {
                    name: nameArr[i],
                    icon: 'roundRect'
                }
            )
            dataArr.push(
                {
                    name: nameArr[i],
                    value: valueArr[i]
                }
            )
        }
        var option = {
            backgroundColor: '#003f6a',
            color: colorArr,
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                y: 'center',
                right: 0,
                orient: 'vertical',
                itemGap: getSize(0.15),
                itemWidth: getSize(0.07),
                itemHeight: getSize(0.07),
                formatter: function (para) {
                    var index = nameArr.indexOf(para);
                    return para + ' ' + valueArr[index];
                },
                textStyle: {
                    padding: [0, getSize(0.2), 0, 0],
                    fontFamily: 'simhei',
                    fontSize: getSize(0.18),
                    color: '#bee4f8'
                },
                data: legendArr
            },
            series: [{
                name: '办件类型',
                type: 'pie',
                clockWise: true,
                roseType: true,
                center: ['35%', '50%'],
                radius: ['20%', '40%'],
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{d}%',
                            textStyle: {
                                padding: [-getSize(0.2), -getSize(0.55), 0, -getSize(0.55)],
                                fontSize: getSize(0.18),
                                color: '#ffffff'
                            }
                        },
                        labelLine: {
                            show: true,
                            length1: getSize(0.2),
                            length2: getSize(0.5),
                            lineStyle: {
                                color: 'rgba(190,228,248,0.5)'
                            }
                        }
                    }
                },
                data: dataArr
            }]
        }
        myChart.setOption(option);
        myChart.setOption(option);
    })();

    // radar-1
    void (function () {
        var myChart = echarts.init(document.getElementById('radar-1'));
        var option = option = {
            backgroundColor: '#003f6a',
            tooltip: {},
            radar: {
                radius: '70%',
                center: ['50%', '65%'],
                name: {
                    color: '#fff',
                    formatter: function (value, indicator) {
                        var data;
                        if (value === '年') {
                            data = '45%';
                        } else if (value === '季') {
                            data = '15%';
                        } else {
                            data = '45%';
                        }

                        return '{a|' + value + '}' + '{b|' + data + '}';
                    },
                    rich: {
                        a: {
                            fontSize: 16,
                            color: '#fff'
                        },
                        b: {
                            fontSize: 14,
                            color: '#00f0ff'
                        }
                    }
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#00eaff'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'transparent'
                    }
                },
                indicator: [{
                    name: '季',
                    max: 100,
                },
                {
                    name: '年',
                    max: 100,
                },
                {
                    name: '月',
                    max: 100,
                },

                ]
            },
            series: [{
                name: '数据交换频率',
                type: 'radar',
                label: {
                    normal: {
                        show: false,
                    }
                },
                symbol: 'none',
                areaStyle: {
                    normal: {
                        color: 'rgba(79,151,186,0.9)'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                data: [{
                    value: [15, 45, 45],
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // radar-2
    void (function () {
        var dom = document.getElementById('radar-2');
        var myChart = echarts.init(dom);
        var option = option = {
            backgroundColor: '#003f6a',
            tooltip: {},
            radar: {
                radius: '50%',
                center: ['50%', '50%'],
                name: {
                    color: '#00d7fe',
                    padding: [0, -35, 0, -35]
                },
                nameGap: 20,
                startAngle: 0,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1c8bce'
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                indicator: [{
                    name: '2019年查询（次）',
                    max: 3000000,
                },
                {
                    name: '2019年制证(本)',
                    max: 599470,
                },
                {
                    name: '累计制证(本)',
                    max: 3000000,
                },
                {
                    name: '累计查询（次）',
                    max: 300000,
                },
                {
                    name: '累计接口调用（次）',
                    max: 399470,
                },
                {
                    name: '2019年接口调用（次）',
                    max: 2500000,
                },
                ]
            },
            series: [{
                name: '数据交换频率',
                type: 'radar',
                label: {
                    normal: {
                        show: true,
                        color: '#fff'
                    }
                },
                symbol: 'circle',
                itemStyle: {
                    color: '#fbbf0a'
                },
                areaStyle: {
                    color: 'rgba(12,249,255,0.7)'
                },
                lineStyle: {
                    color: 'transparent'
                },
                data: [{
                    value: [2398091, 199470, 2398091, 157778, 199470, 641866],
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // radar-3
    void (function () {
        var dom = document.getElementById('radar-3');
        var myChart = echarts.init(dom);
        var getArr = function () {
            var arr = [];
            var max = 2800000;
            var min = 500000;
            for (var i = 0; i < 3; i++) {
                arr.push(Math.random(0, 1) * (max - min + 1) + min);

            }
            return arr;
        }
        var dataArr1 = getArr();
        var dataArr2 = getArr();
        var option = option = {
            backgroundColor: '#003f6a',
            legend: {
                show: true,
                x: 'center',
                bottom: '10%',
                icon: 'rect',
                orient: 'horizontal',
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#c0d2f6'
                },
                data: ['目标任务', '累计完成'],
                itemWidth: getSize(0.37),
                itemHeight: getSize(0.17)
            },
            radar: {
                radius: '60%',
                center: ['50%', '50%'],
                name: {
                    fontSize: getSize(0.26),
                    color: '#00d7fe',
                },
                nameGap: 20,
                startAngle: 90,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1c8bce'
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1c8bce'
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                indicator: [{
                    name: '产业个性化项目(本)',
                    max: 3000000,
                },
                {
                    name: '浙商创业\n创新项目(本)',
                    max: 3000000,
                },
                {
                    name: '外资项目\n(万美元)(本)',
                    max: 3000000,
                },
                ]
            },
            series: [{
                name: '目标任务',
                type: 'radar',
                label: {
                    normal: {
                        show: true,
                        fontSize: getSize(0.24),
                        color: '#c0d2f6'
                    }
                },
                symbol: 'circle',
                itemStyle: {
                    color: '#0cf9ff'
                },
                areaStyle: {
                    color: 'transparent'
                },
                lineStyle: {
                    color: '#0cf9ff'
                },
                data: [{
                    value: dataArr1,
                }]
            }, {
                name: '累计完成',
                type: 'radar',
                label: {
                    normal: {
                        show: true,
                        fontSize: getSize(0.24),
                        color: '#c0d2f6'
                    }
                },
                symbol: 'circle',
                itemStyle: {
                    color: '#fbbf0a'
                },
                areaStyle: {
                    color: 'transparent'
                },
                lineStyle: {
                    color: '#fbbf0a'
                },
                data: [{
                    value: dataArr2,
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // radar-4
    void (function () {
        var dom = document.getElementById('radar-4');
        var myChart = echarts.init(dom);
        var indicatorArr = [];
        var nameArr = ['农畜产品加工', '电子信息', '生物医药', '光伏材料', '石油化工', '电力能源'];
        var maxArr = ['25', '25', '25', '25', '25', '25'];
        var valeArr = ['15', '20', '15', '20', '15', '20'];
        for (var i = 0; i < nameArr.length; i++) {
            indicatorArr.push(
                {
                    name: nameArr[i],
                    max: maxArr[i],
                }
            )
        }
        var option = {
            backgroundColor: '#003f6a',
            title: {
                x: 'center',
                y: 'center',
                text: '100%',
                textStyle: {
                    fontFamily: 'Helvetica',
                    fontSize: getSize(0.24),
                    fontWeight: 'normal',
                    color: '#ffffff'
                }
            },
            radar: {
                radius: '70%',
                center: ['50%', '50%'],
                name: {
                    fontSize: getSize(0.14),
                    formatter: function (para) {
                        return '{a|' + para + '}' + '{b|(' + valeArr[nameArr.indexOf(para)] + '%)}';
                    },
                    rich: {
                        a: {
                            color: '#ffffff'
                        },
                        b: {
                            color: '#0cd8f2'
                        }
                    }
                },
                nameGap: getSize(0.1),
                startAngle: 90,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1c8bce'
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                },
                indicator: indicatorArr
            },
            series: [{
                name: '数据交换频率',
                type: 'radar',
                label: {
                    normal: {
                        show: false,
                        color: '#fff'
                    }
                },
                symbol: 'circle',
                symbolSize: getSize(0.08),
                itemStyle: {
                    color: '#0cd8f2'
                },
                areaStyle: {
                    color: 'rgba(12,249,255,0.7)'
                },
                lineStyle: {
                    color: 'transparent'
                },
                data: [{
                    value: valeArr,
                }]
            }]
        };
        myChart.setOption(option);
    })();

    // https://github.com/ecomfe/echarts-liquidfill
    // liquidFill-1
    void (function () {
        var myChart = echarts.init(document.getElementById('liquidFill-1'));
        var value = 0.59;
        var data = [];
        data.push(value);
        var option = {
            backgroundColor: '#003f6a',
            series: [{
                type: 'liquidFill',
                data: data,
                radius: '80%',
                amplitude: '2%',
                waveLength: '100%',
                color: '#0090FF',
                outline: {
                    show: true,
                    borderDistance: 4,
                    itemStyle: {
                        color: 'transparent',
                        borderColor: '#0090FF',
                        borderWidth: 1,
                        shadowBlur: 0,
                        shadowColor: ' rgba(255,0,0,1)'
                    }
                },
                backgroundStyle: {
                    color: 'transparent'
                },
                label: {
                    show: true,
                    formatter: (value * 100).toFixed(0) + '%',
                    fontSize: getSize(0.3),
                    color: '#facc14',
                    insideColor: '#facc14',
                    fontWeight: 'normal',
                },
                itemStyle: {
                    shadowBlur: 0,
                    color: '#0090FF',
                }
            }],

        }
        myChart.setOption(option);
    })();

    // liquidFill-2
    void (function () {
        var myChart = echarts.init(document.getElementById('liquidFill-2'));
        var val1data2 = [{
            value: 0.2,
            name: '省级重点项目',
        },
        {
            value: 0.3,
            name: '41类重大产业类项目',
        },
        {
            value: 0.4,
            name: '谋划区项目',
        },
        {
            value: 0.3,
            name: 'ppp项目',
        }
        ]
        var arr = ['middleLost', 0.6, val1data2, '今日完成进度']

        option = {
            backgroundColor: '#003f6a',
            title: {
                top: '40%',
                left: 'center',
                text: '{a|' + arr[3] + '}\n{b|(占所有数据的的' + (arr[1] * 10000 / 100).toFixed(2) + '%)}',
                subtext: '',
                textStyle: {
                    rich: {
                        a: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: getSize(0.14)
                        },
                        b: {
                            color: '#fff',
                            fontSize: getSize(0.12)
                        },
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (res) {
                    if (res.componentSubType == 'liquidFill') {
                        return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                    } else {
                        return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
                    }
                }
            },
            series: [{
                type: 'liquidFill',
                itemStyle: {
                    normal: {
                        opacity: 0.4,
                        shadowBlur: 0,
                        shadowColor: 'blue'
                    }
                },
                name: arr[3],
                backgroundStyle: {
                    color: 'transparent'
                },
                data: [{
                    value: 0.6,
                    itemStyle: {
                        normal: {
                            color: '#68ddef',
                            opacity: 0.6
                        }
                    }
                }],
                color: ['#53d5ff'],
                radius: '54%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        formatter: '',
                        textStyle: {
                            fontSize: getSize(0.12)
                        }
                    }
                },
                outline: {
                    itemStyle: {
                        borderColor: '#86c5ff',
                        borderWidth: 0
                    },
                    borderDistance: 0
                }
            },
            {
                type: 'pie',
                radius: ['54%', '70%'],
                color: ['#c487ee', '#f0d02e', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                hoverAnimation: false, ////设置饼图默认的展开样式
                label: {
                    show: true,
                    normal: {
                        formatter: '{b}\n{d}%',
                        show: true,
                        fontSize: getSize(0.14)
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                        length1: 0,
                        length2: 0
                    }
                },
                itemStyle: { // 此配置
                    normal: {
                        borderWidth: 2,
                        borderColor: '#fff',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 2,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: arr[2]
            }
            ]
        }
        myChart.setOption(option);
    })();

    // https://github.com/ecomfe/echarts-wordcloud
    // wordcloud -1
    void (function () {
        var myChart = echarts.init(document.getElementById('wordcloud-1'));
        var data = [{
            "name": "社保",
            "value": 382
        }, {
            "name": "人口",
            "value": 342
        }, {
            "name": "公积金",
            "value": 205
        }, {
            "name": "学校",
            "value": 170
        }, {
            "name": "旅游",
            "value": 158
        }, {
            "name": "社保查询",
            "value": 120
        }, {
            "name": "二级建造师",
            "value": 119
        }, {
            "name": "幼儿园",
            "value": 110
        }, {
            "name": "档案",
            "value": 110
        }, {
            "name": "统计年鉴",
            "value": 105
        }, {
            "name": "职称",
            "value": 99
        }, {
            "name": "教育",
            "value": 92
        }, {
            "name": "企业",
            "value": 90
        }, {
            "name": "食品经营许可证",
            "value": 88
        }, {
            "name": "社保证明",
            "value": 74
        }, {
            "name": "行政处罚",
            "value": 73
        }, {
            "name": "章程",
            "value": 73
        }, {
            "name": "食品",
            "value": 72
        }, {
            "name": "重名",
            "value": 72
        }, {
            "name": "公司章程",
            "value": 67
        }];
        var option = {
            title: {
                text: '',
                x: 'center'
            },
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [20, 32],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 100 + 100),
                                Math.round(Math.random() * 100 + 100),
                                Math.round(Math.random() * 100 + 100)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: data
            }]
        };
        myChart.setOption(option);
    })();

    // auto-1
    var auto = function () {
        var dom = document.getElementById('auto-1');
        echarts.init(dom).dispose();
        var myChart = echarts.init(dom);
        var option = option = {
            backgroundColor: '#003f6a',
            tooltip: {},
            radar: {
                radius: '50%',
                center: ['50%', '50%'],
                name: {
                    color: '#00d7fe',
                    padding: [0, -35, 0, -35]
                },
                nameGap: 20,
                startAngle: 0,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1c8bce'
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                indicator: [{
                    name: '2019年查询（次）',
                    max: 3000000,
                },
                {
                    name: '2019年制证(本)',
                    max: 599470,
                },
                {
                    name: '累计制证(本)',
                    max: 3000000,
                },
                {
                    name: '累计查询（次）',
                    max: 300000,
                },
                {
                    name: '累计接口调用（次）',
                    max: 399470,
                },
                {
                    name: '2019年接口调用（次）',
                    max: 2500000,
                },
                ]
            },
            series: [{
                name: '数据交换频率',
                type: 'radar',
                label: {
                    normal: {
                        show: true,
                        color: '#fff'
                    }
                },
                symbol: 'circle',
                itemStyle: {
                    color: '#fbbf0a'
                },
                areaStyle: {
                    color: 'rgba(12,249,255,0.7)'
                },
                lineStyle: {
                    color: 'transparent'
                },
                data: [{
                    value: [2398091, 199470, 2398091, 157778, 199470, 641866],
                }]
            }]
        };
        myChart.setOption(option);
    };
    auto();
    setInterval(() => {
        auto();
    }, 2000);

    // dataZoom-1
    void (function () {
        var myChart = echarts.init(document.getElementById('dataZoom-1'));
        var dataArr1 = [0, 19.90, 23.61, 29.28, 30.28, 35.28];
        var dataArr2 = [0, 11.43, 12.50, 20.00, 25.21, 28.24];
        var xArr = ['0/www.bilibili.com', '2019.6.14/www.bilibili.com', '2019.6.17/www.bilibili.com', '2019.6.21/www.bilibili.com', '2019.6.24/www.bilibili.com', '2019.6.28'];
        var option = {
            backgroundColor: '#003f6a',
            color: ['#db0808', '#fadd41'],
            grid: {
                top: '15%',
                left: '5%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (para) {
                    var str = para[0].name.replace(/\/.*$/, '') + '<br/>';
                    var icon;
                    for (var i = 0; i < para.length; i++) {
                        icon = '<i style="margin-right: 10px; display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: ' + para[i]
                            .color + ';"></i>';
                        str += icon + para[i].seriesName + ' ' + para[i].value + '%<br/>';
                    }
                    return str;
                },
                axisPointer: {
                    lineStyle: {
                        color: '#39627d'
                    }
                }
            },
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0],
                start: 0,
                end: 50,
                filterMode: 'filter',
                zoomLock: true
            }],
            legend: {
                right: 20,
                top: '5%',
                itemGap: 30,
                itemWidth: 22,
                itemHeight: 8,
                data: ['平均值', '单位变化值'],
                textStyle: {
                    fontSize: 14,
                    color: '#fff'
                },
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#3981a7'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    formatter: function (para) {
                        return para.replace(/\/.*$/, '');
                    },
                    textStyle: {
                        fontSize: 14,
                        color: '#00d7fe',
                        align: 'right'
                    },
                    showMinLabel: false,
                },
                axisTick: {
                    show: true,
                    inside: true
                },
                data: xArr,
                triggerEvent: true
            }],
            yAxis: [{
                name: '（百分比）',
                nameTextStyle: {
                    color: '#00d7fe'
                },
                type: 'value',
                max: '100',
                minInterval: 20,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3981a7'
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3981a7'
                    },
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#00d7fe',
                    },
                },
                axisTick: {
                    show: false,
                },
            }, {
                name: '',
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3981a7'
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                }
            }],
            series: [{
                name: '平均值',
                type: 'line',
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                data: function () {
                    var dataArr = dataArr1;
                    var item;
                    var resultArr = [];
                    for (var i = 0; i < dataArr.length; i++) {
                        if (i === 0) {
                            item = {
                                value: dataArr[i],
                                label: {
                                    show: false
                                }
                            };
                        } else {
                            item = {
                                value: dataArr[i],
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}%',
                                    align: 'right',
                                    textStyle: {
                                        fontSize: 14,
                                        color: '#fff'
                                    }
                                }
                            };
                        }
                        resultArr.push(item);
                    }
                    return resultArr;
                }()
            },
            {
                name: '单位变化值',
                type: 'line',
                smooth: false, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                data: function () {
                    var dataArr = dataArr2;
                    var item;
                    var resultArr = [];
                    for (var i = 0; i < dataArr.length; i++) {
                        if (i === 0) {
                            item = {
                                value: dataArr[i],
                                label: {
                                    show: false
                                }
                            };
                        } else {
                            item = {
                                value: dataArr[i],
                                label: {
                                    show: true,
                                    position: 'bottom',
                                    formatter: '{c}%',
                                    align: 'right',
                                    textStyle: {
                                        fontSize: 14,
                                        color: '#fff'
                                    }
                                }
                            };
                        }
                        resultArr.push(item);
                    }
                    return resultArr;
                }()
            },
            ]
        };
        myChart.setOption(option);
        myChart.on('click', 'xAxis.category', function (params) {
            alert(params.value);
        });
    })();
});