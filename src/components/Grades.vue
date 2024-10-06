<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Grades</h1>
          <v-data-table
            :headers="headers"
            :items="grades"
            item-value="id"
            class="elevation-1"
            :items-per-page="5"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Grades</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn rounded="xl" size="small" class="green" variant="flat"color="primary" @click="createGrade">Add Grade</v-btn>
              </v-toolbar>
            </template>
  
            <template v-slot:item.actions="{ item }">
              <v-btn icon @click="editGrade(item.id)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteGrade(item.id)">
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
          { text: 'Student Name', value: 'studentProspectus.student.full_name' },
          { text: 'Course Code', value: 'studentProspectus.programProspectus.course_code' },
          { text: 'Grade', value: 'grade_value' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        grades: [],
      };
    },
    created() {
      this.fetchGrades();
    },
    methods: {
      fetchGrades() {
        apiClient.get('/grades')
          .then(response => {
            this.grades = response.data;
          })
          .catch(error => {
            console.error('Error fetching grades:', error);
          });
      },
      createGrade() {
        this.$router.push({ name: 'CreateGrade' });
      },
      editGrade(gradeId) {
        this.$router.push({ name: 'EditGrade', params: { id: gradeId } });
      },
      deleteGrade(gradeId) {
        apiClient.delete(`/grades/${gradeId}`)
          .then(() => {
            this.fetchGrades();
          })
          .catch(error => {
            console.error('Error deleting grade:', error);
          });
      },
    },
  };
  </script>
  