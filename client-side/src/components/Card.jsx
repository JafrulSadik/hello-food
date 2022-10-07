import styled from 'styled-components';

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 15px;
    `
    const Img = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
    `



const Card = (props) => {
  console.log(props)
  return (
    <Wrapper href='/'>
        <Img src={props.item.img}/>
    </Wrapper>
  )
}

export default Card