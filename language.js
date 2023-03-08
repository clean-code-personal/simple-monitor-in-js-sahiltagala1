const messages = {
    en: {
      outOfRange: (criteria) => `${criteria} is out of range!`,
      temperature: 'Temperature',
      soc: 'State of Charge',
      chargeRate: 'Charge rate',
    },
    ge: {
      outOfRange: (criteria) => `${criteria} ist außerhalb des Bereichs!`,
      temperature: 'Temperatur',
      soc: 'Ladezustand',
      chargeRate: 'Ladegeschwindigkeit',
    },
    hi: {
        outOfRange: (criteria) => `${criteria} श्रृंखला के बाहर है!`,
        temperature: 'तापमान',
        soc: 'चार्ज स्थिति',
        chargeRate: 'चार्ज दर',
      },
      fr: {
        outOfRange: (criteria) => `${criteria} est en dehors de la plage!`,
        temperature: 'Température',
        soc: 'État de charge',
        chargeRate: 'Taux de charge',
      },
      kn: {
        outOfRange: (criteria) => `${criteria} ರೀತಿಯಲ್ಲಿ ಹೊಂದಿದೆ!`,
        temperature: 'ತಾಪಮಾನ',
        soc: 'ರಿಚರ್ಜ್ ಸ್ಥಿತಿ',
        chargeRate: 'ರಿಚರ್ಜ್ ದರ',
      },

  };
const lang= 'hi';

module.exports=messages[lang];