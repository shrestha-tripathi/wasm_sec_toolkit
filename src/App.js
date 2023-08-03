import Menu from "./Components/Menu";
import init, { add } from "wasm-lib";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';  
import wasm from "./assets/wasm.png";               
import './index.css';

function App() {
  // const [ans, setAns] = useState(0);
  // useEffect(() => {
  //   init().then(() => {
  //     setAns(add(1, 1));
  //   })
  // }, []);
  return (
    <div className="App flex justify-center gap-4">
      <img src={wasm} alt="WASM" className="h-[58px] w-[58px] mt-5" />
      <h1 className="text-white text-[46px] text-center mt-5">
        SecurRicky Mortykit
      </h1>
      <Menu />
    </div>
  );
}

export default App;
