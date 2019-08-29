(function(root,factory){
    if(typeof define === 'function'){
        define(function(){
            return factory;
        });
    }else if(typeof exports === 'object'){
        module.exports = factory;
    }else{
        root.breadcrumb = factory;
    }
})(this,function(option){
    /**
     * 根据树形结构，来获取子节点的面包屑路径
     * @param  {tree Array} arr     原始树形结构的arr数据
     * @param  {Number} selectedID  你所要查找到的id
     * @param  {Object} option      相关配置项
     * @return {Array}  arr         返回一个正序数组，如果没有则返回一个空数组
     */

    function getBreadcrumb(option){
        'use strict';
        var breadcrumbs = [],   // 节点数据集合
            topID = [],         // 顶层id集合
            data = '',          // 原始数据
            nodeArr = [],       // 节点集合
            idsArr = [],        // 节点id集合
            currentNode = '',   // 当前节点
            currentNodesChilds = ''; // 当前节点的子节点集合
        // 默认配置项
        
        var _default = {
            nodesName:"nodes",   // 默认子节点的集合为nodes
            paramName:'id',   // 默认根据id属性来查找
            // keyName:"text",

        };
        // 修改默认配置项
        if(option){
            for(var item in option){
                if(option[item]){
                   _default[item] = option[item]; 
                }
            } 
        }
        this.author = '大馒头小咸菜';

        /**
         * [init description]
         * @param  {Array} arr        [数组集合]
         * @param  {String} selectedID [要朝赵的关键字：如id、href]
         * @return {Object}            [返回一个根据selectedID查找出的数据集合]
         */
        this.init = function(arr,selectedID){
            if(!Array.isArray(arr)) {
                console.log('不是数组')
                return false;
            }
            topID = [];        // 顶层id集合
            breadcrumbs = [];
            idsArr = [];
            nodeArr = [];
            selectedID = typeof selectedID === "string"?selectedID:selectedID?selectedID.toString():null;
            data = arr;    // 原始数据
            console.log('%c _default selectedID = %c' +selectedID,'color:#123456;background:#abcdef','color:#123456;background:#abcdef')
            for(var j = 0;j<arr.length;j++){
                topID.push(arr[j][_default.paramName]);
            }
            console.log(topID)
            var _get = getNodeParent(arr,selectedID);
            return {
                breadcrumbsArr:_get.bs,
                nodesArr:_get.ns,
                idsArr:_get.ids,
                currentNode:_get.cn,
                currentNodesChilds:_get.cnc
            };
        };

        // 获取节点父级
        function getNodeParent (arr,selectedID){
            // console.log('%c getNodeParent selectedID 5555  =' +selectedID,'color:#595;');
            var i = 0;
            var l = arr.length;
            while (i<l){
                var thisNode = arr[i][_default.paramName];
                var _parame = thisNode?typeof thisNode === "string"?thisNode:thisNode.toString():arr[i].id||arr[i].name;

                if(_parame === selectedID){
                    // console.log('%c getNodeParent selectedID 0000  = ' +selectedID,'color:blue;');
                    // 如果相同 ，就插入arr，并终止；
                    if(breadcrumbs.indexOf(arr[i][_default.paramName])<0){
                        breadcrumbs.unshift(arr[i][_default.paramName]);
                        nodeArr.unshift(arr[i]);
                        idsArr.unshift(arr[i].id||arr[i].name);
                        currentNode = arr[i];
                        currentNodesChilds = arr[i][_default.nodesName]&&arr[i][_default.nodesName].length?arr[i][_default.nodesName]:'';
                    }
                    break;
                }else{
                    // console.log('%c change selectedID 2222 = '+selectedID,'color:#d8d');
                    // 如果不相同 ，就判断子集
                    if(arr[i][_default.nodesName] && arr[i][_default.nodesName].length){
                        // 如果有子集
                        var state = isParent(arr[i][_default.nodesName],selectedID);
                        if(state){
                            // 获取当前的父节点，如果在数组里已经存在就不添加
                            if(breadcrumbs.indexOf(arr[i][_default.paramName])<0){
                                breadcrumbs.unshift(arr[i][_default.paramName]);
                                nodeArr.unshift(arr[i]);
                                idsArr.unshift(arr[i].id||arr[i].name);
                            }
                            // 如果当前不是顶层，则继续调用
                            console.log('%c change _parame 3333 = '+_parame,'color:red');
                            console.log('%c change topID 3333 = '+topID,'color:red');
                            if(topID.indexOf(_parame)<0){
                                // console.log('%c change selectedID 3333 = '+selectedID,'color:red');
                                getNodeParent(data,_parame,selectedID);
                                // console.log('%c change selectedID 4444 = '+selectedID,'color:red');
                            }
                            break;
                        }else{
                            // 如果没有继续调用
                            // console.log('%c change selectedID 1111 = '+selectedID,'color:#abcdef')
                            getNodeParent(arr[i][_default.nodesName],selectedID);
                        }
                    }
                    // console.log('currentNode = ',currentNode);
                }

                i++;
            }

            return {
                bs:breadcrumbs,
                ns:nodeArr,
                ids:idsArr,
                cn:currentNode,
                cnc:currentNodesChilds
            };
        }

        // 判断是否是父级节点，返回 boolean
        function isParent(arr,selectedID){
            var i = 0;
            var state;
            
            
            while(i<arr.length){
                var thisNode = arr[i][_default.paramName];
                var _parame = thisNode?typeof thisNode === "string"?thisNode:thisNode.toString():arr[i].id||arr[i].name;
                if(_parame === selectedID){
                    // console.log('%c selectedID = %c'+selectedID,'background:#f0f;color:#ccc','background:#0a0;color:#fff');
                    // console.log('%c _parame = %c'+_parame,'background:#f0f;color:#ccc','background:#0a0;color:#fff');
                    // console.log('%c arr[i] = %c'+arr[i],'background:#f0f;color:#ccc','background:#0a0;color:#fff');
                    if(breadcrumbs.indexOf(arr[i][_default.paramName])<0){
                        breadcrumbs.unshift(arr[i][_default.paramName]);
                        nodeArr.unshift(arr[i]);
                        idsArr.unshift(arr[i].id||arr[i].name);
                        currentNode = arr[i];
                        currentNodesChilds = arr[i][_default.nodesName]&&arr[i][_default.nodesName].length?arr[i][_default.nodesName]:'';
                    }
                    state = true;
                    break;
                }
                i++;
            }
            return state;
        }

        // 公有方法
        return {
            init:this.init,
            author:this.author,
        };
    }
    var breadcrumb = new getBreadcrumb(option);
    return breadcrumb;

})