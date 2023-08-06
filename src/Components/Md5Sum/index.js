import React, { useRef, useState } from "react";
import { md5 } from 'hash-wasm';
import morty from "../../assets/tools/Morty-Manipulator-Chip.png"
import "../../Sidebar.css"



const MD5FileHashComponent = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [hashValue, setHashValue] = useState("");

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileContent = event.target.result;
        const hash = await md5(new Uint8Array(fileContent));
        setHashValue(hash);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-5 justify-center">
        <img src={morty} className="h-[60px] w-[60px]" alt="Camera" />
        <h2 className="text-white text-center text-[46px]" >md5 Hash Calculator</h2>
      </div>
      <div className="mt-10">
        <input 
        className="block text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        type="file" ref={fileInputRef} onChange={handleFileChange} />
      </div>
      <div className="text-white text-[20px] mt-5">
        {fileName && <p>File: {fileName}</p>}
        {hashValue && <p>MD5 Hash: {hashValue}</p>}
      </div>
    </div>
  );
};

export default MD5FileHashComponent;