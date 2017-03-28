if (window.CS === undefined) { window.CS = {}; }

(() => {

  const knightSource = {
    beginDrag(props) {
      return {};
    }
  };

  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }

  class Knight extends Component {
    render() {
      const { connectDragSource, isDragging } = this.props;
      return connectDragSource(
        <div style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move'
        }}>
          ♘
        </div>
      );
    }
  }
  CS.Knight = Knight;
})()

export DragSource(ItemTypes.KNIGHT, knightSource, collect)(CS.Knight);
