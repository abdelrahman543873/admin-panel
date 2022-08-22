import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('home')
  @Render('index')
  renderHome() {}

  @Get()
  @Render('pages/login')
  renderLogin() {}

  @Get('merchant-addition')
  @Render('layouts/merchant/merchant-addition')
  renderMerchantAddition() {}

  @Get('device-addition')
  @Render('layouts/merchant/device-addition')
  renderMerchantDeviceAddition() {}

  @Get('branch-addition')
  @Render('layouts/merchant/branch-addition')
  renderMerchantBranchAddition() {}
}
