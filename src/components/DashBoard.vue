<template>
  <v-container>
    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Computer Science</v-card-title>
          <v-card-text>
            <ComSciGraph />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Information Technology</v-card-title>
          <v-card-text>
            <BSITGraph />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Computer Engineering</v-card-title>
          <v-card-text>
            <BSCpEGraph />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Summary</v-card-title>
          <v-card-text>
            <SummaryGraph />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import ComSciGraph from "./ComSciGraph.vue";
import BSITGraph from "./BSITGraph.vue";
import BSCpEGraph from "./BSCpEGraph.vue";
import SummaryGraph from "./SummaryGraph.vue";
</script>