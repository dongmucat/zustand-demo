import useCountStore from "../../store/useCountStore";
import "./index.css";
const Foo = () => {
	const count = useCountStore((state)=>state.count);
    
	return (
		<div className="foo-wrap">
			<div className="foo-content">
				<h2>foo count: {count}</h2>
			</div>
		</div>
	);
};

export default Foo;
