
var chart = Highcharts.chart('readLengthID_1', {
    title: {
        text: 'SRR12344554_trim_joined: Read Length Distribution'
    },
    chart: {
        marginRight: 80,
        zoomType: 'xy'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0]
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Frequency'
        }
    },
    series: [{
        name: 'Read length',
        pointWidth: 10,
        type: 'column',
        colorByPoint: false,
        data: [92977, 98795, 118181, 133537, 163028, 211796, 223522, 172057, 121375, 82881, 80136, 76651, 69190, 70619, 70930, 59907, 59825, 52267, 46368, 38411, 34304, 28877, 27548, 23727, 20355, 19698, 17928, 15548, 14138, 14571, 13208, 11624, 9003, 23, 21, 4665, 3880, 2495, 1904, 1122, 890, 621, 1131, 315, 123, 136, 56, 20, 37, 19, 27, 8, 12, 22, 15, 9, 6, 12, 7, 8, 16, 8, 10, 8, 8, 6, 10, 9, 2, 7, 6, 7, 6, 5, 5, 8, 4, 4, 6, 20],
    }]
});
        
Highcharts.chart('isomirDivID_1', {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'Cumulative isomiR variant type distribution of the samples'
    },
    exporting: {
        filename: 'isomiR_variants'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: 150,
            depth: 65
        }
    },
    series: [{
        name: 'Variant type',
        data: [
        {name:'iso_3p',y:2325430,selected:true},{name:'iso_5p',y:200017,selected:true},{name:'iso_snv_seed',y:9046,selected:true},{name:'iso_snv_central_supp',y:13357,selected:true},{name:'iso_snv_central',y:12327,selected:true},{name:'iso_snv',y:133384,selected:true},{name:'iso_add3p',y:424334,selected:true},{name:'iso_snv_central_offset',y:1954,selected:true},{name:'iso_add5p',y:2465,selected:true},
        ]
    }]
});
        
