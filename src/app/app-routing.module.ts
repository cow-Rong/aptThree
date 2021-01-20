import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeComponent } from './component/three/three.component';
import { TestThreeComponent } from './component/testThree/testThree.component';
import { TestComponent } from './component/test/test.component';


const routes: Routes = [
    { path: '', component: TestThreeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
