import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaListarComponent } from './comida-listar.component';

describe('ComidaListarComponent', () => {
  let component: ComidaListarComponent;
  let fixture: ComponentFixture<ComidaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
