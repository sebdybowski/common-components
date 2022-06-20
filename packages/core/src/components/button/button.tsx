import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button.css',
  shadow: true,
})
export class MyComponent {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>
  }
}
