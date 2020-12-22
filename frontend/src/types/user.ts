export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserEditData {
  firstname: string;
  lastname: string;
  email: string;
}

export interface PaginatedUsers {
  limit: number | null;
  page: number | null;
  users: User[];
  total: number;
}

export interface UserManagementType {
  loading: boolean;
  paginatedUsers: PaginatedUsers | null;
  user: User | null;
  error: any;
  message: string;
  getUsers: (page?: number, limit?: number) => void;
  getUser: (userId: string) => void;
  addUser: (user: User) => void;
  editUser: (userId: string, data: UserEditData) => void;
  deleteUser: (userId: string) => void;
}
