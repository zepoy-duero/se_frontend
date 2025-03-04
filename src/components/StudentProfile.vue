<template>

    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="headline">Student Profile</v-card-title>
                    <v-card-subtitle>Manage student information</v-card-subtitle>

                    <!-- Profile Image Section -->
                    <v-avatar size="120" class="mx-auto">
                        <v-icon icon="mdi-account-circle"></v-icon>
                    </v-avatar>

                    <!-- Editable Student Form -->
                    <v-form v-model="valid">
                        <v-text-field v-model="student.name" label="Full Name" :rules="[nameRule]" required />
                        <v-text-field v-model="student.email" label="Email" :rules="[emailRule]" required />
                        <v-text-field v-model="student.age " type="number" :rules="[ageRule]" required />
                        <v-text-field v-model="student.course" label="Course" :rules="[courseRule]" required />

                        <!-- Button to Save Profile -->
                        <v-btn @click="saveProfile" :disabled="!valid" color="primary">Save Profile</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import apiClient from "../services/api";
export default {
    data() {
        return {
            valid: false,
            student: null,
            // Validation rules for each field
            nameRule: [(v) => !!v || 'Name is required'],
            emailRule: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
            ageRule: [(v) => !!v || 'Age is required', (v) => v >= 18 || 'Age must be 18 or older'],
            courseRule: [(v) => !!v || 'Course is required'],
        };
    },
    created() {
        this.fetchStudent();
    },
    methods: {
        fetchStudent() {
            const studentId = this.$route.params.id;
            apiClient
                .get(`/students/${studentId}`)
                .then((response) => {
                    this.student = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching student:", error);
                });
        },
        saveProfile() {
            if (this.valid) {
                // Simulate a save operation (e.g., sending data to an API or local storage)
                this.$emit('save', this.studentInfo);
                alert('Profile saved successfully!');
            }
        },
    },
};
</script>

<style scoped>
.v-card {
    padding: 20px;
}
</style>