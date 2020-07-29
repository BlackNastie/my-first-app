import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, takeUntil } from "rxjs/operators";
import { AutoUnsubscribeService } from "./services/auto-unsubscribe.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import { DatePipe } from "@angular/common";
// import './zone-flags';
// import 'zone.js/dist/zone';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AutoUnsubscribeService]
})
export class AppComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(
      public datepipe: DatePipe,
      private httpClient: HttpClient,
      private destroy: AutoUnsubscribeService
  ) {  }

  posts = [];
  retrieveddata: string = null;

  //@ViewChild( 'editor', {static: false} ) editorComponent: CKEditorComponent;


  ngOnInit() {
    this.getArticles();
    console.log('posts',this.posts);
  }

  getArticles() {
    // @ts-ignore
    this.httpClient.get('/lenta/posts')
        .pipe(
            map((res: any) => res.posts.map(
                post => ({...post, title: 'Новость от ' + this.datepipe.transform(post.createdAt, 'yyyy-MM-dd')})
            )),
            takeUntil(this.destroy)
        )
        .subscribe(posts => {
          console.log('test', posts)
          this.posts = [...posts];
          //console.log('posts',this.posts);
        });
  }

  editNew(index: number) {
    if (!this.posts[index].editable) {
      this.posts[index].editable = true;
    } else this.posts[index].editable = false

  }

  submit(index: number) {
    let post = this.posts[index];

    console.log("post title", post.title);
    post.text = this.retrieveddata;
    post.editable = false;
    console.log( this.retrieveddata );
  }

  public onChange({ editor }: ChangeEvent) {
    this.retrieveddata = editor.getData();
  }

  public onKeyUp(event: Event, index: number) {
    //console.log("onKeyUp", event);
    this.posts[index].title = (<HTMLInputElement>event.target).value;
  }


}
