import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='loading'>
      <div className='loader'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .loader {
    border: 12px solid #f3f3f3;
    border-radius: 50%;
    border-top: 12px solid #af9a7d;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1.2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loading
