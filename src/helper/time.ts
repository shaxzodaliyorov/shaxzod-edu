export const TimeHelper = (hours: number, minuts: number, seconds: number) => {
	let hour;
	let minut;
	let second;
	if (hours < 9 || hours === 0) {
		hour = `0${hours}`;
	} else {
		hour = `${hours}`;
	}

	if (minuts < 9 || minuts === 0) {
		minut = `0${minuts}`;
	} else {
		minut = `${minuts}`;
	}

	if (seconds < 9 || seconds === 0) {
		second = `0${seconds}`;
	} else {
		second = `${seconds}`;
	}
	return `${hour}:${minut}:${second}`;
};
