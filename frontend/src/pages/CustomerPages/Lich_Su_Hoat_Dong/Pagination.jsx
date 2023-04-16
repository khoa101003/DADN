import React, { Component } from 'react'
import axios from 'axios'
import { getRecordList } from '../../../api/recordApi'
import ReactPaginate from 'react-paginate'
import { Button, Form, Table, Container, Dropdown, DropdownButton, Col, Row } from 'react-bootstrap'
import classnames from 'classnames/bind'
import styles from './SensorHistory.module.scss'
const cx = classnames.bind(styles);
import './Pagination.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    loadData = async () => {
        try {
            let data = await getRecordList(3)
            data = data[0].valueList
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            console.log("slice")
            console.log(slice)
            const postData = slice.map((pd, index) => <React.Fragment key={index}>
                <tr>
                    <td>{index + 1}</td>
                    <td>{pd.log_time}</td>
                    <td>{pd.value}</td>
                </tr>
            </React.Fragment>)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                postData
            })
        } catch (err) {
            console.log(err)
        }
    }
    // receivedData() {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/photos`)
    //         .then(res => {

    //             const data = res.data;
    //             const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    //             const postData = slice.map(pd => <React.Fragment>
    //                 <p>{pd.title}</p>
    //                 <img src={pd.thumbnailUrl} alt="" />
    //             </React.Fragment>)

    //             this.setState({
    //                 pageCount: Math.ceil(data.length / this.state.perPage),

    //                 postData
    //             })
    //         });
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadData()
        });

    };

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div className='text-center'>
                <Table striped bordered hover className={cx('tbl')}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thời gian</th>
                            <th>Giá trị (độ C)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.postData}
                    </tbody>
                </Table>

                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination d-flex justify-content-center my-5"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />

            </div>

        )
    }
}




