export class NoteDetector {
  getUserMedia() {
    return navigator.mediaDevices.getUserMedia({ audio: true });
  }
}