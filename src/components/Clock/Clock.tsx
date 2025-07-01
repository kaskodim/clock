import styles from "./styles.module.css";
import {useEffect, useState} from 'react';


export const Clock = () => {

    const [date, setDate] = useState(new Date());
    const clockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let rotationDegree = 0;
    let reverseDegree = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])


    const alwaysDoubleNumber = (num: number) => num < 10 ? `0${num}` : num

    const secondsDegree = date.getSeconds() * 6
    const minutesDegree = date.getMinutes() * 6
    const hoursDegree = (date.getHours() + date.getMinutes() / 60) * 30;


    return (
        <div className={styles.location}>

            {clockNumbers.map((hors, index) => {

                rotationDegree = rotationDegree + 30;
                reverseDegree = reverseDegree - 30;
                return (
                    <div key={index}
                         className={styles.clockNumberWrapper}
                         style={{transform: `translate(-50%, -100%) rotate(${rotationDegree}deg)`}}>

                        <div key={index}
                             className={styles.clockNumber}
                             style={{rotate: `${reverseDegree}deg`}}>
                            {hors}
                        </div>

                    </div>
                )
            })}


            <div className={styles.clockWrapper}>
                <div className={styles.clock}>
                    <div className={styles.arrowHour}
                         style={{transform: `translate(-50%, -100%) rotate(${hoursDegree}deg)`}}>
                    </div>

                    <div className={styles.arrowMinutes}
                         style={{transform: `translate(-50%, -100%) rotate(${minutesDegree}deg)`}}>
                    </div>

                    <div className={styles.arrowSeconds}
                         style={{transform: `translate(-50%, -100%) rotate(${secondsDegree}deg)`}}>
                    </div>
                </div>


                <div className={styles.digitalClock}>
                    <span>{alwaysDoubleNumber(date.getHours())}</span>
                    :
                    <span>{alwaysDoubleNumber(date.getMinutes())}</span>
                    :
                    <span>{alwaysDoubleNumber(date.getSeconds())}</span>
                </div>
            </div>


        </div>
    )
};


