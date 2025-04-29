import styles from './statistic.module.scss'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { Title } from '../../components/Title/Title'
import { StatItem } from './components/StatItem/StatItem'

export const Statistic = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <SubTitle text='Statistic'/>
                <Title text='Numbers speak for themselves'/>
                <div className={styles.container_inner_text}>
                    Transparency is our core principle. The platform's daily turnover and growing investment figures demonstrate the stability and reliability of our project in the energy sector. The secret stock trading strategy is built on our collected portfolio which is based on the analysis of thousands of large companies.
                </div>
                <div className={styles.container_inner_stat_list}>
                    <StatItem count={87} text={'Current Investments'} title={'million'}/>
                    <StatItem count={298} text={'Total Earnings'} title={'million'}/>
                    <StatItem count={1.3} text={'Platform Turnover'} title={'million'}/>
                </div>
                <div className={styles.container_inner_bottom_text}>
                    Our team of professional analysts provides accurate results with the lowest percentage of risk in mind. XX offers all partners a stable and highly profitable way of earning.
                </div>
            </div>
        </div>
    )
}