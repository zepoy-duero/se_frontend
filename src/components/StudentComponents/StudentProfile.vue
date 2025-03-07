<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-card class="ma-auto">
          <v-card-title class="headline">Student Profile</v-card-title>
          <!-- <v-card-subtitle>Manage student information</v-card-subtitle> -->

          <!-- Profile Image Section -->
          <v-avatar size="120" class="mx-auto my-4">
            <v-icon size="100">mdi-account</v-icon>
          </v-avatar>

          <!-- Editable Student Form -->
          <v-form v-model="valid" ref="form">
            <v-text-field v-model="student.first_name" label="First Name" />
            <v-text-field
              v-model="student.last_name"
              label="Last Name"
              required
            />
            <v-text-field v-model="student.email" label="Email" />
            <v-text-field v-model="getAge" label="Age" />
            <v-text-field v-model="student.course" label="Course" />

            <!-- Buttons to Save or Cancel Profile -->
            <v-row justify="center" class="mt-4">
              <v-btn
                @click="saveProfile"
                :disabled="!valid"
                color="primary"
                class="mr-2"
                >Save Profile</v-btn
              >
              <v-btn @click="cancelEdit" color="secondary">Cancel</v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="6">
        <student-prospectus />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiClient from "../../services/api";
import StudentProspectus from "./StudentProspectus.vue";
export default {
  components: {
    StudentProspectus,
  },
  data() {
    return {
      search: "",
      valid: false,
      student: {
        first_name: "",
        last_name: "",
        email: "",
        age: null,
        course: "",
        profile_image: "",
      },
    };
  },
  created() {
    this.fetchStudent();
  },
  computed: {
    getAge() {
      var diff_ms = Date.now() - new Date(this.student.date_of_birth);
      var age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    },
  },
  methods: {
    addStudentProspectus() {
      // this.$router.push("/student-prospectus");
    },
    fetchStudent() {
      const studentId = this.$route.params.id;
      apiClient
        .get(`/students/${studentId}`)
        .then((response) => {
          this.student = response.data;
          console.log(this.student);
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
        });
    },
    saveProfile() {
      if (this.valid) {
        apiClient
          .put(`/students/${this.student.id}`, this.student)
          .then(() => {
            alert("Profile saved successfully!");
          })
          .catch((error) => {
            console.error("Error saving profile:", error);
          });
      }
    },
    cancelEdit() {
      this.$refs.form.reset();
      this.fetchStudent();
    },
  },
};
</script>

<style scoped>
.v-card {
  padding: 20px;
}
.v-avatar {
  border: 2px solid #ccc;
}
.v-btn {
  min-width: 120px;
}
</style>