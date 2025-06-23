import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RecordData } from '../../models/record.model';
import { Project } from '../../models/project.model';
import { SECTION_CONFIGS } from '../../data/section';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects$ = new BehaviorSubject<Project[]>([]);
  private activeProjId$ = new BehaviorSubject<string | null>(null);

  readonly projectsStream$ = this.projects$.asObservable();
  readonly activeProjIdStream$ = this.activeProjId$.asObservable();

  addProject() {
    const all = this.projects$.value;
    const next = all.length + 1;
    const p: Project = {
      id: Date.now().toString(),
      name: `Lighthouse ${next}`,
      records: [],
      activeRecordId: null,
    };
    this.projects$.next([...all, p]);
    this.activeProjId$.next(p.id);
    console.log('Projects after addProject:', this.projects$.value);
  }

  selectProject(id: string) {
    this.activeProjId$.next(id);
  }

  addRecord() {
    const projId = this.activeProjId$.value;
    if (!projId) return;
    const ps = [...this.projects$.value];
    const proj = ps.find((x) => x.id === projId)!;
    const last = proj.records[proj.records.length - 1] ?? null;
    const isFirst = proj.records.length === 0;

    const rec: RecordData = {
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
      sec.columns.forEach((c) => {
        const v = last?.fields[c] ?? '';
        rec.fields[c] = v;
        rec.tempFields[c] = v;
      });
      rec.isEditing[sec.title] = isFirst;
    });

    proj.records.push(rec);
    proj.activeRecordId = rec.id;
    this.projects$.next(ps);
    console.log('Projects after addRecord:', this.projects$.value);
  }

  selectRecord(recId: string) {
    const projId = this.activeProjId$.value;
    if (!projId) return;
    const ps = [...this.projects$.value];
    const proj = ps.find((x) => x.id === projId)!;
    proj.activeRecordId = recId;
    this.projects$.next(ps);
  }

  startEdit(section: string) {
    const projId = this.activeProjId$.value;
    if (!projId) return;
    const ps = [...this.projects$.value];
    const proj = ps.find((x) => x.id === projId)!;
    const r = proj.records.find((x) => x.id === proj.activeRecordId)!;
    SECTION_CONFIGS.find((s) => s.title === section)!.columns.forEach(
      (c) => (r.tempFields[c] = r.fields[c])
    );
    r.isEditing[section] = true;
    this.projects$.next(ps);
  }

  saveRecord() {
    const projId = this.activeProjId$.value;
    if (!projId) return;
    const ps = [...this.projects$.value];
    const proj = ps.find((x) => x.id === projId)!;
    const r = proj.records.find((x) => x.id === proj.activeRecordId)!;
    SECTION_CONFIGS.forEach((sec) => {
      sec.columns.forEach((c) => (r.fields[c] = r.tempFields[c]));
      r.isEditing[sec.title] = false;
    });
    this.projects$.next(ps);
    console.log('Projects after saveRecord:', this.projects$.value);
  }

  isAnySectionEditing(r: RecordData) {
    return Object.values(r.isEditing).some((v) => v);
  }
}
