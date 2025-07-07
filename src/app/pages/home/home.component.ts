import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Главная | Demo SEO сайт');
    this.meta.updateTag({ name: 'description', content: 'Добро пожаловать на наш SEO-оптимизированный Angular сайт.' });
    this.meta.updateTag({ property: 'og:title', content: 'Главная | Demo SEO сайт' });
  }
}
