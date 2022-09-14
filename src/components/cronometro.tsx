import { useEffect, useState } from 'react';
import {
  Typography,
} from '@mui/material';

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

interface Props {
  active: boolean;
}

const Cronometro: React.FC<Props> = ({ active }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [state, setState] = useState<State>({ time: 0, seconds: 0, minutes: 0 });

  useEffect(() => {
    setTimeout(() => {
      if (active) {
        const minutes = Math.floor((state.time + 1) / 60);
        setState({
          time: state.time + 1,
          minutes: minutes,
          seconds: state.time - minutes * 60 + 1
        })
      }
    }, 1000);
  }, [state, active]);


  return (
    <div className="stop-watch">
      <Typography variant='body1'>
        {`${state.minutes}: ${state.seconds < 10 ? `0${state.seconds}` : state.seconds}`}
      </Typography>
    </div>
  );
}

export default Cronometro;