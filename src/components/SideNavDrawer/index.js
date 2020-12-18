import React from 'react';

import SideNav from '../SideNav';

//import '../../components/Pages/MainPage/styles.scss';

// 
// Wrappes the SideNav component on a scrollable drawer on mobile > tablet
//
const SideNavOnDrawer = (props) => {
    const { isMobile } = props;
    return (
        <div className="main__drawer">
            <div className="sidebar main__drawer-sidebar">
                <div className="scroll-area" style={{ position: "realtive", overflow: "hidden", width: "100%", height: "100%" }}>
                    <div style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                        marginRight: "0", // -17px
                        marginBottom: "-17px"
                    }}
                    >
                        <SideNav isMobile={isMobile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavOnDrawer;

// 
// Wrappes the SideNav component on a scrollable drawer on mobile > tablet
// Renders a componenent with React.forwardRef()
//
export const SideNavDrawer = React.forwardRef(
    function sideNavInDrawer(props, ref) {
        const { isMobile } = props;
        //return <SideNav isMobile={isMobile} forwardedRef={ref} />;
        return (
            <div className="main__drawer">
                <div className="sidebar main__drawer-sidebar">
                    <div className="scroll-area" style={{ position: "realtive", overflow: "hidden", width: "100%", height: "100%" }}>
                        <div style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            overflowY: "scroll",
                            overflowX: "hidden",
                            scrollBehavior: "smooth",
                            WebkitOverflowScrolling: "touch",
                            marginRight: "0", // -17px
                            marginBottom: "-17px"
                        }}
                        >
                            <SideNav isMobile={isMobile} {...ref} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
