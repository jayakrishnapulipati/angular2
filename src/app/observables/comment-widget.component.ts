import {Component} from '@angular/core';

@Component({
  selector: 'comment-widget',
  template: `
    <div>
      jk
        <comment-form [listId]="listId" [editId]="editId"></comment-form>
        <!--<comment-list [listId]="listId" [editId]="editId"></comment-list>-->
    </div>
  `
})
export class CommentWidgetComponent {
  // Event tracking properties
  private listId = 'COMMENT_COMPONENT_LIST';
  private editId = 'COMMENT_COMPONENT_EDIT';
}
