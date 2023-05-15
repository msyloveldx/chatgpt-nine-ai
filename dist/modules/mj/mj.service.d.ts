import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { UploadService } from './../upload/upload.service';
import { MjDrawDto } from './dto/mjDraw.dto';
import { ChatLogService } from '../chatLog/chatLog.service';
import { Request } from 'express';
import { MjEnlargeImgDto } from './dto/mjEnlargeImg.dto';
import { ChatLogEntity } from '../chatLog/chatLog.entity';
import { Repository } from 'typeorm';
import { BalanceEntity } from '../userBalance/balance.entity';
import { MjTransformImgDto } from './dto/mjTransform.dto';
export declare class MjService {
    private readonly chatLogEntity;
    private readonly balanceEntity;
    private readonly uploadService;
    private readonly chatLogService;
    private readonly globalConfigService;
    constructor(chatLogEntity: Repository<ChatLogEntity>, balanceEntity: Repository<BalanceEntity>, uploadService: UploadService, chatLogService: ChatLogService, globalConfigService: GlobalConfigService);
    private rateLimits;
    private drawWorking;
    private enlargeWorking;
    private queueCount;
    private freeQueueUsers;
    draw(body: MjDrawDto, req: Request): Promise<unknown>;
    upscaleSingleImg(body: MjEnlargeImgDto, req: Request): Promise<unknown>;
    variationSingleImg(body: MjTransformImgDto, req: Request): Promise<unknown>;
    sendSmInteractions(params: any): Promise<void>;
    pollForUpscaleResult(params: any): Promise<any>;
    pollForVariationResult(params: any, historyVariationIds: any): Promise<any>;
    findCurrentEnlargeImgResult(messageList: any, params: any): Promise<any>;
    findCurrentVariationImgResult(messageList: any, params: any, historyVariationIds: any): Promise<any>;
    sendDrawInteractions(prompt: any, histroyMessageIds: any): Promise<any>;
    pollForResult(prompt: any, histroyMessageIds: any): Promise<any>;
    findCurrentPromptResult(data: any, prompt: any, histroyMessageIds: any): Promise<any>;
    queryMessageList(): Promise<any>;
    sleep(ms: any): Promise<unknown>;
    extractContent(str: string): {
        prompt: string;
        order: number;
    } | null;
    getMjDefaultParams(): Promise<{
        application_id: any;
        guild_id: any;
        channel_id: any;
        session_id: any;
        version: any;
        id: any;
        authorization: any;
        mjRateLimit: any;
        mjProxy: any;
    }>;
    removeEmoji(str: any): any;
    checkAuth(req: any): Promise<void>;
    checkFree(req: any): Promise<void>;
    checkRateLimit(req: Request): Promise<boolean>;
    deductBalance(req: Request): Promise<void>;
}
