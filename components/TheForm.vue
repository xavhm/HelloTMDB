<template>
  <h3 class="text-primary mb-2">Leave a comment</h3>
  <UForm
    :schema="schema"
    :state="formData"
    class="w-full space-y-4"
    @submit.prevent="saveNewComment"
  >
    <UFormGroup label="Username" name="username" eager-validation>
      <UInput v-model="formData.username" placeholder="Tony Stark" variant="outline" />
    </UFormGroup>
    <UFormGroup label="Message" name="message" eager-validation>
      <UInput v-model="formData.message" placeholder="Write message..." variant="outline" />
    </UFormGroup>
    <UFormGroup label="Rating" name="rating" eager-validation>
      <UInput v-model="formData.rating" type="number" placeholder="Your note" variant="outline" />
    </UFormGroup>
    <UButton color="primary" type="submit">Save</UButton>
  </UForm>

  <div class="flex flex-col gap-3 mt-10">
    <h3 class="text-primary">Comments</h3>
    <article
      v-for="comment in comments"
      :key="comment.savedAt"
      class="bg-slate-800 rounded-md p-2"
      aria-label="Comments"
    >
      <p><span class="text-sm text-primary/40">Rating: </span>{{ comment.rating }}</p>
      <p><span class="text-sm text-primary/40">Message: </span>{{ comment.message }}</p>
      <p>
        <span class="text-sm text-primary/40">by {{ comment.username }} at</span>
        {{
          new Intl.DateTimeFormat('us-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // or false for 24-hour format
          }).format(comment.savedAt)
        }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
  import { z } from 'zod';

  const props = defineProps<{ movieId: number }>();
  const comments = ref<SavedComment[]>([]);

  const schema = z.object({
    username: z
      .string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must not be longer than 50 characters'),
    message: z
      .string()
      .min(3, 'Must be at least 3 characters')
      .max(500, 'Must not be longer than 500 characters'),
    rating: z.number().min(1, 'Must be at least 1').max(10, 'Must be at best 10'),
  });

  type Comment = z.infer<typeof schema>;
  type SavedComment = Comment & { savedAt: number };

  const formData = ref<Comment>({
    username: '',
    message: '',
    rating: 1,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveNewComment(formData: any) {
    const newComment: SavedComment = { ...formData.data, savedAt: Date.now() };
    const savedComments = window.localStorage.getItem(`comments-${props.movieId}`);
    const updatedSavedComments = savedComments
      ? [...JSON.parse(savedComments), newComment]
      : [newComment];
    window.localStorage.setItem(`comments-${props.movieId}`, JSON.stringify(updatedSavedComments));
    loadSavedComments();
  }

  function loadSavedComments() {
    const commentsFromStorage = window.localStorage.getItem(`comments-${props.movieId}`);
    if (!commentsFromStorage) return;
    const savedComments = JSON.parse(commentsFromStorage) as Array<SavedComment>;
    comments.value = savedComments.sort((a, b) => b.savedAt - a.savedAt);
  }

  onMounted(() => loadSavedComments());
</script>

<style></style>
