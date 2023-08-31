import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_info">
        <h2>Phuc Mai</h2>
        <div className="chat_info_icons">
          <img src="/assets/cam.png" alt="video call"/>
          <img src="/assets/add.png" alt="participants"/>
          <img src="/assets/more.png" alt="options"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat