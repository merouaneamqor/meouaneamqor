/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myriad': ['Myriad Pro', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'ui-monospace', 'Monaco', 'monospace'],
        'sans': ['Myriad Pro', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Clean iOS Colors
        'ios': {
          'blue': '#007AFF',
          'gray': '#8E8E93',
          'gray-2': '#AEAEB2',
          'gray-3': '#C7C7CC',
          'gray-4': '#D1D1D6',
          'gray-5': '#E5E5EA',
          'gray-6': '#F2F2F7',
          'label': '#000000',
          'label-secondary': '#3C3C43',
          'label-tertiary': '#3C3C4399',
          'separator': '#3C3C434A',
          'background': '#FFFFFF',
          'background-secondary': '#F2F2F7',
        },
        // Xcode syntax highlighting colors
        'xcode': {
          'keyword': '#AD3DA4',        // Purple for keywords (class, func, let, var)
          'string': '#D12F1B',         // Red for strings
          'comment': '#65737E',        // Gray for comments
          'number': '#272AD8',         // Blue for numbers
          'type': '#3F6E75',           // Teal for types (Int, String, UIViewController)
          'function': '#4F8187',       // Dark teal for function names
          'property': '#326D74',       // Property names
          'constant': '#78492A',       // Brown for constants
          'operator': '#000000',       // Black for operators
          'plain': '#262626'           // Dark gray for plain text
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}