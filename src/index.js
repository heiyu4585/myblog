import React from 'react';
import ReactDOM from 'react-dom';
import '@scss/index.scss'


const Header = () => {
    return (
        <header>
            <section className="head-warp">
                <h1>思雨博客</h1>
                <h2>关注前端技术</h2>
                <ul>
                    <li>技术</li>
                    <li>轮子库</li>
                    <li>关于我</li>
                </ul>
            </section>
        </header>
    )
}

const Maincontent = () => {
    return (
        <div className={"leftList"}>
            <ul>
                <li>
                    <h3>知识点新</h3>
                    <p>
                        知识点: 小的知识点即已完成梳理的不足以单开文章的小知识点.
                        inline-block元素设置overflow:hidden属性导致相邻行内元素向下偏移
                        vertical-align: bottom
                        参考
                        setTimout(()=>{},0) 有什么用
                        setTimeout(fn, 0)... </p>
                </li>
                <li>

                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
const Index = () => {
    return (
        <div className="warp">
        <Header/>
        <Maincontent/>
        Hello React!2222
        </div>);
};

ReactDOM.render(<Index/>, document.getElementById('index'));