
import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { Box } from '@mui/material';
import "../styles.css";
import SplitPane from "react-split-pane";

export default function App() {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);
  
    const { pdfDocument, pdfPage } = usePdf({
      file: 'https://arxiv.org/pdf/2212.08011.pdf',
      page,
      canvasRef,
    });
  return (
    <div className="App">
      <SplitPane split="horizontal" defaultSize={-10} allowResize={true}>
        <div className="settingsDiv">
        
        
        </div>
        <SplitPane
          split="vertical"
          minSize={200}
          maxSize={100}
          defaultSize={"50%"}
        >
          <div className="simulationDiv" >
          <div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2'>
          <div className=' w-full h-full bg-white '>
          <br/>
          <br/>
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
      
<button type="button" class="btn btn-danger" style={{width:"200px" , marginLeft:"40px"}}><b style={{ fontSize: '30px' , color: 'black' }}>Title</b></button>
<button type="button" class="btn btn-success" style={{width:"200px" , marginLeft:"100px"}}><b style={{ fontSize: '30px' , color: 'black' }}>Author</b></button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
              <h1 style={{ fontSize: '40px' ,marginLeft:"40px"  }}><b>Boxes</b></h1>
              <br/>
              <hr
        style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '2px',
        }}
      />
          </div>
          </div>
          </div>
          <div className="statisticsDiv">
          <div className='w-150px h-full bg-white  md:h-screen'>
          <div style={{ 
           
            
            height: '100%'  , 
         
        }}>
            <Box color="white" 
            height="750px"
                bgcolor="palevioletred" p={1}
                className="center-col">
               {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button class="btn btn-success"  disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button 
              class="btn btn-success" 
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
            </Box>
        </div>
          </div>
     
          </div>
        </SplitPane>
      </SplitPane>
    </div>
  );
}