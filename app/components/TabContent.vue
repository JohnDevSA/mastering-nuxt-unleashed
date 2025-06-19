<template>
  <UTabs :items="items" variant="link" class="gap-4 w-full" :ui="{ trigger: 'flex-1' }">
    <template #account>
      <p class="text-muted mb-4">Account screen</p>

      <UForm :state="state" class="flex flex-col gap-4">
        <UFormField label="Name" name="name">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>
        <UFormField label="Username" name="username">
          <UInput v-model="state.username" class="w-full" />
        </UFormField>

        <UButton label="Save changes" type="submit" variant="soft" class="self-end" />
      </UForm>
    </template>

    <template #password>
      <p class="text-muted mb-4">Password screen</p>

      <UForm :state="state" class="flex flex-col gap-4">
        <UFormField label="Current Password" name="current" required>
          <UInput v-model="state.currentPassword" type="password" required class="w-full" />
        </UFormField>
        <UFormField label="New Password" name="new" required>
          <UInput v-model="state.newPassword" type="password" required class="w-full" />
        </UFormField>
        <UFormField label="Confirm Password" name="confirm" required>
          <UInput v-model="state.confirmPassword" type="password" required class="w-full" />
        </UFormField>
      </UForm>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { TabsItem } from '@nuxt/ui';

const items = [
	{
		description: 'Make changes to your account here. Click save when you\'re done.',
		icon: 'i-lucide-user',
		label: 'Account',
		slot: 'account' as const
	},
	{
		description: 'Change your password here. After saving, you\'ll be logged out.',
		icon: 'i-lucide-lock',
		label: 'Password',
		slot: 'password' as const
	}
] satisfies TabsItem[];

const state = reactive({
	confirmPassword: '',
	currentPassword: '',
	name: 'Benjamin Canac',
	newPassword: '',
	username: 'benjamincanac'
});
</script>