export default function() {
  return (navigator.userLanguage || navigator.language).replace(/-.+/, '')
}