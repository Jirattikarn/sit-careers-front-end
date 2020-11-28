module.exports = {
  purge: [
    './pages/*.tsx',
    './core/**/*.tsx',
    './features/**/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      prompt: ['Prompt Light', 'Prompt Medium', 'Prompt Regular', 'Prompt SemiBold'],
      sarabun: ['Sarabun Light', 'Sarabun Medium', 'Sarabun Regular', 'Sarabun SemiBold']
    },
    colors: {
      primary: '#295B8D',
      secondary1: '#168FBD',
      secondary2: '#6D6D6A',
      'grey-100': '#F5F5F5',
      white: '#ffffff'
    },
    fontSize: {
      'heading-1': '96px',
      'heading-2': '60px',
      'heading-3': '48px',
      'heading-4': '34px',
      'heading-5': '24px',
      'heading-6': '20px',
      'body-1': '18px',
      'body-2': '14px',
      'subtitle-1': '16px',
      'subtitle-2': '14px',
    },
    borderWidth: {
      DEFAULT: '1px',
    }
  },
  variants: {},
  plugins: [],
}
