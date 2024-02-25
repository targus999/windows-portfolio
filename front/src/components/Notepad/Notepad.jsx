import React, { useState } from "react";

const Notepad = () => {
  const [text, setText] = useState(`SKILLS
  
FRONTEND
1.ReactJS
2.HTML
3.CSS(Bootstrap)
4.JSX
5.Penpot(UI/UX)
6.AngularJS

BACKEND
1.NodeJS
2.ExpressJS
3.Springboot
4.Javascript
5.MongoDB
6.WebSocket
7.KafkaJS

DEVOPS
1.Docker(Rancher/Docker desktop)
2.Kubernetes
3.Ansible

CLOUD
1.AWS(AWS Certified)
2.Azure Cloud(AZ-900 certified)

OTHERS
1.Linux(WSL/Ubuntu)
2.WebRTC
3.Augmented Reality
4.Unity3D
5.Python
6.C/C++

LINGUISTIC
1.English
2.Hindi
3.Malayalam
4.Japanese

IN NEAR FUTURE
1.GraphQL
2.Terraform
3.AWS S3/SNS
4.Typesript
5.React Native
6.
`);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ width: "700px", height: "500px" }}>
      <ul role="menubar">
        <li role="menuitem" tabindex="0">
          File
        </li>
        <li role="menuitem" tabindex="0">
          Edit
        </li>
        <li role="menuitem" tabindex="0">
          View
        </li>
        <li role="menuitem" tabindex="0">
          Help
        </li>
      </ul>
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "94%",
          fontFamily: "Courier New, monospace",
          fontSize: "14px",
          padding: "10px",
          boxSizing: "border-box",
          resize: "none",
        }}
      />
    </div>
  );
};

export default Notepad;
