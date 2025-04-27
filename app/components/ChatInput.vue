<script setup lang="ts">
const { isStreaming = false } = defineProps<{
	isStreaming?: boolean
}>();

const emit = defineEmits<{
	(e: 'send-message',message: string): void;
}>();

const textareaRef = useTemplateRef('textareaRef');
const newMessage = ref('');

const handleSendMessage = () => {
	if(!newMessage.value.trim() || isStreaming) return;
	emit('send-message', newMessage.value.trim());
	newMessage.value = '';

	nextTick(() => {
		adjustTextareadyHeight();
		textareaRef.value?.focus();
	});
};

const adjustTextareadyHeight = async (): Promise<void> => {
	if (textareaRef.value) {
		textareaRef.value.style.height = 'auto';
		await nextTick();
		textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
	}
};

onMounted(() => {
	textareaRef.value?.focus();
});

watch(
	() => isStreaming,
	async (value: boolean) => {
		if (!value) {
			await nextTick();
			textareaRef.value.focus();
		}
	}
);
</script>

<template>
    <form
    class="message-form-wrapper"
    @submit.prevent="handleSendMessage"
    >
      <textarea
          ref="textareaRef"
          class="message-input"
          :disabled="isStreaming"
          :rows="1"
          @input="adjustTextareadyHeight"
          @keydown.enter.prevent="handleSendMessage"
      />
      <UButton
        type="submit"
        :disabled="!newMessage || isStreaming"
        color="primary"
        variant="solid"
        icon="i-heroicons-paper-airplane"
        class="absolute right-3 bottom-3 rounded-full"
      />
    </form>
</template>