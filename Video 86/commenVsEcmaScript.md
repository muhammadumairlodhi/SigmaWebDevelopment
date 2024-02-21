*Key Difference*
<!-- Key feature  -->
| Feature     | CommenJs | EcmaScript |
| ----------- | ----------- | ----------- |
| Syntax      | ```require()``` for import   <br> ```modules.export```for Export    |```import```and ```export```|
| Loading Style   |     Synchronous    |Asynchronous (can be used with top-level await)|
| Named Exports	| Single default export per module|	Multiple named exports per module|
|Browser Compatibility	|No direct support	|Native support in modern browsers|
|File Extensions	|```.js```	|```.mjs``` or `.js` with `"type": "module"` in package.json|

<!-- Which should be used -->

+ Legacy Projects: If you're working on an older Node.js project, it's likely using CommonJS.
+ Modern Node.js and Browser Compatibility: For new projects and situations where you want code to run in both Node.js and browsers, ESM is generally the better choice.
+ Performance ESM can have potential performance benefits with asynchronous loading in specific scenarios.