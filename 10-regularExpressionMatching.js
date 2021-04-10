var isMatch = function (s, p) {
	let a = 0;
	let b = 0;
	let lastMatch = {};

	const patternTransform = transformPatternString(p);
	const noStars = patternTransform.filter((patternObj) => !patternObj.star);

	let cont = true;

	if (noStars.length && !preliminaryCheck(s, noStars)) return false;

	while (cont) {
		const stringLetter = s[a];
		let patternObj = patternTransform[b];

		console.log(stringLetter);
		console.log(patternObj);
		console.log(a, b);

		if (!patternObj) {
			return a === s.length;
		}

		if (
			patternObj.letter === lastMatch.letter &&
			!patternObj.star &&
			lastMatch.star
		) {
			b++;
			continue;
		}

		if (!stringLetter) {
			return checkRemainingPatternsObjects(
				patternTransform,
				b,
				lastMatch
			);
		}

		const checkResult = checkLetterMatch(stringLetter, patternObj);

		if (checkResult) {
			if (a < s.length) a++;
			if (!patternObj.star) b++;
			lastMatch = {
				letter: stringLetter,
				star: patternObj.star,
			};
		} else {
			if (!patternObj.star) {
				cont = false;
			} else {
				b++;
			}
		}
	}

	return a === s.length && b === patternTransform.length;
};

function checkLetterMatch(stringLetter, patternObj) {
	if (!stringLetter) return false;
	if (stringLetter === patternObj.letter || patternObj.letter === ".")
		return true;

	return 0;
}

function transformPatternString(p) {
	const arrayOfLetters = Array.from(p);

	const result = [];

	for (let i = 0; i < arrayOfLetters.length; i++) {
		const letter = arrayOfLetters[i];
		let star = false;
		if (letter === "*") continue;

		if (arrayOfLetters[i + 1] === "*") star = true;

		result.push({
			letter,
			star,
		});
	}

	return result;
}

function checkRemainingPatternsObjects(patternTransform, b, lastMatch) {
	for (let i = b; i < patternTransform.length; i++) {
		if (patternTransform[i].star === false) {
			if (
				(lastMatch.letter === patternTransform[i].letter ||
					patternTransform[i].letter === ".") &&
				lastMatch.star
			) {
				continue;
			} else return false;
		}
	}

	return true;
}

function preliminaryCheck(s, noStars) {
	let a = 0;
	let b = 0;

	while (true) {
		if (a === s.length || b === noStars.length) break;

		if (s[a] === noStars[b].letter || noStars[b].letter === ".") {
			b++;
		}
		a++;
	}

	return b === noStars.length;
}

console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s"));
