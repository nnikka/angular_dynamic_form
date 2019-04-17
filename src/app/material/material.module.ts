import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule {}
