import {Component, Input, Output, OnInit, OnChanges} from '@angular/core';
import {CommentService} from "../shared/services/comment.service";
import { Comment } from '../observables/comment';
import {EmitterService} from "../shared/services/emitter.service";

@Component({
  selector: 'comment-list',
  template: `
    <comment-box [editId]="editId" [listId]="listId" (passCommentInfo)="onShowCommentInfo($event)" *ngFor="let comment of comments" [comment]="comment"></comment-box>
  `
})
export class CommentListComponent implements OnInit, OnChanges{

  constructor(private commentService: CommentService) {}

  comments: Comment[];
  @Input() listId: string;
  @Input() editId: string;

  loadComments() {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    })
  }

  ngOnInit() {
    this.loadComments();
  }

  ngOnChanges() {
    EmitterService.get(this.listId).subscribe((comments: Comment[]) => this.loadComments());
  }

  onShowCommentInfo(data) {
    console.log(data);
    EmitterService.get(this.listId).emit(data);
  }

}
