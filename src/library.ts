//import axios from 'axios';
//axios.get('');
//import _ from 'lodash';
interface Lodash {
    shuffle<T>(array: T[]): T[]
}
declare const _: Lodash
console.log(_.shuffle([1, 2, 3, 4]));