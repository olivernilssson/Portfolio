<template>
<Button @click="refresh" :disabled="refreshing">
    Refresh (Last updated: {{ timeAgo }})
</Button>
<p>Hello</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtData, useState } from '#imports'
import { useTimeAgo } from '@/composables/useTimeAgo'

const props = defineProps({
    dataset: {
        type: String,
        required: true
    }
})
const emits = defineEmits(['refreshing'])

const refreshing = ref(false)
const { data } = useNuxtData(props.dataset)
const visits = data
const lastUpdated = useState<Date | null>('lastUpdatedVisits', () => new Date())
const { timeAgo, updateLastUpdated } = useTimeAgo()

const updateVisits = (newVisits: any) => {
visits.value = newVisits
}

onMounted(() => {
if (lastUpdated.value) {
    updateLastUpdated(lastUpdated.value)
}
})

const refresh = async () => {
try {
    refreshing.value = true
    emits('refreshing', true)
    await refreshNuxtData()
    updateVisits(data.value)
} finally {
    console.log('done')
    lastUpdated.value = new Date()
    updateLastUpdated(lastUpdated.value)
    refreshing.value = false
    emits('refreshing', false)
}
}
</script>
