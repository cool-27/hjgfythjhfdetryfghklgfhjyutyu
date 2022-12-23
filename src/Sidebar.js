import React from "react";

import type { T_Highlight } from "react-pdf-highlighter/src/types";
type T_ManuscriptHighlight = T_Highlight;

type Props = {
  highlights: Array<T_ManuscriptHighlight>,
  resetHighlights: () => void,
  toggleDocument: () => void
};

const updateHash = (highlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

function Sidebar({ highlights, toggleDocument, resetHighlights }: Props) {
  return (
    <div className="sidebar" style={{ width: "25vw" }}>
    <div>
              
              <h1 style={{ fontSize: '40px' , marginLeft:"40px"  }}><b>Labels</b></h1>
              <br/>
              <hr
        style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '2px',
        }}
      />
      <br/>
 
<button type="button" class="btn btn-danger" style={{width:"200px" , marginRight:"200px" }}><b style={{ fontSize: '30px' , color: 'black' }}>Title</b></button>
<button type="button" class="btn btn-success" style={{width:"200px" , marginLeft:"200px"  }}><b style={{ fontSize: '30px' , color: 'black' }}>Author</b></button>




              <h1 style={{ fontSize: '40px' ,marginLeft:"40px"  }}><b>Boxes</b></h1>
            
              <hr
        style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '2px',
        }}
      />
          </div>
       

      <ul className="sidebar__highlights">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong>{highlight.comment.text}</strong>
              {highlight.content.text ? (
                <blockquote style={{ marginTop: "0.5rem" }}>
                  {`${highlight.content.text.slice(0, 90).trim()}…`}
                </blockquote>
              ) : null}
              {highlight.content.image ? (
                <div
                  className="highlight__image"
                  style={{ marginTop: "0.5rem" }}
                >
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </div>
              ) : null}
            </div>
            <div className="highlight__location">
              Page {highlight.position.pageNumber}
            </div>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Sidebar;
