<script setup lang="ts">
import { ButtonComponent } from "@common-components/vue";
</script>

<template>
  <div class="components">
    <h1>This is a Components page</h1>
    <h2>Button</h2>
    <ButtonComponent class="hydrated" label="Test button Vue" />
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
