import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface UploadedFile {
  name: string;
  size: number;
  file: File;
  uploading: boolean;
  uploaded: boolean;
  expanded: boolean;
  progress: number;
}
@Component({
  selector: 'app-file-upload',
  imports: [FormsModule, CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  constructor() {
    this.simulateFileUpload();
  }
  @Output() closeDropdown = new EventEmitter<void>();
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFileType: string = '';
  fileTypeOptions = [
    { value: '', label: 'Select Option' },
    { value: 'memo', label: 'Memo' },
    { value: 'policy List', label: 'Policy List' },
    { value: 'correspondence', label: 'Correspondence' },
    { value: 'others', label: 'Others' },
  ];
  uploadedFiles: UploadedFile[] = [];
  maxFileSize: number = 2 * 1024 * 1024; // 2MB in bytes
  allowedFileTypes: string[] = [
    '.zip',
    '.xlsx',
    '.xls',
    '.doc',
    '.docx',
    '.pdf',
  ];
  onCloseClick(): void {
    this.closeDropdown.emit();
  }
  private simulateFileUpload(): void {
    const uploadingFile = this.uploadedFiles.find((file) => file.uploading);
    if (uploadingFile) {
      const interval = setInterval(() => {
        uploadingFile.progress += Math.random() * 5;

        if (uploadingFile.progress >= 100) {
          uploadingFile.progress = 100;
          uploadingFile.uploading = false;
          uploadingFile.uploaded = true;
          clearInterval(interval);
        }
      }, 1000);
    }
  }
  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.processSelectedFiles(files);
    }
    target.value = '';
  }

  private processSelectedFiles(files: FileList): void {
    Array.from(files).forEach((file) => {
      if (file.size > this.maxFileSize) {
        alert(`File "${file.name}" is too large. Maximum size is 2MB.`);
        return;
      }

      // Validate file type
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!this.allowedFileTypes.includes(fileExtension || '')) {
        alert(
          `File type not allowed. Please select Zip, Excel, Doc, or PDF files.`
        );
        return;
      }

      this.addFileToQueue(file);
    });
  }

  private addFileToQueue(file: File): void {
    const uploadedFile: UploadedFile = {
      name: file.name,
      size: file.size,
      file: file,
      uploading: true,
      uploaded: false,
      expanded: false,
      progress: 0,
    };

    this.uploadedFiles.push(uploadedFile);
    this.startFileUpload(uploadedFile);
  }

  private startFileUpload(file: UploadedFile): void {
    const uploadInterval = setInterval(() => {
      file.progress += Math.random() * 15;

      if (file.progress >= 100) {
        file.progress = 100;
        file.uploading = false;
        file.uploaded = true;
        clearInterval(uploadInterval);
      }
    }, 500);
  }

  removeFile(index: number): void {
    if (confirm('Are you sure you want to remove this file?')) {
      this.uploadedFiles.splice(index, 1);
    }
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processSelectedFiles(files);
    }
  }
}
