import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSpamComponent } from './comp-spam.component';

describe('CompSpamComponent', () => {
  let component: CompSpamComponent;
  let fixture: ComponentFixture<CompSpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
