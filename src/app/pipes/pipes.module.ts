// module required so date pipe can be used by more than one page
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DateConvertPipe } from './date-convert.pipe';
import { TitleNosourcePipe } from './title-nosource.pipe';

@NgModule({
	declarations: [DateConvertPipe, TitleNosourcePipe],
	imports: [CommonModule],
	exports: [DateConvertPipe, TitleNosourcePipe]
})

export class PipesModule {}
