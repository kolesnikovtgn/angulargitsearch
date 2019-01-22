import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MylistComponent } from './mylist/mylist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ListComponent } from './list/list.component';
import { BlockComponent } from './block/block.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MylistComponent,
    ListComponent,
    BlockComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
