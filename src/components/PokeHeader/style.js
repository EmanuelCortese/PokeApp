import styled from 'styled-components'

export const PokeHeaderMain = styled.header`
  > div {
    position: fixed;
    z-index: 200;
    display: flex;
    width: 100%;
    height: 4rem;
    background: var(--background-secondary, #f0eff6);
    border-bottom: 0.063rem solid var(--background-primary, #18171c);
    gap: 4rem;
    align-items: center;
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      position: relative;
      height: 1.9rem;
      width: 17rem;
      > input {
        height: 100%;
        width: 100%;
        border: none;
        border-radius: 4rem;
        padding: 0.1rem 0.8rem;
        caret-color: var(--color-primary, #f4f4f4);
        outline: none;
        font-size: 0.9rem;
        color: var(--color-primary, #f4f4f4);
        background: var(--background-primary, #18171c);
        font-weight: 500;
      }
      > svg {
        color: var(--color-primary, #f4f4f4);
        z-index: 100;
        position: absolute;
        font-size: 1.06rem;
        right: 0;
        padding: 0 1rem 0 0;
        cursor: pointer;
      }
    }
    > div:nth-child(3) {
      position: absolute;
      display: flex;
      align-items: center;
      right: 0;
      width: 10rem;
      gap: 2rem;
      > label {
        background: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 5rem;
        height: 2rem;
        border-radius: 2rem;
        cursor: pointer;
        > input {
          display: none;
          width: 0;
          height: 0;
          transition: transform 0.4s ease;
          &:checked + span {
            transform: translateX(var(--translateX-button));
          }
        }
        > span {
          position: absolute;
          background: var(--switch-background, #add8e6);
          z-index: 300;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          margin: 0.4rem;
          transform: translateX(var(--translateX-button));
          transition: transform 0.4s ease;
        }
        > svg:nth-child(1) {
          position: absolute;
          color: var(--switch-moon-color, #add8e6);
          font-weight: 600;
          left: 0;
          padding: 0.6rem;
          font-size: 1.1rem;
          z-index: 200;
        }
        > svg:nth-child(4) {
          position: absolute;
          right: 0;
          padding: 0.6rem;
          color: var(--switch-sun-color, #fdfd96);
          font-size: 1.1rem;
          z-index: 200;
        }
      }
      > svg {
        font-size: 2rem;
        color: var(--color-secondary, #18171c);
      }
    }
  }
  & > img {
    width: 44rem;
    margin: 5rem 0;
    text-align: center;
  }
`
export const PokeHeaderTitle = styled.h2`
  display: inline-block;
  width: 90%;
  margin: ${({ margin }) => (margin ? '0 0 7rem 4rem' : '4.5rem 0 0 0')};
  text-align: left;
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-primary, #f4f4f4);
`
