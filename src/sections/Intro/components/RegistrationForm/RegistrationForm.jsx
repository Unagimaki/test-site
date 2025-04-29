import { useState } from 'react';
import styles from './registrationForm.module.scss'
import {Button} from '../../../../components/Button/Button'

export const RegistrationForm = () => {
    const flag_icon = require('./assets/flag.png')
    const roles = [
        { label: '+44', icon: flag_icon},
        { label: 'Great Britain', icon: flag_icon},
        { label: 'Country #2', icon: flag_icon},
        { label: 'Country #3', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
        { label: 'Country #4', icon: flag_icon},
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(roles[0].label);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (role) => {
        setSelected(role.label);
        setIsOpen(false);
    };


    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_forms}>
                    {['First name', 'Last name', 'Email'].map((label, index) => (
                    <div key={index} className={styles.form_group}>
                        <label className={styles.form_group_label}>{label}</label>
                        <input
                            className={styles.form_group_input}
                            type="text"
                            placeholder={`Enter ${label.toLowerCase()}`}
                        />
                    </div>
                    ))}
                    <div className={styles.phone_form_wrapper}>
                        <label className={styles.phone_form_wrapper_label}>Phone</label>
                        <div style={{backgroundColor: isOpen ? '#F2F2F2' : '#fff'}} onClick={toggleDropdown} className={styles.phone_form_wrapper_selected}>
                            <img src={flag_icon} alt="flag_icon" />
                            <div className={styles.phone_form_wrapper_selected_text}>{selected}</div>
                        </div>
                        {
                            isOpen &&
                            <div className={styles.phone_form_wrapper_list}>
                                {roles.map((role, idx) => (
                                    <div onClick={() => handleSelect(role)} className={styles.phone_form_wrapper_list_item} key={idx} value={role.label}>
                                        <img src={role.icon} alt="icon" />
                                        <div className={styles.phone_form_wrapper_list_item_text}>{role.label}</div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <Button text={'Register Now'}/>
            </div>
        </div>
    )
}