import AppleBYZ from '../assets/Apple BYZ S852I.png';
import AppleAirpods from '../assets/Apple AirPods.png';
import AppleEarPods from '../assets/Apple EarPods.png';
import AppleEarPodsPacked from '../assets/Apple EarPods(packed).png';
import Gerlax from '../assets/GERLAX GH-04.png';
import BOROFONE from '../assets/BOROFONE BO4.png';
import { IProductCartItem } from 'components/ProductCard/ProductCard.types';

export const headphonesArray: IProductCartItem[] = [
  {
    id: '643d69a5c3f7b9001cfa093c',
    image: AppleBYZ,
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    isWireless: false,
  },
  {
    id: '643d69a5c3f7b9001cfa0941',
    image: AppleEarPods,
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    id: '643d69a5c3f7b9001cfa093e',
    image: AppleEarPodsPacked,
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    id: '643d69a5c3f7b9001cfa0942',
    image: AppleAirpods,
    title: 'Apple EarPods',
    price: 9527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
  {
    id: '643d69a5c3f7b9001cfa0943',
    image: Gerlax,
    title: 'GERLAX GH-04',
    price: 6527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
  {
    id: '643d69a5c3f7b9001cfa093f',
    image: BOROFONE,
    title: 'BOROFONE BO4',
    price: 7527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
];
