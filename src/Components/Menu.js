import { Dock } from 'primereact/dock';
import { Sidebar } from 'primereact/sidebar';
import { Tooltip } from 'primereact/tooltip';
import Camera from "../assets/tools/Camera.png";
import Calendar from "../assets/tools/Calendar.png";
import Photos from "../assets/tools/Photos.png";
import Uber from "../assets/tools/Uber.png";
import { useState } from 'react';
import ImageStegnography from './ImageStegnography';

export default function DockMenu() {
    const [visibleItem, setVisibleItem] = useState("");
    const items = [
        {
            label: 'Image Stegnography',
            icon: () => <img alt="ImageStegnography" src={Camera} width="100%" />,
            command: () => {
                setVisibleItem("Image Stegnography");
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={Calendar} width="100%" />,
            command: () => {
                setVisibleItem("App Store");
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={Photos} width="100%" />,
            command: () => {
                setVisibleItem("Photos");
            }
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={Uber} width="100%" />,
            command: () => {
                setVisibleItem("Trash");
            }
        }
    ];
    return (
        <div className="docker-menu-wrapper">
             <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <div className="dock-window dock-advanced">
                <Sidebar visible={visibleItem === "Image Stegnography"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <ImageStegnography />
                </Sidebar>

                <Sidebar visible={visibleItem === "App Store"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <ImageStegnography />
                </Sidebar>

                <Sidebar visible={visibleItem === "Photos"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <ImageStegnography />
                </Sidebar>

                <Sidebar visible={visibleItem === "Trash"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <ImageStegnography />
                </Sidebar>
                <Dock model={items} position={"bottom"} />
            </div>
        </div>
    )
}
