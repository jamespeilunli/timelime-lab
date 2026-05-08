import { useCallback, useMemo, useState } from "react";
import archiveMark from "./assets/archive-mark.svg";
import { EVENTS, STARTING_EVENT_IDS } from "./events";

const BEST_SCORE_KEY = "apush-timeline-lab-best";
const EVENT_BY_ID = new Map(EVENTS.map((event) => [event.id, event]));
const STARTING_ID_SET = new Set(STARTING_EVENT_IDS);
const TOTAL_PLAYABLE_EVENTS = EVENTS.length - STARTING_EVENT_IDS.length;

function compareEvents(a, b) {
  return a.year - b.year || a.order - b.order;
}

function shuffleEvents(events) {
  const pool = [...events];

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  return pool;
}

function loadBestScore() {
  try {
    return Number(window.localStorage.getItem(BEST_SCORE_KEY)) || 0;
  } catch {
    return 0;
  }
}

function saveBestScore(score) {
  try {
    window.localStorage.setItem(BEST_SCORE_KEY, String(score));
  } catch {
    // Private browsing can block localStorage. The game still works without it.
  }
}

function createGame() {
  const timeline = STARTING_EVENT_IDS.map((id) => EVENT_BY_ID.get(id))
    .filter(Boolean)
    .sort(compareEvents);
  const deck = shuffleEvents(
    EVENTS.filter((event) => !STARTING_ID_SET.has(event.id)),
  );

  return {
    currentEvent: deck[0],
    failedAttempt: null,
    feedback: null,
    lastPlacedId: null,
    remainingDeck: deck.slice(1),
    score: 0,
    status: "playing",
    timeline,
  };
}

function isCorrectPlacement(event, timeline, slotIndex) {
  const before = timeline[slotIndex - 1];
  const after = timeline[slotIndex];
  const afterFits = !after || event.year <= after.year;
  const beforeFits = !before || event.year >= before.year;

  return beforeFits && afterFits;
}

function getCorrectSlots(event, timeline) {
  const slots = [];

  for (let index = 0; index <= timeline.length; index += 1) {
    if (isCorrectPlacement(event, timeline, index)) {
      slots.push(index);
    }
  }

  return slots;
}

function insertAt(items, index, item) {
  return [...items.slice(0, index), item, ...items.slice(index)];
}

function describeSlot(timeline, slotIndex) {
  const before = timeline[slotIndex - 1];
  const after = timeline[slotIndex];

  if (before && after) {
    return `between ${before.dateLabel} ${before.title} and ${after.dateLabel} ${after.title}`;
  }

  if (after) {
    return `before ${after.dateLabel} ${after.title}`;
  }

  if (before) {
    return `after ${before.dateLabel} ${before.title}`;
  }

  return "on an empty timeline";
}

