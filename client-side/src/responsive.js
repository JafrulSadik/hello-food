import { css } from "styled-components";

const size = {
    mobile: "380px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
  }

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props}
        }
    `
}   

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `
}