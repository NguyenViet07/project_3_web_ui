import '@styles/base/pages/page-misc.scss'
import Result from "antd";
import Button from "antd";
import React from "react";

const Error = () => {
  return (
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
      />
  )
}
export default Error
