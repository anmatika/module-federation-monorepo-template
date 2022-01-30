# Typescript monorepo module federation template

## Desc

Template for Typescript monorepo with module federation apps and shared lib packages.

## Structure
```
/
  /apps (module federation apps)
    /host (the host app)
    /header (remote app)
  /libs (shared packages)
    /utils (utilities)
    /types (shared types)

```

## Install deps and start apps

At `/`

```
yarn
yarn start
```

Lerna starts up apps at
```
- :8080 --> host app
- :8081 --> header app
```

## Test

```
yarn test
```
## Lint

```
yarn lint
```

