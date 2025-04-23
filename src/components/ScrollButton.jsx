import { Button } from "react-bootstrap";
import { useState } from "react";
import NorthIcon from '@mui/icons-material/North';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<Button active={true} className="backtotop" onClick={scrollToTop}>
			<NorthIcon/>
		</Button>
	);
};

export default ScrollButton;