<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <h1>Edit Student Information</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="student.first_name"
            label="First Name"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.middle_name"
            label="Middle Name"
          ></v-text-field>

          <v-text-field
            v-model="student.last_name"
            label="Last Name"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-select
            v-model="student.gender"
            :items="genders"
            label="Gender"
            :rules="[rules.required]"
            required
          ></v-select>

          <v-text-field
            v-model="student.date_of_birth"
            label="Date of Birth"
            type="date"
            :rules="[rules.required]"
            required
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
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.course"
            label="Course"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-select
            v-model="student.year_level"
            :items="yearLevels"
            label="Year Level"
            :rules="[rules.required]"
            required
          ></v-select>

          <v-text-field
            v-model="student.college_department"
            label="College Department"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-btn
            class="mr-2"
            size="small"
            rounded="xl"
            color="primary"
            @click="updateStudent"
            >Save Changes</v-btn
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
import apiClient from "../services/api";

export default {
  data() {
    return {
      valid: false,
      student: {
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
        required: (value) => !!value || "Required.",
        validEmail: (value) => {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailPattern.test(value) || "Invalid email format.";
        },
      },
    };
  },
  created() {
    this.fetchStudent();
  },
  methods: {
    fetchStudent() {
      const studentId = this.$route.params.id;
      apiClient
        .get(`/students/${studentId}`)
        .then((response) => {
          this.student = response.data;
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
        });
    },
    updateStudent() {
      const studentId = this.$route.params.id;
      apiClient
        .put(`/students/${studentId}`, this.student)
        .then(() => {
          this.$router.push({ name: "ListStudents" });
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    },
  },
};
</script>
