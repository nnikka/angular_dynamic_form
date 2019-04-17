import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component'
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { FormCreatorInputComponent } from './components/form-creator-input/form-creator-input.component';
import { OptionsFormComponent } from './components/options-form/options-form.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DynamicFormComponent,
    DynamicFormInputComponent,
    FormCreatorComponent,
    FormCreatorInputComponent,
    OptionsFormComponent
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
