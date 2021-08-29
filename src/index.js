import puppeteer from 'puppeteer';

export async function generateImage(options) {
	if (!options.link) {
		options.link = `https://siddharthshyniben.github.io/social-image-generator/?${
			options.tags ? `tags=${encodeURI(options.tags.join(', '))}&` : ''
		}${
			options.text ? `text=${encodeURI(options.text)}&` : ''
		}${
			options.caption ? `caption=${encodeURI(options.caption)}&` : ''
		}${
			options.img ? `img=${encodeURI(options.img)}&` : ''
		}`;
	}
	if (!options.path) options.path = 'shot.png';
	if (!options.viewPort) options.viewPort = {width: 600};
	if (!options.viewPort.width) options.viewPort.width = 600;
	if (!options.viewPort.height) options.viewPort.height = 315;
	if (!options.deviceScaleFactor) options.deviceScaleFactor = 2;

	const browser = await puppeteer.launch();
	console.log('Launched');

	const page = await browser.newPage();
	console.log('Opened page');

	await page.goto(options.link);
	console.log('Went to page');

	await page.setViewport({
		width: 600,
		height: 315,
		deviceScaleFactor: 2
	});
	console.log('Set viewport')

	await page.screenshot({path: options.path})
	console.log('Screenshotted');

	await browser.close();
	console.log('Done');
}

