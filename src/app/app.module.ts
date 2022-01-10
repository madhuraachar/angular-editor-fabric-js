import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FabricjsEditorModule } from "projects/angular-editor-fabric-js/src/public-api";
import { FormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";
import { CanvasScreenComponent } from "./canvas-screen/canvas-screen.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, CanvasScreenComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FabricjsEditorModule,
    FormsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
