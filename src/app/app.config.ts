// import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { provideRouter, withInMemoryScrolling } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routes,
//     withInMemoryScrolling({ scrollPositionRestoration: 'top',})),
//     provideClientHydration(),
//     provideHttpClient() 
//   ]
// };

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
    withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideClientHydration(),
    provideHttpClient(),
    
    provideTranslateService({
      lang: 'de',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ]
};