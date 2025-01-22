<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="d-flex align-center pe-4">
        <v-text-field
          v-model="params.params.search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          prepend-icon="mdi-list-box"
          variant="solo-filled"
          flat
          single-line
          hint="Type the name of student"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          size="small"
          rounded="xl"
          variant="flat"
          color="primary"
          @click="createStudent"
          >Add New</v-btn
        >
      </v-card-title>
      <v-data-table-server
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="students"
        :items-length="totalItems"
        :loading="loading"
        :search="params.params.search"
        item-value="id"
        @update:options="loadItems"
      >
        <template v-slot:[`item.full_name`]="{ item }">
          <span>{{
            item.last_name + ", " + item.first_name + " " + item.middle_name
          }}</span>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
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
        <template v-slot:top>
          <v-pagination
            v-model="params.params.page"
            :length="
              Math.ceil(students.totalItems / params.params.itemsPerPage)
            "
            @input="getStudents()"
          ></v-pagination>
        </template>
      </v-data-table-server>
    </v-card>

    <!-- <StudentEvaluation :evalDialog="evalDialog" /> -->
  </v-container>
</template>

<script>
import apiClient from "../services/api";
import { useStudentStore } from "../stores/studentStore";

export default {
  components: {
    // StudentEvaluation: () => import("./StudentEvaluation.vue"),
  },
  data() {
    return {
      studentStore: useStudentStore(),
      params: {
        params: {
          search: "",
          page: 1,
          itemsPerPage: "",
        },
      },
      loading: false,
      evalDialog: false,
      headers: [
        {
          align: "start",
          title: "ID",
          key: "student_id",
          sortable: false,
          loading: false,
          class: "font-weight-black",
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
    };
  },
  computed: {
    students() {
      return this.studentStore.students;
    },
  },
  created() {
    this.getStudents(this.params);
  },
  watch: {
    page() {
      this.getStudents();
    },
  },
  methods: {
    onClick() {},
    async getStudents() {
      await this.studentStore.fetchStudents(this.params);
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
          this.getStudents();
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
