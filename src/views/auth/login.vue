<template>
  <div class="page-login">
    <TopBar title="用户登录" />
    <!-- 输入表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          clearable
          maxlength="11"
          :rules="usernameRule"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          clearable
          :rules="passwordRule"
        />
      </van-cell-group>
      <!-- 信息提交 -->
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" @click="doLogin">
          提交
        </van-button>
      </div>
    </van-form>
    <!-- 提示 -->
    <p class="to-login tip">
      没有帐号？<router-link :to="{ name: 'regPage' }">点击注册>></router-link>
    </p>

    <!-- 版权信息组件 -->
    <CopyRight />
  </div>
</template>

<script>
import TopBar from '@/components/common/TopBar.vue'
import CopyRight from '@/components/common/CopyRight.vue'
import { ajax } from '@/utils/ajax'
import { AccountApis } from '@/utils/apis'
import { showNotify } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRule: [{ required: true, message: '请输入正确的手机号', pattern: /1\d{10}/ }],
      passwordRule: [{ required: true, message: '请填写密码' }]
    }
  },
  methods: {
    // 用户登录
    doLogin() {
      console.log('username', this.username)
      console.log('password', this.password)

      ajax
        .post(AccountApis.loginUrl, {
          username: this.username,
          password: this.password
        })
        .then(({ data }) => {
          console.log('res', data)
          this.$store.commit('updateUserInfo', data)
          showNotify({ type: 'success', message: '登录成功' })

          // 更改状态
          this.$store.commit('changeLogin')

          // 跳转到我的页面
          this.$router.push({ name: 'minePage' })
        })
        .catch(({ response: { data } }) => {
          showToast(`${data.error_code}:${data.error_msg}`)
        })
    }
  },
  components: {
    TopBar,
    CopyRight
  }
}
</script>

<style lang="less" scoped>
.page-login {
  .tip {
    width: 100%;
    text-align: center;
  }
}
</style>