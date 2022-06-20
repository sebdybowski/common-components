import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'link-component',
  styleUrl: 'link.css',
  shadow: false,
  scoped: true
})
export class LinkComponent {
  @Prop() label: string;
  @Prop() url: string;
  @Prop() blank: boolean;
  
  render() {
    return <a href={this.url} target={this.blank ? '_blank' : undefined}>{this.label}</a>;
  }
}
