<template>
  <div class="CmsFormTplWrapper">
    <div class="leftForm">
      <div class="title">请顾问来电介绍</div>
      <div class="description">留下联系方式，广告顾问将联系您提供免费咨询</div>
      <el-form ref="formRef" :rules="rule" :model="cueForm">
        <el-form-item
          v-for="item in cmsFormOption.formItems"
          :key="item.name"
          :prop="item.name"
        >
          <el-input
            class="input_bg"
            size="large"
            :placeholder="item.placeholder"
            v-model="cueForm[item.name]"
          ></el-input>
        </el-form-item>

        <el-form-item class="submit" size="large">
          <el-button
            style="width: 120px"
            class="btn_active"
            type="primary"
            @click="submitForm(formRef)"
            >立即提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="rightForm">
      <div class="title">新客户专线</div>
      <div class="description">致电推广顾问，获得免费咨询</div>
      <div class="call">
        <div class="call_icon">
          <SvgIcon svgName="phone" color="#567"></SvgIcon>
        </div>
        <div class="call_num">{{ cmsFormOption.tel }}</div>
      </div>
      <div class="mail">邮箱：{{ cmsFormOption.mail }}</div>
      <div class="time">客服电话工作时间</div>
      <div class="time_num">工作日9:30-18:00</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import parseForm from "@/helpers/utils/parseRulesFromForm";
import type { ElForm } from "element-plus";
import useStore from "@/store/layout";
interface Props {
  cmsFormOption: ComponentType.CmsFormOptionType;
}
let { cmsFormOption } = withDefaults(defineProps<Props>(), {});
// defined instance
type FormInstance = InstanceType<typeof ElForm>;
const formRef = ref<FormInstance>();
// get model and rule \store
let { resultRef, resultRule } = parseForm(cmsFormOption.formItems);
let cueForm = reactive(resultRef);
let rule = reactive(resultRule);
let store = useStore();
// 表单规则;
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      store.submitForm(cueForm);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<style>
.CmsFormTplWrapper {
  width: 1280px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0 0.02rem 0.3rem 0 rgba(204, 230, 255, 0.36);
  border-radius: 12px;
  margin: 0 auto;
  padding: 0.8rem 0 0 1.8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

/* 左右半边标题和描述的样式 */
.CmsFormTplWrapper .title {
  font-size: 0.32rem;
  color: #242933;
  letter-spacing: 0;
  line-height: 0.32rem;
  margin-bottom: 0.16rem;
  font-weight: 400;
}
.CmsFormTplWrapper .description {
  font-size: 0.14rem;
  color: #a9aeb8;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.14rem;
  margin-bottom: 0.64rem;
}
/* 左半边表单样式 */
.leftForm {
  width: 480px;
}
.leftForm .input_bg input {
  background: #f7f9fc;
}
.leftForm .submit {
  text-align: left;
}
/* 右半边表单样式 */
.rightForm {
  width: 440px;
}
.rightForm .call {
  border-left: 1px solid #f2f4f7;
  height: 236px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.call .call_icon {
  font-size: 0.24rem;
  margin-bottom: 0.2rem;
}
.call .call_num {
  /* font-family: HelveticaNeue-Light; */
  font-size: 0.36rem;
  color: #ff824c;
  letter-spacing: 0;
}
.rightForm .time,
.rightForm .mail {
  margin-top: 0.24rem;
  font-size: 0.14rem;
  color: #c0c6d1;
  text-align: center;
  line-height: 0.14rem;
}
.rightForm .time_num {
  margin-top: 0.24rem;
  opacity: 0.8;
  font-size: 0.16rem;
  color: #636770;
  text-align: center;
  line-height: 0.18rem;
}
</style>
