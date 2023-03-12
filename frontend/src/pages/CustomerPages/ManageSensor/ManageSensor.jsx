import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DisplayItem from "./DisplayItem";
import FilterItem from "./FilterItem";
import classnames from 'classnames/bind'
import styles from './ManageSensor.module.scss'

const cx = classnames.bind(styles);
const data = [
    {
        id: "1",
        type: "DHT20",
        garden: "Khu A",
        row: "1",
        time: "2023-03-11",
        status: "Bình thường",
    },
    {
        id: "2",
        type: "Độ ẩm đất",
        garden: "Khu A",
        row: "2",
        time: "2023-03-12",
        status: "Đang hỏng",        
    },
    {
        id: "3",
        type: "Độ ẩm đất",
        garden: "Khu B",
        row: "3",
        time: "2023-03-11",
        status: "Bình thường"
    },
    {
        id: "4",
        type: "Ánh sáng",
        garden: "Khu C",
        row: "3",
        time: "2023-03-10",
        status: "Bình thường"
    }
]
const ManageSensor = () => {
    const [items,setItem] = useState(data);

    const filterItem = (filters) => {
        const newItem = data.filter((item) => {
            for(let key in filters){
                if(item[key] === undefined || item[key] !== filters[key])
                return false;
            }
            return true;
        })       
        setItem(newItem);  
      };
    return (
        <Container>
            <Row>
                <Col xs='2'>
                    <div className={cx('nav')}>

                    </div>
                </Col>
                <Col>
                    <FilterItem 
                        filterItem={filterItem}
                        data = {data}
                    />
                    <DisplayItem items={items} />
                </Col>                
            </Row>
        </Container>
    );
};

export default ManageSensor;