import React from "react";
import "../(styles)/YoutubeEmbed.css";

export function YoutubeEmbed({ embedID }) {

    return(
        <div className="youtubeEmbed">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedID}`}
            frameBorder="5"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
        />
        </div>
    );
}
  