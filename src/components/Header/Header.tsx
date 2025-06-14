"use client"
import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/icons/logoWhite.svg';
import Button from "@/components/General/Button/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <Image
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                    width={64}
                    height={64}
                    priority
                />
            </div>
            <div className={styles.headingBox}>
                <h1 className={styles.textbox}>
                    <span className={styles.headingPrimary}>OatMilk</span>
                    <span className={styles.headingPrimarySub}>This is our new product</span>
                </h1>
                <Button color="light" onClick={() => console.log('clicked')} className={styles.btnAnimation}>discover our plans</Button>
            </div>
        </header>
    );
};

export default Header;
