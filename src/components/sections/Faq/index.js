import React, {useState} from 'react';
import { 
    FaqButton, 
    FaqContainer, 
    FaqWrapper, 
    ItemText,
    FaqTitleH2,
    FaqList,
    FaqItem,
    ItemTitleWrap,
    ItemTitle,
    ItemArrow,

} from './FaqElements';
import data from './Data';
import {CSSTransition} from 'react-transition-group';

const Faq = () => {
    const [dataArr, setData] = useState(data);

    const changeVisible = ({currentTarget}) => {
        let id = currentTarget.dataset.id;


        let st = dataArr.map(obj => {
            if(obj.id == id){
                obj.isVisible = !obj.isVisible;
            }
            return obj;
        })

        setData(st);
    }

    return (
        <>
            <FaqContainer>
                <FaqWrapper>
                    <FaqTitleH2>FAQ</FaqTitleH2>
                    
                    <FaqList>
                        {dataArr.length > 0 && (
                            dataArr.map(({id, title, text, isVisible}) => (
                                <>
                                    <FaqItem key={id}>
                                        <ItemTitleWrap>
                                            <ItemTitle>{title}</ItemTitle>
                                            <ItemArrow data-id={id} isVisible={isVisible} onClick={changeVisible} src={require('../../../images/arrow-faq.svg').default}/>
                                        </ItemTitleWrap>
                                        <CSSTransition
                                            in={isVisible}
                                            timeout={350}
                                            classNames="fade"
                                            unmountOnExit
                                            appear
                                            mountOnEnter
                                        >
                                            <ItemText>{text}</ItemText>
                                        </CSSTransition>
                                    </FaqItem>
                                </>
                            ))
                        )}
                    </FaqList>
                    
                    
                    <FaqButton>Try for free</FaqButton>
                </FaqWrapper>
            </FaqContainer>
        </>
    )
}

export default Faq;
