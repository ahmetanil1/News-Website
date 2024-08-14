<template>
    <div>
        <h1>Entertainment News</h1>
        <NewsCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NewsCard from '../components/NewsCard.vue';

const articles = ref([]); // API'den çekilen veriyi saklamak için

const fetchItems = async () => {
    try {
        const apiKey = "8bd077aefbce40bc930af90a45d3268e";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=${apiKey}`);
        articles.value = response?.data?.articles; // Veriyi state'e ata
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};


</script>
