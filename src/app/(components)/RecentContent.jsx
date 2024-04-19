import React from "react";
import "../(styles)/RecentContent.css"
import { YoutubeEmbed} from "./YoutubeEmbed";

export function RecentContent() {

    return(
        <div className="recentContent">
            <h1 className="heading-big">Recents</h1>
            <YoutubeEmbed embedID={"8gUvYjfCvP8?si=LfcnWCyQH1ZS7MJo"}/>
            <YoutubeEmbed embedID={"ARh0mKINeUw?si=dW_qrypFGrEAQvmM"} />
        </div>
    );
}