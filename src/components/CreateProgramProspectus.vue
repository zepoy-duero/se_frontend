<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1>Create Program Prospectus</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="programProspectus.name"
            label="Program Name"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="programProspectus.code"
            label="Program Code"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-btn
            class="mr-2"
            color="primary"
            @click="createProgramProspectus"
            :disabled="!valid"
          >
            Save
          </v-btn>
          <v-btn @click="$router.go(-1)" color="secondary">Cancel</v-btn>
        </v-form>

        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>

        <v-alert v-if="success" type="success" class="mt-4">
          Program Prospectus created successfully!
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";

export default {
  data() {
    return {
      valid: false,
      programProspectus: {
        name: "",
        code: "",
      },
      error: null,
      success: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    createProgramProspectus() {
      this.error = null;
      this.success = false;

      apiClient
        .post("/program-prospectuses", this.programProspectus)
        .then(() => {
          this.success = true;
          this.programProspectus = { name: "", code: "" }; // Reset form
          this.$refs.form.resetValidation(); // Reset form validation
        })
        .catch((error) => {
          this.error = "Failed to create program prospectus.";
          console.error(error);
        });
    },
  },
};
</script>
  