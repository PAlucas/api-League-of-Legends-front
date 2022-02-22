import {useEffect, useState} from "react";
import Navegador from "../../geral/navbar";
import api from "../../services/api";
import { Container , Card } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { Divisao, WinsLayout } from "./style";

export default function Home(){

    const [summoner, setSummoner] = useState("");
    const { id } = useParams();
    let summonerWins = 0;
    let summonerLoss = 0;
    let summonerElo = 0;

    //Para pegar os dados do backend
    useEffect(() => {
        api.post(`summoner/${id}`, id).then((res) => {
            console.log(res.data) 
            setSummoner(res.data)
        }).catch(e => console.log("Erro na requisição"));
    });

    //Se não tiver jogos ranked retorna 0
    if(summoner.wins === undefined){
        summonerElo = "unranked";
        summonerWins = "0";
        summonerLoss = "0";
    }else{
        summonerWins = summoner.wins;
        summonerLoss = summoner.losses;
        summonerElo = summoner.tier;
    }
    
    //Url que possui os icones
    let icon = `https://ddragon.leagueoflegends.com/cdn/${summoner.icons}/img/profileicon/${summoner.profileIconId}.png`
    
    return (
        <Container>
            <Navegador/>
            <Divisao>
                <Card style={{ width: '18rem', justifyContent: "flex-end" }} >
                    <Card.Img variant="top" src={icon} />
                    <WinsLayout>
                        <Card.Body>
                            <Card.Title>Nickname</Card.Title>
                            <Card.Text>{summoner.name}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Elo</Card.Title>
                            <Card.Text>{summonerElo}</Card.Text>
                        </Card.Body>
                    </WinsLayout>
                    <WinsLayout>
                        <Card.Body>
                            <Card.Title>Wins</Card.Title>
                            <Card.Text>{summonerWins}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Loses</Card.Title>
                            <Card.Text>{summonerLoss}</Card.Text>
                        </Card.Body>
                    </WinsLayout>
                </Card>
            </Divisao>
        </Container>
    )
}