import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";
function App() {
	return (
		<>
			<Heading>
				Página inicial
				<button type="button">
					<TimerIcon />
				</button>
				<button type="button">
					<TimerIcon />
				</button>
			</Heading>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
				provident nemo magni impedit, optio perspiciatis officiis voluptatibus
				quia labore ipsam incidunt repudiandae ducimus esse molestiae est
				repellat accusantium velit? Mollitia?
			</p>
		</>
	);
}
export { App };
