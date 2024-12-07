<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1>Create Student</h1>
        <v-form @submit.prevent="createStudent">
          <v-text-field
            v-model="student.student_id"
            label="Student ID"
            required
          ></v-text-field>
          <v-text-field
            v-model="student.first_name"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="student.last_name"
            label="Last Name"
            required
          ></v-text-field>
          <v-text-field
            type="date"
            v-model="student.date_of_birth"
            label="Date of Birth"
            required
          ></v-text-field>
          <v-text-field
            v-model="student.email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="student.address"
            label="Address"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";

export default {
  data() {
    return {
      student: {
        student_id: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    createStudent() {
      apiClient
        .post("/students", this.student)
        .then(() => {
          this.$router.push({ name: "ListStudents" });
        })
        .catch((error) => {
          console.error("Error creating student:", error);
        });
    },
  },
};
</script>
  