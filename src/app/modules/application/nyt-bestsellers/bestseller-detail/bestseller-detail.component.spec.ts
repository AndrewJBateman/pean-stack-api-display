import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerDetailComponent } from './bestseller-detail.component';

describe('BestsellerDetailComponent', () => {
  let component: BestsellerDetailComponent;
  let fixture: ComponentFixture<BestsellerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
