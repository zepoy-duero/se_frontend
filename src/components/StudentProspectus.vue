<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Student Prospectus</h1>
        <v-data-table
          :headers="headers"
          :items="studentProspectuses"
          item-value="id"
          class="elevation-1"
          :items-per-page="5"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Student Prospectus</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="createStudentProspectus"
                >Add Student Prospectus</v-btn
              >
            </v-toolbar>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn icon @click="editStudentProspectus(item.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteStudentProspectus(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";

export default {
  data() {
    return {
      headers: [
        { text: "Student Name", value: "student.full_name" },
        { text: "Program", value: "programProspectus.program_of_study" },
        { text: "Enrollment Date", value: "enrollment_date" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      studentProspectuses: [],
    };
  },
  created() {
    this.fetchStudentProspectuses();
  },
  methods: {
    fetchStudentProspectuses() {
      apiClient
        .get("/student-prospectuses")
        .then((response) => {
          this.studentProspectuses = response.data;
        })
        .catch((error) => {
          console.error("Error fetching student prospectuses:", error);
        });
    },
    createStudentProspectus() {
      this.$router.push({ name: "CreateStudentProspectus" });
    },
    editStudentProspectus(studentProspectusId) {
      this.$router.push({
        name: "EditStudentProspectus",
        params: { id: studentProspectusId },
      });
    },
    deleteStudentProspectus(studentProspectusId) {
      apiClient
        .delete(`/student-prospectuses/${studentProspectusId}`)
        .then(() => {
          this.fetchStudentProspectuses();
        })
        .catch((error) => {
          console.error("Error deleting student prospectus:", error);
        });
    },
  },
};
</script>
  