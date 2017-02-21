webpack := $(shell npm bin)/webpack
webpack-dev-server := $(shell npm bin)/webpack-dev-server

slide-1:
	@ $(webpack) --config ./slide-1/webpack.config.js --context ./slide-1/

slide-2:
	@ $(webpack) --config ./slide-2/webpack.config.js --context ./slide-2/

slide-3:
	@ $(webpack-dev-server) --config ./slide-3/webpack.config.js --context ./slide-3/

slide-4:
	@ $(webpack-dev-server) --config ./slide-4/webpack.config.js --context ./slide-4/

slide-5:
	@ $(webpack-dev-server) --config ./slide-5/webpack.config.js --context ./slide-5/

slide-6:
	@ $(webpack-dev-server) --config ./slide-6/webpack.config.js --context ./slide-6/

slide-7:
	@ $(webpack) -p --config ./slide-7/webpack.config.js --context ./slide-7/ --env=production

clean:
	@ rm -rf slide-*/dist


.PHONY: slide-1 slide-2 slide-3 slide-4 slide-5 slide-6 slide-7 clean
