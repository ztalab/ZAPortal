<template>
  <v-dialog v-model="dialog" scrollable max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-icon small v-bind="attrs" v-on="on">mdi-eye</v-icon>
    </template>
    <v-card>
      <v-card-title>CA PEM</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 350px;" v-if="data">
        <pre class="text-caption">{{ data.ca_pem }}</pre>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Close</v-btn>
        <v-btn text
               color="primary"
               v-if="data"
               v-clipboard:copy="data.ca_pem"
               v-clipboard:success="onCopy"
               v-clipboard:error="onError">Copy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    onCopy: function(e) {
      this.$message.success('Copied success')
    },
    onError: function(e) {
      this.$message.error('Failed to copy texts')
    }
  }
}
</script>
