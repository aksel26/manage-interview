import { create } from "zustand";

// 스토어의 상태에 대한 인터페이스 정의
interface DrawerState {
  drawerOpened: boolean;
  drawerOpen: () => void;
  drawerClose: () => void;
}

// Zustand 스토어 생성
const useDrawerState = create<DrawerState>((set) => ({
  drawerOpened: false,
  drawerOpen: () => set(() => ({ drawerOpened: true })),
  drawerClose: () => set(() => ({ drawerOpened: false })),
}));

export default useDrawerState;
