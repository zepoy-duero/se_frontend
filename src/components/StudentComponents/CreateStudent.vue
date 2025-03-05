<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1>Create New Student</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="student.student_id"
            label="Student ID"
          ></v-text-field>
          <v-text-field
            v-model="student.first_name"
            label="First Name"
          ></v-text-field>

          <v-text-field
            v-model="student.middle_name"
            label="Middle Name"
          ></v-text-field>

          <v-text-field
            v-model="student.last_name"
            label="Last Name"
          ></v-text-field>

          <v-select
            v-model="student.gender"
            :items="genders"
            label="Gender"
          ></v-select>

          <v-text-field
            v-model="student.date_of_birth"
            label="Date of Birth"
            type="date"
          ></v-text-field>

          <v-text-field
            v-model="student.email"
            label="Email"
            :rules="[rules.required, rules.validEmail]"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.address"
            label="Address"
          ></v-text-field>

          <v-text-field v-model="student.course" label="Course"></v-text-field>

          <v-select
            v-model="student.year_level"
            :items="yearLevels"
            label="Year Level"
          ></v-select>

          <v-text-field
            v-model="student.college_department"
            label="College Department"
          ></v-text-field>

          <v-btn
            class="mr-2"
            size="small"
            rounded="xl"
            color="primary"
            @click="createStudent()"
            >Create Student</v-btn
          >
          <v-btn
            size="small"
            rounded="xl"
            @click="$router.go(-1)"
            color="secondary"
            >Cancel</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiClient from "../../services/api";

export default {
  data() {
    return {
      valid: false,
      student: {
        student_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        email: "",
        address: "",
        course: "",
        year_level: "",
        college_department: "",
      },
      genders: ["Male", "Female", "Other"],
      yearLevels: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
      rules: {
        required: (value) => !!value || "This field is required.",
        validEmail: (value) => {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailPattern.test(value) || "Invalid email format.";
        },
      },
    };
  },
  methods: {
    createStudent() {
      console.log(this.student);
      if (!this.$refs.form.validate()) return;

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
