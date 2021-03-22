import React from 'react';
import {
    PromoSection,
    PromoContainer,
    PromoContent,
    PromoH1,
    PromoP,
    PromoBtnWrap,
    PromoBtn,
    PromoImgWrap,
    PromoImgBg,
    PromoImg,
} from './PromoElements';

const Promo = () => {
    return (
        <>
            <PromoSection>
                <PromoContainer>

                    <PromoContent>
                        <PromoH1>At vero eos et accusamus et iusto odio dignissimos ducimus</PromoH1>
                        <PromoP>Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.</PromoP>
                        <PromoBtnWrap>
                            <PromoBtn>Try for free</PromoBtn>
                        </PromoBtnWrap>
                    </PromoContent>

                    <PromoImgWrap>
                        <PromoImgBg src={require('../../../images/bg-monitor.svg').default}/>
                        <PromoImg src={require('../../../images/monitor.svg').default}/>

                    </PromoImgWrap>
                </PromoContainer>
            </PromoSection>
        </>
    )
}

export default Promo;
