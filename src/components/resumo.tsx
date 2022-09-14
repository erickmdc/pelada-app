import {
  Typography, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, Grid, Divider, Button,
  IconButton
} from '@mui/material';
import { AlarmOn } from '@mui/icons-material';
import { SmSpace, MdSpace } from './spaces';
import { SportsSoccer } from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';

function Partida() {

  const jogadoresCasa = useAppSelector(state => state.partida.jogadoresCasa);
  const jogadoresFora = useAppSelector(state => state.partida.jogadoresFora);

  const navigate = useNavigate();

  const handleClickJogador = (nomeJogador: string) => {
    navigate('/acao-jogador', { state: { jogador: { id: 1, nome: nomeJogador } } });
  }

  return (
    <>
      <SmSpace />
      <Grid container style={{ width: '100%' }} justifyContent={'space-evenly'}>
        <Grid item xs={6}>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {jogadoresCasa.map((value) => (
              <ListItem
                key={value}
                disablePadding
              >
                <ListItemButton onClick={() => handleClickJogador(value)}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar ${value}`}
                      src={`/static/images/avatar/${value}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText primaryTypographyProps={{ style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }} id={value} primary={value} />
                  {/* <SportsSoccer fontSize='small' />
                  <SportsSoccer fontSize='small' />
                  <SportsSoccer fontSize='small' /> */}
                </ListItemButton>
                <Divider absolute />
              </ListItem>
            ))}
          </List>
          {/* <Divider orientation='vertical' /> */}
        </Grid>
        <Grid item xs={6}>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {jogadoresFora.map((value) => (
              <ListItem
                key={value}
                disablePadding
              >
                <ListItemButton onClick={() => handleClickJogador(value)}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar ${value}`}
                      src={`/static/images/avatar/${value}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText primaryTypographyProps={{ style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }} id={value} primary={value} />
                  <SportsSoccer fontSize='small' />
                  <SportsSoccer fontSize='small' />
                </ListItemButton>
                <Divider absolute />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <MdSpace />
      <Button variant='contained' color='error'>
        {'Fim de jogo'}
      </Button>
      <MdSpace />
    </>
  )
}

export default Partida;