<template>
  <v-container>
    <v-card>
      <v-card-title>Program Prospectus</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="form.program_of_study"
            label="Program of Study"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.course_code"
            label="Course Code"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.course_title"
            label="Course Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.no_of_hours_lec"
            label="Lecture Hours"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.no_of_hours_lab"
            label="Lab Hours"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.credit_units"
            label="Credit Units"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.pre_requisites"
            label="Pre-requisites"
          ></v-text-field>
          <v-btn color="primary" @click="saveProspectus">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import apiClient from "@/services/api";
export default {
  data() {
    return {
      form: {
        program_of_study: "",
        course_code: "",
        course_title: "",
        no_of_hours_lec: 0,
        no_of_hours_lab: 0,
        credit_units: 0.0,
        pre_requisites: "",
      },
    };
  },
  methods: {
    async saveProspectus() {
      try {
        await apiClient.post("/program-prospectus", this.form).then(() => {
          this.$router.push({ name: "ProgramProspectus" });
        });
        alert("Program Prospectus Saved!");
      } catch (error) {
        console.error("Error saving:", error);
      }
    },
  },
};
</script>