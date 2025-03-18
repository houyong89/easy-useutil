/*
 * @Author: hy 531065591@qq.com
 * @Date: 2025-03-18 20:39:26
 * @LastEditors: hy 531065591@qq.com
 * @LastEditTime: 2025-03-18 20:41:25
 * @FilePath: /easy-useUtil/src/format.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Validate = {
    /**
     * 手机号校验
     */
    mobileCheck: (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value),
  
    /**
     * 身份证校验
     */
    IDCardCheck: (value) =>
      /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
        value
      ),
  
    /**
     * 邮箱校验
     */
    emailCheck: (value) =>
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),
  };
  
  export default Validate;