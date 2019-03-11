import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app-shared';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {
  purchasers$: Observable<string[]>;
  settingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    const initialPurchaser = this.usersService.loadDefaultPurchaser() || '';
    this.settingsForm = this.fb.group({
      defaultPurchaser: [initialPurchaser, Validators.required],
    });
  }

  save() {
    const val = this.settingsForm.value;
    this.usersService.saveDefaultPurchaser(val.defaultPurchaser);
    this.router.navigate(['/']);
  }

}
