<template>
  <div class="footer">
    <el-row :gutter="10" style="padding-bottom: 30px">
      <el-col :span="3">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content">
          <h2>Winds</h2>
          <p>Manjaro Linux Open Source operating system is, and always will be, provided free of charge.</p>
          <p>The Manjaro project is backed up by Manjaro Gmbh & Co, KG, an Open Source driven company.</p>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <h2>LEGAL</h2>
          <div>Privacy Policy</div>
          <div>Terms of use</div>
          <div>Imprint</div>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content">
          <h2>SOCIAL</h2>
          <div>Facebook</div>
          <div>Telegram</div>
          <div>Youtube</div>
          <div>Twitter</div>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content">
          <h2>DEVELOPMENT</h2>
          <div>Code of Conduct</div>
          <div>Source Code</div>
          <div>Sending a PR</div>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content">
          <h2>MAILING LISTS</h2>
          <div>Development</div>
          <div>Packages</div>
          <div>Security</div>
          <div>General</div>
          <div>Testing</div>
          <div>Mirrors</div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div style="text-align: center ; padding-bottom: 30px">&copy; &nbsp; Copyright 2022 Winds GmbH & Co KG All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "BottomNavBar",
  components:{
  }
}
</script>

<style scoped>

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.footer {
  background-color: #26a69a;
  width: 100%;
}
</style>
