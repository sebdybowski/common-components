import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'heading-component',
  styleUrl: 'heading.css',
  shadow: false,
  scoped: true
})
export class MyComponent {
  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6;
  @Prop() content: string;
  
  render() {
    switch(this.level) {
      case 1: return <h1>{this.content}</h1>;
      case 2: return <h2>{this.content}</h2>;
      case 3: return <h3>{this.content}</h3>;
      case 4: return <h4>{this.content}</h4>;
      case 5: return <h5>{this.content}</h5>;
      case 6: return <h6>{this.content}</h6>;
      default: return <h1>{this.content}</h1>;
    }
  }
}
