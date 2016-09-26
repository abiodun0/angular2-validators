import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule  from './ng2-validators.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);