import React from 'react';
import { Modal } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import IStore from 'models/IStore';
import IModalState from 'stores/modal/models/IModalState';
import * as ModalAction from 'stores/modal/ModalAction';
import * as ModalSelector from 'selectors/modal/ModalSelector';

const mapState = (state: IStore) => ({
  modal: ModalSelector.modal(state),
});

const mapDispatch = { ...ModalAction };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector> & ReturnType<typeof Object>;

const AppModal: React.FC<PropsFromRedux> = ({ modal, modalClose }) => {
  if (!modal.length) return null;
  return modal.map((m: IModalState) => {
    const modalProps = {
      visible: true,
      footer: null,
      centered: true,
      closable: m.closable,
      title: m.title,
      width: m.width,
      key: `${Math.random()} ${m.id}`,
      onCancel: () => modalClose(m),
    };
    return <Modal {...modalProps}>{m.render()}</Modal>;
  });
};

const withModal = <P extends object>(ComposedComponent: React.ComponentType<P>) => {
  type Props = PropsFromRedux & P;

  const WithModal: React.FC<Props> = ({ modal, modalClose, ...rest }) => (
    <React.Fragment>
      <AppModal modal={modal} modalClose={modalClose} />
      <ComposedComponent {...(rest as P)} />
    </React.Fragment>
  );

  return connector(WithModal);
};

export default withModal;
