---
sidebar_position: 1
title: Introduction
slug: /console-timer
---

The `console.time` and `console.timeEnd` functions allow you to log the
timing of named operations to the browser's developer tools console. You
call `console.time("foo")` when the operation begins, and call
`console.timeEnd("foo")` when it finishes.

Additionally, these measurements will show up in your browser's profiler's
"timeline" or "waterfall" view.

[See MDN for more info](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers).

This API wraps both the `time` and `timeEnd` calls into a single type
named `ConsoleTimer`, ensuring both are called.

### Scoped Measurement

Wrap code to be measured in a closure with `ConsoleTimer::scope`.

```rust
use gloo_console_timer::ConsoleTimer;

let value = ConsoleTimer::scope("foo", || {
    // Place code to be measured here
    // Optionally return a value.
});
```

### RAII-Style Measurement

For scenarios where `ConsoleTimer::scope` can't be used, like with
asynchronous operations, you can use `ConsoleTimer::new` to create a timer.
The measurement ends when the timer object goes out of scope / is dropped.

```rust
use gloo_console_timer::ConsoleTimer;
use gloo_timers::callback::Timeout;

// Start timing a new operation.
let timer = ConsoleTimer::new("foo");

// And then asynchronously finish timing.
let timeout = Timeout::new(1_000, move || {
    drop(timer);
});
```
