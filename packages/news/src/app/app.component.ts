import { Component } from '@angular/core';

@Component({
  selector: 'news-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';

  news = [
    { headline: 'News Item 1', content: 'Content for news item 1.' },
    { headline: 'News Item 2', content: 'Content for news item 2.' },
    { headline: 'News Item 3', content: 'Content for news item 3.' }
  ];

  loadMore() {
    const nextIndex = this.news.length + 1;
    this.news.push({
      headline: `News Item ${nextIndex}`,
      content: `Content for news item ${nextIndex}.`
    });
  }
}
