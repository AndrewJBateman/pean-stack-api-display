import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytBestsellersComponent } from './nyt-bestsellers.component';

describe('NytBestsellersComponent', () => {
  let component: NytBestsellersComponent;
  let fixture: ComponentFixture<NytBestsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytBestsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
