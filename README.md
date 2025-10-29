## Google Buildpacks CBNS

- Containerized with Buildpacks instead Dockerfile

## Simple java app
```
Build the app using pack

- pack build myapp --builder cnbs/sample-builder:noble

NOTE: This is your first time running pack build for myapp, so you’ll notice that the build might take longer than usual. Subsequent builds will take advantage of various forms of caching. If you’re curious, try running pack build myapp a second time to see the difference in build time.

That’s it! You’ve now got a runnable app image called myapp available on your local Docker daemon. We did say this was a brief journey after all. Take note that your app was built without needing to install a JDK, run Maven, or otherwise configure a build environment. pack and buildpacks took care of that for you.

Beyond the journey 
To test out your new app image locally, you can run it with Docker:

- docker run --rm -p 8080:8080 myapp

Now hit localhost:8080 in your favorite browser and take a minute to enjoy the view.

```

## Nodejs
```
Step 1: Use a Valid Builder

The official Heroku builder images have been deprecated, and pack now recommends using the Paketo or CNB official builders instead.

Run this command to list available builders:

- pack builder suggest


You’ll get a list like:

Suggested builders:
  gcr.io/paketo-buildpacks/builder:base
  gcr.io/paketo-buildpacks/builder:full
  gcr.io/buildpacks/builder:v1

---

Choose a Suitable Builder

For Node.js, the Paketo Base builder is perfect:
Since you’re building a simple Node.js app (index.js + package.json), the best choice here is:

paketobuildpacks/builder-jammy-base

It’s lightweight, up to date, and includes Node.js by default.

Build your Node.js app:

- pack build sample-app --path . --builder paketobuildpacks/builder-jammy-base
- docker run --rm -it -e "PORT=8080" -p 8080:8080 sample-app

```
## Golang
```
- pack build my-app --buildpack paketo-buildpacks/go \
  --builder paketobuildpacks/builder-jammy-base

---
- pack build sample-go --builder gcr.io/buildpacks/builder:v1

---
Why your Go app does not show source files

Go apps are compiled into a binary, so the buildpack:

Compiles main.go → a single binary

Keeps only that binary

Removes your main.go, go.mod, etc.

This makes your image smaller and faster.
So when you docker exec into your Go Buildpack container, you’ll see only the binary, not the source.

```


- https://paketo.io/docs/
- https://buildpacks.io/docs/
- https://github.com/buildpacks/samples
- https://cloud.google.com/docs/buildpacks/overview
- docker rmi -f $(docker images -aq)
