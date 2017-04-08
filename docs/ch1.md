## 1


### 프로젝트 폴더 생성
```sh
$ mkdir TypeScriptIdol
$ cd TypeScriptIdol
```

### 프로젝트 설정
```sh
$ npm init
or
$ yarn init
```
package.json 파일이 생성된다.

### git 설정
.gitignore 파일
```
node_modules/
```

### 타입스크립트 설치
```shell
$ npm install typescript --dev
or
$ yarn add typescript --dec
```
yarn.lock 파일이 생성된다.
package.json 파일이 변경된다.

### 서버 설치
```shell
$ npm install lite-server --dev
or
$ yarn add lite-server --dec
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>TypeScript Idol</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
  </head>
  <body>
    <div class="container">
      <h1>Hello, world!</h1>
    </div>
    <script src="dist/app.js"></script>
  </body>
</html>
```


app.ts
```typescript
var idol : string = '이시하라 사토미';
```

```sh
$ ./node_modules/.bin/tsc app.ts
```

```
$ tsc app.ts
```

```javascript
var idol = '이시하라 사토미';
```
