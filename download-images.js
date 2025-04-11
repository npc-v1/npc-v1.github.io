const imageUrls = {
    'assets/images/avatar.jpg': 'https://picsum.photos/96/96',
    'assets/images/banner.jpg': 'https://picsum.photos/1920/1080',
    'assets/images/portfolio/dota2-naga.jpg': 'https://picsum.photos/1200/800?random=1',
    'assets/images/portfolio/qa-testing.jpg': 'https://picsum.photos/1200/800?random=2',
    'assets/images/portfolio/mathematics.jpg': 'https://picsum.photos/1200/800?random=3',
    'assets/images/portfolio/basketball.jpg': 'https://picsum.photos/1200/800?random=4',
    'assets/images/portfolio/singing.jpg': 'https://picsum.photos/1200/800?random=5'
};

// For overlay.png, create a simple data URL with a transparent pattern
const overlayDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC';

// Log the URLs to download
console.log('Please download images from these URLs:');
for (const [path, url] of Object.entries(imageUrls)) {
    console.log(`${path}: ${url}`);
}
console.log('overlay.png: Create using the data URL above');