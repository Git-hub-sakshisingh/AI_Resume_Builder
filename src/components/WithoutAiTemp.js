import React from 'react';
import { Link } from 'react-router-dom';
import template1 from '../images/template1.png';

export default function WithoutAiTemp() {
    return (
        <div style={{marginTop:"75vh",background:"white"}}>
            <div className="container">
                <div className="row">
                <div class="card my-3 mx-4" style={{width:"auto",textAlign:"center"}} >
                        <img src={template1} class="card-img-top" alt="Template" style={{width:"310px",height:"500px"}}/>
                        <div class="card-body">
                            <Link to="/edit" class="btn btn-primary">Use This Template</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
