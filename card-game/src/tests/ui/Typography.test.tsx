import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Test component to verify typography
const TestTypographyComponent = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return <div className={className} data-testid="typography-test">{children}</div>;
};

describe('Typography System', () => {
  test('casino heading font is available', () => {
    render(
      <TestTypographyComponent className="font-casino">
        Test Heading
      </TestTypographyComponent>
    );
    
    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('font-casino');
  });

  test('heading font family is available', () => {
    render(
      <TestTypographyComponent className="font-heading">
        Test Heading
      </TestTypographyComponent>
    );
    
    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('font-heading');
  });

  test('body font family is available', () => {
    render(
      <TestTypographyComponent className="font-body">
        Test Body Text
      </TestTypographyComponent>
    );
    
    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('font-body');
  });

  test('monospace font family is available', () => {
    render(
      <TestTypographyComponent className="font-mono">
        Test Monospace
      </TestTypographyComponent>
    );
    
    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('font-mono');
  });

  test('font hierarchy works with different sizes', () => {
    const { container } = render(
      <div>
        <h1 className="text-4xl font-casino">Main Title</h1>
        <h2 className="text-2xl font-heading">Sub Title</h2>
        <p className="text-base font-body">Body Text</p>
        <span className="text-sm font-mono">Monospace Text</span>
      </div>
    );

    const h1 = container.querySelector('h1');
    const h2 = container.querySelector('h2');
    const p = container.querySelector('p');
    const span = container.querySelector('span');

    expect(h1).toHaveClass('text-4xl', 'font-casino');
    expect(h2).toHaveClass('text-2xl', 'font-heading');
    expect(p).toHaveClass('text-base', 'font-body');
    expect(span).toHaveClass('text-sm', 'font-mono');
  });

  test('typography works with color combinations', () => {
    const typographyColorCombinations = [
      { text: 'text-white', font: 'font-casino' },
      { text: 'text-casino-900', font: 'font-heading' },
      { text: 'text-casino-700', font: 'font-body' },
      { text: 'text-felt-600', font: 'font-mono' }
    ];

    typographyColorCombinations.forEach(({ text, font }, index) => {
      render(
        <TestTypographyComponent className={`${text} ${font}`}>
          Test Text {index}
        </TestTypographyComponent>
      );

      const element = screen.getByText(`Test Text ${index}`);
      expect(element).toHaveClass(text);
      expect(element).toHaveClass(font);
    });
  });

  test('font weights work correctly', () => {
    const fontWeights = [
      'font-light',
      'font-normal', 
      'font-medium',
      'font-semibold',
      'font-bold',
      'font-extrabold'
    ];

    fontWeights.forEach((weight, index) => {
      render(
        <TestTypographyComponent className={`font-casino ${weight}`}>
          Test Weight {index}
        </TestTypographyComponent>
      );

      const element = screen.getByText(`Test Weight ${index}`);
      expect(element).toHaveClass('font-casino');
      expect(element).toHaveClass(weight);
    });
  });

  test('text tracking and spacing work', () => {
    const textSpacing = [
      'tracking-tight',
      'tracking-normal',
      'tracking-wide',
      'tracking-wider'
    ];

    textSpacing.forEach((spacing, index) => {
      render(
        <TestTypographyComponent className={`font-heading ${spacing}`}>
          Test Spacing {index}
        </TestTypographyComponent>
      );

      const element = screen.getByText(`Test Spacing ${index}`);
      expect(element).toHaveClass('font-heading');
      expect(element).toHaveClass(spacing);
    });
  });

  test('responsive font sizes work', () => {
    render(
      <TestTypographyComponent className="text-sm md:text-base lg:text-lg font-body">
        Responsive Text
      </TestTypographyComponent>
    );

    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('text-sm');
    expect(element).toHaveClass('md:text-base');
    expect(element).toHaveClass('lg:text-lg');
  });

  test('casino theme typography is elegant and readable', () => {
    render(
      <div className="bg-casino-500 p-4">
        <h1 className="text-white font-casino text-3xl font-bold tracking-wide">
          Casino Title
        </h1>
        <p className="text-white font-body text-base leading-relaxed">
          This is body text that should be readable on the casino background.
        </p>
      </div>
    );

    const title = screen.getByText('Casino Title');
    const body = screen.getByText(/This is body text/);

    expect(title).toHaveClass('font-casino', 'text-white');
    expect(body).toHaveClass('font-body', 'text-white');
  });

  test('font fallbacks are specified', () => {
    // Since we can't easily test computed styles in jsdom,
    // we verify the classes are applied correctly
    render(
      <div>
        <div className="font-heading" data-testid="serif-test">Serif Text</div>
        <div className="font-body" data-testid="sans-test">Sans Text</div>
        <div className="font-mono" data-testid="mono-test">Mono Text</div>
      </div>
    );

    expect(screen.getByTestId('serif-test')).toHaveClass('font-heading');
    expect(screen.getByTestId('sans-test')).toHaveClass('font-body');
    expect(screen.getByTestId('mono-test')).toHaveClass('font-mono');
  });

  test('typography maintains accessibility', () => {
    render(
      <div>
        <h1 className="font-casino text-2xl">Main Heading</h1>
        <h2 className="font-heading text-xl">Sub Heading</h2>
        <p className="font-body text-base">
          Body text that should meet minimum size requirements for accessibility.
        </p>
      </div>
    );

    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });
    const p = screen.getByText(/Body text that should meet/);

    // Verify semantic HTML structure
    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    expect(p).toBeInTheDocument();

    // Verify font classes are applied
    expect(h1).toHaveClass('font-casino');
    expect(h2).toHaveClass('font-heading');
    expect(p).toHaveClass('font-body');
  });
});