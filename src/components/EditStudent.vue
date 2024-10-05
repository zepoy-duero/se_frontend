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
              v-model="student.last_name"
              label="Last Name"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="student.email"
              label="Email"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="student.phone_number"
              label="Phone Number"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-select
              v-model="student.program"
              :items="programs"
              item-text="name"
              item-value="id"
              label="Program"
              :rules="[rules.required]"
              required
            ></v-select>
  
            <v-btn color="primary" @click="updateStudent">Save Changes</v-btn>
            <v-btn @click="$router.go(-1)" color="secondary">Cancel</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import apiClient from '../services/api';
  
  export default {
    data() {
      return {
        valid: false,
        student: {
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          program: null,
        },
        programs: [], // List of programs for the select dropdown
        rules: {
          required: value => !!value || 'Required.',
          email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        },
      };
    },
    created() {
      this.fetchStudent();
      this.fetchPrograms();
    },
    methods: {
      // Fetch the student details to be edited
      fetchStudent() {
        const studentId = this.$route.params.id;
        apiClient.get(`/students/${studentId}`)
          .then(response => {
            this.student = response.data;
          })
          .catch(error => {
            console.error('Error fetching student:', error);
          });
      },
      // Fetch list of programs for the select dropdown
      fetchPrograms() {
        apiClient.get('/program-prospectuses')
          .then(response => {
            this.programs = response.data;
          })
          .catch(error => {
            console.error('Error fetching programs:', error);
          });
      },
      // Update student information
      updateStudent() {
        const studentId = this.$route.params.id;
        apiClient.put(`/students/${studentId}`, this.student)
          .then(() => {
            this.$router.push({ name: 'StudentList' }); // Redirect to student list or wherever
          })
          .catch(error => {
            console.error('Error updating student:', error);
          });
      },
    },
  };
  </script>
  