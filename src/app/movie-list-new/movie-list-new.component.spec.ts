import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListNewComponent } from './movie-list-new.component';

describe('MovieListNewComponent', () => {
  let component: MovieListNewComponent;
  let fixture: ComponentFixture<MovieListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
