<template>
  <v-container>
    <v-card>
      <v-card-title>Student Prospectus</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="form.student_id"
            label="Student"
            disabled
          ></v-text-field>
          <v-select
            v-model="form.program_prospectus_id"
            :items="programProspectuses"
            item-title="course_title"
            item-value="id"
            label="Program Prospectus"
            required
          ></v-select>
          <v-text-field
            v-model="form.status"
            label="Status"
            required
          ></v-text-field>
          <v-btn color="primary" @click="saveStudentProspectus">Save</v-btn>
        </v-form>

        <v-data-table
          :headers="headers"
          :items="studentProspectuses"
          class="mt-4"
        >
          <template v-slot:[`item.full_name`]="{ item }">
            <span>{{
              item.last_name + ", " + item.first_name + " " + item.middle_name
            }}</span>
          </template>
          <template #actions="{ item }">
            <v-btn color="warning" @click="editStudentProspectus(item)"
              >Edit</v-btn
            >
            <v-btn color="error" @click="deleteStudentProspectus(item.id)"
              >Delete</v-btn
            >
          </template>
        </v-data-table>
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
        student_id: "",
        program_prospectus_id: "",
        status: "ongoing",
      },
      students: [],
      programProspectuses: [],
      studentProspectuses: [],
      headers: [
        { text: "Student", value: "full_name" },
        { text: "Course Title", value: "programProspectus.course_title" },
        { text: "Date Enrolled", value: "enrollment_date" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    async saveStudentProspectus() {
      try {
        await apiClient.post("/student-prospectuses", this.form);
        this.loadStudentProspectuses();
      } catch (error) {
        console.error("Error saving:", error);
      }
    },
    async loadStudentProspectuses() {
      try {
        const response = await apiClient.get("/student-prospectuses");
        this.studentProspectuses = response.data;
      } catch (error) {
        console.error("Error loading:", error);
      }
    },
    async deleteStudentProspectus(id) {
      try {
        await apiClient.delete(`/student-prospectuses/${id}`);
        this.loadStudentProspectuses();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    },
    async fetchProgramProspectuses() {
  await apiClient
    .get("/program-prospectuses")
    .then((response) => {
      this.programProspectuses = response.data;
      console.log(this.programProspectuses)
    })
    .catch((error) => {
      console.error("Error fetching program prospectuses:", error);
    });
},
  },
  
  
  
  created() {
    this.loadStudentProspectuses();
    this.fetchProgramProspectuses();
  },
};
</script>
  