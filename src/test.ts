// 测试模块导入导出问题
import { sayHi } from './test1';
console.log(sayHi, 'LFR502');

function Test(a1: boolean, a2: string[] = ['ca', 'c2']): string {
    return 'ca';
}

const name: string = 'ca';

export default {
    name,
};
