module.exports = {
    theme: {
      fontSize: {
        'xs': 'var(--ft-text-xs)',
        'sm': 'var(--ft-text-sm)',
        'base': 'var(--ft-text-base)',
        'lg': 'var(--ft-text-lg)',
        'xl': 'var(--ft-text-xl)',
        '2xl': 'var(--ft-text-2xl)',
        '3xl': 'var(--ft-text-3xl)',
        '4xl': 'var(--ft-text-4xl)',
        '5xl': 'var(--ft-text-5xl)',
        '6xl': 'var(--ft-text-6xl)',
        '7xl': 'var(--ft-text-7xl)',
        '8xl': 'var(--ft-text-8xl)',
        '9xl': 'var(--ft-text-9xl)',
      },
      extend: {
        aspectRatio: {
            'landscape':	'4 / 3',
            'portrait':  	'3 / 4', 
            'ultrawide': 	'18 / 5',
            'golden': 	'1.6180 / 1',
            'rrss': 	 	'1.91 / 1',
         },
        spacing: {
            '4xs': 		'var(--ft-space-4xs)',
            '3xs': 		'var(--ft-space-3xs)',
            '2xs': 		'var(--ft-space-2xs)',
            'xs':  		'var(--ft-space-xs)',
            'sm':  		'var(--ft-space-sm)',
            'md':  		'var(--ft-space-md)',
            'lg':  		'var(--ft-space-lg)',
            'xl':  		'var(--ft-space-xl)',
            '2xl': 		'var(--ft-space-2xl)',
            '3xl': 		'var(--ft-space-3xl)',
            '4xl': 		'var(--ft-space-4xl)',
            'jumbotron': 	'var(--ft-space-jumbotron)',
        },
        gridTemplateColumns: {
            '1-2': 'minmax(0, 1fr) minmax(0, 2fr)',
            '2-1': 'minmax(0, 2fr) minmax(0, 1fr)',
            '1-3': 'minmax(0, 1fr) minmax(0, 3fr)',
            '3-1': 'minmax(0, 3fr) minmax(0, 1fr)',
            '1-4': 'minmax(0, 1fr) minmax(0, 4fr)',
            '4-1': 'minmax(0, 4fr) minmax(0, 1fr)',
            '2-3': 'minmax(0, 2fr) minmax(0, 3fr)',
            '3-2': 'minmax(0, 3fr) minmax(0, 2fr)',
            '1-2-1': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
            '1-1-2': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr)',
            '2-1-1': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
            '2-1-2': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 2fr)',
            '2-2-1': 'minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr)',
            '1-3-1': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr)',
            '1-1-3': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 3fr)',
            '3-1-1': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr)',
            '1-3-2': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr)',
            '2-3-1': 'minmax(0, 2fr) minmax(0, 3fr) minmax(0, 1fr)',
            '1-2-3': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 3fr)',
            '2-1-3': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 3fr)',
            '3-2-1': 'minmax(0, 3fr) minmax(0, 2fr) minmax(0, 1fr)',
            '3-1-2': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 2fr)',
            '1-4-1': 'minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)',
            '1-1-4': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 4fr)',
            '4-1-1': 'minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr)',
        },
        borderRadius: {
            'custom': 'var(--ft-rounded-custom)',
        },
        borderWidth: {
            '3': 		'3px',
            '5': 		'5px',
            '6': 		'6px',
            '7': 		'7px',
            'custom':	'var(--ft-border-custom)',
        },     
      },
    },
  };
  