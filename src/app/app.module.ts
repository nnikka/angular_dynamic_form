import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component'
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DynamicFormComponent,
    DynamicFormInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
