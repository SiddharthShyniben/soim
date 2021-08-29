import minimist from 'minimist';
import {generateImage} from '../src/index.js';

const argv = minimist(process.argv.slice(2));

if (argv.p) argv.path = argv.p;
if (argv.l) argv.link = argv.l;
if (argv.i) argv.img = argv.i;
if (argv.t) argv.tags = argv.T;
if (argv.c) argv.caption = argv.c;
if (argv.v) argv.verbose = argv.v;

generateImage(argv);
