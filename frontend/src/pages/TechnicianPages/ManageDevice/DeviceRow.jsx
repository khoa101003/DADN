import { useRef } from 'react';
import ViewDeviceModal from "./ViewDeviceModal";
import UpdateDeviceModal from "./UpdateDeviceModal";
import DisableDeviceModal from "./DisableDeviceModal";
import DeviceType from "../DeviceType/DeviceType";

function DeviceRow(props) {
    const trRef = useRef(null);
    // props = props.filter(props => props.device.type === window.TYPE);
    return (
        // <tr ref={trRef} className={props.device.status == "bình thường" ? "text-muted" : undefined}>
        <tr ref={trRef} style={{ display: props.device.type !== window.TYPE ? "none" : undefined }}>
            <td>{props.device.id}</td>
            <td>{props.device.name}</td>
            <td>{props.device.timeStart}</td>
            <td>{props.device.timeExpire}</td>
            <td>{props.device.status}</td>
            <td className="text-center">
                <ViewDeviceModal par={trRef} device={props.device} />
                <UpdateDeviceModal device={props.device} />
                <DisableDeviceModal device={props.device} />
            </td>
        </ tr>
    );
}

export default DeviceRow;