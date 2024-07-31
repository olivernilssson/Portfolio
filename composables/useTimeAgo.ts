export const useTimeAgo = (initialDate: Ref<Date> = ref(new Date())) => {
  const dateNow = ref(new Date())
  const lastUpdated = initialDate

  // Update dateNow every second
  onMounted(() => {
    setInterval(() => {
      dateNow.value = new Date()
    }, 1000)
  })

  // Computed property to calculate time ago
  const timeAgo = computed(() => {
    const diff = (dateNow.value.getTime() - lastUpdated.value.getTime()) / 1000
    if (diff < 3) return 'Just now'
    if (diff >= 3 && diff < 60) return `${Math.floor(diff)} second(s) ago`
    const minutes = Math.floor(diff / 60)
    if (minutes < 60) return `${minutes} minute(s) ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour(s) ago`
    const days = Math.floor(hours / 24)
    return `${days} day(s) ago`
  })

  const updateLastUpdated = (date: Date = new Date()) => {
    lastUpdated.value = date
  }

  return {
    timeAgo,
    updateLastUpdated
  }
}
