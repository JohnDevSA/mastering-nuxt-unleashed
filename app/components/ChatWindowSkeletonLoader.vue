<template>
  <!-- Show skeleton while not ready -->
  <UPageGrid class="chat-separator" :class="{ 'text-right': n % 2 === 0 }">
    <UPageCard>
      <div class="grid gap-2 mt-5">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </UPageCard>
  </UPageGrid>

  <div v-for="n in 2" :key="n">
    <!-- User side skeleton (left) -->

    <UPageGrid class="chat-separator" :class="{ 'text-right': n % 2 === 0 }">
      <UPageCard>
        <USkeleton class="h-12 w-12 rounded-full" />
        <div class="grid gap-2 mt-5">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </UPageCard>
    </UPageGrid>

    <!-- Separator between user and assistant -->
    <USeparator v-if="n !== 5"/> <!-- Avoid separator after the last message -->

    <!-- Assistant side skeleton (right) -->
    <UPageGrid class="chat-separator" :class="{ 'text-left': n % 2 !== 0 }">
      <UPageCard>
        <USkeleton class="h-12 w-12 rounded-full user-avatar" />
        <div class="grid gap-2 mt-5">
          <USkeleton class="h-4 user-message w-[250px]" />
          <USkeleton class="h-4 user-message w-[200px]" />
        </div>
      </UPageCard>
    </UPageGrid>
  </div>

  <UPageGrid class="chat-separator" :class="{ 'text-left': n % 2 !== 0 }">
    <UPageCard>
      <div class="flex items-center gap-4">
        <USkeleton class="h-30 w-12  w-[650px]" />
        <USkeleton class="h-12 w-12  w-[50px] rounded-full" />

<!--        <div class="grid gap-2">-->
<!--          <USkeleton class="h-4 w-[250px]" />-->
<!--          <USkeleton class="h-4 w-[200px]" />-->
<!--        </div>-->
      </div>
    </UPageCard>
  </UPageGrid>
</template>

<style scoped>
 .chat-separator {
   padding: 5px !important;
   margin-top: 5px!important;
   margin-bottom: 5px!important;
 }

 .user-avatar {
   margin-left: 640px!important;
 }

 .user-message {
   margin-left: 410px!important;
 }

</style>
