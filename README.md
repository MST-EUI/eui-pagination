# eui 组件模板

## Usage

```sh
render() {
  <div>
    <Pagination
      total={100}
      pageSize={10}
    />
  </div>
}
```

|参数|说明|类型|默认值|
|----|----|----|------|
|defaultCurrent|默认的当前页数|Number|1|
|current|当前页码|Number|undefined|
|total|总记录数|Number|0|
|pageSize|每页条数|Number|10|
|onChange|页码改变的回调|Function(current, pageSize)|-|
|showQuickJumper|是否可以快速跳转至某页|Bool / Object|false / {goButton: true}|
|simple|当添加该属性时，显示为简单分页|Object|null|
|size|尺寸|string(small)|null|

