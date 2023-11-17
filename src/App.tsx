import useCountStore from "./store/useCountStore";
import Foo from "./components/foo";
import "./App.css";

function App() {
	const { count, increase, decrease, reset, fetch } = useCountStore();

	return (
		<div className="app">
			<div className="app-content">
				<h2>app count: {count}</h2>
				<button onClick={increase}>increase</button>
				<button onClick={decrease}>decrease</button>
				<button onClick={reset}>reset</button>
				<button onClick={fetch}>fetch</button>
			</div>
			<Foo />
		</div>
	);
}

export default App;
