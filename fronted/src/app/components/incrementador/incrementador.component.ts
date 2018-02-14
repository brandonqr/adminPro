import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;
  @Input('nombre') leyenda = 'Leyenda';
  @Input() porcentaje = 100;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
  }
  onChanges( newValue: number) {
    //let elemHTML: any = document.getElementsByName('porcentaje')[0];

    //console.log(this.txtPorcentaje);
    
   // console.log( elemHTML.value );
    console.log( newValue );
    if ( newValue >= 100) {
        this.porcentaje = 100;
    }else if ( newValue <= 0) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = newValue;
    }
    //elemHTML.value = Number( this.porcentaje );
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

    this.txtPorcentaje.nativeElement.focus();
  }
  cambiarValor(numero) {
    if ( this.porcentaje >= 100 && numero > 0) {
      this.porcentaje = 100;
    return;
    }
    if ( this.porcentaje <= 0 && numero < 0) {
      this.porcentaje = 0;
      return;
      }
    this.porcentaje += numero;
    this.cambioValor.emit( this.porcentaje );
  }
}
