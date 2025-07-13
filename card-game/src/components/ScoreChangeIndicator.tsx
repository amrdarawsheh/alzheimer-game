import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

interface ScoreChangeIndicatorProps {
  change: number
  onComplete?: () => void
}

const floatUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-60px) scale(1.1);
  }
`

const ScoreChangeContainer = styled.div<{ isPositive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  pointer-events: none;
  
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.isPositive ? '#10B981' : '#EF4444'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  animation: ${floatUp} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  
  &::before {
    content: '${props => props.isPositive ? '+' : ''}';
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const ScoreChangeIndicator: React.FC<ScoreChangeIndicatorProps> = ({ 
  change, 
  onComplete 
}) => {
  const [visible, setVisible] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onComplete?.()
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [onComplete])
  
  if (!visible || change === 0) return null
  
  return (
    <ScoreChangeContainer isPositive={change > 0}>
      {Math.abs(change)}
    </ScoreChangeContainer>
  )
}