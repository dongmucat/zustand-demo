import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 模拟获取数据
const fetchCount = () =>
	new Promise((resolve) => setTimeout(() => resolve(888), 2000));

// 接口定义
interface IUseCountStore {
	count: number;
	increase: () => void;
	decrease: () => void;
	reset: () => void;
	fetch: () => void;
}

const useCountStore = create(
	persist<IUseCountStore>(
		(set) => ({
			count: 0,
			increase: () => set((state) => ({ count: state.count + 1 })),
			decrease: () => set((state) => ({ count: state.count - 1 })),
			reset: () => set({ count: 0 }),
			fetch: async () => {
				const res = (await fetchCount()) as number;
				set({ count: res });
			},
		}),
		{
			name: "useCountStore-storage", // unique name
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
);
export default useCountStore;
