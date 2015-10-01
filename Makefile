build:
	- rm -rf dist/*
	mkdir -p dist/css
	node_modules/gulp/bin/gulp.js build
	cp ./css/app.css* ./dist/css
	jspm bundle-sfx app/main.js dist/app.js
	./node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html
