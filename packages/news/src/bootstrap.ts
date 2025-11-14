import 'zone.js';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (el: Element, opts: { basePath: string }) => {
  const host = document.createElement('news-app-root');
  el.appendChild(host);

  platformBrowserDynamic([{ provide: APP_BASE_HREF, useValue: opts.basePath }])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
};

if (!environment.production) {
  const devRoot = document.querySelector('#_news-dev-root');
  if (devRoot) {
    mount(devRoot, { basePath: '/' });
  }
}

export { mount };