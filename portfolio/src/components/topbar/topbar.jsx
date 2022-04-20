import './topbar.scss';
import { PhoneCallback, Mail } from "@mui/icons-material"

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">INTRO.</a>
                    <div className="itemContainer">
                        <PhoneCallback className="icon" />
                        <span>303 549-3545</span>
                        <Mail className="icon" />
                        <span>ericbarriga007@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    )
}