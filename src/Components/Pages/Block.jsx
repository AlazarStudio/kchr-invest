import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import H2 from "../Standart/H2/H2";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";

function Block({ children, ...props }) {
  return (
    <>
      <CenterBlock>
          <p style={{height:'100vh', display:'flex', alignItems:'center', fontSize:'32px', fontWeight:'600'}}>
          Сайт заблокирован, обратитесь к администратору сайта.
          </p>
      </CenterBlock>
    </>
  );
}

export default Block;
