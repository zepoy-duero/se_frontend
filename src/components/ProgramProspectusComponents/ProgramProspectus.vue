<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <page-title :title="title" />
      </v-card-title>
      <v-divider></v-divider>
      <v-card-title class="d-flex align-center pe-4 pt-4">
        <v-spacer></v-spacer>
        <v-icon class="mr-2" size="small" icon="mdi-download"></v-icon>
        <v-icon class="mr-2" size="small" icon="mdi-printer-outline"></v-icon>
        <v-icon
          @click="createProgramProspectus"
          class="mr-2"
          size="small"
          icon="mdi-plus"
        ></v-icon>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :row-props="itemColor"
          :headers="headers"
          :items="programProspectuses"
          item-key="id"
          :items-per-page="5"
          search=""
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="blue" @click="editProgramProspectus(item.id)"
              >mdi-pencil</v-icon
            >
            <v-icon
              class="mx-2"
              color="red"
              @click="deleteProgramProspectus(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import apiClient from "../../services/api";
import PageTitle from "../PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      title: "Program Prospectus",
      headers: [
        { title: "Program of Study", key: "program_of_study", align: "start" },
        { title: "Course Code", key: "course_code" },
        { title: "Course Title", key: "course_title" },
        { title: "No. of Hours Lec", key: "no_of_hours_lec" },
        { title: "No. of Hours Lab", key: "no_of_hours_lab" },

        { title: "Credit Units", key: "credit_units" },
        { title: "Actions", key: "actions" },
      ],
      programProspectuses: [],
    };
  },
  created() {
    this.fetchProgramProspectuses();
  },
  methods: {
    fetchProgramProspectuses() {
      apiClient
        .get("/program-prospectus")
        .then((response) => {
          this.programProspectuses = response.data;
        })
        .catch((error) => {
          console.error("Error fetching program prospectuses:", error);
        });
    },
    createProgramProspectus() {
      this.$router.push({ name: "CreateProgramProspectus" });
    },
    editProgramProspectus(programProspectusId) {
      this.$router.push({
        name: "EditProgramProspectus",
        params: { id: programProspectusId },
      });
    },
    deleteProgramProspectus(programProspectusId) {
      apiClient
        .delete(`/program-prospectuses/${programProspectusId}`)
        .then(() => {
          this.fetchProgramProspectuses();
        })
        .catch((error) => {
          console.error("Error deleting program prospectus:", error);
        });
    },
    itemColor(item) {
      if (item.item.id % 2 == 1) {
        return { class: "bg-grey-lighten-4" };
      }
    },
  },
};
</script>