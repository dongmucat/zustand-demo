import { create } from "zustand";
import { produce } from "immer";

type State = {
	todos: string[];
	addTodo: (todo: string) => void;
	removeTodo: (index: number) => void;
};

// 创建store
const useTodoStore = create<State>((set) => ({
	todos: [],
	addTodo: (todo) => set(produce((state) => state.todos.push(todo))),
	removeTodo: (index) =>
		set(produce((state) => state.todos.splice(index, 1))),
}));

export default useTodoStore;
