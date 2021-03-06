import {useState} from "react";
import Navegador from "../../geral/navbar";
import { useNavigate } from "react-router-dom";
import {Form, Button, Container, Card} from "react-bootstrap"
import { Divisao } from "./style";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../../../src/lolicon.png";



export default function Home(){
    const [summoner, setSummoner] = useState("");
    let navigate = useNavigate();
    function handleClick() {
        navigate(`/summoner/${summoner}`);
      }

    return (
        <Container md = "auto" >
            <Navegador/>
            <Divisao>
                <Card >
                    <Form className = "mb-5" style={{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Nickname:</Form.Label>
                            <Form.Control type="text" placeholder="name" value={summoner} onChange={(e) => setSummoner(e.target.value)} />
                        </Form.Group>
                        <Button type="button" onClick={() => handleClick()} float="right">
                            <img
                            alt="Icone"
                            src={icon}
                            width="40"
                            height="40"
                            />
                        </Button>
                    </Form>
                </Card>
            </Divisao>
        </Container>
    )
}