Highcharts.chart('isomirDivID_2', {
    chart: {
        type: 'heatmap',
        marginTop: 50,
        marginBottom: 100
    },
    title: {
        text: 'Read distribution of isomiRs for the top 20 abundant miRNAs: SRR12344554_trim_joined'
    },
    exporting: {
        filename: 'SRR12344554_trim_joined_isomir'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Hsa-Let-7-P10_5p', 'Hsa-Let-7-P1_5p', 'Hsa-Mir-10-P1b-v1_5p', 'Hsa-Mir-103-P1_3p', 'Hsa-Mir-126-v1_5p', 'Hsa-Mir-142-P1-v1_5p', 'Hsa-Mir-148-P1_3p', 'Hsa-Mir-15-P2a_5p', 'Hsa-Mir-181-P1a_5p', 'Hsa-Mir-191-v1_5p', 'Hsa-Mir-192-P1_5p', 'Hsa-Mir-22-P1a_3p', 'Hsa-Mir-26-P1_5p', 'Hsa-Mir-27-P1_3p', 'Hsa-Mir-30-P1b_5p', 'Hsa-Mir-423_5p', 'Hsa-Mir-451_5p', 'Hsa-Mir-486_5p', 'Hsa-Mir-92-P1a_3p', 'Hsa-Mir-92-P2_3p'],
        title: "Variant type",
        labels: {
            style: {
                color: 'red',
                fontSize: 10
            }
        }
    },
    yAxis: {
        categories: ['3p: >=5', '3p: +4', '3p: +3', '3p: +2', '3p: +1', 'Canonical', '3p: -1', '3p: -2', 'iso_snv_seed','iso_snv_central_offset', 'iso_snv_central','iso_snv_central_supp', 'iso_snv','5p: -2', '5p: -1','5p: +1','5p: +2','5p: +3','5p: +4','5p: >=5'],
        title: "miRNA - isomiRs (5p -> 3p)",
    },
    colorAxis: {
        min: 0,
        stops: [
            [0, '#e3fdff'],
            [0.5, '#055dff'],
            [0.9, '#000000']
        ]
        /*
        stops: [
            [0, '#F5F5F5'],
            [0.05, '#c0f8fc'],
            [0.1, '#f7cafa'],
            [0.2, '#FAFF56'],
            [0.5, '#FC56FF'],
            [0.7, '#A798FF'],
            [0.9, '#c4463a']
        ]*/
        //minColor: '#b0ceff'
        //maxColor: '#0363ff'
        //minColor: '#FFFFFF',
        //maxColor: Highcharts.getOptions().colors[0]
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'middle',
        y: 25,
        symbolHeight: 250
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> has log2(read counts) of <br><b>' +
            this.point.value + '</b> at <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },
    series: [{
        name: 'variant read counts',
        borderWidth: 1,
        data: [
        
        [0,0,0],[0,1,0],[0,2,0],[0,3,4.5],[0,4,12.1],[0,5,15.3],[0,6,7.3],[0,7,6.1],[0,8,5.0],[0,9,2.0],[0,10,5.4],[0,11,6.0],[0,12,8.6],[0,13,0],[0,14,4.0],[0,15,6.8],[0,16,3.0],[0,17,0],[0,18,0],[0,19,0],
        [1,0,0],[1,1,0],[1,2,0.0],[1,3,5.9],[1,4,10.0],[1,5,0],[1,6,7.6],[1,7,6.4],[1,8,2.8],[1,9,1.0],[1,10,2.0],[1,11,3.3],[1,12,8.0],[1,13,2.6],[1,14,4.9],[1,15,5.8],[1,16,0.0],[1,17,0],[1,18,0],[1,19,0],
        [2,0,0],[2,1,0],[2,2,1.6],[2,3,8.2],[2,4,10.0],[2,5,15.4],[2,6,13.4],[2,7,5.6],[2,8,5.2],[2,9,2.8],[2,10,4.8],[2,11,6.0],[2,12,8.2],[2,13,0],[2,14,11.6],[2,15,3.9],[2,16,0],[2,17,1.0],[2,18,0],[2,19,0],
        [3,0,0],[3,1,0],[3,2,0.0],[3,3,4.2],[3,4,6.7],[3,5,0],[3,6,6.7],[3,7,5.2],[3,8,5.5],[3,9,1.6],[3,10,4.1],[3,11,5.1],[3,12,7.1],[3,13,0.0],[3,14,3.0],[3,15,1.6],[3,16,0],[3,17,0],[3,18,0],[3,19,0],
        [4,0,0],[4,1,0],[4,2,0],[4,3,5.7],[4,4,3.5],[4,5,15.3],[4,6,0],[4,7,2.6],[4,8,2.0],[4,9,1.0],[4,10,6.5],[4,11,2.3],[4,12,4.5],[4,13,0.0],[4,14,2.8],[4,15,5.1],[4,16,0],[4,17,0],[4,18,0],[4,19,0],
        [5,0,0.0],[5,1,0],[5,2,0],[5,3,1.0],[5,4,4.3],[5,5,0],[5,6,9.3],[5,7,4.6],[5,8,3.5],[5,9,0.0],[5,10,4.9],[5,11,2.8],[5,12,9.5],[5,13,2.3],[5,14,4.3],[5,15,6.0],[5,16,16.0],[5,17,3.8],[5,18,0],[5,19,0],
        [6,0,0],[6,1,0.0],[6,2,2.8],[6,3,7.6],[6,4,9.2],[6,5,14.7],[6,6,10.3],[6,7,8.4],[6,8,6.0],[6,9,3.5],[6,10,5.3],[6,11,6.2],[6,12,9.6],[6,13,2.3],[6,14,4.2],[6,15,5.7],[6,16,0],[6,17,0],[6,18,0],[6,19,0],
        [7,0,0],[7,1,0],[7,2,0],[7,3,5.5],[7,4,8.2],[7,5,0],[7,6,13.3],[7,7,7.7],[7,8,6.9],[7,9,4.8],[7,10,7.0],[7,11,7.8],[7,12,7.7],[7,13,2.6],[7,14,3.0],[7,15,7.6],[7,16,0],[7,17,0],[7,18,0],[7,19,0],
        [8,0,0],[8,1,0],[8,2,0],[8,3,0],[8,4,2.0],[8,5,0],[8,6,1.0],[8,7,9.3],[8,8,5.2],[8,9,3.3],[8,10,6.2],[8,11,5.4],[8,12,7.0],[8,13,0],[8,14,3.0],[8,15,6.0],[8,16,0],[8,17,0],[8,18,0],[8,19,0],
        [9,0,0],[9,1,0],[9,2,0],[9,3,0.0],[9,4,11.7],[9,5,14.8],[9,6,1.0],[9,7,8.9],[9,8,4.2],[9,9,1.0],[9,10,5.4],[9,11,2.6],[9,12,6.8],[9,13,1.0],[9,14,6.1],[9,15,5.0],[9,16,0],[9,17,0],[9,18,0],[9,19,0],
        [10,0,0],[10,1,2.8],[10,2,11.3],[10,3,11.7],[10,4,13.1],[10,5,14.3],[10,6,11.3],[10,7,6.7],[10,8,4.6],[10,9,1.0],[10,10,5.5],[10,11,5.4],[10,12,7.0],[10,13,5.6],[10,14,14.2],[10,15,6.7],[10,16,0.0],[10,17,0],[10,18,0],[10,19,0],
        [11,0,1.0],[11,1,0],[11,2,0],[11,3,2.0],[11,4,8.0],[11,5,17.4],[11,6,14.6],[11,7,13.3],[11,8,7.8],[11,9,6.8],[11,10,7.8],[11,11,7.6],[11,12,9.9],[11,13,3.9],[11,14,8.9],[11,15,6.2],[11,16,2.3],[11,17,0],[11,18,0],[11,19,0],
        [12,0,0.0],[12,1,0.0],[12,2,3.8],[12,3,6.4],[12,4,9.0],[12,5,0],[12,6,11.7],[12,7,8.5],[12,8,4.4],[12,9,2.0],[12,10,4.2],[12,11,4.6],[12,12,6.0],[12,13,0],[12,14,2.0],[12,15,4.2],[12,16,1.0],[12,17,0],[12,18,0],[12,19,0],
        [13,0,1.6],[13,1,3.0],[13,2,3.7],[13,3,5.4],[13,4,7.8],[13,5,8.1],[13,6,11.9],[13,7,9.7],[13,8,4.7],[13,9,0.0],[13,10,4.2],[13,11,5.4],[13,12,8.0],[13,13,3.6],[13,14,2.0],[13,15,4.5],[13,16,0.0],[13,17,0],[13,18,0],[13,19,0],
        [14,0,0],[14,1,0.0],[14,2,0.0],[14,3,3.3],[14,4,8.1],[14,5,14.7],[14,6,10.0],[14,7,9.0],[14,8,5.6],[14,9,2.3],[14,10,8.9],[14,11,5.9],[14,12,8.7],[14,13,7.1],[14,14,12.2],[14,15,5.1],[14,16,0],[14,17,0],[14,18,0],[14,19,1.6],
        [15,0,0],[15,1,3.2],[15,2,4.5],[15,3,8.0],[15,4,12.3],[15,5,15.2],[15,6,14.0],[15,7,15.5],[15,8,7.3],[15,9,3.8],[15,10,6.1],[15,11,7.4],[15,12,10.6],[15,13,8.5],[15,14,5.0],[15,15,6.0],[15,16,2.0],[15,17,0.0],[15,18,0],[15,19,0],
        [16,0,0],[16,1,0],[16,2,3.8],[16,3,8.1],[16,4,8.9],[16,5,14.6],[16,6,15.5],[16,7,17.4],[16,8,8.5],[16,9,5.8],[16,10,10.9],[16,11,8.0],[16,12,8.9],[16,13,5.4],[16,14,7.4],[16,15,6.4],[16,16,2.6],[16,17,1.6],[16,18,0],[16,19,0],
        [17,0,0],[17,1,7.9],[17,2,11.2],[17,3,13.7],[17,4,18.6],[17,5,19.8],[17,6,19.3],[17,7,16.0],[17,8,11.6],[17,9,9.3],[17,10,11.6],[17,11,12.3],[17,12,15.3],[17,13,10.8],[17,14,9.2],[17,15,13.2],[17,16,8.8],[17,17,7.7],[17,18,0],[17,19,0],
        [18,0,3.9],[18,1,6.0],[18,2,10.2],[18,3,14.3],[18,4,12.8],[18,5,17.6],[18,6,9.6],[18,7,6.0],[18,8,8.0],[18,9,5.3],[18,10,8.9],[18,11,9.5],[18,12,10.2],[18,13,6.5],[18,14,11.9],[18,15,7.1],[18,16,0.0],[18,17,0],[18,18,0],[18,19,0],
        [19,0,0.0],[19,1,0],[19,2,1.0],[19,3,5.4],[19,4,9.3],[19,5,15.5],[19,6,12.3],[19,7,14.9],[19,8,6.9],[19,9,4.8],[19,10,7.4],[19,11,8.5],[19,12,10.1],[19,13,4.6],[19,14,7.1],[19,15,4.6],[19,16,0],[19,17,0],[19,18,0],[19,19,0],
        ],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }],
});
        
Highcharts.chart('smallRNADist', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Read distribution'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['SRR12344554_trim_joined']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total read distribution'
        }
    },
    legend: {
        reversed: true
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        series: {
            stacking: 'percent'
        }
    },
    series: 
        [ { name: 'mature miRNA', data: [4654680.0]},
          { name: 'Hairpin miRNA', data: [522]},  
          { name: 'primary tRNA', data: [36]}, 
          { name: 'mature tRNA', data: [697319]}, 
          { name: 'snoRNA', data: [3607]}, 
          { name: 'rRNA', data: [185918]}, 
          { name: 'ncRNA', data: [700745]}, 
          { name: 'mRNA', data: [16317]},  
          { name: 'remaining reads', data: [2579747]}
        ]
    
});
        
