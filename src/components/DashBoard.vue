<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Dashboard </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="2">
                <v-card :height="150" :width="150" color="deep-purple">
                  <v-card-title class="d-flex align-left justify-left px-4">
                    ComSci
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text> </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card :height="150" :width="150" color="indigo">
                  <v-card-title
                    class="d-flex align-left justify-left flex-wrap text-center px-4"
                  >
                    ComSci
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text> </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card :height="150" :width="150" color="blue">
                  <v-card-title
                    class="d-flex align-left justify-left flex-wrap text-center px-4"
                  >
                    ComSci
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text> </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <graph />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Graph from "./Graph.vue";
</script>