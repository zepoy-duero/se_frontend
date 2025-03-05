// stores/prospectusStore.js
import { defineStore } from "pinia";
import apiClient from "../services/api";

export const useProspectusStore = defineStore("prospectus", {
  state: () => ({
    prospectuses: [],
    prospectus: null,
    loading: false,
    error: null,
    totalItems: null,
  }),

  actions: {
    async fetchProspectuses(params) {
      this.loading = true;
      try {
        const response = await apiClient.get("/program-prospectuses", params);
        this.prospectuss = response.data.data;
        console.log(this.prospectuss)
        this.totalItems = response.data.total;
      } catch (error) {
        this.error = "Error fetching prospectuss";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProspectusById(prospectusId) {
      this.loading = true;
      try {
        const response = await apiClient.get(`/program-prospectuses/${prospectusId}`);
        this.prospectus = response.data;
      } catch (error) {
        this.error = "Error fetching prospectus details";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async addProspectus(newProspectus) {
      this.loading = true;
      try {
        const response = await apiClient.post("/program-prospectuses", newProspectus);
        this.prospectuss.push(response.data);
      } catch (error) {
        this.error = "Error adding prospectus";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async updateProspectus(updatedProspectus) {
      this.loading = true;
      try {
        const response = await apiClient.put(
          `/program-prospectuses/${updatedProspectus.id}`,
          updatedProspectus
        );
        const index = this.prospectuss.findIndex(
          (s) => s.id === updatedProspectus.id
        );
        if (index !== -1) this.prospectuses[index] = response.data;
      } catch (error) {
        this.error = "Error updating prospectus";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteProspectus(prospectusId) {
      this.loading = true;
      try {
        await apiClient.delete(`/program-prospectuses/${prospectusId}`);
        this.prospectuses = this.prospectuses.filter(
          (prospectus) => prospectus.id !== prospectusId
        );
      } catch (error) {
        this.error = "Error deleting prospectus";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
