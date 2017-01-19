import { Component, Input, Output } from '@angular/core';
import { Comment } from './comment'

@Component({
  selector: 'comment-form',
  template: `
    <form (ngSubmit)="submitComment()">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                <input type="text" class="form-control" placeholder="Author" [(ngModel)]="model.author" name="author">
            </div>
            <br />
            <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.text" name="text"></textarea>
            <br />
            <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
            <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
        </div>
    </form>
  `
})
export class CommentFormComponent {
  // Input properties
  @Input() editId: string;
  @Input() listId: string;

  // Local properties
  private model = new Comment(new Date(), '', '');
  private editing = false;

  submitComment() {

  }
}
