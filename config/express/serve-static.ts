import { Response } from "express";
import { ServeStaticOptions } from "serve-static";

export const serveStaticOptions: ServeStaticOptions<Response<any, Record<string, any>>> = {    
  index: 'music-quiz-api.html',
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now().toString());
    res.set('Access-Control-Allow-Origin', ['*']);
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
  }
}
