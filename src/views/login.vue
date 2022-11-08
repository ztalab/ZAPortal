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
  <div class="login-page">
    <div class="mt-15">
      <v-btn x-large :href="github" rounded>
        <v-icon class="mr-5">mdi-github</v-icon>
        Sign in with Github
      </v-btn>
    </div>

    <div class="mt-15">
      <p class="mt-10" v-if="address">{{ address }}</p>
      <v-btn x-large rounded @click="connectWallet" v-else>
        <v-icon class="mr-5">mdi-wallet</v-icon>
        Connect Your Wallet
      </v-btn>
    </div>
  </div>
</template>
<script>
import { ethers } from 'ethers'

export default {
  data: () => ({
    github: process.env.VUE_APP_BASE_URL + '/user/login/github',
    address: ''
  }),
  methods: {
    async connectWallet() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // eth_requestAccounts can silent prompt
      await provider.send('wallet_requestPermissions', [{ // prompts every time
        eth_accounts: {}
      }])
      const signer = provider.getSigner()
      this.address = await signer.getAddress()
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  text-align: center;
}
</style>
