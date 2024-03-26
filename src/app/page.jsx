import './(styles)/Home.css'
import SplitPane from './(components)/SplitPane';
import Image from 'next/image';
import { Skillset } from './(components)/Skillset';

//Home page
export default function Page() {

    return(
        <div>
            <SplitPane/>
            <Skillset />        
        </div>
    );
}
