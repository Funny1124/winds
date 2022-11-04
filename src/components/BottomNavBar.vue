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
  name: "BottomNavBar"
}
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.logo {
  position: absolute;
  left: 0;
  top: 0;
  width: 6%;
  height: auto;
  padding: 4px;
  border-radius: 8px;
}

.contact {
  position: absolute;
  left: 95%;
  margin-top: 40%;
  width: 4%;
  height: auto;
  padding: 4px;
  border-radius: 8px;
}

.download {
  position: absolute;
  right: 5%;
  top: 45px;
  /*width: 8%;*/
  height: 30px;
  padding: 4px;
  border-radius: 8px;
}

.heart {
  position: fixed;
  top: 0;
  left: 8px;
  right: 8px;
  /*width: 100%;*/
  height: auto;
  background-color: #26a69a;
}

.top {
  background-color: #1de9b6;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

.content {
  height: 1200px;
}

.footer {
  background-color: #26a69a;
  width: 100%;
}

.right-tab {
  width: 5%;
}

.space {
  width: 1%;
}
</style>
