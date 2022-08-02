import { CharactersCollections } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollections = new CharactersCollections('Xaayb');
const sorter = new Sorter(charactersCollections);
sorter.sort();
console.log(charactersCollections.data);
