import WebSocket, { WebSocketServer } from 'ws';
import http from 'node:http';
import type { WsMessage } from './models/message.model.js';

export class Server {
  private readonly wsServer: WebSocketServer;
  private readonly httpServer: http.Server;

  constructor(httpServer: http.Server) {
    this.httpServer = httpServer;

    this.wsServer = new WebSocketServer({
      server: httpServer,
      port: 8080,
      perMessageDeflate: {
        zlibDeflateOptions: {
          // See zlib defaults.
          chunkSize: 1024,
          memLevel: 7,
          level: 3
        },
        zlibInflateOptions: {
          chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed if context takeover is disabled.
      }
    });

    this.setupEventHandlers();
  }

  setupEventHandlers () {
    this.wsServer.on('connection', ( ws ) => {
      // TODO: implement
      ws.on('error', console.error);
      
      ws.on('message', this.handleMessage)
    });

    this.wsServer.on('error', (error) => {
      console.error(`WS server error: ${error.message}`);
    })

    this.wsServer.on('close', () => {
      console.log('ws server closed');
    })
  }

  private async handleMessage(
    message: WsMessage
  ) {
    try {
      switch (message.type) {
        case 'reg': {
          
          break;
        }
        case 'create_game': {
          break;
        }
        case 'start_game': {
          break;
        }
        case 'turn': {
          break;
        }
        case 'attack': {
          break;
        }
        case 'finish': {
          break;
        }
        case 'update_room': {
          break;
        }
        case 'update_winners': {
          break;
        }
      }
    }
    catch(error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}