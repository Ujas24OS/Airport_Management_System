SELECT * FROM Visitors;
SELECT * FROM Flights;
SELECT * FROM Gates;
SELECT * FROM EntryLog;
SELECT
    v.name,
    f.flight_number,
    f.destination,
    g.gate_name,
    e.entry_time,
    e.security_status
FROM EntryLog e
JOIN Visitors v
ON e.visitor_id = v.visitor_id
JOIN Flights f
ON e.flight_id = f.flight_id
JOIN Gates g
ON e.gate_id = g.gate_id;

SELECT *
FROM EntryLog
WHERE security_status = 'Cleared';

SELECT
    g.gate_name,
    COUNT(*) AS TotalPassengers
FROM EntryLog e
JOIN Gates g
ON e.gate_id = g.gate_id
GROUP BY g.gate_name;

SELECT *
FROM Flights
ORDER BY departure_time;



