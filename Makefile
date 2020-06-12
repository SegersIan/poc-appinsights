build:
	docker build -t iansegers/poc-appi:latest .

publish:
	docker push iansegers/poc-appi:latest

start:
	docker run  -e APPINSIGHTS_INSTRUMENTATIONKEY=$(INSTRUMENTATION_KEY) -it --rm -p 3000:3000 --name poc-appi iansegers/poc-appi:latest