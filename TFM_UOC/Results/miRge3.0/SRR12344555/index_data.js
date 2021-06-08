
var chart = Highcharts.chart('readLengthID_1', {
    title: {
        text: 'SRR12344555_trim_joined: Read Length Distribution'
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
        data: [88928, 93435, 114196, 131315, 167926, 220516, 236804, 176931, 116054, 72230, 67169, 65555, 60919, 59383, 60828, 57268, 67076, 48519, 35691, 29431, 27389, 23635, 23326, 20303, 17651, 16941, 14663, 13190, 12838, 13777, 12635, 10101, 7541, 12, 13, 3788, 3086, 1840, 1290, 711, 571, 498, 841, 258, 101, 80, 31, 9, 53, 14, 25, 13, 13, 10, 12, 14, 9, 14, 9, 8, 10, 10, 7, 9, 15, 16, 20, 4, 10, 8, 4, 9, 9, 5, 7, 8, 3, 8, 7, 18],
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
        {name:'iso_3p',y:3101798,selected:true},{name:'iso_5p',y:285875,selected:true},{name:'iso_snv_seed',y:13161,selected:true},{name:'iso_snv_central',y:18178,selected:true},{name:'iso_snv',y:164248,selected:true},{name:'iso_snv_central_supp',y:17954,selected:true},{name:'iso_add3p',y:460020,selected:true},{name:'iso_snv_central_offset',y:2579,selected:true},{name:'iso_add5p',y:2529,selected:true},
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
        text: 'Read distribution of isomiRs for the top 20 abundant miRNAs: SRR12344555_trim_joined'
    },
    exporting: {
        filename: 'SRR12344555_trim_joined_isomir'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Hsa-Let-7-P10_5p', 'Hsa-Mir-10-P1b-v1_5p', 'Hsa-Mir-101-P1-v1_3p', 'Hsa-Mir-103-P1_3p', 'Hsa-Mir-126-v1_5p', 'Hsa-Mir-142-P1-v1_5p', 'Hsa-Mir-143_3p', 'Hsa-Mir-15-P2a_5p', 'Hsa-Mir-181-P1a_5p', 'Hsa-Mir-191-v1_5p', 'Hsa-Mir-192-P1_5p', 'Hsa-Mir-22-P1a_3p', 'Hsa-Mir-26-P1_5p', 'Hsa-Mir-30-P1b_5p', 'Hsa-Mir-30-P1c_5p', 'Hsa-Mir-423_5p', 'Hsa-Mir-451_5p', 'Hsa-Mir-486_5p', 'Hsa-Mir-92-P1a_3p', 'Hsa-Mir-92-P2_3p'],
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
        
        [0,0,0],[0,1,0],[0,2,1.6],[0,3,6.1],[0,4,13.2],[0,5,16.3],[0,6,7.4],[0,7,5.6],[0,8,5.4],[0,9,2.8],[0,10,6.1],[0,11,6.7],[0,12,8.8],[0,13,2.0],[0,14,5.0],[0,15,7.5],[0,16,0.0],[0,17,0.0],[0,18,0],[0,19,0],
        [1,0,0],[1,1,0],[1,2,2.0],[1,3,7.3],[1,4,9.0],[1,5,14.9],[1,6,13.3],[1,7,4.5],[1,8,5.2],[1,9,2.6],[1,10,4.2],[1,11,5.8],[1,12,7.8],[1,13,2.6],[1,14,11.2],[1,15,3.8],[1,16,0],[1,17,0],[1,18,0],[1,19,0],
        [2,0,0],[2,1,1.0],[2,2,1.6],[2,3,5.1],[2,4,6.1],[2,5,0],[2,6,7.0],[2,7,11.0],[2,8,5.0],[2,9,0.0],[2,10,4.2],[2,11,2.3],[2,12,8.9],[2,13,3.5],[2,14,8.7],[2,15,1.6],[2,16,0],[2,17,0],[2,18,0],[2,19,0],
        [3,0,1.6],[3,1,0],[3,2,0.0],[3,3,6.1],[3,4,8.2],[3,5,0],[3,6,7.3],[3,7,6.2],[3,8,5.8],[3,9,2.0],[3,10,5.2],[3,11,6.2],[3,12,8.3],[3,13,3.7],[3,14,3.5],[3,15,2.8],[3,16,0],[3,17,0],[3,18,0],[3,19,0],
        [4,0,0],[4,1,0],[4,2,0],[4,3,6.1],[4,4,3.3],[4,5,16.5],[4,6,1.0],[4,7,2.8],[4,8,1.6],[4,9,3.0],[4,10,7.8],[4,11,2.6],[4,12,5.6],[4,13,3.5],[4,14,2.0],[4,15,6.2],[4,16,1.0],[4,17,0.0],[4,18,0],[4,19,0],
        [5,0,0],[5,1,0],[5,2,0],[5,3,2.3],[5,4,3.7],[5,5,0],[5,6,9.9],[5,7,5.0],[5,8,5.0],[5,9,2.8],[5,10,5.0],[5,11,4.7],[5,12,10.1],[5,13,3.9],[5,14,5.2],[5,15,6.9],[5,16,16.3],[5,17,5.1],[5,18,0],[5,19,0],
        [6,0,1.0],[6,1,5.8],[6,2,5.2],[6,3,9.3],[6,4,13.2],[6,5,13.9],[6,6,14.4],[6,7,9.7],[6,8,6.0],[6,9,3.0],[6,10,6.7],[6,11,6.1],[6,12,11.0],[6,13,2.3],[6,14,7.6],[6,15,0.0],[6,16,5.6],[6,17,0],[6,18,0],[6,19,0],
        [7,0,0],[7,1,0],[7,2,1.0],[7,3,5.7],[7,4,8.6],[7,5,0],[7,6,13.8],[7,7,7.9],[7,8,7.7],[7,9,5.0],[7,10,7.6],[7,11,8.5],[7,12,8.4],[7,13,1.0],[7,14,4.0],[7,15,7.7],[7,16,1.0],[7,17,1.0],[7,18,0],[7,19,0],
        [8,0,0],[8,1,1.0],[8,2,1.6],[8,3,2.3],[8,4,2.0],[8,5,0],[8,6,3.0],[8,7,10.0],[8,8,5.9],[8,9,3.0],[8,10,7.7],[8,11,5.9],[8,12,7.1],[8,13,1.0],[8,14,5.1],[8,15,6.3],[8,16,0],[8,17,0.0],[8,18,0],[8,19,0],
        [9,0,0],[9,1,0.0],[9,2,2.8],[9,3,4.2],[9,4,13.3],[9,5,16.1],[9,6,3.8],[9,7,9.7],[9,8,6.3],[9,9,1.6],[9,10,6.6],[9,11,5.3],[9,12,8.0],[9,13,3.0],[9,14,6.9],[9,15,6.0],[9,16,0],[9,17,0],[9,18,0],[9,19,0],
        [10,0,0.0],[10,1,2.8],[10,2,10.5],[10,3,11.4],[10,4,12.8],[10,5,14.2],[10,6,11.2],[10,7,7.4],[10,8,4.7],[10,9,1.0],[10,10,5.1],[10,11,5.3],[10,12,6.6],[10,13,5.1],[10,14,14.1],[10,15,6.3],[10,16,0.0],[10,17,0],[10,18,0],[10,19,0],
        [11,0,0.0],[11,1,0],[11,2,0],[11,3,2.8],[11,4,8.3],[11,5,17.8],[11,6,14.8],[11,7,13.2],[11,8,8.5],[11,9,7.5],[11,10,8.4],[11,11,8.3],[11,12,10.2],[11,13,5.7],[11,14,9.5],[11,15,6.8],[11,16,2.3],[11,17,1.0],[11,18,0],[11,19,0],
        [12,0,0],[12,1,2.0],[12,2,4.4],[12,3,7.4],[12,4,10.4],[12,5,0],[12,6,12.3],[12,7,9.3],[12,8,6.8],[12,9,3.5],[12,10,5.6],[12,11,5.7],[12,12,6.9],[12,13,0.0],[12,14,1.6],[12,15,5.8],[12,16,0],[12,17,2.6],[12,18,0],[12,19,0],
        [13,0,0],[13,1,0],[13,2,1.0],[13,3,4.2],[13,4,9.7],[13,5,15.3],[13,6,10.5],[13,7,9.4],[13,8,6.9],[13,9,3.2],[13,10,9.6],[13,11,5.9],[13,12,9.3],[13,13,7.6],[13,14,12.5],[13,15,4.7],[13,16,1.0],[13,17,0.0],[13,18,0],[13,19,0.0],
        [14,0,0],[14,1,3.0],[14,2,3.3],[14,3,5.1],[14,4,9.3],[14,5,14.6],[14,6,12.0],[14,7,11.4],[14,8,6.1],[14,9,2.8],[14,10,8.1],[14,11,5.5],[14,12,10.4],[14,13,4.6],[14,14,4.2],[14,15,5.2],[14,16,0.0],[14,17,0],[14,18,0],[14,19,1.0],
        [15,0,0],[15,1,2.6],[15,2,4.5],[15,3,9.0],[15,4,13.2],[15,5,15.6],[15,6,14.0],[15,7,15.6],[15,8,8.0],[15,9,4.7],[15,10,7.1],[15,11,7.8],[15,12,10.8],[15,13,8.7],[15,14,5.6],[15,15,6.5],[15,16,3.2],[15,17,0],[15,18,0],[15,19,0],
        [16,0,0],[16,1,0],[16,2,1.0],[16,3,8.0],[16,4,9.7],[16,5,15.4],[16,6,16.4],[16,7,18.0],[16,8,9.6],[16,9,6.9],[16,10,11.7],[16,11,8.9],[16,12,9.7],[16,13,6.8],[16,14,8.7],[16,15,6.7],[16,16,2.0],[16,17,0],[16,18,0],[16,19,0],
        [17,0,0],[17,1,8.3],[17,2,11.6],[17,3,13.7],[17,4,18.7],[17,5,20.1],[17,6,19.4],[17,7,16.1],[17,8,12.2],[17,9,10.1],[17,10,12.2],[17,11,12.9],[17,12,15.5],[17,13,11.2],[17,14,10.5],[17,15,13.4],[17,16,9.1],[17,17,7.8],[17,18,0],[17,19,0],
        [18,0,4.8],[18,1,7.2],[18,2,11.5],[18,3,15.2],[18,4,13.2],[18,5,17.9],[18,6,10.0],[18,7,6.1],[18,8,8.7],[18,9,6.0],[18,10,9.4],[18,11,10.0],[18,12,10.3],[18,13,6.8],[18,14,12.1],[18,15,7.6],[18,16,2.0],[18,17,0.0],[18,18,0],[18,19,0],
        [19,0,0],[19,1,0.0],[19,2,3.2],[19,3,5.9],[19,4,9.8],[19,5,15.9],[19,6,12.6],[19,7,15.2],[19,8,7.4],[19,9,5.4],[19,10,8.1],[19,11,9.2],[19,12,10.8],[19,13,5.5],[19,14,7.9],[19,15,5.4],[19,16,1.6],[19,17,0],[19,18,0],[19,19,0],
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
        categories: ['SRR12344555_trim_joined']
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
        [ { name: 'mature miRNA', data: [6170434.0]},
          { name: 'Hairpin miRNA', data: [1143]},  
          { name: 'primary tRNA', data: [48]}, 
          { name: 'mature tRNA', data: [658491]}, 
          { name: 'snoRNA', data: [6396]}, 
          { name: 'rRNA', data: [225042]}, 
          { name: 'ncRNA', data: [1602536]}, 
          { name: 'mRNA', data: [30233]},  
          { name: 'remaining reads', data: [1945028]}
        ]
    
});
        
var chart = Highcharts.chart('exprnDivID_1', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '60%',
    },

    title: {
        text: 'SRR12344555_trim_joined'
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
            value: 20653.4905
        },
        {
            'hc-a2': 'Let:7:P11_5p',
            name: 'Hsa-Let-7-P11_5p',
            x: 0,
            y: 1,
            value: 2406.4758
        },
        {
            'hc-a2': 'Let:7:P12_5p',
            name: 'Hsa-Let-7-P12_5p',
            x: 0,
            y: 2,
            value: 6503.4323
        },
        {
            'hc-a2': 'Let:7:P1_5p',
            name: 'Hsa-Let-7-P1_5p/7-P3_5p/7-P6_5p/7-P7_5p',
            x: 0,
            y: 3,
            value: 6498.7325
        },
        {
            'hc-a2': 'Let:7:P8_5p',
            name: 'Hsa-Let-7-P8_5p',
            x: 0,
            y: 4,
            value: 2192.5524
        },
        {
            'hc-a2': 'Mir:10:P1a:v1_5p',
            name: 'Hsa-Mir-10-P1a-v1_5p/10-P1a-v2_5p',
            x: 0,
            y: 5,
            value: 3832.7936
        },
        {
            'hc-a2': 'Mir:10:P1b:v1_5p',
            name: 'Hsa-Mir-10-P1b-v1_5p/10-P1b-v2_5p',
            x: 0,
            y: 6,
            value: 8462.7759
        },
        {
            'hc-a2': 'Mir:101:P1:v1_3p',
            name: 'Hsa-Mir-101-P1-v1_3p/101-P1-v2_3p/101-P2-v1_3p/101-P2-v2_3p',
            x: 0,
            y: 7,
            value: 8709.5981
        },
        {
            'hc-a2': 'Mir:103:P1_3p',
            name: 'Hsa-Mir-103-P1_3p/103-P2_3p/103-P3_3p',
            x: 1,
            y: 0,
            value: 9138.4172
        },
        {
            'hc-a2': 'Mir:126:v1_5p',
            name: 'Hsa-Mir-126-v1_5p/126-v2_5p*/126-v3_5p*',
            x: 1,
            y: 1,
            value: 15730.8222
        },
        {
            'hc-a2': 'Mir:142:P1:v1_5p',
            name: 'Hsa-Mir-142-P1-v1_5p/142-P1-v2_5p*/142-P1-v3_5p*',
            x: 1,
            y: 2,
            value: 20635.1774
        },
        {
            'hc-a2': 'Mir:143_3p',
            name: 'Hsa-Mir-143_3p',
            x: 1,
            y: 3,
            value: 8206.554
        },
        {
            'hc-a2': 'Mir:144:v1_3p*',
            name: 'Hsa-Mir-144-v1_3p*/144-v2_3p*',
            x: 1,
            y: 4,
            value: 6261.1479
        },
        {
            'hc-a2': 'Mir:146:P1_5p',
            name: 'Hsa-Mir-146-P1_5p',
            x: 1,
            y: 5,
            value: 3796.6535
        },
        {
            'hc-a2': 'Mir:148:P1_3p',
            name: 'Hsa-Mir-148-P1_3p',
            x: 1,
            y: 6,
            value: 6572.1471
        },
        {
            'hc-a2': 'Mir:15:P1a_5p',
            name: 'Hsa-Mir-15-P1a_5p',
            x: 1,
            y: 7,
            value: 6278.0025
        },
        {
            'hc-a2': 'Mir:15:P2a_5p',
            name: 'Hsa-Mir-15-P2a_5p/15-P2b_5p',
            x: 2,
            y: 0,
            value: 81746.6
        },
        {
            'hc-a2': 'Mir:15:P2b_3p*',
            name: 'Hsa-Mir-15-P2b_3p*',
            x: 2,
            y: 1,
            value: 2186.232
        },
        {
            'hc-a2': 'Mir:17:P5_5p',
            name: 'Hsa-Mir-17-P5_5p',
            x: 2,
            y: 2,
            value: 3512.7189
        },
        {
            'hc-a2': 'Mir:181:P1a_5p',
            name: 'Hsa-Mir-181-P1a_5p/181-P1b_5p',
            x: 2,
            y: 3,
            value: 11615.5525
        },
        {
            'hc-a2': 'Mir:186_5p',
            name: 'Hsa-Mir-186_5p',
            x: 2,
            y: 4,
            value: 5556.4973
        },
        {
            'hc-a2': 'Mir:191:v1_5p',
            name: 'Hsa-Mir-191-v1_5p/191-v2_5p',
            x: 2,
            y: 5,
            value: 15108.0135
        },
        {
            'hc-a2': 'Mir:192:P1_5p',
            name: 'Hsa-Mir-192-P1_5p/192-P2_5p',
            x: 2,
            y: 6,
            value: 6753.4958
        },
        {
            'hc-a2': 'Mir:21_5p',
            name: 'Hsa-Mir-21_5p',
            x: 2,
            y: 7,
            value: 6228.2491
        },
        {
            'hc-a2': 'Mir:22:P1a_3p',
            name: 'Hsa-Mir-22-P1a_3p',
            x: 3,
            y: 0,
            value: 45214.1616
        },
        {
            'hc-a2': 'Mir:223_3p',
            name: 'Hsa-Mir-223_3p',
            x: 3,
            y: 1,
            value: 4900.9519
        },
        {
            'hc-a2': 'Mir:26:P1_5p',
            name: 'Hsa-Mir-26-P1_5p/26-P2_5p',
            x: 3,
            y: 2,
            value: 16373.0785
        },
        {
            'hc-a2': 'Mir:26:P3_5p',
            name: 'Hsa-Mir-26-P3_5p',
            x: 3,
            y: 3,
            value: 2934.8017
        },
        {
            'hc-a2': 'Mir:27:P1_3p',
            name: 'Hsa-Mir-27-P1_3p/27-P2_3p',
            x: 3,
            y: 4,
            value: 6562.4233
        },
        {
            'hc-a2': 'Mir:28:P2_3p',
            name: 'Hsa-Mir-28-P2_3p',
            x: 3,
            y: 5,
            value: 5285.2036
        },
        {
            'hc-a2': 'Mir:30:P1b_5p',
            name: 'Hsa-Mir-30-P1b_5p',
            x: 3,
            y: 6,
            value: 8571.3582
        },
        {
            'hc-a2': 'Mir:30:P1c_5p',
            name: 'Hsa-Mir-30-P1c_5p',
            x: 3,
            y: 7,
            value: 7565.7563
        },
        {
            'hc-a2': 'Mir:423_3p',
            name: 'Hsa-Mir-423_3p',
            x: 4,
            y: 0,
            value: 2550.3879
        },
        {
            'hc-a2': 'Mir:423_5p',
            name: 'Hsa-Mir-423_5p',
            x: 4,
            y: 1,
            value: 21451.3274
        },
        {
            'hc-a2': 'Mir:451_5p',
            name: 'Hsa-Mir-451_5p',
            x: 4,
            y: 2,
            value: 79602.5045
        },
        {
            'hc-a2': 'Mir:486_5p',
            name: 'Hsa-Mir-486_5p',
            x: 4,
            y: 3,
            value: 387368.0522
        },
        {
            'hc-a2': 'Mir:92:P1a_3p',
            name: 'Hsa-Mir-92-P1a_3p/92-P1b_3p',
            x: 4,
            y: 4,
            value: 74614.5247
        },
        {
            'hc-a2': 'Mir:92:P2_3p',
            name: 'Hsa-Mir-92-P2_3p',
            x: 4,
            y: 5,
            value: 17839.2638
        },
        {
            'hc-a2': 'Mir:92:P4_3p',
            name: 'Hsa-Mir-92-P4_3p',
            x: 4,
            y: 6,
            value: 1942.9752
        },
        {
            'hc-a2': 'Mir:96:P2_5p',
            name: 'Hsa-Mir-96-P2_5p',
            x: 4,
            y: 7,
            value: 4517.5104
        }]
    }]
});

        