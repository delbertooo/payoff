import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app-shared';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) { }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    const initialPurchaser = this.usersService.loadDefaultPurchaser() || '';
    this.settingsForm = this.fb.group({
      defaultPurchaser: [initialPurchaser, Validators.required],
    });
  }

}
