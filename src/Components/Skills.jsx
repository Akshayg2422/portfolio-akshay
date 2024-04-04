import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={'container'} id='skills'>
            <h2>Skills</h2>
            <span className='line'></span>

            <div className={'row'}>
                <div className={'col-md-6'}>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>Javascript</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.javascript}`}>
                                <span className={styles.tooltip}>70%</span>
                            </span>
                        </div>

                        <div className={styles.skillBox}>
                            <span className={styles.title}>Html</span>
                            <div className={styles.skillBar}>
                                <span className={`${styles.skillPer} ${styles.html}`}>
                                    <span className={styles.tooltip}>60%</span>
                                </span>
                            </div>
                        </div>

                        <div className={styles.skillBox}>
                            <span className={styles.title}>Css</span>
                            <div className={styles.skillBar}>
                                <span className={`${styles.skillPer} ${styles.css}`}>
                                    <span className={styles.tooltip}>60%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>Scss</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.scss}`}>
                                <span className={styles.tooltip}>60%</span>
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>Bootstrap</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.bootstrap}`}>
                                <span className={styles.tooltip}>60%</span>
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>Typescript</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.typescript}`}>
                                <span className={styles.tooltip}>50%</span>
                            </span>
                        </div>
                    </div>

                </div>

                <div className={'col-md-6'}>
                    <div className={styles.skillBox}>
                        <span className={styles.title}>React</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.react}`}>
                                <span className={styles.tooltip}>70%</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.skillBox}>
                        <span className={styles.title}>Redux</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.redux}`}>
                                <span className={styles.tooltip}>70%</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.skillBox}>
                        <span className={styles.title}>Redux-Saga</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.reduxSaga}`}>
                                <span className={styles.tooltip}>70%</span>
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>React-Router</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.reactRouter}`}>
                                <span className={styles.tooltip}>50%</span>
                            </span>
                        </div>
                    </div>

                    <div className={styles.skillBox}>
                        <span className={styles.title}>GitHub</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.github}`}>
                                <span className={styles.tooltip}>80%</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.skillBox}>
                        <span className={styles.title}>Bitbucket</span>
                        <div className={styles.skillBar}>
                            <span className={`${styles.skillPer} ${styles.bitBucket}`}>
                                <span className={styles.tooltip}>90%</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
