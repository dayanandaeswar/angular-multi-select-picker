import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialCommonModule } from './material/material.module';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        MaterialCommonModule,
    ],
    exports: [
        MaterialCommonModule,
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class SharedModule { }