import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'paragraph-component',
  styleUrl: 'paragraph.css',
  shadow: false,
  scoped: true
})
export class ParagraphComponent {
  @Prop() content: string;
  
  render() {
    return <p>{this.content}</p>;
  }
}
