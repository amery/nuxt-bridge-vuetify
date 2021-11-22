// vim: set ts=2 sw=2 et:
import Vuetify from 'vuetify/lib';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = new Vuetify({
    theme: {
      dark: true
    },
  });

  nuxtApp.provide('vuetify', vuetify.framework);
});
