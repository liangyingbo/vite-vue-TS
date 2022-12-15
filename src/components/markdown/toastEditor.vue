<template>
  <div id="editor"></div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import ToastEditor from "./toastEditor";

interface IPorps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IPorps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const toast = new ToastEditor(
    "#editor",
    `${props.modelValue}`,
    `${props.height}px`
  );
  toast.editor.setPlaceholder(props.placeholder)
  toast.editor.on("change", (type: string) => {
      emit(
      "update:modelValue",
      toast.editor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>
<style lang="scss">
@import url("https://uicdn.toast.com/editor/latest/toastui-editor.min.css");

#editor {
  @apply bg-white px-2;
  .toastui-editor-md-tab-container {
    display: none !important;
  }
  
}
.fullscreen{
    position: fixed;
    height: 100vh;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
  }
</style>
