import React from 'react';

import CommentsModal from './../commentsModal/commentsModal.js';

const ModalConductor = props => {
  if (props.state.showComments) {
    return <CommentsModal {...props}/>;
  } else {
    return null;
  }
};

export default ModalConductor;
