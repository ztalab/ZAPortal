<!--
  ~ Copyright 2022-present The Ztalab Authors.
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
  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
  >
    <template #activator="{ on, attrs }">
      <v-btn fab v-bind="attrs" color="primary" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New relay</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-text-field
                v-model="form.name"
                label="Name"
                :rules="rule.name"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.host"
                label="Host"
                :rules="rule.host"
                required
            ></v-text-field>
            <v-text-field
                v-model.number="form.port"
                label="Listen port"
                :min="1"
                :max="65535"
                type="number"
                required
            ></v-text-field>
            <v-text-field
                v-model.number="form.out_port"
                label="Expose port"
                :min="1"
                :max="65535"
                type="number"
                required
            ></v-text-field>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        <v-btn
            color="primary"
            text
            @click="handleSubmit"
            :loading="submitting">Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { postZeroAccessRelay } from '@/api'

export default {
  data: () => ({
    dialog: false,
    valid: false,
    serverItems: [],
    loadingServer: false,
    submitting: false,
    form: {
      name: '',
      host: '',
      port: null,
      out_port: null
    },
    rule: {
      name: [
        v => !!v || 'Name is required'
      ],
      host: [
        v => !!v || 'Host is required'
      ],
      port: [
        v => !!v || 'Port is required'
      ],
      out_port: [
        v => !!v || 'Expose port is required'
      ]
    }
  }),
  methods: {
    handleSubmit() {
      this.submitting = true

      const form = { ...this.form }
      postZeroAccessRelay(form).then(res => {
        this.$emit('on-success')
        this.$message.success()
        this.dialog = false
      }).finally(() => {
        this.submitting = false
      })
    }
  }
}
</script>
