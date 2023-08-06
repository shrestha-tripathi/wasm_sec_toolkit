import React, { useEffect, useState } from 'react';
import init, { encode_url, decode_url } from 'urlutil';
import Instagram from "../../assets/tools/Instagram.png";
import "../../Sidebar.css"
function UrlUtil() {

  useEffect(() => {
    init();
  }, []);
  const [encodedString, setEncodedString] = useState('');
  const [decodedString, setDecodedString] = useState('');

  const handleEncode = () => {
    const encodedString = encode_url(decodedString);
    setEncodedString(encodedString);
  };

  const handleDecode = () => {
    const decodedString = decode_url(encodedString);
    setDecodedString(decodedString);
  };

  const handleReset = () => {
    setEncodedString("");
    setDecodedString("");
}

  return (
    <div>
    <div className="flex flex-row gap-5 justify-center">
        <img src={Instagram} className="h-[60px] w-[60px]" alt="Camera" />
        <h2 className="text-white text-center text-[46px]" >URL Encode/Decode</h2>
    </div>
    <div className="text-white text-[20px] mt-5 flex gap-5">
    </div>
    <div className="text-white text-[20px] mt-5 flex gap-5">
        <label>Encoded URL:</label>
        <textarea
            className="h-full w-full bg-gray-900 p-3"
            id="input"
            placeholder="Input URL string to be decoded..."
            rows="7"
            cols="50"
            value={encodedString}
            onChange={(e) => setEncodedString(e.target.value)}
        />
    </div>
    <div className="text-white text-[20px] mt-5 flex gap-5">
        <label>Decoded URL:</label>
        <textarea
            className="h-full w-full bg-gray-900 p-3"
            id="input"
            placeholder="Input URL string to be encoded..."
            rows="7"
            cols="50"
            value={decodedString}
            onChange={(e) => setDecodedString(e.target.value)}
        />

    </div>
    <div className="flex flex-row mt-5 text-white gap-5 justify-center">
        <button
            disabled={!decodedString} 
            className={`${decodedString ? "bg-green-800" : "bg-gray-500"} px-10 py-1 rounded-full`} onClick={handleEncode}>Encode</button>
        <button
            disabled={!encodedString}
            className={`${encodedString ? "bg-green-800" : "bg-gray-500"} px-10 py-1 rounded-full`}
            onClick={handleDecode}>Decode</button>
        <button
            disabled={!(encodedString || decodedString)}
            className={`${(encodedString || decodedString) ? "bg-cyan-800" : "bg-gray-500" } px-10 py-1 rounded-full`}
            onClick={handleReset}>Reset</button>
    </div>
</div>
  );
}

export default UrlUtil;
