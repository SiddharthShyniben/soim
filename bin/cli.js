import minimist from 'minimist';
import {generateImage} from '../src/index.js';

const argv = minimist(process.argv.slice(2));

if (argv.p ?? true) argv.path = argv.p;
if (argv.l ?? true) argv.link = argv.l;
if (argv.i ?? true) argv.img = argv.i;
if (argv.T ?? true) argv.tags = argv.T;
argv.tags = argv.tags.split(',').map(str => str.trim());
if (argv.t ?? true) argv.text = argv.t;
if (argv.c ?? true) argv.caption = argv.c;
if (argv.v ?? true) argv.verbose = argv.v;
if (argv.s ?? true) argv.deviceScaleFactor = argv.s;

argv.viewPort = {};
if (argv.w ?? true) argv.viewPort.width = argv.w;
if (argv.h ?? true) argv.viewPort.height= argv.h;

generateImage(argv);
