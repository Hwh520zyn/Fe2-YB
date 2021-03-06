import React, { Component } from 'react'
import styleCss from './downloadBottom.css'
/**
 * 底部固定下载tabbar
 */
// 用法
// <DownloadBottom />

export default class DownloadBottom extends Component{
    handleDownBtn(){
        window.location.href = 'https://wechat.youbeichefu.com/download.htm'
    }
    render(){
        return(
            <div>
                <div className={styleCss.buy_main}>
                    <div className={styleCss.bottom_logo_box}>
                        <img src={ require('../../assets/img/downloadBottom/logo_new.png') } alt=""  className={styleCss.bottom_logo} />
                    </div>
                    <div className={`${styleCss.buy} ${styleCss.bottomCenter}`}>
                        <p>用油呗养车，尽享优惠</p>
                        <p>加油低至8折起，还有各类养车优惠券免费领~</p>
                    </div>
                    <div className={styleCss.down_btn} onClick={ e => this.handleDownBtn() }>
                            下载油呗
                    </div>
                </div>
            </div>
        )
    }
}