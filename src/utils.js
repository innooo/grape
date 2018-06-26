export const getRedirectPath = ({type, avatar}) => {
  let pathName = type === 'boss' ? '/boss' : '/ginus';
  // 判断是boss还是牛人，有没有个人信息
  if(!avatar) {
    pathName += 'info';
  }
  return pathName;
}