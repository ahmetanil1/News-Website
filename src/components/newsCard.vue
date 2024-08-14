<template>
    <div class="news-card">
        <div class="news-image-container">
            <img :src="article.urlToImage " alt="NewsImage" />
        </div>
        <div class="news-content">
            <div class="news-title">
                {{ article.title }}
            </div>
            <div class="news-description">
                {{ article.description || article.content || "" }}
            </div>
            <a :href="article.url" target="_blank" class="view-button">Read More</a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    article: {
        type: Object,
        required: true
    }
});
</script>
