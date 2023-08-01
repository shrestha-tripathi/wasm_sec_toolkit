use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, _b: i32) -> i32 {
    a + 10
}

#[test]
fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
}