<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Students List</h1>
        <v-toolbar class="px-2" flat>
          <v-toolbar-title>Students</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            rounded="xl"
            variant="flat"
            color="primary"
            @click="createStudent"
            >Add Student</v-btn
          >
        </v-toolbar>
        <v-data-table
          density="comfortable"
          :headers="headers"
          fixed-header
          :items="students"
          item-value="student_id"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-row>
              <v-col cols="1">
                <v-icon
                  size="small"
                  color="blue"
                  @click="editStudent(item.student_id)"
                  >mdi-pencil</v-icon
                >
              </v-col>
              <v-col cols="1">
                <v-icon
                  size="small"
                  color="red"
                  @click="deleteStudent(item.student_id)"
                  >mdi-delete</v-icon
                >
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";
// import { useStudentStore } from '../stores/studentStore';
// import { onMounted } from 'vue';
export default {
  data() {
    return {
      headers: [
        {
          align: "start",
          title: "ID",
          key: "student_id",
          sortable: false,
        },
        { title: "First Name", key: "first_name" },
        { title: "Last Name", key: "last_name" },
        { title: "Email", key: "email" },
        { title: "Actions", key: "actions" },
      ],
      students: [],
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      apiClient
        .get("/students")
        .then((response) => {
          this.students = response.data;
          console.log(this.students);
          console.log(this.students[0]);
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    },
    createStudent() {
      this.$router.push({ name: "CreateStudent" });
    },
    editStudent(studentId) {
      console.log(studentId);
      this.$router.push({ name: "EditStudent", params: { id: studentId } });
    },
    deleteStudent(studentId) {
      apiClient
        .delete(`/students/${studentId}`)
        .then(() => {
          this.fetchStudents();
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
        });
    },
  },
};
</script>
  