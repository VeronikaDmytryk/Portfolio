import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'contacts',
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss']
})
export class ContactComponent {
  constructor(private http: Http) {}
  baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScBm_9eC3QVjwj5CUdPvfmX5iD7vGPohDZobIWxtFo9BVf0IQ/formResponse?"
  name_google = "entry.889281906";
  email_google = "entry.278553536";
  message_google = "entry.865624051";
  success = false;

  onSubmit(f: NgForm) {
    var submitURL = (this.baseURL + this.name_google + "=" + f.value.name + "&" + this.email_google + "=" + f.value.email + "&" + this.message_google + "=" + f.value.message) + "&submit=Submit";
    console.log(submitURL);
    this.http.post(submitURL, "").subscribe(data => {
      this.success = true;
    });
    f.reset();
  }
}

