import {Table } from "react-bootstrap";
import DeleteSchedule from "./DeleteSchedule";
import EditSchedule from "./EditSchedule";
import { useState } from "react";

const RowSchedule = (props) => {
    const listSchedule = props.schedule;
    // const dates = schedules.dates
    // console.log(listSchedule)
    // const [listSchedule,setListSchedule] = useState(props.schedule);
    // setListSchedule(props.schedule)
    const row = listSchedule.map((date) => (
        <tr>
            <th>{date.time}</th>
            <th>{date.water}</th>
            <th>{date.type == "weekly"?date.dates:date.dates.substring(0,10)}</th>
            <th><EditSchedule schedule = {date}></EditSchedule></th>
            <th><DeleteSchedule id={date._id}/></th>
        </tr>
    ))
    return (
        <Table size="sm">
            <thead>
                <tr>
                    <th>Thời gian</th>
                    <th>Lượng nước</th>
                    <th>Ngày</th>
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