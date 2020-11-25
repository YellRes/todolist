import React, { Component } from 'react'
import './index.less'

class AutoScroll extends Component<any, any> {

  box: any;
  con1: any;
  con2: any;
  constructor(props: any) {
    super(props)
    this.box = React.createRef()
    this.con1 = React.createRef()
    this.con2 = React.createRef()
    
    this.state = {
      indexArr: [
        '测试评论测试评论测试评论测试评论测试评论1',
        '测试评论测试评论测试评论测试评论测试评论2',
        '测试评论测试评论测试评论测试评论测试评论3',
        '测试评论测试评论测试评论测试评论测试评论4',
        '测试评论测试评论测试评论测试评论测试评论5',
        '测试评论测试评论测试评论测试评论测试评论6',
        '测试评论测试评论测试评论测试评论测试评论7',
        '测试评论测试评论测试评论测试评论测试评论8',
        '测试评论测试评论测试评论测试评论测试评论9',
      ]
    }
  }

  componentDidMount() {

    let box: any = this.box.current
    let con1: any = this.con1.current
    let con2: any = this.con2.current
    con2.innerHTML = con1.innerHTML

    setInterval(() => {

      if (box.scrollTop >= con1.scrollHeight) {
        box.scrollTop = 0
      } else {
        box.scrollTop++
      }
      
    }, 50)
    
  }


  
  render() {
    const { indexArr } = this.state
    
    return (
      <div className={'container'} id="box" ref={this.box}>
        
        <div className="scroll_up" id="con1" ref={this.con1}>

          {
            indexArr.map((item: any, index: number) => (
              <p className={`message_item `} key={index}>
                {item} + {index}
              </p>
            ))
          }
          
        </div>

        <div className="scroll_up" id="con2" ref={this.con2}>

        </div>



      </div>
    )
  }

}


export default AutoScroll