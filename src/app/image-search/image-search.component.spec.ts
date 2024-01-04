import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageSearchComponent } from './image-search.component';

describe('ImageSearchComponent', () => {
  let component: ImageSearchComponent;
  let fixture: ComponentFixture<ImageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSearchComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
