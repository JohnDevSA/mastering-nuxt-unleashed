import type {Chat, ChatMessage} from "~/types";
import { MOCK_CHAT } from "~/composables/mockData";

export default function useChat () {
	const chat = ref<Chat>(MOCK_CHAT);
	const messages = computed<ChatMessage[]>(
		() => chat.value.messages
	);

	function createMessage (
		message: string,
		role: ChatMessage["role"]
	){
		const id = messages.value.length.toString();

		return {
			content: message,
			id,
			role,
		};
	}


	function sendMessage (message: string) {
		messages.value.push(createMessage(message,'user'));

		setTimeout(() => {
			messages.value.push(
				createMessage(`You said: ${message}`, `assistant`,)
			);
		},200);

	}



	return {
		chat,
		messages,
		sendMessage,
	};
}
