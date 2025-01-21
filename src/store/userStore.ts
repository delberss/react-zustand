import { create } from 'zustand';
import zukeeper from 'zukeeper';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
}

interface UserStore {
  listUsers: User[];
  addUser: (name: string) => void;
  removeUser: (id: string) => void;
}

const userStore = create<UserStore>()(
  persist(
    zukeeper((set: any) => ({
      listUsers: [],
      addUser: (name: string) =>
        set((state: any) => ({
          listUsers: [...state.listUsers, { id: Date.now().toString(), name }],
        })),
      removeUser: (id: string) =>
        set((state: any) => ({
          listUsers: state.listUsers.filter((user: any) => user.id !== id),
        })),
    })),
    {
      name: 'user-store',
    }
  )
);

export default userStore;
