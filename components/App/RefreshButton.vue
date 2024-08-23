<template>
<div className="flex flex-col">
    <Button @click="refresh" :disabled="refreshing" :class="buttonClass">
        <a v-if="refreshing">
            <Loader2 size="24" class="ml-2 animate-spin" />
        </a>
        <a v-else>
            Refetch data
        </a>
    </Button>
    <a className="mt-6 text-base text-gray-600 dark:text-gray-400">
        Data updated: {{ timeAgo.formattedTimeAgo }}
    </a>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtData, useState } from '#imports'
import { useTimeAgo } from '@/composables/useTimeAgo'
import { Loader2 } from 'lucide-vue-next'

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
    toast.add({
        title: 'Data refreshed',
        description: 'Data has been successfully refreshed',
        icon: 'i-heroicons-circle-stack'
    })
} finally {
    console.log('done')
    lastUpdated.value = new Date()
    updateLastUpdated(lastUpdated.value)
    refreshing.value = false
    emits('refreshing', false)
}
}

const toast = useToast()

const buttonClass = computed(() => {
    const classes = ['px-4 py-2 rounded-lg']
    if (timeAgo.value.diff < 5) {
        classes.push('bg-green-500')
    } else if (timeAgo.value.diff < 10) {
        classes.push('bg-yellow-500')
    } else {
        classes.push('bg-primary')
    }
    return classes
})
</script>
