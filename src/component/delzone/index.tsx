import React from 'react';
import './index.less'

interface Props {
  isShow: boolean
  onDragDel: Function
}

interface State {

}

class DelZone extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onDragDel = (e: any) => {

    this.props.onDragDel(e)
  }

  onDragOverDel = (e: any) => {
    e.preventDefault();
    
  }

  render () {
    const {isShow} = this.props;
    return (
      <div 
        className={`del_zone ${isShow ? null : 'is_show'}`}
        onDragOver={(e) => this.onDragOverDel(e)}
        onDrop={(e) => this.onDragDel(e)}
        >
        删除
      </div>
    )
  }
}

export default DelZone