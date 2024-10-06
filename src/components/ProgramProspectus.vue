<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Program Prospectus</h1>
          <v-data-table
            :headers="headers"
            :items="programProspectuses"
            item-value="id"
            class="elevation-1"
            :items-per-page="5"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Program Prospectus</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="createProgramProspectus">Add Program</v-btn>
              </v-toolbar>
            </template>
  
            <template v-slot:item.actions="{ item }">
              <v-btn icon @click="editProgramProspectus(item.id)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteProgramProspectus(item.id)">
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
          { text: 'Program of Study', value: 'program_of_study' },
          { text: 'Course Code', value: 'course_code' },
          { text: 'Course Title', value: 'course_title' },
          { text: 'Credit Units', value: 'credit_units' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        programProspectuses: [],
      };
    },
    created() {
      this.fetchProgramProspectuses();
    },
    methods: {
      fetchProgramProspectuses() {
        apiClient.get('/program-prospectuses')
          .then(response => {
            this.programProspectuses = response.data;
          })
          .catch(error => {
            console.error('Error fetching program prospectuses:', error);
          });
      },
      createProgramProspectus() {
        this.$router.push({ name: 'CreateProgramProspectus' });
      },
      editProgramProspectus(programProspectusId) {
        this.$router.push({ name: 'EditProgramProspectus', params: { id: programProspectusId } });
      },
      deleteProgramProspectus(programProspectusId) {
        apiClient.delete(`/program-prospectuses/${programProspectusId}`)
          .then(() => {
            this.fetchProgramProspectuses();
          })
          .catch(error => {
            console.error('Error deleting program prospectus:', error);
          });
      },
    },
  };
  </script>
  