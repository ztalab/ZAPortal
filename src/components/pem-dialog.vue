<!--
  ~ Copyright 2022-present The ZTDBP Authors.
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
-->

<template>
  <v-dialog v-model="dialog" scrollable max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-icon small v-bind="attrs" v-on="on">mdi-certificate</v-icon>
    </template>
    <v-card>
      <v-card-title>
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 350px;">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <pre class="text-caption">{{ getPemContent(item)  }}</pre>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Close</v-btn>
        <v-btn color="primary"
               v-if="data"
               v-clipboard:copy="tab === 0 ? data.ca_pem : data.cert_pem"
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
      dialog: false,
      tab: null,
      items: ['CA PEM', 'CERT PEM', 'KEY PEM']
    }
  },
  methods: {
    onCopy() {
      this.$message.success('Copied success')
    },
    onError() {
      this.$message.error('Failed to copy texts')
    },
    getPemContent(type) {
      const map = {
        'CA PEM': this.data.ca_pem,
        'CERT PEM': this.data.cert_pem,
        'KEY PEM': this.data.key_pem
      }

      return map[type] || `Unknown pem type: ${type}`
    }
  }
}
</script>
