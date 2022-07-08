import Navi from "../../components/Navi";
import styles from '../../styles/Events.module.scss'

const events = () => {
    return(<div className={styles.container}>
        <Navi/>
        <h1>Events</h1>
    </div>);
}

export default events;