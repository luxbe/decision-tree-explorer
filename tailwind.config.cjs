const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					'primary': '#DB2777',
					'primary-focus': '#9D174D',
					'primary-content': '#ffffff',
					'secondary': '#E2E8F0',
					'secondary-focus': '#CBD5E1',
					'secondary-content': '#1E293B',
					'accent': '#E2E8F0',
					'accent-focus': '#CBD5E1',
					'accent-content': '#1E293B',
					'neutral': '#F1F5F9',
					'neutral-focus': '#E2E8F0',
					'neutral-content': '#1E293B',
					'base-100': '#ffffff',
					'base-200': '#F1F5F9',
					'base-300': '#E2E8F0',
					'base-content': '#1e2734',
					'info': '#1c92f2',
					'success': '#009485',
					'warning': '#ff9900',
					'error': '#ff5724',
					'--rounded-box': '.5rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '2rem',
					'--animation-btn': '.3',
					'--animation-input': '.3',
					'--btn-text-case': 'neutral',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px'
				},
				dark: {
					'primary': '#DB2777',
					'primary-focus': '#9D174D',
					'primary-content': '#ffffff',
					'secondary': '#1E293B',
					'secondary-focus': '#0F172A',
					'secondary-content': '#ffffff',
					'accent': '#1E293B',
					'accent-focus': '#0F172A',
					'accent-content': '#ffffff',
					'neutral': '#1E293B',
					'neutral-focus': '#0F172A',
					'neutral-content': '#ffffff',
					'base-100': '#0F172A',
					'base-200': '#1E293B',
					'base-300': '#334155',
					'base-content': '#ebecf0',
					'info': '#66c7ff',
					'success': '#87cf3a',
					'warning': '#e1d460',
					'error': '#ff6b6b',
					'--rounded-box': '.5rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '2rem',
					'--animation-btn': '.3',
					'--animation-input': '.3',
					'--btn-text-case': 'neutral',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px'
				}
			}
		]
	}
};
module.exports = config;
