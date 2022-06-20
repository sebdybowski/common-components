import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button.css',
  shadow: false,
  scoped: true
})
export class MyComponent {
  @Prop() label: string;

  render() {
    return <button type="button">{this.label}</button>;
  }
}
