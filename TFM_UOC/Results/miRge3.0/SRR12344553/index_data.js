
var chart = Highcharts.chart('readLengthID_1', {
    title: {
        text: 'SRR12344553_trim_joined: Read Length Distribution'
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
        data: [61359, 65027, 78938, 91144, 114245, 150269, 155818, 118511, 81697, 53823, 52382, 50253, 46117, 46316, 48086, 39997, 40170, 33937, 30012, 25747, 23336, 19758, 18169, 15400, 13326, 13124, 12062, 10389, 9232, 9755, 8938, 7807, 6065, 13, 6, 3168, 2528, 1652, 1307, 812, 627, 392, 733, 215, 105, 61, 44, 20, 17, 17, 25, 10, 6, 12, 13, 6, 10, 9, 4, 6, 9, 8, 5, 1, 10, 10, 18, 2, 4, 5, 2, 6, 3, 2, 3, 3, 5, 10, 3, 20],
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
        {name:'iso_3p',y:2022587,selected:true},{name:'iso_5p',y:168764,selected:true},{name:'iso_snv_seed',y:6531,selected:true},{name:'iso_snv_central',y:9890,selected:true},{name:'iso_add3p',y:262267,selected:true},{name:'iso_snv',y:108868,selected:true},{name:'iso_snv_central_supp',y:9822,selected:true},{name:'iso_snv_central_offset',y:1267,selected:true},{name:'iso_add5p',y:1766,selected:true},
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
        text: 'Read distribution of isomiRs for the top 20 abundant miRNAs: SRR12344553_trim_joined'
    },
    exporting: {
        filename: 'SRR12344553_trim_joined_isomir'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Hsa-Let-7-P10_5p', 'Hsa-Mir-10-P1b-v1_5p', 'Hsa-Mir-101-P1-v1_3p', 'Hsa-Mir-103-P1_3p', 'Hsa-Mir-126-v1_5p', 'Hsa-Mir-142-P1-v1_5p', 'Hsa-Mir-148-P1_3p', 'Hsa-Mir-15-P2a_5p', 'Hsa-Mir-181-P1a_5p', 'Hsa-Mir-191-v1_5p', 'Hsa-Mir-192-P1_5p', 'Hsa-Mir-22-P1a_3p', 'Hsa-Mir-26-P1_5p', 'Hsa-Mir-27-P1_3p', 'Hsa-Mir-30-P1b_5p', 'Hsa-Mir-423_5p', 'Hsa-Mir-451_5p', 'Hsa-Mir-486_5p', 'Hsa-Mir-92-P1a_3p', 'Hsa-Mir-92-P2_3p'],
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
        
        [0,0,1.0],[0,1,0],[0,2,0],[0,3,4.2],[0,4,11.5],[0,5,14.5],[0,6,6.4],[0,7,5.4],[0,8,4.3],[0,9,0.0],[0,10,4.7],[0,11,4.7],[0,12,7.6],[0,13,1.6],[0,14,2.8],[0,15,6.1],[0,16,0],[0,17,0],[0,18,0],[0,19,0],
        [1,0,0],[1,1,0],[1,2,1.0],[1,3,6.4],[1,4,8.7],[1,5,14.5],[1,6,12.5],[1,7,4.5],[1,8,4.9],[1,9,2.8],[1,10,4.2],[1,11,4.9],[1,12,6.9],[1,13,1.6],[1,14,10.6],[1,15,3.8],[1,16,0],[1,17,0],[1,18,0],[1,19,0],
        [2,0,0],[2,1,0],[2,2,0.0],[2,3,3.2],[2,4,4.4],[2,5,0],[2,6,5.4],[2,7,10.0],[2,8,3.5],[2,9,0],[2,10,3.8],[2,11,2.6],[2,12,8.2],[2,13,1.6],[2,14,8.1],[2,15,1.6],[2,16,0],[2,17,0],[2,18,0],[2,19,0],
        [3,0,0.0],[3,1,0],[3,2,0],[3,3,3.3],[3,4,6.0],[3,5,0],[3,6,6.0],[3,7,5.0],[3,8,4.3],[3,9,0.0],[3,10,4.2],[3,11,5.0],[3,12,6.4],[3,13,2.0],[3,14,3.7],[3,15,0.0],[3,16,0],[3,17,1.6],[3,18,0],[3,19,0],
        [4,0,0],[4,1,0],[4,2,0],[4,3,5.1],[4,4,2.3],[4,5,15.3],[4,6,0],[4,7,0.0],[4,8,2.0],[4,9,0.0],[4,10,6.4],[4,11,2.3],[4,12,4.6],[4,13,2.0],[4,14,2.3],[4,15,5.2],[4,16,0],[4,17,0],[4,18,0],[4,19,0],
        [5,0,0.0],[5,1,0],[5,2,0],[5,3,1.0],[5,4,3.9],[5,5,0],[5,6,9.4],[5,7,3.5],[5,8,3.8],[5,9,1.0],[5,10,4.5],[5,11,3.5],[5,12,9.6],[5,13,1.0],[5,14,3.8],[5,15,6.3],[5,16,15.8],[5,17,3.2],[5,18,0],[5,19,0],
        [6,0,0],[6,1,0],[6,2,2.0],[6,3,7.6],[6,4,8.8],[6,5,14.4],[6,6,10.2],[6,7,8.6],[6,8,5.5],[6,9,3.3],[6,10,4.4],[6,11,6.1],[6,12,9.2],[6,13,3.5],[6,14,4.5],[6,15,5.0],[6,16,0],[6,17,0],[6,18,0],[6,19,0],
        [7,0,0],[7,1,0],[7,2,0],[7,3,5.7],[7,4,8.0],[7,5,0],[7,6,13.4],[7,7,7.8],[7,8,6.7],[7,9,4.3],[7,10,6.6],[7,11,7.7],[7,12,7.7],[7,13,0],[7,14,3.5],[7,15,7.5],[7,16,1.0],[7,17,0],[7,18,0],[7,19,0],
        [8,0,0],[8,1,0],[8,2,0],[8,3,0],[8,4,1.0],[8,5,0],[8,6,0.0],[8,7,8.7],[8,8,4.3],[8,9,2.6],[8,10,5.8],[8,11,4.4],[8,12,6.2],[8,13,0],[8,14,3.9],[8,15,5.2],[8,16,0],[8,17,0],[8,18,0],[8,19,0],
        [9,0,0],[9,1,0.0],[9,2,0],[9,3,3.2],[9,4,11.9],[9,5,14.9],[9,6,2.3],[9,7,8.9],[9,8,4.9],[9,9,0],[9,10,5.2],[9,11,3.2],[9,12,6.9],[9,13,1.6],[9,14,6.3],[9,15,4.5],[9,16,1.0],[9,17,0],[9,18,0],[9,19,0],
        [10,0,0],[10,1,1.6],[10,2,11.2],[10,3,11.2],[10,4,12.6],[10,5,14.3],[10,6,11.0],[10,7,7.1],[10,8,3.8],[10,9,0.0],[10,10,4.7],[10,11,4.8],[10,12,6.5],[10,13,5.6],[10,14,13.7],[10,15,6.7],[10,16,0],[10,17,0],[10,18,0],[10,19,0],
        [11,0,0.0],[11,1,0],[11,2,1.0],[11,3,3.2],[11,4,7.8],[11,5,17.0],[11,6,14.2],[11,7,12.9],[11,8,7.5],[11,9,5.9],[11,10,7.0],[11,11,7.2],[11,12,9.4],[11,13,3.7],[11,14,8.2],[11,15,5.8],[11,16,1.6],[11,17,0],[11,18,0],[11,19,0],
        [12,0,0],[12,1,0],[12,2,1.6],[12,3,6.5],[12,4,9.2],[12,5,0],[12,6,12.0],[12,7,8.9],[12,8,4.8],[12,9,1.0],[12,10,4.5],[12,11,4.7],[12,12,5.7],[12,13,0.0],[12,14,2.0],[12,15,4.5],[12,16,0],[12,17,1.0],[12,18,0],[12,19,0],
        [13,0,0.0],[13,1,2.3],[13,2,2.0],[13,3,5.4],[13,4,7.8],[13,5,8.5],[13,6,11.5],[13,7,9.3],[13,8,4.3],[13,9,1.6],[13,10,4.1],[13,11,5.6],[13,12,7.8],[13,13,0.0],[13,14,2.3],[13,15,3.5],[13,16,0],[13,17,0],[13,18,0],[13,19,0],
        [14,0,0],[14,1,0],[14,2,0.0],[14,3,3.7],[14,4,8.1],[14,5,14.5],[14,6,9.8],[14,7,8.9],[14,8,5.5],[14,9,1.0],[14,10,8.5],[14,11,5.2],[14,12,8.4],[14,13,7.1],[14,14,12.0],[14,15,4.2],[14,16,0],[14,17,0.0],[14,18,0],[14,19,0.0],
        [15,0,0],[15,1,0.0],[15,2,1.6],[15,3,8.0],[15,4,12.1],[15,5,14.8],[15,6,13.3],[15,7,15.1],[15,8,6.6],[15,9,3.3],[15,10,5.8],[15,11,6.7],[15,12,10.2],[15,13,8.0],[15,14,3.5],[15,15,5.8],[15,16,2.8],[15,17,1.6],[15,18,0],[15,19,0],
        [16,0,0],[16,1,0],[16,2,1.0],[16,3,7.9],[16,4,8.8],[16,5,14.3],[16,6,15.7],[16,7,17.5],[16,8,8.3],[16,9,5.9],[16,10,11.0],[16,11,8.2],[16,12,8.8],[16,13,5.3],[16,14,7.5],[16,15,6.3],[16,16,3.8],[16,17,3.0],[16,18,0],[16,19,0],
        [17,0,0],[17,1,6.9],[17,2,10.5],[17,3,13.3],[17,4,17.9],[17,5,19.5],[17,6,18.9],[17,7,15.8],[17,8,11.1],[17,9,8.8],[17,10,11.2],[17,11,11.8],[17,12,14.9],[17,13,10.2],[17,14,8.4],[17,15,12.7],[17,16,8.6],[17,17,7.5],[17,18,0],[17,19,0],
        [18,0,4.1],[18,1,5.8],[18,2,9.9],[18,3,14.3],[18,4,12.7],[18,5,17.4],[18,6,9.3],[18,7,5.9],[18,8,7.8],[18,9,4.2],[18,10,8.6],[18,11,9.3],[18,12,10.0],[18,13,5.0],[18,14,11.6],[18,15,7.2],[18,16,1.0],[18,17,0.0],[18,18,0],[18,19,0],
        [19,0,0],[19,1,0],[19,2,1.0],[19,3,5.5],[19,4,9.4],[19,5,15.1],[19,6,12.0],[19,7,14.8],[19,8,6.7],[19,9,3.7],[19,10,7.0],[19,11,8.4],[19,12,10.1],[19,13,2.3],[19,14,6.7],[19,15,4.2],[19,16,0],[19,17,0.0],[19,18,0],[19,19,0],
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
        categories: ['SRR12344553_trim_joined']
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
        [ { name: 'mature miRNA', data: [3871832.0]},
          { name: 'Hairpin miRNA', data: [352]},  
          { name: 'primary tRNA', data: [36]}, 
          { name: 'mature tRNA', data: [544142]}, 
          { name: 'snoRNA', data: [4171]}, 
          { name: 'rRNA', data: [121953]}, 
          { name: 'ncRNA', data: [533153]}, 
          { name: 'mRNA', data: [13392]},  
          { name: 'remaining reads', data: [1688418]}
        ]
    
});
        
var chart = Highcharts.chart('exprnDivID_1', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '60%',
    },

    title: {
        text: 'SRR12344553_trim_joined'
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
            value: 12563.3034
        },
        {
            'hc-a2': 'Let:7:P11_5p',
            name: 'Hsa-Let-7-P11_5p',
            x: 0,
            y: 1,
            value: 2533.426
        },
        {
            'hc-a2': 'Let:7:P12_5p',
            name: 'Hsa-Let-7-P12_5p',
            x: 0,
            y: 2,
            value: 5736.5609
        },
        {
            'hc-a2': 'Let:7:P1_5p',
            name: 'Hsa-Let-7-P1_5p/7-P3_5p/7-P6_5p/7-P7_5p',
            x: 0,
            y: 3,
            value: 5234.7313
        },
        {
            'hc-a2': 'Let:7:P8_5p',
            name: 'Hsa-Let-7-P8_5p',
            x: 0,
            y: 4,
            value: 2521.5454
        },
        {
            'hc-a2': 'Mir:10:P1a:v1_5p',
            name: 'Hsa-Mir-10-P1a-v1_5p/10-P1a-v2_5p',
            x: 0,
            y: 5,
            value: 4021.8687
        },
        {
            'hc-a2': 'Mir:10:P1b:v1_5p',
            name: 'Hsa-Mir-10-P1b-v1_5p/10-P1b-v2_5p',
            x: 0,
            y: 6,
            value: 8877.193
        },
        {
            'hc-a2': 'Mir:101:P1:v1_3p',
            name: 'Hsa-Mir-101-P1-v1_3p/101-P1-v2_3p/101-P2-v1_3p/101-P2-v2_3p',
            x: 0,
            y: 7,
            value: 6714.9091
        },
        {
            'hc-a2': 'Mir:103:P1_3p',
            name: 'Hsa-Mir-103-P1_3p/103-P2_3p/103-P3_3p',
            x: 1,
            y: 0,
            value: 7634.3705
        },
        {
            'hc-a2': 'Mir:126:v1_5p',
            name: 'Hsa-Mir-126-v1_5p/126-v2_5p*/126-v3_5p*',
            x: 1,
            y: 1,
            value: 11290.0043
        },
        {
            'hc-a2': 'Mir:142:P1:v1_5p',
            name: 'Hsa-Mir-142-P1-v1_5p/142-P1-v2_5p*/142-P1-v3_5p*',
            x: 1,
            y: 2,
            value: 20057.6885
        },
        {
            'hc-a2': 'Mir:143_3p',
            name: 'Hsa-Mir-143_3p',
            x: 1,
            y: 3,
            value: 5535.6224
        },
        {
            'hc-a2': 'Mir:144:v1_3p*',
            name: 'Hsa-Mir-144-v1_3p*/144-v2_3p*',
            x: 1,
            y: 4,
            value: 4904.1384
        },
        {
            'hc-a2': 'Mir:148:P1_3p',
            name: 'Hsa-Mir-148-P1_3p',
            x: 1,
            y: 5,
            value: 6567.4337
        },
        {
            'hc-a2': 'Mir:15:P1a_5p',
            name: 'Hsa-Mir-15-P1a_5p',
            x: 1,
            y: 6,
            value: 6565.8841
        },
        {
            'hc-a2': 'Mir:15:P2a_5p',
            name: 'Hsa-Mir-15-P2a_5p/15-P2b_5p',
            x: 1,
            y: 7,
            value: 92916.2216
        },
        {
            'hc-a2': 'Mir:15:P2b_3p*',
            name: 'Hsa-Mir-15-P2b_3p*',
            x: 2,
            y: 0,
            value: 2399.6392
        },
        {
            'hc-a2': 'Mir:17:P5_5p',
            name: 'Hsa-Mir-17-P5_5p',
            x: 2,
            y: 1,
            value: 5518.3179
        },
        {
            'hc-a2': 'Mir:181:P1a_5p',
            name: 'Hsa-Mir-181-P1a_5p/181-P1b_5p',
            x: 2,
            y: 2,
            value: 6779.9946
        },
        {
            'hc-a2': 'Mir:186_5p',
            name: 'Hsa-Mir-186_5p',
            x: 2,
            y: 3,
            value: 5493.5235
        },
        {
            'hc-a2': 'Mir:191:v1_5p',
            name: 'Hsa-Mir-191-v1_5p/191-v2_5p',
            x: 2,
            y: 4,
            value: 10563.7331
        },
        {
            'hc-a2': 'Mir:192:P1_5p',
            name: 'Hsa-Mir-192-P1_5p/192-P2_5p',
            x: 2,
            y: 5,
            value: 9654.0862
        },
        {
            'hc-a2': 'Mir:21_5p',
            name: 'Hsa-Mir-21_5p',
            x: 2,
            y: 6,
            value: 3603.7204
        },
        {
            'hc-a2': 'Mir:22:P1a_3p',
            name: 'Hsa-Mir-22-P1a_3p',
            x: 2,
            y: 7,
            value: 42269.6543
        },
        {
            'hc-a2': 'Mir:223_3p',
            name: 'Hsa-Mir-223_3p',
            x: 3,
            y: 0,
            value: 3708.3221
        },
        {
            'hc-a2': 'Mir:26:P1_5p',
            name: 'Hsa-Mir-26-P1_5p/26-P2_5p',
            x: 3,
            y: 1,
            value: 11730.3643
        },
        {
            'hc-a2': 'Mir:26:P3_5p',
            name: 'Hsa-Mir-26-P3_5p',
            x: 3,
            y: 2,
            value: 2802.8076
        },
        {
            'hc-a2': 'Mir:27:P1_3p',
            name: 'Hsa-Mir-27-P1_3p/27-P2_3p',
            x: 3,
            y: 3,
            value: 7591.755
        },
        {
            'hc-a2': 'Mir:28:P2_3p',
            name: 'Hsa-Mir-28-P2_3p',
            x: 3,
            y: 4,
            value: 2148.0787
        },
        {
            'hc-a2': 'Mir:30:P1b_5p',
            name: 'Hsa-Mir-30-P1b_5p',
            x: 3,
            y: 5,
            value: 8123.5446
        },
        {
            'hc-a2': 'Mir:30:P1c_5p',
            name: 'Hsa-Mir-30-P1c_5p',
            x: 3,
            y: 6,
            value: 6259.3108
        },
        {
            'hc-a2': 'Mir:423_3p',
            name: 'Hsa-Mir-423_3p',
            x: 3,
            y: 7,
            value: 1927.7696
        },
        {
            'hc-a2': 'Mir:423_5p',
            name: 'Hsa-Mir-423_5p',
            x: 4,
            y: 0,
            value: 21688.1828
        },
        {
            'hc-a2': 'Mir:425_5p',
            name: 'Hsa-Mir-425_5p',
            x: 4,
            y: 1,
            value: 1868.6245
        },
        {
            'hc-a2': 'Mir:451_5p',
            name: 'Hsa-Mir-451_5p',
            x: 4,
            y: 2,
            value: 83861.0766
        },
        {
            'hc-a2': 'Mir:486_5p',
            name: 'Hsa-Mir-486_5p',
            x: 4,
            y: 3,
            value: 407963.4654
        },
        {
            'hc-a2': 'Mir:92:P1a_3p',
            name: 'Hsa-Mir-92-P1a_3p/92-P1b_3p',
            x: 4,
            y: 4,
            value: 89743.0467
        },
        {
            'hc-a2': 'Mir:92:P2_3p',
            name: 'Hsa-Mir-92-P2_3p',
            x: 4,
            y: 5,
            value: 18660.9336
        },
        {
            'hc-a2': 'Mir:92:P4_3p',
            name: 'Hsa-Mir-92-P4_3p',
            x: 4,
            y: 6,
            value: 2520.254
        },
        {
            'hc-a2': 'Mir:96:P2_5p',
            name: 'Hsa-Mir-96-P2_5p',
            x: 4,
            y: 7,
            value: 3409.7554
        }]
    }]
});

        