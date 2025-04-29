import styles from './advantages.module.scss'
import {SubTitle} from '../../components/SubTitle/SubTitle'
import {Title} from '../../components/Title/Title'
import { AdvantageItem } from './components/AdvantageItem/AdvantageItem'

export const Advantages = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <SubTitle text='Advantages'/>
                <Title text='Register today to gain immediate access to this revolutionary trading system!'/>
                <div className={styles.advantages_list}>
                    <AdvantageItem/>
                    {/* <AdvantageItem/>
                    <AdvantageItem/> */}
                </div>
            </div>
        </div>
    )
}