import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import map from "./modules/map";

documentReady(() => {
	lazyImages();
	map();
});
