## Google Buildpacks CBNS

- Containerized with Buildpacks instead Dockerfile

```
docker run -d --name buildpack -p 3000:3000 yolomurphy/buildpack-ga:latest
```

## Simple java app
```
Build the app using pack
pack build myapp --builder cnbs/sample-builder:noble
NOTE: This is your first time running pack build for myapp, so you’ll notice that the build might take longer than usual. Subsequent builds will take advantage of various forms of caching. If you’re curious, try running pack build myapp a second time to see the difference in build time.

That’s it! You’ve now got a runnable app image called myapp available on your local Docker daemon. We did say this was a brief journey after all. Take note that your app was built without needing to install a JDK, run Maven, or otherwise configure a build environment. pack and buildpacks took care of that for you.

Beyond the journey 
To test out your new app image locally, you can run it with Docker:

docker run --rm -p 8080:8080 myapp
Now hit localhost:8080 in your favorite browser and take a minute to enjoy the view.


```
