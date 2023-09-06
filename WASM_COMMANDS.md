## Create Rust Library with Cargo
```bash
$ cargo new wasm-lib --lib
     Created library `wasm-lib` package
```

## Implement a Rust function that you want to call from JavaScript in lib.rs file of wasm-lib directory
```bash
$ cd wasm-lib
$ cargo test
   Compiling wasm-lib v0.1.0 (/Users/tkat0/GitHub/react-wasm-tutorial/wasm-lib)
...
running 1 test
test add_test ... ok
```

## Wrap the function with wasm-bindgen to export it as Wasm.
wasm-bindgen is Rust library that facilitate high-level interactions between Wasm and JavaScript. For example, you can call Rust(Wasm) from JavaScript, and vice versa.

To add wasm-bindgen dependency, you need to add it to Cargo.toml.
```toml
[package]
name = "wasm-lib"
version = "0.1.0"
edition = "2021"


# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.78"
```

## Then, Let's wrap the function with wasm-bindgen. Notice that only public function can be exported.
```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[test]
fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
}

```

## Build as Wasm library with wasm-pack
```bash
$ cd ..
$ cargo install wasm-pack
$ wasm-pack --version
wasm-pack 0.10.2
```

## Finally, you can build Rust as Wasm and generate some boilerplate codes.
```bash
$ npm run build:wasm
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: ✨   Done in 1.58s
[INFO]: 📦   Your wasm pkg is ready to publish at /Users/tkat0/GitHub/react-wasm-tutorial/wasm-lib/pkg.

```

```bash
$ tree wasm-lib/pkg
├── package.json
├── wasm_lib.d.ts
├── wasm_lib.js
├── wasm_lib_bg.wasm
└── wasm_lib_bg.wasm.d.ts
```

## So you can install the Wasm library to other project easily. Let's install it to the React app.
```bash
$ npm install ./wasm-lib/pkg
```

## Call the Wasm function from the React app.
- You can call the Wasm library like this.
```jsx
import and call
import React, { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {ans}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```
