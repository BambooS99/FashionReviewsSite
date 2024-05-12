import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @ViewChild('dropdownbtn', { static: true })
  dropdownbtn!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    console.log(this.dropdownbtn.nativeElement);
  }
  toggleDropdownbtn(): void {
    //this is used to toggle the dropdown visibility
    const dropdownContent = this.dropdownbtn.nativeElement.nextElementSibling;
    if (dropdownContent) {
      dropdownContent.classList.toggle('show');
    }
  }
}
