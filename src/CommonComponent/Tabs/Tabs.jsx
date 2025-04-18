import { TabPanel } from "react-headless-tabs";

export function Tabs({ tabs, selected, onChange, height }) {
    // const { height } = useWindowDimensions()

    const changeTab = (item) => {
        if (onChange) {
            onChange(item);
        }
    };

    const getSelectedTabIndex = () =>
        tabs.findIndex((item) => item.id === selected?.id);

    return (
        <div>
            <nav>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row", // Display tabs in a row for all screens
                        flexWrap: "wrap", // Wrap tabs to the next line if the screen is too narrow
                    }}
                >
                    {tabs.map((item) => {
                        return (
                            <a
                                key={item.id}
                                className="text-sm"
                                style={{
                                    flexGrow: 1,
                                    display: "block",
                                    padding: "1rem",
                                    textDecoration: "none",
                                    color: selected?.id === item.id ? "#ffffff" : "#cac9cd",
                                    // background:
                                    //     selected?.id === item.id ? "#ffffff" : "#ffffff",
                                    position: "relative",
                                    flex: "0 0 0 50%", // Make tabs take 50% of the width for small screens
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                                onClick={() => {
                                    changeTab(item);
                                }}
                                data-tab={item}
                            >
                                {item.title}

                                {/* Display the colored bar at the bottom */}
                                {selected?.id === item.id && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: "50%",        // Horizontally center the div
                                            transform: "translateX(-50%)",  // Adjust for centering
                                            height: "4px",
                                            width: "70%",
                                            background: "#f70000",
                                        }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>
            </nav>
            <div>
                {tabs.map((item) => {
                    return (
                        <TabPanel
                            style={{ borderRadius: '12px' }}
                            className={'mt-5 mb-5 border border-white'}
                            key={item.id}
                            hidden={selected?.id !== item.id}
                        >
                            {item.component}
                        </TabPanel>
                    );
                })}
            </div>
        </div>
    );
}
