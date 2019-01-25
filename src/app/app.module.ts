import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MylistComponent } from './mylist/mylist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ListComponent } from './list/list.component';
import { BlockComponent } from './block/block.component';
import { LineComponent } from './line/line.component';
import { MyrecordComponent } from './myrecord/myrecord.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MylistComponent,
    ListComponent,
    BlockComponent,
    LineComponent,
    MyrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
