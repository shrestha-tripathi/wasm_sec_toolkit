import React, { useEffect, useState } from 'react';
import init, { encode_img, decode_img } from 'stegnography';
import Camera from "../../assets/tools/Camera.png";
import "./Sidebar.css";
const ImageStegnography = () => {
    const [carrierImage, setCarrierImage] = useState(null);
    const [inputImage, setInputImage] = useState(null);
    const [encodedImage, setEncodedImage] = useState(null);
    const [decodedImage, setDecodedImage] = useState(null);

    useEffect(() => {
        init(); // Initialize the WebAssembly module
    }, []);

    const handleCarrierInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCarrierImage(reader.result);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleInputInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setInputImage(reader.result);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleEncode = () => {
        if (carrierImage && inputImage) {
            console.log(new Uint8Array(carrierImage));
            const encoded = encode_img(new Uint8Array(carrierImage), new Uint8Array(inputImage));
            setEncodedImage(encoded);
        }
    };

    const handleDecode = () => {
        if (encodedImage || carrierImage) {
            const decoded = decode_img(new Uint8Array(encodedImage || carrierImage));
            setDecodedImage(decoded);
        }
    };

    const getImageUri = (buf) => {
        let binary = '';
        const bytes = new Uint8Array(buf);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return 'data:image/png;base64, ' + btoa(binary);
    }

    return (
        <div className="text-white w-full h-full">
            <div className="flex flex-row gap-5 justify-center">
            <img src={Camera} className="h-[60px] w-[60px]" alt="Camera"/>
            <h2 className="text-white text-center text-[46px]" >Image Stegnography</h2>
            </div>
            <p className="text-white text-center text-[20px] mt-5 py-5">
                Use this tool to hide/disguise a image in a Carrier image, later you can get the hidden image using the same tool by providing 
                the resultant image generated previously!
                Only PNG format is supported for now..<br/>
                For best results make sure images are of same height and width<br/>
                <span className="italic text-slate-400">Usage: Upload both carrierImage and inputImage if you want to hide the image inside another and click on "Embed Image" button. 
                Upload just the carrierImage if you want to extract the hidden image from already encoded image by clicking on "Extract Image" 
                button.<br/>
                Once Encoded Image is generated save it by right clicking and doing "Save image as"
                </span>

            </p>
            <div>
                <div>
                    <div className="flex flex-center gap-5 mt-5">
                        <h2 className="py-1">Carrier Image</h2>
                        <input type="file" className="block text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" accept="image/*" onChange={handleCarrierInputChange} />
                        {carrierImage && <img src={getImageUri(carrierImage)} alt="Carrier" className="h-[400px]" />}
                    </div>

                    <div className="flex flex-center gap-5 mt-5">
                        <h2 className="py-1">Input Image</h2>
                        <input type="file" className="block text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" accept="image/*" onChange={handleInputInputChange} />
                        {inputImage && <img src={getImageUri(inputImage)} alt="Input" className="h-[400px]" />}
                    </div>

                    <div className="flex items-center gap-5 mt-5 py-5">
                        <button className={`${carrierImage && inputImage ? "bg-green-800" : "bg-gray-500 cursor-none"} px-5 py-2 rounded-full`} onClick={handleEncode} disabled={!carrierImage || !inputImage}>
                            Embed Image
                        </button>
                        <button className={`${carrierImage ? "bg-green-800" : "bg-gray-500 cursor-none"} px-5 py-2 rounded-full`} onClick={handleDecode} disabled={!carrierImage}>
                            Extract Image
                        </button>
                    </div>

                    <div className="flex flex-row gap-10 mt-5">
                        {encodedImage && (
                            <div>
                                <h2 className="text-[26px] text-center" >Encoded Image</h2>
                                <img src={getImageUri(encodedImage)} alt="Encoded" className="h-[400px]" />
                            </div>
                        )}

                        {decodedImage && (
                            <div>
                                <h2 className="text-[26px] text-center">Decoded Image</h2>
                                <img src={getImageUri(decodedImage)} alt="Decoded" className="h-[400px]" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageStegnography;