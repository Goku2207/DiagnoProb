import React, { useState } from 'react';
import {Row, Col, Button } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import axios from 'axios';

const Diagnosis = (props) =>{

    const [symptoms, setSymptoms] = useState("");
    const [gender, setGender] = useState("");
    const [YOB, setYOB] = useState("");
    //const [probDiseases, setProbDiseases] = useState([]);
    const [symptomsById, setSymptomsById] = useState(new Map());
    const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFrYXNoZWNlaWl0aXNtQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTE0MTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjItMTEtMTQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY2ODUzODMzNiwibmJmIjoxNjY4NTMxMTM2fQ.f4BmbzbdHQPWdWmqzKq9wdUBkifVwLkoY7K2rlnpb0k";

    const diagnoseHandler = (event) =>{
        event.preventDefault();
        if(symptomsById.size !== 0){
            return func();
        }
        axios({
            method: "GET",
            url: "https://sandbox-healthservice.priaid.ch/symptoms?token="+API_KEY+"&format=json&language=en-gb",
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=>{
            let Data = res.data;
            for(var i=0;i<Data.length;i++){
                setSymptomsById(symptomsById.set(Data[i].Name,Data[i].ID));
            }
            func();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const func = () =>{
        let symptomArr = symptoms.split(",");
        console.log(symptomArr);
        let symptomIds = "";
        for(var i=0;i<symptomArr.length;i++){
            symptomIds+=symptomsById.get(symptomArr[i]);
            if(i<symptomArr.length-1)
                symptomIds+=",";
        }
        console.log(symptomIds);
        axios({
            method: "GET",
            url: "https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=["+symptomIds+"]&gender="+gender+"&year_of_birth="+YOB+"&token="+API_KEY+"&format=json&language=en-gb",
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=>{
            props.setProbDiseases(res.data);
            console.log(res.data);
        })
    }

    return(
        <div className="container">
            <div className="row justify-content-center mt-4 col-12" style={{padding: "2rem"}}>
                <LocalForm >
                    <Row className="form-group" style={{padding:"1rem"}}>
                        <Col className="col-12">
                            <Control.text model=".symptoms" id="symptoms" name="symptoms" placeholder="Symptoms" className="form-control" onChange={(event) => setSymptoms(event.target.value)} />
                            <Errors className="text-warning" model=".symptoms" show="touched"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group" style={{padding:"1rem"}}>
                        <Col className="col-12 ml-auto">
                            <Control.text model=".gender" id="gender" name="gender" placeholder="Gender" className="form-control" 
                                onChange={(event) => setGender(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="form-group" style={{padding:"1rem"}}>
                        <Col className="col-12 ml-auto">
                            <Control.text model=".YOB" id="YOB" name="YOB" placeholder="Year of Birth" className="form-control"
                                 onChange={(event) => setYOB(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="form-group justify-content-center">
                        
                            <Button color="primary" style={{backgroundColor:"#010067"}} type="submit" onClick={diagnoseHandler}>
                                Diagnose
                            </Button>
                        
                    </Row>
                </LocalForm>
            </div>
        </div>
    );
}

export default Diagnosis;