function App() {
  const [bestScore, setBestScore] = useState(loadBestScore);
  const [game, setGame] = useState(createGame);

  const remainingCount = game.currentEvent ? game.remainingDeck.length + 1 : 0;
  const progressPercent = Math.round(
    (game.score / TOTAL_PLAYABLE_EVENTS) * 100,
  );

  const handleNewGame = useCallback(() => {
    setGame(createGame());
  }, []);

  const updateBestScore = useCallback(
    (nextScore) => {
      if (nextScore <= bestScore) {
        return;
      }

      setBestScore(nextScore);
      saveBestScore(nextScore);
    },
    [bestScore],
  );

  const handlePlace = useCallback(
    (slotIndex) => {
      if (game.status !== "playing" || game.currentEvent === null) {
        return;
      }

      const event = game.currentEvent;
      const correct = isCorrectPlacement(event, game.timeline, slotIndex);

      if (!correct) {
        const correctSlots = getCorrectSlots(event, game.timeline);

        setGame({
          ...game,
          failedAttempt: {
            correctSlots,
            event,
            slotIndex,
          },
          feedback: null,
          status: "lost",
        });

        return;
      }

      const nextScore = game.score + 1;
      const nextTimeline = insertAt(game.timeline, slotIndex, event);
      const [nextEvent, ...nextDeck] = game.remainingDeck;
      const won = !nextEvent;

      setGame({
        ...game,
        currentEvent: nextEvent ?? null,
        feedback: {
          event,
          slotIndex,
          type: "correct",
        },
        lastPlacedId: event.id,
        remainingDeck: nextDeck,
        score: nextScore,
        status: won ? "won" : "playing",
        timeline: nextTimeline,
      });

      updateBestScore(nextScore);
    },
    [game, updateBestScore],
  );

  return (
    <div className="app-shell">
      <TopBar
        bestScore={bestScore}
        onNewGame={handleNewGame}
        remainingCount={remainingCount}
        score={game.score}
      />

      <main className="game-layout">
        <section className="play-panel" aria-label="Current event">
          <CurrentEventPanel
            event={game.currentEvent}
            onNewGame={handleNewGame}
            progressPercent={progressPercent}
            remainingCount={remainingCount}
            score={game.score}
            status={game.status}
            totalPlayableEvents={TOTAL_PLAYABLE_EVENTS}
          />

          <FeedbackPanel
            failedAttempt={game.failedAttempt}
            feedback={game.feedback}
            status={game.status}
            timeline={game.timeline}
          />
        </section>

        <TimelineBoard
          currentEvent={game.currentEvent}
          lastPlacedId={game.lastPlacedId}
          onPlace={handlePlace}
          status={game.status}
          timeline={game.timeline}
        />
      </main>
    </div>
  );
}

function TopBar({ bestScore, onNewGame, remainingCount, score }) {
  return (
    <header className="top-bar">
      <a className="brand" href="/" aria-label="APUSH Timeline Lab home">
        <img src={archiveMark} alt="" className="brand-mark" />
        <span>
          <span className="brand-kicker">APUSH</span>
          <span className="brand-name">Timeline Lab</span>
        </span>
      </a>

      <div className="top-stats" aria-label="Game stats">
        <StatPill label="Score" value={score} />
        <StatPill label="Best" value={bestScore} />
        <StatPill label="Left" value={remainingCount} />
      </div>

      <button className="ghost-button top-reset" type="button" onClick={onNewGame}>
        New game
      </button>
    </header>
  );
}

function StatPill({ label, value }) {
  return (
    <span className="stat-pill">
      <span className="stat-label">{label}</span>
      <strong>{value}</strong>
    </span>
  );
}

function CurrentEventPanel({
  event,
  onNewGame,
  progressPercent,
  remainingCount,
  score,
  status,
  totalPlayableEvents,
}) {
  const heading =
    status === "won"
      ? "Archive complete"
      : status === "lost"
        ? "Run ended"
        : "Undated event";

  return (
    <div className="current-card">
      <div className="current-card-header">
        <span className="eyebrow">{heading}</span>
        <span className="score-lockup">
          <strong>{score}</strong>
          <span>placed</span>
        </span>
      </div>

      {event && status === "playing" ? (
        <article>
          <h1>{event.title}</h1>
          <p className="current-description">{event.description}</p>
        </article>
      ) : (
        <GameStatusCopy status={status} />
      )}

      <div className="progress-block" aria-label="Progress">
        <div className="progress-meta">
          <span>{progressPercent}% complete</span>
          <span>
            {remainingCount} of {totalPlayableEvents} left
          </span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {status !== "playing" ? (
        <button className="primary-button full-width" type="button" onClick={onNewGame}>
          Start another run
        </button>
      ) : null}
    </div>
  );
}

function GameStatusCopy({ status }) {
  if (status === "won") {
    return (
      <article>
        <h1>Every event found its place.</h1>
        <p className="current-description">
          The full study deck is now ordered on the timeline.
        </p>
      </article>
    );
  }

  return (
    <article>
      <h1>The timeline caught a mismatch.</h1>
      <p className="current-description">
        Review the revealed date and start again when ready.
      </p>
    </article>
  );
}

