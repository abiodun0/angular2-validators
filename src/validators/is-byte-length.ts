import { Directive } from '@angular/core';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

const name = 'isByteLength';

export const isByteLength = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [getDirectiveProviders(name)]
})
export class ByteLengthValidator { }

// TODO figure out how to get json params