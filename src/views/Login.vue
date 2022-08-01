<template>
  <div class="login-wrap">
    <div class="ha">
       <div class="ms-login">
      <div class="ms-title">登录系统</div>
      <el-form
        :model="formdata"
        :rules="rules"
        ref="login"
        class="ms-content"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input v-model="formdata.username" placeholder="username">
            <template #prepend>
              <el-button>
                <el-icon><user /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="formdata.password"
          >
            <template #prepend>
              <el-button>
                <el-icon><lock /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
      </el-form>
    </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Login",

  setup() {
    // data
    let formdata = reactive({
      username: "admin",
      password: 123
    });
    // 路由的使用
    let router = useRouter(); // 路由的实例
    let route = useRoute(); // 路由的参数问题
    // vuex 
    let store = useStore();

    let login = ref(null);
    let rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],

    });
    let newdebouncefn =  reactive(null) 
    // methods
    function submitForm() {
      console.log("11111");
      login.value.validate((valid) => {
        if (valid) {
          // 校验成功
          ElMessage({
            message: "登录成功",
            type: "success",
            onClose() {
              // 跳转到首页
              localStorage.setItem("ms_username", formdata.username);
              router.push({ path: "/home/123" });
            }
          });
        } else {
          ElMessage({
            message: "登录失败",
            type: "error"
          });
        }
      }) 
    }
    function debouncefn(fn, wait) {
          let timer = null;
          return function () {
            //被封装后的新的业务函数
            clearTimeout(timer);
            timer = setTimeout(function () {
              fn(); //fn是业务函数
            }, wait);
          };
    };
    function submitFn(){
        this.debouncefn(submitForm,2000);
    }
    //

    
   onMounted(()=>{
    //   debouncefn(submitForm,2000)
   }) 
    // hook

    // computed

    // watch

    return {
      formdata,
      rules,
      login,
      submitForm,
      debouncefn,
      newdebouncefn,
      submitFn
    };
  }
};
</script>
<style scoped lang="scss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("http://admin.xueyueob.cn/img/login_bg.a62d8a.jpg") no-repeat;
  background-size: 100%;
  
}
// .ha{
  
//    background-color: #fff;
//    opacity: .4;
// }
.ms-title {
  // width: 100%;
  line-height: 50px;
  text-align: center;
  background-color: rgba(0,0,0,0);
  // opacity: .4;
  margin-left: 30px;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 353px;
  // height: 22px;
  margin: -190px 0 0 -175px;
  
  // transform:translate(-50%,-50%);
  border-radius: 5px;
  // background: rgba(255, 255, 255, 0.3);
 background: rgba(255,255,255,0.2);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #ccc;
}
.btn-box{
  box-sizing: border-box;
  margin-right:5px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
.btn-box .btn-item{
  border: 1px solid #ccc;
  width: 150px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}


</style>