function FeedbackPanel({ failedAttempt, feedback, status, timeline }) {
  const content = useMemo(() => {
    if (status === "lost" && failedAttempt) {
      const [firstCorrectSlot] = failedAttempt.correctSlots;

      return {
        action: null,
        description: `You placed it ${describeSlot(timeline, failedAttempt.slotIndex)}.`,
        kicker: "Actual date",
        tone: "danger",
        title: `${failedAttempt.event.dateLabel} - ${failedAttempt.event.title}`,
        truth:
          firstCorrectSlot === undefined
            ? ""
            : `Correct slot: ${describeSlot(timeline, firstCorrectSlot)}.`,
      };
    }

    if (status === "won") {
      return {
        action: null,
        description: "The complete APUSH deck is in chronological order.",
        kicker: "Cleared",
        tone: "success",
        title: "No events left",
        truth: "",
      };
    }

    if (feedback) {
      return {
        action: null,
        description: `${feedback.event.dateLabel} is now in the timeline.`,
        kicker: "Correct",
        tone: "success",
        title: feedback.event.title,
        truth: "",
      };
    }

    return {
      action: null,
      description: "Pick one insertion slot in the timeline.",
      kicker: "Next move",
      tone: "neutral",
      title: "Find the chronological gap",
      truth: "",
    };
  }, [failedAttempt, feedback, status, timeline]);

  return (
    <aside className={`feedback-panel ${content.tone}`} aria-live="polite">
      <div>
        <span className="feedback-kicker">{content.kicker}</span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        {content.truth ? <p className="truth-line">{content.truth}</p> : null}
      </div>
      {content.action}
    </aside>
  );
}

function TimelineBoard({ currentEvent, lastPlacedId, onPlace, status, timeline }) {
  return (
    <section className="timeline-board" aria-label="Timeline">
      <div className="timeline-board-header">
        <div>
          <span className="eyebrow">Timeline</span>
          <h2>Build the order</h2>
        </div>
        <span className="timeline-count">{timeline.length} revealed</span>
      </div>

      <div className="timeline-list">
        {timeline.map((event, index) => (
          <TimelineRow
            currentEvent={currentEvent}
            event={event}
            index={index}
            isLastPlaced={event.id === lastPlacedId}
            key={event.id}
            onPlace={onPlace}
            status={status}
            timeline={timeline}
          />
        ))}

        <PlacementSlot
          after={null}
          before={timeline[timeline.length - 1]}
          currentEvent={currentEvent}
          index={timeline.length}
          onPlace={onPlace}
          status={status}
        />
      </div>
    </section>
  );
}

function TimelineRow({
  currentEvent,
  event,
  index,
  isLastPlaced,
  onPlace,
  status,
  timeline,
}) {
  return (
    <>
      <PlacementSlot
        after={event}
        before={timeline[index - 1]}
        currentEvent={currentEvent}
        index={index}
        onPlace={onPlace}
        status={status}
      />
      <TimelineEventCard event={event} isLastPlaced={isLastPlaced} />
    </>
  );
}

function PlacementSlot({ after, before, currentEvent, index, onPlace, status }) {
  const disabled = status !== "playing" || currentEvent === null;
  const slotText = getSlotText(before, after);

  return (
    <button
      className="placement-slot"
      disabled={disabled}
      onClick={() => onPlace(index)}
      type="button"
    >
      <span className="slot-line" aria-hidden="true" />
      <span className="slot-copy">
        <strong>Place here</strong>
        <span>{slotText}</span>
      </span>
    </button>
  );
}

function getSlotText(before, after) {
  if (before && after) {
    return `${before.dateLabel} to ${after.dateLabel}`;
  }

  if (after) {
    return `before ${after.dateLabel}`;
  }

  if (before) {
    return `after ${before.dateLabel}`;
  }

  return "start";
}

function TimelineEventCard({ event, isLastPlaced }) {
  return (
    <article className={`timeline-event ${isLastPlaced ? "recent" : ""}`}>
      <div className="timeline-date">
        <span>{event.dateLabel}</span>
      </div>
      <div className="timeline-content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </article>
  );
}

export default App;
