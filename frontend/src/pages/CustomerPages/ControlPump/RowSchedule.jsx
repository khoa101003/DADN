import {Table } from "react-bootstrap";
import DeleteSchedule from "./DeleteSchedule";
import EditSchedule from "./EditSchedule";
import { useEffect, useState } from "react";
// import { useState } from "react";

const RowSchedule = (props) => {
    const [listSchedule,setListSchedule] = useState(props.schedule);
    useEffect(() => {
        setListSchedule(props.schedule)
    },[props.schedule])
    // const listSchedule = props.schedule;
    // const dates = schedules.dates
    // console.log(listSchedule)
    // const [listSchedule,setListSchedule] = useState(props.schedule);
    // setListSchedule(props.schedule)
    const handleEdit = (id,schedule) => {
        // console.log(id)
        const newSche = listSchedule.map((date) => (date._id === id)?schedule:date)
        setListSchedule(newSche)
    }
    const handleDelete = (id) => {
        const newSche = listSchedule.filter((date) => (date._id !== id))
        setListSchedule(newSche)
        console.log(newSche)
    }
    const row = listSchedule.map((date,index) => (
        <tr key={index}>
            <th>{date.time}</th>
            <th>{date.water}</th>
            <th>{date.type === "weekly"?date.dates:date.dates.substring(0,10)}</th>
            <th><EditSchedule schedule = {date} onEdit = {handleEdit}></EditSchedule></th>
            <th><DeleteSchedule id={date._id} onDelete = {handleDelete}/></th>
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