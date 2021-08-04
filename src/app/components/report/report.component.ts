import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartTooltipItem, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      xPadding: 10,
      yPadding: 10,
      callbacks: {
        title: function (context: ChartTooltipItem[], data: ChartData): string {

          let index = context[0].datasetIndex as number;
          let dataSet = data.datasets as ChartDataSets[];
          let user = dataSet[index].label as string;

          return user;

        },
        label: function (context: ChartTooltipItem, data: ChartData): string {

          let x = context.yLabel as number;
          return x.toString();

        }
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Hours'
        },
        ticks: {
          max: 24,
          min: 0,
          stepSize: 2
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Day of Week'
        }
      }]
    }
  };

  barChartLabels: Label[] = [['Mon', '2/8'], ['Tue', '3/8'], ['Wed', '4/8'], ['Thu', '5/8'], ['Fri', '6/8'], ['Sat', '7/8'], ['Sun', '8/8']];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [12, 4, 8, 2.5, 1.8, 0, 0], label: 'Siphosethurinna Kanandawo' },
    { data: [8, 7, 5, 3, 0, 5.5, 0], label: 'Schirume6' }
  ];

  // public barChartData: ChartDataSets[] = []

  constructor() { }

  ngOnInit() {
    // this.a = 20;

    // this.barChartData = [
    //   { data: [this.a], label: 'Siphosethurinna Kanandawo' },
    //   { data: [22], label: 'Schirume6' }
    // ];

  }
}
