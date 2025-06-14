<template>
  <UContainer class="mt-5">
    <UNavigationMenu
        :items="items"
        orientation="horizontal"
        class="mb-5 data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
    />
  </UContainer>

</template>

<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([

	[{
		children: [
			{
				description: 'Fully styled and customizable components for Nuxt.',
				icon: 'i-lucide-house',
				label: 'Introduction'
			},
			{
				description: 'Learn how to install and configure Nuxt UI in your application.',
				icon: 'i-lucide-cloud-download',
				label: 'Installation'
			},
			{
				description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
				icon: 'i-lucide-smile',
				label: 'Icons'
			},
			{
				description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
				icon: 'i-lucide-swatch-book',
				label: 'Colors'
			},
			{
				description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
				icon: 'i-lucide-cog',
				label: 'Theme'
			}
		],
		icon: 'i-lucide-book-open',
		label: 'Guide',
		to: '/getting-started'
	},
	{
		children: [
			{
				description: 'Define shortcuts for your application.',
				icon: 'i-lucide-file-text',
				label: 'defineShortcuts',
				to: '/composables/define-shortcuts'
			},
			{
				description: 'Display a modal/slideover within your application.',
				icon: 'i-lucide-file-text',
				label: 'useOverlay',
				to: '/composables/use-overlay'
			},
			{
				description: 'Display a toast within your application.',
				icon: 'i-lucide-file-text',
				label: 'useToast',
				to: '/composables/use-toast'
			}
		],
		icon: 'i-lucide-database',
		label: 'Composables',
		to: '/composables'
	},
	{
		active: true,
		children: [
			{
				description: 'Use NuxtLink with superpowers.',
				icon: 'i-lucide-file-text',
				label: 'Link',
				to: '/components/link'
			},
			{
				description: 'Display a modal within your application.',
				icon: 'i-lucide-file-text',
				label: 'Modal',
				to: '/components/modal'
			},
			{
				description: 'Display a list of links.',
				icon: 'i-lucide-file-text',
				label: 'NavigationMenu',
				to: '/components/navigation-menu'
			},
			{
				description: 'Display a list of pages.',
				icon: 'i-lucide-file-text',
				label: 'Pagination',
				to: '/components/pagination'
			},
			{
				description: 'Display a non-modal dialog that floats around a trigger element.',
				icon: 'i-lucide-file-text',
				label: 'Popover',
				to: '/components/popover'
			},
			{
				description: 'Show a horizontal bar to indicate task progression.',
				icon: 'i-lucide-file-text',
				label: 'Progress',
				to: '/components/progress'
			}
		],
		icon: 'i-lucide-box',
		label: 'Components',
		to: '/components'
	},
	{
		badge: '3.8k',
		icon: 'i-simple-icons-github',
		label: 'GitHub',
		target: '_blank',
		to: 'https://github.com/nuxt/ui'
	},
	{
		disabled: true,
		icon: 'i-lucide-circle-help',
		label: 'Help'
	}],
	[
		{
			badge: '3.8k',
			icon: 'i-simple-icons-github',
			label: 'GitHub',
			target: '_blank',
			to: 'https://github.com/nuxt/ui'
		},
		{
			disabled: true,
			icon: 'i-lucide-circle-help',
			label: 'Help'
		}
	]
]);
</script>
