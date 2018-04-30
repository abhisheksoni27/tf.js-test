import * as tf from '@tensorflow/tfjs';
import {loadFrozenModel} from '@tensorflow/tfjs-converter'

const canvas = document.getElementById('canvas');

const MODEL_URL = 'https://nofile.io/f/eGCEwUP1O3r/tensorflowjs_model.pb';
const WEIGHTS_URL = 'https://nofile.io/f/y0ffA4k7tGU/weights_manifest.json';

const model = loadFrozenModel(MODEL_URL, WEIGHTS_URL,{credentials: 'include', mode:'no-cors'});