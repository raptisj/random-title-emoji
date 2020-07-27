import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { CATEGORY, animalAndNature, foodAndDrinks, smileys, everydayObjects, travelAndPlaces } from './emojis';
import { useInterval } from './hooks';

const useEmojiTitle = ({
	category = 'animalAndNature',
	timeInterval = 60000,
	title = document.title,
	placeLast = false,
	limit = 0,
	customGroup = []
}) => {
	const [randomEmoji, setRandomEmoji] = useState('');
	const initialTitle = useRef(title);

	function* filter(array, maxSize) {
		if (!maxSize || maxSize > array.length) {
			maxSize = array.length;
		}
		let count = 0;
		let i = 0;
		while (count < maxSize && i < array.length) {
			yield array[i];
			count++;
			i++;
		}
	}

	function* test(customGroup) {
		let i = 0;
		while (i < customGroup.length) {
			yield customGroup[i];
			i++;
		}
	}

	let oo = useRef(0);
	//TODO => useCallback?
	const randomItem = (items, lim) => {
		if (customGroup.length > 0) {
			oo.current < customGroup.length - 1 ? oo.current++ : (oo.current = 0);

			return customGroup[oo.current];
		} else {
			if (lim > 0) {
				let po = Array.from(filter(items, lim));
				return po[Math.floor(Math.random() * po.length)];
			} else {
				return items[Math.floor(Math.random() * items.length)];
			}
		}
	};

	const getCategory = (category) => {
		switch (category) {
			case CATEGORY.animalAndNature:
				return animalAndNature;

			case CATEGORY.foodAndDrinks:
				return foodAndDrinks;

			case CATEGORY.smileys:
				return smileys;

			case CATEGORY.everydayObjects:
				return everydayObjects;

			case CATEGORY.travelAndPlaces:
				return travelAndPlaces;

			default:
				return;
		}
	};

	useEffect(() => {
		initialTitle.current = title;
	}, []);

	useInterval(() => {
		setRandomEmoji((randomEmoji) => randomItem(getCategory(category), limit));
	}, timeInterval);

	let newTitle = placeLast ? `${initialTitle.current} ${randomEmoji}` : `${randomEmoji} ${initialTitle.current}`;

	return (
		<Helmet>
			<title>{newTitle}</title>
		</Helmet>
	);
};

export { useEmojiTitle };
