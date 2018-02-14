import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
    graficos: any = {
      'grafico1': {
        'labels': ['Confrijoles', 'Con Natilla', 'Con tocino'],
        'data': [24, 30, 46],
        'type' : 'doughnut',
        'leyenda': 'El se come con'
      },
      'grafico2': {
        'labels': ['Confrijoles', 'Con Natilla', 'Con tocino'],
        'data': [24, 30, 46],
        'type' : 'doughnut',
        'leyenda': 'El se come con'
      },
      'grafico3': {
        'labels': ['Confrijoles', 'Con Natilla', 'Con tocino'],
        'data': [24, 30, 46],
        'type' : 'doughnut',
        'leyenda': 'El se come con'
      },
      'grafico4': {
        'labels': ['Confrijoles', 'Con Natilla', 'Con tocino'],
        'data': [24, 30, 46],
        'type' : 'doughnut',
        'leyenda': 'El se come con'
      }
    };
  constructor() { }

  ngOnInit() {
  }

}
