/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestThreeComponent } from './testThree.component';

describe('TestThreeComponent', () => {
  let component: TestThreeComponent;
  let fixture: ComponentFixture<TestThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
