
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@app/environments/environment';

if (environment.production) {
  enableProdMode();
}

// Apply a 666 milliseconds delay in the application call:
setTimeout(() => {

  // Start AppModule:
  platformBrowserDynamic().bootstrapModule(AppModule).catch((err: any) => {
    // Error AppModule:
    console.error(err);
  });

}, 666);
