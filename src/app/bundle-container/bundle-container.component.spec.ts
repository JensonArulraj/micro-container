import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleContainerComponent } from './bundle-container.component';

describe('BundleContainerComponent', () => {
  let component: BundleContainerComponent;
  let fixture: ComponentFixture<BundleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
