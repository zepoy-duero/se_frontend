<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="text-h5"> Students List </v-card-title>
      <v-divider></v-divider>
      <v-card-title class="d-flex align-center pe-4 pt-4">
        <v-text-field
          v-model="params.params.search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          prepend-icon="mdi-list-box"
          variant="solo-filled"
          flat
          single-line
          hide-details
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-icon class="mr-2" size="small" icon="mdi-download"></v-icon>
        <v-icon class="mr-2" size="small" icon="mdi-printer-outline"></v-icon>
        <v-icon
          @click="createStudent"
          class="mr-2"
          size="small"
          icon="mdi-plus"
        ></v-icon>
        <!-- <v-btn
          class="align-center mt-0"
          size="small"
          rounded="xl"
          variant="flat"
          color="primary"
          @click="createStudent"
          >Add New</v-btn
        > -->
      </v-card-title>
      <v-card-text>
        <v-data-table-server
          :row-props="itemColor"
          :items-per-page="params.params.itemsPerPage"
          :headers="headers"
          :items="students"
          :items-length="totalItems"
          :loading="loading"
          :search="params.params.search"
          item-value="full_name"
          @update:options="getStudents"
        >
          <template v-slot:[`item.profile_pic`]="{ item }">
            <v-avatar v-if="item.profile_pic != ''">
              <v-icon icon="mdi-account"></v-icon>
            </v-avatar>
            <v-avatar v-else>
              <v-icon icon="mdi-account-circle"></v-icon>
            </v-avatar>
          </template>
          <template v-slot:[`item.full_name`]="{ item }">
            <span>{{
              item.last_name + ", " + item.first_name + " " + item.middle_name
            }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <div class="text-end">
              <v-icon color="blue" @click="editStudent(item.student_id)"
                >mdi-pencil</v-icon
              >
              <v-icon
                class="mx-2"
                color="red"
                @click="deleteStudent(item.student_id)"
                >mdi-delete</v-icon
              >
            </div>
          </template>
        </v-data-table-server>
      </v-card-text>
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
          title: "",
          key: "profile_pic",
          sortable: false,
          loading: false,
          class: "font-weight-black",
        },
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
        { title: "Actions", key: "actions", align: "end" },
      ],
    };
  },
  computed: {
    students() {
      return this.studentStore.students;
    },
    totalItems() {
      return Number(this.studentStore.totalItems);
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
    itemColor(item) {
      if (item.item.id % 2 == 1) {
        return { class: "bg-grey-lighten-4" };
      }
    },
  },
};
</script>
<style scoped>
</style>
