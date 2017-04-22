import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/*
    main.ts tells angular to bootstrap and run the app using the appModule defined in app.Module
*/