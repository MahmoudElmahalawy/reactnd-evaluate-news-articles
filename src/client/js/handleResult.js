const handleResult = (result) => {
	if (!result) return;

	const polarity = document.getElementById("polarity");
	const agreement = document.getElementById("agreement");
	const subjectivity = document.getElementById("subjectivity");
	const confidence = document.getElementById("confidence");
	const irony = document.getElementById("irony");

	switch (result.score_tag) {
		case "N":
			polarity.innerHTML = "Negative";
			break;
		case "N+":
			polarity.innerHTML = "Very Negative";
			break;
		case "P+":
			polarity.innerHTML = "Very Positive";
			break;
		case "NEU":
			polarity.innerHTML = "Neutral";
			break;
		case "P":
			polarity.innerHTML = "Positive";
			break;
		case "":
			polarity.innerHTML = "";
			break;
	}

	switch (result.agreement) {
		case "DISAGREEMENT":
			agreement.innerHTML = "Disagreement";
			break;
		case "AGREEMENT":
			agreement.innerHTML = "Agreement";
			break;
		case "":
			agreement.innerHTML = "";
			break;
	}

	switch (result.subjectivity) {
		case "OBJECTIVE":
			subjectivity.innerHTML = "Objective";
			break;
		case "SUBJECTIVE":
			subjectivity.innerHTML = "Subjective";
			break;
	}

	switch (result.confidence) {
		case null:
			confidence.innerHTML = "";
			break;
		case "":
			confidence.innerHTML = "";
			break;
		default:
			confidence.innerHTML = result.confidence + "%";
	}

	switch (result.irony) {
		case "NONIRONIC":
			irony.innerHTML = "Not Ironic";
			break;
		case "IRONIC":
			irony.innerHTML = "Ironic";
			break;
		case null:
			irony.innerHTML = "";
			break;
	}
};

export default handleResult;
