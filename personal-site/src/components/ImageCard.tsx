import styled from 'styled-components'

enum BorderType {
  SQUARE,
  ROUND
}

type ImageCardProps = {
  borderType: BorderType,
  borderBold: boolean,

}

const ImageCard = styled.div`

    --img-ratio: 3/2;
  
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
    border-radius: 0.5rem;
  
  img {
    aspect-ratio: var(--img-ratio);
    object-fit: cover;
    width: 100%;
  }
  
  img:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  
  img:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
    margin-top: auto;
  }
  
  & :not(img) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  & :not(img):first-child {
    margin-top: 1rem;
  }
  
  & :last-of-type:not(img, h2, h3, h4) {
    margin-bottom: 1rem;
  }
  
  & :not(h2, h3, h4) {
    font-size: 0.9rem;
  }
  
  a {
    align-self: start;
  }

  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
`

export default ImageCard