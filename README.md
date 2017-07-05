# Angular.js@v-1.5.8
> 是一个动态web应用框架, 可以让你扩展html语法, 用于增强html的功能
[官网传送门](https://angularjs.org)
------
**版本选择:**
 + 4.x: 最新发布（待看）
 + 2.x: 稳定版
 + 1.5.x: **版
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
> 使用自定义指令, 有四种方式
1. 通过template来定义模板内容
2. 创建文件, 通过templateUrl指定该个文件
3. 在缓存中创建文件, 通过templateUrl指定该个文件
4. 在script标签内创建文件, 通过templateUrl指定该个文件

**自定义指令:**
1. 指定指令适用的范围
2. 指令的功能
3. 指令的命名: 驼峰法,如```helloWorld```
4. 指令的使用格式: 用连接符号"-",如```hello-world```
5. 指令的创建 module.directive(指令名, 指令功能函数)
<hr>
**使用自定义指令有四种方式**
1. 属性: 在任意元素中添加属性
```<div hello-world></div>```
2. 元素: 元素以指令名命名
```<hello-world></hello-world>```
3. 类: 类名以指令名命名
```<div class="hello-world"></div>```
4. 注释: directive:指令名
注: 注释要配合replace: true使用
```<!--directive:hello-world -->```

### 通过template来定义模板内容的核心代码
```
//获取angularjs适用的范围(即: 获取当前ng-app这个模块)
//参数1: 当前ng-app的名字(模块名)
//参数2: 数组类型, 内部写当前模块所依赖的其他模块名
var module = angular.module("myApp", []);

//创建自定义指令
//module.directive(指令名, 指令功能函数)
module.directive("helloWorld", function () {
    //返回一个对象(对象内部的key是固定的)
    return {
        //限制(对指令使用方式的限制)
        //E: element, 元素
        //A: attribute, 属性
        //C: class, 类
        //M: mark, 注释
        restrict: "ECMA",
        //replace:false, 在元素的内部, 放模板内容
        //replace:true, 用模板中的元素替换
        replace: true,
        //模板内容
        template: "<h1>你好, 自定义指令!</h1>"
    }
});
```
### 创建文件, 通过templateUrl指定该个文件
```
//当模板的内容过多时, 会使用下面的方式来定义指令
module.directive('sayHi', function () {
    return {
        //templateUrl: 通过指定模板文件的路径, 来加载内容
        templateUrl: '3-template.html'
    }
});
```

### 把模板存放在缓存中，提高模板的加载速度
```
//$templateCache: angularjs内置的一种服务, 用于缓存模板内容
module.run(function ($templateCache) {
    //在缓存中创建模板
    $templateCache.put("test.html", '<h1>做游戏</h1>');
});

module.directive('play', function () {
    return {
        templateUrl: 'test.html'
    }
});
```

### 在script标签内创建文件, 通过templateUrl指定该个文件
```
module.directive('byeBye', function () {
    return {
        templateUrl: 'aaa.html'
    }
});
<script type="text/ng-template" id="aaa.html">
    <h1>周六不下雨!</h1>
</script>
```

# 控制器（见4-contoller.html）
> angular的设计模式: MVC
M: Model, 数据模型, 视图显示的数据
V: View, 视图, 页面的展示
C: Controller, 控制器, 连接数据模型和视图

## 控制器的使用

* 在没有控制器之前，我们的实现方式如下：
```
<div>
    <input type="text" ng-model="name" ng-init="name = 'world'">
    <h1>Hello {{name}}!</h1>
</div>
```
* 有了控制器之后，我们的实现方式如下：

```
<div ng-controller="myCtrl">
    <input type="text" ng-model="name1">
</div>

<script>
    //获取当前的模块(即ng-app)
    var app = angular.module("myApp", []);
    //获取当前模块中的某个控制器
    app.controller("myCtrl", function ($scope) {
        //MVC中要求: 视图和数据模型之间的操作, 在controller中完成
        $scope.name1 = "呵呵";
    });
</script>
```

## $scope简介
> $scope: 是视图(HTML)和控制器(JavaScript)连接的桥梁
1. $scope是一个对象
2. $scope作用域: 在Controller内部
3. 在Controller内部, 定义的变量是$scope的属性; 定义的方法是$scope的方法

## 向$scope对象上添加属性

```
<div ng-controller="myCtrl1">
    姓: <input type="text" ng-model="firstname"><br>
    名: <input type="text" ng-model="lastname">
    <div>{{fullname()}}</div>
</div>

<script>
    app.controller("myCtrl1", function ($scope) {
        $scope.firstname = "张";
        $scope.lastname = "三";
        $scope.fullname = function () {
            return $scope.firstname + $scope.lastname;
        }
    });
</script>
```

## $rootScope:连接多个控制器的桥梁

```
<div ng-controller="myCtrl2">
    喜欢吃的水果:
    <ul>
        <li ng-repeat="fruit in fruits">{{fruit}}</li>
    </ul>
</div>

<div ng-controller="myCtrl3">
    喜欢吃的水果:
    <ul>
        <li ng-repeat="fruit in fruits">{{fruit}}</li>
    </ul>
</div>

<script>
    //没有$rootScope的实现方式
    //$scope: 连接视图(html)和控制器(javascript)的桥梁
    app.controller("myCtrl2", function ($scope) {
        $scope.fruits = ["苹果", "石榴", "芒果"];
    });
    app.controller("myCtrl3", function ($scope) {
        $scope.fruits = ["香蕉", "橘子", "榴莲"];
    });

    //有$rootScope的实现方式
    app.controller("myCtrl2", function ($scope, $rootScope) {
        $rootScope.fruits = ["苹果", "石榴", "芒果"];
    });
    app.controller("myCtrl3", function ($scope, $rootScope) {
        $scope.fruits = $rootScope.fruits;
    });
</script>
```
# 过滤器（见5-filter.html）




