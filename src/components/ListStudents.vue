<template>
  <v-container>
    <v-card>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Students List

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>

      <v-btn
        size="small"
        rounded="xl"
        variant="flat"
        color="primary"
        @click="createStudent"
        >Add New</v-btn
      >
      <v-data-table
        density="comfortable"
        :headers="headers"
        fixed-header
        :items="students"
        class="elevation-1"
        :search="search"
      >
     
  
        <template v-slot:[`item.full_name`]="{ item }">
          <span>{{
            item.last_name + ", " + item.first_name + " " + item.middle_name
          }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-row>
            <v-col>
              <v-icon
                size="small"
                color="blue"
                @click="editStudent(item.student_id)"
                >mdi-pencil</v-icon
              >
            </v-col>
            <v-col>
              <v-icon
                size="small"
                color="red"
                @click="deleteStudent(item.student_id)"
                >mdi-delete</v-icon
              >
            </v-col>
            <v-col>
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
    </v-card>

    <!-- <StudentEvaluation :evalDialog="evalDialog" /> -->
  </v-container>
</template>

<script>
import apiClient from "../services/api";

export default {
  components: {
    // StudentEvaluation: () => import("./StudentEvaluation.vue"),
  },
  data() {
    return {
      search: "",
      evalDialog: false,
      headers: [
        {
          align: "start",
          title: "ID",
          key: "student_id",
          sortable: false,
          loading: false,
          class: "font-weight-black"
        },
        { title: "Full Name", key: "full_name" },
        // { title: "First Name", key: "first_name" },
        // { title: "Middle Name", key: "middle_name" },
        // { title: "Last Name", key: "last_name" },
        { title: "Gender", key: "gender" },
        // { title: "Birthday", key: "date_of_birth" },
        // { title: "Email", key: "email" },
        { title: "Address", key: "address" },
        { title: "Course", key: "course" },
        { title: "Year Level", key: "year_level" },
        { title: "College Department", key: "college_department" },
        { title: "Actions", key: "actions", align: "center" },
      ],
      students: [],
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    onClick() {},
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
<style scoped>

</style>
