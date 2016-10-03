**NOTE** Still in development

[![npm version](https://badge.fury.io/js/angular2-validators.svg)](https://www.npmjs.com/package/angular2-validators)

# Ng2 Validators
A List of validators for Angular 2 Forms based on [validator.js](https://github.com/chriso/validator.js)

# Usage
## Install
```bash
$ npm install --save angular2-validators
```

## Use as Model Based Validators
```typescript
import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { isEmail } from 'angular2-validators';

@Component({
  selector: 'app-root',
  template: `
      <form [formGroup]="theForm" novalidate>
          <label for="name">Name</label>
          <input type="text" class="form-control" formControlName="name">
      </form>
  `,
})
export class AppComponent {
  theForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.theForm = fb.group({
      name: ['', [Validators.required, isEmail]]
    });
  }
}
```

## Use as Directive Validator
We need to import angular2-validators as a module in app.module.ts file, or equivalent
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2ValidatorsModule } from 'angular2-validators';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2ValidatorsModule // Add angular2-validators module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then you can just use it in your template as a directive
```html
<input type="text" class="form-control" formControlName="name" isEmail>
```

## Contributing
This module is still in development and PRs are so welcome to the develop branch

## Testing
- run npm install
- run npm run test-once (to test once)
- each spec file must contain .spec.ts to make sure that our matcher function still matches

## Added Validators
* contains
* equals
* isAfter,
* isAlpha,
* isAlphanumeric,
* isAscii,
* isBase64,
* isBefore,
* isBoolean,
* isByteLength,
* isCreditCard,
* isCurrency,
* isDataUri,
* isDate,
* isDecimal,
* isDivisibleBy,
* isEmail,
* isFloat,
* isFQDN,
* isFullWidth,
* isHalf,
* isHexColor,
* isHexaDecimal,
* isInt,
* isIP,
* isISBN,
* isISIN,
* isISO6601,
* isJSON,
* isLength,
* isLowerCase,
* isMacAddress,
* isMd5,
* isMobilePhone,
* isMongoId,
* isMultibyte,
* isNull,
* isNumeric,
* isSurrogatePair,
* isUpperCase,
* isURL,
* isUUID,
* isVariableWidth,
* isWhiteListed