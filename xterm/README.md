## xTerm.js

## Websocket

- WebSocket (WS) is an asynchronous communication protocol that provides faster and more efficient lines of communication from client to server than traditional HTTP.

  - This is useful for highly interactive applications like live chats, streaming ser-vices, or games.
  - Like HTTP, WS runs on top of a TCP connection, but the advantage is that information can be passed back and forth while keeping the connection open (taking advantage of the browser's multiplexing capabilities and the keep-alive fea-ture).
  - The other benefit is that servers can send content to the browser without it explicitly requesting it.

- WS communication
  - It begins with a hand-shake, which bridges the world of HTTP to WS. At this time, details about the connection and security are discussed to pave the way for secure, efficient communication between the parties involved.
  - The steps taken between the client and the server are these:
  1. Establish a socket connection between parties for the initial handshake.
  2. Switch or upgrade the communication protocol from regular HTTP to a socket-based protocol.
  3. Send messages in both directions (known as full duplex).
  4. Issue a disconnect, via either the server or the client.
