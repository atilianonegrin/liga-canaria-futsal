import { Component, input } from '@angular/core';

@Component({
  selector: 'app-crest',
  template: `<span class="crest" [attr.aria-label]="'Escudo de ' + shortName()">{{ shortName() }}</span>`,
  host: { class: 'crest-host' }
})
export class CrestComponent {
  readonly shortName = input.required<string>();
}
