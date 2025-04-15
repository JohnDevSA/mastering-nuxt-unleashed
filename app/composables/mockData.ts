import type { Chat, ChatMessage } from '../types';

// Mock data for initial messages
const MOCK_MESSAGES: ChatMessage[] = [
	{
		content:
            'Hello, can you help me with my Nuxt.js project?',
		id: '1',
		role: 'user',
	},
	{
		content:
            "Of course! I'd be happy to help with your Nuxt.js project. What specific questions or issues do you have?",
		id: '2',
		role: 'assistant',
	},
	{
		content: 'How do I implement server-side rendering?',
		id: '3',
		role: 'user',
	},
	{
		content:
            "Nuxt.js provides server-side rendering out of the box! You don't need to do any special configuration for basic SSR. If you need specific optimizations, we can discuss those in detail.",
		id: '4',
		role: 'assistant',
	},
];

// Mock data for initial chat
const MOCK_CHAT: Chat = {
	id: '1',
	messages: [...MOCK_MESSAGES],
	title: 'Nuxt.js project help',
};

export { MOCK_CHAT, MOCK_MESSAGES };