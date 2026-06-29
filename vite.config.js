import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        student: resolve(__dirname, 'student.html'),
        halloffame: resolve(__dirname, 'halloffame.html'),

      }
    }
  }
})