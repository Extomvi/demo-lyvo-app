<template>
  <div class="application">
    <h1>Application</h1>
    <app-form></app-form>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm.vue'
export default {
  name: 'Application',
  components: {
    AppForm,
  },
}
</script>
