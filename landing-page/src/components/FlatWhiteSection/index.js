import React from 'react'
import { Button } from '../ButtonElement'
import { SubWrap, SubtitleTitle, LiLIcon, InfoWrapperBig, SvgIcon, Mark, Column3 ,Column2, Img, ImgWrap, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoRow, InfoRow2, LilIcon } from './FlatWhiteSection'
import Svg from '../../img/svg-1.svg'

const FlatWhiteSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow2>
                <Column1>
                    <SubtitleTitle>Do not hesitate to contact us. We will get back to you by the end of the next business day.</SubtitleTitle>
                </Column1>
                <Column2>
                <BtnWrap>
                            <Button to='home' smooth={true} duration={500} 
                            spy={true} exact="true" offset={-80} primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            >Lets talk</Button>
                        </BtnWrap>              
                </Column2>
            </InfoRow2>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default FlatWhiteSection