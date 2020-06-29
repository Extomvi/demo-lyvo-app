/* eslint-disable prettier/prettier */

<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col v-for="(field, i) in APPLICATION_FIELDS" :key="i" cols="12" :md="field.md">
          <v-text-field
            v-if="field.type == 'textField'"
            v-model="applicant[field.name]"
            :rules="field.rules"
            :label="field.label"
          />
          <v-select
            v-else-if="field.type == 'select'"
            v-model="applicant[field.name]"
            :rules="field.rules"
            :label="field.label"
            :items="field.items"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="primary" @click="submitApplication">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { constants } from '../utils/constants'
export default {
  data() {
    return {
      valid: false,
      applicant: {},
    }
  },
  methods: {
    submitApplication() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitApplication', this.applicant)
      }
    }
  }
}
</script>
