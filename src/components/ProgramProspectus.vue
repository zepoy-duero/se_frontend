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
          fixed-header
        >
          <template v-slot:top>
            <v-toolbar class="px-2" flat>
              <v-toolbar-title>Program Prospectus</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn
                size="small"
                rounded="xl"
                variant="flat"
                color="primary"
                @click="createProgramProspectus"
                >Add Program</v-btn
              >
            </v-toolbar>
          </template>

          <template v-slot:item.actions="{ item }">
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
  </v-container>
</template>
  
  <script>
import apiClient from "../services/api";

export default {
  data() {
    return {
      headers: [
        { text: "Program of Study", value: "program_of_study",align:"start" },
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
  