import React from 'react';

interface Props {
  message: string;
  type: 'success' | 'info' | 'danger';
}

const Notification: React.FC<Props> = ({ message, type }) => (
  <div className={`alert alert-${type}`} role="alert">
    {message}
  </div>
);

export default Notification;