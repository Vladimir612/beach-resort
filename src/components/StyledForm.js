import styled from 'styled-components'

const StyledForm = styled.form`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
  @media screen and (min-width: 776px) {
    width: 70vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }

  .form-group {
    text-transform: capitalize;
  }

  .form-group label {
    display: block;
    letter-spacing: $mainSpacing;
    margin-bottom: 0.5rem;
  }

  .form-control {
    width: 100%;
    background: transparent;
    font-size: 1rem;
    outline: none;
    border-radius: 8px;
    height: 30px;
    border: 1px solid #af9a7d;
    background: rgba(175, 154, 125, 0.7);
    text-align: center;
    padding-left: 1rem;
    color: #fff;
  }

  .size-inputs {
    display: flex;
  }

  .size-input {
    width: 40%;
    padding: 0.2rem;
    border: 1px solid rgba(175, 154, 125, 1);
    border-radius: 0.3rem;
    margin-right: 0.3rem;
    color: #fff;
    background: rgb(175, 154, 125, 0.7);
  }

  .single-extra label {
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  /*input type range*/
  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: rgb(175, 154, 125, 0.7);
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-radius: 1.3px;
    border: none;
  }
  input[type='range']::-webkit-slider-thumb {
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgba(175, 154, 125);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #367ebd;
  }
`

export default StyledForm
