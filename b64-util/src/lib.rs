use wasm_bindgen::prelude::*;
use base64;

#[wasm_bindgen]
pub fn encode(input: &[u8]) -> String {
    base64::encode_config(input, base64::STANDARD)
}

#[wasm_bindgen]
pub fn decode(input: &str) -> Vec<u8> {
    base64::decode(input).unwrap_or_default()
}
