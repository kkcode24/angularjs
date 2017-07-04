# Angular.js@v-1.5.8
> 是一个动态web应用框架, 可以让你扩展html语法, 用于增强html的功能
[官网传送门](https://angularjs.org)
------
**版本选择:**
 + 4.x: 最新发布（待看）
 + 2.x: 最新版
 + 1.5.x: 稳定版
 + 1.2.x: 兼容IE8的版本

# git clone
> ```git clone https://github.com/kkcode24/angularjs.git```

# 指令
> 指令: 用于扩展HTML<br>
指令定义: 
	使用驼峰法命名, 系统的指令以ng开头, 比如: ngApp <br>
指令使用: 
	单词之间用"-"连接, 比如: ng-app

**指令的分类:**
+ 系统指令
+ 自定义指令

## 系统指令（见2-directive.html）
### ng-app
> 标记angularjs作用的范围, 例如: 在html元素中标记np-app, 代表html的整个区域都受angularjs的影响
注: ng-app一般一个页面出现一次
### ng-init
> 写表达式, 多用于初始化操作, 比如定义某个变量
```
<!--定义一个变量-->
<div ng-init="age = 18">
    年龄是{{age}}
</div>
<!--定义多个变量-->
<div ng-init="width = 10; height = 20">
    宽为:{{width}}, 高为:{{height}}
</div>
<!--定义数组-->
<div ng-init="arr = [1, 3, 5]">
    {{arr[0]}}<br>
    {{arr[1]}}<br>
    {{arr[2]}}
</div>
<!--定义对象-->
<div ng-init="person = {name: '张三', gender: '男', age: 18}">
    姓名: {{person.name}}<br>
    性别: {{person.gender}}<br>
    年龄: {{person.age}}
</div>
```
### ng-model
> 声明一个变量, 变量的数据和元素(input, textarea, select)的value绑定在一起, value改变, 变量也随之改变

**ng-model的原理:**
1. 当angular.js加载完成后, 首先找ng-app指令, 确定影响的范围
2. 执行作用范围内的指令(ng-model)
3. 生成数据模型, 并且把数据绑定在根作用域上
4. 在出现{{}}的位置, 将变量进行替换

```
<!--name和input.value是双向数据绑定-->
<input type="text" ng-model="name" ng-init="name = 'world'">
<div>Hello {{name}}!</div>
<!-- {{}}中除了写变量, 也可以写表达式 -->
<div>
    1 + 1 = {{1 + 1}}
</div>
<div>
    第一个数: <input type="number" ng-model="num1" ng-init="num1 = 0"><br>
    第二个数: <input type="number" ng-model="num2" ng-init="num2 = 0"><br>
    结果: {{num1}} + {{num2}} = {{num1 + num2}}
</div>
<!-- css样式 -->
 #color {
    background-color: rgb({{red}}, {{green}}, {{blue}});
}
<div>
    红: <input type="number" min="0" max="255" ng-model="red" ng-init="red = 0"><br>
    绿: <input type="number" min="0" max="255" ng-model="green" ng-init=" green = 0"><br>
    蓝: <input type="number" min="0" max="255" ng-model="blue" ng-init="blue = 0"><br>
    <div id="color" style="width: 100px; height: 100px;"></div>
</div>
```
### ng-bind
> {{表达式}}: 这种方式, 当网速比较慢时, 在没有加载完angular.js之前, 用户会看到该内容, 体验不好。解决方案: ng-bind

```
<div>
    <input type="text" ng-model="name1">
    <div>Hello {{name1}}!</div>
    <div>Hello <span ng-bind="name1"></span>!</div>
</div>
```
### ng-show&&ng-hide
> ng-show: 是否显示该元素, 值为Boolean型 <br>
ng-hide: 是否隐藏该元素, 值为Boolean型

```
<div ng-show="true">
    kkcode(krik)真帅!
</div>
<div ng-hide="true">
    kkcode(krik)好帅!
</div>
```

### ng-click
> 为元素关联事件

```
<!-- 1 -->
<div ng-init="result = true">
    <button ng-click="result = !result">显示/隐藏</button>
    <div>{{result}}</div>
    <div ng-show="result">kkcode(krik)真帅!</div>
</div>
<!-- 2 -->
<div ng-init="isRed = true">
    <button ng-click="isRed = !isRed">切换红色/蓝色</button>
    <div ng-show="isRed" style="width: 100px; height: 100px; background-color: red"></div>
    <div ng-hide="isRed" style="width: 100px; height: 100px; background-color: blue"></div>
</div>
<!-- 3 -->
<div ng-init="isBlue = true; obj = {true: 'blue', false: 'red'}">
    <button ng-click="isBlue = !isBlue">切换红色/蓝色</button>
    <div>{{obj[isBlue]}}</div>
    <div style="width: 100px; height: 100px;" class="{{obj[isBlue]}}"></div>
    <div style="width: 100px; height: 100px; background-color: {{obj[isBlue]}}"></div>
    <div style="width: 100px; height: 100px;" ng-class="{true: 'blue', false: 'red'}[isBlue]"></div>
</div>
注: 除指令(比如ng-init,ng-click)以外的其他位置, 在使用变量时, 需要加{{}}
指令和html属性的区别: 指令的内部可以添加逻辑代码
```

### ng-repeat
> 遍历数组, 重复创建元素

```
<div ng-init="arr1 = [101, 202, 303, 404]">
    <ul>
        <li ng-bind="arr1[0]"></li>
        <li ng-bind="arr1[1]"></li>
        <li ng-bind="arr1[2]"></li>
        <li ng-bind="arr1[3]"></li>
    </ul>
    <ul>
        <!--
        ng-repeat: 遍历数组, 重复创建元素
        -->
        <li ng-repeat="e in arr1">{{e}}</li>
    </ul>
    <ul ng-init="students = [{name: 'zhangsan', age: 18}, {name: '李四', age: 28}, {name: '王麻子', age: 38}]">
        <li ng-repeat="stu in students">
            姓名:{{stu.name}} 年龄:{{stu.age}}
        </li>
    </ul>

    <ul>
        <li ng-repeat="(key, value) in arr1">
            key:{{key}} value:{{value}}
        </li>
    </ul>

</div>
```

## 自定义指令（见3-custom-directive.html）
###





