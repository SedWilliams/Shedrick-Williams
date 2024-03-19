import '../(styles)/SplitPane.css';
import '../(styles)/globals.css'
import Image from 'next/image';
import Link from 'next/link';

function SplitPane() {

  return (
    <div className="splitpane">

      <div className="split__image">
        <img
            src="/imgs/shedrick.jpg" alt="Me" className="split__image-profile" 
        /> 
      </div>

      <div className="split__bio">
        <h2 className="split__bio-header" style={{color: '#c678dd'}}>Software (<span style={{color: '#e06c75'}}>developer</span>);</h2>
        <hr />
        <p className="split__bio-text bodytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="split__bio-text">
            <Link href="https://github.com/SedWilliams" className='bodytext' style={{'textDecoration': 'underline', 'fontWeight': 'bold'}}>View my work</Link>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;

