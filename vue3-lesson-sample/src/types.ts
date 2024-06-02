export interface ToDoItem {
  id: number
  title: string
  completed: boolean
  sortOrder: number
  createDate: Date
  completedDate?: Date
  editItem: boolean
}
