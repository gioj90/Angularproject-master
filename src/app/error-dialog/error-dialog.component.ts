import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorHeandlerService } from '../Servises/error-heandler.service';

@Component({
  selector: 'app-error-dialog',
  imports: [CommonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(private errorHandler : ErrorHeandlerService){
    this.errorHandler.dialogState.subscribe(
      state => {
        this.showDialog = state.show
        this.errorMessage = state.message
      }
    )

  }


  errorMessage = ""
  showDialog: boolean = true

  closeDialog(){
    this.showDialog = false
    this.errorHandler.hideDialog()
  }



}
