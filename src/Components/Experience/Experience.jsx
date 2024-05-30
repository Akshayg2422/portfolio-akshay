import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs } from '../../CommonComponent/Tabs/Tabs';
import Tab1 from '../Tab1/Tab1'
import Tab2 from '../Tab2/Tab2';
import Tab3 from '../Tab3/Tab3';
import Tab4 from '../Tab4/Tab4';

function Experience() {
    const TABS = [
        { id: "1", title: <div className="text-center pointer">React JS Developer</div>, component: <Tab1 /> },
        { id: "2", title: <div className="text-center pointer">Payment Assistance</div>, component: <Tab2 /> },
        { id: "3", title: <div className="text-center pointer">Data Provisioning Executive</div>, component: <Tab3 /> },
        { id: "4", title: <div className="text-center pointer">Process Associate</div>, component: <Tab4 /> },
    ];
    const [selectedTab, setSelectedTab] = useState(TABS[0]);

    return (
        <div id='experience'>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <div className="row align-items-center justify-content-center pb-2">
                                    <h2>Experience</h2>
                                    <span className='line'></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <div>
                                <Tabs tabs={TABS} selected={selectedTab} onChange={(item) => { setSelectedTab(item) }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export { Experience };
