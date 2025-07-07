// Basic setup test to ensure testing framework is working
import { describe, it, expect } from 'vitest'

describe('Test Setup', () => {
  it('should have working test environment', () => {
    expect(true).toBe(true)
  })

  it('should have access to jest-dom matchers', () => {
    const element = document.createElement('div')
    element.textContent = 'Hello World'
    document.body.appendChild(element)
    
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Hello World')
  })

  it('should support TypeScript', () => {
    const testObject: { name: string; count: number } = {
      name: 'test',
      count: 42,
    }
    
    expect(testObject.name).toBe('test')
    expect(testObject.count).toBe(42)
  })
})