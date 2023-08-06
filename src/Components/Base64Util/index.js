import React, { useEffect, useState } from "react";
import init, { encode, decode } from "b64-util";
import Messages from "../../assets/tools/Messages.png";
import "../../Sidebar.css";

const Base64Util = () => {
    const [encodedString, setEncodedString] = useState("");
    const [decodedString, setDecodedString] = useState("");

    useEffect(() => {
        init();
    }, []);

    const handleEncode = () => {
        const inputBytes = new TextEncoder().encode(decodedString);
        const encoded = encode(inputBytes);
        setEncodedString(encoded);
        setDecodedString("");
    };

    const handleDecode = () => {
        const decodedBytes = decode(encodedString);
        const decoded = new TextDecoder().decode(decodedBytes);
        setDecodedString(decoded);
        setEncodedString("");
    };

    const handleReset = () => {
        setEncodedString("");
        setDecodedString("");
    }

    return (
        <div>
            <div className="flex flex-row gap-5 justify-center">
                <img src={Messages} className="h-[60px] w-[60px]" alt="Camera" />
                <h2 className="text-white text-center text-[46px]" >Base64 Encode/Decode</h2>
            </div>
            <div className="text-white text-[20px] mt-5 flex gap-5">
            </div>
            <div className="text-white text-[20px] mt-5 flex gap-5">
                <label>Encoded String:</label>
                <textarea
                    className="h-full w-full bg-gray-900 p-3"
                    id="input"
                    placeholder="Input string to be decoded..."
                    rows="7"
                    cols="50"
                    value={encodedString}
                    onChange={(e) => setEncodedString(e.target.value)}
                />
            </div>
            <div className="text-white text-[20px] mt-5 flex gap-5">
                <label>Decoded String:</label>
                <textarea
                    className="h-full w-full bg-gray-900 p-3"
                    id="input"
                    placeholder="Input string to be encoded..."
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
};

export default Base64Util;
