import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ExerciseCard } from '../ExerciseCard/ExerciseCard'
import { BodyPart } from '../BodyPart/BodyPart';
import Styles from './HorizontalScrollbar.module.css'
import leftArrowIcon from '../../assets/icons/arrow-left.svg';
import rightArrowIcon from '../../assets/icons/arrow-right.svg';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className={Styles.arrow_left}>
      <img src={leftArrowIcon} alt="left-arrow"/>
    </Typography>
  )
}
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className={Styles.arrow_right}>
      <img src={rightArrowIcon} alt="right-arrow"/>
    </Typography>
  )
}

function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu 

     LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="20px"
        >
          {isBodyParts ? 
          <BodyPart item={item} bodyPart={bodyPart}
          setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
        </Box>
      ))
      
      }</ScrollMenu>
  )
}

export { HorizontalScrollbar };