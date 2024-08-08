<template>
  <div class="page-reg">
    <TopBar title="用户注册" />
    <!-- 注册表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- 手机号 -->
        <van-field
          v-model="form.phone"
          name="phone"
          label="手机号码"
          placeholder="手机号码"
          maxlength="11"
          :rules="phoneRule"
        />
        <!-- 验证码 -->
        <van-field
          v-model="form.sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          maxlength="6"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <SendSmsButton :phone="form.phone" />
          </template>
        </van-field>
        <!-- 用户昵称 -->
        <van-field
          v-model="form.username"
          name="username"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <!-- 密码 -->
        <van-field
          v-model="form.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请填写密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 确认密码 -->
        <van-field
          v-model="form.repeatPassword"
          type="password"
          name="repeatPassword"
          label="确认密码"
          placeholder="确认密码"
          :rules="passwordRule"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" @click="doReg">
          提交
        </van-button>
      </div>
    </van-form>
    <p class="tip">
      注册表示同意 <router-link to="#">用户使用协议</router-link>及
      <router-link to="#">隐私条款</router-link>
    </p>
    <p class="to-login tip">
      已有帐号？<router-link :to="{ name: 'loginPage' }">点击登录>></router-link>
    </p>
    <CopyRight />
  </div>
</template>

<script>
import TopBar from '@/components/common/TopBar.vue'
import CopyRight from '@/components/common/CopyRight.vue'
import SendSmsButton from '@/components/common/SendSmsCode.vue'
import { ajax } from '@/utils/ajax'
import { AccountApis } from '@/utils/apis'
export default {
  data() {
    return {
      form: {
        phone: '',
        sms: '',
        username: '',
        password: '',
        repeatPassword: ''
      },
      phoneRule: [{ required: true, message: '请填写正确的手机号码', pattern: /1\d{10}/ }],
      passwordRule: [
        { required: true, message: '请填写确认密码' },
        {
          validator: () => this.form.password === this.form.repeatPassword,
          message: '两次输入的密码不一致'
        }
      ]
    }
  },
  methods: {
    doReg() {
      ajax
        .post(AccountApis, {
          params: {
            phone: this.form.phone,
            sms_code: this.form.sms,
            nickname: this.form.username,
            password: this.form.password,
            confirm_password: this.form.repeatPassword
          }
        })
        .then((res) => {
          console.log(res)
        })
    }
  },
  components: {
    TopBar,
    CopyRight,
    SendSmsButton
  }
}
</script>

<style lang="less" scoped>
.page-reg {
  .tip {
    width: 100%;
    text-align: center;
  }
}
</style>