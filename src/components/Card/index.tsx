import React from 'react'
import styled from '@emotion/styled'

interface CardProps {
  src?: string;
  title?: string;
}

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  cursor: grab;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  min-height: 100%;
  min-width: 100%;
  padding: 8px;
  position: relative;
  width: 100%;
`;

export const Card = ({ src, title }: CardProps) => {
  return (
    <StyledCard>
      <div>{title}</div>

      <img src={src} alt="random" />
    </StyledCard>
  )
}
