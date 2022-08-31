import { Controller, Post, Req } from "@nestjs/common";
import { TwoFactorAuthService } from "./twoFactorAuth.service";

@Controller('2fa')
export class TwoFactorAuthController {
  constructor(private readonly twoFactorAuthService: TwoFactorAuthService) {}

  @Post('generate')
  async register(@Req() request) {
    console.log('Generate for: ', request.user.username);
    const { otpUrl } = await this.twoFactorAuthService.generateSharedSecretAndUrl(request.user);

    const qrCode = await this.twoFactorAuthService.generateQRCodeSVG(otpUrl);
    return qrCode;
  }
}