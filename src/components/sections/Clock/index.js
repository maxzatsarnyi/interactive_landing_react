import React from 'react';
import {
    ClockSection,
    ClockContainer,
    ClockContent,
    ClockH2,
    ClockP,
    ClockBtnWrap,
    ClockBtn,
    ClockImgWrap,
    ClockImgBg,
    ClockImg,
} from './ClockElements';

const Clock = () => {
    return (
        <>
            <ClockSection>
                <ClockContainer>

                    <ClockImgWrap>
                        <ClockImgBg src={require('../../../images/bg-watch.svg').default}/>
                        <ClockImg src={require('../../../images/watch.svg').default}/>

                    </ClockImgWrap>

                    <ClockContent>
                        <ClockH2>Temporibus autem quibusdam et aut officiis debitis</ClockH2>
                        <ClockP>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</ClockP>
                        <ClockBtnWrap>
                            <ClockBtn>Try for free</ClockBtn>
                        </ClockBtnWrap>
                    </ClockContent>

                </ClockContainer>
            </ClockSection>
        </>
    )
}

export default Clock;
