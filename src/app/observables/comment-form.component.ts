import { Component, Input, Output } from '@angular/core';
import { Comment } from './comment'
import {Observable} from 'rxjs/Rx';
import {CommentService} from "../shared/services/comment.service";
import { EmitterService } from '../shared/services/emitter.service';

@Component({
  selector: 'comment-form',
  template: `
    <form (ngSubmit)="submitComment()">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                <input type="text" class="form-control" placeholder="Author" [(ngModel)]="model.title" name="author">
            </div>
            <br />
            <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.body" name="text"></textarea>
            <br />
            <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
            <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
        </div>
    </form>
  `
})
export class CommentFormComponent {
  constructor(private commentService: CommentService) {}

  // Input properties
  @Input() editId: string;
  @Input() listId: string;

  // Local properties
  private model = new Comment(new Date(), '', '');
  private editing = false;

  submitComment() {
    let commentOperation: Observable<Comment[]>;

    if (!this.editing) {
      // Add
      commentOperation = this.commentService.addComment(this.model);
    } else {
      // Update
      commentOperation = this.commentService.updateComment(this.model);
    }

    commentOperation.subscribe(comments => {
      console.log('comments', comments);
      EmitterService.get(this.listId).emit(comments);
      this.model = new Comment(new Date(), '', '');
      // Switch editing status
      if(this.editing) this.editing = !this.editing;
    })
  }

  ngOnChanges() {
    EmitterService.get(this.listId).subscribe(value => {
      this.model = value;
      this.editing = true;
    });
    // Listen to the 'edit'emitted event so as populate the model
    // with the event payload
    EmitterService.get(this.editId).subscribe((comment:Comment) => {
      this.model = comment;
      this.editing = true;
    });
  }
}
