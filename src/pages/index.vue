<script setup lang="ts">
import {
  useMessage,
  useLoadingBar,
  useDialog,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NSpace,
  NIcon,
  NForm,
  NFormItem,
  NFormItemRow,
  NInput,
  NButton,
  FormInst,
  NPopconfirm,
  InputInst,
  NCard
} from "naive-ui";

const router = useRouter()
const signIn = () => {
  router.push('/app')
}
</script>

<template>
  <NLayout style="width: 100%; height: 100%;">
    <NLayoutHeader style="height: 64px;" bordered>
      <div style="width: 1024px; height: 64px; margin: 0 auto;">
        <NSpace justify="space-between" align="center" size="large" style="height: 64px;">
          <NSpace align="center" size="large" style="height: 64px; padding-top: 8px;">
            <p style="font-weight: 500; font-size: 24px; margin-right: 48px; padding-bottom: 4px;">
              Система управления проектами 
            </p>
          </NSpace>
          <NSpace align="center" style="padding-top: 4px">
            <NuxtLink to="/app">
              <NButton strong type="primary">О ПРИЛОЖЕНИИ</NButton>
            </NuxtLink>
          </NSpace>
        </NSpace>
      </div>
    </NLayoutHeader>
    <NLayoutContent style="position: relative; margin: 0 auto; width: 100%; height: 100%; background-color: #edeef0;">
      <NCard title="Авторизация" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width:300px;">
        <n-form>
          <n-form-item label="Логин">
            <n-input placeholder="введите логин" />
          </n-form-item>
          <n-form-item label="Пароль">
            <n-input type="password" show-password-on="mousedown" placeholder="введите пароль" />
          </n-form-item>
        </n-form>
        <n-button type="primary" block secondary strong @click="signIn">
          Войти
        </n-button>
      </NCard>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
.auth__container {
  /* position: relative; */
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.auth__box {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 450px;
  display: flex;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(225, 227, 230, var(--un-border-opacity));
  border-radius: 10px;
}
</style>