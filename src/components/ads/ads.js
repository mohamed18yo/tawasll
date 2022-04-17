import { Img } from "../../Global.style";
import { AdsBox } from "./ads.style";



function Ads(props) {
  return <AdsBox top={props.top}>
      <Img width={"100%"} style={{height:"100%"}} src="ads.png"/>
  </AdsBox>;
}

export default Ads;
