import React from "react";

export default function ResultItem(props) {
  return (
    <li className="media">
      <a href={props.song.trackViewUrl} target="_blank">
        <div className="media-left">
          <img src={props.song.artworkUrl60} />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.song.trackName}</h4>
          <em>{props.song.artistName}</em>
          <span className="badge pull-right">
            {props.song.currency} {props.song.trackPrice}
          </span>
        </div>
      </a>
    </li>
  );
}
