exports.validate = function (formData) {
  let passage = true
  //name
  let nameError = ''
  const nameRequired = requiredCheck(formData.restaurantName)
  const nameMaxLength = maxLengthCheck(formData.restaurantName, 50)
  if (!nameRequired) nameError += '・店舗名を入力してください。\n'
  if (!nameMaxLength) nameError += '・店舗名は50文字以内で入力してください。\n'
  //email
  let emailError = ''
  const emailRegex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  const emailRequired = requiredCheck(formData.restaurantEmail)
  if (!emailRequired) emailError += '・店舗メールアドレスを入力してください。\n'
  if (emailRequired && !emailRegex.test(formData.restaurantEmail))
    emailError += '・店舗メールアドレスの形式が不正です。\n'
  //postNumber
  let postNumberError = ''
  const postNumberRegex = /[0-9]{7}/
  const postNumberRequired = requiredCheck(
    formData.restaurantPostNumber.replace(/-/g, ''),
  )
  if (!postNumberRequired)
    postNumberError += '・店舗郵便番号を入力してください。\n'
  if (
    postNumberRequired &&
    !postNumberRegex.test(formData.restaurantPostNumber.replace(/-/g, ''))
  )
    postNumberError += '・店舗郵便番号の形式が不正です。\n'
  //address
  let addressError = ''
  const addressRequired = requiredCheck(formData.address)
  if (!addressRequired) addressError += '・住所1を入力してください。\n'
  //addressAfter
  let addressAfterError = ''
  const addressAfterMaxLength = maxLengthCheck(formData.addressAfter, 50)
  if (!addressAfterMaxLength)
    addressAfterError += '・以降の住所は50文字以内で入力してください。\n'
  //tel
  let telError = ''
  const telRegex = /^0\d{9,10}$/
  const telRequired = requiredCheck(formData.restaurantTel.replace(/-/g, ''))
  if (!telRequired) telError += '・店舗電話番号を入力してください。\n'
  if (telRequired && !telRegex.test(formData.restaurantTel.replace(/-/g, '')))
    telError += '・店舗電話番号の形式が不正です。\n'

  if (
    nameError ||
    emailError ||
    postNumberError ||
    addressError ||
    addressAfterError ||
    telError
  )
    passage = false
  const returnDatas = {
    validate: passage,
    nameError: nameError,
    emailError: emailError,
    postNumberError: postNumberError,
    addressError: addressError,
    addressAfterError: addressAfterError,
    telError: telError,
  }
  return returnDatas
}
function requiredCheck(e) {
  if (e.length === 0) return false
  return true
}
function maxLengthCheck(e, max) {
  if (e.length > max) return false
  return true
}
