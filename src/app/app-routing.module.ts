import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'pvt',
    loadChildren: () => import('./pvt/pvt.module').then( m => m.PvtPageModule)
  },
  {
    path: 'one-person',
    loadChildren: () => import('./one-person/one-person.module').then( m => m.OnePersonPageModule)
  },
  {
    path: 'lmtd',
    loadChildren: () => import('./lmtd/lmtd.module').then( m => m.LmtdPageModule)
  },
  {
    path: 'gst',
    loadChildren: () => import('./gst/gst.module').then( m => m.GstPageModule)
  },
  {
    path: 'pub-lmtd',
    loadChildren: () => import('./pub-lmtd/pub-lmtd.module').then( m => m.PubLmtdPageModule)
  },
  {
    path: 'section',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'trade-reg',
    loadChildren: () => import('./trade-reg/trade-reg.module').then( m => m.TradeRegPageModule)
  },
  {
    path: 'reply-trade',
    loadChildren: () => import('./reply-trade/reply-trade.module').then( m => m.ReplyTradePageModule)
  },
  {
    path: 'renew-trade',
    loadChildren: () => import('./renew-trade/renew-trade.module').then( m => m.RenewTradePageModule)
  },
  {
    path: 'licence-trade',
    loadChildren: () => import('./licence-trade/licence-trade.module').then( m => m.LicenceTradePageModule)
  },
  {
    path: 'sell-trade',
    loadChildren: () => import('./sell-trade/sell-trade.module').then( m => m.SellTradePageModule)
  },
  {
    path: 'cpy-rght',
    loadChildren: () => import('./cpy-rght/cpy-rght.module').then( m => m.CpyRghtPageModule)
  },
  {
    path: 'rply-cpyrght',
    loadChildren: () => import('./rply-cpyrght/rply-cpyrght.module').then( m => m.RplyCpyrghtPageModule)
  },
  {
    path: 'roc-trade',
    loadChildren: () => import('./roc-trade/roc-trade.module').then( m => m.RocTradePageModule)
  },
  {
    path: 'roc-opc',
    loadChildren: () => import('./roc-opc/roc-opc.module').then( m => m.RocOpcPageModule)
  },
  {
    path: 'roc-llp',
    loadChildren: () => import('./roc-llp/roc-llp.module').then( m => m.RocLlpPageModule)
  },
  {
    path: 'apptmnt',
    loadChildren: () => import('./apptmnt/apptmnt.module').then( m => m.ApptmntPageModule)
  },
  {
    path: 'resgn',
    loadChildren: () => import('./resgn/resgn.module').then( m => m.ResgnPageModule)
  },
  {
    path: 'chgaddrs',
    loadChildren: () => import('./chgaddrs/chgaddrs.module').then( m => m.ChgaddrsPageModule)
  },
  {
    path: 'inc-capital',
    loadChildren: () => import('./inc-capital/inc-capital.module').then( m => m.IncCapitalPageModule)
  },
  {
    path: 'closure',
    loadChildren: () => import('./closure/closure.module').then( m => m.ClosurePageModule)
  },
  {
    path: 'c-opc',
    loadChildren: () => import('./c-opc/c-opc.module').then( m => m.COpcPageModule)
  },
  {
    path: 'c-llp',
    loadChildren: () => import('./c-llp/c-llp.module').then( m => m.CLlpPageModule)
  },
  {
    path: 'iso',
    loadChildren: () => import('./iso/iso.module').then( m => m.IsoPageModule)
  },
  {
    path: 'msme',
    loadChildren: () => import('./msme/msme.module').then( m => m.MsmePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'startup',
    loadChildren: () => import('./startup/startup.module').then( m => m.StartupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
