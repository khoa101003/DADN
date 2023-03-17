import { Button, Table } from "react-bootstrap";
import DeleteSchedule from "./DeleteSchedule";
import EditSchedule from "./EditSchedule";

const RowSchedule = (props) => {
    const schedules = props.schedule;
    const row = schedules.map((schedule) => (
        <tr key={schedule.id}>
            <th>{schedule.time}</th>
            <th>{schedule.amount}</th>
            <th><EditSchedule schedule = {schedule}></EditSchedule></th>
            <th><DeleteSchedule /></th>
        </tr>
    ))
    return (
        <Table size="sm">
            <thead>
                <tr>
                    <th>Thời gian</th>
                    <th>Lượng nước</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </Table>
    );
};

export default RowSchedule;