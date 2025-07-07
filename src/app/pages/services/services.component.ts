import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Услуги | Demo SEO сайт');
  this.meta.updateTag({ name: 'description', content: 'Услуги нашего SEO-оптимизированного Angular сайт.' });
  this.meta.updateTag({ property: 'og:title', content: 'Услуги | Demo SEO сайт' });
}
}
