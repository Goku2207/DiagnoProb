import React, { useEffect, useState } from 'react';
import {Row, Col, Button, Card, CardImg, CardBody } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Diagnosis from './DiagnoseComponent';
import Result from './ResultComponent';

const Home = (props) =>{

    const [probDiseases, setProbDiseases] = useState([]);

    return(
        <>
       <div className="jumbotron">
           <div className="row row-header">
               <div className="col-12">
                   <center><p className="moto"><strong>DiagnoProb</strong></p></center>
                   <center><h4><strong>One stop solution for diagnosis suggestions!!!</strong></h4></center>
               </div>
           </div>
       </div>

   <div className="container">
            <div className="row card-deck">
                <Card className="col-md-5" style={{padding: 0, borderRadius: "1rem"}}>
                    {/* <CardImg src={cardimg2} width="100%" height="200rem" style={{borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}/> */}
                    <CardBody>
                        <div style={{lineHeight: 0.8}}>
                            <p style={{fontSize: "1.25rem"}}><center>Diagnose Yourself</center></p>
                            {/* <p className="subtitle" style={{fontSize: "1rem", color: "#808080"}}>Find some New Places</p> */}
                            <Diagnosis setProbDiseases={setProbDiseases}/>
                        </div>
                    </CardBody>
                </Card>
               {probDiseases.length!==0&&<Card className="col-md-5 ml-auto" style={{padding: 0, borderRadius: "1rem",marginLeft:"5rem"}}>
                    {/* <CardImg src={cardimg2} width="100%" height="200rem" style={{borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}/> */}
                    <CardBody>
                        <div>
                            <p style={{fontSize: "1.25rem"}}><center>Probable Diseases</center></p>
                            <div className="subtitle" style={{fontSize: "1rem", color: "#808080"}}>
                                <Result probDiseases={probDiseases}/>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                }
            </div>
        </div>

   <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/contactus">Contact us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Developer</h5>
                    <address>
		              Ritu Priyadarshini<br />
		              IIT(ISM), Dhanbad<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
		              
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:abc@test.com">
                         abc@test.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:abc@test.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 DiagnoProb</p>
                </div>
            </div>
        </div>
    </div>

   </>
    );
}

export default Home;

// return(
    //     <div>
    //         <div className="row justify-content-center mt-4 col-12" style={{padding: "2rem"}}>
    //             <LocalForm >
    //                 <Row className="form-group">
    //                     <Button color="primary" style={{backgroundColor:"#010067"}} type="submit" onClick={submitHandler}>
    //                         Search
    //                     </Button>
    //                 </Row>
    //                 <Row className="form-group" style={{padding:"5rem"}}>
    //                     <Col className="col-4">
    //                         <Control.text model=".symptoms" id="symptoms" name="symptoms" placeholder="Symptoms" className="form-control" onChange={(event) => setSymptoms(event.target.value)} />
    //                         <Errors className="text-warning" model=".symptoms" show="touched"
    //                             messages={{
    //                                 required: 'Required'
    //                             }}
    //                         />
    //                     </Col>
    //                     <Col className="col-3 ml-auto">
    //                         <Control.text model=".gender" id="gender" name="gender" placeholder="Gender" className="form-control" 
    //                             onChange={(event) => setGender(event.target.value)} />
    //                     </Col>
    //                     <Col className="col-3 ml-auto">
    //                         <Control.text model=".YOB" id="YOB" name="YOB" placeholder="Year of Birth" className="form-control"
    //                              onChange={(event) => setYOB(event.target.value)} />
    //                     </Col>
    //                     <Col className="col-2 ml-auto">
    //                         <Button color="primary" style={{backgroundColor:"#010067"}} type="submit" onClick={diagnoseHandler}>
    //                             Diagnose
    //                         </Button>
    //                     </Col>
    //                 </Row>
    //             </LocalForm>
    //         </div>
    //     </div>
    // );