import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatMessage } from '../models/chat-message.model';
import { ChatService } from '../services/chat.service';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: Observable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessagesForFeed();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessagesForFeed();
  }

}
