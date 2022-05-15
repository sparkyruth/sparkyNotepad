import { Component, OnInit } from '@angular/core';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  faHeart = faHeart;
  faSearch = faSearch;
  title="Card title"
  body="This is the card body. it has been added via property binding"
  constructor() { }

  ngOnInit(): void {
  }

}
