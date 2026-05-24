import MoreAbout from './MoreAbout';
import SocialButtons from './SocialButtons';

function BottomHalf() {
  return (
    <motiondiv className="bottom-half">
      <div className="container">
        <MoreAbout />
        <SocialButtons />
      </div>
    </motiondiv>
  );
}

export default BottomHalf;
