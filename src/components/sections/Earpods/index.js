import React from 'react';
import { EarpodsContainer, EarpodsWrapper, EarpodsImgWrap,EarpodsImgBg, EarpodsImg, EarpodsContent, EarpodsH2, EarpodsList, EarpodsLi } from './EarpodsElements';

const Earpods = () => {
    return (
        <>
            <EarpodsContainer>
                <EarpodsWrapper>
                    <EarpodsImgWrap>
                        <EarpodsImgBg src={require('../../../images/bg-earpods.svg').default}/>
                        <EarpodsImg src={require('../../../images/earpods.svg').default}/>
                    </EarpodsImgWrap>
                    <EarpodsContent>
                        <EarpodsH2>At vero eos et accusamus</EarpodsH2>
                        <EarpodsList>
                            <EarpodsLi>Sed ut perspiciatis, unde omnis iste natus error.</EarpodsLi>
                            <EarpodsLi>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.</EarpodsLi>
                            <EarpodsLi>Dsed quia non numquam eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</EarpodsLi>
                            <EarpodsLi>Quam nihil molestiae consequatur.</EarpodsLi>
                            <EarpodsLi>At vero eos et accusamus et iusto odio dignissimos ducimus.</EarpodsLi>
                        </EarpodsList>
                    </EarpodsContent>
                </EarpodsWrapper>
            </EarpodsContainer>
        </>
    )
}

export default Earpods;
