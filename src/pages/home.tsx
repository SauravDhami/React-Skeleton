import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return <h1>hello there, this is home {t('Products')}</h1>
}

export default Home
