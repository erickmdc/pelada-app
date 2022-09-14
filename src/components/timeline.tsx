import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot
} from '@mui/lab';
import { PanTool, SimCardAlert, NoSim, Repeat, SportsSoccer } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function CustomizedTimeline() {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          9:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant='outlined'>
            <PanTool />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant="body1" component="span">
            {'Defesa'}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          9:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant='outlined'>
            <NoSim color='warning' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant="body1" component="span">
            {'Cartão Amarelo'}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant='outlined'>
            <SportsSoccer />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant="body1" component="span">
            {'Gol'}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined">
            <SportsSoccer color='error' />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant="body1" component="span">
            {'Gol Contra'}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot variant='outlined'>
            <NoSim color='error' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant="body1" component="span">
            {'Cartão Vermelho'}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}