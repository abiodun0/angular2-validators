import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithDefaultParam } from './helpers';

import * as validator from 'validator';

const name = 'isAlpha';

export const isAlpha = getValidatorWithDefaultParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AlphaValidator), multi: true }
  ]
})
export class AlphaValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isAlpha(this.param)(c);
}
