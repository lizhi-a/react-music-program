# 运行指令：
执行 `npm start`并访问http://localhost:3000

#  一、项目功能说明
1.	暂停、播放歌曲
2.	切换上一首、下一首歌曲
3.	拖动进度条改变播放进度
4.	随机播放、循环播放、单曲循环
5.	实时展示歌词
7.	切换不同分类的歌单、歌手、电台
8.	实现推荐、排行榜、歌单、主播电台、歌手、新碟上架板块的展示
# 二、最终效果
首页：
![在这里插入图片描述](https://img-blog.csdnimg.cn/28f4ff80666142a4b1e91958597e7428.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
排行榜：
![在这里插入图片描述](https://img-blog.csdnimg.cn/59af7de5f7444ba4a7f8daef47aef918.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
歌单：
![在这里插入图片描述](https://img-blog.csdnimg.cn/0a024eba400b42c79bc804c04cec0bcb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
主播电台：
![在这里插入图片描述](https://img-blog.csdnimg.cn/cd7af4aa123b47d8a5fa6f1ce2336642.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
歌手：
![在这里插入图片描述](https://img-blog.csdnimg.cn/98f9f8966819449aa876ff45da0e503d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
新碟上架：
![在这里插入图片描述](https://img-blog.csdnimg.cn/531aff496970424b8fa52e53f67d1c05.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_20,color_FFFFFF,t_70,g_se,x_16)
# 三、文件目录结构说明
![请添加图片描述](https://img-blog.csdnimg.cn/3a6e94c3c5ef4b03b16e0b57fa73e8bc.png)
 - assets：存放共用的css、font图标、image
- common：存放共用的资源，如数据、常量
- components：存放多个页面共享的组件
- pages：划分各个页面
- router：路由配置
- services：网络请求
- store：合并所有reducer
- utils：一些js的工具
# 四、项目技术栈
 - React 作为前端框架
 - Ant Design 作为前端UI框架
 - Redux 进行状态管理
 - Axios 进行网络请求
 - 通过调用网易云的API来获取数据
 - 使用 react-router-dom 的 Route, Switch 管理路由
 - 使用普通css 及 styled-component 编写 CSS
# 五、核心技术
## 1. 配置项目别名： @craco/craco
craco还可以进行wepback 进行自定义配置、antd 组件按需加载、支持 less等操作。不选择 npm run eject 是因为eject是不可逆操作。
 - 安装：`npm i @craco/craco`
 - 在package.json中的配置：
```javascript
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```
 - 根目录下创建 craco.config.js
 - 重启项目
## 2. 使用reset.css进行 css 重置
通过 `import './assets/css/reset.css'`引入。但 reset.css 存在一个很大的问题是它将所有的浏览器的默认样式清除，从而达到所有浏览器样式的统一的目的，但这么操作会导致浏览器原本的默认样式失去意义。比起 reset.css 我更倾向于使用 normalize.css 来统一样式， normalize.css 是在尽量保留浏览器的默认样式的基础上，不进行太多的重置，这样保留了有价值的默认值，它还可以模块化引入、修复了浏览器的一些 bug、没有复杂的继承链。
## 3.	使用CSS Sprites 精灵图
本次项目很多地方使用了CSS Sprites 精灵图技术，可以有效减少图片的请求次数，优化性能。
## 4. 使用 memo 包裹函数式组件，减少渲染次数
React.memo是一个高阶函数，与类组件里面的 PureComponent类似，它传递一个组件进去，返回一个可以记忆的组件，在 props 不变的情况下，这个被包裹的组件是不会重新渲染的，这样就减少了 render 的渲染次数，从而提高了性能。

```javascript
export default memo(function App() {
  return (
    <div className="App">
    </div>
   )
 })
```
## 5. AppHeader以及AppFooter的布局实现：
 - 使用 styled-components 编写css样式，通过 `import styled from 'styled-components'`引入css 文件
 - 导航栏使用flex布局
 - 导航栏前三项采用 路由跳转、后三项是链接跳转
 - 搜索栏使用了 **antd 的样式**，通过 `import { Input } from 'antd'`引入
 - 搜索图标使用了**antd 的图标库**，通过`import { SearchOutlined } from '@ant-design/icons'`引入
## 6.	推荐页轮播图采用 antd 的 Carousel走马灯组件完成
背景的模糊效果使用高斯模糊，在url后加上 `?imageView&blur=40x20` 实现
## 7.	自定义公共组件，实现组件的复用
以下内容都被抽取到` components目录`中。
![在这里插入图片描述](https://img-blog.csdnimg.cn/c26de374d4554400a3aae10f51b17a9a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/66f3302354794a859d0cf1b3b617e50a.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/90a36e595dd749e195256afe53bc7a2f.png =150x170)
## 8.	对于图片及播放次数也做了格式化处理
图片的处理：在 utils 目录的 format-utils 下编写 `getSizeImage` 函数，根据输入的参数来决定图片的大小
对数字的处理：在 utils 目录的 format-utils 下编写 `getCount` 函数，格式化歌曲播放数量，让用户可以更直观的知道播放次数
![在这里插入图片描述](https://img-blog.csdnimg.cn/8af43db6758b4f78be0590988c119f96.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbGl0Y2hpIGRyZWFt,size_19,color_FFFFFF,t_70,g_se,x_16)
## 9.	播放音乐板块
- **播放/暂停音乐**：采用了 html5 的 audio 标签实现，通过点击播放/暂停按钮实现歌曲的播放或暂停，通过isPlaying来获取当前播放状态，从而实现状态切换。
```javascript
  // 播放/暂停音乐
const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])
```
 - **通过 antd 的 Slider滑动条来改变播放进度**：通过Slider自带  `value={progress}` 属性获取当前播放进度，从而设置audio的播放进度。
```javascript
//进度改变触发onchange时间，调用该函数
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setProgress(value)
  }, [duration])
```
 - **获取当前状态，切换播歌类型**：
```javascript
// 获取状态中的播放类型
    sequence: state.getIn(['player', 'sequence']),
// 点击切换播放类型
<button className="sprite_playbar btn loop" onClick={changeSequence}></button>
// 改变播放类型
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) { currentSequence = 0 }
    dispatch(changeSequenceAction(currentSequence))
  }
```
 - 使用 `isChanging, setIsChanging  = useState(false)`，来判断当前进度条是否正在改变，以便于当用户正在播放音乐并滑动滚动条时，滚动条可以滑动
 - **利用 antd 的 Slider组件 自带的onChange**和**onAfterChange**的属性可以得到进度条滑动的位置和滑动后结束的位置
 - **使用useCallback减少渲染次数**：
原理：把函数以及依赖项作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，这个 memoizedCallback 只有在依赖项有变化的时候才会更新。
例如：
```javascript
// 播放歌曲进度条部分
// 滑动中的位置
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    // 滑动滚动条时，实时更新时间的改变
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setProgress(value)
  }, [duration])
// 滑动后的位置
  const sliderAfterChange = useCallback((value) => {
	//滑动进度条后的进度条时间
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
     // 重新更新进度条时间
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)
	//如果没有播放音乐，当滑动滚动条后开始播放音乐
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])
```
## 10.	歌词的处理
 - 实现：展示歌词部分使用的是 antd的 **Message全局提示**
 - 原理：先获取到这首歌的全部歌曲，在 `utils/parse-lyric`下格式化歌词，原理就是将字符串转为数组，数组的每一项为 一个对象` { time, content }`包含了时间及该时间的歌词。

# 六、遇到的问题
1.	背景图片不能正常显示：

源代码：
```javascript
 background-image: url(${require("@/assets/img/recommend-top-bg.png")});
```
 解决方法：为图片添加.default
```javascript
 background-image: url(${require("@/assets/img/recommend-top-bg.png").default});
```
2.	编写代码过程中无法将数据存储到redux的state中，但是看了react devtools 发现代码能够正常执行到action部分，在我编写了两遍 actionCreators.js 和 reducer.js 后发现是因为我没有在总的 store 中合并 reducer，留下悲伤的泪水。
3.	滑动播放音乐的进度条时，进度条会短暂的回弹到滑动前位置。
错误原因：在获取当前音乐播放时间时，利用`setCurrentTime(e.target.currentTime * 1000)`，但是`e.target.currentTime`无法更加实时的获得当前滑动的数据，所以出现回弹。
 解决方法：在滑动结束后的回调函数冲重新更新进度条时间。
```javascript
  const sliderAfterChange = useCallback((value) => {
  	// 获取滑动进度条后的进度条时间
    const currentTime = value / 100 * duration / 1000
    // 设置当前时间
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
  }, [duration])
```
# 七、github链接
[react仿写网易云音乐项目](https://github.com/lizhi-a/react-music-program)
