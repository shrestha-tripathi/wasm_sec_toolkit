use urlencoding;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encode_url(input: &str) -> String {
    urlencoding::encode(input)
}

#[wasm_bindgen]
pub fn decode_url(input: &str) -> String {
    urlencoding::decode(input).unwrap_or_else(|_| input.to_string())
}
