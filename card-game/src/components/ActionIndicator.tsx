import React from 'react'
import styled, { keyframes } from 'styled-components'

interface ActionIndicatorProps {
  action: string
  visible: boolean
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?: 'primary' | 'success' | 'warning' | 'info'
  actionType?: 'draw' | 'discard' | 'replace' | 'peek' | 'swap' | 'thinking' | 'turn'
}

const IndicatorContainer = styled.div<{ 
  visible: boolean; 
  position: 'top' | 'bottom' | 'left' | 'right';
  variant: 'primary' | 'success' | 'warning' | 'info';
}>`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => {
    switch (props.position) {
      case 'top': return props.visible ? 'translateY(-8px)' : 'translateY(-4px)';
      case 'bottom': return props.visible ? 'translateY(8px)' : 'translateY(4px)';
      case 'left': return props.visible ? 'translateX(-8px)' : 'translateX(-4px)';
      case 'right': return props.visible ? 'translateX(8px)' : 'translateX(4px)';
      default: return props.visible ? 'translateY(-8px)' : 'translateY(-4px)';
    }
  }};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => {
    switch (props.position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform-origin: bottom center;
          margin-left: -50px;
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform-origin: top center;
          margin-left: -50px;
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform-origin: center right;
          margin-top: -12px;
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform-origin: center left;
          margin-top: -12px;
        `;
      default:
        return `
          bottom: 100%;
          left: 50%;
          transform-origin: bottom center;
          margin-left: -50px;
        `;
    }
  }}
`

const IndicatorBubble = styled.div<{ variant: 'primary' | 'success' | 'warning' | 'info' }>`
  background: ${props => {
    switch (props.variant) {
      case 'primary': return 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)';
      case 'success': return 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
      case 'warning': return 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)';
      case 'info': return 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)';
      default: return 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)';
    }
  }};
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 8px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    
    ${props => {
      const color = (() => {
        switch (props.variant) {
          case 'primary': return '#1E40AF';
          case 'success': return '#059669';
          case 'warning': return '#D97706';
          case 'info': return '#7C3AED';
          default: return '#1E40AF';
        }
      })();
      
      return `border-top-color: ${color};`;
    }}
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`

// Enhanced animations
const floating = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`

const ripple = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
`

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const PulseEffect = styled.div<{ 
  variant: 'primary' | 'success' | 'warning' | 'info';
  actionType?: string;
}>`
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: ${props => {
    switch (props.variant) {
      case 'primary': return 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)';
      case 'success': return 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
      case 'warning': return 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)';
      case 'info': return 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)';
      default: return 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)';
    }
  }};
  opacity: 0.3;
  animation: ${props => props.actionType === 'thinking' ? floating : 'pulse'} 2s infinite;
  z-index: -1;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.1;
    }
  }
  
  /* Ripple effect for action types */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: ${ripple} 3s infinite;
    opacity: 0.6;
  }
`

// Enhanced indicator bubble with icons
const EnhancedBubble = styled(IndicatorBubble)<{ actionType?: string }>`
  ${props => props.actionType === 'thinking' && `
    animation: ${floating} 2s infinite ease-in-out;
  `}
  
  ${props => props.actionType && `
    &::before {
      content: '';
      font-size: 14px;
      margin-right: 6px;
      ${(() => {
        switch (props.actionType) {
          case 'draw':
            return "content: '🃏';"
          case 'discard':
            return "content: '🗑️';"
          case 'replace':
            return "content: '🔄';"
          case 'peek':
            return "content: '👁️';"
          case 'swap':
            return "content: '🔀';"
          case 'thinking':
            return "content: '🤖';"
          case 'turn':
            return "content: '⭐';"
          default:
            return "content: '⚡';"
        }
      })()}
    }
  `}
  
  /* Shimmer effect for active actions */
  ${props => (props.actionType === 'draw' || props.actionType === 'replace') && `
    background: linear-gradient(90deg, 
      ${props.variant === 'success' ? '#10B981' : '#3B82F6'} 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      ${props.variant === 'success' ? '#059669' : '#1E40AF'} 100%);
    background-size: 200px 100%;
    animation: ${shimmer} 2s infinite;
  `}
`

export const ActionIndicator: React.FC<ActionIndicatorProps> = ({
  action,
  visible,
  position = 'top',
  variant = 'primary',
  actionType
}) => {
  return (
    <IndicatorContainer visible={visible} position={position} variant={variant}>
      <EnhancedBubble variant={variant} actionType={actionType}>
        <PulseEffect variant={variant} actionType={actionType} />
        {action}
      </EnhancedBubble>
    </IndicatorContainer>
  )
}