
var chart = Highcharts.chart('readLengthID_1', {
    title: {
        text: 'SRR12344552_trim_joined: Read Length Distribution'
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
        data: [138800, 148552, 148564, 157897, 175375, 205443, 203207, 164946, 126104, 93386, 87853, 81884, 75397, 73178, 71796, 64695, 63235, 56828, 48800, 42624, 38032, 33394, 30716, 27196, 24996, 23374, 20463, 17843, 16235, 16318, 14724, 12590, 10627, 7, 14, 5001, 3718, 2779, 2094, 1396, 990, 618, 710, 288, 158, 96, 51, 39, 38, 21, 17, 9, 9, 12, 14, 8, 8, 8, 8, 5, 5, 7, 3, 5, 7, 6, 9, 3, 26, 1, 8, 10, 5, 5, 3, 6, 3, 5, 3, 23],
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
        {name:'iso_3p',y:1518269,selected:true},{name:'iso_5p',y:146047,selected:true},{name:'iso_snv',y:89496,selected:true},{name:'iso_snv_central_supp',y:12232,selected:true},{name:'iso_snv_central',y:10583,selected:true},{name:'iso_add3p',y:287617,selected:true},{name:'iso_snv_seed',y:7139,selected:true},{name:'iso_add5p',y:2622,selected:true},{name:'iso_snv_central_offset',y:1519,selected:true},
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
        text: 'Read distribution of isomiRs for the top 20 abundant miRNAs: SRR12344552_trim_joined'
    },
    exporting: {
        filename: 'SRR12344552_trim_joined_isomir'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['Hsa-Let-7-P10_5p', 'Hsa-Let-7-P12_5p', 'Hsa-Let-7-P1_5p', 'Hsa-Mir-10-P1b-v1_5p', 'Hsa-Mir-103-P1_3p', 'Hsa-Mir-126-v1_5p', 'Hsa-Mir-142-P1-v1_5p', 'Hsa-Mir-15-P2a_5p', 'Hsa-Mir-181-P1a_5p', 'Hsa-Mir-191-v1_5p', 'Hsa-Mir-192-P1_5p', 'Hsa-Mir-22-P1a_3p', 'Hsa-Mir-26-P1_5p', 'Hsa-Mir-30-P1b_5p', 'Hsa-Mir-30-P1c_5p', 'Hsa-Mir-423_5p', 'Hsa-Mir-451_5p', 'Hsa-Mir-486_5p', 'Hsa-Mir-92-P1a_3p', 'Hsa-Mir-92-P2_3p'],
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
        
        [0,0,0],[0,1,0],[0,2,0],[0,3,3.7],[0,4,11.4],[0,5,14.8],[0,6,6.8],[0,7,5.6],[0,8,3.9],[0,9,1.0],[0,10,4.2],[0,11,5.3],[0,12,8.1],[0,13,0.0],[0,14,3.8],[0,15,6.7],[0,16,0],[0,17,0],[0,18,0],[0,19,0],
        [1,0,0],[1,1,1.0],[1,2,3.0],[1,3,5.7],[1,4,11.3],[1,5,13.3],[1,6,11.6],[1,7,11.5],[1,8,4.5],[1,9,2.0],[1,10,4.5],[1,11,5.7],[1,12,6.6],[1,13,1.0],[1,14,3.0],[1,15,6.0],[1,16,0.0],[1,17,1.6],[1,18,0],[1,19,0],
        [2,0,0],[2,1,0],[2,2,2.3],[2,3,4.6],[2,4,8.8],[2,5,0],[2,6,6.9],[2,7,5.6],[2,8,2.3],[2,9,0.0],[2,10,2.0],[2,11,3.2],[2,12,6.9],[2,13,1.0],[2,14,3.7],[2,15,6.1],[2,16,0.0],[2,17,0],[2,18,0],[2,19,0],
        [3,0,0],[3,1,0],[3,2,0],[3,3,6.3],[3,4,8.2],[3,5,14.6],[3,6,12.8],[3,7,3.8],[3,8,4.2],[3,9,1.6],[3,10,3.7],[3,11,4.8],[3,12,7.0],[3,13,0],[3,14,10.7],[3,15,2.6],[3,16,0],[3,17,0.0],[3,18,0],[3,19,0],
        [4,0,2.0],[4,1,0],[4,2,0.0],[4,3,3.5],[4,4,5.5],[4,5,0],[4,6,6.9],[4,7,4.3],[4,8,3.0],[4,9,1.0],[4,10,4.0],[4,11,3.6],[4,12,7.2],[4,13,1.0],[4,14,2.3],[4,15,1.0],[4,16,1.0],[4,17,0],[4,18,0],[4,19,0],
        [5,0,0],[5,1,1.0],[5,2,0],[5,3,4.7],[5,4,2.8],[5,5,14.8],[5,6,0],[5,7,1.6],[5,8,1.0],[5,9,1.6],[5,10,6.0],[5,11,2.0],[5,12,2.8],[5,13,0.0],[5,14,2.6],[5,15,4.9],[5,16,0],[5,17,0],[5,18,0],[5,19,0],
        [6,0,0.0],[6,1,0],[6,2,0],[6,3,0.0],[6,4,4.8],[6,5,0],[6,6,9.0],[6,7,4.8],[6,8,3.9],[6,9,0],[6,10,3.0],[6,11,3.2],[6,12,9.3],[6,13,0.0],[6,14,5.2],[6,15,5.9],[6,16,15.4],[6,17,3.9],[6,18,0],[6,19,0],
        [7,0,0],[7,1,0],[7,2,0],[7,3,4.5],[7,4,7.7],[7,5,0],[7,6,12.7],[7,7,7.1],[7,8,6.3],[7,9,4.0],[7,10,6.2],[7,11,7.1],[7,12,7.1],[7,13,0],[7,14,1.6],[7,15,7.6],[7,16,1.6],[7,17,0.0],[7,18,0],[7,19,0],
        [8,0,0],[8,1,0],[8,2,2.0],[8,3,2.3],[8,4,3.8],[8,5,0],[8,6,3.7],[8,7,8.8],[8,8,5.1],[8,9,3.5],[8,10,6.4],[8,11,5.6],[8,12,6.5],[8,13,1.0],[8,14,3.5],[8,15,6.0],[8,16,0],[8,17,0],[8,18,0],[8,19,0],
        [9,0,0],[9,1,0],[9,2,0.0],[9,3,2.6],[9,4,11.9],[9,5,14.8],[9,6,3.7],[9,7,8.8],[9,8,4.9],[9,9,0.0],[9,10,5.3],[9,11,2.6],[9,12,6.9],[9,13,2.3],[9,14,5.4],[9,15,5.2],[9,16,0],[9,17,0],[9,18,0],[9,19,0],
        [10,0,0],[10,1,3.2],[10,2,10.6],[10,3,10.9],[10,4,12.1],[10,5,13.4],[10,6,10.6],[10,7,6.4],[10,8,4.5],[10,9,1.0],[10,10,4.2],[10,11,5.2],[10,12,6.8],[10,13,6.5],[10,14,13.2],[10,15,6.9],[10,16,1.0],[10,17,2.0],[10,18,0],[10,19,0],
        [11,0,2.3],[11,1,0.0],[11,2,0],[11,3,2.8],[11,4,7.8],[11,5,16.4],[11,6,13.6],[11,7,12.1],[11,8,6.3],[11,9,5.3],[11,10,6.7],[11,11,6.3],[11,12,8.8],[11,13,3.3],[11,14,7.9],[11,15,4.7],[11,16,0],[11,17,0],[11,18,0],[11,19,0],
        [12,0,0],[12,1,0.0],[12,2,2.0],[12,3,5.1],[12,4,8.5],[12,5,0],[12,6,11.7],[12,7,8.3],[12,8,4.5],[12,9,1.6],[12,10,4.2],[12,11,4.2],[12,12,5.1],[12,13,0],[12,14,1.6],[12,15,3.7],[12,16,0],[12,17,1.0],[12,18,0],[12,19,0],
        [13,0,0],[13,1,0],[13,2,0.0],[13,3,3.5],[13,4,7.8],[13,5,14.0],[13,6,9.3],[13,7,8.3],[13,8,4.8],[13,9,0.0],[13,10,8.5],[13,11,4.3],[13,12,8.1],[13,13,6.2],[13,14,11.3],[13,15,3.5],[13,16,0],[13,17,0],[13,18,0],[13,19,1.6],
        [14,0,0],[14,1,0.0],[14,2,1.0],[14,3,3.2],[14,4,7.2],[14,5,13.1],[14,6,10.7],[14,7,10.4],[14,8,4.0],[14,9,1.0],[14,10,6.8],[14,11,4.2],[14,12,9.2],[14,13,2.6],[14,14,0.0],[14,15,4.1],[14,16,0],[14,17,0],[14,18,0],[14,19,0.0],
        [15,0,1.0],[15,1,1.0],[15,2,2.8],[15,3,7.6],[15,4,12.1],[15,5,14.7],[15,6,13.2],[15,7,14.8],[15,8,5.9],[15,9,3.6],[15,10,5.8],[15,11,6.6],[15,12,10.2],[15,13,7.6],[15,14,3.3],[15,15,5.8],[15,16,1.6],[15,17,0.0],[15,18,0],[15,19,0],
        [16,0,0],[16,1,0.0],[16,2,1.6],[16,3,7.8],[16,4,8.6],[16,5,13.8],[16,6,14.9],[16,7,16.4],[16,8,7.5],[16,9,4.4],[16,10,10.1],[16,11,7.4],[16,12,8.1],[16,13,3.9],[16,14,6.7],[16,15,5.0],[16,16,0],[16,17,0],[16,18,0],[16,19,0],
        [17,0,0],[17,1,7.4],[17,2,10.8],[17,3,13.2],[17,4,18.0],[17,5,19.3],[17,6,18.5],[17,7,15.2],[17,8,10.9],[17,9,8.7],[17,10,11.0],[17,11,11.8],[17,12,14.7],[17,13,10.1],[17,14,8.3],[17,15,12.7],[17,16,8.2],[17,17,7.0],[17,18,0],[17,19,0],
        [18,0,3.3],[18,1,5.1],[18,2,9.6],[18,3,14.1],[18,4,13.1],[18,5,17.2],[18,6,9.1],[18,7,5.3],[18,8,7.7],[18,9,4.4],[18,10,8.4],[18,11,9.0],[18,12,9.9],[18,13,6.0],[18,14,11.5],[18,15,7.0],[18,16,0],[18,17,0],[18,18,0],[18,19,0],
        [19,0,0],[19,1,0],[19,2,0.0],[19,3,5.0],[19,4,9.5],[19,5,14.8],[19,6,11.6],[19,7,14.1],[19,8,6.2],[19,9,4.1],[19,10,6.8],[19,11,8.0],[19,12,9.8],[19,13,3.0],[19,14,6.1],[19,15,4.2],[19,16,0],[19,17,0],[19,18,0],[19,19,0],
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
        categories: ['SRR12344552_trim_joined']
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
        [ { name: 'mature miRNA', data: [3092733.0]},
          { name: 'Hairpin miRNA', data: [323]},  
          { name: 'primary tRNA', data: [42]}, 
          { name: 'mature tRNA', data: [421238]}, 
          { name: 'snoRNA', data: [3719]}, 
          { name: 'rRNA', data: [270821]}, 
          { name: 'ncRNA', data: [532191]}, 
          { name: 'mRNA', data: [9916]},  
          { name: 'remaining reads', data: [2595026]}
        ]
    
});
        
var chart = Highcharts.chart('exprnDivID_1', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '60%',
    },

    title: {
        text: 'SRR12344552_trim_joined'
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
            value: 20530.3853
        },
        {
            'hc-a2': 'Let:7:P11_5p',
            name: 'Hsa-Let-7-P11_5p',
            x: 0,
            y: 1,
            value: 3672.1566
        },
        {
            'hc-a2': 'Let:7:P12_5p',
            name: 'Hsa-Let-7-P12_5p',
            x: 0,
            y: 2,
            value: 7250.8684
        },
        {
            'hc-a2': 'Let:7:P1_5p',
            name: 'Hsa-Let-7-P1_5p/7-P3_5p/7-P6_5p/7-P7_5p',
            x: 0,
            y: 3,
            value: 7808.6275
        },
        {
            'hc-a2': 'Let:7:P8_5p',
            name: 'Hsa-Let-7-P8_5p',
            x: 0,
            y: 4,
            value: 3140.9113
        },
        {
            'hc-a2': 'Mir:10:P1a:v1_5p',
            name: 'Hsa-Mir-10-P1a-v1_5p/10-P1a-v2_5p',
            x: 0,
            y: 5,
            value: 4707.4869
        },
        {
            'hc-a2': 'Mir:10:P1b:v1_5p',
            name: 'Hsa-Mir-10-P1b-v1_5p/10-P1b-v2_5p',
            x: 0,
            y: 6,
            value: 12695.8907
        },
        {
            'hc-a2': 'Mir:101:P1:v1_3p',
            name: 'Hsa-Mir-101-P1-v1_3p/101-P1-v2_3p/101-P2-v1_3p/101-P2-v2_3p',
            x: 0,
            y: 7,
            value: 6469.6823
        },
        {
            'hc-a2': 'Mir:103:P1_3p',
            name: 'Hsa-Mir-103-P1_3p/103-P2_3p/103-P3_3p',
            x: 1,
            y: 0,
            value: 8171.7368
        },
        {
            'hc-a2': 'Mir:126:v1_5p',
            name: 'Hsa-Mir-126-v1_5p/126-v2_5p*/126-v3_5p*',
            x: 1,
            y: 1,
            value: 10107.2417
        },
        {
            'hc-a2': 'Mir:142:P1:v1_5p',
            name: 'Hsa-Mir-142-P1-v1_5p/142-P1-v2_5p*/142-P1-v3_5p*',
            x: 1,
            y: 2,
            value: 19699.7284
        },
        {
            'hc-a2': 'Mir:143_3p',
            name: 'Hsa-Mir-143_3p',
            x: 1,
            y: 3,
            value: 5087.4097
        },
        {
            'hc-a2': 'Mir:144:v1_3p*',
            name: 'Hsa-Mir-144-v1_3p*/144-v2_3p*',
            x: 1,
            y: 4,
            value: 5206.075
        },
        {
            'hc-a2': 'Mir:146:P1_5p',
            name: 'Hsa-Mir-146-P1_5p',
            x: 1,
            y: 5,
            value: 1809.7262
        },
        {
            'hc-a2': 'Mir:148:P1_3p',
            name: 'Hsa-Mir-148-P1_3p',
            x: 1,
            y: 6,
            value: 5021.4487
        },
        {
            'hc-a2': 'Mir:15:P1a_5p',
            name: 'Hsa-Mir-15-P1a_5p',
            x: 1,
            y: 7,
            value: 6153.4572
        },
        {
            'hc-a2': 'Mir:15:P2a_5p',
            name: 'Hsa-Mir-15-P2a_5p/15-P2b_5p',
            x: 2,
            y: 0,
            value: 77605.794
        },
        {
            'hc-a2': 'Mir:15:P2b_3p*',
            name: 'Hsa-Mir-15-P2b_3p*',
            x: 2,
            y: 1,
            value: 2062.577
        },
        {
            'hc-a2': 'Mir:17:P5_5p',
            name: 'Hsa-Mir-17-P5_5p',
            x: 2,
            y: 2,
            value: 6148.6071
        },
        {
            'hc-a2': 'Mir:181:P1a_5p',
            name: 'Hsa-Mir-181-P1a_5p/181-P1b_5p',
            x: 2,
            y: 3,
            value: 12320.1712
        },
        {
            'hc-a2': 'Mir:186_5p',
            name: 'Hsa-Mir-186_5p',
            x: 2,
            y: 4,
            value: 4946.4341
        },
        {
            'hc-a2': 'Mir:191:v1_5p',
            name: 'Hsa-Mir-191-v1_5p/191-v2_5p',
            x: 2,
            y: 5,
            value: 12155.2685
        },
        {
            'hc-a2': 'Mir:192:P1_5p',
            name: 'Hsa-Mir-192-P1_5p/192-P2_5p',
            x: 2,
            y: 6,
            value: 7882.6721
        },
        {
            'hc-a2': 'Mir:21_5p',
            name: 'Hsa-Mir-21_5p',
            x: 2,
            y: 7,
            value: 4443.3192
        },
        {
            'hc-a2': 'Mir:22:P1a_3p',
            name: 'Hsa-Mir-22-P1a_3p',
            x: 3,
            y: 0,
            value: 33373.0716
        },
        {
            'hc-a2': 'Mir:223_3p',
            name: 'Hsa-Mir-223_3p',
            x: 3,
            y: 1,
            value: 3423.5092
        },
        {
            'hc-a2': 'Mir:26:P1_5p',
            name: 'Hsa-Mir-26-P1_5p/26-P2_5p',
            x: 3,
            y: 2,
            value: 11307.1513
        },
        {
            'hc-a2': 'Mir:26:P3_5p',
            name: 'Hsa-Mir-26-P3_5p',
            x: 3,
            y: 3,
            value: 3269.6001
        },
        {
            'hc-a2': 'Mir:27:P1_3p',
            name: 'Hsa-Mir-27-P1_3p/27-P2_3p',
            x: 3,
            y: 4,
            value: 5618.3317
        },
        {
            'hc-a2': 'Mir:28:P2_3p',
            name: 'Hsa-Mir-28-P2_3p',
            x: 3,
            y: 5,
            value: 2660.4301
        },
        {
            'hc-a2': 'Mir:30:P1b_5p',
            name: 'Hsa-Mir-30-P1b_5p',
            x: 3,
            y: 6,
            value: 6987.3474
        },
        {
            'hc-a2': 'Mir:30:P1c_5p',
            name: 'Hsa-Mir-30-P1c_5p',
            x: 3,
            y: 7,
            value: 6541.4635
        },
        {
            'hc-a2': 'Mir:423_3p',
            name: 'Hsa-Mir-423_3p',
            x: 4,
            y: 0,
            value: 2719.2777
        },
        {
            'hc-a2': 'Mir:423_5p',
            name: 'Hsa-Mir-423_5p',
            x: 4,
            y: 1,
            value: 23369.945
        },
        {
            'hc-a2': 'Mir:451_5p',
            name: 'Hsa-Mir-451_5p',
            x: 4,
            y: 2,
            value: 55155.424
        },
        {
            'hc-a2': 'Mir:486_5p',
            name: 'Hsa-Mir-486_5p',
            x: 4,
            y: 3,
            value: 430662.4594
        },
        {
            'hc-a2': 'Mir:92:P1a_3p',
            name: 'Hsa-Mir-92-P1a_3p/92-P1b_3p',
            x: 4,
            y: 4,
            value: 92226.8427
        },
        {
            'hc-a2': 'Mir:92:P2_3p',
            name: 'Hsa-Mir-92-P2_3p',
            x: 4,
            y: 5,
            value: 16960.4036
        },
        {
            'hc-a2': 'Mir:92:P4_3p',
            name: 'Hsa-Mir-92-P4_3p',
            x: 4,
            y: 6,
            value: 2010.1962
        },
        {
            'hc-a2': 'Mir:96:P2_5p',
            name: 'Hsa-Mir-96-P2_5p',
            x: 4,
            y: 7,
            value: 6400.1645
        }]
    }]
});

        