var chart = Highcharts.chart('exprnDivID_1', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '60%',
    },

    title: {
        text: 'SRR12344554_trim_joined'
    },
	subtitle: {
        text: 'Read Per Million (RPM) values of 40 most abundant miRNAs'
    },
    credits: {
        enabled: false
    },
    
    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
            }
        }
    },
    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 2000,
            color: '#DCDCDC',
            name: '< 2k RPM' 
        }, {
            from: 2000,
            to: 5000,
            color: '#D6EAF8', //#C0C0C0
            name: '2 - 5k RPM'
        }, {
            from: 5000,
            to: 15000,
            color: '#F9EDB3',
            name: '5 - 15k RPM'
        }, {
            from: 15000,
            to: 25000,
            color: '#FFC428',
            name: '15 - 25k RPM'
        }, {
            from: 25000,
            to: 35000,
            color: '#FF7987',
            name: '25 - 35k RPM'
        },{
            from: 35000,
            color: '#FF2371',
            name: '> 35k RPM'
        }]
    },
    tooltip: {
        headerFormat: '',
        pointFormat: 'The RPM of <b> {point.name}</b> is <b>{point.value}</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false,
                    fontSize: 9
                }
            }
        }
    },
    series: [{
        name: '',
		pointPadding: 1.2,
        data: [ 
        {
            'hc-a2': 'Let:7:P10_5p',
            name: 'Hsa-Let-7-P10_5p/7-P5_5p',
            x: 0,
            y: 0,
            value: 16475.4613
        },
        {
            'hc-a2': 'Let:7:P11_5p',
            name: 'Hsa-Let-7-P11_5p',
            x: 0,
            y: 1,
            value: 2505.0057
        },
        {
            'hc-a2': 'Let:7:P12_5p',
            name: 'Hsa-Let-7-P12_5p',
            x: 0,
            y: 2,
            value: 6163.9039
        },
        {
            'hc-a2': 'Let:7:P1_5p',
            name: 'Hsa-Let-7-P1_5p/7-P3_5p/7-P6_5p/7-P7_5p',
            x: 0,
            y: 3,
            value: 6349.5235
        },
        {
            'hc-a2': 'Let:7:P8_5p',
            name: 'Hsa-Let-7-P8_5p',
            x: 0,
            y: 4,
            value: 3190.982
        },
        {
            'hc-a2': 'Mir:10:P1a:v1_5p',
            name: 'Hsa-Mir-10-P1a-v1_5p/10-P1a-v2_5p',
            x: 0,
            y: 5,
            value: 5052.3344
        },
        {
            'hc-a2': 'Mir:10:P1b:v1_5p',
            name: 'Hsa-Mir-10-P1b-v1_5p/10-P1b-v2_5p',
            x: 0,
            y: 6,
            value: 14007.4076
        },
        {
            'hc-a2': 'Mir:101:P1:v1_3p',
            name: 'Hsa-Mir-101-P1-v1_3p/101-P1-v2_3p/101-P2-v1_3p/101-P2-v2_3p',
            x: 0,
            y: 7,
            value: 5755.9274
        },
        {
            'hc-a2': 'Mir:103:P1_3p',
            name: 'Hsa-Mir-103-P1_3p/103-P2_3p/103-P3_3p',
            x: 1,
            y: 0,
            value: 7713.3122
        },
        {
            'hc-a2': 'Mir:126:v1_5p',
            name: 'Hsa-Mir-126-v1_5p/126-v2_5p*/126-v3_5p*',
            x: 1,
            y: 1,
            value: 9562.2041
        },
        {
            'hc-a2': 'Mir:142:P1:v1_5p',
            name: 'Hsa-Mir-142-P1-v1_5p/142-P1-v2_5p*/142-P1-v3_5p*',
            x: 1,
            y: 2,
            value: 18518.7811
        },
        {
            'hc-a2': 'Mir:143_3p',
            name: 'Hsa-Mir-143_3p',
            x: 1,
            y: 3,
            value: 5610.4824
        },
        {
            'hc-a2': 'Mir:144:v1_3p*',
            name: 'Hsa-Mir-144-v1_3p*/144-v2_3p*',
            x: 1,
            y: 4,
            value: 3481.2275
        },
        {
            'hc-a2': 'Mir:148:P1_3p',
            name: 'Hsa-Mir-148-P1_3p',
            x: 1,
            y: 5,
            value: 6678.6546
        },
        {
            'hc-a2': 'Mir:15:P1a_5p',
            name: 'Hsa-Mir-15-P1a_5p',
            x: 1,
            y: 6,
            value: 6132.3227
        },
        {
            'hc-a2': 'Mir:15:P2a_5p',
            name: 'Hsa-Mir-15-P2a_5p/15-P2b_5p',
            x: 1,
            y: 7,
            value: 83019.026
        },
        {
            'hc-a2': 'Mir:15:P2b_3p*',
            name: 'Hsa-Mir-15-P2b_3p*',
            x: 2,
            y: 0,
            value: 2004.0046
        },
        {
            'hc-a2': 'Mir:17:P5_5p',
            name: 'Hsa-Mir-17-P5_5p',
            x: 2,
            y: 1,
            value: 4426.5127
        },
        {
            'hc-a2': 'Mir:181:P1a_5p',
            name: 'Hsa-Mir-181-P1a_5p/181-P1b_5p',
            x: 2,
            y: 2,
            value: 8222.692
        },
        {
            'hc-a2': 'Mir:186_5p',
            name: 'Hsa-Mir-186_5p',
            x: 2,
            y: 3,
            value: 5320.022
        },
        {
            'hc-a2': 'Mir:191:v1_5p',
            name: 'Hsa-Mir-191-v1_5p/191-v2_5p',
            x: 2,
            y: 4,
            value: 8362.7661
        },
        {
            'hc-a2': 'Mir:192:P1_5p',
            name: 'Hsa-Mir-192-P1_5p/192-P2_5p',
            x: 2,
            y: 5,
            value: 9549.099
        },
        {
            'hc-a2': 'Mir:21_5p',
            name: 'Hsa-Mir-21_5p',
            x: 2,
            y: 6,
            value: 4237.6705
        },
        {
            'hc-a2': 'Mir:22:P1a_3p',
            name: 'Hsa-Mir-22-P1a_3p',
            x: 2,
            y: 7,
            value: 44620.0383
        },
        {
            'hc-a2': 'Mir:223_3p',
            name: 'Hsa-Mir-223_3p',
            x: 3,
            y: 0,
            value: 1784.2258
        },
        {
            'hc-a2': 'Mir:26:P1_5p',
            name: 'Hsa-Mir-26-P1_5p/26-P2_5p',
            x: 3,
            y: 1,
            value: 9472.6168
        },
        {
            'hc-a2': 'Mir:26:P3_5p',
            name: 'Hsa-Mir-26-P3_5p',
            x: 3,
            y: 2,
            value: 2209.8189
        },
        {
            'hc-a2': 'Mir:27:P1_3p',
            name: 'Hsa-Mir-27-P1_3p/27-P2_3p',
            x: 3,
            y: 3,
            value: 7320.804
        },
        {
            'hc-a2': 'Mir:28:P2_3p',
            name: 'Hsa-Mir-28-P2_3p',
            x: 3,
            y: 4,
            value: 2829.1956
        },
        {
            'hc-a2': 'Mir:30:P1a_5p',
            name: 'Hsa-Mir-30-P1a_5p',
            x: 3,
            y: 5,
            value: 1591.5165
        },
        {
            'hc-a2': 'Mir:30:P1b_5p',
            name: 'Hsa-Mir-30-P1b_5p',
            x: 3,
            y: 6,
            value: 7705.7929
        },
        {
            'hc-a2': 'Mir:30:P1c_5p',
            name: 'Hsa-Mir-30-P1c_5p',
            x: 3,
            y: 7,
            value: 5805.1252
        },
        {
            'hc-a2': 'Mir:423_3p',
            name: 'Hsa-Mir-423_3p',
            x: 4,
            y: 0,
            value: 2059.4327
        },
        {
            'hc-a2': 'Mir:423_5p',
            name: 'Hsa-Mir-423_5p',
            x: 4,
            y: 1,
            value: 23887.7861
        },
        {
            'hc-a2': 'Mir:451_5p',
            name: 'Hsa-Mir-451_5p',
            x: 4,
            y: 2,
            value: 63000.0344
        },
        {
            'hc-a2': 'Mir:486_5p',
            name: 'Hsa-Mir-486_5p',
            x: 4,
            y: 3,
            value: 440875.8497
        },
        {
            'hc-a2': 'Mir:92:P1a_3p',
            name: 'Hsa-Mir-92-P1a_3p/92-P1b_3p',
            x: 4,
            y: 4,
            value: 82065.7918
        },
        {
            'hc-a2': 'Mir:92:P2_3p',
            name: 'Hsa-Mir-92-P2_3p',
            x: 4,
            y: 5,
            value: 18525.0114
        },
        {
            'hc-a2': 'Mir:92:P4_3p',
            name: 'Hsa-Mir-92-P4_3p',
            x: 4,
            y: 6,
            value: 2237.9627
        },
        {
            'hc-a2': 'Mir:96:P2_5p',
            name: 'Hsa-Mir-96-P2_5p',
            x: 4,
            y: 7,
            value: 3371.6604
        }]
    }]
});

        