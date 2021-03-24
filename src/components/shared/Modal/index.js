import React, {useState, useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';

import {
    ModalContainer,
    ModalWrapper,
    ImgWrapper,
    Img,
    Content, 
    ContentWrapper,
    ContentH2,
    ContentP,
    Form,
    Input,
    Button,
    Icon,
} from './ModalElements';

const Modal = ({showModal, toggleModal}) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        toggleModal();
      }
    },
    [toggleModal, showModal]
  );

    const handleSubmit = e => {
        e.preventDefault();
        console.log({email,name});
    }

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
    return (
        <>
            {showModal ? (
                <ModalContainer onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper>
                            <ImgWrapper>
                                <Img src={require('../../../images/modal-img.png').default}/>
                            </ImgWrapper>
                            <Content>

                                <ContentWrapper>
                                    <Icon onClick={toggleModal} src={require('../../../images/modal-close.svg').default} />

                                    <ContentH2>Sed ut perspiciatis</ContentH2>
                                    <ContentP>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.</ContentP>
                                    <Form onSubmit={handleSubmit}>
                                        <Input onChange={(e) => setEmail(e.currentTarget.value)} placeholder="deine@email.com"/>
                                        <Input onChange={(e) => setName(e.currentTarget.value)} placeholder="Name"/>
                                        <Button>Ja, ich möchte!</Button>
                                    </Form>
                                </ContentWrapper>
                            </Content>
                        </ModalWrapper>
                    </animated.div>
                    
                </ModalContainer>
            ) : null}
            
        </>
    )
}

export default Modal;
