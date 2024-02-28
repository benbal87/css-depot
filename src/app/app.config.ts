import { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import {
  provideAnimationsAsync
} from '@angular/platform-browser/animations/async'
import { provideRouter } from '@angular/router'
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          scss: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ]
}
