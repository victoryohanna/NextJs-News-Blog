import styles from '../styles/EOM.module.css'
import {NavBar} from '../components/navBar'
const EOM = ({employee})=>{
    // console.log(employee)
    return(
        <div className='page-container'>
            <NavBar />
            <div className={styles.main}>
                <h1>Employee of the Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h3>{employee.position}</h3>
                    <img src={employee.image} />
                    <p>{employee.description} </p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>{

    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
    )

    const employee = await apiResponse.json();
    return {
        props : {
            employee
        }
    }

}

export default EOM;