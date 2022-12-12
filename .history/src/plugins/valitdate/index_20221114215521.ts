import * as v from 'vee-validate'
import * as rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'


Object.keys(rules).forEach(rule => {
  v.configure(rule,rules[rule])   
})
configure({
	generateMessage: localize('zh_CN', zh_CN),
});

export default {}