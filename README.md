# react-typed.js

### A react wrapper for typed.js with support for all of its options.

---

#### Installation

```sh
npm i react-typed.js
```

---

#### Examples

This wrapper supports all of the customization options that [type.js](https://github.com/mattboldt/typed.js/) has. To configure the wrapper simply pass in the arguments through props.

```javascript
import React from 'react'
import Typed from 'react-typed.js';

export default function Banner() {
    return (
        <div className="banner">
            <Typed strings={["This is a banner that is using typed.js with the react-typed.js wrapper"]} showCursor={false} loop={false} />
            <Typed strings={["This is another banner!", "And we're rewriting the text! o_0"]} showCursor={true} loop={false} />
        </div>
    )
}


```