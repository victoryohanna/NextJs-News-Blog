import {useRouter} from 'next/router'
import styles from '../styles/NavBar.module.css'

export const NavBar = ()=>{
    const router = useRouter()

    return(
        <div className={styles.main}>
            <div onClick={()=>router.push('/')}>Home</div>
            <div onClick={()=>router.push('/feed/1')}>Feed</div>
            <div onClick={()=>router.push('/eom')}>EOM</div>
            <div onClick={()=>window.location.href='https://twitter.com/VictorYohanna'}>Twitter</div>
        </div>
    )
}

// export default NavBar;