import '../(styles)/SplitPane.css';
import '../(styles)/globals.css'
import Image from 'next/image';
import Link from 'next/link';

function SplitPane() {

  return (
    <div className="splitpane">

      <div className="split__image">
        <img
          src="/imgs/shedrick_williams.jpg" width={400} height={400} alt="Shedrick Williams" className="split__image-profile" 
        /> 
      </div>

      <div className="split__bio">
        <h2 className="split__bio-header" style={{color: '#c678dd'}}>Software (<span style={{color: '#e06c75'}}>developer</span>);</h2>
        <hr />
        <p className="split__bio-text bodytext">

        I believe in maintaining authenticity, challenging previous assumptions, prioritizing quality, and avoiding purposelessness.

My commitment under these values is to make trailblazing contributions to the field of computer science, and use it to impact other fields well. Also, using the voice that multi-media has given me, I aim to express and exchange thoughts, as well as inspire others to do the same.

Having already made a significant impact, raising over $100,000 for families battling pediatric cancer with Kids Helping Kids, I plan on continuing to make an even bigger impact with my content and software.

        </p>
        <div className="split__bio-text">
          <Link href="https://github.com/SedWilliams" target="_blank" className='bodytext' style={{'textDecoration': 'underline', 'fontWeight': 'bold'}}>View my work</Link>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;

