import '../(styles)/SplitPane.css';
import Image from 'next/image';

const SplitPane = () => {

  return (
    <div className="splitpane">

      <div className="split__image">
        <Image 
            src="/imgs/me.jpg" alt="Me" className="split__image-profile"
            width={200}
            height={200}
        /> 
      </div>

      <div className="split__bio">
        <h2 className="split__bio-header">Software (Developer);</h2>
        <p className="split__bio-text">
        </p>
        <div className='split__bio-buttons'>
            <a>View some projects</a>
            <a id="theSpitballButton"><button>The Spitball</button></a>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;

