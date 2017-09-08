import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';

import { StorageService } from './services/storage.service';
import { ServerStorage } from './services/serverStorage';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ],
    providers: [
        { provide: StorageService, useClass: ServerStorage }
    ]

})
export class AppModule {
}
