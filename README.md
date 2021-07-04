# React Wrapper for EasyLogic Studio 


# How to use 

refer to dev-index.tsx 

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditorView from "@easylogic/react-editor";

ReactDOM.render(<EditorView plugins={[
    MyPlugin
]}/>, document.getElementById('app'));

```


## Features 

* initialize plugin 
* add UI Element 
* add MenuItem in sidebar 
* add Inspector 
* add Html Renderer 
* add Layer Model 

# Local Dev 

Please install `react` and `react-dom`

```
npm install
npm install @easylogic/react-editor react react-dom
npm run dev 
```

# How to run

```js
npm run dev 
```
