import React from 'react';
import { FooterContainer, CardsIcons, SecurityLogoWrap, FooterContent, Icon, SocialIcons, InfoStarsScore, FooterInfo, FooterLinks, FooterNetLinks, FooterWrapper, InfoNumber, InfoSpan, InfoStars, LinksBlock, LinksItem, LinkA, FooterCopyright,  } from './FooterElements';
import Select from 'react-select';
import StarRatingComponent from 'react-star-rating-component';
import selectStyles from './SelectStyles';

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
                              styles={selectStyles}
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
                              <Icon src={require('../../../images/facebook.svg').default}/>
                              <Icon src={require('../../../images/instagram.svg').default}/>
                              <Icon src={require('../../../images/youtube.svg').default}/>
                              <Icon src={require('../../../images/pinterest.svg').default}/>
                            </SocialIcons>
                            <CardsIcons>
                              <Icon src={require('../../../images/visa.svg').default}/>
                              <Icon src={require('../../../images/mastercard.svg').default}/>
                            </CardsIcons>
                            <SecurityLogoWrap>
                            <Icon src={require('../../../images/security-logo.svg').default}/>
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
