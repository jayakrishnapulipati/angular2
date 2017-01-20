import {Component} from '@angular/core';

@Component({
  selector: 'comment-widget',
  template: `
    <div>
        <comment-form [listId]="listId" [editId]="editId"></comment-form>
        <comment-list [listId]="listId" [editId]="editId"></comment-list>
    </div>
  `,
  styles: [
    `
    div {
      width: 500px;
      margin: 0 auto;
    }
    `
  ]
})
export class CommentWidgetComponent {
  // Event tracking properties
  private listId = 'COMMENT_COMPONENT_LIST';
  private editId = 'COMMENT_COMPONENT_EDIT';
}
