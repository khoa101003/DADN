import classnames from 'classnames/bind'
import styles from './SensorHistory.module.scss'
import { Table, Container, Stack, Dropdown, DropdownButton } from 'react-bootstrap'

const cx = classnames.bind(styles);

function GardenList(){
    return(
        <Container>
            <a href="" className={cx("return")}>{'<-- Trở lại'}</a>
            <h1 className="text-center">Lịch sử hoạt động</h1>

            <Stack direction='horizontal' gap={4}>
                <div>
                    <Dropdown.Header>Chọn loại thiết bị</Dropdown.Header>
                    <DropdownButton id="equipment-type" title="Sensor nhiệt độ">
                        <Dropdown.Item href="#/action-1">Sensor độ ẩm đất</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sensor độ ẩm không khí</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sensor ánh sáng</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Sensor nhiệt độ</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    <Dropdown.Header>Chọn thiết bị</Dropdown.Header>
                    <DropdownButton id="equipment-list" title="Sensor 1">
                        <Dropdown.Item href="#/action-1">Sensor 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sensor 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sensor 3</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Sensor 4</Dropdown.Item>
                    </DropdownButton>
                </div>
            </Stack>

            <Table striped bordered hover className={cx('tbl')}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Thời gian</th>
                    <th>Giá trị (độ C)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3</td>
                    <td>2023/03/10 01:45:30PM</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2023/03/10 01:45:00PM</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2023/03/10 01:44:30PM</td>
                    <td>31</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default GardenList;