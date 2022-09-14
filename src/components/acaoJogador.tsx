import React, { ComponentState } from 'react';
import { Typography, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, Grid, Divider } from '@mui/material';
import { AcaoEnum, Jogador } from '../models/jogador';
import { useLocation } from 'react-router-dom';

interface AcaoJogadorProps {
  jogador?: Jogador;
}

const acaoDescriptions: { [key: string]: string } = {
  [AcaoEnum.Gol]: 'Gol',
  [AcaoEnum.GolContra]: 'Gol Contra',
  [AcaoEnum.Defesa]: 'Defesa',
};

const AcaoJogador: React.FC = () => {

  const location = useLocation();
  const jogador = (location.state as AcaoJogadorProps).jogador;
  const acoes = Object.values(AcaoEnum).map(acao => acaoDescriptions[acao]);

  console.log(jogador);

  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {acoes.map((value) => (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={value} primary={value} />
            </ListItemButton>
            <Divider absolute />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default AcaoJogador;