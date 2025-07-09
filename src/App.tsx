import reactLogo from "./assets/react.svg";

function App() {
	return (
		<div className="h-screen bg-yellow-primary text-red-700 text-[50px]">
			<div>
				<a href="/gavno">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
		</div>
	);
}

export default App;
