# Random Title Emoji

A custom hook that add's a random emoji in the title of a React title.

## Installation

```
npm install random-title-emoji
```
NPM [link](https://www.npmjs.com/package/random-title-emoji)

## Example

```jsx
import { useEmojiTitle } from 'random-title-emoji';

const App = () => {
	let custom = ['🍏', '🍎', '🍐'];
	return (
		<div>
			{useEmojiTitle({
				category: 'smileys',
				timeInterval: 2000,
				limit: 10,
				customGroup: custom
			})}
		</div>
	);
};
export default App;
```

## Props

- `category` - The category of emojis you would like to be displayed in the title. (_'animalAndNature', 'foodAndDrinks', 'smileys', 'everydayObjects', 'travelAndPlaces'_). **Default** is _'animalAndNature'_.
- `timeInterval` - Second parameter of the interval. How fast you want the emojis to change.
- `title` - The title of your document. **Default** is `document.title`.
- `placeLast` - Places the emoji in the end of you title. **Defualt** is false.
- `limit` - Limit how many emojis you want to randomly be shown.
- `customGroup` - An array of icons you specify to loop through.

### Author

John Raptis
