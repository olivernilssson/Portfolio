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
    let formattedTimeAgo = ''
    if (diff < 3) {
      formattedTimeAgo = 'Just now'
    } else if (diff >= 3 && diff < 60) {
      formattedTimeAgo = `${Math.floor(diff)} second(s) ago`
    } else {
      const minutes = Math.floor(diff / 60)
      if (minutes < 60) {
        formattedTimeAgo = `${minutes} minute(s) ago`
      } else {
        const hours = Math.floor(minutes / 60)
        if (hours < 24) {
          formattedTimeAgo = `${hours} hour(s) ago`
        } else {
          const days = Math.floor(hours / 24)
          formattedTimeAgo = `${days} day(s) ago`
        }
      }
    }
    return { diff, formattedTimeAgo }
  })

  const updateLastUpdated = (date: Date = new Date()) => {
    lastUpdated.value = date
  }

  return {
    timeAgo,
    updateLastUpdated
  }
}
