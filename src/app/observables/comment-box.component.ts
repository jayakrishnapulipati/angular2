import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommentService} from "../shared/services/comment.service";
import {EmitterService} from "../shared/services/emitter.service";

@Component({
  selector: 'comment-box',
  template: `
        <div class="panel panel-default">
            <div class="panel-heading">{{comment.title}}</div>
            <div class="panel-body">
                {{comment.body}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editComment()"><span class="glyphicon glyphicon-edit"></span></button>
                <button class="btn btn-danger" (click)="deleteComment(comment.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </div>
        </div>
    `
  // No providers here because they are passed down from the parent component
})
// Component class
export class CommentBoxComponent {
  constructor(private commentService: CommentService) {}

  @Input() comment: Comment;
  @Input() listId: string;
  @Input() editId: string;

  @Output() passCommentInfo = new EventEmitter();
  editComment() {
    // EmitterService.get(this.listId).emit(this.comment);
    this.passCommentInfo.emit(this.comment);
  }

  deleteComment(commentId) {
    this.commentService.removeComment(commentId).subscribe(comments => {
      EmitterService.get(this.listId).emit(comments);
    }, err => {
      console.log('error', err);
    })
  }
}
