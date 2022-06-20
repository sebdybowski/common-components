<script setup lang="ts">
import {
  ButtonComponent,
  ParagraphComponent,
  LinkComponent,
  HeadingComponent,
} from "@common-components/vue";
</script>

<script lang="ts">
export default {
  methods: {
    showAlert() {
      alert("Hi, I'm a button alert!");
    },
  },
};
</script>

<template>
  <div class="components">
    <h1>This is a Components page</h1>
    <h2>Button</h2>
    <ButtonComponent label="Test button Vue" @click="showAlert" />
    <br />

    <h2>Paragraph component</h2>
    <ParagraphComponent
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra at erat et volutpat. Praesent sollicitudin vel nulla sit amet sagittis. Donec rutrum sem sit amet massa sodales mollis. In suscipit auctor ante. Quisque eget interdum felis. Nunc eu consequat tortor. Mauris bibendum purus eu mauris venenatis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eleifend imperdiet massa, ut ultrices est eleifend nec. Ut in ullamcorper augue. Aenean ultrices ullamcorper dignissim. Nulla commodo molestie tincidunt."
    />
    <br />

    <h2>Link component</h2>
    <LinkComponent
      url="https://www.google.com/"
      blank
      label="Link to google.com"
    />
    <br />

    <h2>Heading components</h2>
    <HeadingComponent content="Level 1 Heading" />
    <HeadingComponent content="Level 2 Heading" :level="2" />
    <HeadingComponent content="Level 3 Heading" :level="3" />
    <HeadingComponent content="Level 4 Heading" :level="4" />
    <HeadingComponent content="Level 5 Heading" :level="5" />
    <HeadingComponent content="Level 6 Heading" :level="6" />
    <br />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
