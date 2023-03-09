import classnames from 'classnames/bind'
import styles from './GardenList.module.scss'
import { Button, Container } from 'react-bootstrap'

const cx = classnames.bind(styles);

function GardenList(){
    return(
        <Container>
            <h1 className={cx('garden')}>This is Garden List page</h1>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Primary</Button>
        </Container>
    )
}

export default GardenList;