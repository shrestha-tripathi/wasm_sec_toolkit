import { Dock } from 'primereact/dock';
import { Sidebar } from 'primereact/sidebar';
import { Tooltip } from 'primereact/tooltip';
import Camera from "../assets/tools/Camera.png";
import Messages from "../assets/tools/Messages.png";
import MortyChip from "../assets/tools/Morty-Manipulator-Chip.png";
import Instagram from "../assets/tools/Instagram.png";
import { useState } from 'react';
import ImageStegnography from './Stegnography';
import Base64Util from './Base64Util';
import Md5Sum from './Md5Sum';
import UrlUtil from "./UrlUtil";

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
            label: 'Base64 Utility',
            icon: () => <img alt="Base64 Utility" src={Messages} width="100%" />,
            command: () => {
                setVisibleItem("Base64 Utility");
            }
        },
        {
            label: 'Md5Sum Calculator',
            icon: () => <img alt="Md5Sum Calculator" src={MortyChip} width="100%" />,
            command: () => {
                setVisibleItem("Md5Sum Calculator");
            }
        },
        {
            label: 'Url Encode/Decode',
            icon: () => <img alt="Url Encode/Decode" src={Instagram} width="100%" />,
            command: () => {
                setVisibleItem("Url Encode/Decode");
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

                <Sidebar visible={visibleItem === "Base64 Utility"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <Base64Util />
                </Sidebar>

                <Sidebar visible={visibleItem === "Md5Sum Calculator"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <Md5Sum />
                </Sidebar>

                <Sidebar visible={visibleItem === "Url Encode/Decode"} fullScreen position="left" onHide={() => setVisibleItem("")}>
                    <UrlUtil />
                </Sidebar>
                <Dock model={items} position={"bottom"} />
            </div>
        </div>
    )
}
