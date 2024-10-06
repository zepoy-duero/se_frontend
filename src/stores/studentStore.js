// stores/studentStore.js
import { defineStore } from "pinia";
import apiClient from "../services/api";

export const useStudentStore = defineStore("student", {
  state: () => ({
    students: [],
    student: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchStudents() {
      this.loading = true;
      try {
        const response = await apiClient.get("/students");
        this.students = response.data;
      } catch (error) {
        this.error = "Error fetching students";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchStudentById(studentId) {
      this.loading = true;
      try {
        const response = await apiClient.get(`/students/${studentId}`);
        this.student = response.data;
      } catch (error) {
        this.error = "Error fetching student details";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async addStudent(newStudent) {
      this.loading = true;
      try {
        const response = await apiClient.post("/students", newStudent);
        this.students.push(response.data);
      } catch (error) {
        this.error = "Error adding student";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async updateStudent(updatedStudent) {
      this.loading = true;
      try {
        const response = await apiClient.put(
          `/students/${updatedStudent.id}`,
          updatedStudent
        );
        const index = this.students.findIndex(
          (s) => s.id === updatedStudent.id
        );
        if (index !== -1) this.students[index] = response.data;
      } catch (error) {
        this.error = "Error updating student";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteStudent(studentId) {
      this.loading = true;
      try {
        await apiClient.delete(`/students/${studentId}`);
        this.students = this.students.filter(
          (student) => student.id !== studentId
        );
      } catch (error) {
        this.error = "Error deleting student";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
