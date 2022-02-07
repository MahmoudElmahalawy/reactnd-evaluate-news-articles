import handleSubmit from "./js/handleForm";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/result.scss";

document.addEventListener("load", () => {
	const submitBtn = document.querySelector(".btn-submit");

	submitBtn.addEventListener("click", handleSubmit);
});
