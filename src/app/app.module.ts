import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobAddComponent } from './job-add/job-add.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobFetchComponent } from './job-fetch/job-fetch.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MdcFormFieldModule, MdcTextFieldModule, MdcCheckboxModule } from '@angular-mdc/web';

import { JobsService } from './jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    JobAddComponent,
    JobEditComponent,
    JobFetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MdcFormFieldModule, MdcTextFieldModule, MdcCheckboxModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
