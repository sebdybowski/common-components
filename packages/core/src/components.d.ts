/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "label": string;
    }
    interface HeadingComponent {
        "content": string;
        "level": 1 | 2 | 3 | 4 | 5 | 6;
    }
    interface LinkComponent {
        "blank": boolean;
        "label": string;
        "url": string;
    }
    interface ParagraphComponent {
        "content": string;
    }
    interface TableComponent {
        "headers": string;
        "rows": string;
        "sum": boolean;
        "tableTitle": string;
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLHeadingComponentElement extends Components.HeadingComponent, HTMLStencilElement {
    }
    var HTMLHeadingComponentElement: {
        prototype: HTMLHeadingComponentElement;
        new (): HTMLHeadingComponentElement;
    };
    interface HTMLLinkComponentElement extends Components.LinkComponent, HTMLStencilElement {
    }
    var HTMLLinkComponentElement: {
        prototype: HTMLLinkComponentElement;
        new (): HTMLLinkComponentElement;
    };
    interface HTMLParagraphComponentElement extends Components.ParagraphComponent, HTMLStencilElement {
    }
    var HTMLParagraphComponentElement: {
        prototype: HTMLParagraphComponentElement;
        new (): HTMLParagraphComponentElement;
    };
    interface HTMLTableComponentElement extends Components.TableComponent, HTMLStencilElement {
    }
    var HTMLTableComponentElement: {
        prototype: HTMLTableComponentElement;
        new (): HTMLTableComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "heading-component": HTMLHeadingComponentElement;
        "link-component": HTMLLinkComponentElement;
        "paragraph-component": HTMLParagraphComponentElement;
        "table-component": HTMLTableComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "label"?: string;
    }
    interface HeadingComponent {
        "content"?: string;
        "level"?: 1 | 2 | 3 | 4 | 5 | 6;
    }
    interface LinkComponent {
        "blank"?: boolean;
        "label"?: string;
        "url"?: string;
    }
    interface ParagraphComponent {
        "content"?: string;
    }
    interface TableComponent {
        "headers"?: string;
        "rows"?: string;
        "sum"?: boolean;
        "tableTitle"?: string;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "heading-component": HeadingComponent;
        "link-component": LinkComponent;
        "paragraph-component": ParagraphComponent;
        "table-component": TableComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "heading-component": LocalJSX.HeadingComponent & JSXBase.HTMLAttributes<HTMLHeadingComponentElement>;
            "link-component": LocalJSX.LinkComponent & JSXBase.HTMLAttributes<HTMLLinkComponentElement>;
            "paragraph-component": LocalJSX.ParagraphComponent & JSXBase.HTMLAttributes<HTMLParagraphComponentElement>;
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
        }
    }
}
