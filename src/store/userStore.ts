import { create } from 'zustand';
import zukeeper from 'zukeeper';

interface User {
  id: string;
  name: string;
}

interface UserStore {
  listUsers: User[];             
  addUser: (name: string) => void;  
  removeUser: (id: string) => void;
}

const userStore = create<UserStore>(
  zukeeper((set: any) => ({
    listUsers: [],
    addUser: (name: string) => set((state: any) => ({
      listUsers: [...state.listUsers, { id: Date.now().toString(), name }],
    })),
    removeUser: (id: string) => set((state: any) => ({
      listUsers: state.listUsers.filter((user: any) => user.id !== id),
    })),
  }), )
);

export default userStore;
