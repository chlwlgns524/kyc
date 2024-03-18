import styles from "./StateTransitionDiagram.module.css";
import PropTypes from "prop-types";

export default function StateTransitionDiagram({current}) {
    const states = [
        {
            label: "서비스 신청",
            image: "a.png"
        },
        {
            label: "사업자정보 입력",
            image: "b.png"
        },
        {
            label: "심사",
            image: "c.png"
        },
        {
            label: "계약",
            image: "d.png"
        },
        {
            label: "심사완료",
            image: "e.png"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.lines}>
                {
                    states
                        .slice(0, states.length - 1)
                        .map((state, index) =>
                            <div key={state.label}
                                 className={`
                                 ${styles.line}
                                 ${((index + 1) < current ? styles.done : '')}
                                 `}></div>
                        )
                }
            </div>
            <div className={styles.circles}>
                {
                    states
                        .map((state, index) =>
                            <div key={state.label} className={styles.circleWrapper}>
                                <div
                                    className={`
                                    ${styles.circle} 
                                    ${(index + 1) < parseInt(current) ? styles.done : ((index + 1) === parseInt(current) ? styles.ing : "")}
                                    `}>
                                    <span className={styles.image}>{state.image}</span>
                                </div>
                                <span className={styles.label}>{state.label}</span>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

StateTransitionDiagram.propTypes = {
    current: PropTypes.string.isRequired,
}