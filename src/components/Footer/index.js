import React from 'react';
import { FooterContainer, CardsIcons, SecurityLogoWrap, FooterContent, Icon, SocialIcons, InfoStarsScore, FooterInfo, FooterLinks, FooterNetLinks, FooterWrapper, InfoNumber, InfoSpan, InfoStars, LinksBlock, LinksItem, LinkA, FooterCopyright,  } from './FooterElements';
import Select from 'react-select';
import StarRatingComponent from 'react-star-rating-component';
const options = [
  {
      value: 'geld-zurück-garantie',
      label: 'Geld-Zurück-Garantie',
  },
  {
      value: 'datenschutzerklärung',
      label: 'Datenschutzerklärung',
  },
  {
      value: 'revisionen',
      label: 'Revisionen',
  },
  {
    value: 'abattpolitik',
    label: 'Rabattpolitik',
},
];

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>

                    <FooterContent>
                        <FooterInfo>
                            <InfoNumber>
                              +49(621) <strong>53399112</strong>
                              <InfoSpan>Call us!</InfoSpan>
                              
                            </InfoNumber>
                            <InfoStars>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={4}
                                    starColor={'#FFFFFF'}
                                    emptyStarColor={'transparrent'}
                                    // onStarClick={this.onStarClick.bind(this)}
                                />
                                <InfoStarsScore>4<span style={{color: 'rgba(96, 96, 96, 0.5)'}}>/</span>5</InfoStarsScore>
                            </InfoStars>
                            <Select 
                              styles={{
                                container: (provided) => ({
                                  ...provided,
                                  width: 105,
                                  display: 'flex',
                                }),
                                singleValue: (provided) => ({
                                  ...provided,
                                  color: '#7E8183',
                                }),
                                menu: (provided) => ({
                                  ...provided,
                                  width: 150,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  paddingTop: 6,
                                  paddingBottom: 6,
                                  background: '#F9FAFC',
                                  border: 'none',
                                  borderRadius: 0,
                                }),
                            
                                input: (provided) => ({
                                  ...provided,
                                }),
                                placeholder: () => ({
                                  color: '#7E8183', 
                                  fontSize: 16,
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  display: 'flex',
                                  alignItems: 'center',
                                  color: state.isSelected ? 'var(--primary-color)' : '#111111',
                                  // padding: 10,
                                  background: state.isSelected && '#FEE5FF',
                                  cursor: 'pointer',
                                  width: '100%',
                                  fontSize: 12,
                                  borderRadius: 6,
                                  padding: 3,
                                }),
                                indicatorSeparator: () => ({
                                  display: 'none'
                                }),
                                dropdownIndicator: (provided,state) => ({
                                  ...provided,
                                  transition: 'all 0.2s ease',
                                  transform: state.isFocused ? 'rotate(180deg)' : null,
                                }),
                                control: (provided,state) => ({
                                  ...provided,
                                  width: 105,
                                  border: state.isFocused ? '2px solid #7E8183' :'2px solid #7E8183',
                                  outline: 'none',
                                  paddingLeft: 10,
                                  indicatorSeparator: false,
                                  display: 'flex',
                                  autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off',
                                  height: 35,
                                  backgroundColor: 'transparrent',
                                  borderRadius: 28,
                                  cursor: 'pointer',
                                  borderStyle: 'none',
                                  color: '#7E8183'
                                }),
                                
                                singleValue: (provided, state) => {
                                  const opacity = state.isDisabled ? 0.5 : 1;
                                  const transition = 'opacity 300ms';
                                  return { ...provided, opacity, transition };
                                }
                              }}
                              options={options}
                              inputProps={{autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' }}
                              placeholder={'Info'}
                              searchable={true}
                              // onChange={handleChange}
                            />
                        </FooterInfo>

                        <FooterLinks>
                            <LinksBlock>
                              <LinksItem><LinkA href="#">About</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">Product</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">FAQ</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">Contact</LinkA></LinksItem>
                            </LinksBlock>
                            <LinksBlock>
                              <LinksItem><LinkA href="#">Blog</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">How it works</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">Clients</LinkA></LinksItem>
                              <LinksItem><LinkA href="#">Reviews</LinkA></LinksItem>
                            </LinksBlock>
                        </FooterLinks>

                        <FooterNetLinks>
                            <SocialIcons>
                              <Icon src={require('../../images/facebook.svg').default}/>
                              <Icon src={require('../../images/instagram.svg').default}/>
                              <Icon src={require('../../images/youtube.svg').default}/>
                              <Icon src={require('../../images/pinterest.svg').default}/>
                            </SocialIcons>
                            <CardsIcons>
                              <Icon src={require('../../images/visa.svg').default}/>
                              <Icon src={require('../../images/mastercard.svg').default}/>
                            </CardsIcons>
                            <SecurityLogoWrap>
                            <Icon src={require('../../images/security-logo.svg').default}/>
                            </SecurityLogoWrap>
                        </FooterNetLinks>

                    </FooterContent>
                    <FooterCopyright>© Copyright 2016-2020</FooterCopyright>

                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer;
