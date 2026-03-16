import type { Technician } from "../types";

interface FloorFiltersProps {
  technicianId: string;
  onTechnicianChange: (technicianId: string) => void;
  technicians: Technician[];
  dateLabel: string;
  onPreviousDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
}

export function FloorFilters({
  technicianId,
  onTechnicianChange,
  technicians,
  dateLabel,
  onPreviousDay,
  onNextDay,
  onToday,
}: FloorFiltersProps) {
  return (
    <div className="toolbar" role="group" aria-label="Floor filters">
      <div className="field">
        <span id="shop-day-label">Shop day</span>
        <div>
          <button type="button" className="ghost" onClick={onPreviousDay}>
            Previous day
          </button>{" "}
          <button type="button" className="primary" onClick={onToday}>
            Today
          </button>{" "}
          <button type="button" className="ghost" onClick={onNextDay}>
            Next day
          </button>
        </div>
        <strong aria-labelledby="shop-day-label">{dateLabel}</strong>
      </div>
      <div className="field">
        <label htmlFor="tech-filter">Technician</label>
        <select
          id="tech-filter"
          value={technicianId}
          onChange={(event) => onTechnicianChange(event.target.value)}
        >
          <option value="all">All bays</option>
          {technicians.map((technician) => (
            <option key={technician.id} value={technician.id}>
              {technician.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
