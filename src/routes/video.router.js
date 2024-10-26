import express from 'express';
import { getListVideo, getTyppeDetails, getTyppeVideo, getVideoPage,getVideo } from '../controllers/video.controller.js';
import { middlewareToken, middlewareTokenAsyncKey } from '../config/jwt.js';

const videoRoutes =express.Router();
videoRoutes.get("/get-list-videos",getListVideo);
videoRoutes.get("/get-types",middlewareTokenAsyncKey,getTyppeVideo);
videoRoutes.get("/get-typpes-details/:typeID",getTyppeDetails);
videoRoutes.get("/get-video-page/:page/:size",getVideoPage);
videoRoutes.get("/get-video/:videoid",getVideo);

export default videoRoutes;