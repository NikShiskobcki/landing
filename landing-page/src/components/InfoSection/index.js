import React from 'react'
import { Button } from '../ButtonElement'
import { Mark, Picture, Column2, Img, ImgWrap, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoRow } from './InfoElements'
import Svg from '../../img/stack.png'
import Svg2 from '../../img/stackmobile.png'


const InfoSection = ({lightBg, id, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine primary={primary ? 1 : 0}>{topLine}</TopLine>
                        <Heading lightText={lightText}>We deal with everything so you <Mark>dont have to</Mark>.</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home' smooth={true} duration={500} 
                            spy={true} exact="true" offset={-80} primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <picture>
                            <source srcSet={Svg2} media="(max-width: 768px)" />
                            <Img src={img} alt={alt} />
                        </picture>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection