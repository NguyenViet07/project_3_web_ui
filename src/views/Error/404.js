import {Result, Button} from "antd";
import React from "react";
import {Link} from "react-router-dom";

const Error = () => {
  return (
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '10%'}}>
          <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to={'/'} type="primary">Back Home</Link>}
          />
      </div>
  )
}
export default Error
