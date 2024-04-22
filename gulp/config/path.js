// Получить имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./build";
const jsFiles = [
	"./src/js/carousel-init.js",
];

export const path = {
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/*.scss`,
		js: jsFiles,
		img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,gltf}`,
		fonts: `${srcFolder}/fonts/*.*`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgspriteIn: `${srcFolder}/svgsprite/*.svg`,
		svgspriteOut: `${srcFolder}/html/`,
		constructorJs: `${srcFolder}/js/modules/constructor/*.*`,
	},
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		deploy: `${buildFolder}/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: `${srcFolder}/img/**/*.*`,
		svg: `${srcFolder}/svgsprite/*.svg`,
		constructorJs: `${srcFolder}/js/modules/constructor/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
