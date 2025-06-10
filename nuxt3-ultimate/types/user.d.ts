export interface User {
  id: string
  email: string
  fullName: string
  roles: Array<'Admin' | 'Editor' | 'Viewer'>
  status: 'active' | 'invited' | 'disabled'
  createdAt: string
}
