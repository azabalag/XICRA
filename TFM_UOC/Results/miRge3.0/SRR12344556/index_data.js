
var chart = Highcharts.chart('readLengthID_1', {
    title: {
        text: 'SRR12344556_trim_joined: Read Length Distribution'
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
        data: [91756, 95053, 111523, 121243, 143948, 182413, 186512, 147771, 109481, 79512, 79527, 75443, 67633, 68630, 69368, 57659, 54484, 48156, 44651, 37797, 33971, 29038, 27773, 23465, 20182, 20095, 18167, 15952, 14348, 13883, 12504, 10991, 8675, 17, 18, 4364, 3590, 2524, 1904, 1284, 984, 580, 676, 251, 136, 86, 60, 32, 32, 27, 21, 7, 8, 10, 16, 8, 10, 5, 12, 11, 8, 7, 9, 4, 6, 6, 7, 5, 7, 7, 6, 5, 4, 4, 8, 5, 5, 4, 5, 30],
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
        {name:'iso_3p',y:1348994,selected:true},{name:'iso_5p',y:140276,selected:true},{name:'iso_snv_central_supp',y:8779,selected:true},{name:'iso_add3p',y:256285,selected:true},{name:'iso_snv',y:82153,selected:true},{name:'iso_snv_central',y:8091,selected:true},{name:'iso_snv_seed',y:5938,selected:true},{name:'iso_snv_central_offset',y:1354,selected:true},{name:'iso_add5p',y:2534,selected:true},
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
        text: 'Read distribution of isomiRs for the top 20 abundant miRNAs: SRR12344556_trim_joined'
    },
    exporting: {
        filename: 'SRR12344556_trim_joined_isomir'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Hsa-Let-7-P10_5p', 'Hsa-Mir-10-P1b-v1_5p', 'Hsa-Mir-103-P1_3p', 'Hsa-Mir-126-v1_5p', 'Hsa-Mir-142-P1-v1_5p', 'Hsa-Mir-143_3p', 'Hsa-Mir-148-P1_3p', 'Hsa-Mir-15-P2a_5p', 'Hsa-Mir-181-P1a_5p', 'Hsa-Mir-191-v1_5p', 'Hsa-Mir-192-P1_5p', 'Hsa-Mir-22-P1a_3p', 'Hsa-Mir-26-P1_5p', 'Hsa-Mir-27-P1_3p', 'Hsa-Mir-30-P1b_5p', 'Hsa-Mir-423_5p', 'Hsa-Mir-451_5p', 'Hsa-Mir-486_5p', 'Hsa-Mir-92-P1a_3p', 'Hsa-Mir-92-P2_3p'],
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
        
        [0,0,0],[0,1,0],[0,2,0],[0,3,2.0],[0,4,9.9],[0,5,13.2],[0,6,6.1],[0,7,4.9],[0,8,2.6],[0,9,0.0],[0,10,3.3],[0,11,4.6],[0,12,7.4],[0,13,0.0],[0,14,2.3],[0,15,5.2],[0,16,0],[0,17,0],[0,18,0],[0,19,0],
        [1,0,0],[1,1,0],[1,2,0],[1,3,7.1],[1,4,9.2],[1,5,15.0],[1,6,12.9],[1,7,5.5],[1,8,4.8],[1,9,2.0],[1,10,3.7],[1,11,5.7],[1,12,7.6],[1,13,0],[1,14,11.1],[1,15,2.0],[1,16,0],[1,17,0],[1,18,0],[1,19,0],
        [2,0,2.0],[2,1,0],[2,2,0],[2,3,0],[2,4,4.9],[2,5,0],[2,6,6.6],[2,7,5.0],[2,8,3.7],[2,9,0],[2,10,3.7],[2,11,4.1],[2,12,6.6],[2,13,2.3],[2,14,2.0],[2,15,1.6],[2,16,0.0],[2,17,0.0],[2,18,0],[2,19,0],
        [3,0,0],[3,1,0],[3,2,0],[3,3,4.7],[3,4,3.6],[3,5,14.3],[3,6,0],[3,7,0],[3,8,0.0],[3,9,1.0],[3,10,5.4],[3,11,2.8],[3,12,3.5],[3,13,0],[3,14,2.0],[3,15,4.5],[3,16,0],[3,17,0],[3,18,0],[3,19,0],
        [4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,4.4],[4,5,0],[4,6,9.2],[4,7,3.3],[4,8,3.6],[4,9,2.8],[4,10,3.9],[4,11,2.6],[4,12,9.4],[4,13,0],[4,14,2.0],[4,15,5.5],[4,16,15.5],[4,17,1.6],[4,18,0],[4,19,0],
        [5,0,2.0],[5,1,6.3],[5,2,5.2],[5,3,7.8],[5,4,12.2],[5,5,13.1],[5,6,13.3],[5,7,9.0],[5,8,4.3],[5,9,3.0],[5,10,6.2],[5,11,4.9],[5,12,10.2],[5,13,3.0],[5,14,7.3],[5,15,2.3],[5,16,6.4],[5,17,0],[5,18,0],[5,19,0],
        [6,0,0],[6,1,0],[6,2,0.0],[6,3,5.8],[6,4,7.9],[6,5,14.7],[6,6,10.1],[6,7,8.4],[6,8,5.3],[6,9,2.3],[6,10,5.0],[6,11,6.1],[6,12,9.8],[6,13,1.6],[6,14,4.6],[6,15,5.7],[6,16,0],[6,17,0],[6,18,0],[6,19,0],
        [7,0,0],[7,1,0],[7,2,1.0],[7,3,4.7],[7,4,7.5],[7,5,0],[7,6,12.3],[7,7,6.7],[7,8,6.1],[7,9,2.8],[7,10,6.1],[7,11,6.8],[7,12,6.8],[7,13,2.6],[7,14,2.6],[7,15,6.5],[7,16,0],[7,17,0.0],[7,18,0],[7,19,0],
        [8,0,0],[8,1,0],[8,2,1.0],[8,3,1.0],[8,4,2.8],[8,5,0],[8,6,2.6],[8,7,8.1],[8,8,5.0],[8,9,2.3],[8,10,6.0],[8,11,5.2],[8,12,6.3],[8,13,0.0],[8,14,2.3],[8,15,4.8],[8,16,0],[8,17,1.0],[8,18,0],[8,19,0],
        [9,0,0],[9,1,0],[9,2,0],[9,3,1.0],[9,4,11.0],[9,5,14.3],[9,6,1.0],[9,7,8.4],[9,8,3.7],[9,9,0],[9,10,5.0],[9,11,3.2],[9,12,5.9],[9,13,1.6],[9,14,5.3],[9,15,4.2],[9,16,1.0],[9,17,1.0],[9,18,0],[9,19,0],
        [10,0,2.0],[10,1,2.3],[10,2,11.8],[10,3,12.2],[10,4,13.3],[10,5,14.8],[10,6,11.6],[10,7,7.0],[10,8,5.3],[10,9,2.6],[10,10,5.2],[10,11,5.0],[10,12,6.8],[10,13,5.5],[10,14,14.4],[10,15,7.1],[10,16,0],[10,17,2.0],[10,18,0],[10,19,0],
        [11,0,2.3],[11,1,0],[11,2,0.0],[11,3,2.8],[11,4,7.7],[11,5,17.1],[11,6,14.1],[11,7,12.8],[11,8,7.3],[11,9,5.7],[11,10,6.9],[11,11,6.9],[11,12,9.3],[11,13,3.6],[11,14,8.5],[11,15,5.7],[11,16,1.6],[11,17,0],[11,18,0],[11,19,0],
        [12,0,1.0],[12,1,0],[12,2,2.0],[12,3,3.6],[12,4,7.3],[12,5,0],[12,6,11.0],[12,7,7.9],[12,8,3.2],[12,9,1.6],[12,10,3.0],[12,11,3.3],[12,12,5.1],[12,13,0.0],[12,14,1.0],[12,15,2.3],[12,16,0],[12,17,0],[12,18,0],[12,19,0],
        [13,0,0.0],[13,1,2.8],[13,2,2.8],[13,3,4.5],[13,4,6.9],[13,5,7.9],[13,6,11.4],[13,7,8.9],[13,8,4.2],[13,9,1.0],[13,10,4.4],[13,11,5.3],[13,12,7.5],[13,13,1.0],[13,14,3.0],[13,15,3.0],[13,16,0],[13,17,0],[13,18,0],[13,19,0],
        [14,0,0],[14,1,2.0],[14,2,1.0],[14,3,3.0],[14,4,7.2],[14,5,14.1],[14,6,9.6],[14,7,8.4],[14,8,4.4],[14,9,0.0],[14,10,8.0],[14,11,4.3],[14,12,8.3],[14,13,6.4],[14,14,11.5],[14,15,3.7],[14,16,0],[14,17,0],[14,18,0],[14,19,0],
        [15,0,0],[15,1,2.0],[15,2,0.0],[15,3,7.6],[15,4,12.1],[15,5,15.0],[15,6,13.7],[15,7,15.2],[15,8,6.9],[15,9,3.0],[15,10,6.2],[15,11,6.8],[15,12,10.5],[15,13,7.7],[15,14,4.1],[15,15,5.7],[15,16,1.6],[15,17,0],[15,18,0],[15,19,0],
        [16,0,0],[16,1,0],[16,2,0.0],[16,3,6.8],[16,4,7.7],[16,5,13.2],[16,6,14.2],[16,7,15.9],[16,8,6.4],[16,9,4.6],[16,10,9.3],[16,11,6.5],[16,12,7.3],[16,13,0.0],[16,14,5.7],[16,15,5.3],[16,16,1.6],[16,17,0],[16,18,0],[16,19,0],
        [17,0,0],[17,1,6.6],[17,2,10.4],[17,3,13.1],[17,4,17.8],[17,5,19.3],[17,6,18.5],[17,7,15.2],[17,8,10.6],[17,9,8.5],[17,10,10.9],[17,11,11.4],[17,12,14.5],[17,13,10.0],[17,14,7.4],[17,15,12.6],[17,16,8.2],[17,17,7.1],[17,18,0],[17,19,0],
        [18,0,2.0],[18,1,4.0],[18,2,8.6],[18,3,13.8],[18,4,12.8],[18,5,16.9],[18,6,8.6],[18,7,4.1],[18,8,7.3],[18,9,3.8],[18,10,7.8],[18,11,8.4],[18,12,9.7],[18,13,5.8],[18,14,11.4],[18,15,6.7],[18,16,0],[18,17,1.0],[18,18,0],[18,19,0],
        [19,0,0.0],[19,1,0],[19,2,0.0],[19,3,4.2],[19,4,9.0],[19,5,14.4],[19,6,11.1],[19,7,13.7],[19,8,5.6],[19,9,1.6],[19,10,6.0],[19,11,7.1],[19,12,9.1],[19,13,2.0],[19,14,6.2],[19,15,3.3],[19,16,1.0],[19,17,1.0],[19,18,0],[19,19,0],
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
        categories: ['SRR12344556_trim_joined']
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
        [ { name: 'mature miRNA', data: [2888536.0]},
          { name: 'Hairpin miRNA', data: [212]},  
          { name: 'primary tRNA', data: [26]}, 
          { name: 'mature tRNA', data: [602644]}, 
          { name: 'snoRNA', data: [5168]}, 
          { name: 'rRNA', data: [157883]}, 
          { name: 'ncRNA', data: [764672]}, 
          { name: 'mRNA', data: [17603]},  
          { name: 'remaining reads', data: [2615825]}
        ]
    
});
        
var chart = Highcharts.chart('exprnDivID_1', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '60%',
    },

    title: {
        text: 'SRR12344556_trim_joined'
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
            value: 8676.3675
        },
        {
            'hc-a2': 'Let:7:P11_5p',
            name: 'Hsa-Let-7-P11_5p',
            x: 0,
            y: 1,
            value: 1846.264
        },
        {
            'hc-a2': 'Let:7:P12_5p',
            name: 'Hsa-Let-7-P12_5p',
            x: 0,
            y: 2,
            value: 4268.2522
        },
        {
            'hc-a2': 'Let:7:P1_5p',
            name: 'Hsa-Let-7-P1_5p/7-P3_5p/7-P6_5p/7-P7_5p',
            x: 0,
            y: 3,
            value: 4488.0867
        },
        {
            'hc-a2': 'Let:7:P8_5p',
            name: 'Hsa-Let-7-P8_5p',
            x: 0,
            y: 4,
            value: 2958.9384
        },
        {
            'hc-a2': 'Mir:10:P1a:v1_5p',
            name: 'Hsa-Mir-10-P1a-v1_5p/10-P1a-v2_5p',
            x: 0,
            y: 5,
            value: 5264.9508
        },
        {
            'hc-a2': 'Mir:10:P1b:v1_5p',
            name: 'Hsa-Mir-10-P1b-v1_5p/10-P1b-v2_5p',
            x: 0,
            y: 6,
            value: 16621.915
        },
        {
            'hc-a2': 'Mir:101:P1:v1_3p',
            name: 'Hsa-Mir-101-P1-v1_3p/101-P1-v2_3p/101-P2-v1_3p/101-P2-v2_3p',
            x: 0,
            y: 7,
            value: 4345.4539
        },
        {
            'hc-a2': 'Mir:103:P1_3p',
            name: 'Hsa-Mir-103-P1_3p/103-P2_3p/103-P3_3p',
            x: 1,
            y: 0,
            value: 7545.3448
        },
        {
            'hc-a2': 'Mir:126:v1_5p',
            name: 'Hsa-Mir-126-v1_5p/126-v2_5p*/126-v3_5p*',
            x: 1,
            y: 1,
            value: 7705.2874
        },
        {
            'hc-a2': 'Mir:142:P1:v1_5p',
            name: 'Hsa-Mir-142-P1-v1_5p/142-P1-v2_5p*/142-P1-v3_5p*',
            x: 1,
            y: 2,
            value: 21095.8077
        },
        {
            'hc-a2': 'Mir:143_3p',
            name: 'Hsa-Mir-143_3p',
            x: 1,
            y: 3,
            value: 8638.9784
        },
        {
            'hc-a2': 'Mir:144:v1_3p*',
            name: 'Hsa-Mir-144-v1_3p*/144-v2_3p*',
            x: 1,
            y: 4,
            value: 2594.0476
        },
        {
            'hc-a2': 'Mir:148:P1_3p',
            name: 'Hsa-Mir-148-P1_3p',
            x: 1,
            y: 5,
            value: 10212.786
        },
        {
            'hc-a2': 'Mir:15:P1a_5p',
            name: 'Hsa-Mir-15-P1a_5p',
            x: 1,
            y: 6,
            value: 4976.5694
        },
        {
            'hc-a2': 'Mir:15:P2a_5p',
            name: 'Hsa-Mir-15-P2a_5p/15-P2b_5p',
            x: 1,
            y: 7,
            value: 62081.2758
        },
        {
            'hc-a2': 'Mir:17:P5_5p',
            name: 'Hsa-Mir-17-P5_5p',
            x: 2,
            y: 0,
            value: 3815.0814
        },
        {
            'hc-a2': 'Mir:181:P1a_5p',
            name: 'Hsa-Mir-181-P1a_5p/181-P1b_5p',
            x: 2,
            y: 1,
            value: 7929.2763
        },
        {
            'hc-a2': 'Mir:186_5p',
            name: 'Hsa-Mir-186_5p',
            x: 2,
            y: 2,
            value: 5544.6773
        },
        {
            'hc-a2': 'Mir:191:v1_5p',
            name: 'Hsa-Mir-191-v1_5p/191-v2_5p',
            x: 2,
            y: 3,
            value: 9565.3992
        },
        {
            'hc-a2': 'Mir:192:P1_5p',
            name: 'Hsa-Mir-192-P1_5p/192-P2_5p',
            x: 2,
            y: 4,
            value: 19102.4104
        },
        {
            'hc-a2': 'Mir:21_5p',
            name: 'Hsa-Mir-21_5p',
            x: 2,
            y: 5,
            value: 3761.0748
        },
        {
            'hc-a2': 'Mir:22:P1a_3p',
            name: 'Hsa-Mir-22-P1a_3p',
            x: 2,
            y: 6,
            value: 56905.9897
        },
        {
            'hc-a2': 'Mir:223_3p',
            name: 'Hsa-Mir-223_3p',
            x: 2,
            y: 7,
            value: 3035.1015
        },
        {
            'hc-a2': 'Mir:26:P1_5p',
            name: 'Hsa-Mir-26-P1_5p/26-P2_5p',
            x: 3,
            y: 0,
            value: 6820.0639
        },
        {
            'hc-a2': 'Mir:27:P1_3p',
            name: 'Hsa-Mir-27-P1_3p/27-P2_3p',
            x: 3,
            y: 1,
            value: 17565.9919
        },
        {
            'hc-a2': 'Mir:28:P1_3p',
            name: 'Hsa-Mir-28-P1_3p',
            x: 3,
            y: 2,
            value: 1959.8163
        },
        {
            'hc-a2': 'Mir:28:P2_3p',
            name: 'Hsa-Mir-28-P2_3p',
            x: 3,
            y: 3,
            value: 2712.7929
        },
        {
            'hc-a2': 'Mir:30:P1a_5p',
            name: 'Hsa-Mir-30-P1a_5p',
            x: 3,
            y: 4,
            value: 2673.3266
        },
        {
            'hc-a2': 'Mir:30:P1b_5p',
            name: 'Hsa-Mir-30-P1b_5p',
            x: 3,
            y: 5,
            value: 7785.9511
        },
        {
            'hc-a2': 'Mir:30:P1c_5p',
            name: 'Hsa-Mir-30-P1c_5p',
            x: 3,
            y: 6,
            value: 5901.6055
        },
        {
            'hc-a2': 'Mir:378_3p',
            name: 'Hsa-Mir-378_3p',
            x: 3,
            y: 7,
            value: 1737.9046
        },
        {
            'hc-a2': 'Mir:423_3p',
            name: 'Hsa-Mir-423_3p',
            x: 4,
            y: 0,
            value: 2521.0003
        },
        {
            'hc-a2': 'Mir:423_5p',
            name: 'Hsa-Mir-423_5p',
            x: 4,
            y: 1,
            value: 32287.2902
        },
        {
            'hc-a2': 'Mir:451_5p',
            name: 'Hsa-Mir-451_5p',
            x: 4,
            y: 2,
            value: 39631.495
        },
        {
            'hc-a2': 'Mir:486_5p',
            name: 'Hsa-Mir-486_5p',
            x: 4,
            y: 3,
            value: 454210.3682
        },
        {
            'hc-a2': 'Mir:92:P1a_3p',
            name: 'Hsa-Mir-92-P1a_3p/92-P1b_3p',
            x: 4,
            y: 4,
            value: 82513.4255
        },
        {
            'hc-a2': 'Mir:92:P2_3p',
            name: 'Hsa-Mir-92-P2_3p',
            x: 4,
            y: 5,
            value: 13346.2072
        },
        {
            'hc-a2': 'Mir:92:P4_3p',
            name: 'Hsa-Mir-92-P4_3p',
            x: 4,
            y: 6,
            value: 1932.1206
        },
        {
            'hc-a2': 'Mir:96:P2_5p',
            name: 'Hsa-Mir-96-P2_5p',
            x: 4,
            y: 7,
            value: 4775.0833
        }]
    }]
});

        