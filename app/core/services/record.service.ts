import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { RecordData } from '../../models/record.model';
import { SECTION_CONFIGS } from '../../data/section';

@Injectable({ providedIn: 'root' })
export class RecordService {
  private records$ = new BehaviorSubject<RecordData[]>([]);
  private activeId$ = new BehaviorSubject<string | null>(null);

  readonly recordsStream$ = this.records$.asObservable();
  readonly activeIdStream$ = this.activeId$.asObservable();

  constructor(@Inject(PLATFORM_ID) private plat: any) {
    if (isPlatformBrowser(this.plat)) this.load();
  }

  private load() {
    const r = localStorage.getItem('records');
    const a = localStorage.getItem('activeRecordId');
    if (r) this.records$.next(JSON.parse(r));
    if (a) this.activeId$.next(a);
  }

  private save() {
    if (!isPlatformBrowser(this.plat)) return;
    localStorage.setItem('records', JSON.stringify(this.records$.value));
    if (this.activeId$.value)
      localStorage.setItem('activeRecordId', this.activeId$.value);
  }

  addNewRecord() {
    const all = this.records$.value; // existing records
    const isFirst = all.length === 0; // are we creating the very first record?
    const last = all[all.length - 1]; // to copy values from, if any

    const newRec: RecordData = {
      id: Date.now().toString(),
      fields: {},
      tempFields: {},
      isEditing: {},
      rincOfferDropdown: '',
      rincOfferArea: '',
      nflDropdown: '',
      nflArea: '',
      policyDropdown: '',
      policyArea: '',
      quoteSheetDropdown: '',
      quoteSheetArea: '',
      quoteRequestDropdown: '',
      quoteRequestArea: '',
      rincFaqDropdown: '',
      rincFaqArea: '',
      additionalDropdown: '',
      additionalArea: '',
      caPolicyBuybackArea: '',
      landingSpotEndorsementsArea: '',
      landingSpotRidersArea: '',
      costSharingEndorsementArea: '',
      cnnfbEndorsementsArea: '',
    };

    SECTION_CONFIGS.forEach((sec) => {
      sec.columns.forEach((col) => {
        const val = last?.fields[col] ?? '';
        newRec.fields[col] = val;
        newRec.tempFields[col] = val;
      });

      // mark ALL sections editable if it's the first ever record,
      // otherwise none (so user can click “Edit” per‐section later)
      newRec.isEditing[sec.title] = isFirst;
    });

    this.records$.next([...all, newRec]);
    this.activeId$.next(newRec.id);
    this.save();
  }

  selectRecord(id: string) {
    this.activeId$.next(id);
    this.save();
  }

  startEdit(id: string, section: string) {
    const updated = this.records$.value.map((r) => {
      if (r.id !== id) return r;
      const sec = SECTION_CONFIGS.find((s) => s.title === section)!;
      sec.columns.forEach((c) => (r.tempFields[c] = r.fields[c]));
      r.isEditing[section] = true;
      return r;
    });
    this.records$.next(updated);
  }

  saveActiveRecord() {
    const act = this.activeId$.value;
    if (!act) return;
    const updated = this.records$.value.map((r) => {
      if (r.id !== act) return r;
      SECTION_CONFIGS.forEach((sec) => {
        sec.columns.forEach((c) => (r.fields[c] = r.tempFields[c]));
        r.isEditing[sec.title] = false;
      });
      return r;
    });
    this.records$.next(updated);
    this.save();
  }

  isAnySectionEditing(r: RecordData): boolean {
    return Object.values(r.isEditing).some((v) => v);
  }
}
