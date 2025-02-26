import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescardComponent } from './servicescard.component';

describe('ServicescardComponent', () => {
  let component: ServicescardComponent;
  let fixture: ComponentFixture<ServicescardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicescardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
