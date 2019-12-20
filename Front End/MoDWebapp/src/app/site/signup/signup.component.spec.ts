import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule,FormsModule, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty',()=>{
    expect(component.signupForm.valid).toBeFalsy();
  });
  
  it('component variables to be initilized', () => {
    expect(component.newUserFlag).toBeFalsy();
    expect(component.signupForm.value.userName).toBeNull();
    expect(component.signupForm.value.password).toBeNull();
    expect(component.signupForm.value.email).toBeNull();
    expect(component.signupForm.value.contactNumber).toBeNull();
  });

  it('created a form with username and password with login button', () => {
    const userNameContainer = fixture.debugElement.nativeElement.querySelector('#userName');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password');
    const contactContainer = fixture.debugElement.nativeElement.querySelector('#contactNumber');
    const emailContainer = fixture.debugElement.nativeElement.querySelector('#email');

    expect(userNameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(contactContainer).toBeDefined();
    expect(emailContainer).toBeDefined();
  });

  xit('button loading', () => {
    expect(fixture.debugElement.query(By.css('button')).properties.disabled).toBeFalsy();
  });

 
});
