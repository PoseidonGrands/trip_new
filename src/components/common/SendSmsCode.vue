<template>
  <van-button size="small" type="success" @click.prevent="sendSms" :disabled="isSendSms">{{
    btnText
  }}</van-button>
</template>


<script>
import { showNotify } from 'vant'

export default {
  props: ['phone'],
  data() {
    return {
      isSendSms: false,
      btnText: '发送验证码',
      counter: 5,
      timer: null
    }
  },
  methods: {
    reset() {
      clearInterval(this.timer)
      this.timer = null
      this.counter = 5
      this.btnText = '发送验证码'
      this.isSendSms = false
    },
    startCount() {
      this.timer = setInterval(() => {
        this.btnText = `${this.counter}秒后可重新发送`
        this.counter--

        if (this.counter < 0) {
          this.reset()
        }
      }, 1000)
    },
    sendSms(phoneNumber) {
      // 检查手机号是否输入
      if (!this.phone) {
        // 3 秒后自动关闭
        showNotify('请输入正确的手机号码')
        return false
      }
      // 调用短信获取接口
      //..
      // 按钮状态改变
      this.isSendSms = true
      // 开始倒计时
      this.startCount()
    }
  }
}
</script>