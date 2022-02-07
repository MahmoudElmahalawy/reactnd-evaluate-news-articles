import handleResult from "./handleResult";
import checkURL from "./checkURL";

const handleSubmit = (e) => {
	e.preventDefault();

	const articleURL = document.querySelector("#article-url");

	if (!checkURL(articleURL.value)) {
		alert("Invalid URL!");
	} else {
		fetch(`http://localhost:8081/url?input=${articleURL.value}`)
			.then((response) => response.json())
			.then((result) => handleResult(result));
	}
};

export default handleSubmit;
