import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SellsEvoComponent } from './sells-evo/sells-evo.component';
import { PizzaGraphComponent } from './pizza-graph/pizza-graph.component';
import { SellsGraphComponent } from './sells-graph/sells-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SellsEvoComponent,
    PizzaGraphComponent,
    SellsGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
