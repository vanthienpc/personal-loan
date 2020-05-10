import { ModalProps } from 'antd/lib/modal';

export default interface IModalState extends ModalProps {
  readonly id: string | number;
  readonly render: () => React.ComponentType;
}
