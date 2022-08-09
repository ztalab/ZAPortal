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
  <div class="text-center">
    <h1 class="colorful heading text-h1 font-weight-regular mt-10">ZTALAB</h1>
    <p class="font-weight-light">Focus on Zero Access</p>
    <p class="text-body-1 mt-10">
      🛡ZTALAB🛡 is a research and open source organization for zero trust architecture. We will gradually open source
      the projects we have incubated and ongoing projects to make our contribution to the zero-trust ecosystem. If you
      are also interested, or have any suggestions, please let us know and let us know. Let's work together to promote
      the construction of a zero-trust ecosystem.
    </p>
    <div class="mt-15">
      <v-btn x-large color="primary" href="https://www.ztalab.xyz/" target="_blank">
        <v-icon class="mr-5">mdi-home</v-icon>
        Website
      </v-btn>
      <v-btn x-large class="ml-15" href="https://github.com/ztalab" target="_blank">
        <v-icon class="mr-5">mdi-github</v-icon>
        Github
      </v-btn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .colorful {
    background: linear-gradient(to right, purple, cyan);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
