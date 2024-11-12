import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import f45 from "../assets/f45.png";
import aerie from "../assets/aerie.png";
import lulu from "../assets/lulu.png";



const Companies = () => {




    return (
        <div className="ticker">
            <h1 className="companyHeader">We have worked with some awesome companies</h1>
        <HorizontalTicker duration={30000}>
        <img className="companyImage" src={f45} />
        <img className="companyImage" src={aerie} />
        {/* <img className="companyImage" src={lulu} /> */}
        <img className="companyImage" src={f45} />
      </HorizontalTicker>
        </div>


    )
}

export default Companies;