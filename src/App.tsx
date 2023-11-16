import './App.css'
import './i18n/i18n'
import { useTranslation } from 'react-i18next';
import i18n from './i18n/i18n';


function App() {
  const { t } = useTranslation()
  
  const changeLang = (lang:string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('es')}>ES</button>
      <button onClick={() => changeLang('ca')}>CA</button>
    </>
  )
}

export default App