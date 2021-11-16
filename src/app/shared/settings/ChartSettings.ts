import { ChartData, ChartDataSets, ChartOptions, ChartTooltipItem, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";
import { convertNumberToTimeString } from "../helpers/custom-functions";

/**
 * The Chart Settings
 */
export class ChartSettings {

  chartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      xPadding: 10,
      yPadding: 10,
      callbacks: {
        // when hoverirng over a column, the user's name will display
        title: function (context: ChartTooltipItem[], data: ChartData): string {

          const index = context[0].datasetIndex as number;
          const dataSet = data.datasets as ChartDataSets[];
          const title = dataSet[index].label as string;

          return title;

        },
        // when hoverirng over a column, the time logged for that timeperiod will be diplayed under the user's name
        label: function (context: ChartTooltipItem): string {

          const value = context.yLabel as number;
          const label = ` Time:${convertNumberToTimeString(value)}`;

          return label;

        }
      }
    },
    scales: {
      yAxes: [{
        // set the label of the graph
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
        // set the label of the graph
        scaleLabel: {
          display: true,
          labelString: 'Day'
        }
      }]
    }
  };

  chartColors: Color[] = [
    { backgroundColor: '#ED6A5A' },
    { backgroundColor: '#36C9C6' },
    { backgroundColor: '#E7E247' },
    { backgroundColor: '#00E96D' },
    { backgroundColor: '#5ADDED' }
  ]

  chartLabelsDefault: Label[] = [];
  chartLabels: Label[] = [];
  chartType: ChartType = 'bar';
  chartLegend = true;
  chartPlugins = [];

  chartData: ChartDataSets[] = [];

  chartDataDefault: ChartDataSets[] = [
    { data: [0], label: 'Users' }
  ];

}