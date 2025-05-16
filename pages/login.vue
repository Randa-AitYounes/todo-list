
<template>
  <UCard v-if="!success" class="p-4 max-w-xl mx-auto mt-8">
   
    <template #header>
      Connexion
    </template>
    <form @submit.prevent="handleLogin">
      <UFormField  label="Email" name="email" class="mb-4" :required="true"
        help="Vous allez recevoir un email contenant un lien d'activation">
        <UInput type="email" placeholder="Email" required v-model="email" />
      </UFormField >
      <UButton type="submit" variant="solid" color="neutral" :loading="pending" :disabled="pending">Se connecter</UButton>
    </form>
  </UCard>
  <UCard v-else>
    <template #header>
      Email envoyé
    </template>
    <div class="text-center">
      <p class="mb-4">Nous avons envoyé un email à <strong>{{ email }}</strong> avec un lien d'authentification</p>
     
    </div>
  </UCard>
</template>
<script setup>
const success = ref(false)
const pending = ref(false)
const email = ref('')
const toast = useToast()
const supabase = useSupabaseClient()

const handleLogin = async () => {
  pending.value = true

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: 'http://localhost:3002/home'
      }
    })
    success.value = true
console.log(pending.value)
    if (error) {
       console.log(error)
      toast.add({
        title: 'Error authenticating',
        icon: 'i-heroicons-exlamation-circle',
        description: error.message
      })
    }
  } finally {
    pending.value = false
  }
}
</script>