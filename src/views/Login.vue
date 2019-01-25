<template>
  <div class="login" style="backgroundColor: black">
    <div class="box ">
      <h2>xxx后台管理系统</h2>
      <el-form
        class="mt-15"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        label-position = 'top'
        style="padding:50px 20px 0 20px"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="myicon myicon-user"
          placeholder="账号" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" prefix-icon="myicon myicon-key"
           placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:410px"> 登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/index.js'
export default {
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      /* 输入框校验 */
      rules: {
        username: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm.name , this.ruleForm.pwd);
          login(this.ruleForm)
            .then(res => {
              if (res.data.meta.status === 200) {
                /* 获取token值储存在本地 */
                sessionStorage.setItem('token', res.data.data.token)
              } else {
                this.$message(res.data.meta.msg)
              }
            })
        } else {
          this.$message('请输入内容')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  background-color: black;
}
.box {
  border-radius: 10px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  height: 300px;
  //  background-color: black;
}
h2{
  font-size: 30px;
  position: relative;
  top: 20px;
  margin: auto
}
.btn_style {
  width: 400px;
  margin-top: 20px;
}
</style>
