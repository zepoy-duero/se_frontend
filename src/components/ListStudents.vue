<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Students List</h1>
        <v-toolbar class="px-2" flat>
          <v-toolbar-title>Students</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn
            size="small"
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
              <v-col cols="1" offset="7">
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
              <v-col cols="1">
                <v-icon
                  size="small"
                  color="green"
                  @click="evaluateStudent(item.student_id)"
                  >mdi-account-reactivate</v-icon
                >
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <student-evaluation :evalDialog="evalDialog" />
  </v-container>
</template>

<script>
import apiClient from "../services/api";
import StudentEvaluation from "./StudentEvaluation.vue";

export default {
  components: [StudentEvaluation],
  data() {
    return {
      evalDialog: false,
      headers: [
        {
          align: "start",
          title: "ID",
          key: "student_id",
          sortable: false,
        },
        { title: "First Name", key: "first_name" },
        { title: "Middle Name", key: "middle_name" },
        { title: "Last Name", key: "last_name" },
        { title: "Gender", key: "gender" },
        { title: "Birthday", key: "date_of_birth" },
        { title: "Email", key: "email" },
        { title: "Address", key: "address" },
        { title: "Course", key: "course" },
        { title: "Year Level", key: "year_level" },
        { title: "College Department", key: "college_department" },
        { title: "Actions", key: "actions", align: "end" },
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
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    },
    createStudent() {
      this.$router.push({ name: "CreateStudent" });
    },
    editStudent(studentId) {
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
    evaluateStudent(studentId) {
      this.evalDialog = true;
    },
  },
};
</script>
