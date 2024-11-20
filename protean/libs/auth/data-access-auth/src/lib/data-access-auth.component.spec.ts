import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessAuthComponent } from './data-access-auth.component';

describe('DataAccessAuthComponent', () => {
  let component: DataAccessAuthComponent;
  let fixture: ComponentFixture<DataAccessAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
