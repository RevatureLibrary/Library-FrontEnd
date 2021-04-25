import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CONFIG } from './import-config';
import { AppComponent } from './app.component';
import { ToolbarDirective } from './directives/toolbar.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CONFIG.comps,
  ],
  imports: [
    AppRoutingModule,
    CONFIG.modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
