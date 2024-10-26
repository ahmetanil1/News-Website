<template>
    <div>
        <NewsCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NewsCard from '../components/newsCard.vue';
const apiKey = import.meta.env.VITE_API_KEY;

const articles = ref([]); // API'den çekilen veriyi saklamak için

const fetchItems = async () => {
    try {
        console.log('Fetching entertainment news...');
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
        articles.value = response.data.articles;
    } catch (error) {
        console.error('Error fetching items:', error.message);
    }
};

onMounted(() => {
    fetchItems();
});
</script>