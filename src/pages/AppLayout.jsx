import Appnav from "../components/Appnav";

import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css'
const AppLayout = () => {
    return (
        <div  className={styles.app}>
            <SideBar />
       </div>
      );
}
 
export default AppLayout;