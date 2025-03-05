<template>
  <v-dialog v-model="showDialog">
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1>Student Evaluation</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="studentData[0]"
            label="Grade 1"
            :rules="[rules.required, rules.numeric]"
            required
          ></v-text-field>

          <v-text-field
            v-model="studentData[1]"
            label="Grade 2"
            :rules="[rules.required, rules.numeric]"
            required
          ></v-text-field>

          <v-text-field
            v-model="studentData[2]"
            label="Grade 3"
            :rules="[rules.required, rules.numeric]"
            required
          ></v-text-field>

          <v-btn color="primary" @click="evaluateStudent" :disabled="!valid">
            Evaluate
          </v-btn>
        </v-form>

        <v-alert v-if="result" type="success" class="mt-4">
          Evaluation Result: {{ result }}
        </v-alert>

        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-dialog>
</template>
  
  <script>
import apiClient from "../services/api";

export default {
  props: ["evalDialog"],
  data() {
    return {
      valid: false,
      studentData: [0, 0, 0], // Sample grades
      result: null,
      error: null,
      rules: {
        required: (value) => !!value || "Required.",
        numeric: (value) => !isNaN(value) || "Must be a number.",
      },
    };
  },
  computed: {
    showDialog() {
      return this.evalDialog;
    },
  },
  methods: {
    evaluateStudent() {
      this.error = null;
      this.result = null;

      apiClient
        .post("/evaluate", { data: this.studentData })
        .then((response) => {
          this.result = response.data.result;
        })
        .catch((error) => {
          this.error = "Error evaluating student.";
          console.error(error);
        });
    },
  },
};
</script>
  