export interface User {
  id: string
  email: string
  fullName: string
  roles: Array<'Admin' | 'Editor' | 'Viewer'>
  permissions: string[]
  status: 'active' | 'invited' | 'disabled'
  createdAt: string
}
