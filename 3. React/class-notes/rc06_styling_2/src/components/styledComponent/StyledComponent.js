import React from 'react'
import MyButton from './button/MyButton';
import Header from './header/Header';
import Wrapper from './wrapper/Wrapper';
import Link from './link/Link';

const StyledComponent = () => {
  return (
    <Wrapper bgColor="aqua" >
      <Header headerColor = "green"> Merhaba Dünya </Header>
      <MyButton color >Blue Button</MyButton>
      <MyButton>Purple Button</MyButton>
      <Link href="https://www.clarusway.com" 
            target="_blank" 
            rel='noopener'
            secondary>
        Clarsuway
      </Link>
    </Wrapper>

  )
}

export default StyledComponent