import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dev'

interface ButtonProps {
  variant?: ButtonVariant
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '8px 16px'
      case 'large': return '16px 32px' 
      default: return '12px 24px'
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '14px'
      case 'large': return '18px'
      default: return '16px'
    }
  }};
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid;
  position: relative;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Enhanced accessibility */
  &:focus {
    outline: none;
    ring: 3px solid rgba(255, 255, 255, 0.5);
    ring-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    pointer-events: none;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
          color: white;
          border-color: #1E40AF;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #1E3A8A;
          }
          
          &:focus {
            ring-color: rgba(59, 130, 246, 0.7);
          }
        `;
      case 'success':
        return `
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: white;
          border-color: #047857;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #065F46;
          }
          
          &:focus {
            ring-color: rgba(16, 185, 129, 0.7);
          }
        `;
      case 'warning':
        return `
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: white;
          border-color: #B45309;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          animation: ${props.variant === 'warning' ? 'warningPulse 3s infinite' : 'none'};
          
          &:hover {
            background: linear-gradient(135deg, #D97706 0%, #B45309 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #92400E;
            animation: none;
          }
          
          &:focus {
            ring-color: rgba(245, 158, 11, 0.7);
          }
          
          @keyframes warningPulse {
            0%, 100% { 
              box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
            }
            50% { 
              box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3);
            }
          }
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          color: white;
          border-color: #B91C1C;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(239, 68, 68, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #991B1B;
          }
          
          &:focus {
            ring-color: rgba(239, 68, 68, 0.7);
          }
        `;
      case 'dev':
        return `
          background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
          color: white;
          border-color: #374151;
          font-size: 14px;
          padding: 10px 20px;
          box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          
          &:hover {
            background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 6px 18px rgba(107, 114, 128, 0.4), 0 3px 9px rgba(0, 0, 0, 0.3);
            opacity: 1;
          }
          
          &:focus {
            ring-color: rgba(107, 114, 128, 0.7);
          }
        `;
      case 'secondary':
      default:
        return `
          background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
          color: white;
          border-color: #374151;
          box-shadow: 0 6px 20px rgba(107, 114, 128, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(107, 114, 128, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #1F2937;
          }
          
          &:focus {
            ring-color: rgba(107, 114, 128, 0.7);
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.size) {
        case 'small': return '6px 12px'
        case 'large': return '14px 28px'
        default: return '10px 20px'
      }
    }};
    font-size: ${props => {
      switch (props.size) {
        case 'small': return '13px'
        case 'large': return '16px'
        default: return '15px'
      }
    }};
    border-radius: 12px;
    
    ${props => props.variant === 'dev' && `
      padding: 8px 16px;
      font-size: 13px;
    `}
  }
  
  @media (max-width: 480px) {
    padding: ${props => {
      switch (props.size) {
        case 'small': return '4px 8px'
        case 'large': return '12px 24px'
        default: return '8px 16px'
      }
    }};
    font-size: ${props => {
      switch (props.size) {
        case 'small': return '12px'
        case 'large': return '15px'
        default: return '14px'
      }
    }};
    border-radius: 10px;
    
    ${props => props.variant === 'dev' && `
      padding: 6px 12px;
      font-size: 12px;
    `}
  }
`