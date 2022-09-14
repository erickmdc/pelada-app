import {
  Typography, Tabs, Tab, ListItemButton, ListItemAvatar, Avatar, ListItemText, Grid, Divider, Button,
  IconButton
} from '@mui/material';
import { AlarmOn } from '@mui/icons-material';
import { SmSpace, MdSpace } from './spaces';
import Timeline from './timeline';
import Resumo from './resumo';
import Cronometro from './cronometro';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Route, Router, Routes } from 'react-router-dom';
import AcaoJogador from './acaoJogador';

function Partida() {

  const [tab, setTab] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const placarCasa = useAppSelector((state) => state.partida.placarCasa);
  const placarFora = useAppSelector((state) => state.partida.placarFora);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Grid container justifyContent={'space-evenly'}>
        <Grid item>
          <Typography variant='h4'>
            {placarCasa}
          </Typography>
        </Grid>
        <Grid item>
          <Cronometro active={active} />
        </Grid>
        <Grid item>
          <Typography variant='h4'>
            {placarFora}
          </Typography>
        </Grid>
      </Grid>
      <SmSpace />
      <IconButton aria-label="iniciar cronômetro" style={{ backgroundColor: 'green' }} onClick={() => setActive(!active)}>
        <AlarmOn />
      </IconButton>
      <SmSpace />
      <Routes>
        <Route path='/partida' element={
          <>
            <Tabs value={tab} onChange={handleChange} variant='fullWidth'>
              <Tab value={0} label="Partida" />
              <Tab value={1} label="Timeline" />
            </Tabs>
            {tab === 0 && <Resumo />}
            {tab === 1 && <Timeline />}
          </>}
        />
        <Route path='/acao-jogador' element={<AcaoJogador/>} />
      </Routes>
    </>
  )
}

export default Partida;