import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator {

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }

  validate(c: FormControl) {
    let v: number = +c.value;

    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    if (v < +this.valorMinimo) {
      return { 'minimo': true, 'requiredValue': +this.valorMinimo }
    }
    return null;
  }

}
