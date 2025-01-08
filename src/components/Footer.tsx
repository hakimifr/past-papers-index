import config from '../../config/site.config'

const createFooterMarkup = () => {
  return {
    __html: config.footer[Math.floor(Math.random() * config.footer.length)],
  }
}

const Footer = () => {
  return (
    <div className="pb-16"></div>
    <div
      className="fixed bottom-0 left-0 w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30 bg-white dark:bg-gray-900 z-50"
      dangerouslySetInnerHTML={createFooterMarkup()}
    ></div>
  )
}

export default Footer
