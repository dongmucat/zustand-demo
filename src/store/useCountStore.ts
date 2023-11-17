import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 模拟获取数据
const fetchCount = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(888);
		}, 2000);
	});

// 接口定义
interface IUseCountStore {
	count: number;
	increase: () => void;
	decrease: () => void;
	reset: () => void;
	fetch: () => void;
}

const INITCOUNT = 0;

const useCountStore = create<IUseCountStore>((set) => ({
	count: INITCOUNT,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: INITCOUNT }),
	fetch: async () => {
		const res = (await fetchCount()) as number;
		set({ count: res });
	},
}));

export default useCountStore;
