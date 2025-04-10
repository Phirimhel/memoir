import { ref } from 'vue'
import type { Option } from '@/shared/model/option'

export const postSortOptions: Option[] = [
  { value: 'id', label: 'ID' },
  { value: 'title', label: 'Title' },
  { value: 'body', label: 'Body' },
]
