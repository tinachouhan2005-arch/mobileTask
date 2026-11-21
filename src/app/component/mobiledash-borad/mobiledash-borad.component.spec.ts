import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledashBoradComponent } from './mobiledash-borad.component';

describe('MobiledashBoradComponent', () => {
  let component: MobiledashBoradComponent;
  let fixture: ComponentFixture<MobiledashBoradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledashBoradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiledashBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
