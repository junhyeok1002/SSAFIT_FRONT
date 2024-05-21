<template>
  <div class="chat-container">
    <img src="@/assets/img/Chatgpt.jpg" style="width: 12rem; margin:0 auto;">
    <div class="chat-input">
      <input v-model="userInput" type="text" placeholder="Chat-Gpt에게 질문할 수 있습니다." />
      <button ref="sendButton" @click="sendMessage">전송</button>
    </div>
    <div class="chat-messages">
      <div v-for="(message, index) in chatHistory" :key="index" class="message">
        <div v-if="message.sender === 'user'" class="user-message">{{ message.text }}</div>
        <div v-else class="bot-message" v-html="formatMessage(message.text)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import OpenAI from 'openai';

export default {
  setup() {
    const route = useRoute();
    const userInput = ref('');
    const chatHistory = ref([]);
    const sendButton = ref(null);

    const sendMessage = async () => {
      if (!userInput.value.trim()) return;

      try {
        const openai = new OpenAI({
          apiKey: `${import.meta.env.VITE_CHATGPT_KEY}`,
          dangerouslyAllowBrowser: true,
        });

        const prompt = userInput.value.trim();

        const response = await openai.chat.completions.create({
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          model: 'gpt-3.5-turbo',
        });

        // API 응답을 채팅창에 추가
        chatHistory.value.push({ sender: 'user', text: prompt });
        chatHistory.value.push({ sender: 'bot', text: response.choices[0].message.content });

        // 입력창 비우기
        userInput.value = '';
      } catch (error) {
        console.error('chatGPT: 🚨 Error occurred:', error);
        chatHistory.value.push({ sender: 'bot', text: 'Error occurred while fetching response.' });
      }
    };

    const formatMessage = (text) => {
      return text.replace(/\n/g, '<br>');
    };

    onMounted(() => {
      if (route.params.fitnessId) {
        userInput.value = route.params.fitnessId;
        // 페이지 로딩 후 자동으로 전송 버튼 클릭
        if (sendButton.value) {
          sendButton.value.click();
        }
      }
    });

    return {
      userInput,
      chatHistory,
      sendButton,
      sendMessage,
      formatMessage
    };
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

.user-message {
  background-color: #74AA9c;
  border-radius: 8px;
  padding: 8px;
  color: white;
  text-align: left; /* 유저 메시지도 좌측 정렬로 */
}

.bot-message {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 8px;
  text-align: left; /* 봇 메시지를 좌측 정렬로 */
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #74AA9c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #5e9482;
}
</style>
