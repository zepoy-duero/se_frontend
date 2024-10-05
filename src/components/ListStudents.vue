<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Students List</h1>
          <v-data-table
            :headers="headers"
            :items="students"
            item-value="student_id"
            class="elevation-1"
            :items-per-page="5"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Students</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="createStudent">Add Student</v-btn>
              </v-toolbar>
            </template>
  
            <template v-slot:item.actions="{ item }">
              <v-btn icon @click="editStudent(item.student_id)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteStudent(item.student_id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import apiClient from '../services/api';
  
  export default {
    data() {
      return {
        headers: [
          { text: 'First Name', value: 'first_name' },
          { text: 'Last Name', value: 'last_name' },
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        students: [],
      };
    },
    created() {
      this.fetchStudents();
    },
    methods: {
      fetchStudents() {
        apiClient.get('/students')
          .then(response => {
            console.log(this.students);
            this.students = response.data;
          })
          .catch(error => {
            console.error('Error fetching students:', error);
          });
      },
      createStudent() {
        this.$router.push({ name: 'CreateStudent' });
      },
      editStudent(studentId) {
        this.$router.push({ name: 'EditStudent', params: { id: studentId } });
      },
      deleteStudent(studentId) {
        apiClient.delete(`/students/${studentId}`)
          .then(() => {
            this.fetchStudents();
          })
          .catch(error => {
            console.error('Error deleting student:', error);
          });
      },
    },
  };
  </script>
  