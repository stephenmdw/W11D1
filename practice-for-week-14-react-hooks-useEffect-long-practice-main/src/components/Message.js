import { useEffect, useState } from "react";
function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState()
  const [message, setMessage] = useState('')
  useEffect(()=> {
    let cn = ''
    switch (size) {
      default:
        cn = 'small';
        break;
      case 'm':
        cn = 'medium';
        break;
      case 'l':
        cn = 'large';
        break;
      case 'xl':
        cn = 'xlarge';
        break;
    }
    setSizeClass(cn)
  },[size])

  useEffect(()=> {
    if (featherCount <= 0) {
      setMessage('Your bird naked asl')
    } else if (featherCount >= 10) {
      setMessage('Bird is fully dripped out to the max')
    } else {
      setMessage('Loading drip...')
    }
  }, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
    { message }    
    </div>
  );
};

export default Message;