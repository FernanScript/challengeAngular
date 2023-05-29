import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMasPage } from './ver-mas.page';

describe('VerMasPage', () => {
  let component: VerMasPage;
  let fixture: ComponentFixture<VerMasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerMasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
