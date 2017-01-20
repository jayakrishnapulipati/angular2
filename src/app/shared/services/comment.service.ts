import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Comment } from '../../observables/comment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class CommentService {
  URL = 'https://jsonplaceholder.typicode.com/posts';
  comments;
  constructor(private http: Http) {}

  headers = new Headers({'Content-Type': 'application/json' });
  options = {};

  addComment(data: Object): Observable<Comment[]>{
    return this.http.post(this.URL, data)
      .map((res: Response) => res.json())
      .catch(error => error.json().error);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get(this.URL).map((res: Response) => res.json());
    // return this.http.get(this.URL).map((res: Response) => res.json())
  }

  removeComment(id) {
    /*this.getComments().subscribe(comments => {
      this.comments = comments;
      let index = this.comments.findIndex(comment => comment.id === id);
      this.comments.splice(index, 1);
    });*/

    return this.http.delete(this.URL +'/'+id).map( (res: Response) => this.comments);
  }
}
