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
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="programProspectuses"
              item-value="id"
              :items-per-page="5"
              fixed-header
              search=""
            >
              <template v-slot:actions="{ item }">
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
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";
import PageTitle from "./PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      title: "Program Prospectus",
      headers: [
        { text: "Program of Study", value: "program_of_study", align: "start" },
        { text: "Course Code", value: "course_code" },
        { text: "Course Title", value: "course_title" },
        { text: "Credit Units", value: "credit_units" },
        { text: "Actions", value: "actions", sortable: false },
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
        name: "EditProgramProspect",
        params: { id: programProspectusId },
      });
    },
    deleteProgramProspect(programProspectusId) {
      apiClient
        .delete(`/program-prospectus/${programProspectusId}`)
        .then(() => {
          this.fetchProgramProspectuses();
        })
        .catch((error) => {
          console.error("Error deleting program prospectus:", error);
        });
    },
  },
};
</script>
  