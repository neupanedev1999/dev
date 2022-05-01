import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 1, text: 'Achievement 1' },
  { number: 2, text: 'Achievement 2' },
  { number: 3, text: 'Achievement 3' },
  { number: 4, text: 'Achievement 4' },
]
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8718363685404871"
     crossorigin="anonymous"></script>

const Acomplishments = () => (
  <Section id="showcase">
    <SectionDivider />
    <br />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
