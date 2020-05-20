import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerItemComponent } from './bestseller-item.component';

describe('BestsellerItemComponent', () => {
  let component: BestsellerItemComponent;
  let fixture: ComponentFixture<BestsellerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
