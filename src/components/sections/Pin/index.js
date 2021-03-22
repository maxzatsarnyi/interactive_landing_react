import React, {useState, useEffect} from 'react';
import {
    ContentH2,
    ContentTextWrap,
    PinContainer,
    PinContent,
    PinWrapper,
    ContentP,
    ContentImgWrap,
    ContentImg,
    ContentImgBg,
    PinItem,
    PinMenu,
    ItemLine,
    ItemText,
    PinSliderWrap,
    PinSliderText,
} from './PinElements';
import data from './Data';

const Pin = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [currentObj, setCurrentObj] = useState(data[currentSlide-1]);

    const changeSlide = ({currentTarget}) => {
        setCurrentSlide(currentTarget.dataset.slide)
        setCurrentObj(data[currentTarget.dataset.slide-1])
    }

    useEffect(() => {
    }, [currentSlide])

    console.log(currentObj.text1)
    return (
        <>
            <PinContainer>
                <PinWrapper>
                    <PinContent>
                        <ContentTextWrap>
                            <ContentH2>{currentObj && currentObj.title}</ContentH2>
                            <ContentP>{currentObj && currentObj.text1}</ContentP>
                        </ContentTextWrap>
                        <ContentImgWrap>
                            <ContentImgBg src={require('../../../images/pin-bg.svg').default}/>
                            <ContentImg src={require('../../../images/pin.svg').default}/>
                        </ContentImgWrap>
                    </PinContent>

                    
                    <PinSliderWrap>
                        <PinMenu>
                            <PinItem data-slide={1} onClick={changeSlide}>
                                <ItemText isActive={currentSlide == 1 && true}>Nemo enim</ItemText>
                            </PinItem>
                            <PinItem data-slide={2} onClick={changeSlide}>
                                <ItemText isActive={currentSlide == 2 && true}>Die ipsam voluptatem</ItemText>
                            </PinItem>
                            <PinItem data-slide={3} onClick={changeSlide}>
                                <ItemText isActive={currentSlide == 3 && true}>Ut enim ad minima</ItemText>
                            </PinItem>
                        </PinMenu>

                        <PinSliderText>{currentObj && currentObj.text2}</PinSliderText>
                    </PinSliderWrap>

                </PinWrapper>
            </PinContainer>
        </>
    )
}

export default Pin;
